"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      icon: CheckCircle,
      number: "50+",
      label: "Progetti realizzati",
    },
    {
      icon: Users,
      number: "100%",
      label: "Clienti soddisfatti",
    },
    {
      icon: Clock,
      number: "24h",
      label: "Tempo di risposta",
    },
    {
      icon: Award,
      number: "5★",
      label: "Qualità garantita",
    },
  ];

  return (
    <section className="py-12 glass border-y border-primary/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

