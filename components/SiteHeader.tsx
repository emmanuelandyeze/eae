import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { ArrowUpRight } from './Icons';

interface NavItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  /** Section links shown on the home page; inner pages pass their own. */
  links?: NavItem[];
}

const HOME_LINKS: NavItem[] = [
  { label: 'Selected Work', href: '/#work' },
  { label: 'Stack & Systems', href: '/#skills' },
  { label: 'Practice Areas', href: '/#practice' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Thoughts', href: '/thoughts' },
];

export default function SiteHeader({ links = HOME_LINKS }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-bg-paper/85 backdrop-blur-md border-b border-border-main">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-sm sm:text-base font-semibold tracking-tight text-text-primary group-hover:text-accent-ink transition-colors">
            Emmanuel Eze
          </span>
          <span className="eyebrow mt-1 text-[9px] sm:text-[10px]">Technical Partner</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm text-text-muted hover:text-text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/2347034343002?text=Hi%20Emmanuel%2C%20I'd%20like%20to%20scope%20an%20MVP%20sprint%20for%20my%20product"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-1.5 bg-accent text-accent-contrast px-4 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/15 active:scale-95 transition-all duration-200"
          >
            Scope Your MVP <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
