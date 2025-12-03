"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Shield, Database, Lock, Eye } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "Gennaio 2025";

  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      
      {/* Hero */}
      <Section maxWidth="2xl" className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            La tua privacy è importante per noi. Questa pagina descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
          </p>
          <p className="text-sm text-foreground/60 mt-4">
            Ultimo aggiornamento: {lastUpdated}
          </p>
        </motion.div>
      </Section>

      <Section maxWidth="4xl" className="space-y-12">
        {/* Titolare del trattamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Database className="w-8 h-8 text-primary" />
            Titolare del trattamento
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              <strong className="text-foreground">Haxies Dev</strong>
              <br />
              Studio digitale indipendente
              <br />
              Fondato da: Emmanuel Scozzarini
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> info@haxiesdev.it
            </p>
            <p>
              <strong className="text-foreground">WhatsApp:</strong> +39 392 172 3028
            </p>
          </div>
        </motion.div>

        {/* Dati raccolti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Eye className="w-8 h-8 text-primary" />
            Dati raccolti
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Raccogliamo i seguenti dati quando utilizzi il nostro sito o ci contatti:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-foreground">Dati del form di contatto:</strong> Nome, email, tipo di progetto, messaggio
              </li>
              <li>
                <strong className="text-foreground">Dati tecnici:</strong> Indirizzo IP, tipo di browser, pagine visitate (tramite Vercel Analytics)
              </li>
              <li>
                <strong className="text-foreground">Cookie:</strong> Cookie tecnici necessari e cookie di analisi (con il tuo consenso)
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Finalità del trattamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Finalità del trattamento
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>Utilizziamo i tuoi dati per:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rispondere alle tue richieste di contatto e consulenza</li>
              <li>Fornire i servizi richiesti</li>
              <li>Migliorare il sito web e l&apos;esperienza utente (analisi statistiche)</li>
              <li>Rispettare obblighi di legge</li>
            </ul>
            <p className="mt-4">
              <strong className="text-foreground">Non vendiamo, affittiamo o condividiamo i tuoi dati</strong> con terze parti per scopi di marketing.
            </p>
          </div>
        </motion.div>

        {/* Base giuridica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Base giuridica
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>Il trattamento dei dati si basa su:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-foreground">Consenso:</strong> Per cookie di analisi e comunicazioni marketing (se richieste)</li>
              <li><strong className="text-foreground">Esecuzione di un contratto:</strong> Per rispondere a richieste di contatto e fornire servizi</li>
              <li><strong className="text-foreground">Interesse legittimo:</strong> Per migliorare il sito e analizzare le visite</li>
            </ul>
          </div>
        </motion.div>

        {/* Conservazione dati */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Lock className="w-8 h-8 text-primary" />
            Conservazione dei dati
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I dati del form di contatto vengono conservati per il tempo necessario a rispondere alla tua richiesta e, in caso di collaborazione, per la durata del rapporto contrattuale.
            </p>
            <p>
              I dati di analisi (Vercel Analytics) vengono conservati secondo le politiche di Vercel e possono essere cancellati in qualsiasi momento.
            </p>
          </div>
        </motion.div>

        {/* Diritti dell'interessato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            I tuoi diritti (GDPR)
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>Hai diritto a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-foreground">Accesso:</strong> Ottenere copia dei tuoi dati personali</li>
              <li><strong className="text-foreground">Rettifica:</strong> Correggere dati inesatti o incompleti</li>
              <li><strong className="text-foreground">Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati</li>
              <li><strong className="text-foreground">Opposizione:</strong> Opporti al trattamento per motivi legittimi</li>
              <li><strong className="text-foreground">Portabilità:</strong> Ricevere i tuoi dati in formato strutturato</li>
              <li><strong className="text-foreground">Revoca consenso:</strong> Revocare il consenso ai cookie in qualsiasi momento</li>
            </ul>
            <p className="mt-4">
              Per esercitare questi diritti, contattaci a: <a href="mailto:info@haxiesdev.it" className="text-primary hover:text-secondary underline">info@haxiesdev.it</a>
            </p>
          </div>
        </motion.div>

        {/* Cookie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Cookie
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>Utilizziamo i seguenti tipi di cookie:</p>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-bold text-foreground mb-2">Cookie tecnici (necessari)</h3>
                <p className="text-sm">
                  Essenziali per il funzionamento del sito. Non possono essere disattivati.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Cookie di analisi (Vercel Analytics)</h3>
                <p className="text-sm">
                  Utilizzati per analizzare le visite al sito e migliorare l&apos;esperienza utente. Richiedono il tuo consenso.
                </p>
              </div>
            </div>
            <p className="mt-4">
              Puoi gestire le preferenze dei cookie tramite il banner che appare al primo accesso o contattandoci.
            </p>
          </div>
        </motion.div>

        {/* Contatti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-strong p-8 rounded-3xl border border-primary/20 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Domande sulla privacy?
          </h2>
          <p className="text-foreground/80 mb-6">
            Se hai domande su questa privacy policy o sul trattamento dei tuoi dati, contattaci:
          </p>
          <div className="space-y-2">
            <p>
              <a href="mailto:info@haxiesdev.it" className="text-primary hover:text-secondary underline">
                info@haxiesdev.it
              </a>
            </p>
            <p>
              <a href="https://wa.me/393921723028" className="text-primary hover:text-secondary underline" target="_blank" rel="noopener noreferrer">
                WhatsApp: +39 392 172 3028
              </a>
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

