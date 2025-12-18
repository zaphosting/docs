---
id: fivem-esx-addcarstoshop
title: "FiveM: Auto's toevoegen aan de shop"
description: "Ontdek hoe je voertuigen beheert en toevoegt aan je database voor een gepersonaliseerde autoshop ervaring → Leer het nu"
sidebar_label: Auto's toevoegen aan dealer
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Toegang tot de database

Allereerst moeten we verbinding maken met onze database. Dit doen we onder het tabblad "Databases"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Daar klikken we op het blauwe icoon en loggen we in met onze gegevens, die we ook op de pagina terugvinden.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Spawn namen vinden

Vervolgens moeten we de spawn naam van de auto achterhalen. Dit kan door simpelweg te experimenteren of door te zoeken op de volgende pagina:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Nieuw voertuig toevoegen

Als we een auto hebben gekozen, kunnen we deze aan de lijst toevoegen.

:::info
Standaard staan er al veel auto's in de autoshop. Check eerst of jouw auto er al tussen staat.
:::

Allereerst checken we de autocatogorieën. Zo weten we welke we kunnen toevoegen.
Dit doen we in de "vehicle_categories" tabel

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Hier hebben we de kolom "name" nodig. Die onthouden we.


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

Daarna gaan we naar de "vehicles" tabel.
En klikken we op Insert


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Nu voegen we een nieuw voertuig toe. Een korte uitleg wat wat betekent:

**name** De naam die in de shop wordt weergegeven  
**model** Spawn naam (zorg dat deze in kleine letters is geschreven)  
**price** Prijs van het voertuig  
**category** De categorie die we net hebben opgezocht  

Ik heb hier nog een klein voorbeeld voor jullie:


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />