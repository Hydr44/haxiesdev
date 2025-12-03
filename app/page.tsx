"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Settings, Target, Zap, Handshake, Rocket, Clock, CheckCircle } from "lucide-react";
import { usePerformance } from "@/hooks/usePerformance";
import Button from "@/components/Button";
import Section from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import TechLogos from "@/components/TechLogos";
import PriceBadge from "@/components/PriceBadge";
import Image from "next/image";

export default function Home() {
  const { prefersReducedMotion, isSlowConnection } = usePerformance();
  
  const scrollToServices = () => {
    const element = document.getElementById("servizi");
    element?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };
  
  // Disable heavy animations on slow devices
  const shouldAnimate = !prefersReducedMotion && !isSlowConnection;

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-background" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Tech Logos floating */}
        <TechLogos />
        
        {/* Floating orbs - Only animate on fast devices */}
        {shouldAnimate && (
          <>
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl hidden md:block"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl hidden md:block"
            />
          </>
        )}
        {!shouldAnimate && (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl hidden md:block opacity-50" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl hidden md:block opacity-50" />
          </>
        )}

        <Section maxWidth="2xl" className="text-center py-16 sm:py-24 md:py-32 relative z-10">
          <motion.h1
            initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldAnimate ? { duration: 0.8 } : { duration: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-4"
          >
            <span className="gradient-text">Costruiamo esperienze</span>
            <br />
            <span className="text-foreground">digitali su misura.</span>
          </motion.h1>
          
          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldAnimate ? { duration: 0.8, delay: 0.2 } : { duration: 0 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-6 max-w-3xl mx-auto leading-relaxed px-4"
          >
            <strong className="text-primary">Sviluppo App</strong>, <strong className="text-primary">Siti Web</strong> e <strong className="text-primary">Software Gestionale</strong> personalizzati. Trasformiamo la tua attività in un prodotto digitale moderno.
          </motion.p>

          {/* Price Badge - Prezzi indicativi */}
          <PriceBadge />

          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldAnimate ? { duration: 0.8, delay: 0.4 } : { duration: 0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mt-8"
          >
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <div className="relative">
                <Button
                  href="https://wa.me/393921723028"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl px-12 py-6 w-full sm:w-auto text-center"
                >
                  🚀 Preventivo Gratuito
                </Button>
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  FREE
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-sm">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Risposta in 24h garantita</span>
                </div>
                <div className="text-foreground/60">
                  <span className="bg-primary/20 px-2 py-1 rounded">⚡ Posti limitati questo mese</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </section>

      {/* Brand Strip con Urgenza */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 glass border-y border-primary/20 relative z-10"
      >
        <Section>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-center text-foreground/70 text-sm font-medium">
              Studio digitale indipendente fondato da Emmanuel Scozzarini.
            </p>
            <div className="hidden md:block w-px h-6 bg-primary/20" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-foreground/60">✅</span>
              <span className="text-foreground/80 font-medium">15+ Progetti completati</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary/20" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-foreground/60">⭐</span>
              <span className="text-foreground/80 font-medium">100% Soddisfatti</span>
            </div>
          </div>
        </Section>
      </motion.section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Cosa facciamo */}
      <section id="servizi" className="py-32 relative z-10">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Cosa facciamo</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Soluzioni digitali su misura per trasformare la tua attività
            </p>
          </motion.div>

          {/* Visual element - Devices mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl h-64 rounded-3xl overflow-hidden glass-strong border border-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop"
                alt="Digital solutions"
                fill
                className="object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Tecnologie Moderne</h3>
                  <p className="text-foreground/80">Next.js • React • TypeScript • Cloud</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Sviluppo App Mobile",
                description: "Sviluppo app native iOS e Android, app cross-platform e soluzioni mobile personalizzate. Creiamo app per gestire la tua attività, coinvolgere i clienti o automatizzare processi aziendali.",
                gradient: "from-primary/20 to-secondary/20",
              },
              {
                icon: Globe,
                title: "Siti Web moderni",
                description: "Siti web veloci, responsive e ottimizzati per i motori di ricerca. Landing page, siti vetrina e piattaforme e-commerce con design moderno e user experience curata.",
                gradient: "from-secondary/20 to-accent/20",
              },
              {
                icon: Settings,
                title: "Software Gestionale su misura",
                description: "Software gestionali personalizzati per magazzino, contabilità, CRM e controllo di gestione. Automazioni e integrazioni con sistemi esistenti per ottimizzare i processi aziendali.",
                gradient: "from-accent/20 to-primary/20",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="glass-strong p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button
                      href="https://wa.me/393921723028"
                      variant="ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      Preventivo Gratuito →
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* Come lavoriamo */}
      <section id="processo" className="py-32 relative z-10">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Come lavoriamo</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Un processo chiaro e trasparente, dalla consulenza alla consegna
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Consulenza iniziale",
                description: "Analizziamo insieme le tue esigenze, obiettivi e budget. Capiamo cosa vuoi ottenere e come possiamo aiutarti.",
                icon: Handshake,
              },
              {
                step: "02",
                title: "Proposta e preventivo",
                description: "Ti presentiamo una proposta dettagliata con tempi, costi e fasi del progetto. Niente sorprese, tutto trasparente.",
                icon: Target,
              },
              {
                step: "03",
                title: "Sviluppo",
                description: "Lavoriamo al tuo progetto con aggiornamenti regolari. Puoi seguire l'avanzamento e dare feedback in tempo reale.",
                icon: Rocket,
              },
              {
                step: "04",
                title: "Consegna e supporto",
                description: "Consegna del progetto completo con documentazione. Supporto post-consegna incluso per assicurarci che tutto funzioni perfettamente.",
                icon: CheckCircle,
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-strong p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-primary/30 mb-2">{item.step}</div>
                      <IconComponent className="w-12 h-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 relative z-10">
        <Section maxWidth="4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Domande frequenti</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Risposte alle domande più comuni
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto costa sviluppare un'app o un sito web?",
                answer: "Il costo dipende dalla complessità del progetto. Per un preventivo personalizzato, contattaci per una consulenza gratuita. Ti forniremo un preventivo dettagliato e trasparente senza impegno.",
              },
              {
                question: "Fornite software gestionale personalizzato?",
                answer: "Sì, sviluppiamo software gestionale su misura per aziende: gestione magazzino, inventario, contabilità, controllo di gestione e automazioni. Creiamo soluzioni personalizzate per le esigenze specifiche della tua attività.",
              },
              {
                question: "Quanto tempo serve per completare un progetto?",
                answer: "I tempi variano in base alla complessità: un sito web semplice può richiedere 2-4 settimane, mentre un'app o un software gestionale più complesso può richiedere 2-4 mesi. Ti forniremo una timeline dettagliata nella proposta.",
              },
              {
                question: "Lavorate solo a Napoli o in tutta Italia?",
                answer: "Lavoriamo con aziende in tutta Italia. Possiamo organizzare consulenze online e seguire progetti da remoto. Per clienti locali a Napoli, possiamo anche organizzare incontri in presenza se necessario.",
              },
              {
                question: "Fornite supporto dopo la consegna?",
                answer: "Sì, includiamo supporto post-consegna per assicurarci che tutto funzioni perfettamente. Inoltre, offriamo piani di manutenzione e aggiornamenti su richiesta.",
              },
              {
                question: "Come funziona la consulenza gratuita?",
                answer: "La consulenza è una chiacchierata senza impegno via WhatsApp o email dove analizziamo insieme le tue esigenze, ti spieghiamo come possiamo aiutarti e rispondiamo a tutte le tue domande. Nessun costo, nessun impegno.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-strong p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-foreground/70 mb-6">
              Hai altre domande?
            </p>
            <Button
              href="https://wa.me/393921723028"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contattaci su WhatsApp
            </Button>
          </motion.div>
        </Section>
      </section>

      {/* Perché Haxies Dev */}
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
              <span className="gradient-text">Perché Haxies Dev</span>
            </h2>
          </motion.div>

          {/* Visual element - Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 flex flex-wrap justify-center gap-4"
          >
            {[
              { name: "Next.js", color: "from-gray-800 to-gray-900" },
              { name: "React", color: "from-blue-500 to-blue-600" },
              { name: "TypeScript", color: "from-blue-600 to-blue-700" },
              { name: "Tailwind CSS", color: "from-cyan-500 to-cyan-600" },
              { name: "Node.js", color: "from-green-600 to-green-700" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-strong px-6 py-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all"
              >
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Approccio su misura",
                description: "Ogni progetto è unico. Analizziamo le tue esigenze e creiamo soluzioni personalizzate.",
              },
              {
                icon: Zap,
                title: "Performance e UX",
                description: "Focus su velocità, usabilità e design moderno per offrire la migliore esperienza.",
              },
              {
                icon: Handshake,
                title: "Supporto diretto",
                description: "Comunichi direttamente con Emmanuel, senza intermediari o call center.",
              },
              {
                icon: Rocket,
                title: "Tecnologia moderna",
                description: "Utilizziamo Next.js, React, cloud e le migliori tecnologie disponibili.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="mb-4 inline-block"
                  >
                    <IconComponent className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
        <Section maxWidth="2xl" className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-12 rounded-3xl border border-primary/30"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Pronto a digitalizzare la tua attività?
            </h2>
            <p className="text-2xl sm:text-3xl text-foreground mb-6 max-w-2xl mx-auto font-semibold">
              Preventivo <span className="text-primary">Gratuito</span> in 24h
            </p>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Nessun impegno. Risposta garantita. Trasformiamo la tua idea in realtà.
            </p>
            
            {/* Urgenza */}
            <div className="mb-8">
              <div className="inline-block bg-accent/20 border border-accent/40 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-foreground">
                  ⚡ Posti limitati questo mese - Prenota ora
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="https://wa.me/393921723028"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl px-10 py-6"
              >
                🚀 Richiedi Preventivo Gratuito
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-foreground/70 flex-wrap">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Risposta in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>100% Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-4 h-4 text-primary" />
                <span>Nessun impegno</span>
              </div>
            </div>
          </motion.div>
        </Section>
      </section>
    </div>
  );
}
