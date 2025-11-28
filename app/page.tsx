"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const scrollToServices = () => {
    const element = document.getElementById("servizi");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-background" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Floating orbs */}
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
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />

        <Section maxWidth="2xl" className="text-center py-32 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="gradient-text">Costruiamo esperienze</span>
            <br />
            <span className="text-foreground">digitali su misura.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Haxies Dev trasforma la tua attività in un prodotto digitale moderno: App, Siti Web e Software personalizzati.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              href="https://wa.me/393921723028"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richiedi una consulenza gratuita
            </Button>
            <Button
              onClick={scrollToServices}
              variant="ghost"
            >
              Scopri i servizi
            </Button>
          </motion.div>
        </Section>
      </section>

      {/* Brand Strip */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 glass border-y border-primary/20 relative z-10"
      >
        <Section>
          <p className="text-center text-foreground/70 text-sm font-medium">
            Studio digitale indipendente fondato da Emmanuel Scozzarini.
          </p>
        </Section>
      </motion.section>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Sviluppo App",
                description: "App native e cross-platform per iOS e Android. Soluzioni personalizzate per gestire la tua attività, coinvolgere i clienti o automatizzare processi interni.",
                gradient: "from-primary/20 to-secondary/20",
              },
              {
                icon: "🌐",
                title: "Siti Web moderni",
                description: "Siti web veloci, responsive e ottimizzati per i motori di ricerca. Landing page, siti vetrina e piattaforme e-commerce con design moderno e user experience curata.",
                gradient: "from-secondary/20 to-accent/20",
              },
              {
                icon: "⚙️",
                title: "Software su misura",
                description: "Software gestionali, automazioni e piccoli SaaS personalizzati. Integrazioni con servizi esistenti e strumenti interni per ottimizzare i tuoi processi.",
                gradient: "from-accent/20 to-primary/20",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-strong p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Approccio su misura",
                description: "Ogni progetto è unico. Analizziamo le tue esigenze e creiamo soluzioni personalizzate.",
              },
              {
                icon: "⚡",
                title: "Performance e UX",
                description: "Focus su velocità, usabilità e design moderno per offrire la migliore esperienza.",
              },
              {
                icon: "👋",
                title: "Supporto diretto",
                description: "Comunichi direttamente con Emmanuel, senza intermediari o call center.",
              },
              {
                icon: "🚀",
                title: "Tecnologia moderna",
                description: "Utilizziamo Next.js, React, cloud e le migliori tecnologie disponibili.",
              },
            ].map((feature, index) => (
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
                  className="text-4xl mb-4 inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* Preview Portfolio */}
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
              <span className="gradient-text">Progetti</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Alcuni dei progetti che abbiamo realizzato
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              title="RescueManager"
              tag="Software gestionale"
              description="Software gestionale completo per autodemolizione e soccorso stradale. Gestione ordini, clienti, magazzino e fatturazione."
              href="/portfolio#rescuemanager"
              index={0}
            />
            <ProjectCard
              title="JumpOn"
              tag="Gioco mobile"
              description="Gioco mobile avvincente con meccaniche innovative e design accattivante. Disponibile su iOS e Android."
              href="/portfolio#jumpon"
              index={1}
            />
            <ProjectCard
              title="App per attività locali"
              tag="App su misura"
              description="Soluzioni personalizzate per attività locali: app per prenotazioni, ordini, loyalty e gestione clienti."
              href="/portfolio"
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button href="/portfolio" variant="secondary">
              Vedi tutti i progetti
            </Button>
          </motion.div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Hai un&apos;idea o un&apos;attività da digitalizzare?
            </h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Parliamone senza impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/393921723028"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivimi su WhatsApp
              </Button>
              <Button
                href="/contact"
                variant="ghost"
              >
                Vai alla pagina contatti
              </Button>
            </div>
          </motion.div>
        </Section>
      </section>
    </div>
  );
}
