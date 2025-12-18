---
id: fivem-serverbanner
title: "FiveM: Konfigurera din egen serverbanner"
description: "Upptäck hur du kan förbättra utseendet på din FiveM-server med en egen banner för en unik, proffsig look → Läs mer nu"
sidebar_label: Konfigurera serverbanner
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En egen serverbanner är ett enkelt men grymt sätt att få din FiveM-server att sticka ut. Den ger din server ett unikt utseende i serverlistan och tillför en proffsig touch när spelare ansluter.

Oavsett om du använder en egen skärmdump eller en designad grafik, hjälper en banner din community att känna igen din server direkt och gör ett starkt första intryck.

<InlineVoucher />

## Konfiguration

För att sätta upp en egen serverbanner för din FiveM-server behöver du först en passande bild. Vi rekommenderar att du tar en skärmdump i spelet som representerar din server bra. Du kan snabbt skapa en skärmdump i spelet genom att trycka på **F8** medan du spelar och använda kommandot `screenshot`.

När du har din skärmdump, ladda upp den till en bildhostingstjänst som ger en **direktlänk** till bildfilen (t.ex. som slutar på `.jpg` eller `.png`). Se till att bilden är åtkomlig via en direkt URL.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview)

För att lägga till bannern, öppna din txAdmin-panel och gå till serverns konfigurationsinställningar. Leta upp fältet **Server banner URL** och klistra in din direkta bildlänk där. Spara ändringarna. Din egna banner kommer nu synas i serverinformationen när spelare ser din server i listan.

```
# Sätt en valfri serverinfo- och anslutningsbanner bild-url.
# Storleken spelar ingen roll, vilken bannerstorlek som helst funkar.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Byt ut exempel-URL:erna mot den direkta länken till din uppladdade bild. Spara filen i CFG-editorn och starta om din server för att ändringarna ska träda i kraft.

## Avslutning

Din egna banner kommer nu synas i serverlistan och under anslutningsskärmen, vilket gör att din server ser mer unik och proffsig ut. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />