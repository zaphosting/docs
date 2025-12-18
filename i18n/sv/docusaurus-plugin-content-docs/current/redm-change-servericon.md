---
id: redm-change-servericon
title: "RedM:  Byt ikon för serverlistan"
description: "Upptäck hur du anpassar din RedM-serverikon med en perfekt 96x96 PNG-bild för en unik look → Lär dig mer nu"
sidebar_label: Byt serverikon
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vill du pimpa din server och sätta en egen custom ikon för din server? Det är busenkelt! I den här guiden lär du dig hur du förbereder en bild och sätter den som din nya custom serverikon.

<InlineVoucher />

## Förberedelse
För att kunna sätta en custom serverikon för din RedM-server måste du först förbereda en bildfil som är 96x96 pixlar stor och i PNG-format (`.png` filändelse). Vi rekommenderar att du använder ett bildredigeringsprogram som GIMP, eller helt enkelt ett onlineverktyg för att ändra storlek och konvertera din befintliga bild. När du har en bild som följer dessa krav är du redo att ladda upp den och sätta den i din serverkonfiguration.

## Installation

### Ladda upp filer

Nästa steg är att ladda upp din färdiga bild till din RedM-spelserver, vilket görs via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in vår [FTP-access](gameserver-ftpaccess.md)-guide.

När du är inloggad på FTP, navigera till `gXXXXXX/redm-txadmin/DIN_FRAMEWORK/` och ladda upp din serverikonfil där. I exemplet används CFX:s standardmall. Ladda upp filen i din egen framework-mapp. Kom ihåg vad filen heter.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)

### Aktivering

För att ikonen ska laddas vid serverstart måste du nu sätta den i `server.cfg`-filen för din server, under parametern `load_server_icon`. Om du till exempel har döpt din ikon till `zaphosting96x96` blir kommandot:

```
# Ladda en serverikon (96x96 PNG-fil)
load_server_icon zaphosting96x96.png
```

:::info
Se till att namnet på bildfilen i kommandot exakt matchar det du laddade upp. Det är case-sensitivt.
:::

## Avslutning

Om du följt alla stegen ska din nya serverikon visas nästa gång du startar om servern. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />