---
id: beammp-authkey
title: "BeamMP: Skapa en Auth Key"
description: "Upptäck hur du genererar och använder en Auth Key för att lista din server offentligt och hantera åtkomst effektivt → Lär dig mer nu"
sidebar_label: Skapa en Auth Key
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Varför behöver jag en key?

En Auth Key krävs om servern ska visas i serverlistan, annars är den bara tillgänglig via direktanslutning.

<InlineVoucher />

## Förberedelser
För att skapa din egen authkey loggar vi först in på https://beammp.com/keymaster, vilket kräver ett Discord-konto.
När vi är inloggade klickar vi på "Keys" till vänster, vilket tar oss till översikten för Licensekeys:

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

Här klickar vi nu på den blå "here" för att skapa keyn:

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## Ange uppgifter

Nu kan vi fylla i uppgifterna så här:

- **Servernamn:** Ett namn för din server, det behöver inte vara samma som i inställningarna.
- **Server IP:** IP-adressen till din server, utan port.


### Ange IP

IP-adressen måste anges utan port, den hittar vi högst upp i vårt gränssnitt:

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## Skapa Key

Nu klickar vi på "Create", en key genereras då.

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## Ange Key

Nu öppnar vi inställningarna för vår gameserver och scrollar ner, här kan vi ange vår egen key under "Auth Key", slutresultatet ska se ut så här.

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

Nu sparar vi inställningarna och startar om servern.

Klart! Keyn är nu applicerad och servern bör snart dyka upp i listan.

<InlineVoucher />