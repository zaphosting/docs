---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Richte Yet Another Rclone Dashboard ein, ein modernes rclone GUI und rclone Browser für Linux und Windows, um deinen rclone Daemon sicher zu verwalten -> Jetzt mehr erfahren"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Yet Another Rclone Dashboard ist ein modernes Web-Dashboard für `rclone rcd`, das dir eine grafische Oberfläche bietet, um Remotes zu verwalten, Dateien zu durchsuchen und Transfers zu überwachen. In dieser Anleitung lernst du, wie du es auf Linux oder Windows installierst und mit deinem bestehenden Rclone-Setup verbindest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass dein System die Grundvoraussetzungen erfüllt und Rclone bereits installiert ist.

### Voraussetzungen

| Komponente | Voraussetzung |
| --- | --- |
| Betriebssystem | Linux oder Windows |
| Rclone-Version | `v1.72.0` oder neuer empfohlen |
| Zugriffsmethode | Lokale Shell, SSH oder RDP |
| Standardport | `5572/tcp` |
| Optional | Reverse Proxy wie Nginx oder Caddy |

### Was du vor der Installation brauchst

Du benötigst Folgendes:

- Eine funktionierende Installation von [Rclone](https://rclone.org/)
- Mindestens ein konfiguriertes Rclone-Remote, wenn du Cloud-Speicher wie *rclone Google Drive* nutzen möchtest
- Zugriff auf den offenen oder weitergeleiteten Port `5572`, falls du remote zugreifen willst
- Einen Browser, um das Dashboard zu öffnen

:::info Rclone Voraussetzung
Yet Another Rclone Dashboard ist nur ein Frontend für `rclone rcd`. Es ersetzt Rclone nicht, daher musst du Rclone zuerst installieren und konfigurieren.
:::

### Wichtige Platzhalter in dieser Anleitung

Die folgenden Befehle verwenden Platzhalter, die du durch deine eigenen Werte ersetzen musst.

| Platzhalter | Bedeutung |
| --- | --- |
| `[your_dashboard_path]` | Pfad, in dem die Dashboard-Dateien liegen |
| `[your_server_ip]` | Öffentliche oder private IP-Adresse deines Servers |
| `[your_domain]` | Domainname für den Zugriff über Reverse Proxy |
| `[your_rc_user]` | Benutzername für Rclone RC-Authentifizierung |
| `[your_rc_password]` | Passwort für Rclone RC-Authentifizierung |

## Über Yet Another Rclone Dashboard

Yet Another Rclone Dashboard ist ein statisches Web-Frontend, veröffentlicht auf [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Laut Projekt-README ist es für `rclone rcd` konzipiert und unterstützt Funktionen wie:

- Verbindung zu Rclone im Daemon-Modus
- Verwaltung mehrerer Verbindungsprofile
- Anzeige von Systeminformationen und Status
- Verzeichnis-Browsing
- Arbeiten mit Remotes und Konfigurationsdaten

Da es ein Frontend ist, werden die eigentlichen Dateioperationen weiterhin von Rclone ausgeführt. Das Dashboard benötigt also eine laufende `rclone rcd`-Instanz.

## Installationsmethoden

Du kannst das Dashboard auf verschiedene Arten bereitstellen, je nachdem, wie du darauf zugreifen möchtest. Die gängigsten Methoden sind die direkte Nutzung von Rclone mit statischen Dateien oder das automatische Laden der Web-GUI durch Rclone.

### Installationsübersicht

| Methode | Am besten geeignet für | Hinweise |
| --- | --- | --- |
| `--rc-files` | Manuelle Installationen | Du lädst das Dashboard selbst herunter und entpackst es |
| `--rc-web-gui` mit `--rc-web-fetch-url` | Schnelle Einrichtung | Rclone lädt die neueste Dashboard-Version automatisch |
| Externer Webserver | Individuelles Hosting | Praktisch mit Nginx oder Caddy |
| Reverse Proxy mit Auth-Gateway | Fortgeschrittene Setups | Optimal für gesicherten Remote-Zugriff |

## Dashboard manuell herunterladen

Wenn du volle Kontrolle über die eingesetzte Version möchtest, kannst du die neueste Version manuell von den GitHub-Releases herunterladen.

### Linux

Erstelle ein Verzeichnis für das Dashboard, lade das neueste Release-Archiv herunter und entpacke es.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

Unter Windows lade das Release-Archiv von der offiziellen GitHub-Release-Seite herunter und entpacke es in einen Ordner wie:

```text
C:\rclone-dashboard
```

:::note Release-Version
Zum Zeitpunkt der Erstellung ist die neueste verifizierte Version `v0.3.8`. Falls eine neuere Version verfügbar ist, kannst du diese stattdessen verwenden.
:::

## Dashboard mit Rclone starten

Sobald die Dateien bereitstehen, kannst du `rclone rcd` starten und das Dashboard direkt über Rclone bereitstellen.

### Lokaler Zugriff unter Linux

Nutze diese Methode, wenn du das Dashboard nur lokal auf demselben System nutzen möchtest.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Remote-Zugriff unter Linux

Nutze diese Methode, wenn du das Dashboard von einem anderen Gerät im Netzwerk erreichen möchtest.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Lokaler Zugriff unter Windows

Öffne die Eingabeaufforderung oder PowerShell und führe aus:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Remote-Zugriff unter Windows

Für den Remote-Zugriff führe aus:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Nicht ungeschützte Rclone GUI freigeben
Wenn du Rclone an `0.0.0.0` bindest, verwende niemals `--rc-no-auth`. Schütze den Remote-Zugriff immer mit Authentifizierung oder einem Reverse Proxy.
:::

## Rclone WebGUI Fetcher verwenden

Rclone kann das Dashboard auch automatisch von GitHub laden. Das ist praktisch, wenn du die Dateien nicht manuell herunterladen und entpacken möchtest.

### Lokaler Modus

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Remote-Modus

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Automatische Updates
Diese Methode ist praktisch, wenn Rclone automatisch die neueste Dashboard-Version laden soll. Sie ist oft die schnellste Option, um ein neues rclone GUI zu testen.
:::

## Dashboard mit einem Webserver bereitstellen

Da Yet Another Rclone Dashboard ein statisches Frontend ist, kannst du es auch mit einem Standard-Webserver hosten und `rclone rcd` separat im Hintergrund laufen lassen.

### Nginx-Beispiel

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy-Beispiel

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Diese Methode ist sinnvoll, wenn du bereits einen Reverse Proxy nutzt oder einen sauberen Domain-basierten Zugriff auf deine Dashboard-App möchtest.

## Erweiterte Reverse Proxy Einrichtung

Wenn du den Zugriff über eine externe Authentifizierung absichern möchtest, kannst du einen Reverse Proxy vor Rclone schalten und den authentifizierten Benutzer per Header weiterleiten.

### Rclone-Befehl

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy-Beispiel mit weitergeleitetem User-Header

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Erweiterte Authentifizierung
Die genaue Umsetzung des Auth-Gateways hängt von deiner Umgebung ab. Das obige Beispiel zeigt nur das Integrationsmuster von Rclone und Reverse Proxy. Wenn du zusätzliche Software wie einen Identity Provider oder Caddy-Plugins nutzt, konfiguriere diese gemäß der offiziellen Dokumentation der jeweiligen Software.
:::

## Konfigurationsreferenz

Die wichtigsten Rclone RC-Optionen, die mit diesem Dashboard verwendet werden, sind hier aufgelistet.

| Option | Zweck |
| --- | --- |
| `--rc-files` | Stellt die entpackten Dashboard-Dateien bereit |
| `--rc-web-gui` | Aktiviert die Rclone WebGUI-Unterstützung |
| `--rc-web-fetch-url` | Lädt Dashboard-Release-Metadaten von GitHub |
| `--rc-no-auth` | Deaktiviert die Authentifizierung, nur für lokalen Gebrauch geeignet |
| `--rc-user` | Setzt den Rclone RC-Benutzernamen |
| `--rc-pass` | Setzt das Rclone RC-Passwort |
| `--rc-addr` | Definiert die Adresse und den Port zum Lauschen |
| `--rc-allow-origin` | Erlaubt Browserzugriff von der angegebenen URL |
| `--rc-web-gui-no-open-browser` | Verhindert automatisches Öffnen des Browsers |
| `--rc-user-from-header` | Akzeptiert den authentifizierten Benutzer aus einem Proxy-Header |

### Die richtige `--rc-allow-origin` wählen

Setze `--rc-allow-origin` auf die exakte URL, die du im Browser nutzt.

| Zugriffstyp | Beispielwert |
| --- | --- |
| Lokaler Zugriff | `http://127.0.0.1:5572` |
| IP-basierter Remote-Zugriff | `http://[your_server_ip]:5572` |
| Reverse Proxy mit HTTPS | `https://[your_domain]` |

:::caution Origin muss übereinstimmen
Wenn `--rc-allow-origin` nicht mit der im Browser verwendeten URL übereinstimmt, kann das Dashboard wegen Browser-Sicherheitsbeschränkungen nicht korrekt laden.
:::

## Dashboard aufrufen und prüfen

Sobald `rclone rcd` läuft, öffne das Dashboard in deinem Browser.

### Übliche Zugriffs-URLs

| Szenario | URL |
| --- | --- |
| Lokaler Rechner | `http://127.0.0.1:5572` |
| Remote per IP | `http://[your_server_ip]:5572` |
| Reverse Proxy | `https://[your_domain]` |

### Was du nach dem Start prüfen solltest

Nach dem Öffnen der Seite solltest du Folgendes überprüfen:

- Die Oberfläche von Yet Another Rclone Dashboard lädt
- Deine konfigurierten Remotes sind sichtbar
- Das Durchsuchen von Dateien im Rclone-Browser funktioniert
- Transfer- und Systeminformationen reagieren korrekt

Wenn die Seite nicht lädt, prüfe zuerst die Rclone-Konsolenausgabe. Authentifizierungsfehler, Origin-Abweichungen und Port-Bindungsprobleme sind die häufigsten Ursachen.

## Sicherheitsempfehlungen

Ein Dashboard für deinen Cloud-Speicher zu betreiben erfordert sorgfältige Sicherheitseinstellungen, besonders wenn du es über das Internet zugänglich machst.

### Empfohlene Sicherheitspraktiken

| Empfehlung | Grund |
| --- | --- |
| Nutze `--rc-user` und `--rc-pass` für Remote-Zugriff | Verhindert unautorisierten Zugriff |
| Bevorzuge HTTPS über einen Reverse Proxy | Schützt Zugangsdaten während der Übertragung |
| Binde an `127.0.0.1`, wenn möglich | Reduziert Angriffsfläche |
| Beschränke Firewall-Zugriff auf `5572/tcp` | Minimiert Angriffsvektor |
| Vermeide `--rc-no-auth` in öffentlichen Netzwerken | Verhindert offenen Zugriff auf deine Rclone-Instanz |

:::danger Risiko bei öffentlicher Freigabe
Eine ungeschützte `rclone rcd`-Instanz kann Zugriff auf deine konfigurierten Remotes und Dateien ermöglichen. Wenn du dich fragst „Ist rclone sicher?“, hängt die Antwort stark davon ab, wie sicher du den Dienst freigibst und authentifizierst.
:::

## Fehlerbehebung

Wenn das Dashboard nicht wie erwartet funktioniert, nutze die folgenden Prüfungen.

### Die Dashboard-Seite öffnet sich nicht

Mögliche Ursachen:

- `rclone rcd` läuft nicht
- Port `5572` wird von einer Firewall blockiert
- Der Dienst ist an `127.0.0.1` gebunden, du versuchst aber remote zuzugreifen

### Die Oberfläche lädt, aber Aktionen schlagen fehl

Mögliche Ursachen:

- Ungültiger `--rc-user` oder `--rc-pass`
- Falscher `--rc-allow-origin`
- Fehlende oder fehlerhafte Rclone-Remote-Konfiguration

### Dashboard lädt nicht über Reverse Proxy

Mögliche Ursachen:

- Proxy-Ziel zeigt auf falschen Backend-Server
- HTTPS-URL stimmt nicht mit `--rc-allow-origin` überein
- Erforderliche Header werden nicht korrekt weitergeleitet

### Nützliche Prüfungen

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Teste den lokalen Endpunkt:

```bash
curl http://127.0.0.1:5572
```

:::tip Zuerst Rclone-Logs prüfen
Die meisten Start- und Verbindungsprobleme sind direkt im Terminal oder in den Service-Logs von `rclone rcd` sichtbar. Prüfe diese Logs immer zuerst, bevor du deine Konfiguration änderst.
:::

## Zusätzliche Hinweise

Yet Another Rclone Dashboard wurde am 10. April 2026 in Self-Host Weekly vorgestellt und ist öffentlich auf GitHub gehostet. Zum Zeitpunkt der Erstellung ist das Projekt eine Frontend-orientierte Lösung, die die Benutzererfahrung bei der Verwaltung von Rclone über ein browserbasiertes Dashboard verbessern soll.

Manche Deployment-Methoden wie Docker könnten in individuellen Umgebungen möglich sein, aber es lagen keine verifizierten Docker-Anleitungen vor. Deshalb behandelt diese Anleitung nur die direkt vom Projekt unterstützten Setup-Methoden.

## Fazit

Glückwunsch, du hast Yet Another Rclone Dashboard erfolgreich auf Linux oder Windows installiert und konfiguriert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂