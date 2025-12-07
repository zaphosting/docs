---
id: fivem-qbcore-spawnpoints
title: "FiveM: Hantera och anpassa spawnpoints med QbCore"
description: "Upptäck hur du anpassar och lägger till spawnpoints i QBCore-ramverket för en bättre spelupplevelse → Lär dig mer nu"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vill du ändra standard spawnpoints eller lägga till fler? Hanteringen av spawnpoints i **QBCore-ramverket** sker via `qb-spawn`-resursen. Här förklarar vi hur du kan anpassa dem.

<InlineVoucher />

## Konfiguration

Spawnpoints justeras via konfigurationsfilen `config.lua` i `qb-spawn`-resursen. Denna fil kan du redigera via FTP. Om du inte är bekant med FTP än, rekommenderar vi att du kollar in vår [FTP-access](gameserver-ftpaccess.md)-guide.

Standardkonfigurationen för spawnpoints ser ut så här:

```
QB.Spawns = {
    ["legion"] = { -- Index för tabellen
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Var spelaren spawnar
        location = "legion", -- så här vet javascript vilken du valt
        label = "Legion Square", -- Vad spelaren ser i menyn
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Anta att du vill lägga till fler spawnpoints, då behöver du lägga till en ny post i konfigurationsfilen:

```
["new_spawn_name"] = { -- Måste vara unik
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordinater där spelaren spawnar
    location = "new_spawn_name", -- Måste vara unik
    label = "New spawn name", -- Det här är etiketten som visas i valmenyn.
},
```

:::info Hitta koordinater
Du behöver ett lämpligt verktyg för att få fram aktuella koordinater. Det finns flera att välja på online, så välj det som passar dig bäst. :)
:::

Slutresultatet blir då så här:

```
    QB.Spawns = {
    
        ["legion"] = { -- Index för tabellen
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Var spelaren spawnar
            location = "legion", -- så här vet javascript vilken du valt
            label = "Legion Square", -- Vad spelaren ser i menyn
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Måste vara unik
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordinater där spelaren spawnar
        location = "new_spawn_name", -- Måste vara unik
        label = "New spawn name", -- Det här är etiketten som visas i valmenyn.
         },
    }
```




## Slutsats

Nu har du lyckats ändra befintliga spawnpoints eller lagt till nya med den här metoden. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />