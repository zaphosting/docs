---
id: fivem-esx-spawnpoints
title: "FiveM: Hantera och anpassa spawnpoints med ESX"
description: "Upptäck hur du anpassar och utökar spawnpunkter i ESX-ramverket för en bättre spelupplevelse → Lär dig mer nu"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vill du ändra standard spawnpoints eller lägga till fler? Hanteringen av spawnpoints i **ESX-ramverket** definieras i `es_extended`. Här förklarar vi hur du kan anpassa dem.

<InlineVoucher />

## Konfiguration

Spawnpunkterna justeras via konfigurationsfilen `main.lua` från `es_extended` (../es_extended/shared/config/). Denna fil kan du redigera via FTP. Om du inte är bekant med FTP än rekommenderar vi att du kollar in vår guide för [FTP-access](gameserver-ftpaccess.md).

Standardkonfigurationen för spawnpunkterna ser ut så här:

```
Config.DefaultSpawns = { -- Vill du ha fler spawnpositioner och välja dem slumpmässigt, ta bort kommentarerna eller lägg till fler platser
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Anta att du vill lägga till fler spawnpunkter, då lägger du till en ny rad i konfigurationsfilen:

```
Config.DefaultSpawns = { -- Vill du ha fler spawnpositioner och välja dem slumpmässigt, ta bort kommentarerna eller lägg till fler platser
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NY SPAWN 
}
```

:::info Hitta koordinater
Du behöver ett bra verktyg för att få fram aktuella koordinater. Det finns flera att välja på online, så välj det som passar dig bäst. :)
:::

## Slutsats

Nu har du lyckats ändra befintliga spawnpoints eller lagt till nya med den här metoden. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />