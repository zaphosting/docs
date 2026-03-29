---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Maprotatie Regels Instellen"
description: "Leer hoe je het maprotatiegedrag op je Over the Top WWI-server configureert → Ontdek het nu"
sidebar_label: Maprotatie
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Maprotatieregels in **Over the Top WWI** bepalen hoe maps geselecteerd en gespeeld worden op basis van het aantal spelers. Zo zorg je ervoor dat maps altijd in balans zijn en passen bij het aantal actieve spelers.

Door deze instellingen aan te passen, voorkom je dat grote maps gespeeld worden met te weinig spelers of dat kleine maps juist te druk worden.

<InlineVoucher />

## Configuratie

Maprotatieregels stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek het bestand `ServerConfiguration.ini` en open het. Zoek hierin de volgende parameter:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` schakelt automatische mapselectie op basis van spelersaantal aan of uit

  - `False` → Uitgeschakeld
  - `True` → Ingeschakeld


Als deze aan staat, checkt de server het huidige aantal spelers en past de mapselectie hierop aan. Zo worden maps gekozen die passen bij het aantal spelers, wat zorgt voor een gebalanceerde gameplay.

Het systeem gebruikt interne drempels om te bepalen of een map geschikt is, zodat grote maps niet onderbezet raken en kleine maps niet overvol worden.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe maprotatie-instellingen worden dan automatisch toegepast.

## Afsluiting

Gefeliciteerd! Je hebt de maprotatieregels op je **Over the Top WWI-server** succesvol ingesteld. Zo zorg je voor een gebalanceerde game-ervaring door mapgrootte af te stemmen op het aantal spelers.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />