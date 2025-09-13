---
id: vserver-linux-bitwarden
title: "vServer: Bitwarden unter Linux einrichten"
description: Informationen zur Einrichtung von Bitwarden auf deinem Linux vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Bitwarden installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bitwarden ist ein Open-Source-Passwortmanager für Passwörter und Passkeys, der Daten mit Zero-Knowledge-Prinzip und Ende-zu-Ende-Verschlüsselung schützt. Du kannst ihn als Clouddienst nutzen oder selbst hosten. Er bietet Funktionen zum Erzeugen, Speichern und automatischen Ausfüllen starker Zugangsdaten. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Du überlegst, diesen Dienst selbst zu hosten? Wir führen dich Schritt für Schritt durch Einrichtung und Konfiguration und nennen alles, was du dabei beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, damit die Installation reibungslos abläuft und die Leistung stimmt.

| Hardware   | Minimum       | ZAP-Hosting Empfehlung |
| ---------- | ------------- | ---------------------- |
| CPU        | 1 vCPU-Kern   | 4 vCPU-Kerne           |
| RAM        | 2 GB          | 4 GB                   |
| Speicherplatz | 12 GB      | 25 GB                  |

Die Software setzt voraus, dass alle benötigten Abhängigkeiten installiert sind und ein unterstütztes Betriebssystem verwendet wird. Stelle vor der Installation sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)` 

**Betriebssystem:** Aktuelle Version von Ubuntu/Debian mit Unterstützung für Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Bitwarden zu vermeiden.



## Vorbereitung

Bevor du **Bitwarden** einrichtest, musst du dein System vorbereiten. Dazu gehört, das Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den neuesten Softwareständen und Sicherheitsverbesserungen läuft, solltest du zuerst Aktualisierungen durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Wenn die Aktualisierung abgeschlossen ist, kannst du die Installation der Abhängigkeiten vornehmen. Bitwarden wird auf deinem System mithilfe mehrerer Docker-Container bereitgestellt und ausgeführt. Dafür muss Docker zuerst installiert werden. Führe dazu die folgenden Befehle aus: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine vollständige Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.



### Benutzer und Verzeichnis anlegen

Es wird empfohlen, deinen Linux-Server mit einem dedizierten Dienstkonto `bitwarden` zu konfigurieren, von dem aus Bitwarden installiert und betrieben wird. Dadurch wird sichergestellt, dass deine Bitwarden-Instanz von anderen Anwendungen auf deinem Server isoliert ist.

Erstelle den Benutzer bitwarden und setze ein starkes, einzigartiges Passwort für dieses Konto.

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Erstelle die Gruppe docker, falls sie noch nicht existiert, und füge den Benutzer bitwarden der Gruppe docker hinzu:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Erstelle das Arbeitsverzeichnis, setze die Berechtigungen und weise den Besitz dem Benutzer bitwarden zu:
```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Domain konfigurieren

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf den Host zeigt, zum Beispiel server.example.com, besonders wenn du den Dienst im Internet bereitstellst. Vermeide es, den Namen Bitwarden im Hostnamen zu verwenden, um Rückschlüsse auf die Serverrolle oder verwendete Software zu reduzieren.




## Installation
Nachdem alle Anforderungen erfüllt und die nötigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Bitwarden-Anwendung fortfahren.

Lade das Bitwarden-Installationsskript auf dein System und führe anschließend das Installationsskript aus. Ein Verzeichnis `./bwdata` wird relativ zur Position von `bitwarden.sh` erstellt.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, in der Regel den konfigurierten DNS-Eintrag. Als Nächstes wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat erzeugen soll. Bei Ja gibst du eine E-Mail-Adresse für Ablaufhinweise an. Bei Nein folgen die Abfragen zum Zertifikat. 

Gib deine Installation ID und deinen Installation Key ein, beide erhältst du bei [Bitwarden](https://bitwarden.com/host). Wähle anschließend die Region US oder EU. Das ist nur relevant, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abonnement verbindest. 

Wenn du Let’s Encrypt nicht nutzt, kannst du ein vorhandenes Zertifikat verwenden, indem du die Dateien in `./bwdata/ssl/your.domain` ablegst und angibst, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat erstellen, das nur für Tests empfohlen wird. Wenn du kein Zertifikat verwendest, musst du einen HTTPS-Proxy vor die Installation schalten, andernfalls funktionieren die Bitwarden-Anwendungen nicht.



## Konfiguration

Nach der Installation erfolgt die Grundkonfiguration mit zwei Dateien. Bearbeite zuerst die Umgebungsdatei `./bwdata/env/global.override.env`. Trage dort die Details deines SMTP-Servers ein, einschließlich Host, Port, SSL, Benutzername und Passwort, damit Bitwarden Verifizierungs- und Organisationseinladungs-E-Mails versenden kann. Wenn du Zugriff auf das System Administrator Portal benötigst, füge eine Administrator-E-Mail zu `adminSettings__admins` hinzu.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Prüfe die SMTP-Konfiguration mit `./bitwarden.sh checksmtp`. Eine korrekte Konfiguration meldet Erfolg. Andernfalls siehst du Hinweise auf fehlendes OpenSSL oder falsche Werte. Übernimm Änderungen mit `./bitwarden.sh restart`.

Eine korrekte Konfiguration meldet Erfolg. Andernfalls siehst du Hinweise auf fehlendes OpenSSL oder falsche Werte. Übernimm Änderungen mit `./bitwarden.sh restart`.

Prüfe als Nächstes die Installationsparameter in `./bwdata/config.yml`. Diese Datei steuert die generierten Assets und muss für spezielle Umgebungen angepasst werden, zum Beispiel beim Betrieb hinter einem Proxy oder mit abweichenden Ports. Wende solche Änderungen mit `./bitwarden.sh rebuild` an.

Starte zum Schluss die Instanz mit `./bitwarden.sh start`. Der erste Start kann einige Zeit dauern, während Docker die Images lädt. Verwende `docker ps`, um zu bestätigen, dass alle Container fehlerfrei laufen. Öffne anschließend die Web Vault unter deiner konfigurierten Domain und registriere bei Bedarf ein Konto. Die E-Mail-Verifizierung erfordert korrekt konfigurierte SMTP-Variablen.

## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Bitwarden jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen. Sie können dir zusätzliche Hilfe und Orientierung bei der Serverkonfiguration geben.

- [bitwarden.com](https://bitwarden.com/) - Offizielle Website
- https://bitwarden.com/help/ - Bitwarden Hilfe-Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung kontaktiere gern unser Support-Team. Wir sind täglich für dich da! 🙂
