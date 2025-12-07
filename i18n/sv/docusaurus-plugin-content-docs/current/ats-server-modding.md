---
id: ats-server-modding
title: "ATS: Installera Mods/DLCs på din ATS-server"
description: "Upptäck hur du kan förbättra din American Truck Simulator-upplevelse med mods och DLCs för både klient och server → Lär dig mer nu"
sidebar_label: Installera Mods/DLCs
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

American Truck Simulator har inbyggt stöd för moddar via Steam Workshop, vilket gör att du kan lägga till en mängd olika mods till både ditt spel och din server, tillsammans med köpta DLCs. I den här guiden går vi igenom hur du installerar mods på din klient och sedan på din ATS-server.

<InlineVoucher />

## Lägga till Mods & DLCs

Först måste du hitta och välja de mods och DLCs du vill använda. Det gör du i spelet genom att gå till **Mod Manager** och **DLC Browser** i huvudmenyn.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Du når Mods via **Mod Manager** i huvudmenyn, där du enkelt kan hitta mods via Steam Workshop.

När du har installerat mods, se till att flytta dem till listan **Active Mods** med hjälp av pilarna bredvid varje mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Bekräfta sedan ändringarna och gå in i spelet, i singleplayer-läge.

### DLCs

Du kan se de DLCs du köpt på ditt konto via **DLC Browser** i huvudmenyn.

Här kan du bläddra bland alla DLCs du äger och har installerat på din klient.

## Exportera Serverpaket

När du aktiverat mods och är redo i spelet måste du exportera dina mods som serverpaket. För att göra detta behöver du öppna konsolen i spelet, som är avstängd som standard.

För att aktivera den, gå till följande mapp och öppna filen `config.cfg`:
```
C:/Users/[ditt_användarnamn]/Documents/American Truck Simulator
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

Två filer kommer att exporteras till din mapp `Documents/American Truck Simulator`: `server_packages.dat` och `server_packages.sii`. Dessa innehåller info om DLCs/mods och används i nästa steg.

## Ladda upp Serverpaket

Nu när du har exporterat serverpaketen för dina mods måste du ladda upp dem till din ATS-server via FTP. Använd gärna vår guide för [FTP Access](gameserver-ftpaccess.md) för hjälp med att ansluta till din server.

När du är inne i huvudmappen **American Truck Simulator**, ladda upp båda serverpaketsfilerna hit. Om filerna redan finns, ersätt dem bara.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
När du moddar måste mods vara synkade mellan klient och server. Det betyder att om du ansluter till en server med mods du inte har, kommer du bli ombedd att ladda ner de saknade modsen.
:::

Starta slutligen om din server för att automatiskt aktivera och installera modsen. Grattis, du har nu installerat mods på din ATS-server!

<InlineVoucher />