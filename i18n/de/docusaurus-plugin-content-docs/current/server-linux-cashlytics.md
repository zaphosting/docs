---
id: server-linux-cashlytics
title: "Cashlytics auf einem Linux Server einrichten – Selfhoste deinen KI-gestützten Finanzmanager"
description: "Lerne, wie du Cashlytics auf deinem Linux VPS mit Docker installierst und betreibst, um deine Finanzen und Budgets mit KI-Unterstützung zu managen → Jetzt mehr erfahren"
sidebar_label: Cashlytics installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) ist eine moderne **Plattform für persönliche Finanzen und Budgetierung**, die dir hilft, Ausgaben zu verfolgen, Budgets zu verwalten und Einblicke in dein Finanzverhalten zu bekommen. Durch die Analyse von Transaktionsdaten und Ausgabenkategorien zeigt dir Cashlytics, wohin dein Geld fließt und wie du deine Finanzplanung verbessern kannst.

Die Plattform kann optional mit **KI-gestützter Assistenz** integriert werden, die deine Finanzdaten analysiert, Ausgabemuster erkennt und intelligente Einblicke in dein Budgetverhalten liefert.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Das Selfhosting von Cashlytics auf deinem eigenen Server gibt dir **volle Kontrolle über deine Finanzdaten**, während du deine Budget-Tools jederzeit über eine Weboberfläche von überall aus nutzen kannst. Du willst Cashlytics selbst hosten? Diese Anleitung führt dich Schritt für Schritt durch die Installation mit Docker auf deinem Linux VPS.

<InlineVoucher />

## Anwendungsfälle von Cashlytics

Cashlytics eignet sich für viele persönliche und berufliche Szenarien, in denen Finanzorganisation und Budgetierung wichtig sind. Typische Anwendungsfälle sind:

- Verfolgen persönlicher Ausgaben und monatlicher Budgets
- Überwachen von Ausgabemustern und Finanzgewohnheiten
- Verwalten mehrerer Einkommensquellen und Finanzkategorien
- Generieren von KI-gestützten Insights für smarteres Budgetieren
- Hosting eines privaten und selbstkontrollierten Finanz-Dashboards

Da es selfhosted ist, ist Cashlytics ideal für Nutzer, die eine datenschutzorientierte Alternative zu cloudbasierten Finanztools suchen.

## Voraussetzungen

Bevor du Cashlytics installierst, stelle sicher, dass dein VPS folgende Anforderungen erfüllt.

| Hardware | Minimum | Empfohlen |
|----------|---------|-----------|
| CPU | 1 Kern | 2 Kerne |
| RAM | 2 GB | 4 GB |
| Festplattenspeicher | 10 GB | 20 GB |

Außerdem muss folgende Software installiert sein:

- Docker
- Docker Compose

Falls Docker noch nicht installiert ist, folge bitte unserer Anleitung zur Installation von [Docker](dedicated-linux-docker.md), bevor du weitermachst.

<InlineServiceLink />

## Vorbereitung

Erstelle zuerst ein Projektverzeichnis für die Cashlytics-Installation.

```bash
mkdir cashlytics && cd cashlytics
```

Lade anschließend die offiziellen Docker-Konfigurationsdateien von Cashlytics herunter.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Erstelle deine Umgebungs-Konfigurationsdatei, indem du die Beispiel-Datei kopierst.

```
cp .env.example .env
```

Die `.env`-Datei enthält die Konfigurationsvariablen, die für den Betrieb von Cashlytics nötig sind.

## Installation

### Öffne die `.env`-Datei

Öffne die `.env`-Datei und passe die erforderlichen Umgebungsvariablen an.

```
nano .env
```

### Datenbank-Passwort konfigurieren

Setze ein sicheres Passwort für die PostgreSQL-Datenbank, die von Cashlytics genutzt wird.

```
POSTGRES_PASSWORD=dein_sicheres_passwort
```

### Datenbank-Verbindung konfigurieren

Aktualisiere die Datenbank-Verbindungszeichenfolge und verwende dasselbe Passwort wie oben.

```
DATABASE_URL=postgresql://cashlytics:dein_sicheres_passwort@postgres:5432/cashlytics
```

### Optional: KI-Assistent

Cashlytics unterstützt einen optionalen KI-Assistenten, der Finanzdaten analysiert und Budget-Insights liefert. Um diese Funktion zu aktivieren, füge deinen OpenAI API-Schlüssel hinzu.

```
OPENAI_API_KEY=sk-dein-openai-key
```

Wenn du den KI-Assistenten nicht nutzen möchtest, kannst du diese Variable leer lassen.

## Cashlytics starten

Nachdem die Konfiguration abgeschlossen ist, starte die Anwendung mit Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker lädt jetzt die benötigten Container-Images herunter und startet die Cashlytics-Services. Um zu prüfen, ob die Container laufen, kannst du folgenden Befehl nutzen:

```
docker ps
```

## Zugriff auf Cashlytics

Sobald die Container erfolgreich gestartet sind, kannst du die Weboberfläche von Cashlytics öffnen. Starte deinen Browser und gehe zu:

```
http://DEINE_SERVER_IP:3000
```

Ersetze DEINE_SERVER_IP durch die IP-Adresse deines VPS. Sobald die Oberfläche geladen ist, kannst du mit der Konfiguration deiner Finanzen, Budgets und Kategorien starten.

## Fazit

Glückwunsch! Du hast Cashlytics erfolgreich auf deinem Linux Server installiert. Jetzt kannst du die Plattform nutzen, um Ausgaben zu verfolgen, Budgets zu verwalten und wertvolle Einblicke in deine Finanzdaten zu erhalten.

Cashlytics auf deinem eigenen VPS/Dedicated Server zu betreiben, stellt sicher, dass deine Finanzinformationen unter deiner Kontrolle bleiben und du gleichzeitig von modernen Budget-Tools und optionaler KI-Analyse profitierst.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – melde dich einfach! 🙂

<InlineVoucher />