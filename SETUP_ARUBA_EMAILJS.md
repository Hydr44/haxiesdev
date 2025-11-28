# 📧 Setup EmailJS con Aruba Mail

## Configurazione SMTP per Aruba

Aruba non è tra i provider pre-configurati di EmailJS, quindi devi usare l'opzione **SMTP personalizzato**.

---

## 🚀 Passo-passo per Aruba

### 1. Crea Account EmailJS

1. Vai su [https://www.emailjs.com](https://www.emailjs.com)
2. Crea un account gratuito
3. Verifica la tua email

### 2. Configura SMTP Aruba

1. Vai su **Email Services** nel dashboard EmailJS
2. Clicca **Add New Service**
3. Scegli **SMTP** (non Gmail/Outlook/Yahoo)

### 3. Inserisci i Dati SMTP Aruba

Compila i campi con questi valori:

```
Service Name: Aruba Mail (o un nome a tua scelta)
SMTP Server: smtps.aruba.it
SMTP Port: 465
Security: SSL/TLS
SMTP Username: info@haxiesdev.it (la tua email completa)
SMTP Password: [la password della tua casella email Aruba]
```

**Alternative per la porta**:
- **Porta 465**: SSL/TLS (consigliata)
- **Porta 587**: STARTTLS (se la 465 non funziona)

### 4. Test della Connessione

1. Clicca **Create Service**
2. EmailJS testerà la connessione
3. Se vedi un errore, controlla:
   - Password corretta
   - Username è l'email completa (info@haxiesdev.it)
   - Porta corretta (465 o 587)

### 5. Verifica Impostazioni Aruba

Se la connessione non funziona, controlla nel pannello Aruba:

1. **Abilita SMTP**: Assicurati che SMTP sia abilitato per la tua casella
2. **Password**: Usa la password della casella email, non quella del pannello
3. **Firewall**: Verifica che non ci siano blocchi firewall
4. **Autenticazione**: Assicurati che l'autenticazione SMTP sia abilitata

---

## 📝 Dati SMTP Aruba Completi

### Server SMTP in uscita (per inviare email)

```
Server: smtps.aruba.it
Porta: 465 (SSL) o 587 (TLS)
Sicurezza: SSL/TLS o STARTTLS
Autenticazione: Richiesta
Username: info@haxiesdev.it
Password: [password della casella]
```

### Server IMAP/POP3 (per ricevere - non serve per EmailJS)

```
IMAP: imaps.aruba.it (porta 993)
POP3: pop3s.aruba.it (porta 995)
```

---

## ✅ Dopo la Configurazione

1. **Copia il Service ID** (es: `service_xxxxx`)
2. Continua con il setup del template (vedi `SETUP_EMAILJS.md`)
3. Configura le variabili d'ambiente
4. Testa il form!

---

## 🆘 Problemi Comuni con Aruba

### Errore "Authentication failed"
- Verifica che username e password siano corretti
- Usa l'email completa come username (info@haxiesdev.it)
- Assicurati di usare la password della casella, non del pannello

### Errore "Connection timeout"
- Prova la porta 587 invece di 465
- Verifica che SMTP sia abilitato nel pannello Aruba
- Controlla firewall/antivirus

### Email non arrivano
- Controlla lo spam
- Verifica che il template EmailJS abbia "To Email" = info@haxiesdev.it
- Controlla i log di EmailJS nel dashboard

### "SMTP not enabled"
- Vai nel pannello Aruba
- Abilita SMTP per la casella email
- Alcuni piani Aruba richiedono attivazione esplicita

---

## 💡 Alternative se SMTP non funziona

Se hai problemi con SMTP Aruba, puoi:

1. **Usare Gmail** (più semplice):
   - Crea un account Gmail
   - Collega Gmail a EmailJS
   - Configura il forwarding da Gmail a info@haxiesdev.it

2. **Usare Resend** (più professionale):
   - Non richiede SMTP
   - API più moderna
   - Vedi alternativa in `SETUP_EMAILJS.md`

---

## 📞 Supporto Aruba

Se hai problemi con le impostazioni SMTP:
- Contatta il supporto Aruba
- Chiedi conferma dei dati SMTP per la tua casella
- Verifica che il piano includa SMTP

---

**Una volta configurato, il form invierà le email a info@haxiesdev.it tramite Aruba!** 📧

