---
id: valheim-plugins-bepinex
title: "Valheim: Installera plugins på servern (BepInEx)"
description: "Upptäck hur du kan förbättra ditt Valheim-spelande med BepInEx-plugins och låsa upp nya moddningsmöjligheter → Läs mer nu"
sidebar_label: Installera plugins (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Introduktion
BepInEx är ett väldigt populärt open-source plugin- och moddningsramverk som låter spelare lägga till mods till en rad spel som traditionellt inte stödjer officiell moddningssupport. I den här guiden visar vi hur du kan installera plugins via BepInEx på Valheim.

<InlineVoucher />

## BepInEx Spelversion

För att använda **BepInEx**-kompatibla plugins i Valheim behöver du först installera **Valheim Plus**-spelversionen på din server. Vi har även en fristående **Valheim BepInEx**-spelversion, men vi rekommenderar att du installerar Valheim Plus eftersom den kommer med allt du behöver. Detta gör du enkelt via vår gameserver-spelväxlare, läs mer om detta i vår [Game Change](gameserver-gameswitch.md)-guide.

:::info
Valheim Plus måste även vara installerat lokalt på din PC. Här hittar du nedladdningen för Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::

## Ladda upp Plugins

Börja med att hitta mods som är kompatibla med BepInEx och som du vill lägga till på din server. Vanligtvis kan du se information om pluginens kompatibilitet på respektive nedladdningssida.

:::important
Plugins som används måste vara **BepInEx**-kompatibla, annars kommer de inte fungera!
:::

När du har en mod redo, börja med att ansluta till din gameserver via FTP. Läs vår guide [Access via FTP](gameserver-ftpaccess.md) för att lära dig hur du gör detta.

När din FTP-klient är redo, navigera till följande mapp:
```
../valheim-linux-plus/BepInEx/plugins
```

I den här mappen ska du lägga in de mods du har laddat ner. Vanligtvis är det filer med `.dll`-ändelse.

:::note
Servern måste vara stoppad innan du lägger till eller redigerar mods, annars kan ändringarna försvinna.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Starta Servern

När du har laddat upp de plugins du vill ha, starta helt enkelt om din server.

:::info
Vissa plugins kan kräva att de även installeras på klienten, alltså på din PC. Kolla informationen på pluginens webbplats för att se om det behövs.
:::

Du har nu framgångsrikt installerat nya BepInEx-plugins på din Valheim-gameserver!

## Populära Plugins

Letar du fortfarande efter de perfekta pluginsen till din server?

Bläddra igenom vår noggrant utvalda lista med de mest populära och starkt rekommenderade pluginsen för att förbättra ditt spelande och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tillägg som passar ditt projekt.

<SearchableItemList items={items} />

<InlineVoucher />