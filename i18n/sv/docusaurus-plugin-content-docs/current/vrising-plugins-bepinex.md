---
id: vrising-plugins-bepinex
title: "V Rising: Installera plugins på servern (BepInEx)"
description: "Upptäck hur du kan förbättra ditt V Rising-spelande med BepInEx-mods och öka serveranpassningen → Lär dig mer nu"
sidebar_label: Installera plugins (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Arkiverad guide
Det här dokumentet har arkiverats. Dokument arkiveras om de inte längre är relevanta, felaktiga eller inaktuella. Det har arkiverats av följande anledning:

**Orsak**: Produkten V Rising med BepInEx fungerar inte längre och har därför tagits bort från shoppen. 
::::

## Introduktion
BepInEx är ett väldigt populärt open-source plugin- och modding-ramverk som låter spelare lägga till mods i en rad spel som traditionellt inte stödjer officiell modding. I den här guiden visar vi hur du kan installera plugins via BepInEx på V Rising.
<InlineVoucher />

## BepInEx Spelversion

För att använda **BepInEx**-kompatibla plugins i V Rising behöver du först installera **V Rising BepInEx**-spelversionen på din server. Det gör du enkelt med vår gameserver-spelväxlare, läs mer om detta i vår [Game Change](gameserver-gameswitch.md)-guide.

## Ladda upp Plugins

Börja med att hitta mods som är kompatibla med BepInEx och som du vill lägga till på din server. Du kan oftast se information om pluginens kompatibilitet på respektive nedladdningssida.

:::important
Plugins som används måste vara **BepInEx**-kompatibla, annars kommer de inte fungera!
:::

När du har en mod redo, börja med att ansluta till din gameserver via FTP. Läs vår [Access via FTP](gameserver-ftpaccess.md)-guide för att lära dig hur du gör detta.

När din FTP-klient är redo, navigera till följande mapp:
```
../vrising/BepInEx/plugins
```

I den här mappen ska du lägga in de mods du laddat ner. Vanligtvis är det filer med `.dll`-ändelse. I det här exemplet laddar vi upp en framework-mod som är användbar för att skapa kommandon.

:::note
Servern måste vara stoppad innan du lägger till eller redigerar mods, annars kan ändringarna försvinna.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Starta Servern

När du har laddat upp de plugins du vill ha, starta helt enkelt om din server.

:::info
Vissa plugins kan kräva att de också installeras på klienten (din PC). Kolla informationen på pluginens webbplats för att se om det behövs.
:::

Du har nu framgångsrikt installerat nya BepInEx-plugins på din V Rising-gameserver!

<InlineVoucher />