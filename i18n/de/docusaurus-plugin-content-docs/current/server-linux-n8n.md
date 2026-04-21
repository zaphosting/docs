---
id: server-linux-n8n
title: "n8n auf einem Linux Server einrichten – Baue mächtige Workflow-Automatisierungen"
description: "Entdecke, wie du n8n für Self-Hosting installierst und einrichtest, um eine smarte AI-Workflow-Automatisierung zu bauen, die dir die Arbeit erleichtert → Jetzt mehr erfahren"
sidebar_label: n8n installieren
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Einführung

[n8n](https://n8n.io/) ist ein führender visueller Editor für schnelle Iterationen, mit dem du Automatisierungs-Workflows bauen und sofort Ergebnisse sehen kannst. Perfekt für alltägliche Automatisierungen und komplexe AI-Agenten-Workflows.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Self-Hosting-Support und der Low-Code-Editor machen n8n zum Liebling jedes Devs. Wenn du maximale Kontrolle, individuelle Anpassungen willst und langfristig Kosten sparen möchtest, ist die Self-Hosted-Variante genau das Richtige für dich.

Willst du n8n selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

## n8n mit dem One Click Apps Installer installieren

Du kannst **n8n** direkt über unseren **One Click Apps Installer** im VPS-Webinterface installieren. Nach der ersten App-Einrichtung öffnest du den App-Katalog, suchst nach **n8n** und startest die Installation mit deinen bevorzugten Projekt-, Umgebungs- und Domain-Einstellungen. So kannst du **n8n** schnell und einfach deployen und verwalten – ganz ohne manuelle Kommandozeilen-Installation – und profitierst trotzdem von integriertem Web-Management, Custom-Domain-Support und SSL-Zertifikaten, wo verfügbar.

<InlineVoucher />



## Anwendungsfälle von n8n

n8n lässt sich in vielen Alltagsszenarien einsetzen und eignet sich für alle, die Aufgaben automatisieren, Low-Code-Editor nutzen, AI-Agenten bauen, Automatisierungen steuern, CRM boosten, IT- und Security-Operations optimieren, Backend-Prototyping machen und vieles mehr! n8n ist perfekt für Anfänger und Profis.

n8n bietet über 1367 Integrationen wie Google Sheets, Telegram, MySQL, Slack, Discord, Postgres und coole Automations-Kombis wie HubSpot & Salesforce, Twilio & WhatsApp, GitHub & Jira, Asana & Slack, Asana & Salesforce, Jira & Slack und viele Community-Templates.

## Voraussetzungen

n8n ist zwar leichtgewichtig, aber der Ressourcenverbrauch kann mit der Anzahl der Workflows, API-Calls und datenintensiven Nodes steigen. Wir empfehlen folgende Hardware-Anforderungen für dein VPS, um n8n zu hosten:

| Hardware   | Minimum      | Empfohlen                 |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 2 vCPU Kerne              |
| RAM        | 2 GB         | 4 GB                      |
| Speicher   | 20 GB        | 50 GB                     |
<InlineServiceLink />

## Vorbereitung

Bevor es losgeht, müssen Docker und die Systempakete aktualisiert werden. Wir haben schon eine Anleitung zum [Docker installieren](dedicated-linux-docker.md). Mach das am besten zuerst fertig.

## Installation
Nachdem Docker auf deinem Server läuft, check die Installation mit:

```
docker --version
docker compose version
```

### Erstelle eine `.env` Datei

Lege ein Projektverzeichnis an, um n8n lokale Dateien und Umgebungsvariablen zu speichern, und wechsle hinein:

```
mkdir n8n-compose
cd n8n-compose
```

Erstelle im `n8n-compose` Verzeichnis eine `.env` Datei mit `nano .env` und füge folgenden Code mit den n8n Umgebungsvariablen ein:

```
# DOMAIN_NAME und SUBDOMAIN bestimmen zusammen, unter welcher Adresse n8n erreichbar ist
# Die Top-Level-Domain
DOMAIN_NAME=zap.cloud

# Die Subdomain
SUBDOMAIN=silver-octopus-xxxxx

# Das Beispiel oben macht n8n erreichbar unter: https://silver-octopus-xxxxx.zap.cloud

# Optionale Zeitzone, die von Cron und anderen Scheduling-Nodes genutzt wird
GENERIC_TIMEZONE=Europe/Berlin

# E-Mail-Adresse für die TLS/SSL-Zertifikatserstellung
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Um DOMAIN_NAME und SUBDOMAIN zu finden, geh auf deine ZAP-Hosting Produktseite, öffne deinen VPS und schau dir den `Hostname` an.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Trage den Teil `zap.cloud` in DOMAIN_NAME ein und den ersten Teil in SUBDOMAIN (z.B. silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning HTTPS-Anforderung
Verwende in der .env Datei keine reine IP-Adresse. n8n benötigt eine HTTPS-Verbindung, und SSL-Zertifikate werden nur für Domains, nicht für IP-Adressen ausgestellt.
:::

Wenn du n8n lieber auf deiner eigenen Domain hosten willst, erstelle eine Subdomain für n8n, indem du im DNS-Manager deiner Domain einen A-Eintrag anlegst, der auf die IP deines VPS zeigt.

| Name             | Typ  | Wert           | TTL  | Priorität |
| ---------------- | ---- | -------------- | ---- | --------- |
| n8n (Subdomain)  | A    | IPv4-Adresse   | 1440 | 0         |

### Lokales Verzeichnis für Dateien anlegen

Im Projektordner erstellst du einen weiteren Ordner namens `local-files`, um Dateien zwischen der n8n-Instanz und dem Host-System zu teilen:

```
mkdir local-files
```

### Docker Compose Datei erstellen

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

### n8n starten

Starte n8n mit:

```
sudo docker compose up -d
```

Stoppen kannst du n8n mit:

```
sudo docker compose stop
```

### n8n aufrufen

Nach dem Start öffnest du n8n im Browser über die URL (oder Hostname, falls du den genutzt hast). Dort musst du zuerst ein Admin-Konto anlegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Passwort merken
Merke dir dein Passwort gut für die spätere Nutzung!
:::

Danach erscheint eine kleine Umfrage, in der du ein paar Basisinfos eingibst.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Optional kannst du kostenlosen Zugriff auf einige kostenpflichtige Features bekommen, indem du deine E-Mail eingibst und einen Lizenzschlüssel per Mail erhältst. Wenn du interessiert bist, gib deine E-Mail ein und fordere den Lizenzschlüssel an.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

Der Lizenzschlüssel kommt sofort per Mail. Kopiere ihn und füge ihn in Einstellungen > Nutzung & Pläne > Aktivierungsschlüssel eingeben ein.

### Ersten Workflow erstellen

Danach kannst du direkt ins Dashboard und n8n starten!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Starte mit einer leeren Leinwand oder nutze ein vorgefertigtes Template. Deine n8n Installation ist bereit!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast n8n erfolgreich auf deinem Server installiert und kannst direkt loslegen. Wir empfehlen dir außerdem, diese Ressourcen zu checken, die dir bei der Server-Konfiguration weiterhelfen können:

- [n8n.io](https://n8n.io/) – Offizielle Webseite
- [docs.n8n.io](https://docs.n8n.io/) – n8n Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Hilfe oder Support erreichst du unser Team täglich – wir sind für dich da! 🙂