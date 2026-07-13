import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollReveal from '@/components/ScrollReveal';
import { getSortedThoughts } from '@/lib/thoughts';

export default function Home() {
  const recentThoughts = getSortedThoughts().slice(0, 2);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full flex-grow flex flex-col">
      <ScrollReveal />

      {/* Header Section */}
      <header className="flex justify-between items-center py-6 sm:py-10 border-b border-border-main">
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight leading-none text-text-primary">
            EMMANUEL ANDY EZE
          </h1>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">
            Full-Stack Software Engineer
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link 
            href="/thoughts" 
            className="text-[10px] font-bold tracking-wider text-text-muted hover:text-text-primary uppercase transition-colors"
          >
            Thoughts
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Frontpage Hero Section */}
      <section className="py-12 sm:py-16 border-b border-border-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
          <div className="lg:col-span-7 pr-0 lg:pr-12 lg:border-r border-border-main flex items-center reveal-hero-headline">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight text-text-primary">
              Engineering high-fidelity web & mobile products from scratch.
            </h2>
          </div>
          <div className="lg:col-span-5 pl-0 lg:pl-12 flex flex-col justify-between gap-8 lg:gap-10">
            <div className="text-base sm:text-lg leading-relaxed text-text-muted flex flex-col gap-4 sm:gap-5 reveal-bio">
              <p>
                I bridge the gap between clean software architecture and business realities. Specializing in high-performance TypeScript systems (Next.js, React Native, NestJS, Express), I design and build secure transactional networks, interactive visual engines, and mobile applications that scale seamlessly.
              </p>
              <p className="text-xs sm:text-sm">
                With a background in building finance portals, multi-vendor marketplaces, and WhatsApp-integrated SaaS platforms, I design systems that optimize operations and reduce transaction friction.
              </p>

              {/* Call to Actions (CTAs) in Hero */}
              <div className="flex gap-4 items-center pt-2">
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Contract%20Inquiry" className="bg-text-primary text-bg-paper px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-accent hover:text-bg-paper transition-all duration-200">
                  Hire Me ↗
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-eze-55833b216/" target="_blank" rel="noopener noreferrer" className="border border-border-main px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-pill-hover transition-all duration-200">
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 pt-6 border-t border-border-main reveal-stats">
              <div className="pr-4 sm:pr-8 border-r border-border-main flex flex-col gap-1">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-accent leading-none">12+</span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-text-muted uppercase">Production Apps Shipped</span>
              </div>
              <div className="pl-4 sm:pl-8 flex flex-col gap-1">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-accent leading-none">5+ Years</span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-text-muted uppercase">Professional Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Banner */}
      <div className="overflow-hidden py-4 border-b border-border-main select-none">
        <div className="whitespace-nowrap flex">
          <div className="animate-marquee inline-block pr-8 font-bold text-[10px] sm:text-xs tracking-widest text-text-muted uppercase">
            NEXT.JS • REACT NATIVE • EXPO • NESTJS • NODE.JS • POSTGRESQL • MONGODB • FLUTTERWAVE • GEOSPATIAL MAPS • WHATSAPP INTEGRATION • NEXT.JS • REACT NATIVE • EXPO • NESTJS • NODE.JS • POSTGRESQL • MONGODB • FLUTTERWAVE • GEOSPATIAL MAPS • WHATSAPP INTEGRATION
          </div>
        </div>
      </div>

      {/* Portfolio Grid Section */}
      <section className="py-16 sm:py-20 border-b border-border-main" id="portfolio">
        <div className="flex justify-between items-baseline pb-4 mb-10 sm:mb-12 border-b border-border-main">
          <h3 className="text-xs sm:text-sm font-bold tracking-widest text-text-primary uppercase">SELECTED WORKS</h3>
          <span className="font-serif italic text-xs sm:text-sm text-text-muted">FOLIO VOL. I (2021 - PRESENT)</span>
        </div>

        <div className="grid grid-cols-12 border-l border-r border-border-main">

          {/* Project 1: Tradeet (Featured Wide) */}
          <article className="col-span-12 p-6 sm:p-12 hover:bg-card-hover border-b border-border-main transition-all duration-300 flex flex-col gap-6 sm:gap-8 project-card-reveal">
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="font-serif text-lg sm:text-2xl font-light text-text-muted leading-none">01</span>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">FINTECH / WHATSAPP OS</span>
                <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary">
                  <a href="https://tradeet.ng" target="_blank" rel="noopener noreferrer" className="border-b-2 border-transparent hover:border-text-primary transition-all duration-200">
                    Tradeet
                  </a>
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-7 pr-0 lg:pr-12 lg:border-r border-border-main flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-text-primary">
                <p>
                  A conversational finance and inventory management OS enabling freelancers and small business owners to run their business directly inside WhatsApp.
                </p>
                <p className="text-xs sm:text-sm text-text-muted">
                  Engineered the NLP parsing engine to convert messages (including shorthand and Pidgin) into structured ledger logs, paired with automated A4 PDF invoicing and a web analytics dashboard.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5 pb-3 border-b border-border-sub">
                  <span className="text-[9px] font-bold tracking-wider text-text-muted uppercase">Role</span>
                  <span className="text-xs sm:text-sm font-semibold">Lead Full-Stack Developer</span>
                </div>
                <div className="flex flex-col gap-1.5 pb-3 border-b border-border-sub">
                  <span className="text-[9px] font-bold tracking-wider text-text-muted uppercase">Stack</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono">Next.js, Node.js, Express, TypeScript, WhatsApp Cloud API, MongoDB, Recharts</span>
                </div>
                <div className="flex flex-col gap-1.5 pb-3 border-b border-border-sub">
                  <span className="text-[9px] font-bold tracking-wider text-text-muted uppercase">Availability</span>
                  <span className="text-xs sm:text-sm font-semibold text-accent flex items-center gap-1.5">
                    Live • Active Users
                  </span>
                </div>

                {/* Tradeet CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="https://tradeet.ng" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold border-b-2 border-text-primary pb-0.5 hover:text-accent hover:border-accent transition-all duration-200">
                    View Live Platform ↗
                  </a>
                  <a href="https://wa.me/2348141898230?text=Hello%20Tradeet%2C%20I%20want%20to%20get%20started%20with%20my%20smart%20business%20OS!" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-accent border-b-2 border-accent pb-0.5 hover:text-text-primary hover:border-text-primary transition-all duration-200">
                    Launch on WhatsApp ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Project 2: Yunimall */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b lg:border-r border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">02</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">E-COMMERCE / LOGISTICS</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    <a href="https://app.yuni-mall.com" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">
                      Yunimall
                    </a>
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A multi-vendor e-commerce platform tailored for university alumni networks, featuring vendor document verification and automated transaction splitting.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Cart Splitting Logic</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Flutterwave Integration</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">NIN Verification Portal</span>
              </div>
            </div>

            {/* Yunimall CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Next.js 15, React 19, MongoDB</span>
              <div className="flex gap-4">
                <a href="https://app.yuni-mall.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live App ↗
                </a>
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20Yunimall%20E-Commerce" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Request Code Access ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 3: Afrosoundtrack */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">03</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">GEOSPATIAL / DATA VIS</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    <a href="https://afrosoundtrack.com" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">
                      Afrosoundtrack
                    </a>
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A tracking and music distribution analytics platform featuring dynamic map layers mapping sound streams globally.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Deck.gl Mapping Layers</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Biometric React Native App</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">PostgreSQL + Mongo Sync</span>
              </div>
            </div>

            {/* Afrosoundtrack CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Expo, Leaflet, PostgreSQL, Redis</span>
              <div className="flex gap-4">
                <a href="https://afrosoundtrack.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live Site ↗
                </a>
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20Afrosoundtrack%20Geospatial%20Platform" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Request Demo Access ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 4: AuditMe */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b lg:border-r border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">04</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">SAAS / FINANCIAL AUDITING</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    <a href="https://auditme.com.ng" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">
                      AuditMe
                    </a>
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A secure, two-sided auditing marketplace that streamlines report delivery times between corporations and certified auditors.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">7-Day Audit Delivery</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Secure document upload</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Compliance Log tracking</span>
              </div>
            </div>

            {/* AuditMe CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Next.js, Node.js, Express, MongoDB</span>
              <div className="flex gap-4">
                <a href="https://auditme.com.ng" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live Site ↗
                </a>
                <a href="https://app.auditme.com.ng/register-auditor" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Auditor Sign Up ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 5: Diagknos */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">05</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">HEALTHTECH / PORTAL</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary"><a href="https://diagknos.com" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">Diagknos</a></h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A diagnostics appointment portal mapping clinics dynamically by proximity, with automated reminders.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Google Places proximity sorting</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Twilio & Resend reminders</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Supertest Integration tests</span>
              </div>
            </div>

            {/* Diagknos CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Next.js, Express, MongoDB, Twilio</span>
              <div className="flex gap-4">
                <a href="https://diagknos.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live Site ↗
                </a>
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20Diagknos%20HealthTech%20Platform" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Request Code Access ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 6: ServiceDome */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b lg:border-r border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">06</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">ON-DEMAND / MOBILE APP</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">ServiceDome</h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                An on-demand service marketplace app linking independent professionals with local clients in real time.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Expo GPS coordinates tracking</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">60fps Gesture Handler UI</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Zustand state synchronization</span>
              </div>
            </div>

            {/* ServiceDome CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Expo, Reanimated, Node, MongoDB</span>
              <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20ServiceDome%20On-Demand%20Platform" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                Request Code Access ↗
              </a>
            </div>
          </article>

          {/* Project 7: Pepcode */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">07</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">FINANCE / POS APPLICATION</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    <a href="https://pepcodeinc.com/" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">
                      Pepcode
                    </a>
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A Finance web application designed to automate sales records, track purchases, log inventory, and offer POS terminal checkouts.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Automated Sales Inflow/Outflow Ledger</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Real-time Stock alerts</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">NestJS Enterprise API</span>
              </div>
            </div>

            {/* Pepcode CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">NestJS, TypeScript, React, MongoDB</span>
              <div className="flex gap-4">
                <a href="https://pepcodeinc.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live Site ↗
                </a>
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20Pepcode%20Financial%20Platform" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Request Demo Access ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 8: Owa by Pepcode */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b lg:border-r border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">08</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">FINANCIAL INCLUSION / BOOKKEEPING</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    <a href="https://owabypepcode.com.ng" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">
                      Owa by Pepcode
                    </a>
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A hybrid agent-assisted bookkeeping and financial inclusion network helping market women track sales, manage stock, and log expenses without requiring smartphones.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Serverless Sheets API</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Google Service Accounts</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Offline-First Design</span>
              </div>
            </div>

            {/* Owa CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Next.js 15, Google Auth API, Tailwind</span>
              <div className="flex gap-4">
                <a href="https://owabypepcode.com.ng" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live Site ↗
                </a>
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20Owa%20Bookkeeping%20Platform" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Request Code Access ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 9: HT Legal Advisory */}
          <article className="col-span-12 lg:col-span-6 p-6 sm:p-12 hover:bg-card-hover border-b border-border-main transition-all duration-300 flex flex-col justify-between gap-6 project-card-reveal">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg sm:text-xl font-light text-text-muted leading-none">09</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-text-muted uppercase">LEGAL SAAS / CONTENT ENGINE</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                    <a href="https://htlegal.com.ng" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-text-primary transition-all">
                      HT Legal Advisory
                    </a>
                  </h4>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                A corporate commercial legal consulting platform providing digital client intake, legal article publishing, and online appointment booking.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Sanity.io Headless CMS</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">NextAuth Control Filters</span>
                <span className="text-[9px] font-semibold px-2.5 py-1 bg-pill-bg hover:bg-pill-hover rounded-full transition-colors">Cloudinary Storage Pipeline</span>
              </div>
            </div>

            {/* HT Legal CTAs */}
            <div className="flex justify-between items-center border-t border-dashed border-border-main pt-4 mt-2">
              <span className="text-[10px] sm:text-xs font-mono text-text-muted">Next.js 14, Sanity CMS, NextAuth, MongoDB</span>
              <div className="flex gap-4">
                <a href="https://htlegal.com.ng" target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent transition-all pb-0.5">
                  View Live Site ↗
                </a>
                <a href="mailto:emmanuel.andyeze@gmail.com?subject=Inquiry%20regarding%20HT%20Legal%20Platform" className="text-xs font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary transition-all pb-0.5">
                  Request Code Access ↗
                </a>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Engineering Philosophy Section */}
      <section className="py-16 sm:py-20 border-b border-border-main">
        <div className="flex justify-between items-baseline pb-4 mb-10 border-b border-border-main">
          <h3 className="text-xs sm:text-sm font-bold tracking-widest text-text-primary uppercase">ENGINEERING ETHOS</h3>
          <span className="font-serif italic text-xs sm:text-sm text-text-muted">HOW I WORK</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="p-6 sm:p-12 pl-0 flex flex-col gap-4 lg:border-r border-border-main border-b lg:border-b-0 last:border-r-0 philosophy-card-reveal">
            <span className="font-serif text-2xl italic font-normal text-accent">I</span>
            <h5 className="font-serif text-xl sm:text-2xl font-semibold">Clean System Architecture</h5>
            <p className="text-sm text-text-muted leading-relaxed">
              I prioritize modular, maintainable structure over fast hacks. By utilizing structured frameworks like NestJS and Express.js and typing codebases with TypeScript, I ensure software remains extensible, testable, and stable under load.
            </p>
          </div>
          <div className="p-6 sm:p-12 flex flex-col gap-4 lg:border-r border-border-main border-b lg:border-b-0 last:border-r-0 philosophy-card-reveal">
            <span className="font-serif text-2xl italic font-normal text-accent">II</span>
            <h5 className="font-serif text-xl sm:text-2xl font-semibold">Transactional Rigor</h5>
            <p className="text-sm text-text-muted leading-relaxed">
              Financial ledger split calculations, POS checkouts, and document audit processing require transaction safety. I design database schema constraints, dual DB pipelines, and integration test protocols (using Jest/Supertest) to protect data integrity.
            </p>
          </div>
          <div className="p-6 sm:p-12 pr-0 flex flex-col gap-4 philosophy-card-reveal">
            <span className="font-serif text-2xl italic font-normal text-accent">III</span>
            <h5 className="font-serif text-xl sm:text-2xl font-semibold">Frictionless UX & Integration</h5>
            <p className="text-sm text-text-muted leading-relaxed">
              A software backend is only as good as its delivery context. Whether building heavy map visuals (Deck.gl), native animations (60fps React Native Reanimated), or WhatsApp message processors, I design APIs that create cohesive user journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-16 border-b border-border-main">
        <div className="flex justify-between items-baseline pb-4 mb-10 border-b border-border-main">
          <h3 className="text-xs sm:text-sm font-bold tracking-widest text-text-primary uppercase">PROFESSIONAL TIMELINE</h3>
          <span className="font-serif italic text-xs sm:text-sm text-text-muted">CONTRACTS & ENGAGEMENTS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-start timeline-reveal">
          <div className="lg:col-span-3 pr-8 lg:border-r border-border-main border-b lg:border-b-0 pb-4 lg:pb-0 mb-6 lg:mb-0 flex flex-col gap-1">
            <span className="font-serif text-xl sm:text-2xl font-bold">2021 — PRESENT</span>
            <span className="text-[10px] font-bold tracking-wider text-text-muted uppercase">FREELANCE / CONTRACT</span>
          </div>
          <div className="lg:col-span-9 pl-0 lg:pl-12 flex flex-col gap-4">
            <h5 className="font-serif text-2xl sm:text-3xl font-semibold">Lead Full-Stack Software Engineer</h5>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Architected and launched 12+ production systems across Fintech, E-Commerce, HealthTech, and EdTech domains. Integrated third-party networks (Flutterwave, Google API, Twilio, Cloudinary), developed secure RESTful/WebSocket web servers, and authored end-to-end unit and integration test scripts.
            </p>
          </div>
        </div>
      </section>

      {/* Thoughts Section */}
      <section className="py-16 sm:py-20 border-b border-border-main thoughts-reveal" id="thoughts">
        <div className="flex justify-between items-baseline pb-4 mb-10 sm:mb-12 border-b border-border-main">
          <h3 className="text-xs sm:text-sm font-bold tracking-widest text-text-primary uppercase">RECENT THOUGHTS</h3>
          <Link href="/thoughts" className="font-serif italic text-xs sm:text-sm text-accent hover:text-text-primary transition-colors">
            View All Thoughts →
          </Link>
        </div>

        {recentThoughts.length === 0 ? (
          <div className="text-center py-8">
            <p className="font-serif italic text-base text-text-muted">No thoughts published yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {recentThoughts.map((thought) => (
              <article key={thought.slug} className="flex flex-col justify-between gap-4 p-6 sm:p-8 hover:bg-card-hover border border-border-main rounded-xl transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-text-muted uppercase">
                    {new Date(thought.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} • {thought.readingTime}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary leading-tight">
                    <Link href={`/thoughts/${thought.slug}`} className="hover:text-accent transition-colors">
                      {thought.title}
                    </Link>
                  </h4>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                    {thought.description}
                  </p>
                </div>
                <Link href={`/thoughts/${thought.slug}`} className="text-xs font-bold border-b border-text-primary hover:text-accent hover:border-accent w-max pb-0.5 mt-2 transition-all">
                  Read Article ↗
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="py-16 sm:py-24 footer-reveal">
        <div className="pb-12 sm:pb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-text-primary max-w-[800px]">
            <a href="mailto:emmanuel.andyeze@gmail.com?subject=Project%20Collaboration" className="hover:text-accent transition-all duration-300">
              Let's build something exceptional.
            </a>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 pt-10 border-t border-border-main gap-8 lg:gap-0 items-start">
          <div className="lg:col-span-5 pr-0 lg:pr-12 lg:border-r border-border-main flex flex-col gap-2">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-text-muted uppercase">OPEN TO DISCUSS</span>
            <p className="text-sm sm:text-base text-text-muted leading-normal">
              Full-Stack Roles, Technical Lead Opportunities, and Contract Projects.
            </p>
          </div>
          <div className="lg:col-span-7 pl-0 lg:pl-12 flex flex-col gap-12 items-start lg:items-end w-full">
            <div className="flex flex-wrap gap-6 sm:gap-10 items-center">
              <a href="mailto:emmanuel.andyeze@gmail.com" className="font-serif text-xl sm:text-2xl italic hover:text-accent border-b-2 border-transparent hover:border-accent transition-all duration-200">
                emmanuel.andyeze@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-eze-55833b216/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold hover:text-accent border-b-2 border-transparent hover:border-accent transition-all duration-200">
                LinkedIn ↗
              </a>
              <a href="https://github.com/emmanuelandyeze" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold hover:text-accent border-b-2 border-transparent hover:border-accent transition-all duration-200">
                GitHub ↗
              </a>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-text-muted uppercase">
              © 2026 EMMANUEL ANDY EZE. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
