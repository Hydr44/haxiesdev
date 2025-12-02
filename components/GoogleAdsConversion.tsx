"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default function GoogleAdsConversion() {
  // Funzione per tracciare la conversione
  const trackConversion = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17775313058",
        value: 1.0,
        currency: "EUR",
      });
    }
  };

  useEffect(() => {
    // Traccia la conversione quando l'utente arriva sulla pagina di successo
    if (window.location.pathname === "/contact/success") {
      trackConversion();
    }
  }, []);

  return null;
}

