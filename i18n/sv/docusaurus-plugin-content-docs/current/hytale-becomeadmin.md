---
id: hytale-becomeadmin
title: "Hytale: Bli admin (operator) på din server"
description: "Lär dig hur du ger adminrättigheter för full kontroll över servern och effektiv hantering av spelets funktioner → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att ge adminrättigheter på en Hytale-server låter pålitliga spelare hjälpa till att sköta servern. Admins, eller operators, kan köra serverkommandon, hantera spelare och hjälpa till med servermoderering. Det gör det enklare för serverägare att delegera rutinuppgifter och håller spelupplevelsen smidig.

:::info Early Access Notice

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, modstöd och installationsflöden fortsätta att ändras över tid.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/2NnFBkPdsDoBYZj/preview)

<InlineVoucher />



## Tilldela rättigheter



Admins på en Hytale-server får operatorstatus, vilket ger dem utökade kommandorättigheter. Detta kan göras antingen via **serverkonsolen** eller **in-game-kommandon** av en befintlig operator. För att ge operatorrättigheter till en spelare, skriv följande i serverkonsolen eller in-game med tillräckliga rättigheter:

```
/op add <playername>
```



## Ta bort rättigheter

Om en spelare inte längre behöver adminåtkomst eller inte ska ha utökade rättigheter kan deras operatorstatus tas bort när som helst:

```
/op remove <playername>
```

När den är borttagen återgår spelaren till standardrättigheter och kan inte längre använda adminkommandon.



## Sammanfattning

Att bli admin på en Hytale-server via operatorrättigheter är en viktig del av serverhanteringen, som låter pålitliga spelare hjälpa till med moderering och administrativa uppgifter. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂