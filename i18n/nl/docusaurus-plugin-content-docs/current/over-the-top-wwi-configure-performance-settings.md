---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Serverprestaties Optimaliseren"
description: "Leer hoe je de prestaties en het servergedrag van je Over the Top WWI-server optimaliseert → Ontdek het nu"
sidebar_label: Prestatie-instellingen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Prestatie-instellingen in **Over the Top WWI** bepalen hoe soepel je server draait, vooral bij veel spelers of intensief AI-gebruik. De juiste configuratie verbetert de stabiliteit, vermindert lag en zorgt voor een betere game-ervaring voor iedereen.

Door deze waarden aan te passen, kun je een balans vinden tussen visuele simulatie, AI-berekeningen en serverbelasting.

<InlineVoucher />

## Configuratie

Prestatie-instellingen stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. In dit bestand vind je de volgende parameters:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` bepaalt het serverprestatieprofiel

  - `0` → Standaard
  - `1` → Optimalisatie voor hogere spelersaantallen
  - `2` → Optimalisatie voor zeer hoge spelersaantallen

- `NavCalcsPerFrame` regelt hoeveel navigatieberekeningen per frame worden verwerkt
- `NavMeshFrames` bepaalt hoe vaak navigatienetwerken worden bijgewerkt
- `NavMeshAutoSeed` beïnvloedt hoe AI-navigatiepaden worden gegenereerd
- `ResetIfNoPlayers` reset de server automatisch als er geen spelers verbonden zijn

  - `0` → Uitgeschakeld
  - `1` → Ingeschakeld

Door deze instellingen aan te passen, verbeter je de serverprestaties, vooral bij veel bots of grote gevechten.

Sla na het aanpassen van `ServerConfiguration.ini` het bestand op en herstart je server. De nieuwe prestatie-instellingen worden dan automatisch toegepast.

## Conclusie

Gefeliciteerd! Je hebt de prestatie-instellingen van je **Over the Top WWI-server** succesvol geoptimaliseerd. Met de juiste afstemming blijft je server stabiel en draait het spel soepel, zelfs bij zware belasting.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />