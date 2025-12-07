---
id: minecraft-timings-report
title: "Minecraft: Serverproblemen opsporen met timings-rapport"
description: "Ontdek hoe je serverprestaties analyseert met timings-rapporten om lag te identificeren en je server te optimaliseren → Leer het nu"
sidebar_label: Timings-rapport
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Uitleg

### Wat is een timings-rapport?

Timings-rapporten lijken een beetje op de taakbeheerder van je computer en helpen je vooral bij het opsporen van lag. Een timings-rapport registreert alle activiteiten van de server en toont deze visueel.

## Timings-rapport

## Timings-rapport aanmaken

Afhankelijk van de server-software wordt het timings-rapport op een andere manier gemaakt. In principe moet je eerst de opname starten met het volgende commando (behalve bij **Paper Spigot** (tenzij de instellingen zijn aangepast)):

`/timings start`

Tijdens het opnemen moet je de server gebruiken zoals je normaal doet, zodat de problemen goed worden vastgelegd en later gedetailleerd geanalyseerd kunnen worden. De opname moet minimaal **10 minuten** duren, liever langer.

## Timings-rapport exporteren

Om het timings-rapport te maken en te exporteren, gebruik je het volgende commando:

`/timings paste`

Na een paar seconden verschijnt er een bericht dat de export gelukt is. Het timings-rapport kun je openen door op de link te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analyse

### ↔️ Waarden verfijnen

Zodra het timings-rapport is geëxporteerd en geopend zoals hierboven beschreven, verschijnt er een venster dat er ongeveer zo uitziet:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Bekijk eerst de grafiek goed om ruwe waarden van de individuele meetpunten te checken door met je muis over de punten te bewegen.

Om zo nauwkeurig mogelijke waarden te krijgen die wijzen op een mogelijk probleem op de server, kun je de problematische periode verfijnen met de sliders onder de grafiek, zoals hier:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Serverwaarden onderzoeken

Er zijn in totaal 3 kolommen. Zoals je op de screenshot hieronder ziet, laat vakje 1 zien hoeveel % van een tick (20 ticks is 1 seconde) het hoofdproces nodig heeft. Je ziet ook hoe vaak dit proces tijdens de opname is uitgevoerd.

In vakje 2 zie je preciezere waarden in milliseconden, maar let op: deze tijd mag nooit hoger zijn dan 50ms. Als dat wel zo is, veroorzaakt dat een kettingreactie waarbij alle volgende processen zich opstapelen, wat uiteindelijk lag veroorzaakt omdat de server de processen vertraagd verwerkt.

:::info
De **Full Server Tick** kun je meestal negeren, want die waarden zitten altijd in het rode gebied, maar dat is geen groot probleem.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

Je moet sowieso altijd de gekleurde, gemarkeerde waardepunten goed onderzoeken.

In dit voorbeeld kijken we naar het proces voor alle entiteiten (dieren, monsters, items, etc.), omdat de waarden al oranje zijn. Hieruit kun je direct concluderen dat er waarschijnlijk te veel entiteiten op de server zijn. Misschien staan er mob farms aan, of worden er massa’s nieuwe mobs gespawned. Heb je problemen met te veel entiteiten? Dan kun je de spawnrate in de instellingen verlagen of plugins installeren die het aantal entiteiten limiteren en ze automatisch verwijderen als dat nodig is.

Zoals hierboven beschreven toont de lijst meestal het hoofdproces. Door op een proces te klikken, kun je individuele processen per entiteitstype bekijken en onderzoeken. Let ook op kolom 2 en 3 zoals eerder genoemd.

Je ziet dat **Minecraft::tickEntity - nms.EntitySkeleton** veel processen heeft uitgevoerd. Ook hier kunnen mob farms de boosdoener zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Een ander proces met al oranje waarden zijn waiting blocks. Blokken die wachten zijn vaak inefficiënt omdat de server elke tick de status van elk wachtend blok moet checken. Denk bijvoorbeeld aan zwevend zand, grind of zelfs lava en water.

Als er veel water wordt gebruikt op een grote farm, kan dat allerlei problemen veroorzaken. Het probleem kan ook ontstaan als er nieuwe chunks worden gegenereerd en waterbronnen in bergen worden aangemaakt. De server moet dan telkens opnieuw de status berekenen zodat het water vloeiend stroomt. Daarnaast moet de server de chunks aanmaken en laden, wat ook een intensief proces is.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Alle verdere onderzoeken kun je op dezelfde manier doen, want de stappen zijn voor elk proces hetzelfde. Heb je toch hulp nodig bij de analyse? Wij staan altijd voor je klaar!

### Plugins checken

Soms worden problemen ook veroorzaakt door plugins. Om te checken of een plugin de oorzaak is, kun je tijdelijk plugins van de server verwijderen en de situatie opnieuw bekijken.

Als er een probleem met plugins is, kun je dat ook onderzoeken in het tabblad "Plugins". De waarden staan ook in drie kolommen, met dezelfde structuur als de normale serverwaarden hierboven. Het verschil is dat er geen hoofdproces wordt getoond, maar de plugin zelf. Je kunt nog steeds op processen klikken om ze te bekijken en de waarden te onderzoeken.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />