---
id: dedicated-windows-bitwarden
title: "Dedicated Server: Bitwarden auf Windows einrichten"
description: "Entdecke, wie du Passwörter sicher mit Bitwarden verwaltest – dank End-to-End-Verschlüsselung und Self-Hosting-Optionen → Jetzt mehr erfahren"
sidebar_label: Bitwarden installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bitwarden ist ein Open-Source-Passwortmanager für Passwörter und Passkeys, der Zero-Knowledge- und End-to-End-Verschlüsselung nutzt, um deine Daten zu schützen. Du kannst ihn als Cloud-Service nutzen oder selbst hosten – mit Features zum Generieren, Speichern und automatischen Ausfüllen starker Zugangsdaten.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />

## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung   |
| ---------- | ----------- | ------------------------ |
| CPU        | 1 CPU-Kern  | 4 CPU-Kerne              |
| RAM        | 2 GB        | 4 GB                     |
| Festplattenspeicher | 12 GB       | 25 GB                    |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Windows Server Version mit Docker 26+ Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme bei der Bitwarden-Installation zu vermeiden.

## Vorbereitung

Bevor du **Bitwarden** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.

### System aktualisieren

Um sicherzustellen, dass dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein Systemupdate durchführen. So hast du die neuesten Sicherheitspatches und Softwareversionen, bevor du weitermachst.

### Abhängigkeiten installieren

Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten starten. Bitwarden wird auf deinem Server über mehrere Docker-Container bereitgestellt und betrieben. Dafür muss Docker zuerst installiert sein. Installiere dazu [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) auf deinem Server.

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](dedicated-linux-docker.md) Anleitung.

### Benutzer & Verzeichnis anlegen

Wir empfehlen, deinen Windows Server mit einem dedizierten `bitwarden` Service-Account zu konfigurieren, von dem aus Bitwarden installiert und betrieben wird. So stellst du sicher, dass deine Bitwarden-Instanz von anderen Anwendungen auf deinem Server isoliert ist.

Öffne PowerShell als Administrator. Erstelle den lokalen Bitwarden-Benutzer mit den folgenden Befehlen. Nach dem ersten Befehl erscheint ein Texteingabefenster. Gib das gewünschte Passwort ein und bestätige. Danach führe den zweiten Befehl aus, um die Einrichtung abzuschließen.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Erstelle anschließend einen Bitwarden-Ordner unter `C:\` für den neuen Benutzer:

```
PS C:\> mkdir Bitwarden
```

In Docker Desktop gehst du zu **Einstellungen → Ressourcen → Dateifreigabe**. Füge den Pfad `C:\Bitwarden` zu den freigegebenen Verzeichnissen hinzu. Wähle „Übernehmen & Neustarten“, um die Änderungen zu aktivieren.

### Domain konfigurieren

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Host zeigen, z.B. server.example.com – besonders wichtig, wenn du Bitwarden im Internet bereitstellst. Vermeide es, Bitwarden im Hostnamen zu verwenden, um die Rolle oder Software deines Servers nicht unnötig preiszugeben.

## Installation

Jetzt, wo alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Bitwarden starten.

Lade das Bitwarden-Installationsskript auf deinen Server herunter und führe es aus:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, typischerweise den konfigurierten DNS-Eintrag. Danach wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat generieren soll. Falls ja, gibst du eine E-Mail für Ablaufbenachrichtigungen an. Falls nein, folgen Fragen zum Zertifikat.

Gib deine Installations-ID und deinen Installationsschlüssel ein, die du bei [Bitwarden](https://bitwarden.com/host) erhalten hast. Wähle dann die Region US oder EU – das ist nur relevant, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abo verbindest.

Wenn du kein Let’s Encrypt nutzt, kannst du ein bestehendes Zertifikat verwenden, indem du die Dateien in `C:\Bitwarden\bwdata\ssl\<deine_domain>` ablegst und angibst, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat generieren, was aber nur für Tests empfohlen wird. Wenn du kein Zertifikat nutzt, musst du einen HTTPS-Proxy vor die Installation setzen, sonst funktionieren Bitwarden-Anwendungen nicht.

## Konfiguration

Nach der Installation erledigst du die Grundkonfiguration über zwei Dateien. Bearbeite zuerst die Umgebungsdatei unter `\bwdata\env\global.override.env`. Trage dort deine SMTP-Serverdaten ein – Host, Port, SSL, Benutzername und Passwort –, damit Bitwarden Verifizierungs- und Organisations-Einladungsmails verschicken kann. Falls du Zugriff auf das Systemadministrator-Portal brauchst, füge eine Admin-E-Mail zu `adminSettings__admins` hinzu.

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

Starte die Instanz zuletzt mit `.\bitwarden.ps1 -start`. Der erste Start kann etwas dauern, da Docker die Images zieht. Mit `docker ps` kannst du prüfen, ob alle Container gesund sind. Öffne dann das Web Vault unter deiner konfigurierten Domain und registriere bei Bedarf einen Account. Die E-Mail-Verifizierung funktioniert nur mit korrekt konfigurierten SMTP-Variablen.

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Bitwarden erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [bitwarden.com](https://bitwarden.com/) – Offizielle Website
- https://bitwarden.com/help/ – Bitwarden Help Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂