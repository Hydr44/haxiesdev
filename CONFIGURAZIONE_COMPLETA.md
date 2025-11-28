# ✅ Configurazione EmailJS - Riepilogo

## 📋 Dati che Hai

✅ **Service ID**: `service_qhwcd92`  
✅ **Public Key**: `Wf_f3AKmu7cTd53j-`  
⏳ **Template ID**: `template_xxxxx` (da creare)

---

## 🚀 Prossimi Passi

### 1. Crea il Template Email (se non l'hai ancora fatto)

1. Vai su EmailJS → **Email Templates**
2. Clicca **Create New Template**
3. **IMPORTANTE**: Nel campo **"To Email"** inserisci: **info@haxiesdev.it**
4. Nel campo **"From Name"** metti: **Haxies Dev Contact Form**
5. Usa questo contenuto:

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

---

### 2. Crea il File .env.local

Crea un file chiamato `.env.local` nella root del progetto con questo contenuto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_qhwcd92
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Wf_f3AKmu7cTd53j-
```

**Sostituisci `template_xxxxx` con il tuo Template ID reale!**

---

### 3. Aggiungi le Variabili su Vercel

Quando fai il deploy su Vercel:

1. Vai su **Settings** → **Environment Variables**
2. Aggiungi queste 3 variabili:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_qhwcd92
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_xxxxx (il tuo ID reale)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = Wf_f3AKmu7cTd53j-
```

3. Clicca **Save**
4. **Riavvia il deploy** (Vercel → Deployments → Redeploy)

---

## ✅ Test

1. Vai sul sito
2. Compila il form di contatto
3. Invia il messaggio
4. Controlla la tua email **info@haxiesdev.it**
5. Dovresti ricevere l'email con i dati del form!

---

## 📝 Checklist Finale

- [ ] Service ID configurato: `service_qhwcd92` ✅
- [ ] Public Key configurata: `Wf_f3AKmu7cTd53j-` ✅
- [ ] Template creato con "To Email" = info@haxiesdev.it
- [ ] Template ID copiato
- [ ] File `.env.local` creato con tutti i valori
- [ ] Variabili aggiunte su Vercel
- [ ] Deploy riavviato su Vercel
- [ ] Test del form effettuato

---

## 🆘 Se Non Funziona

1. **Controlla la console del browser** (F12) per errori
2. **Verifica che il Template ID sia corretto**
3. **Assicurati che "To Email" nel template sia info@haxiesdev.it**
4. **Controlla lo spam** nella casella email
5. **Verifica le variabili su Vercel** siano corrette

---

**Una volta completato, il form funzionerà perfettamente!** 🎉

