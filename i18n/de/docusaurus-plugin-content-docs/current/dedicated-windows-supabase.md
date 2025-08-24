---
id: dedicated-windows-supabase
title: "Dedicated Server: Supabase unter Linux einrichten"
description: Informationen zur Einrichtung von Supabase auf deinem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Supabase installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Supabase ist eine Open-Source-Postgres-Entwicklungsplattform, die eine vollständige Postgres-Datenbank sowie Authentifizierung, sofortige APIs, Realtime und Storage bereitstellt und damit eine Open-Source-Alternative zu Firebase darstellt. 

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Überlegst du, diesen Dienst selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und nennen alles, was du dabei beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Supabase** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung |
| ---------- | ------------ | ---------------------- |
| CPU        | 1 vCPU-Kern  | 4 vCPU-Kerne           |
| RAM        | 4 GB         | 8 GB                   |
| Speicherplatz | 25 GB     | 25 GB                  |

Die Software erfordert, dass alle notwendigen Abhängigkeiten installiert sind und dass ein unterstütztes Betriebssystem verwendet wird. Stelle vor dem Fortfahren sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Git`, `Docker (Engine und Compose)` 

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Unterstützung für Docker 2

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Supabase zu vermeiden.



## Vorbereitung

Bevor du **Supabase** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Dies stellt sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. 

#### Git
Die Supabase-Daten werden über GitHub bezogen. Dafür muss Git zunächst installiert sein. Installiere dazu [Git für Windows](https://git-scm.com/downloads/win) auf deinem Server.

#### Docker

Supabase wird auf deinem System mithilfe eines Docker-Containers bereitgestellt und ausgeführt. Dafür muss Docker zunächst installiert werden. Installiere dazu [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) auf deinem Server.

Eine vollständige Anleitung zum Installationsprozess und zur Nutzung von Docker findest du in unserem [Docker](vserver-linux-docker.md) Leitfaden.


## Installation
Nun, da alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Supabase-Anwendung fortfahren. Öffne die Eingabeaufforderung. Hole das Supabase-Repository, erstelle ein eigenes Projektverzeichnis und kopiere die Docker-Assets sowie die Beispiel-Umgebungsdatei dorthin.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Wechsle in das Projektverzeichnis, ziehe die neuesten Container-Images und starte den Stack im Hintergrundmodus.
```
cd supabase-project
docker compose pull
docker compose up -d
```

Du kannst nun über `http://<deine-ip>:8000` auf Supabase Studio zugreifen. Du wirst nach einem Benutzernamen und Passwort gefragt. Standardmäßig lauten die Zugangsdaten:

- Benutzername: `supabase`
- Passwort: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standardzugangsdaten
Deine App läuft jetzt mit Standardzugangsdaten. Sichere deine Dienste so schnell wie möglich gemäß den folgenden Anweisungen.
:::



## Konfiguration
Du solltest niemals mit Standard- oder Beispielwerten in Produktion gehen. Du solltest alle Platzhalter durch starke, eindeutige Secrets ersetzen, die Konfiguration im Hinblick auf deine Sicherheitsanforderungen überprüfen und anschließend alle Dienste neu starten, damit die Änderungen wirksam werden.

Erzeuge sichere API-Keys, bevor du einen Dienst exponierst. Beginne mit der Auswahl eines 40-stelligen JWT-Secrets. Du kannst den bereitgestellten Wert verwenden oder dein eigenes erstellen. Bewahre dieses Secret lokal an einem sicheren Ort auf. Teile es nicht und checke es nicht in die Versionskontrolle ein. Verwende das Secret, um einen JWT zu generieren und daraus die anon- und service-API-Keys abzuleiten, unter Verwendung des in der Supabase-Dokumentation referenzierten Formulars: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Führe das Formular zweimal aus, um beide Keys zu erzeugen. Aktualisiere deine `./docker/.env` mit:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Aktualisiere die erforderlichen Secrets in `./docker/.env`. Diese Werte müssen für eine funktionierende Bereitstellung gesetzt sein:

- `POSTGRES_PASSWORD`: Passwort für die Rolle `postgres`
- `JWT_SECRET`: wird von PostgREST und GoTrue verwendet
- `SITE_URL`: Basis-URL deiner Seite
- `SMTP_*`: Mailserver-Zugangsdaten
- `POOLER_TENANT_ID`: Tenant-ID, die vom Supavisor-Pooler verwendet wird

Schütze das Dashboard vor der Nutzung in Produktion mit neuen Zugangsdaten. Bearbeite `./docker/.env`:

- `DASHBOARD_USERNAME`: Dashboard-Benutzer
- `DASHBOARD_PASSWORD`: Dashboard-Passwort

Du kannst mehrere Dashboard-Benutzer in `./docker/volumes/api/kong.yml` definieren:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Um alle Dashboard-Funktionen außerhalb von `localhost` zu aktivieren, setze `SUPABASE_PUBLIC_URL` in `./docker/.env` auf die URL oder IP, über die du auf das Dashboard zugreifen wirst.

Wende Konfigurationsänderungen an, indem du den Stack neu startest:

```
docker compose down
docker compose up -d
```




## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Supabase jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Supabase.com](https://Supabase.com/) - Offizielle Website
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase-Dokumentation

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂



<InlineVoucher />