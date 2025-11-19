---
id: dedicated-windows-bitwarden
title: "Dedicated Server: Bitwarden auf Windows einrichten"
description: "Entdecke, wie du Passwörter sicher mit Bitwarden verwaltest – dank Ende-zu-Ende-Verschlüsselung und Self-Hosting-Optionen → Jetzt mehr erfahren"
sidebar_label: Bitwarden installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bitwarden ist ein Open-Source-Passwortmanager für Passwörter und Passkeys, der Zero-Knowledge- und Ende-zu-Ende-Verschlüsselung nutzt, um deine Daten zu schützen. Du kannst ihn als Cloud-Service nutzen oder selbst hosten – mit Features zum Generieren, Speichern und automatischen Ausfüllen starker Zugangsdaten.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung    |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 CPU-Kern  | 4 CPU-Kerne               |
| RAM        | 2 GB        | 4 GB                      |
| Festplattenspeicher | 12 GB       | 25 GB                     |

Die Software benötigt alle erforderlichen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Windows Server Version mit Docker 26+ Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem verwendet wird, um Kompatibilitätsprobleme bei der Bitwarden-Installation zu vermeiden.

## Vorbereitung

Bevor du **Bitwarden** einrichtest, solltest du dein System vorbereiten. Das beinhaltet das Aktualisieren des Betriebssystems auf die neueste Version und die Installation aller benötigten Abhängigkeiten. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.

### System aktualisieren
Damit dein System mit den neuesten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein Systemupdate durchführen. So ist dein Server mit den aktuellsten Sicherheitspatches und Softwareversionen ausgestattet, bevor es weitergeht.

### Abhängigkeiten installieren
Nach dem Update kannst du mit der Installation der Abhängigkeiten starten. Bitwarden wird über mehrere Docker-Container auf deinem Server betrieben. Dafür muss Docker zuerst installiert sein. Installiere dazu [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) auf deinem Server.

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](dedicated-linux-docker.md) Anleitung.

### Benutzer & Verzeichnis anlegen

Wir empfehlen, deinen Windows Server mit einem dedizierten `bitwarden` Service-Account zu konfigurieren, von dem aus Bitwarden installiert und betrieben wird. So bleibt deine Bitwarden-Instanz isoliert von anderen Anwendungen auf deinem Server.

Öffne PowerShell als Administrator und erstelle den lokalen Bitwarden-Benutzer mit den folgenden Befehlen. Nach dem ersten Befehl erscheint ein Eingabefeld für das Passwort. Gib dein gewünschtes Passwort ein und bestätige. Danach führe den zweiten Befehl aus, um die Einrichtung abzuschließen.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Erstelle anschließend einen Bitwarden-Ordner unter `C:\` für den neuen Benutzer:

```
PS C:\> mkdir Bitwarden
```

In Docker Desktop gehst du zu **Einstellungen → Ressourcen → Dateifreigabe**. Füge den Pfad `C:\Bitwarden` zu den freigegebenen Verzeichnissen hinzu. Wähle „Übernehmen & Neustarten“, um die Änderungen zu speichern.

### Domain konfigurieren

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Host zeigen, z.B. server.example.com – besonders wichtig, wenn du Bitwarden im Internet bereitstellst. Vermeide es, Bitwarden im Hostnamen zu verwenden, um die Rolle oder Software des Servers nicht unnötig preiszugeben.

## Installation

Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Bitwarden starten.

Lade das Bitwarden-Installationsskript auf deinen Server herunter und führe es aus:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, also den konfigurierten DNS-Eintrag. Danach wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat generieren soll. Falls ja, gibst du eine E-Mail für Ablaufbenachrichtigungen an. Falls nein, folgen Fragen zum Zertifikat.

Gib deine Installations-ID und den Installationsschlüssel ein, die du bei [Bitwarden](https://bitwarden.com/host) erhalten hast. Wähle dann die Region US oder EU – das ist nur relevant, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abo verbindest.

Wenn du kein Let’s Encrypt nutzt, kannst du ein bestehendes Zertifikat verwenden, indem du die Dateien in `C:\Bitwarden\bwdata\ssl\<deine_domain>` ablegst und angibst, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat generieren, was aber nur für Tests empfohlen wird. Wenn du kein Zertifikat nutzt, musst du einen HTTPS-Proxy vor die Installation setzen, sonst funktionieren Bitwarden-Anwendungen nicht.

## Konfiguration

Nach der Installation erledigst du die Grundkonfiguration über zwei Dateien. Bearbeite zuerst die Umgebungsdatei unter `\bwdata\env\global.override.env`. Trage dort deine SMTP-Serverdaten ein – Host, Port, SSL, Benutzername und Passwort –, damit Bitwarden Verifizierungs- und Organisations-Einladungsmails versenden kann. Falls du Zugriff auf das System-Admin-Portal brauchst, füge eine Admin-E-Mail zu `adminSettings__admins` hinzu.

```
...
globalSettings__mail__smtp__host=<platzhalter>
globalSettings__mail__smtp__port=<platzhalter>
globalSettings__mail__smtp__ssl=<platzhalter>
globalSettings__mail__smtp__username=<platzhalter>
globalSettings__mail__smtp__password=<platzhalter>
...
adminSettings__admins=
...
```

Überprüfe die SMTP-Konfiguration. Eine korrekte Einrichtung meldet Erfolg; andernfalls bekommst du Hinweise zu fehlendem OpenSSL oder falschen Werten. Änderungen übernimmst du mit `.\bitwarden.ps1 -start`.

Eine korrekte Einrichtung meldet Erfolg; andernfalls bekommst du Hinweise zu fehlendem OpenSSL oder falschen Werten. Änderungen übernimmst du mit `.\bitwarden.ps1 -restart`.

Anschließend prüfe die Installationsparameter in `.\bwdata\config.yml`. Diese Datei steuert die generierten Assets und muss für spezielle Umgebungen angepasst werden, z.B. wenn du hinter einem Proxy arbeitest oder alternative Ports nutzt. Änderungen übernimmst du mit `.\bitwarden.ps1 -rebuild`.

Starte die Instanz zuletzt mit `.\bitwarden.ps1 -start`. Der erste Start kann etwas dauern, da Docker die Images zieht. Mit `docker ps` kannst du prüfen, ob alle Container gesund sind. Öffne dann das Web Vault unter deiner konfigurierten Domain und registriere bei Bedarf einen Account. Die E-Mail-Verifizierung funktioniert nur mit korrekt konfigurierten SMTP-Daten.

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Bitwarden erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [bitwarden.com](https://bitwarden.com/) – Offizielle Webseite
- https://bitwarden.com/help/ – Bitwarden Help Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂