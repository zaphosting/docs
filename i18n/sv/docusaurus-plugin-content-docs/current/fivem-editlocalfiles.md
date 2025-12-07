---
id: fivem-editlocalfiles
title: "FiveM: Lokala filer (Språkvariabler)"
description: "Lär dig hur du anpassar och lägger till språk i din resource för en personlig upplevelse → Läs mer nu"
sidebar_label: Lokala filer (Språk)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Vill du ändra språkvariablerna i en resource eller lägga till fler språk som kanske inte finns än? Lokala filer låter dig justera språkvariablerna för din valda resource. 

<InlineVoucher />



## Hitta Lokala Filer

De lokala filerna måste redigeras via en FTP-klient. Om du är ny på FTP rekommenderar vi att du först läser guiden om [FTP-access](gameserver-ftpaccess.md). När du är ansluten, navigera till ESX-resourcedirektorn för den resource du vill redigera. Öppna sedan mappen locales i resourcedirektorn. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

I mappen locales hittar du alla språkfiler som finns för den här resourcen. Här kan du antingen redigera en befintlig fil eller kopiera en befintlig med ett nytt namn för ett nytt språk, som du sedan kan redigera. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Redigera Lokala Filer

Nu kan du justera innehållet i de individuella språkvariablerna i den öppnade locale-filen. Innehållet i språkvariablerna finns efter likhetstecknet inom citationstecken. Anpassa innehållet som du vill och spara ändringarna när du är klar. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Ställ in Locale (Språk)

Språket som används kan definieras via konfigurationsfilen `config.lua` i resourcedirektorn. Justera värdet för `Config.Locale = GetConvar('esx:locale', 'en')` för att ändra språk. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Sammanfattning

Grattis! Om du följt alla steg har du nu lyckats redigera locale-filen för din resource. Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />