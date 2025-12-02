"use client";

import { useEffect, useState } from "react";

export function usePerformance() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Check connection speed
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      const effectiveType = connection.effectiveType;
      setIsSlowConnection(effectiveType === "slow-2g" || effectiveType === "2g");
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { prefersReducedMotion, isSlowConnection };
}

