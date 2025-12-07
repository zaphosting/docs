---
id: fivem-prohibited-resources
title: "FiveM: 'Resource contains prohibited logic?'"
description: "Upptäck hur du skyddar din FiveM-server från skadliga resurser och säkerställer säker, högpresterande gameplay → Läs mer nu"
sidebar_label: Resurs innehåller förbjuden logik
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Utvecklarna av FiveM-resurser har under de senaste åren lagt ner mycket arbete på att skydda sin källkod med tekniker som obfuskering, IP-låsning, fjärrkodsladdning och andra metoder. Tyvärr leder dessa åtgärder ofta till problem som många redan känner till. Vissa av dessa verktyg saktar inte bara ner kodens prestanda rejält, utan introducerar även en rad säkerhetsrisker.

Cfx.re har därför börjat blockera skadliga resurser som innehåller kod designad för att infektera servrar och andra resurser. Dessa resurser försöker ibland "sprida" sin kod till andra resurser för att ge tredje part tillgång till scripts och databaser. Det är viktigt att förstå att dessa resurser i princip kan jämföras med virus och därför utgör ett allvarligt hot.

<InlineVoucher />



## Vad det betyder

Vårt system kontrollerar alla resurser innan servern startar av ovan nämnda säkerhetsskäl och inaktiverar alla resurser som identifieras som farliga. Detta steg är helt nödvändigt, och därför finns tyvärr inget utrymme för undantag här. Säkerheten går först!

Om någon av dina uppladdade resurser påverkas kommer serverkonsolen att ge mer information om detta. Innehållet i denna information kan till exempel se ut så här:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Hur du går vidare

Som första och viktigaste steg rekommenderar vi att du omedelbart tar bort alla skadliga resurser. Dessutom bör du bara installera resurser som kommer från pålitliga källor. Ett bra ställe att börja på är till exempel den officiella webbplatsen eller [Forumet](https://forum.cfx.re/c/development/releases/7) för FiveM. Där finns ett brett utbud av resurser.

Som utvecklare eller i kontakt med utvecklare rekommenderar vi att du använder **FiveM Asset Escrow-systemet**, som utvecklats av Cfx.re i samarbete med **Tebex**. Mer info hittar du i det officiella [Cfx.re Forum-inlägget](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).



## Förbjudna resurser

Det finns tyvärr ingen officiell lista över resurser som kan trigga detta meddelande. I princip bör du undvika resurser som använder andra obfuskeringstekniker eller som inte bygger på FiveM Asset Escrow-systemet.



## Slutsats
För att hålla en säker och stabil servermiljö är det avgörande att bara använda pålitliga resurser och ta bort alla flaggade resurser direkt. Genom att följa dessa riktlinjer och använda FiveM Asset Escrow-systemet kan du bidra till både säkerhet och efterlevnad inom FiveM-ekosystemet. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />