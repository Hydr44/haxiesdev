# ✅ Test del Form Contatti

## 🎯 Verifica Configurazione

Prima di testare, assicurati di avere:

- [x] Service ID configurato: `service_qhwcd92`
- [x] Public Key configurato: `Wf_f3AKmu7cTd53j-`
- [x] Template ID configurato nel `.env.local`
- [x] Template EmailJS creato con "To Email" = `info@haxiesdev.it`
- [x] Variabili aggiunte su Vercel
- [x] Deploy riavviato su Vercel (se necessario)

---

## 🧪 Come Testare

### 1. Test Locale (sviluppo)

1. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

2. Vai su `http://localhost:3000/contact`

3. Compila il form:
   - Nome: Test
   - Email: tua@email.com
   - Tipo progetto: Sviluppo App
   - Messaggio: Questo è un test

4. Clicca "Invia messaggio"

5. Dovresti vedere:
   - Messaggio di successo verde
   - Form che si resetta
   - Email che arriva a info@haxiesdev.it

### 2. Test su Vercel (produzione)

1. Vai sul tuo sito live (es: `haxiesdev.vercel.app/contact`)

2. Compila il form con dati reali o di test

3. Invia il messaggio

4. Controlla:
   - Messaggio di successo
   - Console del browser (F12) per eventuali errori
   - Email in info@haxiesdev.it (controlla anche spam)

---

## 🔍 Debug se Non Funziona

### Apri la Console del Browser (F12)

1. Vai su Console
2. Compila e invia il form
3. Controlla se ci sono errori rossi

### Errori Comuni

#### "Service ID not found"
- Verifica che `NEXT_PUBLIC_EMAILJS_SERVICE_ID` sia corretto
- Controlla che inizi con `NEXT_PUBLIC_`

#### "Template ID not found"
- Verifica che `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` sia corretto
- Controlla che il template esista su EmailJS

#### "Public Key invalid"
- Verifica che `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` sia corretto
- Controlla che non ci siano spazi o caratteri extra

#### "Email not sent"
- Controlla le impostazioni SMTP Aruba
- Verifica che "To Email" nel template sia `info@haxiesdev.it`
- Controlla lo spam

---

## ✅ Successo!

Se tutto funziona:
- ✅ Messaggio di successo appare
- ✅ Form si resetta
- ✅ Email arriva a info@haxiesdev.it
- ✅ Email contiene tutti i dati del form

---

## 📧 Cosa Dovresti Ricevere

L'email dovrebbe contenere:

```
Oggetto: Nuovo messaggio da Haxies Dev - [tipo progetto]

Messaggio:

Hai ricevuto un nuovo messaggio dal form di contatto:

Nome: [nome inserito]
Email: [email inserita]
Tipo progetto: [tipo selezionato]

Messaggio:
[messaggio inserito]

---
Inviato da: Haxies Dev Contact Form
```

---

**Se tutto funziona, il form è pronto per il lancio!** 🚀

