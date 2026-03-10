---
id: server-linux-prologue
title: "Prologue auf einem Linux-Server einrichten – Hoste deine eigene Hörbuch-Plattform"
description: "Lerne, wie du einen Prologue-kompatiblen Hörbuch-Server auf deinem Linux VPS installierst und betreibst – entweder mit Docker oder manuell → Jetzt mehr erfahren"
sidebar_label: Prologue installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

[Prologue](https://prologue.audio/) ist eine moderne Hörbuch-Plattform, die mit selbstgehosteten Hörbuch-Servern funktioniert. Damit kannst du deine Hörbuch-Bibliothek streamen, organisieren und auf mehreren Geräten wie iPhone, iPad, Apple Watch und CarPlay hören.

Anstatt auf cloudbasierte Hörbuch-Plattformen zu setzen, hast du mit einer selbstgehosteten Lösung die volle Kontrolle über deine Hörbuch-Sammlung und die Streaming-Infrastruktur. Sobald der Server eingerichtet ist, verbindet sich die Prologue Mobile App damit und synchronisiert Wiedergabefortschritt, Lesezeichen und Hörverlauf.

In dieser Anleitung lernst du, wie du einen Prologue-kompatiblen Hörbuch-Server auf einem Linux VPS mit zwei verschiedenen Methoden bereitstellst:

- Manuelle Installation auf einem Webserver
- Docker-basierte Bereitstellung für einfacheres Container-Management

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Anwendungsfälle von Prologue

Prologue eignet sich für viele Szenarien, in denen Nutzer volle Kontrolle und Flexibilität über ihre Hörbuch-Bibliothek wollen.

Typische Anwendungsfälle sind:

- Hosting einer privaten Hörbuch-Streaming-Plattform
- Verwaltung großer Hörbuch-Sammlungen in einer zentralen Oberfläche
- Synchronisierung der Wiedergabe auf mehreren Geräten
- Zugriff auf Hörbücher von überall aus
- Aufbau einer selbstgehosteten Alternative zu kommerziellen Hörbuch-Plattformen

Eine selbstgehostete Lösung stellt außerdem sicher, dass deine Mediendateien unter deiner Kontrolle bleiben und du einen skalierbaren Hörbuch-Server aufbauen kannst.



## Voraussetzungen

Bevor du den Server installierst, stelle sicher, dass dein System folgende Anforderungen erfüllt.

| Hardware | Minimum | Empfohlen |
|----------|---------|-----------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Festplattenspeicher | 20 GB | 50 GB |

<InlineServiceLink />

Benötigte Software hängt von der Installationsmethode ab:

Manuelle Installation:

- Linux-Server
- Webserver (Apache oder Nginx)
- PHP
- Datenbankserver

Docker-Installation:

- Docker
- Docker Compose





## Vorbereitung

Bevor du mit der Installation startest, aktualisiere deine Systempakete.

```
sudo apt update
sudo apt upgrade
```


Überprüfe, ob die benötigte Laufzeitumgebung je nach gewählter Methode installiert ist. Für Docker-Installationen:

```
docker --version
docker compose version
```

Falls Docker noch nicht installiert ist, installiere es zuerst, bevor du weitermachst.



## Manuelle Installation

Die manuelle Installation installiert die Anwendung direkt auf deinem Server ohne Container. Diese Methode ist praktisch, wenn du auf klassischen Webhosting-Umgebungen deployen möchtest.



### Anwendung herunterladen

Erstelle zuerst ein Projektverzeichnis und lade die Anwendungsdateien herunter.

```
mkdir prologue-server
cd prologue-server
```


Klon dann das Projekt-Repository:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Webserver konfigurieren

Verschiebe die Anwendungsdateien in dein Webserver-Verzeichnis. Beispiel für [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Erstelle eine Virtual Host-Konfiguration, die auf das Anwendungsverzeichnis zeigt. Beispiel Apache-Konfiguration:

```<VirtualHost *:80>
ServerName deine-domain.de
DocumentRoot /var/www/prologue
</VirtualHost>
```


Starte den Webserver nach der Konfiguration neu.

```
sudo systemctl restart apache2
```



### Umgebungs-Einstellungen konfigurieren

Bearbeite die Konfigurationsdatei und passe die nötigen Einstellungen wie Datenbankverbindung und Server-URL an.

```
nano config.php
```


Nach Abschluss der Konfiguration ist die Weboberfläche über deine konfigurierte Domain oder Server-IP erreichbar.



## Docker-Installation

Docker bietet eine einfachere Bereitstellung, indem die Anwendung in einem Container läuft.



### Projektverzeichnis erstellen

Erstelle ein Verzeichnis für die Docker-Bereitstellung.

```
mkdir prologue-docker
cd prologue-docker
```



### Docker Compose-Konfiguration erstellen

Erstelle eine Docker Compose-Datei mit `nano compose.yaml` und füge folgende Konfiguration ein:

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Container starten

Starte den Container mit Docker Compose via `docker compose up -d` und überprüfe mit `docker ps`, ob der Container läuft. Docker lädt automatisch das benötigte Image und startet den Hörbuch-Server.



### Zugriff auf den Server

Sobald der Server läuft, öffne deinen Browser und gehe zu:

```
http://DEINE_SERVER_IP:13378
```

Ersetze DEINE_SERVER_IP mit der IP-Adresse deines VPS. Beim ersten Start wirst du aufgefordert:

- Ein Administrator-Konto anzulegen
- Dein Hörbuch-Bibliotheksverzeichnis zu konfigurieren
- Hörbuch-Dateien zu scannen und zu importieren


Nach der Konfiguration kannst du die Prologue Mobile App mit dem Server verbinden und deine Hörbuch-Sammlung streamen.



## Fazit

Glückwunsch! Du hast erfolgreich einen Prologue-kompatiblen Hörbuch-Server entweder manuell oder per Docker-Deployment eingerichtet.

Beide Methoden ermöglichen es dir, deine Hörbuch-Sammlung auf deiner eigenen Infrastruktur zu hosten und über die Prologue App auf deine Geräte zu streamen. Die Docker-Variante erleichtert Wartung und Updates, während die manuelle Installation mehr Kontrolle über deine Webserver-Umgebung bietet.

Bei Fragen oder Support brauchst du nur unser Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />