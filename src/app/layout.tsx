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
  title: "Sri Maniteja Chinnam | Full-Stack Engineer",
  description:
    "Full-stack engineer building things with Next.js, TypeScript, and AI.",
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
                var valid=['default','dark','matrix','pastel'];
                var theme=stored&&valid.indexOf(stored)!==-1?stored:(!stored&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'default';
                document.documentElement.setAttribute('data-theme',theme);
                document.documentElement.classList.toggle('dark',theme==='dark');
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
