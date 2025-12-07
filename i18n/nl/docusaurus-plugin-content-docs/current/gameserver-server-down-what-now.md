---
id: gameserver-server-down-what-now
title: 'Gameserver: Server down - Wat nu?'
description: "Leer hoe je game server crashes kunt diagnosticeren door logbestanden te analyseren om fouten te vinden en effectieve oplossingen te ontdekken → Ontdek het nu"
sidebar_label: Server crash - Wat te doen?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Als je gameserver down is, kan dat verschillende oorzaken hebben. **Belangrijk is dat je niet meteen probeert te herstarten, maar eerst even in het logbestand kijkt. Daar staan meestal **foutmeldingen** die precies aangeven waarom de server is gecrasht. **Als je de server direct herstart, wordt het logbestand opnieuw aangemaakt en het oude verwijderd. Dan kun je helaas geen fouten meer terugzien.**

<InlineVoucher />

## Logbestand bekijken

Je kunt het logbestand makkelijk openen via het menu aan de linkerkant.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Daarna kun je het bekijken via het groene oogje. **Belangrijk is dat je altijd het nieuwste log opent.
Je herkent ‘m aan de datum of de naam.**

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Als je ‘m open hebt, check je ‘m op fouten (**Fouten bevatten vaak woorden als "Error", "Cant find", "Couldnt load"**)

In de screenshot hieronder zie je een voorbeeld van een FivemServer met een verkeerde server licentiesleutel.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Je kunt deze fout dan bijvoorbeeld googelen om te zien of ‘ie bekend is. Meestal vind je zo snel de oorzaak van de fout.

Als je niks vindt over de fout, kun je naar de Live Chat gaan en de fout als tekst of screenshot doorsturen.

## Logbestand zonder inhoud

Dit kan helaas ook gebeuren. Als het logbestand leeg is, is het waarschijnlijk niet aangemaakt omdat de server meteen down ging of verwijderd werd door een herstart. In dat geval kun je alleen proberen de server te herstarten in de hoop dat de fout weer verschijnt of dat de server weer draait.

## Geen oplossing in live chat

Als je geen oplossing vond via Google of de live chat, zijn er 2 opties. De eerste is een ticket openen en de server laten zoals ‘ie is, zodat de support er dieper naar kan kijken.

De tweede optie is een backup terugzetten of de server opnieuw installeren.

### Variant 1 - Backup terugzetten

Om een backup terug te zetten ga je simpelweg naar Backups links in het menu en importeer je de nieuwste backup via de groene pijl. Daarna zou je server weer normaal moeten draaien.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variant 2 - Server opnieuw installeren

De herinstallatie start je via "Instellingen" aan de linkerkant. Daarna wordt de hele server teruggezet naar dag 1 (je kunt ook alle instellingen resetten via "**Reset all options**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Herinstallatie zonder succes

Dit is helaas het slechtste scenario. Dan is het alleen nog mogelijk om de server te laten checken via chat of ticket, want dan is er een ernstiger probleem. We doen dan ons best om het zo snel mogelijk op te lossen zodat jij je service weer normaal kunt gebruiken.

<InlineVoucher />