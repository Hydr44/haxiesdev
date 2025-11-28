# Haxies Dev - Brand Kit

## 🎨 Identità Visiva

### Brand Name
**Haxies Dev**

### Tagline
"Costruiamo esperienze digitali su misura"

### Mission
Trasformare la tua attività in un prodotto digitale moderno: App, Siti Web e Software personalizzati.

---

## 🎨 Palette Colori

### Colori Principali

#### Primary (Cyan Neon)
- **Hex**: `#00F5FF`
- **RGB**: `rgb(0, 245, 255)`
- **Uso**: Colore principale del brand, utilizzato per accenti, link, icone e elementi interattivi
- **Esempio**: Logo, bottoni primari, link hover

#### Secondary (Viola)
- **Hex**: `#7C3AED`
- **RGB**: `rgb(124, 58, 237)`
- **Uso**: Colore secondario, utilizzato per gradienti e elementi complementari
- **Esempio**: Gradienti, hover states, elementi decorativi

#### Accent (Arancione)
- **Hex**: `#F59E0B`
- **RGB**: `rgb(245, 158, 11)`
- **Uso**: Colore di accento per evidenziare elementi importanti
- **Esempio**: Badge, notifiche, call-to-action secondari

### Colori Neutri

#### Background
- **Hex**: `#0A0A0F`
- **RGB**: `rgb(10, 10, 15)`
- **Uso**: Sfondo principale del sito

#### Foreground (Testo)
- **Hex**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **Uso**: Testo principale su sfondo scuro

#### Testo Secondario
- **Hex**: `rgba(255, 255, 255, 0.7)`
- **Uso**: Testo secondario, descrizioni

#### Testo Terziario
- **Hex**: `rgba(255, 255, 255, 0.5)`
- **Uso**: Testo di supporto, placeholder

### Gradienti

#### Gradient Principale (Animato)
```css
linear-gradient(
  90deg,
  #00F5FF 0%,
  #7C3AED 25%,
  #EC4899 50%,
  #7C3AED 75%,
  #00F5FF 100%
)
```
- **Uso**: Testi con classe `.gradient-text`, animazione continua

#### Gradient Neon
```css
linear-gradient(135deg, #00F5FF 0%, #7C3AED 50%, #EC4899 100%)
```
- **Uso**: Background, overlay, effetti

---

## ✍️ Tipografia

### Font Family
**Inter** (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Gerarchia Tipografica

#### Heading 1 (Hero)
- **Font Size**: `3.5rem - 4.5rem` (56px - 72px)
- **Font Weight**: `700` (Bold)
- **Line Height**: `1.1`
- **Uso**: Titoli principali, hero section

#### Heading 2 (Sezioni)
- **Font Size**: `2.5rem - 3rem` (40px - 48px)
- **Font Weight**: `700` (Bold)
- **Line Height**: `1.2`
- **Uso**: Titoli di sezione

#### Heading 3 (Sottosezioni)
- **Font Size**: `1.5rem - 2rem` (24px - 32px)
- **Font Weight**: `700` (Bold)
- **Line Height**: `1.3`
- **Uso**: Sottotitoli, card titles

#### Body (Testo principale)
- **Font Size**: `1rem - 1.125rem` (16px - 18px)
- **Font Weight**: `400` (Regular)
- **Line Height**: `1.6 - 1.75`
- **Uso**: Paragrafi, contenuto principale

#### Small (Testo secondario)
- **Font Size**: `0.875rem` (14px)
- **Font Weight**: `400` (Regular)
- **Line Height**: `1.5`
- **Uso**: Note, caption, footer

---

## 🎭 Stile Visivo

### Design Philosophy
- **Minimalista e Futuristico**: Design pulito con elementi high-tech
- **Glassmorphism**: Effetti vetro con blur e trasparenza
- **Neon & Glow**: Effetti luminosi e glow per elementi interattivi
- **Animazioni Smooth**: Transizioni fluide e animazioni scroll-based

### Elementi di Design

#### Glassmorphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

#### Neon Glow
```css
box-shadow: 
  0 0 20px rgba(0, 245, 255, 0.5),
  0 0 40px rgba(0, 245, 255, 0.3);
```

#### Border Radius
- **Small**: `0.75rem` (12px)
- **Medium**: `1rem` (16px)
- **Large**: `1.5rem` (24px)
- **XLarge**: `2rem` (32px)

#### Spacing
- **Base Unit**: `0.25rem` (4px)
- **Padding Cards**: `2rem` (32px)
- **Section Padding**: `8rem` (128px) verticale
- **Gap Grid**: `2rem` (32px)

---

## 🖼️ Logo

### Logo Testuale
**"Haxies Dev"** con classe `.gradient-text`

### Caratteristiche Logo
- **Font**: Inter Bold
- **Size**: `1.5rem - 2rem` (24px - 32px)
- **Effect**: Gradient animato (cyan → viola → rosa)
- **Animation**: Gradient flow continuo (3s loop)

### Varianti Logo
1. **Full Logo**: "Haxies Dev" (gradient animato)
2. **Logo Dark**: Su sfondo scuro (default)
3. **Logo Light**: Su sfondo chiaro (se necessario)

---

## 🎯 Iconografia

### Icon Library
**Lucide React** - Icone SVG moderne e minimaliste

### Stile Icone
- **Size**: `16px - 64px` (variabile)
- **Color**: Primary (`#00F5FF`) per default
- **Stroke Width**: `2px`
- **Style**: Outline, minimalista

### Icone Principali
- **Smartphone**: Sviluppo App
- **Globe**: Siti Web
- **Settings**: Software su misura
- **Target**: Approccio su misura
- **Zap**: Performance
- **Handshake**: Supporto
- **Rocket**: Tecnologia
- **Search**: Trasparenza
- **Gem**: Qualità
- **Users**: Cliente
- **Mail**: Email
- **MessageCircle**: WhatsApp
- **Clock**: Tempi

---

## 🎬 Animazioni

### Principi
- **Durata**: 0.3s - 0.8s per transizioni
- **Easing**: `ease-in-out` per la maggior parte
- **Scroll-based**: Animazioni al scroll (fade-in, slide-up)

### Animazioni Principali

#### Gradient Text Flow
- **Durata**: 3s
- **Loop**: Infinite
- **Effect**: Gradient che scorre orizzontalmente

#### Fade In + Slide Up
- **Durata**: 0.6s
- **Delay**: Staggered (0.1s per elemento)
- **Effect**: Opacity + translateY

#### Hover Scale
- **Durata**: 0.3s
- **Scale**: 1.02 - 1.05
- **Effect**: Leggero ingrandimento al hover

#### Floating Orbs
- **Durata**: 15s - 20s
- **Loop**: Infinite
- **Effect**: Movimento lento e fluido

---

## 📐 Layout & Grid

### Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

### Container Max Width
- **Small**: `640px`
- **Medium**: `768px`
- **Large**: `1024px`
- **XL**: `1280px`
- **2XL**: `1536px`
- **Full**: `1280px` (7xl)

### Grid System
- **Columns**: 12 columns (implicito con Tailwind)
- **Gap**: `2rem` (32px) standard

---

## 🎨 Componenti UI

### Button

#### Primary
- **Background**: Gradient (primary → secondary)
- **Text**: White
- **Border**: Primary con glow
- **Hover**: Scale 1.05, glow intensificato

#### Secondary
- **Background**: Glassmorphism
- **Text**: Foreground
- **Border**: Primary/50
- **Hover**: Border primary, background primary/10

#### Ghost
- **Background**: Transparent
- **Text**: Primary
- **Border**: Transparent
- **Hover**: Border primary/30, background primary/5

### Card
- **Background**: Glassmorphism
- **Border**: Primary/20
- **Border Radius**: `1.5rem` (24px)
- **Padding**: `2rem` (32px)
- **Hover**: Border primary/40, scale 1.02, shadow glow

### Input/Form
- **Background**: Glass con background/50
- **Border**: Primary/20
- **Focus**: Ring primary, border primary/40
- **Border Radius**: `0.75rem` (12px)

---

## 📱 Responsive Design

### Mobile First
- Design ottimizzato per mobile
- Progressive enhancement per desktop

### Touch Targets
- **Min Size**: `44px x 44px`
- **Spacing**: `16px` minimo tra elementi cliccabili

---

## ✅ Do's and Don'ts

### ✅ DO
- Usa il gradient animato per testi importanti
- Mantieni il contrasto alto per leggibilità
- Usa glassmorphism per cards e overlay
- Applica animazioni smooth e non invasive
- Mantieni spaziature generose

### ❌ DON'T
- Non usare colori fuori dalla palette
- Non usare font diversi da Inter
- Non sovraccaricare con troppe animazioni
- Non ridurre il contrasto sotto WCAG AA
- Non usare effetti troppo invasivi

---

## 📦 Asset Files

### Colori Tailwind
Definiti in `tailwind.config.ts`:
```typescript
colors: {
  background: "#0A0A0F",
  foreground: "#FFFFFF",
  primary: "#00F5FF",
  secondary: "#7C3AED",
  accent: "#F59E0B",
}
```

### CSS Utilities
Definiti in `app/globals.css`:
- `.glass` - Glassmorphism base
- `.glass-strong` - Glassmorphism forte
- `.gradient-text` - Testo con gradient animato
- `.neon-glow` - Effetto glow neon
- `.animated-bg` - Background animato
- `.grid-pattern` - Pattern a griglia

---

## 📞 Contatti Brand

### Email
**info@haxiesdev.it**

### WhatsApp
**+39 392 172 3028**

### Website
**haxiesdev.it** (quando disponibile)

---

## 👤 Founder
**Emmanuel Scozzarini**

---

*Ultimo aggiornamento: Gennaio 2025*

