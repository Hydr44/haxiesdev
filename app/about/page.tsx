"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function AboutPage() {
  const timeline = [
    {
      year: "2023",
      title: "Inizio studi di informatica",
      description: "Inizio del percorso universitario in informatica, con focus su sviluppo software e tecnologie web moderne.",
    },
    {
      year: "2024",
      title: "Sviluppo dei primi progetti personali",
      description: "Realizzazione di progetti come RescueManager e JumpOn, acquisendo esperienza pratica nello sviluppo di software e app.",
    },
    {
      year: "2025",
      title: "Nascita di Haxies Dev",
      description: "Fondazione di Haxies Dev con l'obiettivo di portare strumenti digitali moderni anche alle realtà locali e alle piccole attività.",
    },
  ];

  const values = [
    {
      icon: "🔍",
      title: "Trasparenza",
      description: "Comunicazione chiara e onesta in ogni fase del progetto, dai preventivi alle tempistiche.",
    },
    {
      icon: "💎",
      title: "Qualità del codice",
      description: "Scriviamo codice pulito, mantenibile e ben documentato, seguendo le best practice del settore.",
    },
    {
      icon: "🤝",
      title: "Attenzione al cliente",
      description: "Ogni progetto è unico e merita un'attenzione personalizzata. Ascoltiamo le tue esigenze e troviamo la soluzione migliore.",
    },
  ];

  return (
    <div className="pt-32 pb-32">
      {/* Hero */}
      <Section maxWidth="2xl" className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-8">
            Chi c'è dietro Haxies Dev
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-400">
                👨‍💻
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Emmanuel Scozzarini
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Sono uno sviluppatore di 20 anni, attualmente studente di informatica. La mia passione per lo sviluppo software mi ha portato a creare progetti personali come <strong>RescueManager</strong>, un software gestionale per autodemolizione e soccorso stradale, e <strong>JumpOn</strong>, un gioco mobile.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              La visione di Haxies Dev nasce dalla convinzione che gli strumenti digitali moderni non debbano essere appannaggio solo delle grandi aziende. Voglio portare soluzioni tecnologiche di qualità anche alle realtà locali, ai professionisti e alle piccole attività che vogliono digitalizzarsi e crescere.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Ogni progetto è un'opportunità per creare qualcosa di unico, che risponda alle esigenze specifiche del cliente e che faccia la differenza nel suo business.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section maxWidth="4xl" className="mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center"
        >
          Il percorso
        </motion.h2>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-32 flex-shrink-0">
                <span className="text-2xl font-bold text-secondary">{item.year}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center"
        >
          Valori
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 text-center"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

