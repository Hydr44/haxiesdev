"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "./Section";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marco R.",
      role: "Titolare, Autodemolizioni Rossi",
      project: "Software gestionale",
      text: "Emmanuel ha sviluppato un software gestionale perfetto per la nostra attività. Semplice da usare, veloce e su misura per le nostre esigenze. Consigliatissimo!",
      rating: 5,
    },
    {
      name: "Sara M.",
      role: "Fotografa freelance",
      project: "Sito web portfolio",
      text: "Il mio nuovo sito web è esattamente quello che cercavo: moderno, veloce e che rispecchia il mio stile. Il processo è stato chiaro e professionale dall'inizio alla fine.",
      rating: 5,
    },
    {
      name: "Luca B.",
      role: "Consulente",
      project: "App mobile",
      text: "L'app sviluppata da Haxies Dev ha semplificato molto il lavoro con i miei clienti. Design intuitivo e funzionalità perfette. Ottimo rapporto qualità-prezzo.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 relative z-10">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Cosa dicono i clienti</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <div className="pt-4 border-t border-primary/10">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-xs text-primary mt-1">{testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}

