"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <Link
        href="https://wa.me/393921723028"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-secondary text-white px-5 sm:px-7 py-4 sm:py-5 rounded-full shadow-neon hover:shadow-glow transition-all duration-300 group text-sm sm:text-base min-h-[50px] touch-manipulation font-bold"
        style={{ touchAction: "manipulation" }}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span>Preventivo Gratis</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </Link>
    </motion.div>
  );
}

