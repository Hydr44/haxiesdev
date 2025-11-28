# Haxies Dev - Portfolio Website

Portfolio website moderno e minimalista in stile Apple per **Haxies Dev**, studio digitale indipendente.

## 🚀 Tech Stack

- **Next.js 15** con App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** per animazioni
- Deploy-ready per **Vercel**

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia il server di produzione
npm start
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📁 Struttura del Progetto

```
├── app/
│   ├── layout.tsx          # Layout principale con Navbar e Footer
│   ├── page.tsx            # Homepage
│   ├── services/           # Pagina Servizi
│   ├── portfolio/          # Pagina Portfolio
│   ├── about/              # Pagina Chi siamo
│   ├── contact/            # Pagina Contatti
│   └── globals.css         # Stili globali
├── components/
│   ├── Navbar.tsx          # Navbar con menu mobile
│   ├── Footer.tsx          # Footer
│   ├── Button.tsx          # Componente Button riutilizzabile
│   ├── Section.tsx         # Wrapper per sezioni
│   └── ProjectCard.tsx     # Card per progetti
└── package.json
```

## 🎨 Design

- Design minimalista in stile Apple
- Tipografia grande e spazi bianchi generosi
- Animazioni smooth con Framer Motion
- Animazioni scroll-based per sezioni e immagini
- Completamente responsive (mobile-first)
- Tema chiaro (no dark mode)

## 📄 Pagine

1. **Homepage (`/`)** - Hero, servizi, portfolio preview, CTA
2. **Servizi (`/services`)** - Dettagli sui servizi offerti
3. **Portfolio (`/portfolio`)** - Griglia di progetti
4. **Chi siamo (`/about`)** - Storia e valori di Haxies Dev
5. **Contatti (`/contact`)** - Form di contatto e informazioni

## 🔧 Personalizzazione

### Colori

I colori sono definiti in `tailwind.config.ts`:

- Background: `#FFFFFF`
- Testo: `#020617`
- Primary: `#0F172A`
- Secondary: `#00A9FF`

### Contatti

I link di contatto sono configurati in:
- WhatsApp: `https://wa.me/393921723028`
- Email: `info@haxiesdev.it`

## 🚀 Deploy su Vercel

1. Push del codice su GitHub
2. Importa il progetto su Vercel
3. Vercel rileverà automaticamente Next.js
4. Deploy automatico ad ogni push

## 📝 Note

- Il form di contatto è preparato ma non ha backend. Puoi integrarlo con servizi come:
  - Formspree
  - SendGrid
  - Resend
  - EmailJS

## 📄 Licenza

© 2025 Haxies Dev – Emmanuel Scozzarini

