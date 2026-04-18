---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Erfahre, wie du Zublo für sichere Abo-Datenverwaltung, wiederkehrende Zahlungsüberwachung und selbstgehostete Datenanalysen mit Docker einsetzt -> Jetzt mehr erfahren"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Zublo ist ein Open-Source, selbstgehosteter Abo-Tracker, der dir hilft, wiederkehrende Zahlungen und zugehörige Daten an einem Ort zu verwalten. In dieser Anleitung lernst du, wie du Zublo auf einem Linux- oder Windows-Server mit Docker bereitstellst und überprüfst, ob die Weboberfläche korrekt funktioniert.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, stelle sicher, dass dein Server die Grundvoraussetzungen erfüllt und Docker installiert ist.

### Anforderungen

| Komponente | Empfohlenes Minimum |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Speicher | 1 GB freier Festplattenspeicher |
| Betriebssystem | Linux oder Windows mit Docker-Unterstützung |
| Netzwerk | Zugriff auf Port `9597` |

### Benötigte Software

Folgende Software muss installiert sein:

| Software | Zweck |
| --- | --- |
| [Docker](https://www.docker.com/) | Führt den Zublo-Container aus |
| Docker Compose | Startet und verwaltet den Container-Stack |

:::info Docker Voraussetzung
Diese Anleitung basiert auf der Docker-Bereitstellungsmethode, wie sie im Projekt-Repository beschrieben ist. Falls Docker noch nicht installiert ist, musst du das zuerst erledigen, bevor du weitermachst.
:::

:::caution Portzugriff
Zublo nutzt standardmäßig den Port `9597`. Stelle sicher, dass dieser Port nicht von einem anderen Dienst belegt ist und in deiner Firewall freigegeben ist, wenn du die Weboberfläche aus der Ferne erreichen möchtest.
:::

## Über Zublo

Zublo ist für die Nachverfolgung von Abonnements, wiederkehrenden Zahlungen und ausgabenbezogenen Daten über eine selbstgehostete Webanwendung gedacht. Laut Projekt-Repository ist es Docker-first und für Selbsthoster gebaut, die die Kontrolle über ihre eigenen Daten behalten wollen.

### Was die Anwendung bietet

Basierend auf den verfügbaren Projektinformationen konzentriert sich Zublo auf folgende Bereiche:

| Funktionsbereich | Beschreibung |
| --- | --- |
| Abo-Verwaltung | Verwaltung von wiederkehrenden Diensten und Zahlungen |
| Selbsthosting | Behalte deine Abo-Daten auf deinem eigenen Server |
| Weboberfläche | Zugriff auf die Anwendung über den Browser |
| API-Zugriff | Nutzung des integrierten API-Endpunkts |
| Admin-Backend | Zugriff auf die PocketBase-Admin-Oberfläche |

:::note Funktionsverfügbarkeit
Einige erweiterte Funktionen, die in Drittanbieter-Zusammenfassungen erwähnt werden, wie KI-gestützte Analysen, können von der aktuellen Projektversion abhängen. Falls eine Funktion in deiner Installation nicht sichtbar ist, prüfe die offizielle Repository für versionsspezifische Details: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Erstelle das Zublo-Projektverzeichnis

Erstelle zuerst ein eigenes Verzeichnis für deine Zublo-Bereitstellung, damit deine Konfiguration und persistenten Daten organisiert bleiben.

### Linux

Führe folgende Befehle im Terminal aus:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

Wenn du PowerShell nutzt, führe aus:

```powershell
mkdir zublo-data
cd zublo-data
```

Dieser Ordner enthält später deine `docker-compose.yml` Datei und das Verzeichnis für persistente Anwendungsdaten.

## Erstelle die Docker Compose-Konfiguration

Erstelle als Nächstes eine `docker-compose.yml` Datei in deinem Projektverzeichnis.

### Beispielkonfiguration

Verwende folgende Konfiguration:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Konfigurationsübersicht

| Schlüssel | Beispielwert | Zweck |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Lädt das neueste Zublo-Container-Image |
| `container_name` | `zublo` | Vergibt einen lesbaren Containernamen |
| `restart` | `unless-stopped` | Startet den Container automatisch nach Neustarts oder Fehlern neu |
| `ports` | `9597:9597` | Macht die Webanwendung auf Port `9597` erreichbar |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Schützt sensible gespeicherte Daten |
| `volumes` | `./zublo-data:/pb/pb_data` | Speichert Anwendungsdaten persistent auf deinem Server |

:::danger Verwende einen starken Verschlüsselungsschlüssel
Lass den Verschlüsselungsschlüssel nicht auf einem schwachen oder Standardwert. Ersetze `[your_secure_encryption_key]` vor dem Start im Produktivbetrieb durch ein langes, zufälliges Geheimnis.
:::

### Datei speichern

Speichere die Datei als `docker-compose.yml` in deinem aktuellen Verzeichnis. Danach bist du bereit, den Dienst zu starten.

## Starte Zublo

Nachdem du die Compose-Datei erstellt hast, starte den Container-Stack.

```bash
docker compose up -d
```

Falls deine Umgebung die ältere Docker Compose-Syntax nutzt, verwende stattdessen:

```bash
docker-compose up -d
```

### Überprüfe, ob der Container läuft

Du kannst den Containerstatus mit folgendem Befehl prüfen:

```bash
docker ps
```

Du solltest einen Container mit dem Namen `zublo` in der Liste sehen.

### Logs ansehen bei Bedarf

Wenn der Dienst nicht korrekt startet, schaue dir die Logs an:

```bash
docker logs zublo
```

Das hilft dir, Probleme wie ungültige Konfiguration, Portkonflikte oder Berechtigungsprobleme mit persistenten Daten zu erkennen.

## Greife auf die Weboberfläche zu

Sobald der Container läuft, kannst du Zublo im Browser öffnen.

### Anwendungs-URLs

Ersetze `[your_server_ip]` durch die öffentliche IP-Adresse deines Servers oder die lokale Netzwerk-IP.

| Oberfläche | URL |
| --- | --- |
| Hauptanwendung | `http://[your_server_ip]:9597` |
| PocketBase Admin-Oberfläche | `http://[your_server_ip]:9597/_/` |
| API-Endpunkt | `http://[your_server_ip]:9597/api/` |

:::info Localhost vs. Remote-Zugriff
Wenn du direkt auf dem gleichen Rechner arbeitest, auf dem Zublo installiert ist, kannst du auch `http://localhost:9597` verwenden. Für den Fernzugriff nutze deine tatsächliche Server-IP oder eine konfigurierte Domain.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Sicheren Zugriff konfigurieren

Nachdem du bestätigt hast, dass Zublo erreichbar ist, solltest du prüfen, wie es ins Internet exponiert wird.

### Firewall-Überlegungen

Wenn du die Anwendung von einem anderen Gerät nicht erreichen kannst, stelle sicher, dass Port `9597` in deiner Firewall geöffnet ist.

| Port | Protokoll | Zweck |
| --- | --- | --- |
| `9597` | TCP | Zublo Weboberfläche, Admin-Panel und API |

### Reverse-Proxy Nutzung

Wenn du eine Domain wie `[your_domain]` verwenden möchtest, kannst du Zublo hinter einem Reverse-Proxy wie Nginx oder einer anderen unterstützten Proxy-Lösung betreiben. Dabei leitet der Proxy Anfragen an `http://127.0.0.1:9597` oder die interne Docker-Host-Adresse weiter.

:::tip HTTPS für Internetzugang nutzen
Wenn du Zublo öffentlich zugänglich machen willst, empfiehlt sich ein Reverse-Proxy mit SSL, damit deine Abo-Daten verschlüsselt übertragen werden.
:::

## Verwaltung persistenter Daten

Zublo speichert seine persistenten Anwendungsdaten im gemounteten Verzeichnis, das in der Compose-Datei definiert ist.

### Speicherort der Daten

In dieser Anleitung wird folgende Volume-Mapping verwendet:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Das bedeutet, deine Anwendungsdaten liegen im lokalen Ordner `zublo-data` innerhalb deines Projektverzeichnisses.

### Warum Persistenz wichtig ist

Persistenter Speicher stellt sicher, dass deine Anwendungsdaten auch nach folgenden Ereignissen erhalten bleiben:

- Container-Neustarts
- Server-Neustarts
- Image-Updates
- Wartungsarbeiten

:::caution Backup-Empfehlung
Da Zublo wichtige persönliche Abo-Daten speichert, solltest du das Verzeichnis `zublo-data` regelmäßig sichern, bevor du größere Änderungen oder Updates durchführst.
:::

## Grundlegende Wartung

Sobald Zublo läuft, musst du es gelegentlich aktualisieren oder neu starten.

### Container neu starten

```bash
docker restart zublo
```

### Bereitstellung stoppen

```bash
docker compose down
```

### Auf das neueste Image aktualisieren

Ziehe das neueste Image und erstelle den Container neu:

```bash
docker compose pull
docker compose up -d
```

### Nützliche Befehlsübersicht

| Befehl | Zweck |
| --- | --- |
| `docker compose up -d` | Starte Zublo im Hintergrund |
| `docker ps` | Zeige laufende Container an |
| `docker logs zublo` | Zeige Container-Logs an |
| `docker restart zublo` | Starte den Container neu |
| `docker compose down` | Stoppe und entferne den Container |
| `docker compose pull` | Lade das neueste Image herunter |

## Fehlerbehebung

Falls Zublo nicht wie erwartet funktioniert, prüfe folgende häufige Ursachen.

### Port `9597` ist bereits belegt

Wenn Docker einen Fehler wegen Portbindung meldet, nutzt ein anderer Dienst bereits `9597`. Du musst den störenden Dienst stoppen oder die Portzuordnung auf der Host-Seite ändern.

Beispiel mit anderem externen Port:

```yaml
ports:
  - "9600:9597"
```

Dann erreichst du die Anwendung über `http://[your_server_ip]:9600`.

### Container startet, Seite lädt aber nicht

Prüfe Folgendes:

- Container läuft mit `docker ps`?
- Logs mit `docker logs zublo` prüfen
- Firewall erlaubt den gewählten Port?
- Richtige IP-Adresse oder Hostname verwendet?

### Probleme mit dem Verschlüsselungsschlüssel

Wenn du `PB_ENCRYPTION_KEY` nach der Erstinstallation änderst, sind bereits verschlüsselte Daten möglicherweise nicht mehr lesbar. Falls du den Schlüssel rotieren musst, sieh dir zuerst die offizielle Projektdokumentation an, da das genaue Migrationsverhalten im bereitgestellten Material nicht dokumentiert ist.

:::note Fehlende Verhaltensdetails
Das bereitgestellte Material dokumentiert nicht alle Admin-Schritte beim ersten Start, das Verhalten bei der Kontoerstellung oder erweiterte Konfigurationsoptionen vollständig. Für diese Details schaue in die Originaldokumentation: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Conclusion

Glückwunsch, du hast Zublo erfolgreich auf Linux oder Windows mit Docker installiert und konfiguriert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂