---
id: 7d2d-mods
title: "7 Days to Die: Installation av mods"
description: "Upptäck hur du anpassar din server med populära mods och förbättrar spelupplevelsen för en unik känsla → Läs mer nu"
sidebar_label: Installera mods
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Med mods kan du anpassa din server ännu mer. Här nedan förklarar vi var du hittar de mest populära servermodsen och hur du installerar dem. Med Alpha 17 Experimental introducerades konceptet modlets. Modlets är mindre mods som inte skriver över vanilla XML-filerna, utan laddas från mods-mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Förberedelser

Det första du behöver göra är att ladda ner de mods du vill installera på din server. Du hittar ett stort utbud av mods på [7daystodiemods.com](https://7daystodiemods.com/). Där finns över 1000 mods och fler läggs till regelbundet. När du har laddat ner en mod ska den innehålla följande mappstruktur:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Installation

När du har laddat ner de mods du vill ha kan du börja med själva installationen. Mods installeras via FTP. Du behöver en FTP-klient för att kunna ladda upp filer till din server. Om du inte vet vad FTP är eller hur det fungerar, kolla in guiden: [Access via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

Under katalogen ``/gXXXXX4/7dtd-linux-exp/`` måste du skapa en mapp som heter **Mods**. Högerklicka och välj **Create directory** för att göra detta.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Därefter laddar du upp moddens filer till mods-mappen:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

Detta avslutar installationen av modden. Nästa gång du startar servern ska mods laddas automatiskt.

<InlineVoucher />