---
id: vserver-linux-bitwarden
title: "VPS: Bitwarden auf Linux einrichten"
description: "Entdecke, wie du Bitwarden sicher selbst hostest, um Passwörter mit Ende-zu-Ende-Verschlüsselung und starken Anmeldeinformationen zu verwalten → Jetzt mehr erfahren"
sidebar_label: Bitwarden installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bitwarden ist ein Open-Source-Passwortmanager für Passwörter und Passkeys, der Zero-Knowledge- und Ende-zu-Ende-Verschlüsselung nutzt, um deine Daten zu schützen. Du kannst ihn als Cloud-Service nutzen oder selbst hosten – mit Features zum Generieren, Speichern und automatischen Ausfüllen starker Zugangsdaten.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung   |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne             |
| RAM        | 2 GB         | 4 GB                     |
| Speicher   | 12 GB        | 25 GB                    |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+ Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem verwendet wird, um Kompatibilitätsprobleme bei der Bitwarden-Installation zu vermeiden.



## Vorbereitung

Bevor du **Bitwarden** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Nach dem Update kannst du mit der Installation der Abhängigkeiten starten. Bitwarden wird auf deinem Server mit mehreren Docker-Containern betrieben. Dafür muss Docker zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.



### Benutzer & Verzeichnis anlegen

Es wird empfohlen, deinen Linux-Server mit einem eigenen `bitwarden` Service-Account zu konfigurieren, von dem aus Bitwarden installiert und betrieben wird. So bleibt deine Bitwarden-Instanz von anderen Anwendungen auf deinem Server isoliert.

Lege den bitwarden-Benutzer an und setze ein starkes, einzigartiges Passwort:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Erstelle die Docker-Gruppe, falls sie noch nicht existiert, und füge den bitwarden-Benutzer hinzu:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Erstelle das Arbeitsverzeichnis, setze die Berechtigungen und übergebe den Besitz an bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Domain konfigurieren

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf den Host zeigen, z.B. server.example.com – besonders wichtig, wenn du Bitwarden im Internet bereitstellst. Vermeide es, Bitwarden im Hostnamen zu verwenden, um die Rolle oder Software des Servers nicht unnötig preiszugeben.




## Installation
Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Bitwarden starten.

Lade das Bitwarden-Installationsskript auf deinen Server und führe es aus. Ein Verzeichnis `./bwdata` wird relativ zum Speicherort von `bitwarden.sh` erstellt.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, typischerweise den konfigurierten DNS-Eintrag. Danach wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat generieren soll. Falls ja, gibst du eine E-Mail für Ablaufbenachrichtigungen an. Falls nein, folgen Fragen zum Zertifikat.

Gib deine Installations-ID und den Installationsschlüssel ein, die du bei [Bitwarden](https://bitwarden.com/host) erhältst. Wähle dann die Region US oder EU – das ist nur relevant, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abo verbindest.

Wenn du kein Let’s Encrypt nutzt, kannst du ein bestehendes Zertifikat verwenden, indem du die Dateien in `./bwdata/ssl/your.domain` ablegst und angibst, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat generieren, was aber nur für Tests empfohlen wird. Wenn du kein Zertifikat nutzt, musst du einen HTTPS-Proxy vor die Installation setzen, sonst funktionieren Bitwarden-Anwendungen nicht.



## Konfiguration

Nach der Installation machst du die Grundkonfiguration über zwei Dateien. Bearbeite zuerst die Umgebungsdatei unter `./bwdata/env/global.override.env`. Trage dort deine SMTP-Serverdaten ein – Host, Port, SSL, Benutzername und Passwort – damit Bitwarden Verifizierungs- und Organisations-Einladungsmails verschicken kann. Falls du Zugriff auf das System-Admin-Portal brauchst, füge eine Admin-E-Mail zu `adminSettings__admins` hinzu.

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

Teste die SMTP-Konfiguration mit `./bitwarden.sh checksmtp`. Eine korrekte Einrichtung meldet Erfolg; andernfalls bekommst du Hinweise zu fehlendem OpenSSL oder falschen Werten. Änderungen übernimmst du mit `./bitwarden.sh restart`.

Anschließend prüfe die Installationsparameter in `./bwdata/config.yml`. Diese Datei steuert die generierten Assets und muss bei speziellen Umgebungen angepasst werden, z.B. wenn du hinter einem Proxy bist oder andere Ports nutzt. Änderungen übernimmst du mit `./bitwarden.sh rebuild`.

Starte die Instanz zuletzt mit `./bitwarden.sh start`. Der erste Start kann etwas dauern, da Docker die Images zieht. Mit `docker ps` kannst du prüfen, ob alle Container gesund laufen. Öffne dann den Web Vault unter deiner konfigurierten Domain und registriere dich bei Bedarf. Die E-Mail-Verifizierung funktioniert nur mit korrekt konfigurierten SMTP-Daten.

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Bitwarden erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [bitwarden.com](https://bitwarden.com/) – Offizielle Webseite
- https://bitwarden.com/help/ – Bitwarden Help Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂