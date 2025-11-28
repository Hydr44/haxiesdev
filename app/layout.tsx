import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haxies Dev - Studio digitale per app, siti web e software su misura",
  description: "Haxies Dev trasforma la tua attività in un prodotto digitale moderno: App, Siti Web e Software personalizzati. Studio digitale indipendente fondato da Emmanuel Scozzarini.",
  keywords: "sviluppo app, siti web, software su misura, digitalizzazione, Next.js, React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

