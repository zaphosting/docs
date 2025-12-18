---
id: ets2-server-modding
title: "ETS2: Installera Mods/DLCs på din ETS2-server"
description: "Upptäck hur du kan förbättra din Euro Truck Simulator 2-upplevelse genom att lägga till mods och DLCs för en mer immersiv gameplay → Lär dig mer nu"
sidebar_label: Installera Mods/DLCs
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Euro Truck Simulator 2 har inbyggt stöd för moddar via Steam Workshop, vilket gör att du kan lägga till en mängd olika mods till både ditt spel och din server, tillsammans med köpta DLCs. I den här guiden går vi igenom hur du installerar mods på din klient och sedan på din ETS2-server.

<InlineVoucher />

## Lägga till Mods & DLCs

Först måste du hitta och välja de mods och DLCs du vill använda. Det gör du i spelet genom att gå till **Mod Manager** och **DLC Browser** i huvudmenyn.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Du når Mods via **Mod Manager** i huvudmenyn, där du enkelt kan hitta mods via Steam Workshop.

När du har installerat mods, se till att flytta dem till listan **Active Mods** med hjälp av pilarna bredvid varje mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Slutligen, bekräfta ändringarna och gå in i spelet i single player-läge.

### DLCs

Du kan se de DLCs du köpt på ditt konto via **DLC Browser** i huvudmenyn.

Här kan du bläddra bland alla DLCs du äger och har installerat på din klient.

## Exportera Serverpaket

När du har aktiverat mods och är redo i spelet måste du exportera dina mods som serverpaket. För att göra detta behöver du öppna konsolen i spelet, som är avstängd som standard.

För att aktivera den, gå till följande mapp och öppna filen `config.cfg`:
```
C:/Users/[ditt_användarnamn]/Documents/Euro Truck Simulator 2
```

I filen, hitta raden `uset g_developer "0"` och ändra den till `uset g_developer "1"` för att aktivera. Gör samma sak med raden `uset g_console "0"` och ändra till `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Starta om spelet, och du kan nu öppna konsolen med någon av följande tangenter beroende på tangentbordslayout:
```
` ELLER ~ ELLER \
```

När du är redo, skriv följande kommando i konsolen för att exportera serverpaket:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Två filer kommer att exporteras till din `Documents/Euro Truck Simulator 2`-mapp: `server_packages.dat` och `server_packages.sii`. Dessa innehåller info om DLCs/mods och används i nästa steg.

## Ladda upp Serverpaket

När du har exporterat serverpaketen för dina mods måste du ladda upp dem till din ETS2-server via FTP. Använd gärna vår [FTP Access](gameserver-ftpaccess.md)-guide för hjälp med att ansluta till din server.

När du är inne, gå till huvudmappen **Euro Truck Simulator 2**. Ladda upp båda serverpaketsfilerna hit. Om filerna redan finns, ersätt dem bara.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
När du moddar måste mods vara synkade mellan klienten och servern. Det betyder att om du ansluter till en server med mods du inte har, kommer du bli ombedd att ladda ner de saknade modsen.
:::

Avsluta med att starta om din server för att automatiskt aktivera och installera modsen. Nu har du lyckats installera mods på din ETS2-server.

<InlineVoucher />