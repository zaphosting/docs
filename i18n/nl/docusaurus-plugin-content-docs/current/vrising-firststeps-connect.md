---
id: vrising-firststeps-connect
title: "V Rising: Verbinden met je V Rising Server"
description: "Ontdek hoe je direct of via de serverlijst verbinding maakt met je V Rising server voor een soepele game-setup → Leer het nu"
sidebar_label: Verbinden met Server
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids laten we je zien hoe je verbinding maakt met je V Rising server. Er zijn twee manieren: direct via het IP-adres van je server of via de serverlijst. We raden aan om je server eerst naar wens in te stellen, check daarvoor onze [Server Configuratie](vrising-configuration.md) gids.

<InlineVoucher />

## Direct verbinden via IP

### Server IP vinden

Eerst moet je het IP en de poort van je V Rising server weten om direct te kunnen verbinden. Ga simpelweg naar je [ZAP-Hosting webinterface](https://zap-hosting.com/en/customer/) en zorg dat je het volledige IP en de poort bij de hand hebt.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Als je je V Rising server op een externe dedicated server draait, is het IP dat van de hostmachine en de poort is degene die je in je configuratiebestand hebt ingesteld (standaard is dit 9876). Check onze [Server Configuratie](vrising-configuration.md) gids voor meer info over de poort.

### Verbinden in-game

Start V Rising via je game launcher. In het hoofdmenu kies je **Play**, gevolgd door **Online Play**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Selecteer de gamemode die je wilt spelen, of druk onderin rechts op **Show all Servers** om direct naar de serverbrowser te gaan.

Klik nu op de knop **Direct Connect** onderaan en vul je IP in, gevolgd door de poort, bijvoorbeeld: `123.456.679.123:9876`. Is er een wachtwoord? Dan vraagt het spel hierna om deze in te voeren.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Lukt het niet om verbinding te maken en krijg je een timeout? Check dan of het IP en de poort kloppen en of je server online is. Gebruik de console in je webinterface om te debuggen.

## Verbinden via Serverlijst

De makkelijkste manier om verbinding te maken is via de serverlijst. Dit vereist wel dat je server openbaar staat in de serverconfiguratie.

Check onze [Server Configuratie](vrising-configuration.md) gids om de juiste `Name` en `ListOnMasterServer` parameters toe te voegen in je configuratiebestand of via het webinterface paneel.

Als dat geregeld is, kies je in het hoofdmenu weer **Play**, daarna **Online Play** en druk je op **Show all Servers** rechtsonder. Gebruik de serverbrowser om je server te vinden met filters zoals naam, gamemode, moeilijkheidsgraad en meer.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />