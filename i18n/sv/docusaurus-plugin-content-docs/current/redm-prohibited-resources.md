---
id: redm-prohibited-resources
title: "RedM: 'Resource contains prohibited logic?'"
description: "Förstå hur du skyddar din server från skadliga RedM-resurser och säkerställer säker, högpresterande gameplay → Lär dig mer nu"
sidebar_label: Resource contains prohibited logic
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Utvecklarna av RedM-resurser har under de senaste åren lagt ner mycket jobb på att skydda sin källkod med tekniker som obfuskering, IP-låsning, fjärrkodsladdning och andra metoder. Tyvärr leder dessa åtgärder ofta till problem som många redan känner till. Vissa av dessa verktyg saktar inte bara ner kodens prestanda rejält, utan skapar också en rad säkerhetsrisker.

Cfx.re har därför börjat blockera skadliga resurser som innehåller kod designad för att infektera servrar och andra resurser. Dessa resurser försöker ibland "sprida" sin kod till andra resurser för att ge tredje part tillgång till scripts och databaser. Det är viktigt att förstå att dessa resurser i princip kan jämföras med virus och därför utgör ett allvarligt hot.

<InlineVoucher />



## Vad det betyder

Vårt system kontrollerar alla resurser innan servern startar av säkerhetsskäl och stänger av alla resurser som identifieras som farliga. Det här steget är helt nödvändigt, så tyvärr finns det inga undantag här. Säkerheten går först!

Om någon av dina uppladdade resurser påverkas kommer serverkonsolen att ge mer info om det. Innehållet i den informationen kan till exempel se ut så här:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Hur du går vidare

Det första och viktigaste steget är att omedelbart ta bort alla skadliga resurser. Dessutom bör du bara installera resurser som kommer från pålitliga källor. Ett bra ställe att börja på är till exempel den officiella hemsidan eller [forumet](https://forum.cfx.re/c/development/releases/7) för RedM. Där finns ett brett utbud av resurser.

Som utvecklare eller om du har kontakt med utvecklaren rekommenderar vi att du kollar in **RedM Asset Escrow-systemet**, som utvecklats av Cfx.re i samarbete med **Tebex**. Mer info hittar du i det officiella [Cfx.re forum-inlägget](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Förbjudna resurser

Det finns tyvärr ingen officiell lista över resurser som kan trigga det här meddelandet. I princip bör du undvika resurser som använder andra obfuskeringstekniker eller som inte är baserade på RedM Asset Escrow-systemet.



## Slutsats
För att hålla din server säker och stabil är det viktigt att bara använda pålitliga resurser och ta bort alla flaggade direkt. Genom att följa dessa riktlinjer och använda RedM Asset Escrow-systemet kan du bidra till både säkerhet och efterlevnad inom RedM-ekosystemet. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />