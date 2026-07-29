import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { metrics, projects, skillGroups } from '@/lib/projects';
import { getSortedThoughts } from '@/lib/thoughts';

const marqueeItems = [
  'Websites',
  'Phone apps',
  'Online stores',
  'Taking payments',
  'Booking systems',
  'Admin dashboards',
  'WhatsApp automation',
  'Custom software',
];

/**
 * Cell dividers for the metrics grid: two columns on mobile, four on desktop.
 * Written out per index because the mobile row break moves which edges need a
 * rule, and Tailwind needs the full class strings present in the source.
 */
const METRIC_BORDERS = [
  'border-r border-b lg:border-b-0',
  'border-b lg:border-b-0 lg:border-r',
  'border-r',
  '',
];

const principles = [
  {
    title: 'Built to last',
    body: 'I build software the way you would want a house built — proper foundations, so that adding a room in two years does not mean knocking the whole thing down. It costs a little more attention up front and saves a great deal later.',
  },
  {
    title: 'Careful with money',
    body: 'When a product handles payments, close enough is not good enough. Before a single naira moves, I have tested every path it can take — including the ones where the network drops halfway through.',
  },
  {
    title: 'Made for the person using it',
    body: 'The cleverest system in the world fails if the person on the other end finds it confusing. I design for the shop owner with one bar of signal, not for other engineers.',
  },
];

export default function Home() {
  const recentThoughts = getSortedThoughts().slice(0, 2);

  return (
    <>
      <ScrollReveal />
      <SiteHeader />

      <main className="flex-grow">
        {/* ---------------------------------------------------------- Hero */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28 pb-16 sm:pb-24">
          <div className="flex flex-col gap-8 reveal-hero-headline">
            <span className="eyebrow">Emmanuel Andy Eze — Lagos, Nigeria</span>
            <h1 className="display text-[17vw] sm:text-[12vw] lg:text-[9.5rem] text-text-primary">
              Software
              <br />
              <span className="text-accent-ink">engineer</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-12 sm:mt-16 reveal-bio">
            <p className="lg:col-span-7 text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.45] text-text-primary font-light">
              I build the websites, apps and behind-the-scenes systems that
              businesses run on — and I explain every bit of it in plain English.
            </p>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                Over the past five years I have helped shops sell online, clinics
                book patients, agencies show off their artists and market traders
                keep records. If you can describe the problem, I can build the
                thing that fixes it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:emmanuel.andyeze@gmail.com?subject=Project%20Enquiry"
                  className="inline-flex items-center gap-2 bg-accent text-accent-contrast px-6 py-3.5 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity"
                >
                  Start a project <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 border border-border-main text-text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent-ink transition-colors"
                >
                  See the work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- Metrics */}
        <section className="border-y border-border-main">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 reveal-stats">
              {metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`py-10 sm:py-14 px-4 sm:px-6 first:pl-0 lg:last:pr-0 flex flex-col gap-1 border-border-main ${METRIC_BORDERS[i]}`}
                >
                  <span className="display text-5xl sm:text-6xl lg:text-7xl text-accent-ink">
                    {metric.value}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-text-primary mt-2">
                    {metric.label}
                  </span>
                  <span className="text-xs text-text-muted leading-relaxed">
                    {metric.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- Marquee */}
        <div className="overflow-hidden py-6 border-b border-border-main select-none">
          <div className="whitespace-nowrap flex">
            <div className="animate-marquee inline-block">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="text-base sm:text-xl font-medium text-text-muted px-6"
                >
                  {item}
                  <span className="text-accent-ink pl-6">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- Work */}
        <section id="work" className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-32 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
            <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary">
              Selected
              <br />
              work
            </h2>
            <p className="text-sm sm:text-base text-text-muted max-w-[320px] sm:text-right sm:pb-4">
              Eleven products, built end to end. Ten of them are live and being
              used right now.
            </p>
          </div>

          <div className="flex flex-col">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group border-t border-border-main py-10 sm:py-14 project-card-reveal"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  {/* Name + sector */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <span className="text-xs font-mono text-text-muted pt-2">
                      {project.num}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`display text-text-primary group-hover:text-accent-ink transition-colors ${
                          project.featured
                            ? 'text-4xl sm:text-5xl lg:text-[3.5rem]'
                            : 'text-3xl sm:text-4xl'
                        }`}
                      >
                        {project.name}
                      </h3>
                      <span className="eyebrow">{project.sector}</span>
                      <span className="inline-flex items-center gap-2 text-xs text-text-muted mt-1">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status.startsWith('Live')
                              ? 'bg-accent'
                              : 'bg-text-muted'
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Summary + what it does */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <p className="text-base sm:text-lg text-text-primary leading-relaxed font-light">
                      {project.summary}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-text-muted"
                        >
                          <span className="text-accent-ink pt-0.5 leading-none">/</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Built with + links */}
                  <div className="lg:col-span-3 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <span className="eyebrow">Built with</span>
                      <span className="text-sm text-text-muted">
                        {project.builtWith}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start">
                      {project.links.map((link) => {
                        const isExternal = link.href.startsWith('http');
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            {...(isExternal
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary border-b border-border-main hover:text-accent-ink hover:border-accent pb-0.5 transition-colors"
                          >
                            {link.label} <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            ))}
            <div className="border-t border-border-main" />
          </div>
        </section>

        {/* --------------------------------------------------------- Skills */}
        <section
          id="skills"
          className="border-t border-border-main bg-surface scroll-mt-24"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-32">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
              <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary">
                What I
                <br />
                work with
              </h2>
              <p className="text-sm sm:text-base text-text-muted max-w-[340px] sm:text-right sm:pb-4">
                The tool names are here for anyone who wants them — but what
                matters is what each one lets your business do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-main border border-border-main skills-reveal">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="bg-bg-paper p-8 sm:p-10 flex flex-col gap-4 hover:bg-surface-hover transition-colors duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    {group.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-grow">
                    {group.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-border-main text-text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ Principles */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
            <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary">
              How I
              <br />
              work
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                className="flex flex-col gap-4 philosophy-card-reveal"
              >
                <span className="display text-5xl text-accent-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                  {principle.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------- Experience */}
        <section
          id="experience"
          className="border-t border-border-main scroll-mt-24"
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-32">
            <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary mb-14 sm:mb-20">
              5 years of
              <br />
              experience
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-border-main pt-10 timeline-reveal">
              <div className="lg:col-span-4 flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
                  Independent engineer
                </h3>
                <span className="eyebrow">2021 — Present</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-5">
                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  I work directly with the people who own the business — usually
                  founders and small teams — from the first sketch through to the
                  day it goes live and beyond. That means I do the whole job: the
                  part customers see, the part that stores the data, the payment
                  connections, and the dashboard your staff use every morning.
                </p>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  So far that has covered shops, clinics, law firms, auditors,
                  architects, musicians, creative agencies and market traders
                  across Nigeria and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- Thoughts */}
        {recentThoughts.length > 0 && (
          <section className="border-t border-border-main">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-32 thoughts-reveal">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
                <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary">
                  Recent
                  <br />
                  thoughts
                </h2>
                <Link
                  href="/thoughts"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent-ink transition-colors sm:pb-4"
                >
                  Read them all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-main border border-border-main">
                {recentThoughts.map((thought) => (
                  <article
                    key={thought.slug}
                    className="bg-bg-paper p-8 sm:p-10 flex flex-col gap-4 hover:bg-surface-hover transition-colors duration-300"
                  >
                    <span className="text-xs text-text-muted">
                      {new Date(thought.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                      {' · '}
                      {thought.readingTime}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-text-primary">
                      <Link
                        href={`/thoughts/${thought.slug}`}
                        className="hover:text-accent-ink transition-colors"
                      >
                        {thought.title}
                      </Link>
                    </h3>
                    <p className="text-base text-text-muted leading-relaxed flex-grow">
                      {thought.description}
                    </p>
                    <Link
                      href={`/thoughts/${thought.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary border-b border-border-main hover:text-accent-ink hover:border-accent pb-0.5 w-max mt-2 transition-colors"
                    >
                      Read it <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
