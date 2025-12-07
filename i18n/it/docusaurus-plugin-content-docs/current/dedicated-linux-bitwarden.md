---
id: dedicated-linux-bitwarden
title: "Dedicated Server: Bitwarden installieren auf Linux"
description: "Entdecke, wie du Passwörter sicher mit Bitwarden verwaltest – dank Ende-zu-Ende-Verschlüsselung für Cloud- oder Self-Hosting → Jetzt mehr erfahren"
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

Willst du den Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung    |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 CPU Kern  | 4 CPU Kerne               |
| RAM        | 2 GB        | 4 GB                      |
| Speicher   | 12 GB       | 25 GB                     |

Die Software benötigt alle erforderlichen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Prüfe vor der Installation, ob dein Server folgende Anforderungen erfüllt:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+ Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und das Betriebssystem aktuell ist, um Kompatibilitätsprobleme bei der Bitwarden-Installation zu vermeiden.

## Vorbereitung

Bevor du **Bitwarden** einrichtest, solltest du dein System vorbereiten. Das bedeutet, dein Betriebssystem auf den neuesten Stand zu bringen und alle nötigen Abhängigkeiten zu installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.

### System aktualisieren
Damit dein System mit den neuesten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Gib dazu folgenden Befehl ein:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die aktuellsten Sicherheits-Patches und Softwareversionen hat.

### Abhängigkeiten installieren
Nach dem Update kannst du die nötigen Abhängigkeiten installieren. Bitwarden läuft in mehreren Docker-Containern, daher muss Docker zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserem [Docker](dedicated-linux-docker.md) Guide.

### Benutzer & Verzeichnis anlegen

Es ist empfehlenswert, deinen Linux-Server mit einem dedizierten `bitwarden` Service-Account zu konfigurieren, von dem aus Bitwarden installiert und betrieben wird. So bleibt deine Bitwarden-Instanz isoliert von anderen Anwendungen auf deinem Server.

Lege den Bitwarden-Benutzer an und setze ein starkes, einzigartiges Passwort:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Falls die Docker-Gruppe noch nicht existiert, erstelle sie und füge den Bitwarden-Benutzer hinzu:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Erstelle das Arbeitsverzeichnis, setze die Berechtigungen und übergebe den Besitz an den Bitwarden-Benutzer:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### Domain konfigurieren

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Server zeigen, z.B. server.deinedomain.com – besonders wichtig, wenn du Bitwarden öffentlich im Internet anbietest. Vermeide es, „bitwarden“ im Hostnamen zu verwenden, um die Serverrolle oder Software nicht unnötig preiszugeben.

## Installation

Wenn alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Bitwarden starten.

Lade das Bitwarden-Installationsskript auf deinen Server und führe es aus. Dabei wird ein `./bwdata` Verzeichnis relativ zum Speicherort von `bitwarden.sh` angelegt.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, also den konfigurierten DNS-Eintrag. Danach wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat generieren soll. Falls ja, gibst du eine E-Mail für Ablaufbenachrichtigungen an. Falls nein, folgen Fragen zum Zertifikat.

Trage deine Installations-ID und den Installationsschlüssel ein, die du bei [Bitwarden](https://bitwarden.com/host) bekommst. Wähle dann die Region US oder EU – das ist nur relevant, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abo verbindest.

Wenn du kein Let’s Encrypt nutzt, kannst du ein bestehendes Zertifikat in `./bwdata/ssl/deine.domain` ablegen und angeben, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat generieren – empfohlen nur zum Testen. Ohne Zertifikat brauchst du einen HTTPS-Proxy vor der Installation, sonst funktionieren Bitwarden-Anwendungen nicht.

## Konfiguration

Nach der Installation machst du die Grundkonfiguration über zwei Dateien. Zuerst bearbeitest du die Umgebungsdatei unter `./bwdata/env/global.override.env`. Dort trägst du deine SMTP-Serverdaten ein – Host, Port, SSL, Benutzername und Passwort – damit Bitwarden Verifizierungs- und Einladungs-Mails verschicken kann. Falls du Zugriff auf das System-Admin-Portal brauchst, füge eine Admin-E-Mail zu `adminSettings__admins` hinzu.

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

Teste die SMTP-Konfiguration mit `./bitwarden.sh checksmtp`. Bei korrekter Einrichtung bekommst du eine Erfolgsmeldung; sonst siehst du Hinweise zu fehlendem OpenSSL oder falschen Werten. Änderungen übernimmst du mit `./bitwarden.sh restart`.

Anschließend prüfe die Installationsparameter in `./bwdata/config.yml`. Diese Datei steuert die generierten Assets und muss angepasst werden, wenn du z.B. hinter einem Proxy arbeitest oder andere Ports nutzt. Änderungen übernimmst du mit `./bitwarden.sh rebuild`.

Starte die Instanz zuletzt mit `./bitwarden.sh start`. Der erste Start kann etwas dauern, während Docker die Images lädt. Mit `docker ps` kannst du prüfen, ob alle Container gesund laufen. Öffne dann den Web-Vault unter deiner Domain und registriere dich bei Bedarf. Für die E-Mail-Verifizierung müssen die SMTP-Daten korrekt sein.

## Fazit & weitere Ressourcen

Glückwunsch! Du hast Bitwarden erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [bitwarden.com](https://bitwarden.com/) – Offizielle Website
- https://bitwarden.com/help/ – Bitwarden Help Center (Dokumentation)

Hast du noch Fragen, die hier nicht beantwortet wurden? Für weitere Hilfe steht dir unser Support-Team täglich zur Seite – meld dich einfach bei uns! 🙂