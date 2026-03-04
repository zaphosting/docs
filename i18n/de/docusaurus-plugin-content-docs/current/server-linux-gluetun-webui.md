---
id: server-linux-gluetun-webui
title: "Gluetun WebUI auf einem Linux-Server einrichten – Manage deinen VPN-Container easy"
description: "Lerne, wie du Gluetun WebUI auf deinem Linux VPS installierst und betreibst, um deinen Gluetun VPN-Container zu überwachen und zu managen → Jetzt mehr erfahren"
sidebar_label: Gluetun WebUI installieren
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) ist eine leichte Weboberfläche, die das Management des Gluetun VPN-Containers super einfach macht. Gluetun selbst ist ein beliebter Docker-Container, der andere Anwendungen über eine sichere VPN-Verbindung routet.

Das WebUI bringt ein praktisches Dashboard mit, mit dem du den VPN-Status checken, Verbindungen verwalten und das Verhalten des Containers steuern kannst – ganz ohne manuell Docker-Befehle oder Konfigurationsdateien anfassen zu müssen.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Wenn du das Gluetun WebUI auf deinem eigenen Server hostest, hast du eine zentrale Oberfläche, um dein VPN-Setup zu managen. Besonders praktisch, wenn du mehrere Container laufen hast, die auf eine Gluetun VPN-Verbindung angewiesen sind.

Willst du Gluetun WebUI auf deinem VPS laufen lassen? Diese Anleitung führt dich Schritt für Schritt durch Installation und Konfiguration.

<InlineVoucher />

## Anwendungsfälle von Gluetun WebUI

Gluetun WebUI ist ideal für alle, die containerisierte Anwendungen hinter einem VPN betreiben. Typische Anwendungsfälle sind:

- VPN-Verbindungsstatus in Echtzeit überwachen
- Container managen, die Traffic über Gluetun VPN routen
- VPN-Container-Konfiguration vereinfachen und Fehler beheben
- VPN-Dienste steuern, ohne komplexe Docker-Befehle zu nutzen
- Zentrale VPN-Verwaltung für selbstgehostete Umgebungen

Das WebUI ist besonders nützlich in Homelabs oder VPS-Setups, wo mehrere Apps auf einen VPN-Container angewiesen sind.

## Voraussetzungen

Bevor du Gluetun WebUI installierst, check, ob dein Server folgende Anforderungen erfüllt.

| Hardware | Minimum | Empfohlen |
|----------|---------|-----------|
| CPU | 1 Kern | 2 Kerne |
| RAM | 1 GB | 4 GB |
| Speicherplatz | 5 GB | 10 GB |

Benötigte Software:

- Docker
- Docker Compose

Falls Docker noch nicht installiert ist, folge unserer Anleitung zur Docker-Installation, bevor du weitermachst.

<InlineServiceLink />

## Vorbereitung

Bevor du Gluetun WebUI installierst, stelle sicher, dass Docker und Docker Compose auf deinem Server verfügbar sind. Prüfe das mit diesen Befehlen:

```
docker --version
docker compose version
```

Erstelle als Nächstes ein Verzeichnis für die Gluetun WebUI Installation:

```
mkdir gluetun-webui
cd gluetun-webui
```

In diesem Ordner kommt die Docker Compose Konfiguration rein, mit der das Webinterface läuft.

## Installation

Erstelle eine Docker Compose Datei für Gluetun WebUI:

```
nano compose.yaml
```

Füge folgende Konfiguration ein:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

Diese Konfiguration bewirkt:

- Deployment des Gluetun WebUI Containers
- Verbindung zur Gluetun API
- WebUI wird über Port 8000 erreichbar
- Persistente Konfigurationsdaten werden im `data`-Ordner gespeichert

Speichere die Datei und verlasse den Editor.

## Gluetun WebUI starten

Starte den Container mit Docker Compose:

```
docker compose up -d
```

Docker lädt das benötigte Image runter und startet den WebUI-Container. Um zu checken, ob der Container läuft, nutze:

```
docker ps
```

## Zugriff auf die Weboberfläche

Wenn der Container läuft, öffne das WebUI in deinem Browser:

```
http://DEINE_SERVER_IP:8000
```

Ersetze `DEINE_SERVER_IP` mit der IP-Adresse deines VPS. Im Interface kannst du dann:

- VPN-Verbindungsstatus überwachen
- Verhalten des Gluetun Containers managen
- VPN-Konfigurationsdetails einsehen
- Dienste steuern, die über den VPN-Container laufen

## Fazit

Glückwunsch! Du hast **Gluetun WebUI** erfolgreich auf deinem Linux-Server installiert. Die Weboberfläche macht es dir jetzt super easy, deinen Gluetun VPN-Container zu überwachen und zu managen – ganz ohne Docker-Befehle manuell zu tippen.

Gluetun WebUI zusammen mit deinem VPN-Container zu betreiben, vereinfacht das Management und gibt dir einen klaren Überblick über deinen VPN-Status und die Konfiguration.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />