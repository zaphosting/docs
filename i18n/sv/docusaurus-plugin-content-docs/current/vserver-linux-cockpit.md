---
id: vserver-linux-cockpit
title: "Installera Cockpit på en Linux-server - Hantera din server via webbgränssnitt"
description: "Upptäck hur du effektivt hanterar Linux-servrar med Cockpits webbgränssnitt för både nybörjare och proffs → Lär dig mer nu"
sidebar_label: Installera Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Cockpit är ett webbgränssnitt för att hantera en eller flera Linux-servrar (kluster). Från enkla loggutskrifter till att hantera RAID, erbjuder Cockpit många funktioner.  
Cockpit passar både nybörjare och avancerade användare som vill se/hantera allt viktigt snabbt. Dessutom kan du nå det från nästan vilken enhet som helst.  
Projektets hemsida hittar du på https://cockpit-project.org/. 

## Installera Cockpit med One Click Apps Installer

Du kan installera **Cockpit** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-inställningen, öppna appkatalogen, sök efter **Cockpit** och starta distributionen med dina föredragna projekt-, miljö- och domäninställningar. Detta ger dig ett snabbt och användarvänligt sätt att deploya och hantera **Cockpit** utan manuell kommandoradskonfiguration, samtidigt som du får fördelarna av integrerad webbaserad hantering, stöd för egna domäner och SSL-certifikat där det är tillgängligt.

:::info
Denna guide förklarar installationen för Debian (från Buster) / Ubuntu (från Bionic Beaver). Installationen finns även på projektets sida för Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux och Tumbleweed.  
:::

<InlineVoucher />

## Installation

Först måste servern uppdateras:
```
// Uppdatera
sudo apt update; sudo apt upgrade -y
```
Därefter kan installationen genomföras: 
```
// Installera Cockpit
sudo apt install cockpit -y
```
När installationen är klar kan du nå cockpit-panelen via IP:9090.  
Inloggningen sker med vanliga server-/användaruppgifter. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Avslutning

Grattis, du har nu installerat och konfigurerat Cockpit! Om du har fler frågor eller problem, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 

<InlineVoucher />