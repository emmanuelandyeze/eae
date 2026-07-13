import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Thought {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  contentHtml: string;
  readingTime: string;
}

const thoughtsDirectory = path.join(process.cwd(), 'content/thoughts');

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s+/).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  return `${minutes} min read`;
}

export function getSortedThoughts(): Omit<Thought, 'contentHtml'>[] {
  // Ensure directory exists
  if (!fs.existsSync(thoughtsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(thoughtsDirectory);
  const allThoughtsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(thoughtsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      const { data, content } = matter(fileContents);
      const readingTime = calculateReadingTime(content);

      // Default slug to filename without extension if not provided in frontmatter
      const slug = data.slug || fileName.replace(/\.md$/, '');

      return {
        title: data.title || 'Untitled',
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
        slug,
        readingTime,
      };
    });

  // Sort thoughts by date descending
  return allThoughtsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getThoughtBySlug(slug: string): Promise<Thought | null> {
  try {
    const targetFileName = `${slug}.md`;
    const filePath = path.join(thoughtsDirectory, targetFileName);

    if (!fs.existsSync(filePath)) {
      // Fallback search in case slug doesn't match file name exactly
      const fileNames = fs.readdirSync(thoughtsDirectory);
      const matchedFile = fileNames.find((fileName) => {
        const fullPath = path.join(thoughtsDirectory, fileName);
        const contents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(contents);
        return data.slug === slug || fileName.replace(/\.md$/, '') === slug;
      });

      if (!matchedFile) return null;
      return getThoughtBySlug(matchedFile.replace(/\.md$/, ''));
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const contentHtml = await marked(content);
    const readingTime = calculateReadingTime(content);

    return {
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      tags: data.tags || [],
      slug,
      contentHtml,
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading thought by slug: ${slug}`, error);
    return null;
  }
}
