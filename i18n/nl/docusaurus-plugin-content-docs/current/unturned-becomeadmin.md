---
id: unturned-becomeadmin
title: "Unturned: Word server admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en betere in-game beheer → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toekennen van administratorrechten maakt het eenvoudig om je server volledig te beheren. Als admin kun je alle beschikbare opties en functies van het spel direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten aan je server toevoegt.  
<InlineVoucher />

## Voorbereidingen

Om admins toe te voegen op een server moet er een configbestand aangepast worden. Zorg ervoor dat je server eerst gestopt is, zodat de wijzigingen probleemloos toegepast kunnen worden!

Daarnaast heb je de Steam ID (64-bit) van de speler nodig, zodat de server deze kan herkennen. Je kunt bijvoorbeeld deze [Tool](https://steamidfinder.com/) gebruiken.  
Op de site van de tool kun je meestal de benodigde info vinden door de naam van de speler in te voeren.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Configbestanden openen

Er zijn twee manieren om de bestanden op je server te bewerken.  
De ene manier is via [FTP-toegang](gameserver-ftpaccess.md).

De andere manier is via de Config Editor in het webinterface zelf.  
We gebruiken hier de ingebouwde editor van het webinterface. Open hiervoor in de linkerzijbalk van je server onder het tabblad "Instellingen" de optie "Configs".  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

Het systeem laadt nu alle beschikbare configs en toont ze. Dit kan een paar seconden duren, even geduld dus. Zodra alle configbestanden geladen zijn, moet je het bestand "commands.dat" openen. Klik hiervoor op de blauwe knop "Bestand openen", waarna het bestand in de webeditor verschijnt.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Admins toevoegen

Je kunt nu admins of de eigenaar (owner) toewijzen in de config. Let op: de owner-rang kan maar één keer worden toegekend!

Voeg hiervoor een nieuwe regel toe voor de owner-rang:

`owner Steam64IDReplacedHere //<-- Vervang dit door je eigen Steam64-ID`

Wil je een Administrator toevoegen, vervang je "owner" simpelweg door "admin":

`admin Steam64IDReplacedHere //<-- Vervang dit door je eigen Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Als je alle rangen hebt toegevoegd, sla je de config op met "Opslaan". Start daarna je server opnieuw op. Alle spelers die in de config staan krijgen automatisch hun rang toegewezen.

## Afsluiting

Gefeliciteerd, je hebt succesvol administratorrechten ingesteld! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />