---
id: vserver-linux-password-change
title: "VPS: Byt root-lösenord för Linux-server"
description: "Lär dig hur du säkert byter och hanterar ditt serverlösen via webbgränssnitt eller konsol för bättre åtkomstkontroll → Läs mer nu"
sidebar_label: Byt Lösenord
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Webbgränssnitt

Lösenordet kan bytas via vårt webbgränssnitt. Öppna sidan "Åtkomst och Säkerhet", som du hittar till vänster i navigeringen.

![](https://screensaver01.zap-hosting.com/index.php/s/9nMFt4ZAGmQEHnZ/preview)

Fältet för root-lösenord finns där och där kan du ange det önskade lösenordet.

:::info
Tänk på att lösenordet måste vara minst 8 tecken långt och innehålla både stora och små bokstäver (a-z/A-Z), siffror (1-9) samt specialtecken (!@=#$%&-?_;:.,). Om detta inte uppfylls kommer det inte att tillämpas på servern.
:::

När lösenordet är inskrivet dyker ett pop-up-meddelande upp som du bekräftar med "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/sybJP9oeJKY2SLr/preview)

Om alla krav är uppfyllda bekräftar systemet att lösenordet har ändrats.

✅ Lösenordet är nu ändrat.

Från och med nu kan lösenordet ses i vårt webbgränssnitt i 3 timmar. Efter det raderas det av säkerhetsskäl. För att visa lösenordet klickar du bara på ögon-ikonen vid "Lösenord".

![](https://screensaver01.zap-hosting.com/index.php/s/rFKrYA6en8Z9ypz/preview)

Därefter visas ett pop-up-fönster där lösenordet visas.


## Serverkonsol

Lösenordet kan också bytas via Serverkonsolen, oavsett om du ansluter via Putty eller Serial Console.

:::info
Viktigt: Det här alternativet kan bara användas om du fortfarande har åtkomst till servern.
:::

När du är inloggad i konsolen kan du byta lösenord med kommandot "passwd". Därefter måste du skriva in lösenordet igen för att bekräfta det. Om det stämmer överens med det första bekräftar konsolen ändringen.

Om de två lösenorden inte är lika avbryter konsolen operationen. Då måste du köra kommandot "passwd" igen.

:::info
Viktigt: Om du byter lösenord via konsolen kan det inte visas i vårt webbgränssnitt under Åtkomst och Säkerhet i 3 timmar.
:::

<InlineVoucher />