---
id: server-linux-n8n
title: "n8n auf einem Linux-Server einrichten – Baue mächtige Workflow-Automatisierungen"
description: "Entdecke, wie du n8n für Self-Hosting installierst und einrichtest, um eine KI-Workflow-Automatisierung zu bauen, die dir die Arbeit erleichtert → Jetzt mehr erfahren"
sidebar_label: n8n installieren
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Einführung

[n8n](https://n8n.io/) ist ein führender visueller Editor für schnelle Iterationen, mit dem du Automatisierungs-Workflows bauen und Ergebnisse sofort sehen kannst. Perfekt für alltägliche Automatisierungen und komplexe KI-Agenten-Workflows.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Self-Hosting-Support und der Low-Code-Editor machen n8n zum Liebling jedes Devs. Wenn du maximale Kontrolle, Anpassungen und langfristig niedrige Kosten willst, ist die Self-Hosted-Variante die perfekte Wahl für dich.

Planst du, n8n selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Anwendungsfälle von n8n

n8n kann in vielen verschiedenen Alltagsszenarien eingesetzt werden und eignet sich für alle, die Aufgaben automatisieren, den Low-Code-Editor nutzen, KI-Agenten bauen, Automatisierungen steuern, CRM boosten, IT- und Security-Operationen managen, Backend-Prototyping machen und vieles mehr! n8n ist perfekt für Anfänger und Profis.

n8n bietet über 1367 Integrationen wie Google Sheets, Telegram, MySQL, Slack, Discord, Postgres mit angesagten Automatisierungskombis wie HubSpot und Salesforce, Twilio und WhatsApp, GitHub und Jira, Asana und Slack, Asana und Salesforce, Jira und Slack und viele Community-Templates.

## Voraussetzungen

Obwohl n8n von Haus aus leichtgewichtig ist, kann der Ressourcenverbrauch mit der Zeit steigen, je nach Anzahl der Workflows, API-Calls und datenintensiven Nodes. Wir empfehlen folgende Hardware-Anforderungen, um n8n auf deinem VPS zu hosten.

| Hardware   | Minimum      | Empfohlen                 |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 2 vCPU Kerne              |
| RAM        | 2 GB         | 4 GB                      |
| Festplattenspeicher | 20 GB        | 50 GB                     |
<InlineServiceLink />

## Vorbereitung

Bevor es losgeht, müssen wir Docker installieren und die Systempakete updaten. Wir haben bereits eine Anleitung zum [Docker installieren](dedicated-linux-docker.md). Mach das am besten zuerst, bevor du mit der Installation startest.

## Installation
Nachdem Docker auf deinem Server installiert ist, überprüfe die Installation mit folgendem Befehl:

```
docker --version
docker compose version
```

### Erstelle eine `.env`-Datei

Lege ein Projektverzeichnis an, um n8n lokale Dateien und Umgebungs-Konfigurationen zu speichern, und wechsle hinein:

```
mkdir n8n-compose
cd n8n-compose
```

Erstelle im Verzeichnis `n8n-compose` eine `.env`-Datei mit `nano .env` und füge folgenden Code mit den n8n Umgebungsvariablen ein.

```
# DOMAIN_NAME und SUBDOMAIN bestimmen zusammen, unter welcher Adresse n8n erreichbar ist
# Die Top-Level-Domain, von der aus bedient wird
DOMAIN_NAME=zap.cloud

# Die Subdomain, von der aus bedient wird
SUBDOMAIN=silver-octopus-xxxxx

# Das obige Beispiel macht n8n erreichbar unter: https://silver-octopus-xxxxx.zap.cloud

# Optionale Zeitzone, die von Cron und anderen Scheduling-Nodes genutzt wird
GENERIC_TIMEZONE=Europe/Berlin

# Die E-Mail-Adresse für die Erstellung des TLS/SSL-Zertifikats
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Um DOMAIN_NAME und SUBDOMAIN zu finden, geh auf deine ZAP-Hosting Produktseite, öffne deinen VPS und suche nach deinem `Hostname`.

![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Trage den Teil `zap.cloud` in DOMAIN_NAME ein und den vorherigen Teil in SUBDOMAIN (also silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS-Anforderung
Verwende keine reine IP-Adresse in der .env-Datei. n8n benötigt eine HTTPS-Verbindung, um auf die Webseite zuzugreifen, und SSL-Zertifikate werden nur für Domains, nicht für reine IP-Adressen ausgestellt.
:::

Wenn du n8n lieber auf deiner eigenen Domain hosten möchtest, erstelle eine Subdomain für n8n, indem du im DNS-Manager deiner Domain einen A-Eintrag anlegst, der auf die IP deines VPS zeigt.

| Name             | Typ  | Wert           | TTL  | Priorität |
| ---------------- | ---- | -------------- | ---- | --------- |
| n8n (Subdomain)  | A    | IPv4-Adresse   | 1440 | 0         |

### Erstelle Verzeichnis für lokale Dateien

Im Projektverzeichnis legst du ein weiteres Verzeichnis namens `local-files` an, um Dateien zwischen der n8n-Instanz und dem Host-System zu teilen:

```
mkdir local-files
```

### Erstelle Docker Compose Datei

Erstelle die Docker Compose Datei `compose.yaml` mit `nano compose.yaml` und füge folgenden Inhalt ein:

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

Damit wird n8n installiert, ein SSL-Zertifikat ausgestellt, konfiguriert und n8n auf der Domain live geschaltet.

### Starte n8n

Um n8n zu starten, führe diesen Befehl aus:

```
sudo docker compose up -d
```

Um n8n zu stoppen, nutze diesen Befehl:

```
sudo docker compose stop
```

### Zugriff auf n8n

Nach dem Start kannst du n8n im Browser öffnen. Gib die URL (oder den Hostname, falls du den verwendet hast) ein, um zur Setup-Seite zu gelangen. Hier musst du zuerst ein Admin-Konto anlegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Passwort-Hinweis
Merke dir dein Passwort gut für die spätere Nutzung!
:::

Als nächstes erscheint eine kleine Umfrage, in der du einige Basisinfos eingeben sollst.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Optional kannst du kostenlosen Zugang zu einigen kostenpflichtigen Features bekommen, indem du deine E-Mail angibst und einen Lizenzschlüssel per Mail erhältst. Wenn du interessiert bist, gib deine E-Mail-Adresse ein und fordere den Lizenzschlüssel an.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

Der Lizenzschlüssel kommt sofort per Mail. Kopiere ihn und füge ihn in Einstellungen > Nutzung und Pläne > Aktivierungsschlüssel eingeben ein.

### Erstelle deinen ersten Workflow

Danach kannst du direkt ins Dashboard und n8n sofort nutzen!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Jetzt kannst du mit einer leeren Leinwand starten oder eine Vorlage nutzen. Deine n8n-Installation ist startklar!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast n8n erfolgreich auf deinem Server installiert und kannst direkt loslegen. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [n8n.io](https://n8n.io/) – Offizielle Webseite
- [docs.n8n.io](https://docs.n8n.io/) – n8n Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />