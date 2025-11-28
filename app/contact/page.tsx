"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per inviare il form
    // Per ora mostriamo solo un alert
    alert("Grazie per il messaggio! Ti risponderemo presto.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          Contatti
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

      <Section maxWidth="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tipo di progetto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
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
                  className="block text-sm font-medium text-foreground mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Invia messaggio
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Altre modalità di contatto
              </h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Preferisci contattarmi direttamente? Ecco come puoi raggiungermi.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@haxiesdev.it"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  info@haxiesdev.it
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  WhatsApp
                </h3>
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

              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-sm text-foreground/70">
                  💡 <strong>Suggerimento:</strong> Rispondo solitamente entro 24 ore. Per richieste urgenti, WhatsApp è il canale più veloce.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

