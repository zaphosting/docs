---
id: csgo-plugins
title: "CS:GO: Installation av plugins"
description: "Utforska det ständigt föränderliga landskapet av CS:GO-plugins och communityprojekt för att förbättra din Counter-Strike-upplevelse → Lär dig mer nu"
sidebar_label: Installera plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introduktion

CS:GO fortsätter den långa traditionen av communitydriven serveranpassning. Plugins låter serverägare utöka gameplay, lägga till smidiga funktioner, implementera egna regeluppsättningar eller bygga helt nya spellägen.

Med övergången till Source 2 har plugin-ekosystemet förändrats rejält. För CS:GO har **CounterStrikeSharp** etablerat sig som det primära och aktivt underhållna ramverket för serverside plugin-utveckling.

<InlineVoucher />



## Installera Metamod:Source

Metamod måste installeras först, eftersom CounterStrikeSharp är beroende av det. Efter att ha laddat ner [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), packa upp arkivet. Inuti arkivet hittar du en `addons`-mapp. Denna mapp måste laddas upp direkt till CS:GO-spelkatalogen via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Efter att ha kopierat filerna, leta upp filen `gameinfo.gi` inne i `/game/csgo/`. Öppna den med en textredigerare. Inuti filen, hitta raden som innehåller `Game_LowViolence csgo_lv`. Direkt under den raden, lägg till följande rad:

```
Game csgo/addons/metamod
```

<Button label="Ladda ner Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Installera CounterStrikeSharp

När Metamod är igång kan CounterStrikeSharp installeras. CounterStrikeSharp distribueras via dess officiella GitHub-repo och finns som ett förkompilerat releasepaket. Ladda ner CounterStrikeSharp-releasen som inkluderar runtime. Packa upp arkivet och kopiera den medföljande `addons`-mappen till samma CS:GO-spelkatalog via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Man ska inte slå ihop eller byta namn på mappar manuellt. Strukturen som arkivet levererar måste vara intakt. Efter uppladdning, starta om servern igen. Under uppstart laddar Metamod automatiskt CounterStrikeSharp. För att verifiera installationen, öppna serverkonsolen och kör:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Ladda ner CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Installera Plugins

Plugins för CounterStrikeSharp levereras som kompilerade `.dll`-filer. Dessa filer placeras i `plugins`-mappen inom CounterStrikeSharp-installationsvägen.

Efter att ha kopierat en plugin till denna mapp och startat om servern, laddar CounterStrikeSharp automatiskt alla tillgängliga plugins. Om en plugin inte laddas, bör serverloggarna kollas för felmeddelanden relaterade till CounterStrikeSharp eller pluginen själv.




## Populära Plugins

<SearchableItemList items={items} />



## Slutsats

Om du följt alla steg bör du nu ha installerat Metamod/CounterStrikeSharp och dina önskade plugins utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂




<InlineVoucher />