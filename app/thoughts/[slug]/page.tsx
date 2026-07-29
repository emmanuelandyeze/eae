import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getThoughtBySlug } from '@/lib/thoughts';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ArrowLeft, ArrowUpRight } from '@/components/Icons';
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
      title: 'Not Found',
      description: 'Thought not found.',
    };
  }

  return {
    title: `${thought.title} — Emmanuel Eze`,
    description: thought.description,
  };
}

/** Shared prose styling for the rendered markdown body. */
const PROSE = `text-text-primary text-lg leading-relaxed
  [&_p]:mb-6 [&_p]:text-text-muted [&_p]:leading-[1.75]
  [&_h1]:text-3xl sm:[&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-text-primary [&_h1]:mt-12 [&_h1]:mb-6
  [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-text-primary [&_h2]:mt-12 [&_h2]:mb-4
  [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-text-primary [&_h3]:mt-10 [&_h3]:mb-4
  [&_strong]:font-semibold [&_strong]:text-text-primary
  [&_em]:italic
  [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:my-8 [&_blockquote]:text-text-primary
  [&_code]:font-mono [&_code]:text-sm [&_code]:bg-surface [&_code]:text-text-primary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:border [&_code]:border-border-main
  [&_pre]:bg-surface [&_pre]:p-5 sm:[&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-border-main [&_pre]:mb-8 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:border-0
  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-text-muted [&_li]:mb-2
  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:text-text-muted
  [&_hr]:border-t [&_hr]:border-border-main [&_hr]:my-12
  [&_a]:text-accent-ink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-text-primary`;

export default async function ThoughtPage({ params }: PageProps) {
  const { slug } = await params;
  const thought = await getThoughtBySlug(slug);

  if (!thought) {
    notFound();
  }

  const isAdmin = await checkAdminAuth();

  return (
    <>
      <SiteHeader />

      <main className="flex-grow max-w-[1240px] mx-auto px-5 sm:px-8 w-full py-12 sm:py-20">
        <div className="max-w-[720px] mx-auto w-full">
          {isAdmin && <AdminControls slug={thought.slug} />}

          <Link
            href="/thoughts"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All thoughts
          </Link>

          <div className="flex flex-col gap-5 pb-10 mb-10 border-b border-border-main">
            <span className="text-xs text-text-muted">
              {new Date(thought.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
              {' · '}
              {thought.readingTime}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-text-primary">
              {thought.title}
            </h1>
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-light">
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

          <div
            className={PROSE}
            dangerouslySetInnerHTML={{ __html: thought.contentHtml }}
          />

          <div className="border-t border-border-main pt-10 mt-16 flex flex-wrap justify-between items-center gap-6">
            <Link
              href="/thoughts"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-accent-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All thoughts
            </Link>

            <a
              href={`mailto:emmanuel.andyeze@gmail.com?subject=${encodeURIComponent(
                `Regarding your article: ${thought.title}`
              )}`}
              className="inline-flex items-center gap-2 bg-accent text-accent-contrast px-5 py-3 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              Reply by email <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <SiteFooter compact />
    </>
  );
}
