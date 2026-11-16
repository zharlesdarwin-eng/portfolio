import type { Metadata } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import siteData from "@/data/site.json";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeno Hirschfeld — Freelance Ontwerper & Ontwikkelaar",
  description: "Op maat gemaakte digitale ontwerpen en hoogwaardige interactieve websites met een sterke focus op beweging en interactie. Gevestigd in Utrecht.",
  keywords: ["Zeno Hirschfeld", "Portfolio", "Design", "Development", "Freelance", "Interactie", "GSAP", "Utrecht"],
  authors: [{ name: "Zeno Hirschfeld" }],
  openGraph: {
    title: "Zeno Hirschfeld — Freelance Ontwerper & Ontwikkelaar",
    description: "Op maat gemaakte digitale ontwerpen en hoogwaardige interactieve websites met een sterke focus op beweging en interactie.",
    url: "https://zenohirschfeld.nl",
    siteName: "Zeno Hirschfeld",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: siteData.site.title,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeno Hirschfeld — Freelance Ontwerper & Ontwikkelaar",
    description: "Op maat gemaakte digitale ontwerpen en hoogwaardige interactieve websites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="antialiased selection:bg-[#1c1d20] selection:text-white">
        <LanguageProvider>
          <SmoothScroll>
            <Preloader />
            <CustomCursor />
            <Header />
            <main className="relative min-h-screen">
              {children}
            </main>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
