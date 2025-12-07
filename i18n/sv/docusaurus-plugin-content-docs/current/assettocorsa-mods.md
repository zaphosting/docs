---
id: assettocorsa-mods
title: "Assetto Corsa: Installera mods på en server"
description: "Upptäck hur du sätter upp och anpassar din Assetto Corsa-server för bästa spelupplevelse → Lär dig mer nu"
sidebar_label: Installera Mods
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Anslut till FTP

Innan vi kan konfigurera servern måste [FTP-åtkomst](gameserver-ftpaccess.md) vara uppsatt:

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

När detta är klart kan du nu ansluta och öppna servermappen:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Förberedelser

Först öppnar vi Assetto Corsa-mappen, det gör vi genom att öppna Steam och högerklicka på "Assetto Corsa" i Spellistan

Nu öppnar vi "Lokala filer" och öppnar de lokala spelfilerna:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Nu öppnar vi mappen "server", där finns en fil som heter "acServerManager", den öppnar vi



## Ställ in bilar

Nu byter vi till fliken "Cars / Entry List", här kan vi lägga till nya bilar:


För att aktivera bilar måste kryssrutan till vänster vara ikryssad

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

I mitten ser du bilar som kan placeras på startgridden, här kan vi välja bilar i de färger som ska finnas på gridden:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
För att välja flera bilar kan du kryssa i flera rutor för att lägga till olika bilar i mitten.


Tänk på att alla bilplatser ska vara fyllda och att du inte sätter fler än antalet tillgängliga platser.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Ladda upp konfiguration

Nu kan vi spara konfigurationen med knappen "Save" och exportera den med knappen "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Här väljer vi en ledig mapp där konfigurationsdata ska sparas.

Nu kan AC Server Manager stängas, och vi öppnar mappen där konfigurationerna exporterades till.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Dessa konfigurationer kan nu kopieras via Drag & Drop till "cfg"-mappen på din spelserver.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Ladda upp serverinnehåll

Nu måste vi generera innehållet för servern så att Car & Map Mods laddas på servern. För att göra detta klickar vi först på "Update Server Content" längst ner

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Denna process kan ta några minuter, alla banor & bilar konverteras nu till serverfiler.

:::info
När processen är klar kan ett meddelande om "Could not update" dyka upp, det är inget problem.
:::

Nu öppnar vi "Server"-mappen där AcServerManager ligger, där finns en mapp som heter "Content" som vi nu laddar upp till vår Assetto Corsa-server via Drag & Drop och skriver över den gamla "Content"-mappen:

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

När innehållet är uppladdat är carmods installerade och aktiva efter en serveromstart.

<InlineVoucher />