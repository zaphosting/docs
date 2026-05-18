---
id: vserver-linux-supabase
title: "Supabase auf einem Linux Server einrichten – Starte deine Open Source Backend Plattform"
description: "Entdecke, wie du Supabase hostest und konfigurierst für eine zuverlässige Open-Source Postgres Plattform mit Authentifizierung und Realtime Features → Jetzt mehr erfahren"
sidebar_label: Supabase installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Supabase ist eine Open-Source Postgres Entwicklungsplattform, die eine vollständige Postgres-Datenbank plus Authentifizierung, Instant-APIs, Realtime und Storage bietet – eine coole Open-Source Alternative zu Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Willst du diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Supabase einrichtest und konfigurierst – inklusive allem, was du beachten musst.

## Supabase mit dem One Click Apps Installer installieren

Du kannst **Supabase** direkt über unseren **One Click Apps Installer** im VPS Webinterface installieren. Nach dem ersten Setup öffnest du den App-Katalog, suchst nach **Supabase** und startest die Installation mit deinen bevorzugten Projekt-, Umgebung- und Domain-Einstellungen. So bekommst du eine schnelle und benutzerfreundliche Möglichkeit, **Supabase** zu deployen und zu managen – ganz ohne manuelles Kommandozeilen-Setup, aber mit integriertem Web-Management, Support für eigene Domains und SSL, wo verfügbar.

<InlineVoucher />

## Voraussetzungen

Bevor du **Supabase** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu garantieren.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung   |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne             |
| RAM        | 4 GB         | 8 GB                     |
| Festplattenspeicher | 25 GB        | 25 GB                    |

Die Software benötigt alle notwendigen Abhängigkeiten und ein unterstütztes Betriebssystem. Prüfe vor der Installation, ob dein Server folgende Anforderungen erfüllt:

**Abhängigkeiten:** `Git`, `Docker (Engine und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 2 Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem läuft, um Kompatibilitätsprobleme bei der Supabase-Installation zu vermeiden.

## Vorbereitung

Bevor du **Supabase** einrichtest, musst du dein System vorbereiten. Das heißt, dein Betriebssystem auf den neuesten Stand bringen und alle benötigten Abhängigkeiten installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.

### System aktualisieren
Damit dein System mit den neuesten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Dafür gibst du folgenden Befehl ein:

```
sudo apt update && sudo apt upgrade -y
```

So stellst du sicher, dass dein System vor der Installation die aktuellsten Sicherheits-Patches und Softwareversionen hat.

### Abhängigkeiten installieren
Nach dem Update kannst du die benötigten Abhängigkeiten installieren.

#### Git
Die Supabase-Daten werden über GitHub geladen. Dafür muss Git installiert sein. Gib dazu folgenden Befehl ein:

```
sudo apt install git-all
```

#### Docker

Supabase läuft in einem Docker-Container auf deinem Server. Docker muss also installiert sein. Das machst du mit diesen Befehlen:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserer [Docker](dedicated-linux-docker.md) Anleitung.

## Installation

Jetzt, wo alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Supabase starten.

Hol dir das Supabase-Repository, erstelle ein eigenes Projektverzeichnis und kopiere die Docker-Dateien sowie die Beispiel-Umgebungsdatei hinein.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

Wechsle in das Projektverzeichnis, lade die neuesten Container-Images und starte den Stack im Hintergrund.

```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

Du kannst jetzt Supabase Studio über `http://<deine-ip>:8000` erreichen. Es wird nach Benutzername und Passwort gefragt. Standardmäßig sind die Zugangsdaten:

- Benutzername: `supabase`
- Passwort: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standard-Zugangsdaten
Deine App läuft jetzt mit den Standard-Zugangsdaten. Sichere deine Services so schnell wie möglich mit den untenstehenden Anweisungen.
:::

## Konfiguration

Du solltest niemals mit Standard- oder Beispielwerten live gehen. Ersetze alle Platzhalter durch starke, einzigartige Secrets, überprüfe die Konfiguration auf deine Sicherheitsanforderungen und starte alle Services neu, damit die Änderungen greifen.

Generiere sichere API-Keys, bevor du einen Service öffentlich machst. Fang mit einem 40-stelligen JWT-Secret an. Du kannst den vorgegebenen Wert nutzen oder dein eigenes erstellen. Speichere das Secret lokal an einem sicheren Ort. Teile es nicht und committe es nicht in Versionskontrolle. Nutze das Secret, um ein JWT zu generieren und daraus die anon- und service-API-Keys mit dem Formular in den Supabase Docs abzuleiten: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Führe das Formular zweimal aus, um beide Keys zu erzeugen. Aktualisiere deine `./docker/.env` mit:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Setze die notwendigen Secrets in `./docker/.env`. Diese Werte müssen gesetzt sein, damit die Installation funktioniert:

- `POSTGRES_PASSWORD`: Passwort für die `postgres` Rolle
- `JWT_SECRET`: wird von PostgREST und GoTrue genutzt
- `SITE_URL`: Basis-URL deiner Seite
- `SMTP_*`: Mailserver-Zugangsdaten
- `POOLER_TENANT_ID`: Tenant-ID, die vom Supavisor Pooler genutzt wird

Schütze das Dashboard mit neuen Zugangsdaten vor dem Produktiveinsatz. Bearbeite `./docker/.env`:

- `DASHBOARD_USERNAME`: Dashboard-Benutzername
- `DASHBOARD_PASSWORD`: Dashboard-Passwort

Du kannst mehrere Dashboard-User in `./docker/volumes/api/kong.yml` definieren:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Um alle Dashboard-Funktionen außerhalb von `localhost` zu aktivieren, setze `SUPABASE_PUBLIC_URL` in `./docker/.env` auf die URL oder IP, über die du das Dashboard erreichst.

Wende die Konfigurationsänderungen an, indem du den Stack neu startest:

```
docker compose down
docker compose up -d
```

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Supabase erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir, auch einen Blick auf diese Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Supabase.com](https://Supabase.com/) – Offizielle Website
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) – Supabase Dokumentation

Du hast noch Fragen, die hier nicht beantwortet wurden? Für weitere Hilfe steht dir unser Support-Team täglich zur Verfügung – melde dich einfach bei uns! 🙂