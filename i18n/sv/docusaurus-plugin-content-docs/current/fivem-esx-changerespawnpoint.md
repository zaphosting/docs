---
id: fivem-esx-changerespawnpoint
title: "FiveM: Ställ in respawnpunkt"
description: "Upptäck hur du uppdaterar ambulansens respawnpunkter i ESX för att anpassa gameplay och förbättra serverhanteringen → Lär dig mer nu"
sidebar_label: Ändra Respawnpunkt 
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Arkiverad guide
Det här dokumentet har arkiverats. Dokument arkiveras om de inte längre är relevanta, felaktiga eller inaktuella. Det har arkiverats av följande anledning:

**Anledning**: Metoden gäller en föråldrad ESX-version. Den här metoden kan inte användas för nuvarande ESX-version eftersom strukturen har ändrats. 
::::



:::info
ESX måste vara installerat
:::

<InlineVoucher />

📔 Förberedelser

För att hitta koordinaterna behöver vi ett Coords-script som detta:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installera det så här: [Install resources](fivem-installresources.md)
När vi har installerat scriptet trycker vi i spelet på */coords*
Det ger oss koordinaterna.

📑 Redigera Config

När vi har våra koordinater går vi till Config-fliken

Där trycker vi **CTRL + F** och söker efter **ambulance**
Vi öppnar sedan den filen.
Scrolla ner tills vi hittar **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

Nu redigerar vi dessa och byter ut koordinaterna.
Sen klickar vi bara på Spara och klart.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Efter en serveromstart träder ändringarna i kraft.
:::

<InlineVoucher />