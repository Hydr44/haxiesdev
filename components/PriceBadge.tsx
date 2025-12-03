"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Zap } from "lucide-react";

export default function PriceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-8 flex flex-wrap justify-center gap-4"
    >
      <div className="glass-strong px-6 py-3 rounded-full border border-primary/30 flex items-center gap-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 animate-pulse" />
        <div className="relative z-10 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          <div className="text-left">
            <div className="text-xs text-foreground/60">Offerta Lancio</div>
            <div className="text-lg font-bold text-foreground">Sconto 50%</div>
          </div>
        </div>
      </div>
      <div className="glass-strong px-6 py-3 rounded-full border border-primary/30 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" />
        <div className="text-left">
          <div className="text-xs text-foreground/60">Preventivo</div>
          <div className="text-lg font-bold text-foreground">100% Gratuito</div>
        </div>
      </div>
      <div className="glass-strong px-6 py-3 rounded-full border border-primary/30 flex items-center gap-2">
        <Zap className="w-5 h-5 text-primary" />
        <div className="text-left">
          <div className="text-xs text-foreground/60">Risposta</div>
          <div className="text-lg font-bold text-foreground">In 24 ore</div>
        </div>
      </div>
    </motion.div>
  );
}

