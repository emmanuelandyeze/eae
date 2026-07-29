import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emmanuel Eze — Software Engineer",
  description:
    "I build the websites, apps and behind-the-scenes systems that businesses run on — online stores, booking tools, payment systems and custom software.",
};

/**
 * Applies the saved theme before first paint. Dark is the default canvas, so a
 * light-preferring visitor would otherwise get a dark flash on every load.
 */
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (saved === 'light' || (!saved && prefersLight)) {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg-paper text-text-primary">
        {children}
      </body>
    </html>
  );
}
