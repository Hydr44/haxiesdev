"use client";

import { motion } from "framer-motion";
import { Search, Gem, Users } from "lucide-react";
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
      description: "Realizzazione di progetti personali come RescueManager, acquisendo esperienza pratica nello sviluppo di software e app.",
    },
    {
      year: "2025",
      title: "Nascita di Haxies Dev",
      description: "Fondazione di Haxies Dev con l'obiettivo di portare strumenti digitali moderni anche alle realtà locali e alle piccole attività.",
    },
  ];

  const values = [
    {
      icon: Search,
      title: "Trasparenza",
      description: "Comunicazione chiara e onesta in ogni fase del progetto, dai preventivi alle tempistiche.",
    },
    {
      icon: Gem,
      title: "Qualità del codice",
      description: "Scriviamo codice pulito, mantenibile e ben documentato, seguendo le best practice del settore.",
    },
    {
      icon: Users,
      title: "Attenzione al cliente",
      description: "Ogni progetto è unico e merita un'attenzione personalizzata. Ascoltiamo le tue esigenze e troviamo la soluzione migliore.",
    },
  ];

  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      
      {/* Hero */}
      <Section maxWidth="2xl" className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="gradient-text">Chi c&apos;è dietro</span>
            <br />
            <span className="text-foreground">Haxies Dev</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Emmanuel Scozzarini
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Sono uno sviluppatore di 20 anni, attualmente studente di informatica. La mia passione per lo sviluppo software mi ha portato a creare progetti personali come <strong className="text-primary">RescueManager</strong>, un software gestionale per autodemolizione e soccorso stradale.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            La visione di Haxies Dev nasce dalla convinzione che gli strumenti digitali moderni non debbano essere appannaggio solo delle grandi aziende. Voglio portare soluzioni tecnologiche di qualità anche alle realtà locali, ai professionisti e alle piccole attività che vogliono digitalizzarsi e crescere.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Ogni progetto è un&apos;opportunità per creare qualcosa di unico, che risponda alle esigenze specifiche del cliente e che faccia la differenza nel suo business.
          </p>
        </motion.div>
      </Section>

      {/* Timeline */}
      <Section maxWidth="4xl" className="mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Il percorso</span>
        </motion.h2>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 glass p-8 rounded-3xl border border-primary/20"
            >
              <div className="md:w-32 flex-shrink-0">
                <span className="text-2xl font-bold text-primary">{item.year}</span>
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
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Valori</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong p-8 rounded-3xl border border-primary/20 text-center group hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <IconComponent className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
