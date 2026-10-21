import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: "../public/fonts/Outfit-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Emmanuel Eze — Technical Partner & Product Architect",
  description:
    "Technical Partner to early-stage founders. I architect, scope, and ship production-grade 0-to-1 MVPs in 6–8 weeks.",
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
