---
id: server-linux-n8n
title: "Configura n8n su un Server Linux - Crea Automazioni Workflow Potenti"
description: "Scopri come installare e configurare n8n per l’hosting autonomo e costruire automazioni AI che semplificano il tuo lavoro → Scopri di più ora"
sidebar_label: Installa n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Introduzione

[n8n](https://n8n.io/) è un editor visuale top per iterazioni rapide, dove puoi costruire workflow di automazione e vedere i risultati all’istante. Perfetto sia per automazioni quotidiane che per workflow complessi con agenti AI.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Il supporto per Self Hosting e l’Editor Low Code rendono n8n il preferito di ogni Dev. Se vuoi il massimo controllo, personalizzazioni e contenere i costi nel tempo, l’opzione Self-Hosted è la scelta top per te.

Vuoi ospitare n8n in autonomia? Ti guidiamo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

## Installa n8n con il One Click Apps Installer

Puoi installare **n8n** direttamente tramite il nostro **One Click Apps Installer** nell’interfaccia web del VPS. Dopo aver completato la configurazione iniziale delle app, apri il catalogo app, cerca **n8n** e avvia il deployment scegliendo progetto, ambiente e dominio preferiti. Così hai un modo veloce e user-friendly per gestire **n8n** senza setup manuale da linea di comando, con gestione web integrata, supporto per domini personalizzati e provisioning SSL dove disponibile.

<InlineVoucher />



## Use case di n8n

n8n si usa in tantissimi scenari quotidiani ed è perfetto per chiunque voglia automatizzare task, usare un editor low code, costruire agenti AI, gestire automazioni lead, potenziare CRM, operazioni IT, sicurezza, prototipazione backend e molto altro! n8n è adatto sia ai principianti che agli esperti.

n8n offre oltre 1367 integrazioni come Google Sheets, Telegram, MySQL, Slack, Discord, Postgres con combo di automazioni top come HubSpot e Salesforce, Twilio e WhatsApp, GitHub e Jira, Asana e Slack, Asana e Salesforce, Jira e Slack e tantissimi template dalla community.

## Prerequisiti

Anche se n8n è leggero di base, l’uso di risorse può crescere in base al numero di workflow, chiamate API, nodi pesanti di dati. Consigliamo questi requisiti hardware per ospitare n8n sul tuo VPS.

| Hardware   | Minimo      | Consigliato                |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core | 2 vCPU Core               |
| RAM        | 2 GB         | 4 GB                       |
| Spazio disco | 20 GB        | 50 GB                      |
<InlineServiceLink />

## Preparazione

Prima di iniziare, dobbiamo installare Docker e aggiornare i pacchetti di sistema. Abbiamo già una guida su [Come installare Docker](dedicated-linux-docker.md). Assicurati di averla completata prima di partire con l’installazione.

## Installazione
Dopo aver installato Docker sul server, verifica l’installazione con questi comandi:

```
docker --version
docker compose version
```

### Crea un file `.env`

Crea una cartella progetto per salvare i file locali di n8n e le configurazioni ambiente, poi entra nella cartella:

```
mkdir n8n-compose
cd n8n-compose
```

Dentro `n8n-compose`, crea un file `.env` con `nano .env` e inserisci questo codice con la configurazione ambiente di n8n.

```
# DOMAIN_NAME e SUBDOMAIN insieme definiscono dove sarà raggiungibile n8n
# Dominio di primo livello da usare
DOMAIN_NAME=zap.cloud

# Sottodominio da usare
SUBDOMAIN=silver-octopus-xxxxx

# L’esempio sopra serve n8n su: https://silver-octopus-xxxxx.zap.cloud

# Fuso orario opzionale usato da Cron e altri nodi di scheduling
GENERIC_TIMEZONE=Europe/Berlin

# Email per la creazione del certificato TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Per trovare DOMAIN_NAME e SUBDOMAIN, vai sulla pagina prodotto ZAP-Hosting del tuo VPS e cerca il `Hostname`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Inserisci la parte `zap.cloud` in DOMAIN_NAME e la parte precedente in SUBDOMAIN (es. silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS Obbligatorio
Non usare un indirizzo IP nudo nel file .env. n8n richiede una connessione HTTPS per accedere al sito, e i certificati SSL sono emessi solo per domini, non per IP nudi.
:::

Se vuoi ospitare n8n su un tuo dominio, crea un sottodominio per n8n aggiungendo un record A nel DNS del dominio che punti all’IP del VPS che usi.

| Nome             | Tipo | Valore           | TTL  | Priorità |
| ---------------- | ---- | --------------- | ---- | -------- |
| n8n (Sottodominio)  | A    | Indirizzo IPv4| 1440 | 0        |

### Crea la cartella per i file locali

Dentro la cartella progetto, crea una cartella `local-files` per condividere file tra l’istanza n8n e il sistema host:

```
mkdir local-files
```

### Crea il file Docker Compose

Crea il file Docker Compose `compose.yaml` con `nano compose.yaml` e incolla questo contenuto:

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

Questo installa n8n, emette il certificato SSL, configura e rende n8n live sul dominio.

### Avvia n8n

Per avviare n8n, esegui:

```
sudo docker compose up -d
```

Per fermare n8n, esegui:

```
sudo docker compose stop
```

### Accesso a n8n

Dopo aver avviato n8n, apri il browser e vai all’URL (o Hostname se lo hai usato) per accedere alla pagina di setup. Qui devi creare un account Admin prima di procedere.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Nota sulla Password
Ricordati bene la password per usi futuri!
:::

Poi comparirà un piccolo sondaggio per inserire qualche dettaglio base.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Facoltativamente, puoi accedere gratis ad alcune funzionalità a pagamento inserendo la tua email per ricevere una License Key. Se ti interessa, inserisci la mail e richiedi la License Key.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

La License Key arriverà subito via email. Copiala e incollala in Impostazioni > Uso e Piani > Inserisci Chiave Attivazione.

### Crea il primo Workflow

Dopo, potrai accedere alla Dashboard e iniziare subito a usare n8n!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Ora puoi partire da una tela bianca o usare un template già pronto. La tua installazione n8n è pronta!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Conclusione e Risorse Extra

Grande! Hai installato n8n sul tuo server e puoi iniziare subito a usarlo. Ti consigliamo anche di dare un’occhiata a queste risorse, che ti possono aiutare durante la configurazione del server:

- [n8n.io](https://n8n.io/) - Sito Ufficiale
- [docs.n8n.io](https://docs.n8n.io/) - Documentazione n8n

Hai domande specifiche non coperte qui? Per qualsiasi dubbio o supporto, contatta pure il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂