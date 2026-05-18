---
id: vserver-windows-supabase
title: "Configura Supabase su Windows"
description: "Scopri come configurare Supabase per una piattaforma Postgres open-source affidabile con autenticazione e funzionalità realtime → Scopri di più ora"
sidebar_label: Installa Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Supabase è una piattaforma di sviluppo Postgres open-source che offre un database Postgres completo più autenticazione, API istantanee, realtime e storage, rappresentando un’alternativa open-source a Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Stai pensando di ospitare questo servizio da solo? Ti guideremo passo passo su come configurarlo e impostarlo, con tutto quello che devi sapere.

## Installa Supabase con il One Click Apps Installer

Puoi installare **Supabase** direttamente tramite il nostro **One Click Apps Installer** nell’interfaccia web del VPS. Dopo aver completato la configurazione iniziale delle app, apri il catalogo app, cerca **Supabase** e avvia il deployment scegliendo progetto, ambiente e dominio preferiti. Questo ti offre un modo rapido e user-friendly per distribuire e gestire **Supabase** senza configurazioni manuali da linea di comando, beneficiando comunque della gestione web integrata, supporto per domini personalizzati e provisioning SSL dove disponibile.

<InlineVoucher />

## Prerequisiti

Prima di installare **Supabase**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consiglio ZAP-Hosting      |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Core                |
| RAM        | 4 GB        | 8 GB                       |
| Spazio disco | 25 GB     | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Git`, `Docker (Engine e Compose)`

**Sistema Operativo:** Ultima versione di Ubuntu/Debian compatibile con Docker 2

Verifica che tutte le dipendenze siano installate e che il sistema operativo sia aggiornato per evitare problemi di compatibilità durante l’installazione di Supabase.

## Preparazione

Prima di configurare **Supabase**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi assicurano un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.

### Aggiorna il sistema
Per garantire che il sistema abbia le ultime patch di sicurezza e aggiornamenti software, esegui sempre prima un aggiornamento completo. Così sarai sicuro di partire con la versione più sicura e aggiornata.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze.

#### Git
I dati di Supabase verranno scaricati tramite GitHub, quindi Git deve essere installato prima. Per farlo, installa [Git per Windows](https://git-scm.com/downloads/win) sul tuo server.

#### Docker
Supabase verrà distribuito e gestito tramite un container Docker. Per questo Docker deve essere installato prima. Installa [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) sul tuo server.

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](vserver-windows-docker.md).

## Installazione
Ora che tutti i requisiti sono soddisfatti e le preparazioni completate, puoi procedere con l’installazione di Supabase. Apri il prompt dei comandi. Clona il repository Supabase, crea una cartella dedicata al progetto e copia gli asset Docker e il file di esempio dell’ambiente al suo interno.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Entra nella cartella del progetto, scarica le ultime immagini dei container e avvia lo stack in modalità detached.
```
cd supabase-project
docker compose pull
docker compose up -d
```

Ora puoi accedere a Supabase Studio tramite `http://<tuo-ip>:8000`. Ti verrà chiesto username e password. Di default, le credenziali sono:

- Username: `supabase`
- Password: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Credenziali di default
La tua app ora gira con credenziali di default. Proteggi i tuoi servizi il prima possibile seguendo le istruzioni qui sotto.
:::

## Configurazione
Non dovresti mai distribuire con valori di default o di esempio. Sostituisci tutti i placeholder con segreti forti e unici, rivedi la configurazione in base alle tue esigenze di sicurezza e riavvia tutti i servizi per applicare le modifiche.

Genera chiavi API sicure prima di esporre qualsiasi servizio. Inizia scegliendo un segreto JWT di 40 caratteri. Puoi usare il valore fornito o crearne uno tuo. Conserva questo segreto localmente in un posto sicuro. Non condividerlo e non inserirlo nel controllo versione. Usa il segreto per generare un JWT e poi ricava le chiavi API anonime e di servizio usando il form indicato nella documentazione Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Esegui il form due volte per ottenere entrambe le chiavi. Aggiorna il file `./docker/.env` con:

- `ANON_KEY`: chiave anonima
- `SERVICE_ROLE_KEY`: chiave di servizio

Aggiorna i segreti richiesti in `./docker/.env`. Questi valori devono essere impostati per una distribuzione funzionante:

- `POSTGRES_PASSWORD`: password per il ruolo `postgres`
- `JWT_SECRET`: usato da PostgREST e GoTrue
- `SITE_URL`: URL base del tuo sito
- `SMTP_*`: credenziali del server mail
- `POOLER_TENANT_ID`: tenant id usato dal pooler Supavisor

Proteggi il Dashboard con nuove credenziali prima dell’uso in produzione. Modifica `./docker/.env`:

- `DASHBOARD_USERNAME`: utente dashboard
- `DASHBOARD_PASSWORD`: password dashboard

Puoi definire più utenti dashboard in `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Per abilitare tutte le funzionalità del dashboard da remoto (fuori da `localhost`), imposta `SUPABASE_PUBLIC_URL` in `./docker/.env` con l’URL o IP che userai per accedere al dashboard.

Applica le modifiche di configurazione riavviando lo stack:

```
docker compose down
docker compose up -d
```

## Conclusione e risorse utili

Congratulazioni! Hai installato e configurato Supabase con successo sul tuo VPS/Server Dedicato. Ti consigliamo anche di dare un’occhiata alle seguenti risorse, che possono offrirti ulteriore supporto e guida durante la configurazione del server:

- [Supabase.com](https://Supabase.com/) - Sito ufficiale
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Documentazione Supabase

Hai domande specifiche non trattate qui? Per ulteriori info o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂