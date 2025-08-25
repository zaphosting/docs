---
id: dedicated-windows-docker
title: "Dedicated Server: Docker unter Windows einrichten"
description: Informationen zur Einrichtung von Docker auf deinem Windows-Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Docker installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Docker ist eine offene Plattform zum Entwickeln, Bereitstellen und Ausführen von Anwendungen in Containern. Ein Container paketiert eine Anwendung mit allen Abhängigkeiten zu einer standardisierten Einheit, die zuverlässig in unterschiedlichen Umgebungen ausgeführt werden kann. 

Dieser Ansatz beseitigt Probleme, die durch Unterschiede zwischen Entwicklungs-, Test- und Produktionssystemen entstehen. Mit Docker lassen sich Anwendungen schnell bereitstellen, effizient skalieren und ohne Ausfallzeiten aktualisieren.

Überlegst du, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Docker** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum       | ZAP-Hosting Empfehlung |
| ---------- | ------------- | ---------------------- |
| CPU        | 1 CPU-Kern   | 4 CPU-Kerne           |
| RAM        | 4 GB          | 4 GB                   |
| Speicherplatz | 10 GB     | 25 GB                  |



## Installation

Um Docker auf Windows Server einzurichten, lade das PowerShell-Skript `install-docker-ce.ps1` herunter und führe es aus. Es aktiviert die für Container erforderlichen Betriebssystemfunktionen und installiert die Docker-Laufzeit. Öffne PowerShell als Administrator und führe den folgenden Befehl aus: 

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Das Skript aktiviert containerbezogene Windows-Funktionen, installiert Docker Engine und die Docker CLI und registriert den Docker-Dienst für den automatischen Start.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

Das System wird während der Installation neu gestartet und sollte danach automatisch fortfahren. Melde dich nach dem Neustart an und führe denselben Befehl erneut aus, wenn dich das Skript dazu auffordert, damit die Initialisierung des Dienstes abgeschlossen wird. Wenn das Skript abgeschlossen ist, sieht die Ausgabe wie folgt aus:

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

Docker läuft unter Windows als Dienst. Nach der Installation startet er automatisch. Für die manuelle Steuerung:

```
Start-Service docker    # Docker-Dienst starten
Stop-Service docker     # Docker-Dienst stoppen
Restart-Service docker  # Docker-Dienst neu starten
```



### Container starten und stoppen

Starte einen Container mit `docker run`. Beispiel: IIS-Webserver, der Port 80 im Container auf Port 8080 des Hosts abbildet:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### Containerstatus prüfen

Prüfe den Containerstatus mit:

```
docker ps        # Laufende Container
docker ps -a     # Alle Container, auch gestoppte
docker inspect web   # Detaillierte Infos
docker logs web      # Container-Logs
```



#### Ressourcen und Status

```
docker stats            # Live CPU/RAM/IO
```




## Abschluss und weitere Ressourcen

Glückwunsch. Du hast Docker jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Docker.com](https://Docker.com/) - Offizielle Website
- [docs.docker.com](https://docs.docker.com/) - Docker-Dokumentation

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂
