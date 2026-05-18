---
id: server-linux-prologue
title: "Prologue installeren op een Linux-server - Host je eigen luisterplatform voor audioboeken"
description: "Leer hoe je een Prologue-compatibele audioboekenserver installeert en runt op je Linux VPS met Docker of handmatige setup → Ontdek het nu"
sidebar_label: Prologue installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

[Prologue](https://prologue.audio/) is een modern luisterplatform voor audioboeken, ontworpen om samen te werken met zelfgehoste audioboekenservers. Hiermee kun je je audioboekenbibliotheek streamen, organiseren en beluisteren op meerdere apparaten zoals iPhone, iPad, Apple Watch en CarPlay.

In plaats van afhankelijk te zijn van cloud-gebaseerde audioboekenplatforms, geeft een zelfgehoste setup je volledige controle over je collectie en streaminginfrastructuur. Zodra de server is ingesteld, verbindt de Prologue mobiele app ermee en synchroniseert afspeelvoortgang, bladwijzers en luistergeschiedenis.

In deze gids leer je hoe je een Prologue-compatibele audioboekenserver op een Linux VPS uitrolt met twee verschillende methodes:

- Handmatige installatie op een webserver
- Docker-gebaseerde deployment voor makkelijk containerbeheer

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Gebruiksscenario’s van Prologue

Prologue is ideaal voor iedereen die volledige controle en flexibiliteit wil over zijn audioboekenbibliotheek.

Veelvoorkomende toepassingen zijn:

- Een privé streamingplatform voor audioboeken hosten
- Grote audioboekencollecties beheren in één centrale interface
- Afspeelvoortgang synchroniseren over meerdere apparaten
- Op afstand audioboeken benaderen, waar je ook bent
- Een zelfgehost alternatief creëren voor commerciële audioboekenplatforms

Met een zelfgehoste setup blijven je mediabestanden onder jouw beheer, terwijl je een schaalbare audioboekenserver bouwt.



## Vereisten

Check voordat je begint of je systeem aan de volgende eisen voldoet.

| Hardware | Minimaal | Aanbevolen |
|----------|----------|------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Schijfruimte | 20 GB | 50 GB |

<InlineServiceLink />

Benodigde software hangt af van de gekozen installatie:

Handmatige setup:

- Linux-server
- Webserver (Apache of Nginx)
- PHP
- Database server

Docker setup:

- Docker
- Docker Compose





## Voorbereiding

Update eerst je systeem pakketten.

```
sudo apt update
sudo apt upgrade
```


Check of de benodigde runtime omgeving geïnstalleerd is, afhankelijk van je setup. Voor Docker:

```
docker --version
docker compose version
```

Als Docker nog niet geïnstalleerd is, doe dat dan eerst.



## Handmatige Setup

Bij handmatige setup installeer je de applicatie direct op je server zonder containers. Handig voor traditionele webhostingomgevingen.



### Download de applicatie

Maak eerst een projectmap aan en download de bestanden.

```
mkdir prologue-server
cd prologue-server
```


Clone daarna de projectrepository:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Configureer de webserver

Verplaats de applicatiebestanden naar je webservermap. Voorbeeld voor [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Maak een virtual host configuratie die naar de applicatiemap wijst. Voorbeeld Apache-config:

```<VirtualHost *:80>
ServerName jouwdomein.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Herstart de webserver na het aanpassen.

```
sudo systemctl restart apache2
```



### Configureer de omgevingsinstellingen

Pas het configuratiebestand aan en update instellingen zoals databaseverbinding en server-URL.

```
nano config.php
```


Na configuratie is de webinterface bereikbaar via je domein of server IP.



## Docker Setup

Docker maakt het deployen makkelijker door de app in een container te draaien.



### Maak projectmap aan

Maak een map voor de Docker deployment.

```
mkdir prologue-docker
cd prologue-docker
```



### Maak Docker Compose configuratie

Maak een Docker Compose bestand aan met `nano compose.yaml` en plak deze configuratie:

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



### Start de container

Start de container met Docker Compose via `docker compose up -d` en check met `docker ps` of hij draait. Docker downloadt automatisch de benodigde image en start de audioboekenserver.



### Toegang tot de server

Als de server draait, open je je browser en ga je naar:

```
http://JOUW_SERVER_IP:13378
```

Vervang JOUW_SERVER_IP door het IP-adres van je VPS. Bij de eerste keer starten word je gevraagd om:

- Een admin account aan te maken
- Je audioboekenbibliotheek map te configureren
- Audioboeken te scannen en importeren


Na configuratie kun je de Prologue app verbinden met de server en beginnen met streamen.



## Conclusie

Gefeliciteerd! Je hebt succesvol een Prologue-compatibele audioboekenserver opgezet via handmatige installatie of Docker.

Beide methodes laten je je audioboeken op je eigen infrastructuur hosten en streamen via de Prologue app. Docker maakt onderhoud en updates makkelijker, terwijl handmatige setup je meer controle geeft over je webserveromgeving.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />