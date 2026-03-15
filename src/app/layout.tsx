import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ContentProvider } from "@/components/content-provider";
import { KonamiOverlay } from "@/components/konami-overlay";
import { getContent } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srichinnam.space"),
  icons: {
    icon: "/favicon.svg",
  },
  title: "Sri Maniteja Chinnam | Full-Stack Engineer",
  description:
    "Full-stack engineer building things with Next.js, TypeScript, and AI.",
  openGraph: {
    title: "Sri Maniteja Chinnam | Full-Stack Engineer",
    description:
      "Full-stack engineer focused on Next.js, TypeScript, and AI-powered products.",
    url: "https://srichinnam.space",
    siteName: "Sri Maniteja Chinnam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Maniteja Chinnam | Full-Stack Engineer",
    description:
      "Full-stack engineer focused on Next.js, TypeScript, and AI-powered products.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getContent();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var stored=localStorage.getItem('theme');
                var valid=['default','dark','matrix','pastel','ocean','sunset','forest','nord','neon','mono'];
                var theme=stored&&valid.indexOf(stored)!==-1?stored:'default';
                document.documentElement.setAttribute('data-theme',theme);
                document.documentElement.classList.toggle('dark',theme==='dark'||theme==='mono');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <ContentProvider content={content}>
            <KonamiOverlay />
            {children}
            <Analytics />
          </ContentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
