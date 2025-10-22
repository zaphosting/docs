---
id: dedicated-linux-supabase
title: "Dedicated Server: Supabase auf Linux einrichten"
description: "Entdecke, wie du Supabase für Selfhosting einrichtest und konfigurierst, um eine leistungsstarke Open-Source Postgres Plattform zu bauen → Jetzt mehr erfahren"
sidebar_label: Supabase installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Supabase ist eine Open-Source Postgres Entwicklungsplattform, die eine vollständige Postgres-Datenbank plus Authentifizierung, Instant-APIs, Realtime und Storage bietet – eine coole Open-Source Alternative zu Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />

## Voraussetzungen

Bevor du **Supabase** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung    |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 CPU-Kern  | 4 CPU-Kerne               |
| RAM        | 4 GB        | 8 GB                      |
| Festplattenspeicher | 25 GB       | 25 GB                     |

Die Software benötigt alle notwendigen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Git`, `Docker (Engine und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker-Unterstützung

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem verwendet wird, um Kompatibilitätsprobleme bei der Supabase-Installation zu vermeiden.

## Vorbereitung

Bevor du **Supabase** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.

### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System die neuesten Sicherheitspatches und Softwareversionen hat, bevor es weitergeht.

### Abhängigkeiten installieren
Nach dem Update kannst du mit der Installation der Abhängigkeiten starten.

#### Git
Die Supabase-Daten werden über GitHub heruntergeladen. Dafür muss Git installiert sein. Führe diesen Befehl aus:

```
sudo apt install git-all
```

#### Docker

Supabase wird in einem Docker-Container auf deinem Server laufen. Docker muss also installiert sein. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserer [Docker](dedicated-linux-docker.md) Anleitung.

## Installation
Jetzt, wo alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Supabase starten.

Hole dir das Supabase-Repository, erstelle ein eigenes Projektverzeichnis und kopiere die Docker-Dateien sowie die Beispiel-Umgebungsdatei hinein.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

Wechsle in das Projektverzeichnis, lade die neuesten Container-Images und starte den Stack im Hintergrund:

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

Generiere sichere API-Keys, bevor du irgendeinen Service öffentlich machst. Starte mit einem 40-stelligen JWT-Secret. Du kannst den vorgegebenen Wert nutzen oder dein eigenes erstellen. Speichere das Secret lokal an einem sicheren Ort. Teile es nicht und committe es nicht in Versionskontrollen. Nutze das Secret, um ein JWT zu generieren und daraus die anon- und service-API-Keys mit dem Formular in den Supabase-Dokumenten abzuleiten: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Führe das Formular zweimal aus, um beide Keys zu erzeugen. Aktualisiere deine `./docker/.env` mit:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Aktualisiere die notwendigen Secrets in `./docker/.env`. Diese Werte müssen gesetzt sein für eine funktionierende Installation:

- `POSTGRES_PASSWORD`: Passwort für die Rolle `postgres`
- `JWT_SECRET`: wird von PostgREST und GoTrue genutzt
- `SITE_URL`: Basis-URL deiner Seite
- `SMTP_*`: Mailserver-Zugangsdaten
- `POOLER_TENANT_ID`: Tenant-ID, die vom Supavisor Pooler genutzt wird

Schütze das Dashboard mit neuen Zugangsdaten, bevor du es produktiv nutzt. Bearbeite `./docker/.env`:

- `DASHBOARD_USERNAME`: Dashboard-Benutzername
- `DASHBOARD_PASSWORD`: Dashboard-Passwort

Du kannst mehrere Dashboard-Nutzer in `./docker/volumes/api/kong.yml` definieren:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Um alle Dashboard-Funktionen außerhalb von `localhost` zu aktivieren, setze `SUPABASE_PUBLIC_URL` in `./docker/.env` auf die URL oder IP, über die du das Dashboard erreichen willst.

Wende die Konfigurationsänderungen an, indem du den Stack neu startest:

```
docker compose down
docker compose up -d
```

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Supabase erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Supabase.com](https://Supabase.com/) – Offizielle Webseite
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) – Supabase Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂

<InlineVoucher />