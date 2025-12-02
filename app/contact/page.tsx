"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      // Configura EmailJS
      // NOTA: Devi sostituire questi valori con i tuoi da EmailJS
      // Vai su https://www.emailjs.com per creare un account gratuito
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Invia email tramite EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          // NOTA: L'email di destinazione (info@haxiesdev.it) va configurata nel template EmailJS
          // Vai su EmailJS Dashboard → Email Templates → Modifica template
          // E imposta "To Email" = info@haxiesdev.it
        },
        publicKey
      );

      setSubmitStatus("success");
      setSubmitMessage("Messaggio inviato con successo! Ti risponderemo presto.");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Errore invio email:", error);
      setSubmitStatus("error");
      setSubmitMessage("Si è verificato un errore. Puoi contattarmi direttamente via email o WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset status quando l'utente modifica il form
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 animated-bg grid-pattern opacity-30" />
      
      {/* Hero */}
      <Section maxWidth="2xl" className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-8"
        >
          <span className="gradient-text">Contatti</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          Parliamo del tuo progetto.
        </motion.p>
      </Section>

      <Section maxWidth="4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-8 rounded-3xl border border-primary/20"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Invia un messaggio
              </h2>
              <p className="text-sm text-foreground/70">
                Compila il form in 30 secondi. Ti risponderemo entro 24 ore.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl border ${
                    submitStatus === "success"
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-accent/10 border-accent/30 text-accent"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitMessage}</p>
                  </div>
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl glass border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all bg-background/50 text-foreground placeholder:text-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[44px]"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl glass border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all bg-background/50 text-foreground placeholder:text-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[44px]"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Tipo di progetto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl glass border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all bg-background/50 text-foreground disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[44px]"
                >
                  <option value="">Seleziona un'opzione</option>
                  <option value="app">Sviluppo App</option>
                  <option value="website">Sito Web</option>
                  <option value="software">Software su misura</option>
                  <option value="other">Altro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl glass border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all resize-none bg-background/50 text-foreground placeholder:text-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[120px]"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>

              <div className="space-y-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  onClick={() => {}}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
                </Button>
                <p className="text-xs text-center text-foreground/60">
                  Cliccando invia, accetti che i tuoi dati vengano utilizzati per rispondere alla tua richiesta. 
                  <br />
                  <span className="text-primary">Privacy garantita</span> - Non condividiamo i tuoi dati.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong p-8 rounded-3xl border border-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Altre modalità di contatto
                </h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Preferisci contattarmi direttamente? Ecco come puoi raggiungermi.
                </p>
              </div>
            </div>

            <div className="glass-strong p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@haxiesdev.it"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    info@haxiesdev.it
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-strong p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      Risposta rapida garantita
                    </p>
                  </div>
                </div>
                <Button
                  href="https://wa.me/393921723028"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Scrivimi su WhatsApp
                </Button>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-30" />
              <div className="relative z-10 flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Tempi di risposta
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Rispondo solitamente entro 24 ore. Per richieste urgenti, WhatsApp è il canale più veloce.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
    );
}
