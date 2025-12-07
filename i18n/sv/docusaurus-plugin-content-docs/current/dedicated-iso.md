---
id: dedicated-iso
title: "Dedikerad Server: Egen ISO"
description: "Upptäck hur du enkelt monterar ISO-filer via iLO eller fjärrkonsol för att snabbt starta din server → Läs mer nu"
sidebar_label: Egen ISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vill du montera en ISO? Kanske en av våra eller föredrar du din egen? Inga problem. Vi erbjuder ett stort urval av ISO-filer och även fler alternativ.

:::danger Val och användning av ISO-filer
När du använder din egen ISO (OS), som vi inte aktivt tillhandahåller, kan vi inte garantera funktionalitet vid eventuella problem.
:::



## Tillgängliga monteringsalternativ
Det finns två sätt att montera din egen ISO-fil. Det är alltid nödvändigt att starta om servern för att ladda filen. Generellt finns inga begränsningar för att montera en fil, det viktiga är att ISO-filen är bootbar.

## Montering via iLO
Öppna din iLO Management Interface och gå till "Virtual" Media
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Fyll i URL:en som pekar på ISO-filen du vill använda. Se till att länken slutar med .iso
* Tryck på "Insert Media"
* Klicka på "Server Reset" för att starta om systemet.

Din ISO-fil kommer nu att laddas.

## Montering via fjärrkonsol

**HTML5-konsol**
Du kan enkelt montera filen direkt i fjärrkonsolen:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Klicka på discsymbolen
* Välj "CD/DVD"
* Välj mellan "Scripted media URL" eller "Local .iso File"

Skillnaden mellan "Scripted media URL" och "Local .iso File" är att du kan montera en ISO-fil som är uppladdad på en server/webbplats eller direkt välja en fil från din dator med "Local *.iso File" utan att behöva ladda upp den någonstans.

När du valt din ISO-fil krävs en omstart av servern.


**Java-konsol**
Precis som i HTML5-konsolen monteras ISO-filen direkt i applikationen.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Öppna "Virtual Drives"

Skillnaden mellan "Image File CD/DVD-ROM" och "URL CD/DVD-ROM" är att du kan montera en ISO-fil som är uppladdad på en server/webbplats eller direkt välja en fil från din dator med "Image File CD/DVD-ROM" utan att behöva ladda upp den.

Efter att du injicerat din önskade ISO-fil krävs en omstart av servern.


## Slutsats
Grattis, du har nu framgångsrikt valt och monterat din ISO-fil. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂


