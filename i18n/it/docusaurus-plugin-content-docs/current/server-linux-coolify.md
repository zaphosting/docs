---
id: server-linux-coolify
title: Configura Coolify su un Server Linux - Applicazioni Cloud Self-Hosted
description: "Scopri come installare e configurare Coolify per self-hostare facilmente le tue applicazioni, database e servizi → Scopri di più ora"
sidebar_label: Installa Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

[Coolify](https://coolify.io/) è un'alternativa open-source e self-hosted a Heroku e Vercel che ti permette di gestire facilmente server, applicazioni e database.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

La dashboard intuitiva di Coolify rende il self-hosting un gioco da ragazzi. Ti dà il pieno controllo sulla tua infrastruttura, deployment automatici da GitHub e mantiene bassi i costi cloud.

In questa guida ti accompagneremo passo passo su come configurarlo, preimpostare il tuo account admin e configurare tutto quello che devi sapere.

<InlineVoucher />

## Casi d’uso di Coolify

Coolify è super versatile e si adatta a tanti scenari quotidiani, perfetto per chiunque voglia automatizzare il deployment di app, ospitare database o far girare worker in background. È ideale sia per principianti che per esperti.

Supporta nativamente il deployment di Static Sites, Node.js, Python, PHP, Rust e container Docker. Include template one-click super popolari come WordPress, Ghost, Grafana, Appwrite, Nextcloud e database PostgreSQL. Gestisce automaticamente i certificati SSL Let's Encrypt e il routing reverse proxy tramite Traefik.

## Preparazione

Coolify è leggero di base, ma l’uso delle risorse può aumentare parecchio in base al numero di app, build Docker e database attivi contemporaneamente. Ti consigliamo questi requisiti hardware per ospitare Coolify sul tuo VPS o Server Dedicato.

| Hardware   | Minimo      | Consigliato               |
| ---------- | ----------- | ------------------------- |
| CPU        | 2 vCPU      | 4 vCPU                   |
| RAM        | 2 GB        | 4 GB+                    |
| Spazio disco | 30 GB      | 50 GB+                   |

<InlineServiceLink />

Prima di installare Coolify, connettiti al server e assicurati che il sistema operativo sia aggiornato. Devi accedere via SSH con privilegi root. Se ti serve, abbiamo una guida su [Accesso SSH iniziale](vserver-linux-ssh.md).

:::tip[Autenticazione con Chiave SSH]
Ti consigliamo **fortemente** di usare una chiave SSH invece della password per l’autenticazione. Scopri come fare con la nostra guida [Configurazione Chiave SSH](vserver-linux-sshkey.md).
:::

## Installazione

Dopo esserti connesso al server, aggiorna i pacchetti e installa `curl`, necessario per scaricare lo script di installazione di Coolify:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```

### Prepara le Credenziali Admin

Coolify applica regole di sicurezza rigide per l’account amministratore. Prima di lanciare l’installazione, prepara username, email e password rispettando questi requisiti:

* **Username**
  * Minimo 3 caratteri
  * Massimo 255 caratteri
  * Solo lettere, numeri, spazi, underscore e trattini
* **Email**
  * Deve essere valida
  * Deve avere un record DNS valido
  * Massimo 255 caratteri
* **Password**
  * Minimo 8 caratteri
  * Deve contenere lettere maiuscole e minuscole
  * Almeno un numero
  * Almeno un simbolo speciale
  * Non deve essere una password comune o compromessa

### Esegui lo Script di Installazione

Coolify offre uno script di installazione rapido e automatizzato. Per sicurezza, useremo variabili d’ambiente per preimpostare l’account root e bloccare accessi non autorizzati durante l’installazione.

Esegui questo comando sostituendo username, email e password con le tue credenziali sicure:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Lo script di installazione è open source e lo trovi nel [Repository Ufficiale di Coolify](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Lo script installerà Docker, configurerà le reti necessarie e imposterà i container di Coolify. La procedura può richiedere qualche minuto a seconda dell’hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)

### Accesso a Coolify

Terminata l’installazione, apri il browser e vai all’indirizzo IP del server con la porta 8000: `http://[tuo_ip_server]:8000`

Avendo già fornito le credenziali via comando, vedrai subito la schermata di login, non il wizard iniziale.

Inserisci email e password usate in fase di installazione per entrare nella dashboard.

### Configurazione Record DNS

Dopo il login, la prima cosa da fare è configurare un dominio personalizzato. Accedere a Coolify tramite IP (`http://[tuo_ip_server]:8000`) non è sicuro.

Collegare un dominio permette a Coolify di generare automaticamente certificati SSL gratuiti per la dashboard e tutte le app future.

Vai nella gestione DNS del tuo provider e aggiungi due record `A` che puntano al tuo server. Se il dominio è registrato con ZAP-Hosting, segui la nostra guida [Record Dominio](domain-records.md) per aggiungerli facilmente:

| Nome / Host | Tipo | Valore             | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[tuo_ip_server]`  | Auto / Minimo |
| `*`         | A    | `[tuo_ip_server]`  | Auto / Minimo |

:::info[Routing DNS]
* Il record `@` permette a Coolify di usare il dominio principale
* Il record `*` (wildcard) fa sì che Coolify instradi automaticamente qualsiasi sottodominio nuovo (es. `api.[tuo_dominio]`) senza dover aggiungere record DNS per ogni progetto.
:::

### Configura il Dominio dell’Istanza

Per mettere in sicurezza la tua istanza Coolify con SSL, assegna un dominio. Vai su **Impostazioni** nella sidebar a sinistra e trova il campo **Instance Domain**. Inserisci il dominio completo con prefisso `https://` (es. `https://coolify.[tuo_dominio]`). Clicca su **Salva** per confermare.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)

## Deploy della Prima App

Ora puoi andare nella tab **Projects** e iniziare a deployare la tua prima app!

Clicca su **+ Add Resource** per aggiungere un repository pubblico, un file Docker Compose o scegli uno dei tanti servizi preconfigurati dalla libreria di template one-click. La tua installazione Coolify è pronta all’uso!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)

## Conclusione e Risorse Extra

Complimenti! Hai installato Coolify sul tuo server e puoi subito iniziare a deployare i tuoi progetti. Ti consigliamo anche di dare un’occhiata a queste risorse utili per approfondire e supportarti nella configurazione:

- [coolify.io](https://coolify.io/) - Sito Ufficiale
- [coolify.io/docs](https://coolify.io/docs/) - Documentazione Coolify

Hai domande specifiche che non trovi qui? Per qualsiasi dubbio o supporto, il nostro team è sempre pronto ad aiutarti, tutti i giorni! 🙂

<InlineVoucher />