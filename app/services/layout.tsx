import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi - Haxies Dev",
  description: "Sviluppo app personalizzate, siti web moderni e software su misura per la tua attività.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

