import Link from 'next/link';
import { ArrowUpRight } from './Icons';

const YEAR = new Date().getFullYear();

/**
 * The closing call-to-action plus contact details. `compact` drops the
 * oversized headline for inner pages, which don't need a second pitch.
 */
export default function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="border-t border-border-main mt-auto">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {!compact && (
          <div className="py-20 sm:py-32 flex flex-col gap-10 footer-reveal">
            <span className="eyebrow">Available for new work</span>
            <h2 className="display text-[16vw] sm:text-[11vw] lg:text-[8.5rem] text-text-primary">
              Let&apos;s work
              <br />
              <span className="text-accent-ink">together</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-[560px] leading-relaxed">
              Have something you want built, or an idea you&apos;re still figuring out?
              Tell me about it — the first conversation is free and there&apos;s no
              obligation either way.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:emmanuel.andyeze@gmail.com?subject=Project%20Enquiry"
                className="inline-flex items-center gap-2 bg-accent text-accent-contrast px-6 py-3.5 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity"
              >
                Send me an email <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2347034343002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border-main text-text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent-ink transition-colors"
              >
                Message on WhatsApp <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        <div className="py-8 border-t border-border-main flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-xs text-text-muted">
            © {YEAR} Emmanuel Andy Eze
          </span>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="mailto:emmanuel.andyeze@gmail.com"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              emmanuel.andyeze@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-eze-55833b216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/emmanuelandyeze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/thoughts"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              Thoughts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
