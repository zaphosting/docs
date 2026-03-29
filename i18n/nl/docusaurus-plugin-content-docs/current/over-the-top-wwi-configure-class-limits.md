---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Class Limits Instellen"
description: "Leer hoe je class limits instelt op je Over the Top WWI server → Leer het nu"
sidebar_label: Class Limits
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Class limits in **Over the Top WWI** bepalen hoeveel spelers bepaalde unit types kunnen gebruiken, zoals sluipschutters, sappers of zware units. Door deze limieten aan te passen, zorg je voor een betere balans in de gameplay en voorkom je dat bepaalde classes te vaak gekozen worden.

Met het instellen van class limits zorg je voor eerlijke teamcomposities en een meer gestructureerde, tactische game-ervaring.

<InlineVoucher />

## Configuratie

Class limits stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. In dit bestand vind je de volgende parameters:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` zet class restricties aan of uit
- `0` → Uitgeschakeld
- `1` → Ingeschakeld

- `PercentofCavPerTeam` bepaalt het percentage cavalerie units per team

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` geven aan hoeveel spelers elke class mogen kiezen

- `NumberofInfOfficers` regelt het aantal officier-rollen dat beschikbaar is

- `MinimumNumOfPlayerForClassLimits` bepaalt vanaf hoeveel spelers op de server de class limits actief worden

Pas deze waarden aan om te bepalen hoeveel spelers elke class kunnen kiezen en balanceer je server naar jouw favoriete speelstijl.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe class limits worden dan automatisch toegepast.

## Afsluiting

Gefeliciteerd! Je hebt succesvol class limits ingesteld op je **Over the Top WWI server**. Zo zorg je voor gebalanceerde teams en een betere gameplay ervaring.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />