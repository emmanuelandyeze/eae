import Link from 'next/link';
import { getSortedThoughts } from '@/lib/thoughts';
import ThemeToggle from '@/components/ThemeToggle';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Thoughts — Emmanuel Andy Eze",
  description: "Engineering write-ups, architecture patterns, and product strategies for building high-fidelity software systems.",
};

export default function ThoughtsIndex() {
  const thoughts = getSortedThoughts();

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
            href="/"
            className="text-[10px] font-bold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors"
          >
            ← Back to Folio
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Thoughts Section */}
      <main className="py-16 sm:py-20 flex-grow">
        <div className="flex justify-between items-baseline pb-4 mb-10 sm:mb-12 border-b border-border-main">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-text-primary uppercase">THOUGHTS</h2>
          <span className="font-serif italic text-xs sm:text-sm text-text-muted">EDITORIAL INDEX</span>
        </div>

        {thoughts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif italic text-lg text-text-muted">No thoughts published yet. Check back soon.</p>
          </div>
        ) : (
          <div className="border-t border-border-main">
            {thoughts.map((thought) => (
              <article 
                key={thought.slug} 
                className="border-b border-border-main hover:bg-card-hover transition-colors duration-200"
              >
                <Link 
                  href={`/thoughts/${thought.slug}`}
                  className="grid grid-cols-1 md:grid-cols-12 py-8 sm:py-12 items-baseline gap-4 md:gap-8 px-4 sm:px-6"
                >
                  {/* Date Column */}
                  <div className="md:col-span-2 text-xs font-mono text-text-muted">
                    {new Date(thought.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>

                  {/* Title and Excerpt Column */}
                  <div className="md:col-span-8 flex flex-col gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary hover:text-accent transition-colors leading-tight">
                      {thought.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-[800px]">
                      {thought.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {thought.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[9px] font-semibold px-2 py-0.5 bg-pill-bg text-text-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read Time Column */}
                  <div className="md:col-span-2 text-right text-xs font-semibold tracking-wider text-text-muted uppercase hidden md:block">
                    {thought.readingTime}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
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
