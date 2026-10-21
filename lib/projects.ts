export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Two-digit index shown beside the name */
  num: string;
  name: string;
  /** Sector / domain */
  sector: string;
  /** Strategic overview of the system and architectural problem solved */
  summary: string;
  /** Core architectural & delivery highlights */
  highlights: string[];
  /** Battle-tested stack powering the build */
  builtWith: string;
  status: string;
  links: ProjectLink[];
  /**
   * Screenshot of the live site, in `public/projects`. Omitted for work with
   * no public URL to capture — those render a typographic panel instead.
   */
  image?: string;
  /** Featured entries get the full-width treatment */
  featured?: boolean;
}

const SCOPE_MAIL = 'mailto:emmanuel.andyeze@gmail.com?subject=';

export const projects: Project[] = [
  {
    num: '01',
    name: 'Tradeet',
    sector: 'Conversational Commerce & Micro-ERP',
    summary:
      'Engineered an event-driven conversational OS that turns WhatsApp into a complete transactional point-of-sale and micro-ERP for merchants. Merchants record sales, manage inventory, and generate digital invoices via natural text messages without leaving WhatsApp.',
    highlights: [
      'Event-driven webhook engine parsing natural-language sales in real time',
      'Dynamic PDF invoice generation and automated customer dispatch',
      'Multi-tenant merchant dashboard with live telemetry and inventory tracking',
    ],
    builtWith: 'WhatsApp Cloud API, Next.js, Node.js, Webhooks, PostgreSQL',
    image: '/projects/tradeet-v2.webp',
    status: 'Live, with paying users',
    links: [
      { label: 'Visit the platform', href: 'https://tradeet.ng' },
      {
        label: 'Test WhatsApp engine',
        href: 'https://wa.me/2348141898230?text=Hello%20Tradeet%2C%20I%20want%20to%20get%20started%20with%20my%20smart%20business%20OS!',
      },
    ],
    featured: true,
  },
  {
    num: '02',
    name: 'YAAAS Agency',
    sector: 'Creative Roster & Asset Management',
    summary:
      'Architected the digital platform and high-performance asset distribution hub for an international agency representing African creative talent. Built with a decoupled headless architecture, enabling non-technical agency staff to manage artist rosters and licensing portfolios autonomously.',
    highlights: [
      'Decoupled CMS architecture removing developer intervention for content operations',
      'Optimized multimedia pipeline handling streaming music and high-res artwork',
      'Role-based administrative portal with audit logs and media curation workflows',
    ],
    builtWith: 'Next.js, MongoDB, Cloudinary CDN, Tailwind CSS',
    image: '/projects/yaaas.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit the site', href: 'https://yaaas.co' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20YAAAS%20Agency%20Architecture` },
    ],
    featured: true,
  },
  {
    num: '03',
    name: 'Yunimall',
    sector: 'Multi-Vendor Marketplace & Settlement',
    summary:
      'Designed and shipped a multi-vendor marketplace engine featuring a unified shopping cart and automated payment splitting. Customers execute a single checkout transaction across multiple independent merchants, while the settlement engine calculates commissions and triggers automated merchant payouts.',
    highlights: [
      'Unified multi-vendor checkout with automated payout splitting at settlement',
      'Automated KYC onboarding pipeline verifying merchant identity before trading',
      'Real-time order state machine with sub-merchant order fulfillment tracking',
    ],
    builtWith: 'Next.js, Flutterwave Subaccounts, MongoDB, Node.js',
    image: '/projects/yunimall.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit marketplace', href: 'https://app.yuni-mall.com' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20Yunimall%20Marketplace%20Architecture` },
    ],
  },
  {
    num: '04',
    name: 'Afrosoundtrack',
    sector: 'Music Publishing & Royalty Analytics',
    summary:
      'Built a global music publishing and rights management infrastructure connecting African artists and producers with global sync licensing. Features telemetry that tracks stream events and visualizes worldwide playback distribution on an interactive geographical telemetry engine.',
    highlights: [
      'Interactive geospatial telemetry engine visualizing global track playback',
      'Unified multi-currency royalty accounting and payout pipeline',
      'Cross-platform mobile client for iOS and Android synced with web core',
    ],
    builtWith: 'Next.js, React Native, PostgreSQL, GIS Telemetry, REST APIs',
    image: '/projects/afrosoundtrack.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit the platform', href: 'https://afrosoundtrack.com' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20Afrosoundtrack%20Architecture` },
    ],
  },
  {
    num: '05',
    name: 'AuditMe',
    sector: 'Regulated FinTech & Audit Workflow',
    summary:
      'Architected a secure workflow marketplace matching enterprises requiring statutory audits with licensed independent auditors. Features encrypted document staging, structured milestone pipelines, and audit progress tracking that compresses multi-week audits into a 7-day verified turnaround.',
    highlights: [
      'End-to-end encrypted document exchange pipeline with zero client data leakage',
      'Time-boxed 7-day milestone engine with automated SLA breach escalations',
      'Granular role-based access control (RBAC) separating auditors, clients, and QA',
    ],
    builtWith: 'Next.js, Node.js, MongoDB, S3 Document Vault, RBAC',
    image: '/projects/auditme.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit platform', href: 'https://auditme.com.ng' },
      { label: 'Auditor portal', href: 'https://app.auditme.com.ng/register-auditor' },
    ],
  },
  {
    num: '06',
    name: 'Diagknos',
    sector: 'HealthTech & Cold-Chain Logistics',
    summary:
      'Engineered an on-demand medical diagnostics platform coordinating doorstep phlebotomy sampling with accredited laboratories. Integrates real-time dispatch routing, patient scheduling across 100+ medical tests, and temperature-verified cold-chain chain of custody tracking from collection to pathology report release.',
    highlights: [
      'Real-time phlebotomist dispatch and geofenced routing engine',
      'Chain-of-custody tracking verifying sample integrity and cold-chain compliance',
      'Automated lab result release engine with HIPAA-aligned patient notifications',
    ],
    builtWith: 'Next.js, Google Maps Platform, Twilio Telephony, Node.js',
    image: '/projects/diagknos.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit platform', href: 'https://diagknos.com' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20Diagknos%20Architecture` },
    ],
  },
  {
    num: '07',
    name: 'Pepcode',
    sector: 'SaaS Accounting & Inventory Systems',
    summary:
      'Engineered an intuitive SaaS bookkeeping and inventory management platform designed for fast-paced retail businesses. Automates stock decrementing upon sale, computes real-time profit margins, and generates compliant fiscal receipts, eliminating month-end accounting reconciliation bottlenecks.',
    highlights: [
      'Real-time inventory state management with automated reorder alerts',
      'Instant fiscal invoice and receipt generation pipeline',
      'Daily ledger reconciliation engine providing immediate gross margin visibility',
    ],
    builtWith: 'React, NestJS, MongoDB, REST APIs, Tailwind CSS',
    image: '/projects/pepcode.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit platform', href: 'https://pepcodeinc.com/' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20Pepcode%20Architecture` },
    ],
  },
  {
    num: '08',
    name: 'Owa by Pepcode',
    sector: 'Financial Inclusion & Field Agent Ops',
    summary:
      'Built a field-agent operations platform extending formal ledger keeping to informal market traders without smartphones. Mobile field agents log transactions on-site via an offline-first data capture tool, compiling audited transaction histories that commercial banks accept for credit underwriting.',
    highlights: [
      'Offline-resilient field agent data capture interface for low-connectivity markets',
      'Bank-acceptable financial statement generation for unbanked micro-enterprises',
      'High-throughput reconciliation pipeline transforming paper ledgers into verified databases',
    ],
    builtWith: 'Next.js, Google Sheets API Integration, Tailwind CSS',
    image: '/projects/owa.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit platform', href: 'https://owabypepcode.com.ng' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20Owa%20Architecture` },
    ],
  },
  {
    num: '09',
    name: 'HT Legal Advisory',
    sector: 'LegalTech & Client Intake Engine',
    summary:
      'Designed and deployed a modern client intake and knowledge publishing engine for a corporate law practice. Features automated consultation calendar booking, structured intake conflict checking, and a headless legal advisory publishing pipeline managed directly by partners.',
    highlights: [
      'Automated client intake workflow with zero scheduling friction',
      'Headless CMS infrastructure allowing legal partners to publish insights independently',
      'Structured enquiry triage pipeline protecting partner billable hours',
    ],
    builtWith: 'Next.js, Sanity Headless CMS, MongoDB, Tailwind CSS',
    image: '/projects/htlegal.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit site', href: 'https://htlegal.com.ng' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20HT%20Legal%20Architecture` },
    ],
  },
  {
    num: '10',
    name: 'Arc9 Consult',
    sector: 'Architecture Portfolio & Project Pipeline',
    summary:
      'Architected a high-converting digital portal for a premier architectural and interior design firm. Combines lightning-fast visual project galleries with friction-free direct WhatsApp lead qualification routing, converting casual architectural inquiries into active consultations.',
    highlights: [
      'High-resolution imagery optimization pipeline maintaining sub-second load times',
      'Direct conversion routing driving inquiries into qualified WhatsApp lead channels',
      'Structured portfolio taxonomy categorizing commercial, residential, and interior contracts',
    ],
    builtWith: 'Next.js, Tailwind CSS, Vercel Edge Network',
    image: '/projects/arc9.webp',
    status: 'Live in production',
    links: [
      { label: 'Visit site', href: 'https://www.arc9consult.com/' },
      { label: 'Discuss architecture', href: `${SCOPE_MAIL}Inquiry%20regarding%20Arc9%20Architecture` },
    ],
  },
];

export interface SkillGroup {
  title: string;
  /** Strategic blurb explaining the architectural value */
  blurb: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & Full-Stack Systems',
    blurb:
      'Fast, accessible, and reactive user interfaces built to scale. Server-rendered where speed matters, reactive where interactivity counts.',
    items: ['TypeScript', 'Next.js (App Router)', 'React', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    title: 'Backend & Distributed APIs',
    blurb:
      'Clean domain modeling, scalable microservices, and modular REST & GraphQL APIs designed to handle data integrity and thousands of concurrent users.',
    items: ['Node.js', 'NestJS', 'Python', 'PostgreSQL', 'Redis', 'Prisma / Drizzle'],
  },
  {
    title: 'Cloud & Infrastructure',
    blurb:
      'Resilient, cost-controlled cloud infrastructure with automated CI/CD pipelines, containerization, and zero-downtime rolling deployments.',
    items: ['AWS (ECS, RDS, S3)', 'Supabase', 'Docker', 'Vercel', 'GitHub Actions CI/CD'],
  },
  {
    title: 'Payments & Settlement Engines',
    blurb:
      'Idempotent transactional architectures with multi-currency checkout, automated payout splits, and fail-safe webhook reconciliation.',
    items: ['Stripe', 'Flutterwave', 'Idempotent Webhooks', 'Automated Payouts', 'Escrow Systems'],
  },
  {
    title: 'Event-Driven & Async Pipelines',
    blurb:
      'Background worker queues, transactional communication, and automated messaging pipelines that keep core systems non-blocking and responsive.',
    items: ['WhatsApp Cloud API', 'Twilio SMS & Voice', 'Redis Upstash Queues', 'Resend Email'],
  },
  {
    title: 'Governance & Investor Diligence',
    blurb:
      'Enterprise-grade security controls, role-based access (RBAC), end-to-end telemetry, and clean repo standards ready for institutional audits.',
    items: ['Role-Based Access (RBAC)', 'Multi-tenant Isolation', 'Sentry Observability', 'End-to-End Testing'],
  },
];

export interface Metric {
  value: string;
  label: string;
  note: string;
}

export const metrics: Metric[] = [
  {
    value: '12+',
    label: 'Products shipped',
    note: 'Scalable production systems built 0 to 1',
  },
  {
    value: '6–8',
    label: 'Weeks to launch',
    note: 'Ruthless scoping and rapid sprint execution',
  },
  {
    value: '8',
    label: 'Sectors architected',
    note: 'Fintech, HealthTech, B2B SaaS, Marketplaces',
  },
  {
    value: '10',
    label: 'Live in production',
    note: 'Active, stable, and battle-tested by real users',
  },
];
