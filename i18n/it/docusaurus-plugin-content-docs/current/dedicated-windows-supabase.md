---
id: dedicated-windows-supabase
title: "Server Dedicato: Configura Supabase su Windows"
description: "Scopri come installare e configurare Supabase, la piattaforma open-source Postgres affidabile con autenticazione e funzionalità realtime → Scopri di più ora"
sidebar_label: Installa Supabase
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Supabase è una piattaforma di sviluppo Postgres open-source che offre un database Postgres completo più autenticazione, API istantanee, realtime e storage, rappresentando un’alternativa open-source a Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Vuoi ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere per farlo al meglio.



## Prerequisiti

Prima di installare **Supabase**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo     | Consiglio ZAP-Hosting      |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 Core CPU | 4 Core CPU                 |
| RAM        | 4 GB       | 8 GB                       |
| Spazio disco | 25 GB    | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Git`, `Docker (Engine e Compose)`

**Sistema Operativo:** Ultima versione di Ubuntu/Debian compatibile con Docker 2

Verifica che tutte le dipendenze siano installate e che il sistema operativo sia aggiornato per evitare problemi di compatibilità durante l’installazione di Supabase.



## Preparazione

Prima di configurare **Supabase**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi garantiscono un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema abbia le ultime patch di sicurezza e aggiornamenti software, esegui sempre prima un aggiornamento completo. Così sarai sicuro di partire con il software più aggiornato.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze.

#### Git
I dati di Supabase verranno scaricati da GitHub, quindi Git deve essere installato prima. Per farlo, installa [Git per Windows](https://git-scm.com/downloads/win) sul tuo server.
#### Docker

Supabase verrà eseguito tramite un container Docker. Per questo Docker deve essere installato prima. Installa [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) sul tuo server.

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](dedicated-windows-docker.md).


## Installazione
Ora che hai tutto pronto e le dipendenze installate, puoi procedere con l’installazione di Supabase. Apri il prompt dei comandi. Clona il repository Supabase, crea una cartella dedicata al progetto e copia dentro i file Docker e il file di esempio per l’ambiente.

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

Ora puoi accedere a Supabase Studio tramite `http://<tuo-ip>:8000`. Ti verrà chiesto username e password. Di default sono:

- Username: `supabase`
- Password: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Credenziali di Default
La tua app ora gira con credenziali di default. Proteggi subito i tuoi servizi seguendo le istruzioni qui sotto.
:::



## Configurazione
Non usare mai valori di default o di esempio in produzione. Sostituisci tutti i placeholder con segreti forti e unici, rivedi la configurazione in base alle tue esigenze di sicurezza e riavvia tutti i servizi per applicare le modifiche.

Genera chiavi API sicure prima di esporre qualsiasi servizio. Parti scegliendo un segreto JWT da 40 caratteri. Puoi usare quello fornito o crearne uno tuo. Conserva questo segreto in un posto sicuro, non condividerlo e non inserirlo nel version control. Usa il segreto per generare un JWT e poi ricava le chiavi anonime e di servizio usando il form indicato nella documentazione Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Esegui il form due volte per ottenere entrambe le chiavi. Aggiorna il file `./docker/.env` con:

- `ANON_KEY`: chiave anonima
- `SERVICE_ROLE_KEY`: chiave di servizio

Aggiorna i segreti richiesti in `./docker/.env`. Questi valori sono obbligatori per un deploy funzionante:

- `POSTGRES_PASSWORD`: password per il ruolo `postgres`
- `JWT_SECRET`: usato da PostgREST e GoTrue
- `SITE_URL`: URL base del tuo sito
- `SMTP_*`: credenziali del server mail
- `POOLER_TENANT_ID`: tenant id usato dal pooler Supavisor

Proteggi il Dashboard con nuove credenziali prima di usarlo in produzione. Modifica `./docker/.env`:

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

Applica le modifiche riavviando lo stack:

```
docker compose down
docker compose up -d
```




## Conclusione e Risorse Utili

Complimenti! Hai installato e configurato Supabase con successo sul tuo Server Dedicato. Ti consigliamo di dare un’occhiata anche a queste risorse, che possono aiutarti ulteriormente nella configurazione del server:

- [Supabase.com](https://Supabase.com/) - Sito Ufficiale
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Documentazione Supabase

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, contatta pure il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂