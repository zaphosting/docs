---
id: fivem-esx-spawnpoints
title: "FiveM: Beheer en pas spawnpoints aan met ESX"
description: "Ontdek hoe je spawnpoints kunt aanpassen en uitbreiden in het ESX-framework voor een betere gameplay ervaring → Leer het nu"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Wil je de standaard spawnpoints veranderen of extra spawnpoints toevoegen? De afhandeling van spawnpoints in het **ESX framework** wordt geregeld in `es_extended`. Hieronder leggen we uit hoe je deze kunt aanpassen.

<InlineVoucher />

## Configuratie

De spawnpoints worden aangepast via het `main.lua` configuratiebestand van `es_extended` (../es_extended/shared/config/). Dit bestand kun je bewerken via FTP. Als je nog niet weet hoe je FTP gebruikt, raden we je aan om even de [FTP toegang](gameserver-ftpaccess.md) gids te bekijken.

De standaardconfiguratie van de spawnpoints ziet er als volgt uit:

```
Config.DefaultSpawns = { -- Wil je meer spawnlocaties en deze willekeurig laten kiezen? Haal dan de commentaartekens weg of voeg meer locaties toe
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Stel dat je meer spawnpoints wilt toevoegen, dan voeg je simpelweg een extra regel toe in het configuratiebestand:

```
Config.DefaultSpawns = { -- Wil je meer spawnlocaties en deze willekeurig laten kiezen? Haal dan de commentaartekens weg of voeg meer locaties toe
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NIEUWE SPAWN
}
```

:::info Coördinaten bepalen
Je hebt een handige tool nodig om de huidige coördinaten te achterhalen. Er zijn verschillende opties online te vinden, dus kies vooral wat jou het beste ligt. :)
:::

## Conclusie

Je hebt nu succesvol bestaande spawnpoints aangepast of nieuwe toegevoegd met deze methode. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />