---
id: abuse-report
title: "Segnala abusi e contenuti illegali - Tutto quello che devi sapere!"
description: "Scopri come identificare e segnalare abusi online per proteggere utenti e servizi in modo efficace → Scopri di più ora"
sidebar_label: Segnala Abusi
---

## Introduzione

Internet crea valore. Gli abusi danneggiano utenti e servizi. Il nostro obiettivo è individuare e fermare gli incidenti rapidamente. Puoi segnalare sospetti abusi al nostro Team Abuse. Esaminiamo ogni segnalazione, preserviamo le prove, agiamo secondo la legge e le nostre policy, e notifichiamo le autorità competenti quando necessario.

## Tipi di Abuso

Gli abusi possono manifestarsi in modi diversi. Segnala qualsiasi caso che rientri o sia vicino alle categorie qui sotto:

<details>
  <summary>Spam</summary>

Messaggi non richiesti o in massa inviati tramite i nostri sistemi o contenuti ospitati che attivano filtri antispam. Varianti includono spam email, spam nei commenti, spam SEO, e creazione automatica di account. Fornisci messaggi di esempio, header, IP mittenti e pattern di invio.

</details>

<details>
  <summary>Attacchi e DDoS</summary>

Traffico ostile volto a interrompere servizi o sondare sistemi. Forme comuni sono flood volumetrici L3 L4, flood HTTP layer-7, amplificazione, login brute-force e scansioni aggressive di porte. Indicatori includono picchi di PPS o Mbps, tassi elevati di 4xx 5xx, e fallimenti di autenticazione ripetuti da fonti rotanti.

</details>

<details>
  <summary>Violazioni di copyright e marchi</summary>

Distribuzione non autorizzata di opere protette o uso improprio di marchi registrati. Varianti includono mirror pirata, download crackati, impersonificazione di brand e domini ingannevoli. Fornisci l’opera, il titolare dei diritti, la posizione esatta e lo stato di autorizzazione.

</details>

<details>
  <summary>Phishing</summary>

Contenuti progettati per raccogliere credenziali o dati di pagamento imitando brand affidabili. Varianti includono portali di login falsi, truffe con fatture, esche QR o allegati, e MFA fatigue. Specifica il brand target, i punti di cattura e come la pagina differisce dal sito legittimo.

</details>

<details>
  <summary>GDPR</summary>

Trattamento, esposizione o fuga non autorizzata di dati personali. Casi tipici includono indici aperti, bucket mal configurati, scraping senza base legale e log pubblici. Descrivi categorie di dati, portata, soggetti coinvolti e causa dell’esposizione.

</details>

<details>
  <summary>CSAM/SAM</summary>

Qualsiasi materiale che rappresenti sfruttamento sessuale di persone. Tolleranza zero.

</details>

<details>
  <summary>Contenuti illegali</summary>

Contenuti che violano la legge vigente come propaganda estremista, minacce, hate speech, incitamento alla violenza o diffamazione. Varianti includono doxxing, minacce esplicite e materiali vietati dalla giurisdizione. Fornisci la posizione esatta e, se nota, la base legale coinvolta.

</details>

<details>
  <summary>Altro</summary>

Abusi che non rientrano nelle categorie sopra ma danneggiano comunque utenti o sistemi. Esempi includono hosting malware, botnet C2, frodi e mining cripto non autorizzato. Condividi hash, URL, pattern C2 e anomalie nell’uso delle risorse.

</details>

## Informazioni Richieste

Per garantire una segnalazione completa e utilizzabile, fornisci dettagli esaustivi che ci permettano di identificare la risorsa, verificare l’incidente e prendere le misure giuste, includendo:
- Posizione. URL, IP, porta, hostname, percorso file, hash
- Timestamp in UTC nel formato YYYY-MM-DDTHH:MM:SSZ
- Descrizione. Cosa è successo, come è stato rilevato, impatto osservato
- Prove. Screenshot, log testuali, email complete con header in formato EML, PCAP breve, NetFlow, header HTTP

## Formati Accettati e Invio

Fornisci le prove in formati chiari e accessibili. Allegare file piccoli via email o ospitare file grandi esternamente. Allegare direttamente file da piccoli a medi. Preferisci formati aperti e non modificati. Testo grezzo è meglio di screenshot di testo.

Per file grandi, condividi un link di download stabile. Deve essere accessibile senza interazione o includere credenziali chiare. Indica la durata di validità del link. Aggiungi checksum per verificare l’integrità.

Usa formati standard come TXT, PDF, PNG, JPG, PCAP o PCAPNG, EML, HAR, CSV e JSON. Non includere password, chiavi private o dati personali completi a meno che non sia strettamente necessario.

Per qualità, invia email in EML con header completi, log in testo semplice, tracce di rete in PCAP o PCAPNG brevi e rilevanti, e screenshot in risoluzione originale.

Per sicurezza, oscura eventuali segreti; se serve, metti i file in un archivio protetto da password e condividi la password separatamente. Per CSAM/SAM, non trasmettere file, fornisci solo link.

## Contattaci

Invia la tua segnalazione a `abuse@zap-hosting.com`. Usa un oggetto chiaro come `Segnalazione Abuso Phishing` o `Segnalazione Abuso DDoS`. Invia una mail per ogni incidente. Ecco un esempio di richiesta completa:

```
To: abuse@zap-hosting.com
Subject: Segnalazione Abuso Brute Force (SSH)

Posizione:
- IP Target: XXX.XX.XXX.XX
- Servizio: SSH
- Porta: 22
- Hostname: v12345.zap-hosting.com

Timestamp (UTC):
- Primo rilevamento: 2025-08-23T09:12:04Z
- Ultimo rilevamento: 2025-08-23T10:03:31Z

Descrizione:
"Tentativi ripetuti di login SSH con username e IP sorgente rotanti. Rilevato tramite anomalie in auth.log e aumento del tasso di connessione. Autenticazione password disabilitata dopo il rilevamento. Nessun login riuscito osservato."

Prove:
- Estratto auth.log con molteplici "Failed password" e "Invalid user"
- Snippet log fail2ban con ban e indirizzi sorgente
- PCAP di 60 secondi che cattura tentativi TCP sulla porta 22
- Conteggi aggregati: 12.438 tentativi da 352 IP sorgenti
- Principali sorgenti con info ASN

Estratto log esempio:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Cosa succede dopo

Il nostro Team Abuse processa la tua segnalazione il prima possibile e risponde rapidamente. Esaminiamo l’incidente e lo priorizziamo in base alla gravità.

In base alla revisione, prendiamo azioni che includono notifica al cliente, sospensione temporanea/permanente, rimozione del contenuto segnalato, conservazione delle prove e notifica alle autorità competenti quando necessario.