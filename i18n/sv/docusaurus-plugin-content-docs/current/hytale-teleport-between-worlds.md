---
id: hytale-teleport-between-worlds
title: "Hytale: Teleportera mellan världar"
description: "Upptäck hur du teleporteras mellan världar på en Hytale-server → Läs mer nu"
sidebar_label: Teleportera mellan världar
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att teleportera mellan världar på en Hytale-server låter spelare smidigt flytta sig från en världsmiljö till en annan. Den här funktionen används ofta på servrar som har flera världar, som hubbar, äventyrskartor, kreativa områden eller separata spelzoner.

:::info Early Access-meddelande

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddsupport och installationsflöden fortsätta att förändras över tid.

:::

<InlineVoucher />


## Teleportering

Världsteleportkommandon kan köras från serverkonsolen eller av en operatör i spelets chatt. När kommandot körs från konsolen påverkas den angivna spelaren direkt. När det körs i spelet måste spelaren som utför kommandot ha operatörs- eller motsvarande rättigheter.

För att teleportera en spelare från deras nuvarande värld till en annan, använd följande kommando:

```
/world teleport <playername> <worldname>
```

Parametern `<playername>` anger namnet på spelaren som ska teleporteras. Parametern `<worldname>` specificerar namnet på destinationsvärlden.

Teleportering mellan världar kräver att destinationsvärlden finns tillgänglig på servern. Om mål-världen inte är laddad just nu kommer teleportkommandot inte att lyckas. För att göra en värld tillgänglig för teleportering, ladda den med följande kommando:

```
/world load <worldname>
```


:::tip Översikt över världens namn

Om du är osäker på det exakta namnet på en värld kan du visa en lista över alla tillgängliga världar med kommandot `/world list`.
:::


## Slutsats

Att teleportera mellan världar är ett kraftfullt verktyg för att hantera multi-världsservrar i Hytale. Genom att använda rätt världskommandon från konsolen eller spelets chatt och se till att destinationsvärldarna är laddade kan admins erbjuda smidig och flexibel navigation mellan olika servermiljöer.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂


<InlineVoucher />