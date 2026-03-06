---
id: csgo-plugins
title: "CS:GO: Installation av plugins"
description: "Lär dig hur du installerar Sourcemod-plugins på din CS:GO-server och utökar spelet med egna funktioner → Läs mer nu"
sidebar_label: Installera plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introduktion

CS:GO fortsätter den långa traditionen av communitydriven serveranpassning. Plugins låter serverägare utöka spelupplevelsen, lägga till smidiga funktioner, implementera egna regler eller bygga helt nya spellägen.

För CS:GO-servrar är **Sourcemod** det mest använda ramverket för serverside-plugins. Sourcemod jobbar tillsammans med **Metamod:Source**, som fungerar som baslager och gör det möjligt för plugins att hooka in i spelmotorn. Genom att installera båda komponenterna kan serveradministratörer enkelt hantera plugins och utöka serverns funktionalitet.

<InlineVoucher />



## Installera Metamod:Source

Metamod:Source måste installeras först eftersom Sourcemod är beroende av det. Börja med att ladda ner senaste versionen av Metamod:Source från den officiella sidan. Packa upp den nedladdade arkivet på din dator.

Inuti arkivet hittar du en `addons`-mapp. Ladda upp den här mappen till din CS:GO-server via [FTP](gameserver-ftpaccess.md) så att den slås ihop med den befintliga spelmappen `../csgo/`.


Efter att du laddat upp filerna, starta om servern. För att kontrollera att Metamod körs korrekt, öppna serverkonsolen och kör följande kommando:

```
meta version
```


Om Metamod är korrekt installerat kommer konsolen visa den installerade versionen och mer info.

<Button label="Ladda ner Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Installera Sourcemod

När Metamod:Source är installerat kan du installera Sourcemod. Ladda ner senaste stabila versionen av Sourcemod från den officiella sidan och packa upp arkivet. Ladda upp mapparna `addons` och `cfg` till din CS:GO-server via [FTP](gameserver-ftpaccess.md). Mapparna ska placeras i CS:GO-spelmappen `../csgo/`. Efter uppladdning, starta om servern. Sourcemod laddas nu automatiskt via Metamod.

För att bekräfta att Sourcemod fungerar, öppna serverkonsolen och kör:

```
sm version
```


Om installationen lyckades kommer servern visa aktuell Sourcemod-version och bygginfo.

<Button label="Ladda ner Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Installera Plugins

Plugins för Sourcemod distribueras oftast som `.smx`-filer. Dessa kompilerade pluginfiler måste laddas upp till `plugins`-mappen i Sourcemod-installationen.

```
../csgo/addons/sourcemod/plugins/
```


Efter att du laddat upp pluginfilen, starta om servern eller ladda om pluginet direkt via serverkonsolen med följande kommando:

```
sm plugins load <pluginname>
```


Om ett plugin inte laddas korrekt, kolla serverloggarna som finns i Sourcemods `logs`-mapp för eventuella felmeddelanden.

Vissa plugins kan även ha extra konfigurationsfiler. Dessa placeras vanligtvis i:

```
../csgo/addons/sourcemod/configs/
```


Följ alltid installationsinstruktionerna från pluginutvecklaren för att säkerställa att allt funkar som det ska.



## Populära Plugins

<SearchableItemList items={items} />



## Sammanfattning

Om du följt alla steg har du nu installerat Metamod:Source, Sourcemod och dina önskade plugins på din CS:GO-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />