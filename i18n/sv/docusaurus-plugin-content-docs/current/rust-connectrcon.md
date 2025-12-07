---
id: rust-connectrcon
title: "Rust: Anslut till servern via RCON"
description: "Upptäck hur du fjärrstyr din server med RCON för smidig kommandokörning och kontroll → Lär dig mer nu"
sidebar_label: Anslut via RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad är RCON?

RCON är ett protokoll för att köra kommandon på servern utan att ha direkt tillgång till konsolen.

<InlineVoucher />

### Aktivera WebRCON

Först måste du se till att Web RCON är aktiverat innan du kan ansluta.
För att aktivera det, gå till fliken **Inställningar**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

Och aktivera det sedan direkt på den här sidan.
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
Servern måste startas om för att ändringen ska träda i kraft. 
:::

### Installera RCON-program

Du behöver ansluta via ett RCON-program. Det finns flera olika att välja på.
I det här exemplet, och som rekommendation, kan du ladda ner [RustAdmin](https://www.rustadmin.com/).

Du kan installera det direkt via knappen på deras webbplats.
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## Anslut via RCON

När du har öppnat WebAdmin, klicka på **Server** högst upp. Sedan klickar du på **Connect**.

:::info
Din server måste vara helt ONLINE för att RCON ska kunna nå den. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

Du kommer då till en konfigurationssida.
Här fyller du i din servers information.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
TIPS: Din RCON-port och RCON-lösenord hittar du under fliken **Inställningar** där du aktiverade WebRCON. 
:::

När du fyllt i uppgifterna kan du spara konfigurationen.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

Klicka sedan på Server -> Connect.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

Om anslutningen lyckas ser du **Connected** i gröna bokstäver längst ner.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

Nu kan du använda RCON för att hantera din server! :) 


<InlineVoucher />