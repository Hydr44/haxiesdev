import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi siamo - Haxies Dev",
  description: "Conosci Emmanuel Scozzarini, fondatore di Haxies Dev, e scopri la visione dietro lo studio digitale.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

