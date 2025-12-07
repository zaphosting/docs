---
id: hl1-fastdl
title: "Half-Life 1: Ställa in FastDL"
description: "Upptäck hur du optimerar leverans av spelinnehåll med FastDL via ZAP-Hosting för snabbare nedladdningar och bättre serverprestanda → Läs mer nu"
sidebar_label: FastDL
services:
  - gameserver-hl1
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

FastDL (Fast Download) är en metod för att leverera custom content som kartor, ljud eller modeller via en extern webbserver istället för direkt från spelservern. Det ger snabbare nedladdningar för spelare och minskar belastningen på servern.

För att använda FastDL behöver du tillgång till en publik HTTP-webbserver. Ett grymt alternativ är ett **ZAP-Hosting Webspace-paket**, som är perfekt för att leverera spelinnehåll. Den här guiden visar hur du sätter upp FastDL med ZAP webspace.

<InlineVoucher />

## Krav

Du behöver en aktiv Half-Life 1-server hos ZAP-Hosting och ett extra webspace-paket. FTP-åtkomst eller tillgång till Filhanteraren måste finnas både för spelservern och webspace.

På serversidan måste filerna du vill distribuera (t.ex. `.bsp`-kartor, ljudfiler eller modeller) redan vara organiserade korrekt. Samma mappstruktur måste sedan finnas på webspace för att FastDL ska fungera smidigt.

## Förbered webspace

För att hantera och ladda upp dina FastDL-filer rekommenderar vi att du använder **Filhanteraren** i ZAP webspace-gränssnittet. Den når du direkt via webbpanelen under **Webspace > Filhanterare**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

I root-mappen på ditt webspace skapar du en mapp som heter `fastdl`. Inuti den skapar du undermappar som `maps`, `sound` eller `models` beroende på vad du ska leverera. Mappstrukturen måste exakt spegla den som används på din Half-Life 1-server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Innan du laddar upp filerna, se till att de är **komprimerade i `.bz2`-format** (bzip2). De flesta Source-baserade motorer kräver att filer levereras i detta format. Exempelvis ska en karta `custom_map.bsp` laddas upp som `custom_map.bsp.bz2`.

:::info Komprimera med 7-Zip
För att förbereda dina filer för FastDL kan du använda verktyg som **7-Zip** för att komprimera dem till `.bz2`. Högerklicka på filen, välj **7-Zip > Lägg till arkiv...**, välj `bzip2` som arkivformat och bekräfta.
:::

När du laddat upp de komprimerade filerna i rätt mappar, se till att **alla mappar och filer har korrekta läsrättigheter** så att de är publikt åtkomliga. Filhanteraren låter dig justera rättigheter för mappar och filer.

När allt är uppladdat och rättigheterna är satta, kommer FastDL-innehållet vara tillgängligt via denna publika URL:

```
https://[ditt-domännamn].zap.cloud/fastdl/
```

Testa gärna genom att öppna länken i din webbläsare och kolla att filerna går att nå.

## Konfigurera spelservern

I ZAP-gränssnittet under serveradministrationen, öppna `server.cfg` via sidan **Configs** och lägg in följande rader:

```cfg
sv_downloadurl "https://[ditt-domännamn].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Se till att FastDL-URL:en exakt matchar strukturen på ditt webspace. Spara filen och starta om din spelserver för att ändringarna ska börja gälla.

## Sammanfattning

FastDL går snabbt och smidigt att sätta upp med ditt egna ZAP webspace. Det ger snabb och effektiv leverans av custom content och förbättrar upplevelsen för alla som spelar på din Half-Life 1-server.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />