---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Erfahre, wie du Tymeslot mit Docker bereitstellst, Docker-Container verwaltest und wichtige Konfigurationsdetails für Linux- und Windows-Hosting-Umgebungen überprüfst. -> Jetzt mehr erfahren"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Tymeslot ist eine Open-Source-Plattform zur Termin- und Meetingplanung, entwickelt mit Elixir und Phoenix LiveView. In dieser Anleitung lernst du, was Tymeslot benötigt, wie du es mit Docker auf Linux oder Windows bereitstellst und welche Konfigurationspunkte du vor dem produktiven Einsatz prüfen solltest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, brauchst du ein System, das Docker zuverlässig ausführen kann und Tymeslot im Netzwerk erreichbar macht.

### Anforderungen

| Anforderung | Empfehlung |
| --- | --- |
| CPU | 1 vCPU oder mehr |
| RAM | Mindestens 2 GB |
| Speicherplatz | Mindestens 10 GB |
| Betriebssystem | Linux oder Windows |
| Container-Plattform | [Docker](https://www.docker.com/) |
| Netzwerkport | `4000/tcp` |

### Was du bereit haben solltest

| Element | Warum es benötigt wird |
| --- | --- |
| Ein Linux-Server oder Windows-System | Zum Hosten der Anwendung |
| Docker installiert | Tymeslot stellt Docker-bezogene Dateien im Repository bereit |
| Offener Netzwerkzugang zu `4000` oder ein Reverse Proxy | Für den Zugriff auf die Weboberfläche |
| Ein Hostname wie `[your_domain]` | Für den produktiven Einsatz empfohlen |
| Ein stark generiertes Secret | Für Sitzungs- und Anwendungssicherheit erforderlich |

:::info Docker-Installation erforderlich
Diese Anleitung fokussiert sich auf Docker, da das Tymeslot-Repository Docker-bezogene Dateien wie `Dockerfile.docker` und `docker-compose.yml` enthält. Eine native Installation mit Elixir und Phoenix ist möglicherweise möglich, aber die genauen Produktionsschritte konnten aus dem bereitgestellten Quellmaterial nicht vollständig verifiziert werden.
:::

### Hinweis für Windows

Unter Windows benötigst du in der Regel eine funktionierende Docker-Umgebung wie Docker Desktop. Wenn du Docker für Windows nutzt, stelle sicher, dass die Virtualisierung aktiviert ist und Docker Desktop läuft, bevor du fortfährst.

## Über Tymeslot

Tymeslot wird im Projekt-Repository als Open-Source-Plattform zur Terminplanung mit Elixir und Phoenix LiveView geführt. Es ist für Self-Hosting gedacht und kann auch über das verwaltete Cloud-Angebot des Projekts genutzt werden.

### Verifizierte Projektdetails

| Attribut | Wert |
| --- | --- |
| Name | Tymeslot |
| Kategorie | Terminplanung |
| Quell-Repository | `https://github.com/tymeslot/tymeslot` |
| Wöchentliche Erwähnung | Self-Host Weekly, 10. April 2026 |
| Technologie | Elixir / Phoenix LiveView |
| Self-Hosting-Unterstützung | Ja |

:::note Quellenprüfung
Das Repository bestätigt den Projektnamen, Zweck und Technologie-Stack. Einige Laufzeitdetails wie der genaue veröffentlichte Docker-Image-Name, die vollständige Liste der Umgebungsvariablen und die offizielle Produktionsport-Zuordnung waren im bereitgestellten Quell-Snapshot nicht vollständig sichtbar. Diese Teile sollten vor dem produktiven Einsatz direkt im Upstream-Repository geprüft werden.
:::

## Bereitstellungsmethode

Für die meisten Nutzer ist Docker die einfachste Bereitstellungsmethode, da es Abhängigkeiten isoliert und Updates leichter handhabbar macht.

### Warum Docker empfohlen wird

| Vorteil | Erklärung |
| --- | --- |
| Einfachere Einrichtung | Du musst Elixir, Erlang und Phoenix nicht manuell installieren |
| Sauberere Updates | Du kannst Docker-Images austauschen, ohne die Host-Umgebung neu aufzubauen |
| Bessere Portabilität | Dieselbe Container-Konfiguration funktioniert auf Linux und Windows |
| Einfacheres Rollback | Du kannst bei Bedarf auf eine frühere Image-Version zurückgehen |

### Wichtige Einschränkung

:::caution Docker-Image-Name muss geprüft werden
Im Beispiel wurde `youruser/tymeslot:latest` als Platzhalter-Image verwendet, dies ist kein verifizierter offizieller Image-Name. Prüfe vor der Bereitstellung das Tymeslot-Repository, die `README-Docker.md` oder die Container-Registry-Anweisungen des Projekts, um die korrekte Image-Quelle zu bestätigen.
:::

## Tymeslot mit Docker installieren

Dieser Abschnitt zeigt einen Docker-basierten Bereitstellungsablauf mit einem Platzhalter-Image. Ersetze `[your_tymeslot_image]` durch den verifizierten Image-Namen aus dem offiziellen Tymeslot-Projekt.

### Image herunterladen

```bash
docker pull [your_tymeslot_image]
```

### Ein Secret generieren

Unter Linux kannst du ein starkes Secret so erzeugen:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Speichere die Ausgabe sicher und verwende sie als `[your_secret_key_base]`.

Unter Windows kannst du einen sicheren Zufallswert mit einer anderen vertrauenswürdigen Methode generieren, falls `openssl` in deiner Shell nicht verfügbar ist.

### Container starten

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Parameterübersicht

| Parameter | Bedeutung |
| --- | --- |
| `-d` | Startet den Container im Hintergrund (detached) |
| `--name tymeslot` | Vergibt einen lesbaren Containernamen |
| `-p 4000:4000` | Leitet Host-Port `4000` auf Container-Port `4000` weiter |
| `-e SECRET_KEY_BASE=...` | Setzt das Anwendungsecret |
| `-e PHX_HOST=...` | Definiert den Hostnamen, den Phoenix verwendet |
| `-v tymeslot_data:/app/data` | Persistiert Anwendungsdaten |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persistiert PostgreSQL-Daten, falls im Container genutzt |

:::caution Volume-Pfade prüfen
Die oben gezeigten Volume-Pfade stammen aus dem Entwurfsmaterial und wurden im Upstream-Dokumentations-Snapshot nicht vollständig bestätigt. Prüfe die offizielle Tymeslot-Docker-Dokumentation, bevor du diese Pfade in der Produktion nutzt.
:::

### Containerstatus prüfen

```bash
docker ps
```

Logs anzeigen:

```bash
docker logs tymeslot
```

Bei Startproblemen sind die Logs die erste Anlaufstelle.

## Optionale Docker Compose Bereitstellung

Wenn du Docker-Container lieber mit Compose verwaltest, kannst du den Dienst in einer `docker-compose.yml` definieren. Das ist oft leichter zu pflegen als lange `docker run`-Befehle.

### Beispiel Compose-Datei

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Starte den Stack mit:

```bash
docker compose up -d
```

:::tip Compose-Verwaltung
Mit Compose sind Updates, Neustarts und Backups einfacher, da deine Container-Konfiguration in einer einzigen Datei bleibt. Das ist besonders praktisch, wenn du mehrere Docker-Images auf demselben Host verwaltest.
:::

## Tymeslot konfigurieren

Nachdem der Container läuft, solltest du die wichtigsten Konfigurationswerte prüfen.

### Wichtige Umgebungsvariablen

| Variable | Zweck |
| --- | --- |
| `SECRET_KEY_BASE` | Schützt Sessions und Anwendungsecrets |
| `PHX_HOST` | Definiert den öffentlichen Hostnamen oder die IP-Adresse |

Verwende Platzhalter so:

- `[your_secret_key_base]` ist dein generiertes sicheres Secret
- `[your_domain_or_ip]` ist der öffentliche Hostname oder die Server-IP, z. B. `schedule.[your_domain]` oder `[your_server_ip]`

### SMTP-Konfiguration

Das Entwurfsmaterial zeigt, dass SMTP für E-Mail-Benachrichtigungen in `config/prod.exs` konfiguriert werden kann. Beispiel:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note SMTP-Einrichtung prüfen
Das obige Beispiel stammt aus dem Entwurf und zeigt eine typische Elixir-Mailer-Konfiguration. Vergleiche sie dennoch mit den aktuellen Tymeslot-Konfigurationsdateien, da sich Mail-Einstellungen zwischen Releases ändern können.
:::

## Netzwerk und Zugriff

Sobald Tymeslot läuft, musst du sicherstellen, dass es aus deinem Browser erreichbar ist.

### Weboberfläche aufrufen

Öffne folgende URL im Browser:

```text
http://[your_server_ip]:4000
```

Wenn du einen Reverse Proxy und DNS konfiguriert hast, kannst du stattdessen verwenden:

```text
https://[your_domain]
```

### Portübersicht

| Port | Protokoll | Zweck |
| --- | --- | --- |
| `4000` | TCP | Standard-Webzugriff laut Entwurf |

### Firewall beachten

Du musst eingehenden Traffic auf `4000/tcp` erlauben, wenn du Tymeslot direkt erreichst.

:::caution Öffentliche Erreichbarkeit absichern
Wenn du Tymeslot direkt ins Internet stellst, solltest du es unbedingt hinter einen Reverse Proxy mit HTTPS setzen. Das erhöht die Sicherheit und ermöglicht einen sauberen Domain-basierten Zugriff.
:::

## Empfehlung Reverse Proxy

Ein Reverse Proxy wird empfohlen, wenn du einen Domainnamen und TLS-Zertifikat nutzen möchtest.

### Warum ein Reverse Proxy

| Vorteil | Erklärung |
| --- | --- |
| HTTPS-Unterstützung | Verschlüsselt den Traffic zwischen Nutzern und deinem Service |
| Domain-basierter Zugriff | Ermöglicht die Nutzung von `[your_domain]` statt eines Ports |
| Einfachere Zertifikatsverwaltung | Funktioniert gut mit Let's Encrypt und ähnlichen Tools |
| Sauberer öffentlicher Zugriff | Versteckt interne Anwendungsports |

### Was zu prüfen ist

Die genaue Reverse Proxy-Konfiguration hängt davon ab, ob du Nginx, Apache oder einen anderen Webserver nutzt. Da kein offizielles Proxy-Beispiel im Quellmaterial vollständig verfügbar war, solltest du die erforderlichen Header und Websocket-Handling in der offiziellen Tymeslot-Dokumentation vor dem Einsatz prüfen.

## Hinweise zur nativen Installation

Tymeslot ist mit Elixir und Phoenix LiveView gebaut, daher ist eine native Installation auf Linux- oder Windows-Entwicklungsumgebungen möglich. Der Entwurf enthielt diese Befehle:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Was du beachten solltest

| Thema | Hinweis |
| --- | --- |
| Elixir und Erlang | Müssen in kompatiblen Versionen installiert sein |
| Phoenix-Abhängigkeiten | Können zusätzliche Build-Tools erfordern |
| Datenbankeinrichtung | Muss vor Migrationen korrekt konfiguriert sein |
| Produktionshärtung | In der Regel komplexer als Docker |

:::danger Native Produktion erfordert Prüfung
Die nativen Installationsschritte wurden im Entwurf genannt, aber nicht vollständig aus dem bereitgestellten Upstream-Repository-Snapshot bestätigt. Verlasse dich nicht auf sie für die Produktion, ohne die aktuelle offizielle Tymeslot-Dokumentation und Repository-Dateien vorher zu prüfen.
:::

## Installation überprüfen

Nach der Bereitstellung solltest du sicherstellen, dass die Anwendung korrekt läuft.

### Grundchecks

| Check | Erwartetes Ergebnis |
| --- | --- |
| `docker ps` | Der Container `tymeslot` läuft |
| `docker logs tymeslot` | Keine wiederholten Start- oder Datenbankfehler |
| Browserzugriff | Die Tymeslot-Oberfläche lädt |
| Port-Test | `4000` antwortet auf dem Server |

### Häufige Probleme

| Problem | Mögliche Ursache |
| --- | --- |
| Seite lädt nicht | Port `4000` ist blockiert oder Container läuft nicht |
| Container beendet sich sofort | Ungültige Umgebungsvariablen oder fehlende Abhängigkeiten |
| Datenbankfehler in Logs | Datenbankinitialisierung fehlgeschlagen oder falscher Speicherpfad |
| Falsches Hostname-Verhalten | `PHX_HOST` ist nicht korrekt gesetzt |

## Tymeslot aktualisieren

Wenn eine neue Version verfügbar ist, solltest du das Update sorgfältig durchführen.

### Docker-Update-Ablauf

1. Lade das aktualisierte Image:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Stoppe den aktuellen Container:
   ```bash
   docker stop tymeslot
   ```
3. Entferne den alten Container:
   ```bash
   docker rm tymeslot
   ```
4. Starte einen neuen Container mit derselben Konfiguration.

Wenn du Compose nutzt, kannst du normalerweise so aktualisieren:

```bash
docker compose pull
docker compose up -d
```

:::tip Backup vor dem Update
Sichere vor dem Update deine persistenten Volumes und alle zugehörigen Datenbanken. So hast du eine Wiederherstellungsmöglichkeit, falls die neue Version eine Migration oder Kompatibilitätsprobleme mitbringt.
:::

## Weitere Links

| Ressource | Link |
| --- | --- |
| Offizielles Tymeslot-Repository | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Docker offizielle Webseite | [Docker](https://www.docker.com/) |
| Self-Host Weekly Erwähnung | [Self-Host Weekly - 10. April 2026](https://selfh.st/weekly/2026-04-10/) |

## Fazit

Glückwunsch, du hast Tymeslot erfolgreich auf Linux oder Windows mit Docker bereitgestellt und konfiguriert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂