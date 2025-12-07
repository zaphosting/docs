---
id: gameserver-restartplaner
title: 'Gameserver: Restartplaner - Utför serveromstarter automatiskt'
description: "Upptäck hur du automatiserar dagliga omstarter av din gameserver för bättre prestanda och uptime → Lär dig mer nu"
sidebar_label: Restartplanerare
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Restartplaneraren är en funktion för gameservrar som låter dig skapa en automatisk omstart för att starta om servern automatiskt vid samma tid varje dag.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Så här ställer du in en RESTARTPLANERARE för din Server!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>


:::info
Den här funktionen finns endast för gameservrar.
:::

Den här funktionen hittar du i gränssnittet för din gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Skapa nya poster

:::info
***Obs:*** Ändringar i restartplaneraren träder i kraft först efter att servern har startats om.
:::

Vill du lägga till en automatisk omstart klickar du på den grå "**+**"-knappen.

I nästa fönster kan du välja mellan Veckovis och Daglig omstart. I vårt exempel vill vi ha fyra omstarter per dag med 6 timmars intervall. Därför väljer vi "**Daglig**" och sätter tiden till "**06:00**". Bekräfta med "**Spara**".

Den här proceduren upprepar du för varje önskad automatisk omstart. Om du anger "**24:00**" visas ett felmeddelande. För att undvika detta måste du använda "**00:00**" istället.

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Starta offline-server

Om den här inställningen är aktiverad startas en stoppad server automatiskt vid den angivna tiden. Om den är avstängd kommer vår system bara att starta om gameservern om den var "**Online**" innan.

## Kommandoval

Kommandovalet bland de angivna automatiska omstarterna är till för att automatiskt köra kommandon precis innan omstarten sker. Antalet tillgängliga kommandon beror på spelet. Alla spel har inte stöd för detta.

Vill du varna spelare i förväg kan du använda *say*-kommandot i Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Fördröjning

Fältet Fördröjning definierar intervallet mellan när kommandot körs och när servern startas om. Denna fördröjning anges i **sekunder**. Vill du till exempel ha en fördröjning på 5 minuter ska värdet 300 anges.

<InlineVoucher />