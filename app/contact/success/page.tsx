"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";

export default function ContactSuccessPage() {
  return (
    <div className="pt-32 pb-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      
      <Section maxWidth="2xl" className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-12 rounded-3xl border border-primary/30"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-6 gradient-text"
          >
            Messaggio inviato con successo!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24 ore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              href="https://wa.me/393921723028"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivici su WhatsApp
            </Button>
            <Button
              href="/"
              variant="ghost"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Torna alla home
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-primary/20"
          >
            <p className="text-sm text-foreground/60">
              Hai bisogno di una risposta più rapida?{" "}
              <a
                href="https://wa.me/393921723028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary underline"
              >
                Contattaci su WhatsApp
              </a>
              {" "}per una risposta immediata.
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

