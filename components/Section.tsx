import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl";
}

export default function Section({
  children,
  className = "",
  maxWidth = "7xl",
}: SectionProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "7xl": "max-w-7xl",
  };

  return (
    <section className={`${maxWidthClasses[maxWidth]} mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}

