---
id: ets2-gslt
title: "Euro Truck Simulator 2: Skapa en GSLT (Steam Game Server Login Token)"
description: "Förstå hur du autentiserar din dedikerade spelserver med en Steam Game Server Login Token för korrekt listning och VAC-skydd → Lär dig mer nu"
sidebar_label: Skapa GSLT
services:
  - gameserver-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

**GSLT (Game Server Login Token)** är en inloggningstoken som krävs av Steam/Valve för att köra dedikerade servrar för vissa spel. Den är kopplad till ett Steam-konto och säkerställer att servern är korrekt autentiserad.

Utan en giltig GSLT kan berörda servrar antingen inte visas i den offentliga serverlistan eller inte kunna använda VAC-skydd.

<InlineVoucher />



## Krav

För att använda en Game Server Login Token (GSLT) måste ditt Steam-konto inte vara begränsat, avstängt eller uteslutet från communityn. Det måste vara kopplat till en verifierad smartphone, och du måste äga spelet du vill hosta. Du kan skapa upp till 1000 tokens per konto.

Tänk på att du är fullt ansvarig för dina tokens. Om en token missbrukas eller blir avstängd kan du förlora tillgången till det kopplade spelet permanent. Dela aldrig dina tokens, och om du har gjort det, radera dem omedelbart. När ditt Steam-lösenord återställs genereras alla tokens automatiskt på nytt. Tokens som inte används under en längre tid kommer att gå ut men kan skapas på nytt när som helst.



## Skapa GSLT
För att skapa en Game Server Login Token, logga in med ditt Steam-konto och gå till [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

När du är inloggad kan du skapa en ny token via formuläret på sidan. I fältet **App ID** anger du App ID `227300` som tillhör **Euro Truck Simulator 2**. Se till att ange rätt ID, eftersom token inte fungerar med fel värde.

I fältet **Memo** kan du lägga till en valfri beskrivning. Det hjälper dig att senare identifiera tokenens syfte, till exempel serverns namn eller roll. När båda värdena är ifyllda klickar du på **Create** för att generera token. Token visas sedan och kan användas i din servers startkonfiguration.

![img](https://screensaver01.zap-hosting.com/index.php/s/Es5q7j3KT3wyiad/download)

## Serverkonfiguration

Inloggningstoken måste nu läggas till i din serverkonfiguration. Öppna din spelservers administrationsgränssnitt och gå till avsnittet **Settings**. Klistra in token i fältet märkt **GSL Token** och spara.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Driva flera Euro Truck Simulator 2-servrar
När du driver flera **Euro Truck Simulator 2**-servrar behöver du en GSLT för varje server. Det är <u>**inte**</u> möjligt att driva flera servrar med en och samma GSLT.
:::



## Slutsats

GSLT har skapats och lagts till i din serverkonfiguration. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />