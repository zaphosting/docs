---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Erfahre, wie du Yet Another Rclone Dashboard als moderne rclone GUI für Linux und Windows nutzt, inklusive rclone Browser-Zugriff und Daemon-Setup mit rclone rcd. -> Jetzt mehr erfahren"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard ist ein modernes Web-Dashboard zur Verwaltung von `rclone rcd` über eine browserbasierte Oberfläche. In dieser Anleitung lernst du, was die Software kann, welche Voraussetzungen sie hat und wie du sie auf Linux oder Windows mit unterstützten Deployment-Methoden einrichtest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, stelle sicher, dass dein System die Grundvoraussetzungen erfüllt und `rclone` bereits installiert ist.

### Anforderungen

Laut Projekt-Repository ist Yet Another Rclone Dashboard für `rclone rcd` ausgelegt und empfiehlt **Rclone `v1.72.0` oder neuer**.

| Anforderung | Details |
|---|---|
| Betriebssystem | Linux oder Windows |
| Hauptabhängigkeit | `rclone` |
| Empfohlene Rclone-Version | `v1.72.0` oder neuer |
| Zugriffsart | Webbrowser |
| Standard RC-Port | `5572/tcp` |
| Optionale Software | `Docker`, `Nginx` oder `Caddy` je nach Setup |

### Was das Dashboard bietet

Das Upstream-Projekt beschreibt Yet Another Rclone Dashboard als Frontend für `rclone rcd`. Basierend auf den verfügbaren Quellen umfasst es folgende Funktionen:

| Funktion | Beschreibung |
|---|---|
| Mehrere Verbindungsprofile | Verbindung zu verschiedenen `rclone rcd`-Instanzen |
| Systeminformationen | Anzeige von Rclone-System- und Statusinfos |
| Remote-Verwaltung | Remotes einsehen und Rclone-Konfiguration importieren/exportieren |
| Dateibrowser | Verzeichnisse durchsuchen und Dateien über das Dashboard verwalten |

:::info Rclone Voraussetzung
Diese Software ist kein eigenständiger Speicher-Server. Du benötigst eine funktionierende `rclone`-Installation und musst `rclone` im Daemon-Modus mit `rcd` ausführen.
:::

### Quellcode herunterladen

Der offizielle Quellcode ist auf GitHub verfügbar:

- [Yet Another Rclone Dashboard auf GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Zum Zeitpunkt des Quellmaterials ist die neueste Version `v0.3.8` mit dem Asset `yet-another-rclone-dashboard-v0.3.8.zip`.

## Funktionsweise des Dashboards verstehen

Yet Another Rclone Dashboard ist ein statisches Web-Frontend, das sich mit der *Rclone Remote Control API* verbindet, die von `rclone rcd` bereitgestellt wird. Das Dashboard ersetzt `rclone` nicht, sondern bietet dir eine übersichtlichere `rclone gui`-ähnliche Erfahrung im Browser.

Praktisch hast du mehrere Nutzungsarten:

| Methode | Anwendungsfall | Hinweise |
|---|---|---|
| `--rc-files` | Manuelles lokales oder Server-Deployment | Stellt die extrahierten Dashboard-Dateien direkt über `rclone rcd` bereit |
| `--rc-web-gui` mit Fetch-URL | Automatischer Download über Rclone | Lässt Rclone die neueste Dashboard-Version herunterladen |
| Reverse Proxy | Domain-basierter Zugriff | Nützlich, wenn du das Dashboard über `Nginx` oder `Caddy` veröffentlichen willst |
| Externer Webserver | Statisches Hosting | Frontend separat hosten und mit `rclone rcd` verbinden |

:::note Browserbasierter Zugriff
Da es sich um ein Web-Dashboard handelt, greifst du über deinen Browser darauf zu, nachdem `rclone rcd` läuft und korrekt konfiguriert ist.
:::

## Dashboard-Dateien herunterladen

Für die manuelle Deployment-Methode lade zuerst das neueste Release-Archiv von der GitHub-Releases-Seite herunter und entpacke es auf deinem Server oder lokal.

### Linux Beispiel

Lade das aktuelle Release-Archiv mit `wget` herunter:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Entpacke es dann:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [dein_dashboard_verzeichnis]
```

Ersetze `[dein_dashboard_verzeichnis]` durch den Ordner, in dem du die Dateien speichern möchtest, z.B. `/opt/yet-another-rclone-dashboard`.

### Windows Beispiel

Unter Windows lade das `.zip`-Archiv von der GitHub-Release-Seite herunter und entpacke es in einen Ordner wie:

```text
C:\yet-another-rclone-dashboard
```

:::tip Dateien an dauerhaftem Ort speichern
Entpacke das Dashboard nicht in einen temporären Ordner. `rclone rcd` benötigt bei der `--rc-files`-Methode dauerhaften Zugriff auf die Dateien.
:::

## Rclone mit Dashboard starten

Sobald die Dateien bereit sind, kannst du `rclone rcd` starten und das Dashboard bereitstellen.

### Methode 1: Manuelles Setup mit `--rc-files`

Diese Methode nutzt die extrahierten Dashboard-Dateien direkt.

#### Linux lokal Beispiel

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Linux Server Beispiel

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[dein_rc_benutzername] \
  --rc-pass=[dein_rc_passwort] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[deine_server_ip]:5572
```

#### Windows Beispiel

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[dein_rc_benutzername] `
  --rc-pass=[dein_rc_passwort] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[deine_server_ip]:5572
```

### Methode 2: Automatisches Setup mit `--rc-web-gui`

Diese Methode lässt Rclone das Dashboard automatisch über die GitHub Release API herunterladen.

#### Lokal Beispiel

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote Server Beispiel

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[dein_rc_benutzername] \
  --rc-pass=[dein_rc_passwort] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[deine_server_ip]:5572
```

:::caution RC-Schnittstelle nicht ungeschützt freigeben
Wenn du `rclone rcd` an `0.0.0.0` bindest, ist der Dienst von anderen Systemen erreichbar. Nutze `--rc-user` und `--rc-pass` oder setze einen korrekt konfigurierten Reverse Proxy davor.
:::

## Wichtige Rclone-Optionen

Die folgenden Optionen sind beim Setup dieses Dashboards am relevantesten.

| Option | Zweck |
|---|---|
| `--rc-files` | Statische Dashboard-Dateien aus lokalem Verzeichnis bereitstellen |
| `--rc-web-gui` | Aktiviert den Web-GUI-Download-Mechanismus von Rclone |
| `--rc-web-fetch-url` | Legt den Release-API-Endpunkt für das Dashboard fest |
| `--rc-no-auth` | Deaktiviert Authentifizierung, nur für vertrauenswürdige lokale Nutzung geeignet |
| `--rc-user` | Setzt den RC-Benutzernamen |
| `--rc-pass` | Setzt das RC-Passwort |
| `--rc-addr` | Definiert die Adresse und den Port zum Lauschen |
| `--rc-allow-origin` | Erlaubt Browserzugriff von der angegebenen Origin |
| `--rc-web-gui-no-open-browser` | Verhindert automatisches Öffnen des Browsers auf Headless-Systemen |
| `--rc-user-from-header` | Akzeptiert den authentifizierten Benutzer von einem Reverse Proxy Header |

### Erklärung der Platzhalterwerte

Verwende die folgenden Platzhalter in den Beispielen:

| Platzhalter | Bedeutung |
|---|---|
| `[dein_dashboard_verzeichnis]` | Ordner mit den entpackten Dashboard-Dateien |
| `[dein_rc_benutzername]` | Benutzername für `rclone rcd` Authentifizierung |
| `[dein_rc_passwort]` | Passwort für `rclone rcd` Authentifizierung |
| `[deine_server_ip]` | Öffentliche oder private IP-Adresse deines Servers |

## Browserzugriff konfigurieren

Nachdem du `rclone rcd` gestartet hast, öffne die Dashboard-URL im Browser.

### Lokaler Zugriff

Wenn du den Dienst lokal auf demselben Rechner gestartet hast, öffne:

```text
http://127.0.0.1:5572
```

### Remote Zugriff

Wenn du den Dienst auf einem entfernten Linux- oder Windows-Server gestartet und externen Zugriff erlaubt hast, öffne:

```text
http://[deine_server_ip]:5572
```

Wenn du eine Domain und Reverse Proxy nutzt, öffne stattdessen deine konfigurierte URL, z.B.:

```text
https://[deine_domain]
```

:::info Erlaubte Origin muss übereinstimmen
Der Wert, den du mit `--rc-allow-origin` angibst, sollte mit der Adresse übereinstimmen, die du im Browser nutzt. Wenn sie nicht übereinstimmen, kann das Dashboard keine Verbindung herstellen.
:::

## Reverse Proxy verwenden

Ein Reverse Proxy ist praktisch, wenn du sauberere URLs, HTTPS oder zusätzliche Zugriffskontrolle möchtest.

### Nginx Beispiel

Das folgende Beispiel stellt die extrahierten statischen Dashboard-Dateien über `Nginx` bereit:

```nginx
server {
    listen 80;
    server_name [deine_domain];

    location / {
        root /pfad/zum/entpackten/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy Beispiel

Das folgende Beispiel stellt die statischen Dashboard-Dateien über `Caddy` bereit:

```caddy
[deine_domain] {
    root * /pfad/zum/entpackten/build
    file_server
}
```

:::note Statisches Frontend Hosting
Diese Beispiele hosten nur die Frontend-Dateien. Du brauchst weiterhin ein funktionierendes `rclone rcd` Backend, das das Dashboard erreichen kann.
:::

## Erweiterte Authentifizierung mit Reverse Proxy

Das Projekt beschreibt auch ein erweitertes Setup, bei dem die Authentifizierung von einem externen Gateway übernommen und mit `--rc-user-from-header` an Rclone weitergegeben wird.

### Rclone Beispiel

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/pfad/zum/entpackten/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[deine_domain]
```

### Caddy Reverse Proxy Beispiel

```caddy
@rclone host [deine_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::caution Erweiterte Authentifizierung erfordert sorgfältige Tests
Dieses Setup hängt davon ab, dass dein Reverse Proxy und Authentifizierungs-Gateway die korrekten Header weiterleiten. Fehlt der Header oder ist er falsch konfiguriert, kann der Zugriff fehlschlagen oder unerwartet sein.
:::

## Installation überprüfen

Wenn alles läuft, überprüfe, ob das Dashboard korrekt lädt.

### Grundlegende Checks

Prüfe Folgendes:

| Check | Erwartetes Ergebnis |
|---|---|
| `rclone rcd` Prozess läuft | Keine Startfehler in Konsole oder Service-Logs |
| Port `5572` lauscht | Dienst ist lokal oder remote erreichbar |
| Browser öffnet konfigurierte URL | Yet Another Rclone Dashboard Oberfläche lädt |
| Authentifizierung funktioniert | Du kannst dich anmelden, falls RC-Auth aktiviert ist |

### Häufige Probleme

| Problem | Mögliche Ursache | Empfohlene Aktion |
|---|---|---|
| Dashboard lädt nicht | Falsche URL oder Dienst läuft nicht | `--rc-addr` Wert und Prozessstatus prüfen |
| Browser-Verbindungsfehler | Port durch Firewall blockiert | Eingehenden Zugriff auf `5572/tcp` erlauben |
| Login schlägt fehl | Falscher `--rc-user` oder `--rc-pass` | `rclone rcd` mit korrekten Zugangsdaten neu starten |
| Frontend öffnet, API-Aufrufe fehlschlagen | `--rc-allow-origin` stimmt nicht | Origin auf exakte Browser-URL setzen |
| Remote Zugriff nicht möglich | Dienst nur an `127.0.0.1` gebunden | `0.0.0.0:5572` nutzen, wenn Remote-Zugriff gewünscht |

:::danger Öffentliche Freigabe ohne Schutz vermeiden
Gib das Dashboard nicht direkt ohne Authentifizierung oder sicheren Reverse Proxy ins Internet frei. Wenn du es als Remote-`rclone browser` oder zur Verwaltung von `rclone google drive` Remotes über das Netzwerk nutzen willst, sichere den Endpunkt zuerst ab.
:::

## Zusätzliche Hinweise für Linux und Windows

### Linux

Linux ist meist die einfachste Umgebung für dauerhaft laufende `rclone rcd` Dienste. Du kannst den Befehl manuell, über einen Terminal-Multiplexer oder als Service ausführen, je nach Systemdesign.

### Windows

Unter Windows achte darauf, dass der Pfad bei `--rc-files` auf das entpackte Dashboard-Verzeichnis zeigt und die Firewall den konfigurierten Port für Remote-Zugriff erlaubt.

### Docker Hinweis

Das Quellmaterial erwähnt Docker als optionale Abhängigkeit, enthält aber keine verifizierte Docker-Deployment-Anleitung für dieses Projekt. Wenn du `rclone docker` Workflows nutzen möchtest, prüfe das Upstream-Repository, bevor du eine Container-Lösung annimmst.

## Conclusion

Glückwunsch, du hast Yet Another Rclone Dashboard erfolgreich auf Linux oder Windows eingerichtet. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂