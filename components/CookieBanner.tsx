"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto glass-strong rounded-2xl border border-primary/30 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">
                    Utilizziamo i cookie
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  Questo sito utilizza cookie tecnici necessari per il funzionamento del sito e cookie di analisi per migliorare la tua esperienza. 
                  Puoi accettare tutti i cookie o gestire le preferenze.{" "}
                  <Link href="/privacy" className="text-primary hover:text-secondary underline">
                    Leggi la privacy policy
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={acceptCookies}
                    variant="primary"
                    className="text-sm px-6 py-2"
                  >
                    Accetta tutti
                  </Button>
                  <Button
                    onClick={rejectCookies}
                    variant="ghost"
                    className="text-sm px-6 py-2"
                  >
                    Rifiuta
                  </Button>
                </div>
              </div>
              <button
                onClick={acceptCookies}
                className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

