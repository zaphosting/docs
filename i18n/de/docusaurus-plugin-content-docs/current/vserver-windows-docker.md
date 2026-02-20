---
id: vserver-windows-docker
title: "Docker auf einem Windows Server einrichten – Container auf deiner Infrastruktur starten und verwalten"
description: "Entdecke, wie du Anwendungen effizient mit Docker-Containern bereitstellst und verwaltest – für nahtloses Skalieren und Updates → Jetzt mehr erfahren"
sidebar_label: Docker installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Docker ist eine offene Plattform zum Entwickeln, Ausliefern und Ausführen von Anwendungen in Containern. Ein Container bündelt eine Anwendung mit all ihren Abhängigkeiten in einer standardisierten Einheit, die zuverlässig in verschiedenen Umgebungen läuft.

Dieser Ansatz beseitigt Probleme, die durch Unterschiede zwischen Entwicklungs-, Test- und Produktionssystemen entstehen. Mit Docker kannst du Anwendungen schnell deployen, effizient skalieren und ohne Ausfallzeiten updaten.

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Docker** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 4 GB         | 4 GB                      |
| Festplattenspeicher | 10 GB        | 25 GB                     |



## Installation

Um Docker auf einem Windows Server einzurichten, lade das PowerShell-Skript `install-docker-ce.ps1` herunter und führe es aus. Es aktiviert die für Container benötigten OS-Features und installiert die Docker-Laufzeit. Öffne PowerShell als Administrator und führe folgenden Befehl aus:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Das Skript aktiviert containerbezogene Windows-Features, installiert die Docker Engine und die Docker CLI und registriert den Docker-Dienst für den automatischen Start.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

Das System wird während der Installation neu starten und sollte danach automatisch fortfahren. Nach dem Neustart melde dich an und führe den Befehl erneut aus, falls das Skript dich dazu auffordert, damit der Dienst die Initialisierung abschließt. Sobald das Skript fertig ist, sieht die Ausgabe so aus:

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

Docker läuft als Dienst unter Windows. Nach der Installation startet er automatisch. Um ihn manuell zu steuern:

```
Start-Service docker    # Docker-Dienst starten
Stop-Service docker     # Docker-Dienst stoppen
Restart-Service docker  # Docker-Dienst neu starten
```



### Container starten und stoppen

Starte einen Container mit `docker run`. Beispiel: IIS-Webserver, der Port 80 im Container auf Port 8080 des Hosts mapped:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### Container-Status prüfen

Prüfe den Status von Containern mit:

```
docker ps        # Laufende Container
docker ps -a     # Alle Container, auch gestoppte
docker inspect web   # Detaillierte Infos
docker logs web      # Container-Logs
```



#### Ressourcen und Status

```
docker stats            # Live CPU/RAM/IO Nutzung
```




## Fazit und weitere Ressourcen

Glückwunsch! Du hast Docker jetzt erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [Docker.com](https://Docker.com/) – Offizielle Webseite
- [docs.docker.com](https://docs.docker.com/) – Docker Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂