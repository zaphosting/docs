---
id: fivem-qbcore-spawnpoints
title: "FiveM: Beheer en pas spawnpoints aan met QbCore"
description: "Ontdek hoe je spawnpoints kunt aanpassen en toevoegen in het QBCore framework voor een betere gameplay ervaring → Leer het nu"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Wil je de standaard spawnpoints veranderen of extra spawnpoints toevoegen? De afhandeling van spawnpoints in het **QBCore framework** wordt geregeld via de `qb-spawn` resource. Hieronder leggen we uit hoe je deze kunt aanpassen.

<InlineVoucher />

## Configuratie

De spawnpoints pas je aan via het `config.lua` configuratiebestand van de `qb-spawn` resource. Dit bestand kun je bewerken via FTP. Als je nog niet weet hoe je FTP gebruikt, raden we je aan om even te kijken naar de [FTP toegang](gameserver-ftpaccess.md) handleiding.

De standaardconfiguratie van de spawnpoints ziet er zo uit:

```
QB.Spawns = {
    ["legion"] = { -- Index voor de tabel
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Waar de speler spawnt
        location = "legion", -- zo weet de javascript welke je gekozen hebt
        label = "Legion Square", -- Wat de speler in het menu ziet
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

Stel dat je meer spawnpoints wilt toevoegen, dan voeg je een extra record toe aan het configuratiebestand:

```
["new_spawn_name"] = { -- Moet uniek zijn
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coördinaten waar de speler spawnt
    location = "new_spawn_name", -- Moet uniek zijn
    label = "New spawn name", -- Dit is het label dat in het selectiemenu verschijnt
},
```

:::info Coördinaten bepalen
Je hebt een geschikte resource nodig om de huidige coördinaten te achterhalen. Er zijn verschillende opties online te vinden, kies gewoon degene die jou het beste bevalt. :)
:::

Het eindresultaat ziet er dan zo uit:

```
    QB.Spawns = {
    
        ["legion"] = { -- Index voor de tabel
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Waar de speler spawnt
            location = "legion", -- zo weet de javascript welke je gekozen hebt
            label = "Legion Square", -- Wat de speler in het menu ziet
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
        
        ["new_spawn_name"] = { -- Moet uniek zijn
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coördinaten waar de speler spawnt
        location = "new_spawn_name", -- Moet uniek zijn
        label = "New spawn name", -- Dit is het label dat in het selectiemenu verschijnt
         },
    }
```




## Conclusie

Je hebt met deze methode succesvol bestaande spawnpoints aangepast of nieuwe toegevoegd. Heb je nog vragen of hulp nodig? Neem dan vooral contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />