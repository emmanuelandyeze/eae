export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Two-digit index shown beside the name */
  num: string;
  name: string;
  /** Plain-language sector, not a tech category */
  sector: string;
  /** What it does, for someone who doesn't build software */
  summary: string;
  /** Three concrete things it does for the people using it */
  highlights: string[];
  /** Named tools, kept short — the badge of proof, not the pitch */
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

const MAIL = 'mailto:emmanuel.andyeze@gmail.com?subject=';

export const projects: Project[] = [
  {
    num: '01',
    name: 'Tradeet',
    sector: 'Small business tools',
    summary:
      'Lets a small business owner run the whole shop from WhatsApp. They send a message like they would to a friend — "sold 2 bags 15k" — and it records the sale, updates what is left in stock, and can send the customer a proper invoice. Nothing to download, nothing to learn.',
    highlights: [
      'Record a sale by sending a message',
      'Invoices that look professionally made',
      'A simple dashboard showing how the business is doing',
    ],
    builtWith: 'WhatsApp Business, Next.js, Node.js',
    image: '/projects/tradeet.webp',
    status: 'Live, with paying users',
    links: [
      { label: 'Visit the site', href: 'https://tradeet.ng' },
      {
        label: 'Try it on WhatsApp',
        href: 'https://wa.me/2348141898230?text=Hello%20Tradeet%2C%20I%20want%20to%20get%20started%20with%20my%20smart%20business%20OS!',
      },
    ],
    featured: true,
  },
  {
    num: '02',
    name: 'YAAAS Agency',
    sector: 'Creative agency',
    summary:
      'The online home of an agency that represents African artists. Visitors browse the roster of artists, look through the artwork collection, and get in touch about a booking. Behind a private login, the agency adds artists, uploads work and publishes news themselves — they never have to call a developer to change a word.',
    highlights: [
      'Artist profiles with their work and music links',
      'A gallery visitors can filter by artist',
      'A private dashboard the team runs on their own',
    ],
    builtWith: 'Next.js, MongoDB, Cloudinary',
    image: '/projects/yaaas.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://yaaas.co' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20YAAAS%20Agency%20project` },
    ],
    featured: true,
  },
  {
    num: '03',
    name: 'Yunimall',
    sector: 'Online shopping',
    summary:
      'A marketplace where many different sellers trade under one roof. A shopper fills a single basket with items from several shops and pays once — and the money is automatically split and sent to each seller.',
    highlights: [
      'One basket, many sellers',
      'Sellers paid out automatically',
      'ID checks before a seller can trade',
    ],
    builtWith: 'Next.js, Flutterwave, MongoDB',
    image: '/projects/yunimall.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://app.yuni-mall.com' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20Yunimall%20project` },
    ],
  },
  {
    num: '04',
    name: 'Afrosoundtrack',
    sector: 'Music',
    summary:
      'A music publishing and licensing platform that helps African artists, songwriters, producers and session musicians earn from their work globally — and shows them on a live map where their songs are actually being played.',
    highlights: [
      'Earnings from around the world in one place',
      'A live map of where the music is playing',
      'A companion app for iPhone and Android',
    ],
    builtWith: 'Next.js, React Native, PostgreSQL',
    image: '/projects/afrosoundtrack.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://afrosoundtrack.com' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20Afrosoundtrack%20project` },
    ],
  },
  {
    num: '05',
    name: 'AuditMe',
    sector: 'Accounting',
    summary:
      'Matches companies that need their books audited with certified auditors, then keeps the job moving on a clear schedule. Documents go in securely at one end and a finished report comes out the other, inside a week.',
    highlights: [
      'A seven-day turnaround, tracked in the open',
      'Documents exchanged securely',
      'Both sides can see exactly where things stand',
    ],
    builtWith: 'Next.js, Node.js, MongoDB',
    image: '/projects/auditme.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://auditme.com.ng' },
      { label: 'Sign up as an auditor', href: 'https://app.auditme.com.ng/register-auditor' },
    ],
  },
  {
    num: '06',
    name: 'Diagknos',
    sector: 'Healthcare',
    summary:
      'Lets a patient book any of more than a hundred lab tests online and have a certified professional come to their home or office to take the sample — then tracks it, temperature-controlled, all the way to the accredited lab and back as a result. No queues, no lost reports.',
    highlights: [
      'Over 100 tests, booked without a phone call',
      'Sample collected at your home or office',
      'Every stage tracked, from booking to result',
    ],
    builtWith: 'Next.js, Google Maps, Twilio',
    image: '/projects/diagknos.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://diagknos.com' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20Diagknos%20project` },
    ],
  },
  {
    num: '07',
    name: 'ServiceDome',
    sector: 'Local services',
    summary:
      'A phone app that connects electricians, plumbers, cleaners and other local professionals with customers nearby. Once a job is accepted, the customer can watch it progress in real time rather than wondering whether anyone is coming.',
    highlights: [
      'Matches you with professionals close by',
      'Watch the job progress live',
      'Fast, smooth and simple to use',
    ],
    builtWith: 'React Native, Node.js, MongoDB',
    status: 'Client project, private',
    links: [{ label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20ServiceDome%20project` }],
  },
  {
    num: '08',
    name: 'Pepcode',
    sector: 'Retail & payments',
    summary:
      'Daily bookkeeping for small businesses that do not have an accountant. It tracks what goes out, keeps count of stock, and turns a sale into a proper invoice — so the books are already done at closing time instead of piling up for month end.',
    highlights: [
      'Expenses tracked as they happen',
      'Stock counted without a stocktake',
      'Invoices generated in seconds',
    ],
    builtWith: 'React, NestJS, MongoDB',
    image: '/projects/pepcode.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://pepcodeinc.com/' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20Pepcode%20project` },
    ],
  },
  {
    num: '09',
    name: 'Owa by Pepcode',
    sector: 'Financial inclusion',
    summary:
      'Bookkeeping for market traders who do not use a smartphone. A trained agent visits and logs their sales and expenses for them, so that for the first time they have proper records — the kind a bank will accept when they apply for a loan.',
    highlights: [
      'Works for traders without a smartphone',
      'An agent does the record-keeping in person',
      'Records a bank will actually accept',
    ],
    builtWith: 'Next.js, Google Sheets, Tailwind',
    image: '/projects/owa.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://owabypepcode.com.ng' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20Owa%20project` },
    ],
  },
  {
    num: '10',
    name: 'HT Legal Advisory',
    sector: 'Legal',
    summary:
      'A law firm website that does real work: it takes enquiries from would-be clients, lets the team publish legal articles, and books consultations straight into the calendar. The lawyers update all of it themselves.',
    highlights: [
      'New client enquiries handled online',
      'Consultations booked without back-and-forth',
      'The team publishes their own articles',
    ],
    builtWith: 'Next.js, Sanity, MongoDB',
    image: '/projects/htlegal.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://htlegal.com.ng' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20HT%20Legal%20project` },
    ],
  },
  {
    num: '11',
    name: 'Arc9 Consult',
    sector: 'Architecture & design',
    summary:
      'The online home of a Nigerian architecture practice that designs buildings, fits out interiors and runs projects on site. Visitors browse completed work, read what each service actually involves, and start a conversation on WhatsApp instead of filling in a long form and waiting.',
    highlights: [
      'A gallery of finished buildings and interiors',
      'A clear page for each of the three services',
      'Enquiries go straight to WhatsApp',
    ],
    builtWith: 'Next.js, Tailwind CSS',
    image: '/projects/arc9.webp',
    status: 'Live',
    links: [
      { label: 'Visit the site', href: 'https://www.arc9consult.com/' },
      { label: 'Ask about this project', href: `${MAIL}Question%20about%20the%20Arc9%20Consult%20project` },
    ],
  },
];

export interface SkillGroup {
  title: string;
  /** What this actually means for the person paying for it */
  blurb: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Websites & web apps',
    blurb: 'The thing your customers see. Fast, works on a phone, and easy to find on Google.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Phone apps',
    blurb: 'One app that runs on both iPhone and Android, so you are not paying to build it twice.',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'The engine room',
    blurb: 'The part nobody sees — where your data lives and the rules of your business are enforced.',
    items: ['Node.js', 'NestJS', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Taking payments',
    blurb: 'Getting money in safely, and splitting it out to the right people automatically.',
    items: ['Flutterwave', 'Card terminals', 'Automatic payouts'],
  },
  {
    title: 'Messaging & reminders',
    blurb: 'Reaching customers where they already are, and cutting down on no-shows.',
    items: ['WhatsApp Business', 'Twilio SMS', 'Email'],
  },
  {
    title: 'Content you control',
    blurb: 'A private dashboard so your team can change text, prices and images without calling me.',
    items: ['Custom dashboards', 'Sanity', 'Cloudinary'],
  },
];

export interface Metric {
  value: string;
  label: string;
  note: string;
}

export const metrics: Metric[] = [
  { value: '12+', label: 'Products shipped', note: 'Built, launched and handed over' },
  { value: '11', label: 'Featured below', note: '10 of them running live today' },
  {
    value: '8',
    label: 'Industries served',
    note: 'Finance, retail, health, law, music, creative, architecture, local services',
  },
  { value: '5', label: 'Years doing this', note: 'Independent since 2021' },
];
