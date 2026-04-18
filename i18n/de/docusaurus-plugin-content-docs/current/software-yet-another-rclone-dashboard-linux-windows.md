---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Erfahre, wie du Yet Another Rclone Dashboard einrichtest, ein modernes rclone GUI und rclone Browser für Linux und Windows, mit rclone rcd und Release-Dateien von rclone GitHub -> Jetzt mehr erfahren"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard ist ein modernes Web-Dashboard für `rclone rcd`, das eine grafische Oberfläche zum Durchsuchen von Dateien, Anzeigen von Remotes und Verwalten von Transfers bietet. In dieser Anleitung lernst du, was die Software macht, was sie benötigt und wie du sie unter Linux oder Windows mit unterstützten Deployment-Methoden ausführst.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, benötigst du eine funktionierende Installation von [Rclone](https://rclone.org/), da Yet Another Rclone Dashboard nur ein Frontend für den Rclone Remote Control Daemon ist.

### Anforderungen

Die folgenden Anforderungen basieren auf den verfügbaren Projektinformationen und dem Setup-Entwurf.

| Anforderung | Details |
| --- | --- |
| Betriebssystem | Linux oder Windows |
| Benötigte Software | `rclone` |
| Empfohlene Rclone-Version | `v1.72.0` oder neuer |
| Optionale Software | `Docker`, `Nginx` oder `Caddy` je nach Deployment-Methode |
| Standard-Port | `5572/tcp` |
| Internetzugang | Erforderlich, wenn du Releases herunterladen oder die Web-Fetch-Methode nutzen möchtest |

### Wovon das Dashboard abhängt

Yet Another Rclone Dashboard ersetzt Rclone nicht. Stattdessen verbindet es sich mit `rclone rcd`, dem *Remote Control Daemon*-Modus von Rclone.

| Komponente | Zweck |
| --- | --- |
| Yet Another Rclone Dashboard | Web-Frontend |
| `rclone rcd` | Backend-API und Dateioperationen |
| Rclone Remotes | Deine konfigurierten Cloud-Speicher-Verbindungen wie Google Drive |

:::info Rclone ist erforderlich
Du kannst dieses Dashboard nicht alleine verwenden. Du musst `rclone` installiert haben und es im Daemon-Modus mit aktivierter Remote-Control-Schnittstelle ausführen.
:::

### Platzhalterwerte in dieser Anleitung

Mehrere Befehle in dieser Anleitung verwenden Platzhalter. Ersetze sie vor dem Ausführen durch deine eigenen Werte.

| Platzhalter | Bedeutung |
| --- | --- |
| `[your_user]` | Benutzername für die Rclone Remote-Control-Authentifizierung |
| `[your_password]` | Passwort für die Rclone Remote-Control-Authentifizierung |
| `[your_server_ip]` | Öffentliche oder private IP-Adresse deines Servers |
| `[your_domain]` | Domainname für den Zugriff über Reverse Proxy |
| `[your_build_path]` | Pfad zu den entpackten Dashboard-Dateien |

## Verfügbare Deployment-Methoden

Du kannst Yet Another Rclone Dashboard auf verschiedene Arten ausführen, je nachdem, wie du darauf zugreifen möchtest.

| Methode | Am besten für | Hinweise |
| --- | --- | --- |
| `--rc-files` | Manuelle Deployments | Nutzt entpackte statische Build-Dateien |
| `--rc-web-gui` mit `--rc-web-fetch-url` | Schnelle Einrichtung | Lässt Rclone das neueste Dashboard-Release automatisch laden |
| Webserver wie Nginx oder Caddy | Eigenes Hosting | Serviert das statische Frontend separat |
| Reverse Proxy mit externer Authentifizierung | Fortgeschrittene Setups | Nützlich für zentrale Authentifizierung |

## Dashboard-Release herunterladen

Wenn du die manuelle `--rc-files`-Methode verwenden oder das Frontend mit deinem eigenen Webserver hosten möchtest, lade zuerst das neueste Release-Archiv von den GitHub-Releases des Projekts herunter.

Offizielle Projektquelle: [Yet Another Rclone Dashboard auf GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Zum Zeitpunkt der referenzierten Release-Daten ist die neueste Version `v0.3.8` und enthält die Datei `yet-another-rclone-dashboard-v0.3.8.zip`.

### Linux Download-Beispiel

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Windows Download-Beispiel

Unter Windows lade die `.zip`-Datei von der GitHub-Release-Seite herunter und entpacke sie in einen Ordner wie:

```text
C:\yet-another-rclone-dashboard
```

:::note Versionshinweis zum Release
Die Release-Version kann sich im Laufe der Zeit ändern. Wenn eine neuere Version verfügbar ist, nutze die aktuelle Release-Datei von der GitHub-Seite des Projekts anstelle der hier gezeigten Beispielversion.
:::

## Dashboard mit Rclone rc-files starten

Dies ist die direkteste Methode, wenn du die Frontend-Dateien bereits heruntergeladen und entpackt hast.

### Linux Beispiel

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows Beispiel

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Lokales Desktop-Beispiel

Wenn du das Dashboard nur lokal auf demselben System nutzen möchtest, kannst du es an `127.0.0.1` binden.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Rclone nicht ohne Authentifizierung exponieren
Verwende `--rc-no-auth` nur für lokale Tests auf `127.0.0.1`. Wenn du Rclone an `0.0.0.0` bindest, solltest du es mit Authentifizierung oder einem korrekt konfigurierten Reverse Proxy schützen.
:::

## Dashboard mit Rclone Web Fetch starten

Rclone kann eine Web-GUI automatisch laden, was das Deployment vereinfachen kann, wenn deine Umgebung das unterstützt.

### Linux Beispiel

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows Beispiel

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Wichtige Flags erklärt

| Flag | Zweck |
| --- | --- |
| `--rc-web-gui` | Aktiviert Web-GUI-Unterstützung in Rclone |
| `--rc-web-fetch-url` | Zeigt Rclone die Metadaten des neuesten Releases an |
| `--rc-user` | Legt den Login-Benutzernamen fest |
| `--rc-pass` | Legt das Login-Passwort fest |
| `--rc-addr` | Definiert IP-Adresse und Port zum Lauschen |
| `--rc-allow-origin` | Erlaubt Browser-Anfragen von der angegebenen URL |
| `--rc-web-gui-no-open-browser` | Verhindert automatisches Öffnen des Browsers |

:::tip Origin exakt angeben
Setze `--rc-allow-origin` auf die exakte URL, die du im Browser nutzt, inklusive korrektem Protokoll wie `http://` oder `https://`. Das ist besonders wichtig bei Verwendung eines Reverse Proxys.
:::

## Dashboard mit Webserver servieren

Da Yet Another Rclone Dashboard eine statische Webanwendung ist, kannst du es auch mit einem Standard-Webserver wie Nginx oder Caddy hosten.

Dieser Ansatz ist nützlich, wenn du das Frontend auf einem eigenen Port oder einer eigenen Domain servieren möchtest, während Rclone im Hintergrund läuft.

### Nginx Beispiel

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy Beispiel

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Was du beachten solltest

Wenn du das Frontend separat servierst, muss Rclone im Hintergrund mit kompatiblen `rc`-Einstellungen laufen. Außerdem musst du sicherstellen, dass Browser-Anfragen von deiner Frontend-URL erlaubt sind.

| Einstellung | Beispiel |
| --- | --- |
| Frontend-URL | `https://[your_domain]` |
| Rclone Bind-Adresse | `127.0.0.1:5572` oder `0.0.0.0:5572` |
| Erlaubte Origin | `https://[your_domain]` |

## Fortgeschrittenes Setup mit Reverse Proxy Authentifizierung

Für fortgeschrittene Umgebungen kannst du das Dashboard hinter einem Reverse Proxy mit externer Authentifizierung betreiben. Der Entwurf verweist auf die Nutzung von Rclones `--rc-user-from-header` Option dafür.

### Rclone Beispiel

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy Beispiel

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::info Fortgeschrittenes Authentifizierungs-Setup
Diese Methode hängt von deinem Reverse Proxy und Authentifizierungs-Stack ab. Die genaue Konfiguration für Tools wie `caddy-security` liegt außerhalb dieser Anleitung, aber das Beispiel zeigt, wie das Dashboard einen authentifizierten User-Header erhält.
:::

## Zugriff und Sicherheit konfigurieren

Bevor du das Dashboard nutzt, überprüfe die wichtigsten Zugriffs-Einstellungen.

### Empfohlene Konfigurationswerte

| Option | Empfehlung |
| --- | --- |
| `--rc-user` | Setze einen dedizierten Benutzernamen wie `zaphosting` |
| `--rc-pass` | Verwende ein starkes Passwort |
| `--rc-addr` | Nutze `127.0.0.1:5572` hinter einem Reverse Proxy, wenn möglich |
| `--rc-allow-origin` | Passe die URL exakt an, die im Browser genutzt wird |
| Firewall | Öffne `5572/tcp` nur bei direktem Zugriff |

### Sicherheitstipps

- Nutze Authentifizierung bei Netzwerkzugriff
- Bevorzuge Reverse Proxy mit HTTPS für öffentlichen Zugriff
- Begrenze direkten Zugriff auf `5572/tcp` wenn möglich
- Halte Rclone aktuell, wenn du es für Cloud-Speicher wie `rclone google drive` nutzt

:::danger Risiko bei öffentlicher Exposition
Der Remote Control Zugriff von Rclone bietet mächtige Datei- und Remote-Verwaltungsfunktionen. Exponiere ihn nicht öffentlich ohne Authentifizierung und passende Netzwerkeinschränkungen.
:::

## Dashboard starten und prüfen

Sobald dein Setup steht, starte `rclone rcd` und öffne das Dashboard im Browser.

### Zugriffsbeispiele

| Szenario | URL |
| --- | --- |
| Lokaler Zugriff | `http://127.0.0.1:5572` |
| Direkter Serverzugriff | `http://[your_server_ip]:5572` |
| Zugriff über Reverse Proxy | `https://[your_domain]` |

### Was du sehen solltest

Wenn alles korrekt konfiguriert ist, sollte die Yet Another Rclone Dashboard-Oberfläche laden und dir ermöglichen:

- Verbindung zum Rclone Daemon
- Konfigurierte Remotes ansehen
- Dateien durchsuchen
- Transfers anzeigen
- Einstellungen und Systeminfos prüfen

Wenn die Seite nicht lädt, prüfe Folgendes:

| Prüfung | Warum wichtig |
| --- | --- |
| Rclone-Prozess läuft | Dashboard braucht den Backend-Daemon |
| Port `5572` ist erreichbar | Für direkten Zugriff erforderlich |
| `--rc-allow-origin` ist korrekt | Verhindert Browser-Zugriffsprobleme |
| Benutzername und Passwort stimmen | Für authentifizierten Zugriff nötig |
| Reverse Proxy Header sind korrekt | Wichtig für fortgeschrittene Auth-Setups |

## Fehlerbehebung

### Browser kann keine Verbindung herstellen

Wenn dein Browser das Dashboard nicht öffnen kann, überprüfe, ob Rclone auf der erwarteten Adresse und Port lauscht.

Unter Linux kannst du offene Ports mit Tools wie diesem prüfen:

```bash
ss -tulpn | grep 5572
```

Unter Windows kannst du verwenden:

```powershell
netstat -ano | findstr 5572
```

### Authentifizierung schlägt fehl

Wenn der Login nicht funktioniert:

- Prüfe die Werte für `--rc-user` und `--rc-pass`
- Stelle sicher, dass dein Reverse Proxy keine erforderlichen Header entfernt
- Vermeide `--rc-no-auth` auf entfernten oder öffentlichen Schnittstellen

### Frontend lädt, Aktionen schlagen fehl

Das deutet meist auf ein Origin- oder Backend-Kommunikationsproblem hin.

Prüfe diese Werte genau:

- `--rc-allow-origin`
- `--rc-addr`
- Reverse Proxy Zieladresse
- Browser-URL zum Dashboard

:::tip Logs für schnellere Diagnose nutzen
Wenn das Dashboard sich nicht wie erwartet verhält, schau zuerst in die Rclone-Konsolenausgabe. Authentifizierungs-, Bindungs- und Origin-Probleme sind dort oft sofort sichtbar.
:::

## Software-Referenz

### Projektdetails

| Punkt | Wert |
| --- | --- |
| Name | Yet Another Rclone Dashboard |
| Kategorie | Frontend |
| Quelle | [GitHub Repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Referenziertes Release | `v0.3.8` |
| Release-Datei | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Empfohlenes Backend | `rclone v1.72.0` oder neuer |

### Bekannte Funktionen laut Projektseite

Basierend auf den Informationen des Repositories unterstützt das Dashboard folgende Bereiche:

- mehrere Verbindungsprofile
- Rclone Systeminformationen und Statusübersicht
- Remotes-Inspektion
- Import und Export der Rclone-Konfiguration
- Dateibrowsing und Filterung
- Transfer-bezogene Ansichten

:::note Funktionsverfügbarkeit
Das Verhalten der Funktionen kann sich zwischen Releases ändern. Für genaue Details zu neueren Versionen prüfe das Upstream-Changelog und die Release-Notes auf GitHub.
:::

## Conclusion

Glückwunsch, du hast Yet Another Rclone Dashboard erfolgreich unter Linux oder Windows eingerichtet. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂