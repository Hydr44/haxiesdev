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
        className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-full shadow-neon hover:shadow-glow transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold">Scrivici</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </Link>
    </motion.div>
  );
}

