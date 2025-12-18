---
id: terraria-tshock-add-admin
title: "Terraria: Bli serveradmin (tShock)"
description: "Upptäck hur du ger administratörsrättigheter på din Terraria-server för full kontroll och hantering → Lär dig mer nu"
sidebar_label: Bli admin (tShock)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Skaffa token

För att kunna registrera dig som admin på din Terraria-server behöver du din unika token.  
Denna token genereras när du startar servern för första gången, sedan öppnar du live-konsolen där du hittar token:

![](https://screensaver01.zap-hosting.com/index.php/s/5cEQYgBgxAYQRcx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/HEYwEWe5c3DPZ6E/preview)

I det här exemplet är token **4914096**.

## Ange token i spelet

För att kunna registrera dig som admin, anslut till din server i Terraria och skriv kommandot **/setup 4914096** i spelet.  
Självklart byter du ut token **4914096** mot din egen.

![](https://screensaver01.zap-hosting.com/index.php/s/tadkJkQf5cE3dTB/preview)

### Följande meddelande visas då i chatten:

![](https://screensaver01.zap-hosting.com/index.php/s/JDfKNpaeB63pCeB/preview)


## Lägg till en admin

Nu kan du lägga till en ny admin på din server med kommandot **/user add USERNAME PASSWORD owner**.  
Du byter ut **USERNAME** mot ditt namn och som **PASSWORD** väljer du ett valfritt lösenord som du kan använda för att logga in som admin på din server i framtiden.

![](https://screensaver01.zap-hosting.com/index.php/s/iX62CLtn577NfFQ/preview)  
![](https://screensaver01.zap-hosting.com/index.php/s/xeP8Y8sx66LkSJQ/preview)

:::info
Observera att ditt lösenord måste vara minst 4 tecken långt!
:::

## Logga in som admin

När du har registrerat dig som admin i spelet kan du logga in med följande kommando:  
**/login USERNAME PASSWORD**

Byt såklart ut **USERNAME** mot ditt namn och **PASSWORD** mot lösenordet du satte tidigare.

![](https://screensaver01.zap-hosting.com/index.php/s/ewTra2Fi2yia9jS/preview)

Nu är du inloggad som admin på din server och kan hantera den med olika kommandon.

<InlineVoucher />