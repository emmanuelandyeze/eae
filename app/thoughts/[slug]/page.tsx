import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSortedThoughts, getThoughtBySlug } from '@/lib/thoughts';
import ThemeToggle from '@/components/ThemeToggle';
import { checkAdminAuth } from '../write/actions';
import AdminControls from './AdminControls';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const thought = await getThoughtBySlug(slug);
  
  if (!thought) {
    return {
      title: "Not Found",
      description: "Thought not found.",
    };
  }

  return {
    title: `${thought.title} — Emmanuel Andy Eze`,
    description: thought.description,
  };
}

export default async function ThoughtPage({ params }: PageProps) {
  const { slug } = await params;
  const thought = await getThoughtBySlug(slug);

  if (!thought) {
    notFound();
  }

  const isAdmin = await checkAdminAuth();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full flex-grow flex flex-col">
      
      {/* Header Section */}
      <header className="flex justify-between items-center py-6 sm:py-10 border-b border-border-main">
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <Link href="/" className="font-serif text-2xl sm:text-4xl font-bold tracking-tight leading-none text-text-primary hover:text-accent transition-colors">
            EMMANUEL ANDY EZE
          </Link>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">
            Full-Stack Software Engineer
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link 
            href="/thoughts"
            className="text-[10px] font-bold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors"
          >
            ← Back to Index
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main thought content */}
      <main className="py-16 sm:py-20 flex-grow max-w-[800px] mx-auto w-full">
        {isAdmin && <AdminControls slug={thought.slug} />}
        
        {/* Meta Header */}
        <div className="flex flex-col gap-4 mb-8 sm:mb-12 pb-6 border-b border-border-main">
          <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
            <span>{new Date(thought.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
            <span>•</span>
            <span>{thought.readingTime}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
            {thought.title}
          </h1>
          <p className="text-lg text-text-muted italic leading-relaxed font-light">
            {thought.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {thought.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg text-text-muted rounded-full uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Rendered HTML Container */}
        <div 
          className="text-text-primary text-base sm:text-lg leading-relaxed 
            [&_p]:mb-6 [&_p]:text-text-muted [&_p]:leading-relaxed
            [&_h1]:font-serif [&_h1]:text-3xl sm:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-text-primary [&_h1]:mt-10 [&_h1]:mb-6
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
          dangerouslySetInnerHTML={{ __html: thought.contentHtml }}
        />

        {/* Back Link bottom */}
        <div className="border-t border-border-main pt-10 mt-16 flex justify-between items-center">
          <Link 
            href="/thoughts"
            className="text-xs sm:text-sm font-bold border-b-2 border-text-primary pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            ← Back to Editorial Index
          </Link>
          
          <a 
            href="mailto:emmanuel.andyeze@gmail.com?subject=Regarding%20your%20article%3A%20"
            className="text-xs sm:text-sm font-bold text-accent border-b-2 border-accent pb-0.5 hover:text-text-primary hover:border-text-primary transition-colors"
          >
            Reply via Email ↗
          </a>
        </div>

      </main>

      {/* Footer Section */}
      <footer className="py-10 border-t border-border-main flex justify-between items-center w-full mt-auto">
        <span className="text-[10px] font-semibold tracking-wider text-text-muted uppercase">
          © 2026 EMMANUEL ANDY EZE.
        </span>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-[10px] font-semibold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors">
            Folio
          </Link>
          <a href="https://www.linkedin.com/in/emmanuel-eze-55833b216/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>

    </div>
  );
}
