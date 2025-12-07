---
id: dedicated-linux-cockpit
title: "Dedikerad Server: Installation av Cockpit"
description: "Upptäck hur du enkelt hanterar Linux-servrar med Cockpits webbgränssnitt för övervakning och administration → Lär dig mer nu"
sidebar_label: Installera Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Cockpit är ett webbgränssnitt för att hantera en eller flera Linux-servrar (kluster). Från enkla loggutskrifter till att hantera RAID, erbjuder Cockpit många funktioner.  
Cockpit passar både nybörjare och avancerade användare som vill ha koll på allt viktigt snabbt. Dessutom kan du nå det från nästan vilken enhet som helst.  
Projektets hemsida hittar du på https://cockpit-project.org/. 

:::info
Denna guide visar installation för Debian (från Buster) / Ubuntu (från Bionic Beaver). Installationen finns även på projektets sida för Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux och Tumbleweed.  
:::

## Installation

Först måste servern uppdateras:
```
// Uppdatera
sudo apt update; sudo apt upgrade -y
```
Därefter kan installationen göras:
```
// Installera Cockpit
sudo apt install cockpit -y
```
När installationen är klar kan du nå Cockpit-panelen via IP:9090.  
Inloggningen sker med vanliga inloggningsuppgifter för servern/användaren.  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)