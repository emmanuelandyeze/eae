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
            <span className="eyebrow">Taking on select 0-to-1 venture builds</span>
            <h2 className="display text-[16vw] sm:text-[11vw] lg:text-[8.5rem] text-text-primary">
              Ready to ship
              <br />
              <span className="text-accent-ink">in 6–8 weeks?</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-muted max-w-[620px] leading-relaxed">
              Planning a new build or need your system architecture scoped? Let&apos;s eliminate
              vanity features, architect a resilient foundation, and launch your product into
              users&apos; hands without burning runway.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2347034343002?text=Hi%20Emmanuel%2C%20I'd%20like%20to%20scope%20an%20MVP%20sprint%20for%20my%20product"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-accent text-accent-contrast px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] transition-all duration-200"
              >
                Scope on WhatsApp <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:emmanuel.andyeze@gmail.com?subject=MVP%20Sprint%20Scoping%20Inquiry&body=Hi%20Emmanuel%2C%0A%0AI'm%20planning%20a%20new%20build%20and%20would%20like%20to%20scope%20our%20MVP%20sprint."
                className="group inline-flex items-center gap-2 border border-border-main text-text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent-ink hover:bg-surface/50 active:scale-[0.98] transition-all duration-200"
              >
                Email Product Brief <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        )}

        <div className="py-8 border-t border-border-main flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-xs text-text-muted">
            © {YEAR} Emmanuel Andy Eze · Technical Partner
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
