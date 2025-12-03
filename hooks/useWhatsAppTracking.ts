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

export function useWhatsAppTracking() {
  useEffect(() => {
    // Traccia tutti i click sui link WhatsApp
    const trackWhatsAppClick = (element: HTMLElement) => {
      const href = element.getAttribute("href");
      if (href && href.includes("wa.me")) {
        // Traccia evento personalizzato per Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "whatsapp_click", {
            event_category: "engagement",
            event_label: "WhatsApp Button Click",
            value: 1,
          });
          console.log("WhatsApp click tracked");
        }
      }
    };

    // Aggiungi listener a tutti i link WhatsApp esistenti
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach((link) => {
      link.addEventListener("click", () => trackWhatsAppClick(link as HTMLElement));
    });

    // Usa event delegation per link aggiunti dinamicamente
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href*="wa.me"]');
      if (link) {
        trackWhatsAppClick(link as HTMLElement);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}

