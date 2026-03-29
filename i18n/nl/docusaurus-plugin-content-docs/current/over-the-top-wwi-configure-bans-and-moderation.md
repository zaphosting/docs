---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Bans en Moderatie Instellen"
description: "Leer hoe je banlijsten en moderatie-instellingen configureert op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Bans & Moderatie
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Met de moderatietools in **Over the Top WWI** houd je de controle over het gedrag van spelers en zorg je voor een eerlijke en leuke sfeer op je server. Door banlijsten en moderatie-instellingen te configureren, kun je toegang beperken, straffen beheren en spelers duidelijke instructies geven.

Deze instellingen zijn vooral handig voor communityservers waar actieve moderatie nodig is.

<InlineVoucher />

## Configuratie

Ban- en moderatie-instellingen stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. Zoek hierin de volgende parameters:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` geeft aan welk bestand de permanent gebande spelers bevat  
- `TempBanPathstring` geeft aan welk bestand de tijdelijk gebande spelers bevat  

- `CustomUnBanString` laat je een eigen bericht instellen waarin staat hoe spelers een unban kunnen aanvragen. Bijvoorbeeld een Discord-link of website

### Gebruik van banbestanden

De banbestanden staan in je servermap en bevatten de spelers-ID’s.

Elke gebande speler staat op een nieuwe regel in het bestand:

```
SteamID1
SteamID2
SteamID3
```

Deze bestanden worden automatisch door de server gelezen om toegang voor de genoemde spelers te blokkeren. Door deze instellingen aan te passen bepaal je hoe bans worden afgehandeld en hoe spelers hiertegen in beroep kunnen gaan.

Na het aanpassen van `ServerConfiguration.ini` sla je het bestand op en herstart je je server. De nieuwe moderatie-instellingen worden dan automatisch toegepast.

## Afsluiting

Gefeliciteerd! Je hebt nu succesvol de ban- en moderatie-instellingen op je **Over the Top WWI server** ingesteld. Zo beheer je het gedrag van spelers effectief en houd je je server onder controle.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />