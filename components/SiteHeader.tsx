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
  { label: 'Work', href: '/#work' },
  { label: 'Skills', href: '/#skills' },
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
          <span className="eyebrow mt-1 text-[9px] sm:text-[10px]">Software Engineer</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:emmanuel.andyeze@gmail.com?subject=Project%20Enquiry"
            className="hidden sm:inline-flex items-center gap-1.5 bg-accent text-accent-contrast px-4 py-2.5 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity"
          >
            Start a project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
