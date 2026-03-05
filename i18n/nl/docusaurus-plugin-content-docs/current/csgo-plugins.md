---
id: csgo-plugins
title: "CS:GO: Plugins installeren"
description: "Ontdek de evoluerende wereld van CS:GO-plugins en community-projecten om je Counter-Strike ervaring te verbeteren → Leer er nu meer over"
sidebar_label: Plugins installeren
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introductie

CS:GO zet de lange traditie voort van community-gedreven servercustomisatie. Plugins stellen servereigenaren in staat om gameplay uit te breiden, quality of life features toe te voegen, custom regels toe te passen of compleet nieuwe gamemodi te bouwen.

Met de overgang naar Source 2 is het plugin-ecosysteem flink veranderd. Voor CS:GO heeft **CounterStrikeSharp** zich ontwikkeld tot het belangrijkste en actief onderhouden framework voor server-side pluginontwikkeling.

<InlineVoucher />



## Metamod:Source installeren

Metamod moet eerst geïnstalleerd worden, want CounterStrikeSharp is hiervan afhankelijk. Na het downloaden van de [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), pak je het archief uit. In het archief vind je een `addons` map. Deze map moet je direct uploaden naar de CS:GO game map via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Na het kopiëren van de bestanden, zoek je het bestand `gameinfo.gi` in `/game/csgo/`. Open dit bestand met een teksteditor. Zoek in het bestand de regel met `Game_LowViolence csgo_lv`. Voeg direct onder deze regel de volgende regel toe:

```
Game csgo/addons/metamod
```

<Button label="Download Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## CounterStrikeSharp installeren

Zodra Metamod draait, kun je CounterStrikeSharp installeren. CounterStrikeSharp wordt verspreid via de officiële GitHub repository en geleverd als een vooraf gecompileerd releasepakket. Download de CounterStrikeSharp release inclusief runtime. Pak het archief uit en kopieer de meegeleverde `addons` map naar dezelfde CS:GO game map via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Let op: mappen niet handmatig samenvoegen of hernoemen. De structuur uit het archief moet intact blijven. Na het uploaden van de bestanden, start je de server opnieuw op. Tijdens het opstarten wordt CounterStrikeSharp automatisch door Metamod geladen. Om te checken of de installatie gelukt is, open je de serverconsole en voer je uit:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Download CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Plugins installeren

Plugins voor CounterStrikeSharp worden geleverd als gecompileerde `.dll` bestanden. Deze bestanden plaats je in de `plugins` map binnen de CounterStrikeSharp installatie.

Na het kopiëren van een plugin naar deze map en het herstarten van de server, laadt CounterStrikeSharp automatisch alle beschikbare plugins. Als een plugin niet laadt, check dan de serverlogs voor foutmeldingen gerelateerd aan CounterStrikeSharp of de plugin zelf.




## Populaire Plugins

<SearchableItemList items={items} />



## Conclusie

Als je alle stappen hebt gevolgd, heb je Metamod/CounterStrikeSharp en je gewenste plugins succesvol geïnstalleerd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂




<InlineVoucher />