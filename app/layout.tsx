import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import CookieBanner from "@/components/CookieBanner";
import GoogleAdsConversion from "@/components/GoogleAdsConversion";
import GoogleTagScript from "./google-tag-script";
import WhatsAppTracker from "@/components/WhatsAppTracker";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haxies Dev - Sviluppo App, Siti Web e Software Gestionale | Napoli e Italia",
  description: "Sviluppo app mobile iOS e Android, siti web moderni e software gestionale personalizzato. Software per magazzino, controllo di gestione e automazioni aziendali. Servizi per aziende in tutta Italia.",
  keywords: "sviluppo app, sviluppo app napoli, software gestionale, gestionale personalizzato, sviluppo software, siti web, programmatore informatico, software magazzino, controllo di gestione, app mobile",
  openGraph: {
    title: "Haxies Dev - Studio digitale per app, siti web e software su misura",
    description: "Haxies Dev trasforma la tua attività in un prodotto digitale moderno: App, Siti Web e Software personalizzati.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haxies Dev - Studio digitale",
    description: "Trasformiamo la tua attività in un prodotto digitale moderno",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <GoogleTagScript />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <CookieBanner />
        <GoogleAdsConversion />
        <WhatsAppTracker />
        <Analytics />
      </body>
    </html>
  );
}

