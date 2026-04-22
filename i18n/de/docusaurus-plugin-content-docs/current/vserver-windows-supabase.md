---
id: vserver-windows-supabase
title: "Supabase auf Windows einrichten"
description: "Entdecke, wie du Supabase als zuverlässige Open-Source-Postgres-Plattform mit Authentifizierung und Echtzeitfunktionen einrichtest und konfigurierst → Jetzt mehr erfahren"
sidebar_label: Supabase installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Supabase ist eine Open-Source-Postgres-Entwicklungsplattform, die eine vollständige Postgres-Datenbank plus Authentifizierung, sofortige APIs, Echtzeit und Storage bietet – eine coole Open-Source-Alternative zu Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

## Supabase mit dem One Click Apps Installer installieren

Du kannst **Supabase** direkt über unseren **One Click Apps Installer** im VPS-Webinterface installieren. Nach der ersten Einrichtung öffnest du den App-Katalog, suchst nach **Supabase** und startest die Bereitstellung mit deinen bevorzugten Projekt-, Umgebungs- und Domain-Einstellungen. So bekommst du eine schnelle und benutzerfreundliche Möglichkeit, **Supabase** zu deployen und zu verwalten – ganz ohne manuelle Kommandozeilenarbeit, aber mit integriertem Web-Management, Support für eigene Domains und SSL, wo verfügbar.

<InlineVoucher />

## Voraussetzungen

Bevor du **Supabase** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu garantieren.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung   |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne             |
| RAM        | 4 GB         | 8 GB                     |
| Festplattenspeicher | 25 GB        | 25 GB                    |

Die Software benötigt alle erforderlichen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Check also vor der Installation:

**Abhängigkeiten:** `Git`, `Docker (Engine und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 2 Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem läuft, um Kompatibilitätsprobleme bei der Supabase-Installation zu vermeiden.

## Vorbereitung

Bevor du **Supabase** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle benötigten Abhängigkeiten zu installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.

### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Systemupdate durchführen. So hast du die neuesten Sicherheitspatches und Softwareversionen, bevor es losgeht.

### Abhängigkeiten installieren
Nach dem Update kannst du die benötigten Abhängigkeiten installieren.

#### Git
Die Supabase-Daten werden über GitHub geladen. Dafür muss Git installiert sein. Installiere dazu [Git für Windows](https://git-scm.com/downloads/win) auf deinem Server.

#### Docker
Supabase wird in einem Docker-Container auf deinem Server laufen. Docker muss also installiert sein. Installiere dazu [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) auf deinem Server.

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](vserver-windows-docker.md) Anleitung.

## Installation
Wenn alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Supabase starten. Öffne die Eingabeaufforderung. Lade das Supabase-Repository, erstelle ein eigenes Projektverzeichnis und kopiere die Docker-Dateien und die Beispiel-Umgebungsdatei hinein.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Wechsle in das Projektverzeichnis, lade die neuesten Container-Images und starte den Stack im Hintergrund.

```
cd supabase-project
docker compose pull
docker compose up -d
```

Du kannst jetzt Supabase Studio über `http://<deine-ip>:8000` erreichen. Es wird nach Benutzername und Passwort gefragt. Standardmäßig sind die Zugangsdaten:

- Benutzername: `supabase`
- Passwort: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standard-Zugangsdaten
Deine App läuft jetzt mit den Standard-Zugangsdaten. Sichere deine Services so schnell wie möglich mit den untenstehenden Anweisungen.
:::

## Konfiguration
Du solltest niemals mit Standard- oder Beispielwerten live gehen. Ersetze alle Platzhalter durch starke, einzigartige Secrets, überprüfe die Konfiguration auf deine Sicherheitsanforderungen und starte alle Services neu, damit die Änderungen greifen.

Generiere sichere API-Keys, bevor du einen Service öffentlich machst. Starte mit einem 40-stelligen JWT-Secret. Du kannst den vorgegebenen Wert nutzen oder dein eigenes erstellen. Speichere das Secret lokal an einem sicheren Ort. Teile es nicht und committe es nicht in Versionskontrollen. Nutze das Secret, um ein JWT zu generieren und daraus die anon- und service-API-Keys mit dem Formular aus den Supabase-Dokumenten abzuleiten: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Führe das Formular zweimal aus, um beide Keys zu erzeugen. Aktualisiere deine `./docker/.env` mit:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Setze die erforderlichen Secrets in `./docker/.env`. Diese Werte müssen für eine funktionierende Installation gesetzt sein:

- `POSTGRES_PASSWORD`: Passwort für die Rolle `postgres`
- `JWT_SECRET`: wird von PostgREST und GoTrue genutzt
- `SITE_URL`: Basis-URL deiner Seite
- `SMTP_*`: Zugangsdaten für deinen Mailserver
- `POOLER_TENANT_ID`: Tenant-ID, die vom Supavisor Pooler genutzt wird

Schütze das Dashboard mit neuen Zugangsdaten vor dem Produktiveinsatz. Bearbeite `./docker/.env`:

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

Um alle Dashboard-Funktionen auch außerhalb von `localhost` zu nutzen, setze `SUPABASE_PUBLIC_URL` in `./docker/.env` auf die URL oder IP, über die du das Dashboard erreichen willst.

Wende die Konfigurationsänderungen an, indem du den Stack neu startest:

```
docker compose down
docker compose up -d
```

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Supabase jetzt erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf diese Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Supabase.com](https://Supabase.com/) – Offizielle Website
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) – Supabase Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂