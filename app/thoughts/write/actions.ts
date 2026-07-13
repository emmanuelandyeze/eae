'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const thoughtsDir = path.join(process.cwd(), 'content/thoughts');

export interface AuthResult {
  success: boolean;
  message: string;
}

export interface PublishResult {
  success: boolean;
  message: string;
  slug?: string;
}

// 1. Check Admin Session Authentication status
export async function checkAdminAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return session?.value === 'true';
}

// 2. Perform Passcode Login
export async function loginAdmin(passcode: string): Promise<AuthResult> {
  const expectedPassword = process.env.THOUGHTS_PASSWORD || 'admin';
  
  if (passcode === expectedPassword) {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    return { success: true, message: "Authenticated successfully." };
  }
  
  return { success: false, message: "Incorrect passcode." };
}

// 3. Clear Admin Session Logout
export async function logoutAdmin(): Promise<AuthResult> {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  return { success: true, message: "Logged out." };
}

// 4. Fetch raw metadata/content details for edit
export async function getThoughtDetailsForEdit(slug: string) {
  try {
    const isAuthenticated = await checkAdminAuth();
    if (!isAuthenticated) {
      throw new Error("Unauthorized access.");
    }

    const filePath = path.join(thoughtsDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Manual basic frontmatter parsing to avoid import issues or extra dependencies
    const lines = fileContents.split('\n');
    let title = '';
    let description = '';
    let tagsInput = '';
    let contentStartIdx = 0;
    
    if (lines[0] === '---') {
      let i = 1;
      while (i < lines.length && lines[i] !== '---') {
        const line = lines[i];
        if (line.startsWith('title:')) {
          title = line.substring(6).trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
        } else if (line.startsWith('description:')) {
          description = line.substring(12).trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
        } else if (line.startsWith('tags:')) {
          const tagsStr = line.substring(5).trim();
          try {
            const parsedTags = JSON.parse(tagsStr);
            tagsInput = Array.isArray(parsedTags) ? parsedTags.join(', ') : tagsStr;
          } catch {
            tagsInput = tagsStr.replace(/[\[\]"]/g, '');
          }
        }
        i++;
      }
      contentStartIdx = i + 1;
    }
    
    const content = lines.slice(contentStartIdx).join('\n').trim();

    return {
      title,
      description,
      tagsInput,
      content,
      slug
    };
  } catch (error) {
    console.error("Error reading details for edit:", error);
    return null;
  }
}

// 5. Create or Update a Thought file
export async function publishThought(
  title: string,
  description: string,
  tagsInput: string,
  content: string,
  editSlug?: string
): Promise<PublishResult> {
  try {
    // Check auth status first
    const isAuthenticated = await checkAdminAuth();
    if (!isAuthenticated) {
      return { success: false, message: "Unauthorized. Please log in first." };
    }

    if (!title.trim() || !content.trim()) {
      return { success: false, message: "Title and Content are required." };
    }

    // Determine target slug
    let finalSlug = editSlug;
    
    if (!finalSlug) {
      // Create new slug
      const baseSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      finalSlug = baseSlug || `thought-${Date.now()}`;
      
      // Ensure unique filename
      let filePath = path.join(thoughtsDir, `${finalSlug}.md`);
      let counter = 1;
      while (fs.existsSync(filePath)) {
        finalSlug = `${baseSlug}-${counter}`;
        filePath = path.join(thoughtsDir, `${finalSlug}.md`);
        counter++;
      }
    }

    const filePath = path.join(thoughtsDir, `${finalSlug}.md`);

    // Parse tags list
    const tags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const currentDate = new Date().toISOString().split('T')[0];

    const escapedTitle = title.replace(/"/g, '\\"');
    const escapedDesc = description.replace(/"/g, '\\"');
    const tagsJson = JSON.stringify(tags);

    const fileContent = `---
title: "${escapedTitle}"
date: "${currentDate}"
description: "${escapedDesc}"
tags: ${tagsJson}
slug: "${finalSlug}"
---
${content}
`;

    // Ensure directory exists
    if (!fs.existsSync(thoughtsDir)) {
      fs.mkdirSync(thoughtsDir, { recursive: true });
    }

    // Write file to disk
    fs.writeFileSync(filePath, fileContent, 'utf8');

    // Clear caches
    revalidatePath('/');
    revalidatePath('/thoughts');
    revalidatePath(`/thoughts/${finalSlug}`);

    return {
      success: true,
      message: editSlug ? "Thought updated successfully!" : "Thought published successfully!",
      slug: finalSlug
    };
  } catch (error) {
    console.error("Error writing thought:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred writing file."
    };
  }
}

// 6. Delete a Thought file from disk
export async function deleteThought(slug: string): Promise<PublishResult> {
  try {
    const isAuthenticated = await checkAdminAuth();
    if (!isAuthenticated) {
      return { success: false, message: "Unauthorized. Please log in first." };
    }

    const filePath = path.join(thoughtsDir, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      
      // Revalidate cache index
      revalidatePath('/');
      revalidatePath('/thoughts');
      revalidatePath(`/thoughts/${slug}`);
      
      return { success: true, message: "Thought deleted successfully." };
    }
    
    return { success: false, message: "Thought file not found on disk." };
  } catch (error) {
    console.error("Error deleting file:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete file from disk."
    };
  }
}
