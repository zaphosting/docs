---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Ronde-instellingen Configureren"
description: "Leer hoe je de ronde duur en match flow instelt op je Over the Top WWI server → Leer nu meer"
sidebar_label: Ronde-instellingen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Ronde-instellingen in **Over the Top WWI** bepalen hoe lang matches duren en hoe de gameplay verloopt. Door deze waarden aan te passen, bepaal je het tempo van de match, de lengte van de rondes en de algemene flow van de sessie.

Dit is vooral belangrijk om snelle matches te balanceren tegenover langere, strategische gevechten.

<InlineVoucher />

## Configuratie

Ronde-instellingen stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. In dit bestand vind je de volgende parameters:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` bepaalt hoeveel rondes er per match gespeeld worden
- `MaxMapTime` stelt de maximale duur van een map in, in minuten
- `FinalRecapTimer2` regelt hoe lang de eind-van-de-ronde samenvatting wordt getoond

- `PersistentMatch` bepaalt of tijd en score doorlopen over de rondes heen

  - `0` → Uitgeschakeld
  - `1` → Ingeschakeld

Pas deze waarden aan om kortere matches met snellere rotaties te maken, of juist langere sessies met uitgebreide gameplay.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe ronde-instellingen worden dan automatisch toegepast.

## Afsluiting

Gefeliciteerd! Je hebt de ronde-instellingen op je **Over the Top WWI server** succesvol geconfigureerd. Zo bepaal je zelf de matchduur en verbeter je de gameplay flow op je server.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />