"use client";

import { motion } from "framer-motion";
import { Euro } from "lucide-react";

export default function PriceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-8 flex flex-wrap justify-center gap-4"
    >
      <div className="glass-strong px-6 py-3 rounded-full border border-primary/30 flex items-center gap-2">
        <Euro className="w-5 h-5 text-primary" />
        <div className="text-left">
          <div className="text-xs text-foreground/60">Preventivo</div>
          <div className="text-lg font-bold text-foreground">100% Gratuito</div>
        </div>
      </div>
      <div className="glass-strong px-6 py-3 rounded-full border border-primary/30 flex items-center gap-2">
        <div className="text-left">
          <div className="text-xs text-foreground/60">Siti Web da</div>
          <div className="text-lg font-bold text-primary">€ 1.500</div>
        </div>
      </div>
      <div className="glass-strong px-6 py-3 rounded-full border border-primary/30 flex items-center gap-2">
        <div className="text-left">
          <div className="text-xs text-foreground/60">App da</div>
          <div className="text-lg font-bold text-primary">€ 3.500</div>
        </div>
      </div>
    </motion.div>
  );
}

