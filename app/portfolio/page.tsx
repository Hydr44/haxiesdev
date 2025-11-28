"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

export default function PortfolioPage() {
  const projects = [
    {
      title: "RescueManager",
      tag: "Software gestionale",
      description: "Software gestionale completo per autodemolizione e soccorso stradale. Include gestione ordini, clienti, magazzino, fatturazione e reportistica avanzata. Soluzione su misura per ottimizzare i processi operativi del settore.",
      href: "/portfolio#rescuemanager",
    },
    {
      title: "JumpOn",
      tag: "Gioco mobile",
      description: "Gioco mobile avvincente con meccaniche innovative e design accattivante. Disponibile su iOS e Android, con sistema di progressione e leaderboard per coinvolgere i giocatori.",
      href: "/portfolio#jumpon",
    },
    {
      title: "App per attività locali",
      tag: "App su misura",
      description: "Soluzioni personalizzate per attività locali: app per prenotazioni, ordini take-away, programmi fedeltà e gestione clienti. Ogni app è sviluppata su misura per le esigenze specifiche del business.",
      href: "/portfolio",
    },
  ];

  return (
    <div className="pt-32 pb-32">
      {/* Hero */}
      <Section maxWidth="2xl" className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-foreground mb-8"
        >
          Progetti
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          Alcuni dei progetti che abbiamo realizzato per clienti e attività locali
        </motion.p>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tag={project.tag}
              description={project.description}
              href={project.href}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section maxWidth="2xl" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stiamo costruendo nuovi progetti
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            Il prossimo potrebbe essere il tuo. Parliamone senza impegno.
          </p>
          <Button
            href="/contact"
            variant="primary"
          >
            Contattami
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}

