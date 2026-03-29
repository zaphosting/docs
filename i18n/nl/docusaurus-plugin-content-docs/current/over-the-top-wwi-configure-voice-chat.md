---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Voice Chat Instellen"
description: "Leer hoe je voice chat inschakelt en configureert op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Voice Chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Voice chat maakt het mogelijk dat spelers op jouw **Over the Top WWI** server direct met elkaar kunnen praten tijdens het gamen. Dit verbetert de coördinatie, teamwork en de totale beleving, vooral in tactische situaties.

Door de voice chat instellingen aan te passen, bepaal je of communicatie is toegestaan, stel je de kwaliteit in en bepaal je hoe voice chat zich gedraagt tijdens matches.

<InlineVoucher />

## Configuratie

De voice chat instellingen vind je in het serverconfiguratiebestand. Je kunt dit bestand openen en aanpassen via je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. In dit bestand vind je de volgende parameters:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` schakelt voice chat aan of uit op de server
- `VoipQuality` bepaalt het geluidskwaliteitniveau
- `VoipDelay` voegt een vertraging in seconden toe voordat spelers voice chat kunnen gebruiken na het spawnen

Pas deze waarden aan op basis van jouw servervoorkeuren en performance-eisen. Lagere kwaliteitsinstellingen kunnen handig zijn voor servers met veel spelers of beperkte bandbreedte.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je de server. De voice chat instellingen worden dan automatisch toegepast.

## Afsluiting

Gefeliciteerd! Je hebt voice chat succesvol ingesteld op je **Over the Top WWI server**. Zo kunnen spelers effectief communiceren en wordt teamwork tijdens matches een stuk beter.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />