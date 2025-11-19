---
id: dedicated-linux-bitwarden
title: "Dedicated Server: Bitwarden auf Linux einrichten"
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

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung    |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 CPU-Kern  | 4 CPU-Kerne               |
| RAM        | 2 GB        | 4 GB                      |
| Festplattenspeicher | 12 GB       | 25 GB                     |

Die Software benötigt alle erforderlichen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+ Unterstützung

Stelle sicher, dass alle Abhängigkeiten installiert sind und das Betriebssystem aktuell ist, um Kompatibilitätsprobleme bei der Bitwarden-Installation zu vermeiden.

## Vorbereitung

Bevor du **Bitwarden** einrichtest, solltest du dein System vorbereiten. Das beinhaltet das Aktualisieren des Betriebssystems auf die neueste Version und die Installation aller benötigten Abhängigkeiten. So sorgst du für eine stabile Umgebung und verhinderst Probleme während oder nach der Installation.

### System aktualisieren

Damit dein System mit den neuesten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```

So stellst du sicher, dass dein System vor der Installation die aktuellsten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren

Nach dem Update kannst du die Abhängigkeiten installieren. Bitwarden wird über mehrere Docker-Container auf deinem Server laufen, daher muss Docker zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserer [Docker](dedicated-linux-docker.md) Anleitung.

### Benutzer & Verzeichnis anlegen

Es wird empfohlen, deinen Linux-Server mit einem dedizierten `bitwarden` Service-Account zu konfigurieren, von dem aus Bitwarden installiert und betrieben wird. So bleibt deine Bitwarden-Instanz von anderen Anwendungen auf deinem Server isoliert.

Lege den Bitwarden-Benutzer an und setze ein starkes, einzigartiges Passwort:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Erstelle die Docker-Gruppe, falls sie noch nicht existiert, und füge den Bitwarden-Benutzer hinzu:

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

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Host zeigen, z.B. server.deinedomain.com, besonders wenn du Bitwarden im Internet verfügbar machen willst. Vermeide es, Bitwarden im Hostnamen zu verwenden, um die Rolle oder Software deines Servers nicht unnötig preiszugeben.

## Installation

Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Bitwarden starten.

Lade das Bitwarden-Installationsskript auf deinen Server und führe es aus. Dabei wird ein `./bwdata` Verzeichnis relativ zum Speicherort von `bitwarden.sh` erstellt.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, normalerweise der konfigurierte DNS-Eintrag. Danach wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat generieren soll. Falls ja, gibst du eine E-Mail für Ablaufbenachrichtigungen an. Falls nein, folgen Fragen zum Zertifikat.

Gib deine Installations-ID und den Installationsschlüssel ein, die du bei [Bitwarden](https://bitwarden.com/host) erhalten hast. Wähle dann die Region US oder EU – das ist nur relevant, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abo verbindest.

Wenn du kein Let’s Encrypt nutzt, kannst du ein bestehendes Zertifikat verwenden, indem du die Dateien in `./bwdata/ssl/deine.domain` ablegst und angibst, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat generieren, was aber nur für Tests empfohlen wird. Wenn du kein Zertifikat nutzt, musst du einen HTTPS-Proxy vor die Installation setzen, sonst funktionieren Bitwarden-Anwendungen nicht.

## Konfiguration

Nach der Installation erledigst du die Grundkonfiguration über zwei Dateien. Bearbeite zuerst die Umgebungsdatei unter `./bwdata/env/global.override.env`. Trage dort deine SMTP-Serverdaten ein – Host, Port, SSL, Benutzername und Passwort – damit Bitwarden Verifizierungs- und Einladungs-E-Mails verschicken kann. Falls du Zugriff auf das System-Admin-Portal brauchst, füge eine Admin-E-Mail zu `adminSettings__admins` hinzu.

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

Teste die SMTP-Konfiguration mit `./bitwarden.sh checksmtp`. Bei korrekter Einrichtung bekommst du eine Erfolgsmeldung; ansonsten siehst du Hinweise zu fehlendem OpenSSL oder falschen Werten. Änderungen übernimmst du mit `./bitwarden.sh restart`.

Anschließend prüfe die Installationsparameter in `./bwdata/config.yml`. Diese Datei steuert die generierten Assets und muss angepasst werden, wenn du z.B. hinter einem Proxy arbeitest oder alternative Ports nutzt. Änderungen übernimmst du mit `./bitwarden.sh rebuild`.

Starte die Instanz zuletzt mit `./bitwarden.sh start`. Der erste Start kann etwas dauern, da Docker die Images zieht. Mit `docker ps` kannst du prüfen, ob alle Container gesund laufen. Öffne dann das Web Vault unter deiner konfigurierten Domain und registriere dich bei Bedarf. Die E-Mail-Verifizierung funktioniert nur mit korrekt konfigurierten SMTP-Daten.

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Bitwarden erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [bitwarden.com](https://bitwarden.com/) – Offizielle Website
- https://bitwarden.com/help/ – Bitwarden Help Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂