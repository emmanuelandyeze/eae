import Link from 'next/link';
import { getSortedThoughts } from '@/lib/thoughts';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ArrowUpRight } from '@/components/Icons';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Thoughts — Emmanuel Eze',
  description:
    'Notes on building software that businesses actually use — written for anyone, not just engineers.',
};

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Thoughts', href: '/thoughts' },
];

export default function ThoughtsIndex() {
  const thoughts = getSortedThoughts();

  return (
    <>
      <SiteHeader links={NAV_LINKS} />

      <main className="flex-grow max-w-[1240px] mx-auto px-5 sm:px-8 w-full py-16 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
          <h1 className="display text-[15vw] sm:text-[9vw] lg:text-[7rem] text-text-primary">
            Thoughts
          </h1>
          <p className="text-sm sm:text-base text-text-muted max-w-[340px] sm:text-right sm:pb-4">
            Notes on building things that work — written to be readable whether
            or not you write code.
          </p>
        </div>

        {thoughts.length === 0 ? (
          <div className="border-t border-border-main py-24 text-center">
            <p className="text-lg text-text-muted">
              Nothing published yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            {thoughts.map((thought) => (
              <article
                key={thought.slug}
                className="group border-t border-border-main last:border-b"
              >
                <Link
                  href={`/thoughts/${thought.slug}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 sm:py-14 items-start"
                >
                  <div className="lg:col-span-3 text-xs text-text-muted">
                    {new Date(thought.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                    {' · '}
                    {thought.readingTime}
                  </div>

                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-text-primary group-hover:text-accent-ink transition-colors">
                      {thought.title}
                    </h2>
                    <p className="text-base text-text-muted leading-relaxed max-w-[640px]">
                      {thought.description}
                    </p>
                    {thought.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {thought.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1 rounded-full border border-border-main text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2 lg:text-right">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary group-hover:text-accent-ink transition-colors">
                      Read it <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <SiteFooter compact />
    </>
  );
}
