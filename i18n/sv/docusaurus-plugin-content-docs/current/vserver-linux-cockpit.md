---
id: vserver-linux-cockpit
title: "VPS: Installation av Cockpit"
description: "Upptäck hur du enkelt hanterar Linux-servrar med Cockpits webbgränssnitt – perfekt för både nybörjare och proffs → Lär dig mer nu"
sidebar_label: Installera Cockpit
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Cockpit är ett webbgränssnitt för att hantera en eller flera Linux-servrar (kluster). Från enkla loggutskrifter till att hantera RAID, Cockpit erbjuder massor av funktioner.  
Cockpit passar både nybörjare och avancerade användare som vill ha koll på allt viktigt snabbt. Dessutom kan du nå det från nästan vilken enhet som helst.  
Projektets hemsida hittar du på https://cockpit-project.org/. 

:::info
Den här guiden visar installation för Debian (från Buster) / Ubuntu (från Bionic Beaver). Installationen finns även på projektets sida för Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux och Tumbleweed.  
:::

<InlineVoucher />

## Installation

Först måste servern uppdateras:
```
// Uppdatera
sudo apt update; sudo apt upgrade -y
```
Sedan kan installationen göras: 
```
// Installera Cockpit
sudo apt install cockpit -y
```
När installationen är klar kan du nå cockpit-panelen via IP:9090.  
Inloggningen sker med vanliga inloggningsuppgifter för servern/användaren. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Avslutning

Grattis, du har nu installerat och konfigurerat Cockpit! Har du fler frågor eller problem är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 

<InlineVoucher />