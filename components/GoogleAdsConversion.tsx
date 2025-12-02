"use client";

import { useEffect } from "react";

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
  useEffect(() => {
    // Traccia la conversione quando l'utente arriva sulla pagina di successo
    if (typeof window !== "undefined" && window.location.pathname === "/contact/success") {
      // Aspetta che gtag sia disponibile
      const trackConversion = () => {
        if (window.gtag) {
          // Usa l'etichetta di conversione fornita da Google Ads
          window.gtag("event", "conversion", {
            send_to: "AW-17775313058/7NH_CM3h5cobEKKB95tC",
            value: 1.0,
            currency: "EUR",
          });
          console.log("Conversion tracked:", "AW-17775313058/7NH_CM3h5cobEKKB95tC");
        } else {
          // Se gtag non è ancora disponibile, riprova dopo un breve delay
          setTimeout(trackConversion, 100);
        }
      };

      // Prova subito e poi dopo un delay per assicurarsi che gtag sia caricato
      trackConversion();
      setTimeout(trackConversion, 500);
      setTimeout(trackConversion, 1000);
    }
  }, []);

  return null;
}

