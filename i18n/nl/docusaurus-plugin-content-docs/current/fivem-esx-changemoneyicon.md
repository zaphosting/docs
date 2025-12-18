---
id: fivem-esx-changemoneyicon
title: "FiveM: Geldicoon aanpassen"
description: "Ontdek hoe je het geldicoon van je server kunt personaliseren voor een unieke in-game ervaring → Leer het nu"
sidebar_label: Geldicoon aanpassen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Gearchiveerde gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

**Reden**: De methode is voor een verouderde ESX-versie. Deze aanpak werkt niet voor de huidige ESX-versie, omdat de structuur is veranderd.
::::



<InlineVoucher />

## Verbinden via FTP

Eerst moet de [Toegang via FTP](gameserver-ftpaccess.md) ingesteld zijn.


Als dit is ingesteld, kun je verbinden en de servermap openen.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Hier openen we het `server.cfg` bestand in de `server-data` map.

## Config aanpassen

Voeg nu het volgende toe boven de regel `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

Hier kun je het $-teken vervangen door je eigen icoon.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Na het opslaan van het bestand en het herstarten van de server, wordt het geldicoon in-game aangepast.

<InlineVoucher />