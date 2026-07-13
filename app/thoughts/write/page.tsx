'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { marked } from 'marked';
import { 
  checkAdminAuth, 
  loginAdmin, 
  logoutAdmin, 
  getThoughtDetailsForEdit, 
  publishThought 
} from './actions';
import ThemeToggle from '@/components/ThemeToggle';

export default function WriteThought() {
  const router = useRouter();
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [editSlug, setEditSlug] = useState<string | undefined>(undefined);
  
  // View states
  const [preview, setPreview] = useState('');
  const [viewMode, setViewMode] = useState<'split' | 'edit' | 'preview'>('split');
  const [isPublishing, setIsPublishing] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // 1. Initial Authentication Check and URL Edit Param Check
  useEffect(() => {
    // Run theme check immediately on mount to load dark/light mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const init = async () => {
      // Check if logged in
      const auth = await checkAdminAuth();
      setIsAuthenticated(auth);

      if (auth) {
        // Check for edit query parameter from URL manually to prevent Suspense requirements
        const queryParams = new URLSearchParams(window.location.search);
        const editTarget = queryParams.get('edit');
        
        if (editTarget) {
          setMessage({ type: 'loading', text: `Loading '${editTarget}' from disk...` });
          const details = await getThoughtDetailsForEdit(editTarget);
          if (details) {
            setTitle(details.title);
            setDescription(details.description);
            setTags(details.tagsInput);
            setContent(details.content);
            setEditSlug(details.slug);
            setMessage({ type: '', text: '' });
          } else {
            setMessage({ type: 'error', text: `Failed to load thought: '${editTarget}'` });
          }
        }
      }
    };
    init();
  }, []);

  // 2. Update markdown preview dynamically on content change
  useEffect(() => {
    const parseContent = async () => {
      if (content.trim()) {
        try {
          const parsed = await marked.parse(content);
          setPreview(parsed);
        } catch (e) {
          setPreview("<p class='text-accent'>Error rendering preview...</p>");
        }
      } else {
        setPreview("<p class='text-text-muted italic'>Type markdown in the editor to see a preview here...</p>");
      }
    };
    parseContent();
  }, [content]);

  // Handle Passcode Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!passcode.trim()) return;

    try {
      const res = await loginAdmin(passcode);
      if (res.success) {
        setIsAuthenticated(true);
        // Refresh page params check in case they were waiting with an edit url
        const queryParams = new URLSearchParams(window.location.search);
        const editTarget = queryParams.get('edit');
        if (editTarget) {
          const details = await getThoughtDetailsForEdit(editTarget);
          if (details) {
            setTitle(details.title);
            setDescription(details.description);
            setTags(details.tagsInput);
            setContent(details.content);
            setEditSlug(details.slug);
          }
        }
      } else {
        setLoginError(res.message);
      }
    } catch (err) {
      console.error(err);
      setLoginError('Authentication service error.');
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await logoutAdmin();
    setIsAuthenticated(false);
    // Clear form states
    setTitle('');
    setDescription('');
    setTags('');
    setContent('');
    setEditSlug(undefined);
  };

  // Handle Form Submission
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setMessage({ type: 'error', text: 'Title and content are required.' });
      return;
    }

    setIsPublishing(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await publishThought(title, description, tags, content, editSlug);
      if (res.success && res.slug) {
        setMessage({ 
          type: 'success', 
          text: editSlug ? 'Changes saved! Redirecting to article...' : 'Published! Redirecting to article...' 
        });
        setTimeout(() => {
          router.push(`/thoughts/${res.slug}`);
        }, 1200);
      } else {
        setMessage({ type: 'error', text: res.message });
        setIsPublishing(false);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Failed to write markdown changes to disk.' });
      setIsPublishing(false);
    }
  };

  // Loading state block
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-bg-paper flex items-center justify-center">
        <p className="font-mono text-xs text-text-muted animate-pulse">VERIFYING ADMIN SESSION...</p>
      </div>
    );
  }

  // 1. Passcode Prompt Screen (If not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bg-paper flex flex-col justify-center items-center px-4 relative animate-fade-in">
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
        <div className="max-w-[400px] w-full border border-border-main rounded-xl p-8 bg-bg-paper flex flex-col gap-6 shadow-sm">
          <div className="flex flex-col gap-1 items-center text-center">
            <span className="text-[9px] font-bold tracking-widest text-accent uppercase bg-pill-bg px-2 py-0.5 rounded-full">
              Local Admin Gateway
            </span>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-text-primary mt-2">
              Enter Admin Passcode
            </h1>
            <p className="text-xs text-text-muted">
              Enter your passcode to enable thought publishing and document editing.
            </p>
          </div>

          {loginError && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-3 text-xs text-red-500 font-mono text-center">
              ⚠ {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <input 
                type="password" 
                placeholder="• • • • • •"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                required
                className="w-full bg-transparent border border-border-main hover:border-text-muted focus:border-text-primary rounded-lg px-4 py-2.5 text-center text-lg text-text-primary outline-none transition-colors"
                autoFocus
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-text-primary text-bg-paper hover:bg-accent hover:text-bg-paper transition-colors py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              Verify Session
            </button>
          </form>

          <Link href="/thoughts" className="text-center text-[10px] font-bold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors">
            ← Back to thoughts
          </Link>
        </div>
      </div>
    );
  }

  // 2. Main Writing Canvas (Authenticated)
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full flex-grow flex flex-col min-h-screen">
      
      {/* Header section */}
      <header className="flex justify-between items-center py-6 sm:py-10 border-b border-border-main">
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-bold tracking-widest text-accent uppercase bg-pill-bg px-2 py-0.5 rounded-full w-max">
            {editSlug ? `Editing: ${editSlug}` : 'Local Author Console'}
          </span>
          <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-text-primary mt-1">
            {editSlug ? 'Modify Published Thought' : 'Publish a New Thought'}
          </h1>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link 
            href="/thoughts"
            className="text-[10px] font-bold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors"
          >
            ← Cancel
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Editor Main Area */}
      <main className="flex-grow flex flex-col py-8 gap-6">
        
        {/* Messages */}
        {message.text && (
          <div className={`p-4 rounded-lg text-sm border font-mono ${
            message.type === 'success' 
              ? 'bg-green-500/10 border-green-500 text-green-500' 
              : message.type === 'loading'
                ? 'bg-blue-500/10 border-blue-500 text-blue-500 animate-pulse'
                : 'bg-red-500/10 border-red-500 text-red-500'
          }`}>
            {message.type === 'success' ? '✓' : message.type === 'loading' ? '○' : '⚠'} {message.text}
          </div>
        )}

        <form onSubmit={handlePublish} className="flex-grow flex flex-col gap-6">
          {/* Metadata Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border-main pb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-wider text-text-muted uppercase">Title</label>
              <input 
                type="text" 
                placeholder="e.g. Scaling Database Pools in Node.js"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-transparent border border-border-main hover:border-text-muted focus:border-text-primary rounded-lg px-4 py-2.5 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-wider text-text-muted uppercase">Description / Subtitle</label>
              <input 
                type="text" 
                placeholder="A short summarizing excerpt..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-transparent border border-border-main hover:border-text-muted focus:border-text-primary rounded-lg px-4 py-2.5 text-sm text-text-primary outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-wider text-text-muted uppercase">Tags (comma-separated)</label>
              <input 
                type="text" 
                placeholder="e.g. Architecture, Scale, Database"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-transparent border border-border-main hover:border-text-muted focus:border-text-primary rounded-lg px-4 py-2.5 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
          </div>

          {/* View Toggles and Controls */}
          <div className="flex justify-between items-center bg-pill-bg border border-border-main rounded-lg p-1.5 gap-4">
            <div className="flex gap-2 overflow-x-auto">
              <button 
                type="button"
                onClick={() => setViewMode('split')}
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md transition-colors ${viewMode === 'split' ? 'bg-bg-paper text-text-primary shadow-sm' : 'text-text-muted hover:text-text-primary'}`}
              >
                Split Layout
              </button>
              <button 
                type="button"
                onClick={() => setViewMode('edit')}
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md transition-colors ${viewMode === 'edit' ? 'bg-bg-paper text-text-primary shadow-sm' : 'text-text-muted hover:text-text-primary'}`}
              >
                Editor Only
              </button>
              <button 
                type="button"
                onClick={() => setViewMode('preview')}
                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md transition-colors ${viewMode === 'preview' ? 'bg-bg-paper text-text-primary shadow-sm' : 'text-text-muted hover:text-text-primary'}`}
              >
                Preview Only
              </button>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button 
                type="button"
                onClick={handleLogout}
                className="text-[10px] font-bold uppercase tracking-wider text-red-500 hover:text-red-600 px-3 py-1 transition-colors"
              >
                Logout
              </button>
              <button 
                type="submit" 
                disabled={isPublishing}
                className="bg-text-primary text-bg-paper hover:bg-accent hover:text-bg-paper disabled:bg-text-muted font-bold text-xs uppercase tracking-wider px-5 py-1.5 rounded-md transition-colors flex items-center gap-1.5"
              >
                {isPublishing 
                  ? 'Saving changes...' 
                  : editSlug 
                    ? 'Save Changes ↗' 
                    : 'Publish to Disk ↗'}
              </button>
            </div>
          </div>

          {/* Core Workspace Canvas */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[500px]">
            {/* Markdown Text Area */}
            {(viewMode === 'split' || viewMode === 'edit') && (
              <div className="flex flex-col gap-2 h-full">
                <textarea
                  placeholder="# Write your thoughts in markdown here...&#10;&#10;Use headings, code blocks, lists, and links as needed."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full flex-grow bg-transparent border border-border-main focus:border-text-primary rounded-xl p-6 font-mono text-sm leading-relaxed text-text-primary outline-none resize-none transition-colors h-full min-h-[400px]"
                />
              </div>
            )}

            {/* Live Markdown Preview */}
            {(viewMode === 'split' || viewMode === 'preview') && (
              <div className="border border-border-main rounded-xl p-6 overflow-y-auto h-full max-h-[70vh] bg-bg-paper">
                <div 
                  className="text-text-primary text-base leading-relaxed 
                    [&_p]:mb-6 [&_p]:text-text-muted [&_p]:leading-relaxed
                    [&_h1]:font-serif [&_h1]:text-3xl sm:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-text-primary [&_h1]:mt-8 [&_h1]:mb-6
                    [&_h2]:font-serif [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-text-primary [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:font-serif [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-text-primary [&_h3]:mt-8 [&_h3]:mb-4
                    [&_strong]:font-semibold [&_strong]:text-text-primary
                    [&_em]:italic
                    [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-text-muted
                    [&_code]:font-mono [&_code]:text-xs sm:[&_code]:text-sm [&_code]:bg-pill-bg [&_code]:text-text-primary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:border [&_code]:border-border-main
                    [&_pre]:bg-pill-bg [&_pre]:p-4 sm:[&_pre]:p-6 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border-main [&_pre]:mb-8 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:border-0
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-text-muted [&_li]:mb-2
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:text-text-muted
                    [&_hr]:border-t [&_hr]:border-border-main [&_hr]:my-10
                    [&_a]:text-accent [&_a]:underline hover:[&_a]:text-text-primary"
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              </div>
            )}
          </div>
        </form>
      </main>

    </div>
  );
}
