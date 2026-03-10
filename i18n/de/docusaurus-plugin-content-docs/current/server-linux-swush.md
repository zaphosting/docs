---
id: server-linux-swush
title: "Swush auf einem Linux-Server einrichten – Baue deinen eigenen privaten Media- und Dateisafe"
description: "Lerne, wie du Swush auf deinem Linux VPS installierst und betreibst, um eine selbstgehostete Plattform für Medien, Dateien und Content-Management zu erstellen → Jetzt mehr erfahren"
sidebar_label: Swush installieren
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

[Swush](https://github.com/imthatdev/swush) ist ein selbstgehosteter digitaler Safe und Content-Management-System, das dir hilft, Dateien, Medien und persönliche Daten in einem zentralen Dashboard zu organisieren. Die Anwendung kombiniert Dateispeicherung, Sharing-Tools, Media-Streaming und Wissensmanagement in einer einzigen Weboberfläche.

Mit Swush kannst du Dateien hochladen und verwalten, Inhalte mit Ordnern und Tags organisieren, teilbare Links generieren und sogar Medien direkt vom Server streamen. Da es komplett selbstgehostet ist, behältst du die volle Kontrolle über deine Daten und Infrastruktur – eine super Alternative zu Cloud-Speicherplattformen.

Die App basiert auf modernen Technologien wie Next.js, TypeScript und TailwindCSS, was für eine schnelle und responsive Oberfläche sorgt und gleichzeitig die einfache Installation auf einem VPS oder Dedicated Server ermöglicht. Diese Anleitung zeigt dir Schritt für Schritt, wie du Swush auf einem Linux-Server installierst und startest.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />

## Anwendungsfälle von Swush

Swush ist als zentrale Anlaufstelle für deine digitalen Inhalte und Workflows konzipiert. Es eignet sich für viele verschiedene Szenarien:

- Verwalten und Organisieren von Dateien, Bildern und Dokumenten
- Aufbau eines persönlichen Mediaservers zum Streamen hochgeladener Inhalte
- Erstellen sicherer Share-Links für Dateien und Medien
- Organisieren von Wissen wie Notizen, Lesezeichen oder Snippets
- Hosting eines privaten Dashboards für persönliche Workflows
- Automatisieren von Uploads und Integrationen über die Swush API

Die Plattform vereint mehrere Tools in einer Umgebung und hilft dir so, die Abhängigkeit von verstreuten Cloud-Diensten zu reduzieren.

## Voraussetzungen

Bevor du Swush installierst, stelle sicher, dass dein Server folgende Anforderungen erfüllt.

| Hardware | Minimum | Empfohlen |
|----------|---------|-----------|
| CPU | 1 Kern | 4 Kerne |
| RAM | 2 GB | 4 GB |
| Festplattenspeicher | 20 GB | 50 GB |

Benötigte Software:

- Bun Runtime
- PostgreSQL Datenbank
- Git

Stelle sicher, dass dein System vor der Installation auf dem neuesten Stand ist.

<InlineServiceLink />

## Vorbereitung

Erstelle zuerst ein Verzeichnis für die Swush-Installation.
```
mkdir swush
cd swush
```
Klon dann das Swush-Repository.
```
git clone https://github.com/imthatdev/swush.git .
```
Installiere die Projektabhängigkeiten mit Bun.
```
bun install
```
## Konfiguration

Bevor du die Anwendung startest, erstelle die Umgebungs-Konfigurationsdatei.
```
cp example.env .env
```
Öffne die `.env`-Datei und passe die erforderlichen Werte an:
```
APP_NAME=Swush
APP_URL=http://deine-server-ip:3000
SUPPORT_NAME=Support
SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://benutzername:passwort@localhost:5432/swush
```
Du kannst auch zusätzliche Einstellungen konfigurieren wie:

- Speicher-Backend (lokal oder S3)
- Upload-Verzeichnis
- SMTP-Einstellungen für E-Mail-Benachrichtigungen
- Authentifizierungsgeheimnisse

Swush unterstützt sowohl **lokalen Speicher als auch S3-kompatible Speichersysteme**, sodass du die Dateispeicherung flexibel an deine Umgebung anpassen kannst.

## Installation

Nachdem du die Umgebungsvariablen konfiguriert hast, initialisiere das Datenbankschema.
```
bun run push:db
```
Baue anschließend die Anwendung.
```
bun run build
```
Starte den Swush-Server.
```
bun start
```
Die Anwendung startet jetzt und hört auf Port **3000**.

## Zugriff auf Swush

Sobald der Server läuft, öffne deinen Webbrowser und gehe zu:
```
http://DEINE_SERVER_IP:3000
```
Ersetze `DEINE_SERVER_IP` durch die IP-Adresse deines VPS/Dedicated Servers. Beim ersten Zugriff wirst du durch den Setup-Assistenten geführt, wo du dein erstes Konto anlegst und die Speicher-Einstellungen konfigurierst.

Nach Abschluss der Einrichtung kannst du Dateien hochladen, Medien organisieren und deine digitalen Inhalte direkt im Swush-Dashboard verwalten.

## Fazit

Glückwunsch! Du hast **Swush** erfolgreich auf deinem Linux-Server installiert. Dein selbstgehosteter digitaler Safe ist jetzt bereit, Dateien zu verwalten, Medien zu teilen und persönliche Inhalte zentral zu organisieren.

Mit Swush hast du die volle Kontrolle über deine Daten und profitierst von einer modernen, datenschutzorientierten Content-Management-Plattform.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />