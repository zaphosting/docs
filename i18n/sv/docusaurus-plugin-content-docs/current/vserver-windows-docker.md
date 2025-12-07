---
id: vserver-windows-docker
title: "VPS: Installera Docker på Windows"
description: "Upptäck hur du snabbt och smidigt deployar och hanterar applikationer med Docker-containrar för enkel skalning och uppdateringar → Läs mer nu"
sidebar_label: Installera Docker
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Docker är en öppen plattform för att utveckla, leverera och köra applikationer i containrar. En container paketerar en applikation med alla dess beroenden i en standardiserad enhet som kan köras pålitligt i olika miljöer.

Detta eliminerar problem som uppstår på grund av skillnader mellan utvecklings-, test- och produktionssystem. Med Docker kan applikationer deployas snabbt, skalas effektivt och uppdateras utan driftstopp.

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg hur du installerar och konfigurerar allt, plus vad du behöver ha koll på.

<InlineVoucher />



## Förutsättningar

Innan du installerar **Docker**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minimum     | ZAP-Hosting Rekommenderar |
| --------- | ----------- | ------------------------- |
| CPU       | 1 vCPU-kärna| 4 vCPU-kärnor             |
| RAM       | 4 GB        | 4 GB                      |
| Diskutrymme | 10 GB     | 25 GB                     |



## Installation

För att installera Docker på Windows Server, ladda ner och kör PowerShell-skriptet `install-docker-ce.ps1`. Det aktiverar OS-funktioner som krävs för containrar och installerar Docker runtime. Öppna PowerShell som admin och kör följande kommando:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Skriptet aktiverar container-relaterade Windows-funktioner, installerar Docker Engine och Docker CLI samt registrerar Docker-tjänsten för automatisk start.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

Systemet startar om under installationen och fortsätter automatiskt efteråt. Efter omstart, logga in och kör samma kommando igen om skriptet ber dig göra det för att slutföra tjänstens initiering. När skriptet är klart ser utdata ut så här:

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

### Starta och stoppa docker

Docker körs som en tjänst på Windows. Efter installation startar den automatiskt. För att styra den manuellt:

```
Start-Service docker    # Starta Docker-tjänsten
Stop-Service docker     # Stoppa Docker-tjänsten
Restart-Service docker  # Starta om Docker-tjänsten
```



### Starta och stoppa container

Starta en container med `docker run`. Exempel: IIS webbserver som mappar port 80 i containern till port 8080 på hosten:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### Kontrollera containerstatus

Kolla status på containrar med:

```
docker ps        # Körande containrar
docker ps -a     # Alla containrar, även stoppade
docker inspect web   # Detaljerad info
docker logs web      # Container-loggar
```



#### Resurser och status

```
docker stats            # Live CPU/RAM/IO
```




## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Docker på din VPS. Vi rekommenderar också att kolla in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [Docker.com](https://Docker.com/) - Officiell hemsida
- [docs.docker.com](https://docs.docker.com/) - Docker-dokumentation

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂