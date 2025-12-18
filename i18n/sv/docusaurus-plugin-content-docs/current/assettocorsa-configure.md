---
id: assettocorsa-configure
title: "Assetto Corsa: Konfigurera din server"
description: "Upptäck hur du konfigurerar din Assetto Corsa-server med custom maps och bilar för bästa spelupplevelse → Lär dig mer nu"
sidebar_label: Konfigurera Server
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Anslut till FTP

Innan vi kan konfigurera servern måste [FTP-åtkomst](gameserver-ftpaccess.md) vara uppsatt:

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

När detta är klart kan du nu ansluta och öppna servermappen:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Förberedelser

Först öppnar vi Assetto Corsa-mappen, det gör vi genom att öppna Steam och högerklicka på "Assetto Corsa" i Spellistan

Nu öppnar vi "Lokala filer" och öppnar de lokala spelfilerna:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Nu öppnar vi mappen "server", där finns en fil som heter "acServerManager", den öppnar vi

## Välj Bana

Vi är nu inne i "AC Server Manager"-gränssnittet, här kan vi skapa och hantera serverkonfigurationer, först skapar vi en ny config

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Nu kan vi konfigurera vår server, i vårt fall vill vi bara ändra banor & bilar, för det öppnar vi fliken "Tracks"

Här kan vi klicka på vår favoritbana, ovanför kan vi justera antalet bilar på banan.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Se till att du inte anger fler bilar än antalet slots på din server, annars startar inte servern
:::

## Välj Bilar

Nu byter vi till fliken "Cars / Entry List", här kan vi lägga till nya bilar:


För att aktivera bilar måste bocken vara ikryssad till vänster

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

I mitten ser du bilar som kan placeras på startgridden, här kan vi välja bilar i de färger som ska finnas på gridden:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
För att välja flera bilar kan du kryssa i flera rutor för att lägga till olika bilar i mitten.

Tänk på att alla bilplatser ska fyllas och att du inte sätter fler än antalet tillgängliga slots.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Ladda upp Config

Nu kan vi spara configen med "Save"-knappen och exportera den med "Export"-knappen:

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Här väljer vi en ledig mapp där config-filerna sparas.

Nu kan AC Server Manager stängas, vi öppnar mappen där config-filerna exporterades till.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Dessa config-filer kan nu kopieras via Drag&Drop in i "cfg"-mappen på din spelserver.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

Servern kan nu startas med den nya configen.

<InlineVoucher />