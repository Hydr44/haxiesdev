import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Haxies Dev",
  description: "Scopri i progetti realizzati da Haxies Dev: app, siti web e software su misura.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

