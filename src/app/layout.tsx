import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { KonamiOverlay } from "@/components/konami-overlay";

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
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sri Maniteja Chinnam — Full-Stack Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Maniteja Chinnam | Full-Stack Engineer",
    description:
      "Full-stack engineer focused on Next.js, TypeScript, and AI-powered products.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <KonamiOverlay />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
