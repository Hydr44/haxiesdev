# 📧 Setup EmailJS per Form Contatti

## Perché EmailJS?

EmailJS è un servizio gratuito che permette di inviare email direttamente dal frontend senza bisogno di un backend. Perfetto per siti statici o Next.js.

**Piano gratuito**: 200 email/mese (sufficiente per iniziare)

---

## 🚀 Setup Rapido

### 1. Crea Account EmailJS

1. Vai su [https://www.emailjs.com](https://www.emailjs.com)
2. Clicca su "Sign Up" e crea un account gratuito
3. Verifica la tua email

### 2. Configura Email Service

1. Vai su **Email Services** nel dashboard
2. Clicca **Add New Service**
3. Scegli il tuo provider email:
   - **Gmail** (più semplice)
   - **Outlook**
   - **Yahoo**
   - **SMTP** (per provider personalizzati come Aruba, cPanel, ecc.)

#### Se hai Aruba Mail (o altri provider SMTP):

1. Scegli **SMTP** come servizio
2. Inserisci questi dati SMTP di Aruba:

```
SMTP Server: smtps.aruba.it
SMTP Port: 465 (SSL) oppure 587 (TLS)
SMTP Username: info@haxiesdev.it (la tua email completa)
SMTP Password: [la password della tua email Aruba]
```

**Nota**: 
- Porta 465 usa SSL/TLS
- Porta 587 usa STARTTLS
- Entrambe funzionano, prova prima la 465

3. Clicca **Create Service**
4. **Copia il Service ID** (es: `service_xxxxx`)

**⚠️ IMPORTANTE per Aruba**:
- Assicurati che la password sia quella della casella email, non quella del pannello Aruba
- Se non funziona, prova a verificare le impostazioni SMTP nel pannello Aruba
- Alcuni provider richiedono di abilitare "Accesso da applicazioni esterne" o "SMTP abilitato"

### 3. Crea Email Template

1. Vai su **Email Templates**
2. Clicca **Create New Template**
3. **IMPORTANTE**: Nella sezione "To Email" inserisci: **info@haxiesdev.it**
4. Nella sezione "From Name" puoi mettere: **Haxies Dev Contact Form**
5. Usa questo template per il contenuto:

```
Oggetto: Nuovo messaggio da Haxies Dev - {{project_type}}

Messaggio:

Hai ricevuto un nuovo messaggio dal form di contatto:

Nome: {{from_name}}
Email: {{from_email}}
Tipo progetto: {{project_type}}

Messaggio:
{{message}}

---
Inviato da: Haxies Dev Contact Form
```

6. **Copia il Template ID** (es: `template_xxxxx`)

**⚠️ ATTENZIONE**: Assicurati che nel campo "To Email" del template ci sia **info@haxiesdev.it**, altrimenti le email non arriveranno alla tua casella!

### 4. Ottieni Public Key

1. Vai su **Account** → **General**
2. **Copia la Public Key** (es: `xxxxxxxxxxxxx`)

### 5. Configura Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**⚠️ IMPORTANTE**: 
- Il file `.env.local` è già nel `.gitignore`, quindi non verrà committato
- Le variabili che iniziano con `NEXT_PUBLIC_` sono accessibili dal frontend

### 6. Aggiungi .env.local a Vercel

Quando fai il deploy su Vercel:

1. Vai su **Settings** → **Environment Variables**
2. Aggiungi le 3 variabili:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Clicca **Save**

---

## ✅ Test

1. Compila il form sul sito
2. Invia il messaggio
3. Controlla la tua email (info@haxiesdev.it)
4. Dovresti ricevere l'email con i dati del form

---

## 🔧 Alternative a EmailJS

Se preferisci altre soluzioni:

### 1. Formspree
- **URL**: https://formspree.io
- **Gratuito**: 50 submission/mese
- Più semplice, ma meno personalizzabile

### 2. Resend (con API Route Next.js)
- **URL**: https://resend.com
- **Gratuito**: 100 email/giorno
- Più professionale, richiede API Route

### 3. SendGrid
- **URL**: https://sendgrid.com
- **Gratuito**: 100 email/giorno
- Più complesso, ma molto potente

---

## 📝 Note

- EmailJS è già installato nel progetto (`@emailjs/browser`)
- Il form è già configurato per usare EmailJS
- Devi solo aggiungere le variabili d'ambiente
- Il form funzionerà automaticamente una volta configurato

---

## 🆘 Problemi Comuni

### Email non arrivano?
1. Controlla lo spam
2. Verifica che le variabili d'ambiente siano corrette
3. Controlla la console del browser per errori
4. Verifica che il template EmailJS sia configurato correttamente

### Errore "Service ID not found"?
- Verifica che `NEXT_PUBLIC_EMAILJS_SERVICE_ID` sia corretto
- Assicurati che la variabile inizi con `NEXT_PUBLIC_`

### Errore "Template ID not found"?
- Verifica che `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` sia corretto
- Controlla che il template esista nel dashboard EmailJS

---

**Una volta configurato, il form invierà automaticamente le email a info@haxiesdev.it!** 📧

