---
id: rimworldtogether-mods
title: "RimWorld Together: Mods installeren"
description: "Ontdek hoe je je RimWorld Together-server kunt verbeteren met populaire mods voor een soepele online co-op ervaring → Leer het nu"
sidebar_label: Mods Installeren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introductie

RimWorld Together is een superpopulaire open-source multiplayer mod, volledig gerund door de RimWorld-community, die online CO-OP gameplay mogelijk maakt voor RimWorld. In deze gids laten we je zien hoe je mods installeert op je RimWorld Together-server.

<InlineVoucher />

## Mods verzamelen

Je kunt allerlei verschillende RimWorld mods installeren op je RimWorld Together-server.

Mods worden ingedeeld in drie types:
- **Verplichte Mods**: Deze zijn verplicht, de client moet ze hebben anders kan die niet verbinden.
- **Optionele Mods**: Deze zijn niet verplicht, de client kan ook verbinden zonder deze mods.
- **Verboden Mods**: Mods in deze categorie zijn verboden, de server weigert direct de verbinding van de client.

Je ziet deze drie types terugkomen in de volgende sectie over het uploaden van mods, omdat mods verdeeld zijn over drie mappen.

### Core-bestanden & DLC's

RimWorld Together maakt het makkelijk om Core-bestanden & DLC's te downloaden. Deze worden net als elke andere mod behandeld.

Je kunt de Core en DLC's direct downloaden van de [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together), specifiek de **Extras.zip** map.

### Andere Mods

Je vindt een breed scala aan RimWorld mods door simpelweg online te zoeken. We raden sterk aan om de [Steam Workshop van RimWorld](https://steamcommunity.com/app/294100/workshop/) te gebruiken vanwege de populariteit en het grote aanbod mods.

Als je mods rechtstreeks via Steam Workshop abonneert, worden ze via je Steam-client gedownload naar de volgende map: `../steamapps/workshop/content/294100`.

:::tip
Als je RimWorld niet op Steam hebt, kun je Steam Workshop-bestanden en mods alsnog downloaden met SteamCMD. Begin met het downloaden van [SteamCMD via de officiële Valve-website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Start **steamcmd.exe** en wacht tot de installatie klaar is. Typ dan `login anonymous` in de console.

Nu kun je mods downloaden met het commando `workshop_download_item 294100 [workshop_id]`, waarbij je `[workshop_id]` vervangt door de ID van de Steam Workshop mod. Die ID vind je simpelweg in de URL, bijvoorbeeld het laatste deel: `/?id=3230195082`.

Alle mods die je via SteamCMD downloadt, worden geplaatst in: `../steamapps/workshop/content/294100`.
:::

Als je mods hebt gedownload, kun je verder naar de volgende sectie over het uploaden naar je gameserver.

:::note
Er zijn mods die gegarandeerd niet compatibel zijn met RimWorld Together. Je kunt de lijst met bevestigde [incompatibele mods hier bekijken](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Daarnaast kunnen er mods zijn die niet helemaal goed werken met RimWorld Together, dus je moet soms zelf wat testen en uitzoeken of ze goed functioneren.
:::

## Mods uploaden

Nu je mods klaar hebt, kun je verbinding maken met je gameserver via FTP. Lees onze [Toegang via FTP](gameserver-ftpaccess.md) gids om te leren hoe dat werkt.

Met je FTP-client open navigeer je naar de volgende map:
```
../rimworld-together/Mods
```

In deze map zie je drie aparte mappen voor de verschillende mod-types. Dit sluit aan op het begin van de vorige sectie waar we de mod-types uitlegden. Als je dat nog niet gelezen hebt, raden we aan dat eerst te doen zodat je weet waar je welke mod moet plaatsen.

Ga nu naar de bestanden van de mods die je hebt gedownload en upload ze één voor één naar de juiste mod-categorie map op je gameserver.

:::note
De server moet uitstaan voordat je mods toevoegt of wijzigt, anders kunnen je aanpassingen verloren gaan.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Server starten

Als je de mods hebt geüpload die je wilde, start je je server gewoon weer op. De volgende keer dat je server opstart, worden alle toegevoegde mods geladen.

Je hebt nu succesvol nieuwe mods geïnstalleerd op je RimWorld Together gameserver!

## Populaire Mods

Ben je nog op zoek naar de perfecte mods voor je server? Check onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen mods om je gameplay te boosten en je server die finishing touch te geven. Laat je inspireren en vind precies wat bij jouw project past.

<SearchableItemList items={items} />

<InlineVoucher />