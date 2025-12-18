---
id: dedicated-raid
title: "Dedicated Server: RAID Configuratie"
description: "Ontdek hoe RAID-configuraties de data-prestaties en redundantie verbeteren voor dedicated servers met SSD's → Leer er nu meer over"
sidebar_label: RAID Configureren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RAID (Redundant Array of Independent Disks) is een technologie die meerdere harde schijven combineert tot één logische schijf om dataredundantie en/of betere prestaties te bereiken. Er zijn verschillende RAID-niveaus die verschillende combinaties van datadistributie en fouttolerantie bieden.

## Beschikbare RAID-types
Onze dedicated servers hebben momenteel 2 SSD-bays, wat betekent dat er twee mogelijke RAID-configuraties zijn. De eerste is RAID0, dat volumes combineert tot één groot volume, en RAID1, dat volumes spiegelt en data redundant houdt. We duiken dieper in beide opties in de volgende secties.

:::info
RAID0 levert iets snellere lees- en schrijfsnelheden doordat er twee schijven aanwezig zijn.
:::

### RAID0
Bij deze RAID-configuratie worden alle volumes samengevoegd tot één groot volume, bijvoorbeeld van 2 SSD's van elk 1 TB. Er wordt dan een partitie van 2 TB gemaakt die je volledig kunt gebruiken.

Er is geen dataredundantie, dus bij een technische storing is dataverlies vaak onvermijdelijk omdat data in verschillende sectoren wordt weggeschreven.

Als je gevoelige data opslaat, is RAID0 niet aan te raden of moet je in ieder geval regelmatig back-ups maken.

:::info
Als je dedicated server maar 1 SSD heeft, is dit automatisch RAID0.
:::

### RAID1
Deze configuratie is heel anders dan RAID0: hier is je data redundant, wat betekent dat alles wat je opslaat op je server wordt gedupliceerd. Het wordt dus gespiegeld op beide SSD's en blijft beschikbaar zelfs als 1 van de 2 SSD's uitvalt, dus je data is veilig met 1 werkende SSD.

Bij een technische storing hoef je alleen de defecte SSD te vervangen en je server bouwt de RAID opnieuw op, oftewel spiegelt de data weer.

Voor gevoelige data is deze configuratie sterk aanbevolen, maar het is geen vervanging voor back-ups.

:::info
Regelmatige back-ups van alle belangrijke data zijn essentieel!
:::

## De Configuratie Assistent

Tijdens het opstarten van je server moet de RAID-configuratietool gestart worden. Dit doe je door op `F8` te drukken tijdens de juiste opstartfase.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Druk hier op F8 om de RAID-configuratietool te openen

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Na een paar seconden verschijnt dit configuratie-overzicht.

***

Er zijn nu verschillende menu-opties:

* Create Logical Drive  
Maakt een nieuw volume aan.

* View Logical Drive  
Toont de huidige RAID-configuratie.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive  
Hiermee verwijder je de huidige RAID-configuratie, bijvoorbeeld om een nieuwe aan te maken.

* Select Boot Volume  
Hier kun je een ander opslagmedium kiezen om van te booten, wat in ons geval niet nodig is.

* Manage License Keys  
Hier hoef je niets aan te passen, de licenties zijn al vooraf ingesteld.

* Cache Settings  
De cache-optie kun je aanpassen om de lees-/schrijfsnelheden van de SSD iets te verhogen. Tijdens elke schrijfactie worden de laatste datablocks tijdelijk gecachet, bijvoorbeeld voor veiligheid bij stroomuitval. Dit kan een minimale prestatievermindering veroorzaken.

### Een nieuwe RAID aanmaken

Check eerst of er geen volume meer bestaat, open `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Druk op `F8` om de bestaande RAID te verwijderen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Bevestig de verwijdering met `F3`.

***

Als de RAID succesvol verwijderd is, open je `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

Hier zie je al je SSD's en kun je een RAID-configuratie kiezen. Niet alle opties zijn mogelijk met de huidige hardware.

In ons voorbeeld kies je RAID0 of RAID1.

:::info
Je wisselt tussen menu’s met `TAB`
:::

Als je je RAID-configuratie hebt gekozen, bevestig je met `Enter`.

:::info
Sluit de configuratie-assistent af met `ESC`
:::

### Boot Volume selecteren

Als je je RAID hebt aangepast, moet je het bootvolume selecteren. Dit doe je in **Select Boot Volume** door het logische volume te kiezen dat je hebt aangemaakt, anders blijft je server in een bootloop hangen.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Druk op `F8` om op te slaan als bootvolume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Tot slot kun je met `F8` je systeem direct herstarten of met `Enter` terug naar het hoofdmenu. Vergeet niet dat het bootvolume **altijd** ingesteld moet worden als je je RAID-configuratie hebt aangepast.

## Conclusie

Gefeliciteerd, je hebt de RAID op je dedicated server succesvol geconfigureerd! Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂