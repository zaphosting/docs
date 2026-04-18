---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Erfahre, wie du Yet Another Rclone Dashboard als modernes rclone GUI und rclone Browser für Linux- und Windows-Systeme einrichtest. -> Jetzt mehr erfahren"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Yet Another Rclone Dashboard ist ein modernes Web-Dashboard für `rclone rcd`, das dir eine grafische Oberfläche bietet, um Dateien zu durchsuchen, Remotes zu inspizieren und dein Rclone-Setup zu verwalten. In dieser Anleitung lernst du, wie du es auf Linux oder Windows installierst und sicher mit deinem bestehenden Rclone-Daemon verbindest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass dein System die Grundvoraussetzungen erfüllt und Rclone bereits installiert ist.

### Voraussetzungen

| Voraussetzung | Details |
|---|---|
| Betriebssystem | Linux oder Windows |
| Rclone-Version | `v1.72.0` oder neuer empfohlen |
| Zugriffsmethode | Lokale Konsole, SSH oder RDP |
| Netzwerk | Zugriff auf die Dashboard-URL über deinen Browser |
| Standard-Port | `5572/tcp` |

### Was du zuerst wissen solltest

Yet Another Rclone Dashboard ist kein eigenständiger Speicher-Service. Es ist ein Frontend für `rclone rcd`, den Remote-Control-Daemon von Rclone. Das bedeutet, du musst `rclone rcd` mit den richtigen Web-Optionen starten, damit das Dashboard geladen wird und mit dem Backend kommunizieren kann.

:::info Rclone wird benötigt
Du brauchst eine funktionierende [Rclone](https://rclone.org/) Installation, bevor du dieses Dashboard nutzt. Falls Rclone noch nicht installiert ist, installiere und konfiguriere es zuerst.
:::

### Empfohlene Vorbereitungsliste

| Aufgabe | Warum das wichtig ist |
|---|---|
| Rclone installieren | Wird benötigt, um `rclone rcd` auszuführen |
| Mindestens ein Remote konfigurieren | Nötig, wenn du Cloud-Speicher wie `rclone google drive` durchsuchen möchtest |
| Erforderlichen Port öffnen oder weiterleiten | Für den Zugriff auf das Dashboard aus der Ferne |
| Lokalen oder Remote-Zugriff festlegen | Bestimmt, ob eine Authentifizierung nötig ist |

## Funktionsweise des Dashboards verstehen

Yet Another Rclone Dashboard ist eine statische Webanwendung, die sich mit der Rclone Remote-Control-API verbindet. Du kannst die Dashboard-Dateien entweder direkt über Rclone bereitstellen oder das Frontend separat mit einem Webserver wie Nginx oder Caddy hosten.

### Hauptfunktionen

Basierend auf den veröffentlichten Projektinformationen bietet das Dashboard folgende Funktionen:

| Funktion | Beschreibung |
|---|---|
| Mehrere Verbindungsprofile | Verbindung zu verschiedenen `rclone rcd` Instanzen |
| Systeminformationen | Anzeige von Rclone-Status und Umgebungsdetails |
| Remote-Inspektion | Übersicht über verfügbare Remotes und Konfigurationsdaten |
| Dateibrowser | Durchsuchen von Verzeichnissen und Verwalten von Dateien |
| Medienvorschau | Vorschau unterstützter Inhalte |
| Transferübersicht | Überwachung von Transferaktivitäten |
| Einstellungsoberfläche | Anpassung dashboardbezogener Optionen |

### Wann du dieses Dashboard nutzen solltest

Das Projekt ist praktisch, wenn du eine leichte `rclone gui` oder einen `rclone browser` möchtest, statt nur im Terminal zu arbeiten. Besonders hilfreich ist es beim Verwalten von Cloud-Remotes auf einem vServer, Dedicated Server oder lokalen Windows-System.

## Installationsmethoden

Du kannst Yet Another Rclone Dashboard auf verschiedene Arten bereitstellen. Die richtige Methode hängt davon ab, ob du die einfachste Einrichtung, eine manuell verwaltete Installation oder einen Reverse-Proxy vor dem Dienst möchtest.

### Methode 1: Dashboard mit lokalen Dateien bereitstellen

Diese Methode nutzt den entpackten Dashboard-Build mit der Rclone-Option `--rc-files`.

#### Release herunterladen

Lade das neueste Release-Archiv von der GitHub-Releases-Seite des Projekts herunter:

- GitHub-Projekt: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Neueste verifizierte Version aus dem Quellmaterial: `v0.3.8`
- Release-Archiv: `yet-another-rclone-dashboard-v0.3.8.zip`

Entpacke das Archiv an einen Ort deiner Wahl.

Beispielpfade:

| Plattform | Beispielpfad |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Rclone unter Linux starten

Wenn du das Dashboard lokal auf demselben Rechner betreibst und nur lokalen Browserzugriff möchtest, kannst du es an `127.0.0.1` binden.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Für Fernzugriff von einem anderen Gerät verwende stattdessen Authentifizierung und lausche auf allen Schnittstellen.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[dein_rc_benutzername] \
  --rc-pass=[dein_rc_passwort] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[deine_server_ip]:5572
```

#### Rclone unter Windows starten

Öffne die `Eingabeaufforderung` oder `PowerShell` und führe aus:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[dein_rc_benutzername] `
  --rc-pass=[dein_rc_passwort] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[deine_server_ip]:5572
```

Ersetze die Platzhalter durch deine eigenen Werte:

| Platzhalter | Bedeutung |
|---|---|
| `[dein_rc_benutzername]` | Benutzername für die Anmeldung an der Rclone-API |
| `[dein_rc_passwort]` | Passwort zum Schutz der Rclone-API |
| `[deine_server_ip]` | Öffentliche oder private IP-Adresse für den Dashboard-Zugriff |

:::caution Keine ungeschützte Rclone-API freigeben
Verwende `--rc-no-auth` nicht zusammen mit `0.0.0.0:5572` auf einem öffentlich erreichbaren Server. Dadurch wäre deine Rclone-Steueroberfläche ohne Schutz zugänglich.
:::

### Methode 2: Rclones WebGUI Fetcher verwenden

Diese Methode lässt Rclone das Dashboard automatisch herunterladen, statt die Build-Dateien manuell zu laden. Das vereinfacht die Einrichtung, wenn du schnell starten möchtest.

#### Beispiel für lokalen Zugriff

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Beispiel für Fernzugriff

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

:::note Automatisches Herunterladen
Der genaue Speicherort, den Rclone für heruntergeladene Web-GUI-Dateien verwendet, hängt von deiner Rclone-Umgebung ab. Wenn du volle Kontrolle über Dateien und Updates möchtest, ist die manuelle `--rc-files` Methode meist einfacher zu verwalten.
:::

### Methode 3: Frontend mit Webserver bereitstellen

Da das Projekt eine statische Webanwendung ist, kannst du das Frontend separat mit einem Webserver hosten und `rclone rcd` im Hintergrund laufen lassen.

#### Nginx Beispiel

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

#### Caddy Beispiel

```caddy
[deine_domain] {
    root * /pfad/zum/entpackten/build
    file_server
}
```

Diese Methode ist praktisch, wenn du bereits einen Reverse-Proxy nutzt und das Dashboard über eine eigene Domain bereitstellen möchtest.

:::tip Reverse-Proxy Best Practice
Wenn du eine Domain oder einen Reverse-Proxy nutzt, setze `--rc-allow-origin` auf die exakte URL, die du im Browser öffnest, z. B. `https://[deine_domain]`.
:::

### Methode 4: Erweiterter Reverse-Proxy mit externer Authentifizierung

Ein fortgeschrittenes Setup kann eine externe Authentifizierung nutzen und den authentifizierten Benutzer per Header an Rclone weitergeben. Das ist für erfahrene Nutzer gedacht.

#### Rclone Beispiel

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/pfad/zum/entpackten/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[deine_domain]
```

#### Caddy Beispiel

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

:::danger Erweiterte Authentifizierung nur hinter vertrauenswürdigem Proxy
Header-basierte Authentifizierung sollte nur hinter einem vertrauenswürdigen Reverse-Proxy verwendet werden. Falsch konfiguriert kann sie unautorisierten Zugriff auf deine Rclone-Instanz erlauben.
:::

## Wichtige Rclone-Optionen

Die folgenden Optionen sind beim Einsatz von Yet Another Rclone Dashboard am relevantesten.

| Option | Zweck |
|---|---|
| `--rc-files` | Stellt die entpackten Dashboard-Dateien über Rclone bereit |
| `--rc-web-gui` | Aktiviert Web-GUI-Unterstützung über Rclone |
| `--rc-web-fetch-url` | Lädt GUI-Release-Metadaten von einer externen Quelle |
| `--rc-user` | Legt den API-Benutzernamen fest |
| `--rc-pass` | Legt das API-Passwort fest |
| `--rc-no-auth` | Deaktiviert die Authentifizierung |
| `--rc-addr` | Definiert die Listen-Adresse und den Port |
| `--rc-allow-origin` | Erlaubt Browserzugriff von der angegebenen Herkunft |
| `--rc-web-gui-no-open-browser` | Verhindert automatisches Öffnen des Browsers |
| `--rc-user-from-header` | Akzeptiert den authentifizierten Benutzer aus einem Reverse-Proxy-Header |

## Konfigurationshinweise

Nachdem du eine Installationsmethode gewählt hast, überprüfe die wichtigsten Konfigurationswerte vor der ersten Nutzung.

### Authentifizierungseinstellungen

Wenn das Dashboard nur lokal auf deinem eigenen Rechner genutzt wird, kann unauthentifizierter lokaler Zugriff akzeptabel sein. Für alle Remote- oder öffentlich zugänglichen Setups solltest du immer eine Authentifizierung verwenden.

| Zugriffstyp | Empfohlene Einstellung |
|---|---|
| Nur lokal | `127.0.0.1` mit optional `--rc-no-auth` |
| LAN- oder Internetzugriff | `0.0.0.0` mit `--rc-user` und `--rc-pass` |
| Reverse-Proxy mit Domain | `127.0.0.1` oder private Bindung plus Proxy-Authentifizierung |

### Erlaubte Herkunft

Der Wert von `--rc-allow-origin` muss mit der URL übereinstimmen, von der dein Browser das Dashboard lädt.

Beispiele:

| Zugriffs-URL | Passender `--rc-allow-origin` |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[deine_server_ip]:5572` | `http://[deine_server_ip]:5572` |
| `https://[deine_domain]` | `https://[deine_domain]` |

Wenn dieser Wert nicht passt, blockiert der Browser möglicherweise Anfragen und das Dashboard lädt nicht korrekt.

## Dashboard starten und prüfen

Sobald dein Befehl läuft, öffne die konfigurierte Adresse im Browser.

### Was du erwarten kannst

Wenn alles richtig eingerichtet ist, solltest du die Oberfläche von Yet Another Rclone Dashboard sehen und dich mit deinem konfigurierten Rclone-Daemon verbinden können.

Typische Beispiele:

| Szenario | URL |
|---|---|
| Lokaler Linux- oder Windows-Zugriff | `http://127.0.0.1:5572` |
| Remote IP-basierter Zugriff | `http://[deine_server_ip]:5572` |
| Reverse-Proxy-Zugriff | `https://[deine_domain]` |

### Grundlegende Prüfschritte

1. Starte `rclone rcd` mit deiner gewählten Methode.
2. Öffne die Dashboard-URL im Browser.
3. Melde dich an, falls Authentifizierung aktiviert ist.
4. Prüfe, ob Remotes, Dateibrowser-Funktionen oder Statusinformationen sichtbar sind.
5. Teste eine einfache Leseaktion, z. B. ein Verzeichnis öffnen.

## Fehlerbehebung

Wenn das Dashboard nicht lädt oder keine Verbindung herstellt, prüfe die folgenden häufigen Ursachen.

### Verbindung abgelehnt

Wenn du eine Verbindung abgelehnt Meldung bekommst, kontrolliere:

- Ob `rclone rcd` tatsächlich läuft
- Ob der richtige Port `5572` verwendet wird
- Ob der Dienst auf der erwarteten Schnittstelle lauscht
- Ob deine Firewall bei Bedarf eingehenden Zugriff erlaubt

### Probleme mit Browser-Herkunft oder Login

Wenn die Seite lädt, aber API-Anfragen fehlschlagen:

- Überprüfe `--rc-allow-origin`
- Stelle sicher, dass die Browser-URL genau mit der erlaubten Herkunft übereinstimmt
- Prüfe `--rc-user` und `--rc-pass`
- Vergewissere dich, dass dein Reverse-Proxy Anfragen korrekt weiterleitet

### Probleme mit Dateipfaden

Wenn du `--rc-files` nutzt und die Oberfläche nicht erscheint:

- Prüfe, ob die entpackten Dashboard-Dateien im richtigen Verzeichnis liegen
- Kontrolliere die Pfadsyntax für Linux oder Windows
- Stelle sicher, dass das Archiv entpackt wurde und nicht nur heruntergeladen

:::tip Rclone-Konsolenausgabe prüfen
Rclone gibt normalerweise nützliche Start- und Fehlermeldungen direkt im Terminal aus. Prüfe diese Ausgabe zuerst, wenn das Dashboard, `rclone download` oder Remote-Browser-Funktionen nicht wie erwartet funktionieren.
:::

## Sicherheitsempfehlungen

Ein Dashboard, das Rclone steuert, kann auf konfigurierte Remotes und Dateioperationen zugreifen – Sicherheit ist also wichtig.

| Empfehlung | Grund |
|---|---|
| Authentifizierung für Fernzugriff nutzen | Schützt die Rclone-API |
| Möglichst an `127.0.0.1` binden | Verringert Angriffsfläche |
| HTTPS hinter Reverse-Proxy verwenden | Schützt Zugangsdaten während der Übertragung |
| Firewall-Exposition begrenzen | Reduziert Angriffsvektor |
| Starke Zugangsdaten verwenden | Verhindert unautorisierten Zugriff |

:::caution Sensible Remotes
Wenn dein Rclone-Setup Cloud-Speicher wie Google Drive enthält, kann eine unsichere Dashboard-Freigabe auch den Zugriff auf diese Remotes und Daten offenlegen.
:::

## Weitere Projektinformationen

Das Projekt ist auf GitHub veröffentlicht und wurde am 10. April 2026 in Self-Host Weekly vorgestellt.

| Punkt | Wert |
|---|---|
| Projektname | Yet Another Rclone Dashboard |
| Kategorie | Frontend |
| Quelle | [GitHub Repository](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Weekly Feature | [Self-Host Weekly (10. April 2026)](https://selfh.st/weekly/2026-04-10/) |
| Verifiziertes Release aus Quellmaterial | `v0.3.8` |

## Fazit

Glückwunsch, du hast Yet Another Rclone Dashboard erfolgreich auf Linux oder Windows eingerichtet. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂