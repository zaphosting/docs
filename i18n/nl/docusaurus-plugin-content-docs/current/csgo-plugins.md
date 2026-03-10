---
id: csgo-plugins
title: "CS:GO: Plugins installeren"
description: "Leer hoe je Sourcemod-plugins installeert op je CS:GO-server en gameplay uitbreidt met custom features → Ontdek het nu"
sidebar_label: Plugins installeren
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introductie

CS:GO zet de lange traditie voort van community-gedreven servercustomisatie. Plugins stellen servereigenaren in staat om gameplay uit te breiden, quality of life features toe te voegen, custom regels te implementeren of compleet nieuwe gamemodi te bouwen.

Voor CS:GO-servers is **Sourcemod** het meest gebruikte framework voor server-side plugins. Sourcemod werkt samen met **Metamod:Source**, dat fungeert als de basislaag waarmee plugins kunnen koppelen aan de game-engine. Door beide componenten te installeren, kunnen serveradmins makkelijk plugins beheren en de serverfunctionaliteit uitbreiden.

<InlineVoucher />



## Metamod:Source installeren

Metamod:Source moet eerst geïnstalleerd worden, omdat Sourcemod ervan afhankelijk is. Begin met het downloaden van de nieuwste Metamod:Source release van de officiële website. Pak het gedownloade archief uit op je computer.

In het archief vind je een `addons` map. Upload deze map naar je CS:GO-server via [FTP](gameserver-ftpaccess.md) zodat het samensmelt met de bestaande game directory `../csgo/`.


Na het uploaden van de bestanden, herstart je de server. Om te checken of Metamod goed draait, open je de serverconsole en voer je het volgende commando uit:

```
meta version
```


Als Metamod correct is geïnstalleerd, toont de console de geïnstalleerde versie en extra info.

<Button label="Download Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Sourcemod installeren

Zodra Metamod:Source staat, kun je Sourcemod installeren. Download de nieuwste stabiele versie van Sourcemod van de officiële website en pak het archief uit. Upload de meegeleverde `addons` en `cfg` mappen naar je CS:GO-server via [FTP](gameserver-ftpaccess.md). De mappen moeten in de CS:GO game directory `../csgo/` geplaatst worden. Na het uploaden herstart je de server. Sourcemod wordt nu automatisch geladen via Metamod.

Om te checken of Sourcemod werkt, open je de serverconsole en voer je uit:

```
sm version
```


Als de installatie gelukt is, geeft de server de huidige Sourcemod-versie en build info terug.

<Button label="Download Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Plugins installeren

Plugins voor Sourcemod worden meestal verspreid als `.smx` bestanden. Deze gecompileerde pluginbestanden moeten geüpload worden naar de `plugins` map binnen de Sourcemod-installatie.

```
../csgo/addons/sourcemod/plugins/
```


Na het uploaden van het pluginbestand, herstart je de server of laad je de plugin direct via de serverconsole met het volgende commando:

```
sm plugins load <pluginnaam>
```


Als een plugin niet goed laadt, check dan de serverlogs in de Sourcemod `logs` map voor mogelijke foutmeldingen.

Sommige plugins bevatten ook extra configuratiebestanden. Deze worden meestal geplaatst in:

```
../csgo/addons/sourcemod/configs/
```


Volg altijd de installatie-instructies van de pluginontwikkelaar om correcte werking te garanderen.



## Populaire Plugins

<SearchableItemList items={items} />



## Conclusie

Als je alle stappen hebt gevolgd, heb je Metamod:Source, Sourcemod en je gewenste plugins succesvol geïnstalleerd op je CS:GO-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />