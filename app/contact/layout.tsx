import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti - Haxies Dev",
  description: "Contatta Haxies Dev per parlare del tuo progetto. Rispondiamo solitamente entro 24 ore.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

