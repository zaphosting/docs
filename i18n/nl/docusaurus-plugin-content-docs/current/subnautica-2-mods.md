---
id: subnautica-2-mods
title: "Subnautica 2: Mods Installeren"
description: "Leer hoe je Subnautica 2 mods installeert op je gameserver door Lua- of C++-mods toe te voegen aan de juiste map, zodat je Subnautica-server ze automatisch laadt bij het opstarten. -> Leer nu meer"
sidebar_label: "Mods Installeren"
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Mods stellen je in staat om je Subnautica 2 serverervaring aan te passen en uit te breiden met nieuwe gameplayfuncties, verbeterde mechanics of verse content. Met mods creëer je een gevarieerdere en boeiendere omgeving voor jou en je spelers. Deze gids laat je zien hoe je Subnautica 2 mods installeert op je ZAP-Hosting gameserver door ondersteunde Lua- of C++-mods naar de juiste map te uploaden, zodat ze automatisch geladen worden bij het opstarten van de server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, heb je toegang nodig tot je Subnautica 2 gameserverbestanden via de ZAP-Hosting webinterface of een beschikbare bestandsbeheeroptie.

:::info Vereist Mod Type
Gebruik alleen Lua- of C++-mods die specifiek voor Subnautica 2 zijn ontworpen. Mods voor andere games, zoals Subnautica 1 of Subnautica Below Zero, zijn mogelijk niet compatibel.
:::

:::note Mod Downloadbronnen
Subnautica 2 mods zijn bijvoorbeeld te vinden op communityplatforms zoals [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Omdat externe modpagina’s kunnen veranderen, moet je altijd de modbeschrijving en installatie-instructies controleren voordat je bestanden uploadt.
:::

## Compatibele Mods Downloaden

Download eerst de mods die je op je server wilt gebruiken. Zorg dat de mod specifiek bedoeld is voor **Subnautica 2** en controleer of de maker extra vereisten vermeldt.

### Controleer de Modinhoud

Na het downloaden van een mod-archief, pak je deze uit op je lokale computer en bekijk je de meegeleverde bestanden.

Let vooral op:

- Lua-scriptbestanden
- C++ mod-bestanden
- een mappenstructuur van de modmaker
- een `README`, installatie-opmerkingen of afhankelijkhedenlijst

:::caution Controleer Compatibiliteit
Niet alle mods zijn geschikt voor servers. Sommige mods zijn alleen voor de client en werken mogelijk niet op een dedicated Subnautica 2 gameserver. Als de maker geen serverondersteuning vermeldt, test dan eerst goed voordat je de mod in productie gebruikt.
:::

## Toegang tot je Gameserverbestanden

Open vervolgens het bestandssysteem van je Subnautica 2 gameserver en zoek de hoofdservermap.

Gebruik je de ZAP-Hosting webinterface, open dan de bestandsbeheerder van je gameserver en navigeer naar de rootmap van de serverinstallatie.

### Vind de Mods Map

In de hoofdmap van de gameserver vind je de map `mods`.

De installatiedoelmap is:

```text
[hoofd_gameserver_map]/mods
```

Vervang `[hoofd_gameserver_map]` door de basisdirectory van je Subnautica 2 serverbestanden.

:::info Automatisch Mods Laden
De server controleert tijdens het opstarten de map `mods`. Als een ondersteunde Lua- of C++-mod correct daar geplaatst is, wordt deze automatisch geladen bij de volgende serverstart.
:::

## Mods Uploaden en Installeren

Als je de juiste modbestanden hebt en de map `mods` geopend is, kun je de modbestanden uploaden.

### Kopieer de Modbestanden

Upload of verplaats de uitgepakte Lua- of C++-modbestanden naar de map `mods` in je hoofdgameserverdirectory.

Dit kan betekenen:

- een enkel bestand direct in `mods` uploaden
- een complete modmap in `mods` uploaden
- de mappenstructuur exact behouden zoals door de maker geleverd

### Behoud de Originele Structuur

Als het gedownloade archief al een modmap bevat, herschik dan de interne bestanden niet tenzij de maker dat expliciet aangeeft.

| Item | Wat te doen |
| --- | --- |
| Enkel Lua modbestand | Upload naar de map `mods` |
| Enkel C++ modbestand | Upload naar de map `mods` |
| Mod op basis van een map | Upload de volledige map naar `mods` |
| Archiefbestand zoals `.zip` | Pak eerst uit, upload daarna de inhoud indien nodig |

:::caution Upload Geen Gecomprimeerde Archieven Tenzij Expliciet Ondersteund
Als je alleen een `.zip` of ander archiefbestand uploadt zonder uit te pakken, kan de server de mod niet detecteren. Upload tenzij anders vermeld door de maker altijd de uitgepakte bestanden of mappen.
:::

## Herstart de Server

Na het uploaden van de mods, herstart je je Subnautica 2 gameserver.

Dit is nodig omdat de server mods tijdens het opstarten laadt. Als de server al draait, worden nieuw geüploade bestanden meestal pas bij de volgende start toegepast.

### Bevestig dat de Mod is Geladen

Controleer na de herstart of de mod actief is in-game of via beschikbare logs of output van je server.

Omdat modgedrag kan verschillen, kan bevestiging bestaan uit:

- veranderd gameplaygedrag
- nieuwe commando’s of functies
- zichtbare logvermeldingen van de mod
- succesvolle serverstart zonder fouten

:::tip Installeer Mods Eén voor Eén
Wil je meerdere mods gebruiken, installeer en test ze dan één voor één. Zo kun je makkelijker achterhalen welke mod problemen veroorzaakt als de server niet meer goed start.
:::

## Problemen Oplossen

Werken je Subnautica 2 mods niet? Controleer dan deze veelvoorkomende oorzaken.

### Veelvoorkomende Problemen

| Probleem | Mogelijke oorzaak | Oplossing |
| --- | --- | --- |
| Mod laadt niet | Bestanden in verkeerde map geüpload | Zorg dat bestanden in de map `mods` in de hoofdgameserverdirectory staan |
| Server start, maar mod werkt niet | Mod is alleen client-side of niet compatibel | Controleer de modpagina en bevestig dedicated serverondersteuning |
| Server start niet | Kapotte modbestanden of versieconflict | Verwijder de laatst geïnstalleerde mod en herstart de server |
| Modbestanden zijn aanwezig maar worden genegeerd | Archief geüpload in plaats van uitgepakte bestanden | Pak de download uit en upload de echte modbestanden |
| Meerdere mods conflicteren | Twee mods wijzigen hetzelfde gedrag | Test elke mod apart en houd alleen compatibele combinaties |

### Verwijder een Probleemmod

Geeft een nieuw geïnstalleerde mod problemen? Verwijder dan het bijbehorende bestand of de modmap uit de map `mods` en herstart de server.

```text
[hoofd_gameserver_map]/mods
```

:::danger Gebruik Alleen Betrouwbare Modbronnen
Download mods alleen van bronnen die je vertrouwt. Externe bestanden kunnen kapotte, verouderde of schadelijke inhoud bevatten. Controleer de modpagina goed en vermijd onbekende downloads zonder duidelijke installatie- of compatibiliteitsinformatie.
:::

## Beste Praktijken

Om je server stabiel te houden, beheer je mods het beste zorgvuldig in plaats van er veel tegelijk te installeren.

### Aanbevolen Werkwijze

1. Download één compatibele Subnautica 2 mod.
2. Pak de bestanden lokaal uit.
3. Upload de bestanden of map naar de servermap `mods`.
4. Herstart de server.
5. Test de functionaliteit.
6. Herhaal voor de volgende mod.

### Houd een Lokale Backup Bij

Maak voordat je je actieve modsetup wijzigt een backup van:

- je huidige modbestanden
- gerelateerde configuratiebestanden
- een lijst van geïnstalleerde mods en hun versies

Zo herstel je snel een werkende setup als een nieuwe mod problemen veroorzaakt.

## Conclusie

Gefeliciteerd, je hebt succesvol mods geïnstalleerd op je Subnautica 2 gameserver. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂