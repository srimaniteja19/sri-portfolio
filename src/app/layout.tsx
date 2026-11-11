import type { Metadata } from "next";
import { Big_Shoulders, Chivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ContentProvider } from "@/components/content-provider";
import { KonamiOverlay } from "@/components/konami-overlay";
import { getContent } from "@/lib/content";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const chivo = Chivo({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srichinnam.space"),
  icons: {
    icon: "/favicon.svg",
  },
  title: "Sri Maniteja Chinnam | Software Engineer @ Rivian · Full-Stack & AI",
  description:
    "Flight logbook and production release archive of Sri Maniteja Chinnam — Software Engineer at Rivian building scalable full-stack, AI/LLM, and distributed systems.",
  openGraph: {
    title: "Sri Maniteja Chinnam | Software Engineer @ Rivian",
    description:
      "Production release archive & telemetry dossier — 8 shipped systems in 2026, Refrainly, and enterprise software engineering at Rivian.",
    url: "https://srichinnam.space",
    siteName: "Sri Maniteja Chinnam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Maniteja Chinnam | Software Engineer @ Rivian",
    description:
      "Production release archive & telemetry dossier — 8 shipped systems in 2026, Refrainly, and enterprise software engineering at Rivian.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getContent();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bigShoulders.variable} ${chivo.variable} ${jetbrainsMono.variable}`}
    >
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
      <body className="antialiased" suppressHydrationWarning>
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
