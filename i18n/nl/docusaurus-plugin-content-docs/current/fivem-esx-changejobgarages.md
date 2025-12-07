---
id: fivem-esx-changejobgarages
title: "FiveM: Job Garages - Auto's Toevoegen"
description: "Ontdek hoe je job garages kunt aanpassen en uitbreiden met extra auto's om je gameplay te verbeteren → Leer het nu"
sidebar_label: Auto's Toevoegen aan Job-Garages
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Wil je de beschikbare auto's in je job garages veranderen of uitbreiden? Hieronder leggen we uit hoe je dat doet en welke stappen je moet volgen!

<InlineVoucher />

## Configuratie

Extra auto's voeg je toe aan de job garages via FTP. Verbind hiervoor met je game server via FTP. Als je nog niet weet hoe FTP werkt, check dan onze [FTP toegang](gameserver-ftpaccess.md) gids.

Als je verbonden bent via FTP, navigeer dan naar de ESX resource map en open de esx_addons map. De mappenstructuur zou er zo uit moeten zien: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Kies nu bijvoorbeeld de Ambulance of Politie job en open het `config.lua` configuratiebestand in de resources.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

In het configuratiebestand moet je de sectie `Config.AuthorizedVehicles` aanpassen. Je kunt deze zoeken met de zoekfunctie en vervolgens naar wens aanpassen of uitbreiden:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Zorg ervoor dat je een komma zet aan het einde van de vorige regel als je nieuwe voertuigen toevoegt, anders kunnen er problemen ontstaan.
:::

## Conclusie

Als je alle stappen hebt gevolgd, heb je nu succesvol je job garage aangepast of uitgebreid. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />