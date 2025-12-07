---
id: dedicated-windows-docker
title: "Dedicated Server: Docker auf Windows einrichten"
description: "Entdecke, wie du Apps zuverlässig mit Docker-Containern deployst und managst – für effizientes Skalieren und Updates → Jetzt mehr erfahren"
sidebar_label: Docker installieren
services:
  - Dedicated Server
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Docker ist eine offene Plattform, um Anwendungen in Containern zu entwickeln, zu verschicken und auszuführen. Ein Container packt eine App mit all ihren Abhängigkeiten in eine standardisierte Einheit, die zuverlässig in verschiedenen Umgebungen läuft.

So gehören Probleme durch Unterschiede zwischen Entwicklung, Test und Produktion der Vergangenheit an. Mit Docker kannst du Apps schnell deployen, effizient skalieren und ohne Downtime updaten.

Willst du den Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Docker einrichtest und konfigurierst – inklusive allem, was du beachten musst.



## Voraussetzungen

Bevor du **Docker** installierst, check bitte, ob dein Hosting-Setup die folgenden Anforderungen erfüllt, damit alles smooth läuft und die Performance passt.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung   |
| ---------- | ----------- | ------------------------ |
| CPU        | 1 CPU Kern  | 4 CPU Kerne              |
| RAM        | 4 GB        | 4 GB                     |
| Speicher   | 10 GB       | 25 GB                    |



## Installation

Um Docker auf Windows Server zu installieren, lade das PowerShell-Skript `install-docker-ce.ps1` runter und führe es aus. Es aktiviert die nötigen OS-Features für Container und installiert die Docker Runtime. Öffne PowerShell als Admin und gib folgenden Befehl ein:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Das Skript aktiviert containerbezogene Windows-Features, installiert Docker Engine und Docker CLI und registriert den Docker-Service für den automatischen Start.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

Während der Installation startet das System neu und sollte danach automatisch weitermachen. Nach dem Neustart meldest du dich wieder an und führst den Befehl nochmal aus, falls das Skript dich dazu auffordert, damit der Service vollständig initialisiert wird. Wenn alles fertig ist, sieht die Ausgabe so aus:

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```



## Konfiguration

### Docker starten und stoppen

Docker läuft als Service unter Windows. Nach der Installation startet er automatisch. Manuell steuerst du ihn so:

```
Start-Service docker    # Docker-Service starten
Stop-Service docker     # Docker-Service stoppen
Restart-Service docker  # Docker-Service neu starten
```



### Container starten und stoppen

Starte einen Container mit `docker run`. Beispiel: IIS-Webserver, der Port 80 im Container auf Port 8080 am Host mapped:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### Container-Status checken

So checkst du den Status deiner Container:

```
docker ps        # Laufende Container
docker ps -a     # Alle Container, auch gestoppte
docker inspect web   # Detaillierte Infos
docker logs web      # Container-Logs
```



#### Ressourcen und Status

```
docker stats            # Live CPU/RAM/IO Monitoring
```




## Fazit & weitere Ressourcen

Glückwunsch! Du hast Docker jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [Docker.com](https://Docker.com/) – Offizielle Website
- [docs.docker.com](https://docs.docker.com/) – Docker Docs

Noch Fragen, die hier nicht beantwortet wurden? Unser Support-Team steht dir täglich zur Seite – meld dich einfach bei uns! 🙂