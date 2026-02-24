---
id: server-linux-n8n
title: "Installera n8n på en Linux-server - Skapa kraftfulla arbetsflödesautomationer"
description: "Upptäck hur du installerar och sätter upp n8n för självhosting för att bygga AI-arbetsflödesautomationer som gör ditt jobb enklare → Lär dig mer nu"
sidebar_label: Installera n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Introduktion

[n8n](https://n8n.io/) är en ledande visuell editor för snabb iteration där du kan bygga automatiseringsarbetsflöden och se resultat direkt. Perfekt för både vardagsautomationer och komplexa AI-agentarbetsflöden.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Självhosting-stöd och Low Code Editor gör n8n till varje utvecklares favorit. Vill du ha maximal kontroll, anpassningar och hålla nere kostnaderna över tid är självhostad lösning ett grymt val för dig.

Planerar du att hosta n8n själv? Vi guidar dig steg för steg hur du sätter upp och konfigurerar det, plus allt du behöver ha koll på.

<InlineVoucher />



## Användningsområden för n8n

n8n kan användas i många olika vardagsscenarion och passar alla som vill automatisera uppgifter, använda low code-editor, bygga AI-agenter, leda automationer, boosta CRM, IT-drift, säkerhetsoperationer, backend-prototypning och mycket mer! n8n är perfekt för både nybörjare och proffs.

n8n erbjuder över 1367 integrationer som Google Sheets, Telegram, MySQL, Slack, Discord, Postgres med trendiga automationskombinationer som HubSpot och Salesforce, Twilio och WhatsApp, GitHub och Jira, Asana och Slack, Asana och Salesforce, Jira och Slack och massor av community-mallar.

## Förutsättningar

Även om n8n är lättviktigt i grunden kan resursanvändningen öka över tid beroende på antal arbetsflöden, API-anrop och datatungt innehåll. Vi rekommenderar följande hårdvarukrav för att hosta n8n på din VPS.

| Hårdvara   | Minsta       | Rekommenderat             |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU-kärna | 2 vCPU-kärnor             |
| RAM        | 2 GB         | 4 GB                      |
| Diskutrymme| 20 GB        | 50 GB                     |
<InlineServiceLink />

## Förberedelser

Innan vi börjar behöver vi installera Docker och uppdatera systempaketen. Vi har redan en guide för [Installera Docker](dedicated-linux-docker.md). Se till att du gjort det innan du startar installationen.

## Installation
När du har installerat Docker på din server, kör följande kommando för att verifiera installationen:

```
docker --version
docker compose version
```

### Skapa en `.env`-fil

Skapa en projektmapp för att lagra n8n:s lokala filer och miljökonfigurationer och gå in i den:

```
mkdir n8n-compose
cd n8n-compose
```

Inuti `n8n-compose`-mappen, skapa en `.env`-fil med `nano .env` och lägg in följande kod med n8n:s miljöinställningar.

```
# DOMAIN_NAME och SUBDOMAIN tillsammans bestämmer var n8n kommer vara åtkomligt
# Toppdomänen som tjänsten ska köras från
DOMAIN_NAME=zap.cloud

# Subdomänen som tjänsten ska köras från
SUBDOMAIN=silver-octopus-xxxxx

# Exemplet ovan gör n8n åtkomligt på: https://silver-octopus-xxxxx.zap.cloud

# Valfri tidszon som används av Cron och andra schemaläggningsnoder
GENERIC_TIMEZONE=Europe/Berlin

# E-postadress som används för TLS/SSL-certifikat
SSL_EMAIL=hello@zap-hosting.com
```

:::info
För att hitta DOMAIN_NAME och SUBDOMAIN, gå till din ZAP-Hosting Produktsida, öppna din VPS och leta upp ditt `Hostname`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Fyll i `zap.cloud` i DOMAIN_NAME och den första delen i SUBDOMAIN (t.ex. silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS-krav
Använd inte enbart IP-adress i .env-filen. n8n kräver HTTPS-anslutning för att nå webbplatsen, och SSL-certifikat utfärdas endast för domäner, inte för rena IP-adresser.
:::

Vill du hosta n8n på din egen domän istället, skapa en subdomän för n8n genom att lägga till en A-post i din domäns DNS-hanterare som pekar på VPS:ens IP-adress.

| Namn             | Typ  | Värde          | TTL  | Prioritet |
| ---------------- | ---- | -------------- | ---- | -------- |
| n8n (Subdomän)   | A    | IPv4-adress    | 1440 | 0        |

### Skapa mapp för lokala filer

Inuti projektmappen, skapa en mapp som heter `local-files` för att dela filer mellan n8n-instansen och värdsystemet:

```
mkdir local-files
```

### Skapa Docker Compose-fil

Skapa Docker Compose-filen `compose.yaml` med `nano compose.yaml` och klistra in följande innehåll:

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

Detta installerar n8n, utfärdar SSL-certifikat, konfigurerar och gör n8n live på din domän.

### Starta n8n

För att starta n8n, kör detta kommando:

```
sudo docker compose up -d
```

För att stoppa n8n, kör detta kommando:

```
sudo docker compose stop
```

### Komma åt n8n

Efter att ha startat n8n är nästa steg att öppna det i webbläsaren. Skriv in URL:en (eller Hostname om du använde det) för att komma till installationssidan. Här måste du skapa ett Admin-konto innan du går vidare.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Lösenordsnotis
Se till att du kommer ihåg ditt lösenord för framtida användning!
:::

Nästa steg är en kort enkät som dyker upp och ber dig fylla i några grundläggande uppgifter.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Valfritt får du gratis tillgång till vissa betalfunktioner genom att ange din e-post och få en licensnyckel skickad till dig. Om du är intresserad, skriv in din e-postadress och begär en licensnyckel.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

En licensnyckel skickas direkt till din e-post. Kopiera nyckeln och klistra in den under Inställningar > Användning och Planer > Ange Aktiveringsnyckel.

### Skapa ditt första arbetsflöde

Efter det kan du gå till Dashboard och börja använda n8n direkt!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Nu kan du börja med en tom canvas eller använda en färdig mall. Din n8n-installation är redo!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Avslutning och fler resurser

Grattis! Du har nu installerat n8n på din server och kan börja använda det direkt. Vi rekommenderar också att kolla in följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration.

- [n8n.io](https://n8n.io/) - Officiell webbplats
- [docs.n8n.io](https://docs.n8n.io/) - n8n Dokumentation

Har du frågor som inte täcks här? För fler frågor eller support, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂



<InlineVoucher />