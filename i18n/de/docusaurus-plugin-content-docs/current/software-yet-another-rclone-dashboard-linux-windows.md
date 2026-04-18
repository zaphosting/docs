---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Erfahre, wie du Yet Another Rclone Dashboard als rclone GUI für Linux und Windows nutzt, inklusive rclone Download und browserbasiertem Dashboard-Zugriff -> Jetzt mehr erfahren"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard ist ein modernes Web-Dashboard zur Verwaltung von `rclone rcd` über eine browserbasierte Oberfläche. In dieser Anleitung lernst du, was die Software macht, welche Voraussetzungen sie hat und wie du sie auf Linux oder Windows mit Rclone einrichtest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, brauchst du eine funktionierende Installation von [Rclone](https://rclone.org/), da dieses Dashboard dafür gedacht ist, sich mit `rclone rcd` zu verbinden und nicht als eigenständiges Backend läuft.

### Anforderungen

Die folgenden Anforderungen basieren auf den verfügbaren Projektinformationen und dem bereitgestellten Setup-Entwurf.

| Anforderung | Details |
| --- | --- |
| Betriebssystem | Linux oder Windows |
| Benötigte Software | `rclone` |
| Empfohlene Rclone-Version | `v1.72.0` oder neuer |
| Optionale Software | `Nginx`, `Caddy` oder ein anderer Webserver, wenn du die statischen Dateien separat bereitstellen möchtest |
| Optionale Build-Abhängigkeit | `Node.js`, falls du das Projekt aus dem Quellcode bauen willst |
| Standard RC-Port | `5572/tcp` |

:::info Rclone ist Voraussetzung
Yet Another Rclone Dashboard ist ein Frontend für `rclone rcd`. Du kannst es nicht ohne eine laufende Rclone Remote-Control-Instanz verwenden.
:::

### Zugriffs- und Netzwerküberlegungen

Stelle außerdem sicher, dass das System, auf dem du Rclone ausführst, den Zugriff auf den konfigurierten Port erlaubt, falls du das Dashboard remote öffnen möchtest.

| Szenario | Empfohlene Bind-Adresse | Beispiel-URL |
| --- | --- | --- |
| Nur lokal zugreifen | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Remote Zugriff im Netzwerk | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Reverse-Proxy Setup | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Dashboard sicher freigeben
Wenn du Rclone an `0.0.0.0` bindest, kann der Dienst von anderen Systemen erreichbar sein. Verwende unbedingt Authentifizierung und wenn möglich einen Reverse-Proxy mit HTTPS.
:::

## Über Yet Another Rclone Dashboard

Yet Another Rclone Dashboard ist ein webbasiertes Frontend für den Rclone-Daemon-Modus. Laut Projekt-Repository unterstützt es die Verbindung zu `rclone rcd`, mehrere Verbindungsprofile, Remote-Inspektion, Import und Export von Konfigurationen, Dateibrowsing und Transfer-Management.

Du kannst es also als `rclone gui` oder `rclone browser` für gängige Aufgaben nutzen, die sonst direkt über die Kommandozeile erledigt werden müssten.

### Projektdetails

| Punkt | Wert |
| --- | --- |
| Name | Yet Another Rclone Dashboard |
| Kategorie | Frontend |
| Quelle | [GitHub Repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Letzte referenzierte Version | `v0.3.8` |
| Release-Datei | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Empfohlenes Backend | `rclone rcd` |

### Unterstütztes Nutzungsmodell

Die Projektinformationen bestätigen, dass das Dashboard für den Betrieb mit Rclones Remote-Control-Modus gedacht ist. Das genaue betriebssystemspezifische Packaging ist in den Quellen nicht vollständig dokumentiert, daher konzentriert sich diese Anleitung auf die verifizierten Deployment-Methoden aus dem Repository-Entwurf.

## Installationsmethoden

Du kannst Yet Another Rclone Dashboard auf verschiedene Arten bereitstellen, je nachdem, wie du darauf zugreifen möchtest. Die direkteste Methode ist, Rclone die Dashboard-Dateien selbst bereitstellen zu lassen.

### Methode 1: Dashboard mit `--rc-files` bereitstellen

Diese Methode nutzt extrahierte Dashboard-Dateien und sagt `rclone rcd`, diese direkt zu servieren.

#### Release-Dateien herunterladen

Lade das neueste Release-Archiv von der GitHub-Releases-Seite des Projekts herunter:

- [Yet Another Rclone Dashboard Releases](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

Zum Zeitpunkt der Referenz ist die neueste Release-Datei:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Entpacke das Archiv in einen Ordner auf deinem Server oder lokalem System.

:::note Ersetze Platzhalter-Pfade
Ersetze in den folgenden Befehlen `[your_dashboard_path]` durch den Ordner, der die entpackten Dashboard-Build-Dateien enthält.
:::

#### Linux Beispiel

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows Beispiel

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote-Server Beispiel mit Authentifizierung

Für einen Headless-Server verwende Authentifizierung und binde nur bei Bedarf an eine extern erreichbare Adresse.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Methode 2: Rclones Web-GUI Fetcher nutzen

Der bereitgestellte Setup-Entwurf verweist auch auf Rclones eingebauten Web-GUI-Fetcher. Dieser kann das Dashboard automatisch herunterladen und bereitstellen, ohne dass du manuell entpacken musst.

#### Linux Beispiel

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows Beispiel

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote-Server Beispiel

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Fetcher für einfachere Updates nutzen
Wenn du einen einfacheren `rclone download`-Workflow für die Dashboard-Dateien möchtest, ist die Fetcher-Methode oft bequemer als manuelles Herunterladen von Release-Archiven.
:::

### Methode 3: Statische Dateien mit Webserver bereitstellen

Da Yet Another Rclone Dashboard eine statische Webanwendung ist, kannst du das Frontend auch separat mit einem Standard-Webserver wie [Nginx](https://nginx.org/) oder [Caddy](https://caddyserver.com/) bereitstellen.

In diesem Setup stellt Rclone weiterhin das Backend über `rclone rcd`, während dein Webserver die Frontend-Dateien liefert.

#### Nginx Beispiel

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Caddy Beispiel

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Frontend und Backend trennen
Wenn du einen separaten Webserver nutzt, stelle sicher, dass dein Frontend weiterhin den Rclone RC-Endpunkt erreichen kann. In diesem Fall ist der Wert von `--rc-allow-origin` besonders wichtig.
:::

## Wichtige Rclone-Optionen

Die folgenden Optionen sind am relevantesten, wenn du Yet Another Rclone Dashboard konfigurierst.

| Option | Zweck |
| --- | --- |
| `--rc-files` | Statische Dashboard-Dateien aus einem lokalen Verzeichnis bereitstellen |
| `--rc-web-gui` | Aktiviert Rclones Web-GUI-Mechanismus |
| `--rc-web-fetch-url` | Definiert die Release-Quelle zum Herunterladen des Dashboards |
| `--rc-serve` | Stellt die RC-Schnittstelle über HTTP bereit |
| `--rc-addr` | Legt die IP-Adresse und den Port zum Lauschen fest |
| `--rc-no-auth` | Deaktiviert die Authentifizierung |
| `--rc-user` | Setzt den RC-Benutzernamen |
| `--rc-pass` | Setzt das RC-Passwort |
| `--rc-allow-origin` | Erlaubt Browserzugriff von der angegebenen Origin |
| `--rc-web-gui-no-open-browser` | Verhindert das automatische Öffnen des Browsers |
| `--rc-user-from-header` | Akzeptiert den Benutzer aus einem vertrauenswürdigen Reverse-Proxy-Header |

### Die richtige `--rc-allow-origin` wählen

Du solltest `--rc-allow-origin` auf die exakte URL setzen, die du im Browser nutzt.

| Zugriffsart | Beispielwert |
| --- | --- |
| Lokaler Zugriff | `http://127.0.0.1:5572` |
| Direkter IP-Zugriff | `http://[your_server_ip]:5572` |
| Reverse-Proxy mit HTTPS | `https://[your_domain]` |

:::caution Origin-Mismatch kann Dashboard zerstören
Wenn `--rc-allow-origin` nicht mit der tatsächlichen Browser-URL übereinstimmt, kann das Dashboard wegen Browser-Sicherheitsbeschränkungen keine Verbindung zu Rclone herstellen.
:::

## Fortgeschrittenes Reverse-Proxy-Setup

Wenn du das Dashboard hinter einem Authentifizierungstor platzieren möchtest, enthält der Setup-Entwurf ein fortgeschrittenes Beispiel mit Reverse-Proxy und `--rc-user-from-header`.

### Rclone Beispiel

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
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

:::danger Nur Header von deinem Proxy vertrauen
Du solltest `--rc-user-from-header` nur verwenden, wenn Rclone an eine vertrauenswürdige lokale Schnittstelle wie `127.0.0.1` gebunden ist und nur über deinen Reverse-Proxy erreichbar ist. Andernfalls könnte ein Client Header fälschen.
:::

## Erster Start und Überprüfung

Nachdem du eine Bereitstellungsmethode gewählt hast, kannst du prüfen, ob das Dashboard korrekt funktioniert.

### Dienst starten

Starte `rclone rcd` mit deinem gewählten Befehl und lasse den Prozess laufen.

### Dashboard öffnen

Öffne die passende URL in deinem Browser:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Erfolgreichen Zugriff bestätigen

Wenn alles richtig konfiguriert ist, solltest du die Oberfläche von Yet Another Rclone Dashboard sehen und dich mit deinem Rclone-Backend verbinden können.

Du kannst dann je nach Rclone-Konfiguration Remotes inspizieren, Dateien durchsuchen und Transfers verwalten.

## Fehlerbehebung

Wenn das Dashboard nicht lädt oder keine Verbindung herstellen kann, prüfe folgende Punkte.

### Häufige Probleme

| Problem | Mögliche Ursache | Empfohlene Aktion |
| --- | --- | --- |
| Browser kann Seite nicht öffnen | Rclone läuft nicht | Starte `rclone rcd` neu und prüfe die Terminal-Ausgabe |
| Dashboard lädt, kann aber nicht verbinden | `--rc-allow-origin` ist falsch | Setze es auf die exakte Browser-URL |
| Remote-Zugriff schlägt fehl | Port `5572` ist blockiert | Öffne den Port in der Firewall oder nutze einen Reverse-Proxy |
| Authentifizierung schlägt fehl | Falscher `--rc-user` oder `--rc-pass` | Überprüfe deine Zugangsdaten |
| Reverse-Proxy Setup funktioniert nicht | Header- oder Origin-Mismatch | Prüfe Proxy-Header und `--rc-allow-origin` |

### Log-Überprüfung

Schau dir immer zuerst die Rclone-Konsolenausgabe an. Die bereitgestellten Quellen enthalten keinen projektspezifischen Log-Pfad für Yet Another Rclone Dashboard selbst, daher ist der zuverlässigste erste Schritt, die aktive Rclone-Prozessausgabe zu prüfen.

:::tip Für Remote-Zugriff HTTPS bevorzugen
Wenn du das Dashboard über das Internet zugänglich machen willst, solltest du es hinter einem Reverse-Proxy mit TLS betreiben, statt plain HTTP direkt freizugeben.
:::

## Zusätzliche Hinweise

Der Entwurf erwähnt optionale Docker- und Source-Build-Szenarien, aber das bereitgestellte Material enthält keine verifizierten Docker-Deploy-Anweisungen. Deshalb enthält diese Anleitung keinen Docker-Befehl, um unbestätigtes Verhalten zu vermeiden.

Ebenso kann der genaue interne Build-Ordnername je nach Release-Archiv variieren, daher solltest du den entpackten Ordnerinhalt vor dem Setzen von `[your_dashboard_path]` prüfen.

## Conclusion

Glückwunsch, du hast Yet Another Rclone Dashboard erfolgreich mit Rclone auf Linux oder Windows eingerichtet. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂