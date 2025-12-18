---
id: dedicated-linux-password-change
title: "Dedikerad Server: Byt root-lösenord för Linux-server"
description: "Lär dig hur du säkert byter och hanterar ditt serverlösenord via webbgränssnitt eller konsol för bättre åtkomstkontroll → Läs mer nu"
sidebar_label: Byt Lösenord
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Webbgränssnitt

Lösenordet kan ändras via vårt webbgränssnitt. Öppna sidan "Åtkomst och Säkerhet", som du hittar till vänster i navigeringen.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

Fältet för root-lösenord finns där och där kan du ange det önskade lösenordet. 

:::info
Tänk på att lösenordet måste vara minst 8 tecken långt och innehålla både stora och små bokstäver (a-z/A-Z), siffror (1-9) samt specialtecken (!@=#$%&-?_;:.,). Om detta inte uppfylls kommer lösenordet inte att tillämpas på servern.
:::

När lösenordet är inskrivet dyker ett pop-up-meddelande upp som du bekräftar med "ok". 

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

Om alla krav är uppfyllda bekräftar systemet att lösenordet har ändrats framgångsrikt. 


✅ Lösenordet är nu ändrat. 


Från och med nu kan lösenordet ses i vårt webbgränssnitt i 3 timmar. Efter det raderas det av säkerhetsskäl. För att visa lösenordet klickar du bara på ögon-ikonen vid "Lösenord"

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Därefter visas ett pop-up-fönster där lösenordet visas.


## Serverkonsol

Lösenordet kan också ändras via Serverkonsolen, oavsett om du ansluter via Putty eller Serial Console.

:::info
Viktigt: Detta alternativ kan bara användas om du fortfarande har åtkomst till servern.
:::

När du är inloggad i konsolen kan du byta lösenord med kommandot "passwd". Därefter måste du skriva in lösenordet igen för att bekräfta det. Om detta görs och lösenorden matchar bekräftar konsolen ändringen.


Om lösenorden inte är lika avbryter konsolen operationen. I så fall måste du köra kommandot "passwd" igen.

:::info
Viktigt: Om du byter lösenord via konsolen kan det inte visas i vårt webbgränssnitt under Åtkomst och Säkerhet i 3 timmar.
:::


