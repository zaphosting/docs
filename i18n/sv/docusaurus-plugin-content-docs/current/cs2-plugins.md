---
id: cs2-plugins
title: "CS2: Installation av plugins"
description: "Utforska det nya landskapet av CS2-plugins och communityprojekt för att boosta din Counter-Strike-upplevelse → Lär dig mer nu"
sidebar_label: Installera plugins
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Introduktion

Counter-Strike 2 fortsätter den långa traditionen av communitydriven serveranpassning. Plugins låter serverägare utöka gameplay, lägga till smidiga funktioner, implementera egna regeluppsättningar eller bygga helt nya spellägen.

Med övergången till Source 2 har plugin-ekosystemet förändrats rejält. För CS2 har **CounterStrikeSharp** etablerat sig som det primära och aktivt underhållna ramverket för server-side pluginutveckling.

<InlineVoucher />



## Installera Metamod:Source

Metamod måste installeras först, eftersom CounterStrikeSharp är beroende av det. Efter att ha laddat ner [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), packa upp arkivet. Inuti arkivet hittar du en `addons`-mapp. Denna mapp måste laddas upp direkt till CS2-spelkatalogen via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Efter att ha kopierat filerna, leta upp filen `gameinfo.gi` i `/game/csgo/`. Öppna den med en textredigerare. Inuti filen, hitta raden som innehåller `Game_LowViolence csgo_lv`. Direkt under den raden, lägg till följande rad:

```
Game csgo/addons/metamod
```

<Button label="Ladda ner Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Installera CounterStrikeSharp

När Metamod är bekräftat igång kan CounterStrikeSharp installeras. CounterStrikeSharp distribueras via dess officiella GitHub-repo och finns som ett förkompilerat releasepaket. Ladda ner CounterStrikeSharp-releasen som inkluderar runtime. Packa upp arkivet och kopiera medföljande `addons`-mapp till samma CS2-spelkatalog via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Man ska inte slå ihop eller byta namn på mappar manuellt. Strukturen som arkivet levererar måste vara intakt. Efter uppladdning, starta om servern igen. Under uppstart laddas CounterStrikeSharp automatiskt av Metamod. För att verifiera installationen, öppna serverkonsolen och kör:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Ladda ner CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Installera Plugins

Plugins för CounterStrikeSharp levereras som kompilerade `.dll`-filer. Dessa filer placeras i `plugins`-mappen inom CounterStrikeSharp-installationsvägen.

Efter att ha kopierat en plugin till denna mapp och startat om servern, laddar CounterStrikeSharp automatiskt alla tillgängliga plugins. Om en plugin inte laddas, bör serverloggarna kollas för felmeddelanden relaterade till CounterStrikeSharp eller pluginen.



## Populära Plugins

<SearchableItemList items={items} />



## Slutsats

Om du följt alla stegen har du nu framgångsrikt installerat Metamod/CounterStrikeSharp och dina önskade plugins. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂




<InlineVoucher />