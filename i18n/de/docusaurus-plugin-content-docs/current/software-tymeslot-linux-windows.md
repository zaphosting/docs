---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Erfahre, wie du Tymeslot mit Docker, Docker-Containern und den Docker-Grundlagen auf Linux oder Windows für selbstgehostete Terminplanung einsetzt. -> Jetzt mehr erfahren"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Tymeslot ist eine Open-Source-Plattform für Meetings und Terminplanung, entwickelt mit Elixir und Phoenix LiveView. In dieser Anleitung lernst du, was Tymeslot ist, was du für den Betrieb brauchst und wie du es auf Linux oder Windows mit Docker bereitstellst.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du Tymeslot bereitstellst, solltest du sicherstellen, dass dein System die Grundvoraussetzungen erfüllt und Docker verfügbar ist.

### Voraussetzungen

Die folgenden Anforderungen basieren auf den verfügbaren Projektinformationen und dem bereitgestellten Setup-Entwurf:

| Voraussetzung | Empfehlung |
|---|---|
| CPU | Mindestens `1` vCPU |
| RAM | Mindestens `2 GB` |
| Speicherplatz | Mindestens `10 GB` |
| Betriebssystem | Linux oder Windows |
| Container-Laufzeit | Docker |
| Netzwerk | Zugriff auf Port `4000` |

### Was ist verifiziert und was nicht

:::info Quellenlage
Das Tymeslot-Repository bestätigt, dass das Projekt eine Open-Source-Terminplanungsplattform ist, die mit Elixir und Phoenix LiveView entwickelt wurde, und dass Docker-bezogene Dateien wie `Dockerfile.docker` und `docker-compose.yml` im Repository vorhanden sind.

Die genauen Produktionsbereitstellungsschritte, der Image-Name und alle erforderlichen Umgebungsvariablen sind jedoch aus dem bereitgestellten Quellmaterial nicht vollständig verifizierbar. Deshalb verwendet diese Anleitung die verfügbaren Entwurfsinformationen und markiert Werte, die du vor dem produktiven Einsatz im offiziellen Repository überprüfen solltest.
:::

### Docker installieren

Du benötigst Docker, bevor du Tymeslot in einem Container ausführen kannst.

- Unter Linux installiere Docker Engine mit der offiziellen [Docker-Dokumentation](https://docs.docker.com/engine/install/)
- Unter Windows installiere [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker für Windows
Wenn du Docker für Windows nutzt, stelle sicher, dass die Virtualisierung aktiviert ist und Docker Desktop läuft, bevor du fortfährst.
:::

## Software-Übersicht

Tymeslot gehört zur Kategorie *Scheduling* und ist für selbstgehostetes Termin- und Meeting-Management konzipiert.

| Eigenschaft | Wert |
|---|---|
| Name | `Tymeslot` |
| Kategorie | `Scheduling` |
| Quelle | `https://github.com/tymeslot/tymeslot` |
| Tech-Stack | `Elixir`, `Phoenix LiveView` |
| Bereitstellungsart | Selbstgehostet, Docker-unterstützt |
| Wöchentliche Erwähnung | Self-Host Weekly, 10. April 2026 |

### Warum Tymeslot nutzen

Tymeslot ist nützlich, wenn du:

- deine eigene Terminplanungsplattform hosten möchtest
- Buchungsdaten auf deiner eigenen Infrastruktur behalten willst
- Termine verwalten möchtest, ohne auf eine Drittanbieter-SaaS-Plattform angewiesen zu sein
- eine moderne Webanwendung mit Docker-Containern bereitstellen willst

## Bereitstellungsoptionen

Basierend auf den verfügbaren Informationen gibt es zwei mögliche Ansätze:

| Methode | Status |
|---|---|
| Docker-Bereitstellung | Empfohlen |
| Native Elixir/Phoenix-Installation | Möglich, aber fortgeschrittener |

Für die meisten Nutzer ist Docker die bessere Wahl, da es Installation, Updates und Service-Management vereinfacht.

## Tymeslot mit Docker installieren

Dies ist die praktischste Methode für Linux- und Windows-Systeme.

### Docker-Image ziehen

Der bereitgestellte Entwurf verwendet folgende Image-Referenz:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Docker-Image zuerst prüfen
Der genaue öffentliche Image-Name ist aus dem bereitgestellten Repository-Inhalt nicht bestätigt. Bevor du diesen Befehl produktiv nutzt, überprüfe den korrekten Image-Namen im offiziellen Tymeslot-Repository, in den Release-Notes oder auf der Docker-Hub-Seite, falls vorhanden.
:::

### Container starten

Du kannst Tymeslot mit folgendem Befehl aus dem Setup-Entwurf starten:

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Wenn du Windows PowerShell nutzt, ist der `openssl`-Befehl möglicherweise nicht standardmäßig verfügbar. Erzeuge in dem Fall einen sicheren Zufallswert separat und ersetze `SECRET_KEY_BASE` manuell.

### Beispielbefehlsreferenz

| Option | Zweck |
|---|---|
| `--name tymeslot` | Setzt den Containernamen |
| `-p 4000:4000` | Öffnet Tymeslot auf Port `4000` |
| `-e SECRET_KEY_BASE=...` | Definiert das Anwendungspasswort für Verschlüsselung und Sessions |
| `-e PHX_HOST=localhost` | Setzt den Hostnamen, den Phoenix verwendet |
| `-v tymeslot_data:/app/data` | Persistiert Anwendungsdaten |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persistiert PostgreSQL-Daten |
| `youruser/tymeslot:latest` | Docker-Image-Name aus dem Entwurf |

### Geheimen Schlüssel unter Linux generieren

Wenn `openssl` installiert ist, kannst du einen Schlüssel so erzeugen:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Geheimen Schlüssel unter Windows PowerShell generieren

In PowerShell kannst du einen Platzhalter-Schlüssel so erzeugen:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Eigenen geheimen Schlüssel verwenden
Verwende keine Beispiel-Schlüssel in der Produktion. Erzeuge immer deinen eigenen `SECRET_KEY_BASE` und bewahre ihn sicher auf.
:::

## Tymeslot konfigurieren

Vor der ersten Nutzung solltest du die wichtigsten Laufzeiteinstellungen prüfen.

### Umgebungsvariablen

Der Entwurf bestätigt folgende Umgebungsvariablen:

| Variable | Beispiel | Zweck |
|---|---|---|
| `SECRET_KEY_BASE` | `[dein_geheimer_schluessel]` | Sichert Sessions und Verschlüsselungsfunktionen |
| `PHX_HOST` | `[deine_domain]` oder `[deine_server_ip]` | Definiert den öffentlichen Hostnamen der Anwendung |

Bei den Platzhaltern gilt:

- `[dein_geheimer_schluessel]` ist dein generierter sicherer Schlüssel
- `[deine_domain]` ist deine öffentliche Domain, falls vorhanden
- `[deine_server_ip]` ist die IP-Adresse deines Servers für direkten Zugriff

### SMTP-Konfiguration

Der Entwurf erwähnt auch SMTP-Konfiguration in `config/prod.exs` für E-Mail-Benachrichtigungen:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "deine_email@example.com",
  password: "dein_passwort",
  tls: :if_available,
  auth: :always
```

:::note SMTP-Konfiguration prüfen
Das genaue Format der Mailer-Konfiguration sollte vor dem produktiven Einsatz mit dem aktuellen Tymeslot-Repository abgeglichen werden, da sich die Anwendungskonfiguration zwischen Releases ändern kann.
:::

## Zugriff auf Tymeslot

Sobald der Container läuft, kannst du die Weboberfläche testen.

### Lokaler Zugriff

Wenn du lokal testest, öffne:

```text
http://localhost:4000
```

### Remote-Zugriff

Wenn Tymeslot auf einem entfernten Server läuft, öffne:

```text
http://[deine_server_ip]:4000
```

Wenn du eine Domain und einen Reverse Proxy konfiguriert hast, kannst du stattdessen zugreifen über:

```text
https://[deine_domain]
```

## Firewall und Netzwerk

Tymeslot benötigt Netzwerkzugriff auf den von Docker freigegebenen Port.

### Benötigter Port

| Port | Protokoll | Zweck |
|---|---|---|
| `4000` | TCP | Webzugriff auf die Tymeslot-Anwendung |

### Firewall-Hinweise

Du solltest sicherstellen, dass:

- Port `4000` in der Server-Firewall offen ist, wenn du direkten Zugriff möchtest
- deine Cloud- oder Provider-Firewall denselben Port erlaubt
- dein Reverse Proxy den Traffic korrekt weiterleitet, falls du eine Domain nutzt

:::caution Öffentliche Freigabe
Wenn du Port `4000` direkt ins Internet öffnest, solltest du die Sicherheitsfolgen kennen. Für produktive Deployments ist ein Reverse Proxy mit HTTPS meist die bessere Wahl.
:::

## Optionale native Installation

Eine native Installation ist möglich, wenn du Docker nicht verwenden möchtest. Diese Methode ist fortgeschrittener und erfordert eine Elixir- und Phoenix-kompatible Umgebung.

### Grundlegende native Schritte

Laut Entwurf läuft der Prozess so ab:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Hinweise zur nativen Bereitstellung

Für native Deployments benötigst du außerdem:

- Elixir
- Erlang/OTP
- Phoenix-Abhängigkeiten
- eine unterstützte Datenbankeinrichtung
- Überprüfung der Produktionskonfiguration

:::info Komplexität der nativen Installation
Das bereitgestellte Quellmaterial enthält nicht genug verifizierte Details, um eine vollständige Linux- oder Windows-native Produktionsinstallation sicher zu dokumentieren. Wenn du diese Methode nutzen möchtest, prüfe die offizielle Repository-Dokumentation direkt vor dem Deployment.
:::

## Wartung und Fehlerbehebung

Nach der Bereitstellung solltest du prüfen, dass der Dienst verfügbar bleibt und deine Daten persistent sind.

### Container-Status prüfen

```bash
docker ps
```

### Logs anzeigen

```bash
docker logs tymeslot
```

### Container neu starten

```bash
docker restart tymeslot
```

### Häufige Probleme

| Problem | Mögliche Ursache | Empfohlene Aktion |
|---|---|---|
| Webseite lädt nicht | Port `4000` ist blockiert | Firewall und Docker-Port-Mapping prüfen |
| Container beendet sich sofort | Ungültige Umgebungsvariablen | `SECRET_KEY_BASE` und Image-Einstellungen prüfen |
| Datenbankfehler | Problem mit persistentem Speicher oder Datenbankinitialisierung | Logs prüfen und Volumes verifizieren |
| Falscher Hostname in Links | `PHX_HOST` ist falsch gesetzt | `PHX_HOST` auf `[deine_domain]` oder `[deine_server_ip]` setzen |

## Best Practices

### Persistente Volumes nutzen

Behalte immer persistente Docker-Volumes für Anwendungs- und Datenbankdaten, damit bei Container-Neuerstellung keine Daten verloren gehen.

### Reverse Proxy verwenden

Für öffentliche Deployments ist es meist besser, Tymeslot hinter einem Reverse Proxy wie Nginx oder Apache mit HTTPS zu betreiben.

### Änderungen im Upstream prüfen

Da Tymeslot aktiv entwickelt wird, solltest du vor Updates das offizielle Repository prüfen. Besonders wichtig bei:

- geänderten Docker-Images
- aktualisierten Umgebungsvariablen
- Datenbankmigrationen
- Änderungen an der Mail-Konfiguration

## Weiterführende Links

| Ressource | Link |
|---|---|
| Tymeslot GitHub-Repository | [Offizielles Tymeslot Repository](https://github.com/tymeslot/tymeslot) |
| Self-Host Weekly Erwähnung | [Self-Host Weekly - 10. April 2026](https://selfh.st/weekly/2026-04-10/) |
| Docker-Dokumentation | [Docker Dokumentation](https://docs.docker.com/) |
| Docker Desktop Download | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Fazit

Glückwunsch, du hast erfolgreich gelernt, wie du Tymeslot auf Linux oder Windows mit Docker überprüfst und bereitstellst. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂