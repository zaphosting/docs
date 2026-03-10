---
id: server-linux-prologue
title: "Installera Prologue på en Linux-server – Hosta din egen ljudboksplattform"
description: "Lär dig hur du installerar och kör en Prologue-kompatibel ljudboksserver på din Linux VPS med antingen Docker eller manuell installation → Läs mer nu"
sidebar_label: Installera Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

[Prologue](https://prologue.audio/) är en modern plattform för att lyssna på ljudböcker, designad för att fungera med självhostade ljudboksservrar. Den låter dig streama, organisera och lyssna på ditt ljudboksbibliotek på flera enheter som iPhone, iPad, Apple Watch och CarPlay.

Istället för att förlita dig på molnbaserade ljudboksplattformar ger en självhostad setup dig full kontroll över din ljudboks-samling och streaminginfrastruktur. När servern är konfigurerad kopplar Prologue-mobilappen upp sig mot den och synkar uppspelningsstatus, bokmärken och lyssningshistorik.

I den här guiden lär du dig hur du sätter upp en Prologue-kompatibel ljudboksserver på en Linux VPS med två olika metoder:

- Manuell installation på en webbserver
- Docker-baserad deployment för enklare containerhantering

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Användningsområden för Prologue

Prologue kan användas i många situationer där användare vill ha full äganderätt och flexibilitet över sitt ljudboksbibliotek.

Vanliga användningsområden är:

- Hostning av en privat ljudboksstreamingplattform
- Hantering av stora ljudbokssamlingar i en centraliserad gränssnitt
- Synkronisering av uppspelning över flera enheter
- Fjärråtkomst till ljudböcker var som helst
- Skapa ett självhostat alternativ till kommersiella ljudboksplattformar

En självhostad setup säkerställer också att dina mediefiler förblir under din kontroll samtidigt som du kan bygga en skalbar ljudboksserver.



## Förutsättningar

Innan du installerar servern, se till att ditt system uppfyller följande krav.

| Hårdvara | Minimum | Rekommenderat |
|----------|---------|---------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Diskutrymme | 20 GB | 50 GB |

<InlineServiceLink />

Nödvändig mjukvara beror på installationsmetod:

Manuell setup:

- Linux-server
- Webbserver (Apache eller Nginx)
- PHP
- Databasserver

Docker-setup:

- Docker
- Docker Compose





## Förberedelser

Innan du börjar installationen, uppdatera dina systempaket.

```
sudo apt update
sudo apt upgrade
```


Verifiera att den nödvändiga runtime-miljön är installerad beroende på vald setup-metod. För Docker-installationer:

```
docker --version
docker compose version
```

Om Docker inte är installerat än, installera det först innan du fortsätter.



## Manuell installation

Den manuella installationen installerar applikationen direkt på din server utan containers. Den här metoden är användbar vid deployment på traditionella webbhotellsmiljöer.



### Ladda ner applikationen

Skapa först en projektmapp och ladda ner applikationsfilerna.

```
mkdir prologue-server
cd prologue-server
```


Klona sedan projektets repository:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Konfigurera webbservern

Flytta applikationsfilerna till din webbservers katalog. Exempel för [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Skapa en virtual host-konfiguration som pekar på applikationsmappen. Exempel på Apache-konfiguration:

```<VirtualHost *:80>
ServerName yourdomain.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Starta om webbservern efter konfigurationen.

```
sudo systemctl restart apache2
```



### Konfigurera miljöinställningar

Redigera konfigurationsfilen och uppdatera nödvändiga inställningar som databasanslutning och server-URL.

```
nano config.php
```


När konfigurationen är klar kommer webbgränssnittet vara tillgängligt via din konfigurerade domän eller server-IP.



## Docker-setup

Docker erbjuder en enklare deploymentsmetod genom att köra applikationen i en container.



### Skapa projektmapp

Skapa en mapp för Docker-deploymenten.

```
mkdir prologue-docker
cd prologue-docker
```



### Skapa Docker Compose-konfiguration

Skapa en Docker Compose-fil med `nano compose.yaml` och klistra in följande konfiguration:

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



### Starta containern

Starta containern med Docker Compose genom att köra `docker compose up -d` och kontrollera att containern körs med `docker ps`. Docker laddar automatiskt ner nödvändig image och startar ljudboksservern.



### Komma åt servern

När servern körs, öppna din webbläsare och navigera till:

```
http://DIN_SERVER_IP:13378
```

Byt ut DIN_SERVER_IP mot IP-adressen till din VPS. Vid första uppstart kommer du bli ombedd att:

- Skapa ett administratörskonto
- Konfigurera din ljudboksbibliotekskatalog
- Skanna och importera ljudboksfiler


När ditt bibliotek är konfigurerat kan du koppla Prologue-mobilappen till servern och börja streama din ljudbokssamling.



## Avslutning

Grattis! Du har nu framgångsrikt satt upp en Prologue-kompatibel ljudboksserver med antingen manuell installation eller Docker-baserad deployment.

Båda installationsmetoderna låter dig hosta din ljudbokssamling på din egen infrastruktur och streama den till dina enheter via Prologue-appen. Docker-setupen ger enklare underhåll och uppdateringar, medan manuell setup ger större kontroll över din webbservermiljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />