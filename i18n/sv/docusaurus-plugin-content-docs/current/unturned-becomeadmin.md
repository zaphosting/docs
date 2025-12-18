---
id: unturned-becomeadmin
title: "Unturned: Bli serveradmin"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över servern och bättre hantering i spelet → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Förberedelser

För att kunna lägga till admins på en server måste en konfigurationsfil redigeras. För att undvika problem med att ändringarna ska slå igenom, se till att din server är stoppad innan du börjar!

Dessutom behövs spelarens Steam ID (64-bitars) så att servern kan identifiera spelaren. Det här [verktyget](https://steamidfinder.com/) kan användas som exempel.  
När du är på verktygets sida kan du oftast hitta den info du behöver genom att skriva in spelarens namn.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Öppna konfigurationsfiler

Det finns två sätt att redigera filer på en server.  
Ett sätt är via [FTP-åtkomst](gameserver-ftpaccess.md).

Det andra sättet är att använda Config Editor direkt i webbgränssnittet.  
Här använder vi den inbyggda editorn i webbgränssnittet. För att göra detta öppnar du menyalternativet "Configs" i vänstra sidomenyn under fliken "Settings" på servern.  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

Systemet laddar nu alla tillgängliga konfigurationsfiler och listar dem. Ha lite tålamod, det brukar ta några sekunder. När alla filer är laddade ska filen "commands.dat" redigeras. Klicka på den blå knappen "Open file" så öppnas filen i webbeditorn.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Lägg till admins

Admin eller owner kan nu läggas till i konfigurationen. Observera att owner-rangen bara kan tilldelas en gång!

För att tilldela owner-rangen skriver du in följande på en ny rad:

`owner Steam64IDReplacedHere //<-- Måste bytas ut mot din egen Steam64-ID`

För att lägga till en administratör byter du bara ut "owner" mot "admin":

`admin Steam64IDReplacedHere //<-- Måste bytas ut mot din egen Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

När alla roller är tillagda i configen sparar du med "Save". Servern kan nu startas om och alla spelare som är inlagda i configen får sina rättigheter automatiskt.

## Avslutning

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />