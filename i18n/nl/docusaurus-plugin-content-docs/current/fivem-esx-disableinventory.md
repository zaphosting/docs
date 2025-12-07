---
id: fivem-esx-disableinventory
title: "FiveM: Inventory uitschakelen (F2)"
description: "Ontdek hoe je de standaard inventory in ESX uitschakelt om je serverervaring te customizen → Leer het nu"
sidebar_label: Inventory uitschakelen (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Gearchiveerde gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

**Reden**: De methode is voor een verouderde ESX-versie. Deze aanpak werkt niet voor de huidige ESX-versie, omdat de structuur is veranderd. 
::::

<InlineVoucher />

## Verbinden met FTP

Voordat we de inventory kunnen uitschakelen, moet de [Toegang via FTP](gameserver-ftpaccess.md) ingesteld zijn.

Als dat geregeld is, kun je verbinden en de servermap openen:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## De aanpassingen maken

Open nu het pad `server-data/resources/[esx]`, hier vind je een es_extended map:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

In deze map open je het bestand `config.lua`.

Als je dit bestand in een teksteditor hebt geopend, zoek je naar de volgende regel:

```Lua
Config.EnableDefaultInventory   = true -- Display the default Inventory ( F2 )
```

Vervang deze door:

```Lua
Config.EnableDefaultInventory   = false
```


Sla het bestand op en herstart de server. Zodra je weer joined, is de inventory niet meer te openen.

<InlineVoucher />