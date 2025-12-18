---
id: fivem-installresources
title: "FiveM: Installatie van resources"
description: "Ontdek hoe je jouw FiveM-server kunt uitbreiden met populaire resources voor grotere projecten zoals roleplay-servers → Leer er nu meer over"
sidebar_label: Resources installeren
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introductie

Resources kun je gebruiken om je FiveM-server uit te breiden met extra functies. Dit is vooral interessant als je grotere projecten wilt starten, zoals een roleplay-server of iets dergelijks. Zoiets kan niet zonder deze extra resources.

FiveM en de community bieden een enorme variëteit aan resources. Een overzicht van de populairste resources vind je op het Cfx.re Forum: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Voorbereiding

Het installeren van resources gaat via FTP. Je hebt een FTP-client nodig om bestanden naar je server te uploaden. Als je niet bekend bent met FTP, raden we je aan om even onze [FTP toegang](gameserver-ftpaccess.md) gids te checken.

Gedownloade resources worden meestal aangeboden in een gecomprimeerd formaat. Dat betekent dat je de bestanden eerst moet uitpakken met een programma zoals 7Zip, Winrar of WinZip. De uitgepakte resource-map moet minimaal de volgende bestanden bevatten: `__resource.lua` of `fxmanifest.lua` plus de bijbehorende scriptbestanden.

:::info
Als deze bestanden er niet zijn, zitten ze vaak in een submap binnen de resource.
:::

## Installatie

### Bestanden uploaden

Upload nu de eerder uitgepakte bestanden als één map (als dat nog niet zo is). Je map moet geüpload worden naar de `resources`-directory van je server. De mappenstructuur ziet er meestal zo uit: `/gXXXXXX/fivem/JOUW_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Sommige resources werken samen met een database en bevatten daarom vaak al SQL-bestanden die geïmporteerd moeten worden in de database. Is dat het geval? Check dan onze [SQL File Import](fivem-sql-file-import.md) gids om te leren hoe je dat doet.

### Activeren

Om ervoor te zorgen dat de geïnstalleerde resource bij het opstarten van de server geladen wordt, moet je hem eerst activeren in het `server.cfg` bestand van je server. Dit doe je met het commando `start [voorbeeld resource]`.

Als je bijvoorbeeld de resource hebt geüpload met de mapnaam `eup-ui`, moet het startcommando in de config er zo uitzien:
```
start eup-ui
```

Je kunt je `server.cfg` bestand openen via de CFG Editor in de txAdmin interface.

:::info
Let erop dat de naam van de map exact overeenkomt met de naam in het startcommando. Hoofdlettergevoeligheid telt mee.
:::


## Populaire Resources

Ben je nog op zoek naar de perfecte resources voor jouw server? Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen resources om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={items} />


## Conclusie
Tot slot kun je je server herstarten. De geïnstalleerde resource wordt nu geladen zodra je server volledig is opgestart. Je hebt succesvol een resource geïnstalleerd op je FiveM game server. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />