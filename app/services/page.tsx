"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Settings, Check } from "lucide-react";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function ServicesPage() {
  const services = [
    {
      title: "Sviluppo App personalizzate",
      description: "Creiamo app native e cross-platform per iOS e Android, pensate per le esigenze specifiche della tua attività. Che tu abbia bisogno di un'app per gestire ordini, coinvolgere i clienti, automatizzare processi interni o creare un nuovo canale di vendita, sviluppiamo soluzioni su misura che si integrano perfettamente con il tuo business.",
      features: [
        "App native iOS e Android",
        "App cross-platform con React Native",
        "Integrazione con sistemi esistenti",
        "Design moderno e user-friendly",
        "Pubblicazione su App Store e Google Play",
      ],
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      title: "Siti Web moderni",
      description: "Siti web veloci, responsive e ottimizzati per i motori di ricerca. Realizziamo landing page accattivanti, siti vetrina professionali e piattaforme e-commerce, sempre con un design moderno e un'attenzione particolare all'esperienza utente e alle performance.",
      features: [
        "Siti web responsive e veloci",
        "Ottimizzazione SEO",
        "Design moderno e minimalista",
        "Landing page e siti vetrina",
        "E-commerce e piattaforme complesse",
      ],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    },
    {
      title: "Software Gestionale & Automazioni",
      description: "Software gestionali personalizzati per magazzino, inventario, contabilità e controllo di gestione. Creiamo gestionale su misura per piccole e medie imprese, con funzionalità di carico/scarico magazzino, gestione ordini e reportistica avanzata. Automatizziamo workflow e integriamo con sistemi esistenti.",
      features: [
        "Gestionale personalizzato per aziende",
        "Software magazzino e inventario",
        "Controllo di gestione e contabilità",
        "Automazioni e integrazioni",
        "Software per piccole imprese",
      ],
      icon: Settings,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      
      {/* Hero */}
      <Section maxWidth="2xl" className="text-center mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-8"
        >
          <span className="gradient-text">Servizi</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          Haxies Dev progetta e sviluppa soluzioni digitali su misura per trasformare la tua attività in un prodotto digitale moderno e performante.
        </motion.p>
      </Section>

      {/* Services */}
      <div className="space-y-32">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Section key={index}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div className="mb-6">
                    <IconComponent className="w-16 h-16 text-primary" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <div className="relative h-full min-h-[300px] sm:min-h-[400px] rounded-3xl overflow-hidden glass-strong border border-primary/20 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </Section>
          );
        })}
      </div>

      {/* CTA */}
      <Section maxWidth="2xl" className="mt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-12 rounded-3xl border border-primary/30"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Parliamo del tuo progetto
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            Raccontaci la tua idea e insieme troveremo la soluzione digitale perfetta per la tua attività.
          </p>
          <Button
            href="https://wa.me/393921723028"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contattami su WhatsApp
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
