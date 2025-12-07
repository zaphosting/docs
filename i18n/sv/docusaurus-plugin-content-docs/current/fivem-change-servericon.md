---
id: fivem-change-servericon
title: "FiveM:  Byt ikon för serverlistan"
description: "Upptäck hur du anpassar din FiveM-server med en unik 96x96 PNG-ikon för att stärka din servers identitet → Lär dig mer nu"
sidebar_label: Byt serverikon
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vill du pimpa din server och sätta en egen custom ikon för din server? Det är busenkelt! I den här guiden lär du dig hur du förbereder en bild och sätter den som din nya custom serverikon.

<InlineVoucher />

## Förberedelser
För att kunna sätta en custom serverikon för din FiveM-server måste du först förbereda en bildfil som är 96x96 pixlar stor och i PNG-format (`.png` filändelse). Vi rekommenderar att du använder ett bildredigeringsprogram som GIMP, eller helt enkelt ett onlineverktyg för att ändra storlek och konvertera din befintliga bild. När du har en bild som följer dessa krav är du redo att ladda upp den och ställa in den i din serverkonfiguration.

## Installation

### Ladda upp filer

Nästa steg är att ladda upp din färdiga bild till din FiveM-spelserver, vilket görs via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in vår [FTP-access](gameserver-ftpaccess.md)-guide.

När du är inloggad på FTP, navigera till `gXXXXXX/fivem/YOUR_FRAMEWORK/` och ladda upp din serverikon där. I exemplet används CFX:s standardmall. Ladda upp filen i din egen framework-mapp. Kom ihåg vad filen heter.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Aktivering

För att ikonen ska laddas vid serverstart måste du nu ställa in den i `server.cfg`-filen för din server, under parametern `load_server_icon`. Om du till exempel har döpt din ikon till `zaphosting96x96` blir kommandot:

```
# Ladda en serverikon (96x96 PNG-fil)
load_server_icon zaphosting96x96.png
```

:::info
Se till att namnet på bildfilen i kommandot exakt matchar det du laddade upp tidigare. Det är case-sensitivt.
:::

## Avslutning

Om du följt alla steg ska din nya serverikon visas nästa gång du startar om servern. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />