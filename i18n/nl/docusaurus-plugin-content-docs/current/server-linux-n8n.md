---
id: server-linux-n8n
title: "n8n op een Linux Server Installeren - Bouw Krachtige Workflow Automatiseringen"
description: "Ontdek hoe je n8n installeert en configureert voor self-hosting om een AI workflow automatisering te bouwen die je werk makkelijker maakt → Leer nu meer"
sidebar_label: n8n Installeren
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Introductie

[n8n](https://n8n.io/) is een toonaangevende visuele editor voor snelle iteraties, waarmee je automatiseringsworkflows bouwt en direct resultaten ziet. Perfect voor zowel dagelijkse automatiseringen als complexe AI-agent workflows.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Self-hosting support en de Low Code Editor maken n8n de favoriet van elke developer. Wil je maximale controle, maatwerk en kosten laag houden op de lange termijn? Dan is de self-hosted optie een topkeuze voor jou.

Wil je n8n zelf hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.

## n8n installeren met de One Click Apps Installer

Je kunt **n8n** direct installeren via onze **One Click Apps Installer** in de VPS webinterface. Na het voltooien van de initiële app setup, open je de app-catalogus, zoek je naar **n8n** en start je de deployment met je gewenste project-, omgeving- en domeininstellingen. Dit geeft je een snelle en gebruiksvriendelijke manier om **n8n** te deployen en beheren zonder handmatige command line setup, terwijl je profiteert van geïntegreerd webbeheer, custom domein ondersteuning en SSL provisioning waar beschikbaar.

<InlineVoucher />



## Use cases van n8n

n8n is inzetbaar in allerlei dagelijkse scenario’s en geschikt voor iedereen die taken wil automatiseren, low code editors wil gebruiken, AI agents wil bouwen, lead automatiseringen wil doen, CRM wil boosten, IT- en security operations wil optimaliseren, backend prototyping en nog veel meer! n8n is ideaal voor beginners én experts.

n8n biedt 1367+ integraties zoals Google Sheets, Telegram, MySQL, Slack, Discord, Postgres met populaire automatiseringscombinaties zoals HubSpot en Salesforce, Twilio en WhatsApp, GitHub en Jira, Asana en Slack, Asana en Salesforce, Jira en Slack en talloze community templates.

## Vereisten

Hoewel n8n van zichzelf lichtgewicht is, kan het gebruik van resources toenemen afhankelijk van het aantal workflows, API calls en data-intensieve nodes. We raden de volgende hardware aan voor het hosten van n8n op je VPS.

| Hardware   | Minimaal    | Aanbevolen                |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 vCPU Core | 2 vCPU Cores             |
| RAM        | 2 GB        | 4 GB                     |
| Schijfruimte | 20 GB     | 50 GB                    |
<InlineServiceLink />

## Voorbereiding

Voordat je begint, moet je Docker installeren en de systeem pakketten updaten. We hebben al een handleiding over [Docker installeren](dedicated-linux-docker.md). Zorg dat je die eerst hebt afgerond voordat je met de installatie start.

## Installatie
Nadat je Docker op je server hebt geïnstalleerd, controleer je de installatie met:

```
docker --version
docker compose version
```

### Maak een `.env` bestand aan

Maak een projectmap aan om n8n lokale bestanden en omgevingsconfiguraties in op te slaan en ga naar die map:

```
mkdir n8n-compose
cd n8n-compose
```

Maak in de `n8n-compose` map een `.env` bestand aan met `nano .env` en voeg de volgende configuratie toe:

```
# DOMAIN_NAME en SUBDOMAIN bepalen samen vanaf waar n8n bereikbaar is
# Het top-level domein
DOMAIN_NAME=zap.cloud

# Het subdomein
SUBDOMAIN=silver-octopus-xxxxx

# Het voorbeeld hierboven serveert n8n op: https://silver-octopus-xxxxx.zap.cloud

# Optionele tijdzone die gebruikt wordt door Cron en andere scheduling nodes
GENERIC_TIMEZONE=Europe/Berlin

# E-mailadres voor TLS/SSL certificaat aanmaak
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Om je DOMAIN_NAME en SUBDOMAIN te vinden, ga naar je ZAP-Hosting Productpagina, open je VPS en zoek je `Hostname` op.

![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Vul het `zap.cloud` deel in bij DOMAIN_NAME en het eerste deel (bijv. silver-octopus-xxxxx) bij SUBDOMAIN.

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS Vereiste
Gebruik geen kale IP-adressen in het .env bestand. n8n vereist een HTTPS verbinding en SSL-certificaten worden alleen uitgegeven voor domeinen, niet voor kale IP-adressen.
:::

Wil je n8n op je eigen domein hosten? Maak dan een subdomein aan voor n8n door een A-record te maken in je domein DNS-manager die naar het IP-adres van je VPS wijst.

| Naam             | Type | Waarde          | TTL  | Prioriteit |
| ---------------- | ---- | --------------- | ---- | ---------- |
| n8n (Subdomein)  | A    | IPv4 Adres      | 1440 | 0          |

### Maak een map voor lokale bestanden

Maak binnen de projectmap een map `local-files` aan om bestanden te delen tussen de n8n instantie en het host-systeem:

```
mkdir local-files
```

### Maak het Docker Compose bestand aan

Maak het Docker Compose bestand `compose.yaml` aan met `nano compose.yaml` en plak de volgende inhoud:

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

Dit installeert n8n, regelt het SSL-certificaat, configureert en maakt n8n live op je domein.

### n8n starten

Start n8n met:

```
sudo docker compose up -d
```

Stop n8n met:

```
sudo docker compose stop
```

### n8n openen

Na het starten open je n8n in je browser via de URL (of hostname als je die gebruikte). Je komt dan op de setup pagina waar je eerst een admin account aanmaakt.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Wachtwoord Tip
Zorg dat je je wachtwoord onthoudt voor later gebruik!
:::

Vervolgens verschijnt een korte survey waarin je wat basisgegevens invult.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Optioneel kun je gratis toegang krijgen tot betaalde features door je e-mail in te vullen en een licentiesleutel te ontvangen. Wil je dat, vul dan je e-mailadres in en vraag de licentiesleutel aan.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

De licentiesleutel ontvang je direct per mail. Kopieer deze en plak hem in je Settings > Usage and Plans > Enter Activation Key.

### Eerste Workflow maken

Daarna kun je direct naar het Dashboard en aan de slag met n8n!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Je kunt starten met een leeg canvas of een kant-en-klare template gebruiken. Je n8n installatie is helemaal klaar!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Conclusie en meer bronnen

Top! Je hebt n8n succesvol op je server geïnstalleerd en kunt meteen aan de slag. We raden je ook aan om deze bronnen te checken voor extra hulp en tips tijdens je serverconfiguratie:

- [n8n.io](https://n8n.io/) - Officiële website
- [docs.n8n.io](https://docs.n8n.io/) - n8n Documentatie

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂