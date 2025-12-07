---
id: dedicated-raid
title: "Dedikerad Server: RAID-konfiguration"
description: "Upptäck hur RAID-konfigurationer förbättrar dataperformance och redundans för dedikerade servrar med SSD → Läs mer nu"
sidebar_label: Konfigurera RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RAID (Redundant Array of Independent Disks) är en teknik som kombinerar flera hårddiskar till en enda logisk enhet för att uppnå dataskydd och/eller ökad prestanda. Det finns olika RAID-nivåer som erbjuder olika kombinationer av datadistribution och fel-tolerans.

## Tillgängliga RAID-typer
Våra dedikerade servrar har för närvarande 2 SSD-platser, vilket innebär att det finns två möjliga RAID-konfigurationer. Den första är RAID0 som används för att slå ihop volymer till en stor volym, och RAID1 som används för att spegla volymer och behålla dataredundans. Vi går in på djupet för båda i följande sektioner.

:::info
RAID0 ger något snabbare läs- och skrivhastigheter tack vare att två diskar används.
:::

### RAID0
I denna RAID-konfiguration kombineras alla befintliga volymer till en stor volym, till exempel från 2 SSD:er, vardera på 1 TB. En 2TB-partition skapas som sedan kan användas fullt ut.

Det finns ingen dataskydd, så vid tekniskt fel är dataförlust ofta oundvikligt eftersom data skrivs i olika sektorer.

Om du lagrar känslig data på ditt system bör RAID0 inte användas, eller åtminstone bör regelbundna systembackup göras.

:::info
Om din dedikerade server bara har 1 SSD är detta automatiskt en RAID0.
:::

### RAID1
Denna konfiguration skiljer sig mycket från RAID0, här finns en redundans av din data, vilket betyder att allt du sparar på servern dupliceras.
Det speglas alltså på båda SSD:erna och skulle finnas tillgängligt vid en felprocent på 50%, så din data är säker med 1 SSD.

Vid tekniskt fel behöver bara den drabbade SSD:n bytas ut och din server bygger upp RAID igen, alltså speglar datan på nytt.
Speciellt för känsligare data rekommenderas denna konfiguration starkt, men det är inget alternativ till att göra backup.

:::info
Regelbundna backuper av all viktig data är ett måste!
:::

## Konfigurationsassistenten

När din server startar måste RAID-konfigurationsverktyget startas. Detta görs genom att trycka på `F8` vid rätt boot-steg.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Tryck på F8 här för att öppna RAID-konfigurationsverktyget

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Efter några sekunder visas denna konfigurationsöversikt.

***

Det finns nu flera menyval:

* Create Logical Drive  
Skapar en ny volym.

* View Logical Drive  
Visar den aktuella RAID-konfigurationen.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive  
Du kan ta bort den nuvarande RAID-konfigurationen, för att till exempel skapa en ny.

* Select Boot Volume  
Du kan starta från ett annat lagringsmedium, vilket inte är nödvändigt i vårt fall här.

* Manage License Keys  
Inget behöver justeras eller ändras här, licenseringen är redan förkonfigurerad.

* Cache Settings  
Cache-alternativet kan justeras för att öka läs-/skrivhastigheterna på SSD:n lite.  
I princip cachas de sista datablocken under varje skrivprocess av säkerhetsskäl, till exempel vid strömavbrott.  
Detta ger en minimal prestandanackdel.

### Skapa en ny RAID

Först kontrollerar vi att det inte finns någon volym kvar, öppna `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Vi trycker `F8` för att ta bort den befintliga RAID:n.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Genom att trycka `F3` bekräftar vi borttagningen.

***

När RAID:n är borttagen öppnar vi `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

Här ser du alla dina SSD:er och kan välja RAID-konfiguration.  
Självklart går inte alla dessa RAID-konfigurationer att genomföra i den aktuella konstellationen.

I vårt exempel väljer vi RAID0 eller RAID1.

:::info
Du kan växla mellan menyerna genom att trycka på `TAB`
:::

När du valt din RAID-konfiguration bekräftar du med `Enter`.

:::info
Du kan stänga konfigurationsassistenten med `ESC`
:::

### Välj Boot Volume

Om du har ändrat din RAID måste du välja boot-volym.  
Det gör du enkelt under **Select Boot Volume**, välj där den logiska enhet du skapat, annars fastnar servern i en bootloop.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Tryck `F8` för att spara som bootvolym**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Till sist kan du med `F8` starta om systemet direkt eller gå tillbaka till huvudmenyn med `Enter`.  
Kom ihåg att boot-volym alltid måste sättas när du ändrat RAID-konfigurationen.

## Slutsats

Grattis, du har nu framgångsrikt konfigurerat RAID på din dedikerade server. Vid frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂