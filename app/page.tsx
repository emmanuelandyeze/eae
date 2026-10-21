import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, ArrowUpRight, MapPin } from '@/components/Icons';
import { metrics, projects, skillGroups } from '@/lib/projects';
import { getSortedThoughts } from '@/lib/thoughts';

const clientLogos = [
  {
    name: 'Tradeet',
    srcDark: '/clients/tradeet_dark.png',
    srcLight: '/clients/tradeet_light.png',
  },
  {
    name: 'YAAAS Agency',
    srcDark: '/clients/yaaas_dark.png',
    srcLight: '/clients/yaaas_light.png',
  },
  {
    name: 'Yunimall',
    srcDark: '/clients/yunimall_dark.png',
    srcLight: '/clients/yunimall_light.png',
  },
  {
    name: 'Afrosoundtrack',
    srcDark: '/clients/afrosoundtrack_dark.png',
    srcLight: '/clients/afrosoundtrack_light.png',
  },
  {
    name: 'AuditMe',
    srcDark: '/clients/auditme_dark.png',
    srcLight: '/clients/auditme_light.png',
  },
  {
    name: 'Diagknos',
    srcDark: '/clients/diagknos_dark.png',
    srcLight: '/clients/diagknos_light.png',
  },
  {
    name: 'Pepcode',
    srcDark: '/clients/pepcode_dark.png',
    srcLight: '/clients/pepcode_light.png',
  },
  {
    name: 'Owa by Pepcode',
    srcDark: '/clients/owa_dark.png',
    srcLight: '/clients/owa_light.png',
  },
  {
    name: 'HT Legal',
    srcDark: '/clients/htlegal_dark.png',
    srcLight: '/clients/htlegal_light.png',
  },
  {
    name: 'Arc9 Consult',
    srcDark: '/clients/arc9_dark.png',
    srcLight: '/clients/arc9_light.png',
  },
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
    title: '0-to-1 System Architecture',
    body: 'Designing clean, multi-tenant database models, secure APIs, and modular codebases that scale cleanly to your first 50,000 users without expensive rewrites. Proper architectural foundations mean future features take days instead of months.',
  },
  {
    title: 'Aggressive MVP Scoping',
    body: 'Over 60% of features in initial product roadmaps are vanity items that do not need to exist on launch day. I ruthlessly isolate your core value loop so you can ship a production-grade product in weeks rather than quarters.',
  },
  {
    title: 'Production-Grade Delivery',
    body: 'Full-stack engineering built with enterprise-grade auth (RBAC), rock-solid payment flows, background worker queues, and automated CI/CD pipelines. Never gamble on brittle prototypes that break when real traffic arrives.',
  },
  {
    title: 'Due Diligence & Hiring Support',
    body: 'When you hit the inflection point to hire in-house, you receive battle-tested repositories, automated test suites, and clean documentation. I help write engineering role specs, evaluate candidates, and hand over the codebase smoothly.',
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
        <section className="relative max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28 pb-16 sm:pb-24">
          {/* Subtle ambient light glow */}
          <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-accent/[0.035] blur-[140px] animate-glow-pulse" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-10 lg:gap-14 reveal-hero-headline">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border border-border-main transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <Image
                  src="/portrait.webp"
                  alt="Emmanuel Andy Eze"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 224px"
                  preload
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
              <h1
                className="display text-[11.5vw] sm:text-[4.4vw] md:text-[5vw] lg:text-[4rem] text-text-primary whitespace-normal sm:whitespace-nowrap"
                aria-label="Emmanuel Andy Eze"
              >
                <span className="block sm:inline">Emmanuel </span>
                <span className="block sm:inline">Andy Eze</span>
              </h1>
              <div className="flex flex-col gap-2">
                <span className="text-2xl sm:text-3xl lg:text-[2.25rem] font-medium tracking-tight leading-none text-accent-ink">
                  Technical Partner
                </span>
                <span className="eyebrow inline-flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-ink" />
                  <span>Lagos, Nigeria ·</span>
                  <span className="inline-flex items-center gap-1.5 text-text-primary">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    Available Globally
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-12 sm:mt-16 reveal-bio">
            <p className="lg:col-span-7 text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.45] text-text-primary font-light">
              Technical Partner to early-stage founders. I architect, scope, and
              ship production-grade 0-to-1 MVPs in 6–8 weeks.
            </p>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                I turn raw product ideas into scalable, investor-ready software — eliminating roadmap bloat so you launch on schedule without burning runway.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/2347034343002?text=Hi%20Emmanuel%2C%20I'd%20like%20to%20scope%20an%20MVP%20sprint%20for%20my%20product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-accent text-accent-contrast px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] transition-all duration-200"
                >
                  Scope Your MVP Sprint <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="mailto:emmanuel.andyeze@gmail.com?subject=MVP%20Sprint%20Scoping%20Inquiry&body=Hi%20Emmanuel%2C%0A%0AI'm%20planning%20a%20new%20build%20and%20would%20like%20to%20scope%20our%20MVP%20sprint."
                  className="group inline-flex items-center gap-2 border border-border-main text-text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent-ink hover:bg-surface/50 active:scale-[0.98] transition-all duration-200"
                >
                  Email Brief <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary px-2 py-3.5 text-sm font-medium transition-colors"
                >
                  See selected builds <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-accent-ink" />
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
                  className={`py-10 sm:py-14 px-4 sm:px-6 first:pl-0 lg:last:pr-0 flex flex-col justify-between border-border-main group transition-colors duration-300 hover:bg-surface/25 cursor-default ${METRIC_BORDERS[i]}`}
                >
                  <span className="display text-5xl sm:text-6xl lg:text-7xl text-accent-ink whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1 inline-block">
                    {metric.value}
                  </span>
                  <div className="flex flex-col gap-1 mt-3 sm:mt-4">
                    <span className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-ink transition-colors duration-200">
                      {metric.label}
                    </span>
                    <span className="text-xs text-text-muted leading-relaxed">
                      {metric.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Client Logos Marquee */}
        <div className="overflow-hidden py-7 sm:py-9 border-b border-border-main select-none bg-surface/30 group/marquee">
          <div className="whitespace-nowrap flex">
            <div className="animate-marquee group-hover/marquee:[animation-play-state:paused] inline-flex items-center">
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="inline-flex items-center justify-center shrink-0 px-8 sm:px-12 group cursor-pointer"
                  title={client.name}
                >
                  <Image
                    src={client.srcDark}
                    alt={`${client.name} logo`}
                    width={180}
                    height={48}
                    unoptimized
                    className="dark-only h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[170px] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  />
                  <Image
                    src={client.srcLight}
                    alt={`${client.name} logo`}
                    width={180}
                    height={48}
                    unoptimized
                    className="light-only h-8 sm:h-10 w-auto max-w-[130px] sm:max-w-[170px] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
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
            <p className="text-sm sm:text-base text-text-muted max-w-[340px] sm:text-right sm:pb-4">
              Ten production systems, architected and shipped end to end. All running live in production with active users and real transactions.
            </p>
          </div>

          <div className="flex flex-col">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group border-t border-border-main py-10 sm:py-14 project-card-reveal transition-colors duration-300 hover:bg-surface/20 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Snapshot of the live site */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border-main bg-surface transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-black/25">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`The ${project.name} platform`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      ) : (
                        // No public URL to capture — a typographic panel instead
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
                          <span className="display text-3xl sm:text-4xl text-text-muted">
                            {project.name}
                          </span>
                          <span className="eyebrow">Private client build</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Everything else */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-text-muted pt-2 transition-colors duration-200 group-hover:text-accent-ink">
                        {project.num}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h3
                          className={`display text-text-primary group-hover:text-accent-ink transition-colors duration-300 ${project.featured
                            ? 'text-4xl sm:text-5xl lg:text-[3.5rem]'
                            : 'text-3xl sm:text-4xl'
                            }`}
                        >
                          {project.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          <span className="eyebrow">{project.sector}</span>
                          <span className="inline-flex items-center gap-2 text-xs text-text-muted">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${project.status.startsWith('Live')
                                ? 'bg-accent'
                                : 'bg-text-muted'
                                }`}
                            />
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-text-primary leading-relaxed font-light">
                      {project.summary}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-2.5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm text-text-muted transition-colors duration-200 group-hover:text-text-primary"
                        >
                          <span className="text-accent-ink pt-0.5 leading-none">/</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 pt-2 border-t border-border-sub">
                      <div className="flex flex-col gap-1 pt-3">
                        <span className="eyebrow">Architecture & Stack</span>
                        <span className="text-sm text-text-muted">
                          {project.builtWith}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-5 pt-3">
                        {project.links.map((link) => {
                          const isExternal = link.href.startsWith('http');
                          return (
                            <a
                              key={link.href}
                              href={link.href}
                              {...(isExternal
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary border-b border-border-main hover:text-accent-ink hover:border-accent pb-0.5 transition-colors"
                            >
                              {link.label} <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                          );
                        })}
                      </div>
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
            <div className="mb-14 sm:mb-20">
              <span className="eyebrow block mb-3 sm:mb-4">Infrastructure & Systems</span>
              <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary">
                Battle-tested
                <br />
                stack
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-main border border-border-main skills-reveal">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="group bg-bg-paper p-8 sm:p-10 flex flex-col gap-4 hover:bg-surface-hover transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary group-hover:text-accent-ink transition-colors duration-300">
                    {group.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-grow">
                    {group.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-border-main text-text-muted hover:border-accent hover:text-accent-ink hover:bg-surface transition-all duration-200 cursor-default hover:scale-105 inline-block"
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
        <section id="practice" className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-32 scroll-mt-24">
          <div className="mb-14 sm:mb-20">
            <span className="eyebrow block mb-3 sm:mb-4">Strategic Practice</span>
            <h2 className="display text-[13vw] sm:text-[8vw] lg:text-[6rem] text-text-primary">
              Core practice
              <br />
              areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-main border border-border-main rounded-2xl overflow-hidden philosophy-card-reveal">
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                className="group bg-bg-paper p-8 sm:p-12 flex flex-col justify-between gap-6 hover:bg-surface-hover transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between border-b border-border-sub pb-4">
                    <span className="display text-4xl sm:text-5xl text-accent-ink transition-transform duration-300 group-hover:scale-110 inline-block origin-left">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="eyebrow">
                      Practice Area {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary group-hover:text-accent-ink transition-colors duration-300 pt-2">
                    {principle.title}
                  </h3>
                  <p className="text-base sm:text-lg text-text-muted leading-relaxed font-light">
                    {principle.body}
                  </p>
                </div>
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
              Technical
              <br />
              partnership
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-border-main pt-10 timeline-reveal">
              <div className="lg:col-span-4 flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
                  Technical Partner & Systems Architect
                </h3>
                <span className="eyebrow">2021 — Present · Practice Lead</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-5">
                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  I serve as lead technical partner and system architect for early-stage and venture-backed founders, overseeing system design, infrastructure, and product execution from inception through launch.
                </p>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  Currently guiding technical architecture, infrastructure, and delivery pipelines across concurrent startups spanning B2B SaaS, workflow automation, and marketplace platforms. I direct technical roadmaps, build-vs-buy decisions, and technical due diligence preparation while enforcing automated CI/CD testing pipelines and cloud cost efficiency.
                </p>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  When client companies reach the inflection point to hire in-house, I evaluate engineering candidates, conduct technical interviews, and transition the codebase smoothly to full-time engineering teams.
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
                  Architectural
                  <br />
                  notes
                </h2>
                <Link
                  href="/thoughts"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent-ink transition-colors sm:pb-4"
                >
                  Read all notes <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-main border border-border-main">
                {recentThoughts.map((thought) => (
                  <article
                    key={thought.slug}
                    className="group bg-bg-paper p-8 sm:p-10 flex flex-col gap-4 hover:bg-surface-hover transition-all duration-300 hover:shadow-lg"
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
                        className="group-hover:text-accent-ink transition-colors duration-200"
                      >
                        {thought.title}
                      </Link>
                    </h3>
                    <p className="text-base text-text-muted leading-relaxed flex-grow">
                      {thought.description}
                    </p>
                    <Link
                      href={`/thoughts/${thought.slug}`}
                      className="group/read inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary border-b border-border-main hover:text-accent-ink hover:border-accent pb-0.5 w-max mt-2 transition-colors"
                    >
                      Read it <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5" />
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
