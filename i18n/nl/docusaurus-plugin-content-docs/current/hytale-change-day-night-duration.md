---
id: hytale-change-day-night-duration
title: "Hytale: Dag-/Nachtduur Aanpassen"
description: "Ontdek hoe je tussen Werelden kunt teleporteren op een Hytale-server → Leer het nu"
sidebar_label: Dag-/Nachtduur Aanpassen
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

De dag- en nachtcyclus op een Hytale-server bepaalt hoe lang de dag- en nachtfasen duren binnen een wereld. Door de duur van deze cycli aan te passen, kunnen servereigenaren de gameplay, sfeer en moeilijkheidsgraad beïnvloeden.

Kortere nachten zorgen voor een relaxtere vibe, terwijl langere nachten juist meer uitdaging en spanning brengen. Door de dag- en nachtlengte te customizen, pas je de wereld perfect aan op de gewenste speelstijl van jouw server.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog volop in ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

<InlineVoucher />



## Configuratie

Om de dag- en nachtduur aan te passen, moet je de configuratie direct wijzigen in het `config.json` bestand van de wereld, te vinden op:

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

Als de configuratie-instellingen voor dag- en nachtduur nog niet bestaan, moet je deze handmatig toevoegen. Scroll door het bestand tot je de volgende regel vindt:

```
"GameplayConfig":
```

Voeg direct onder deze regel de instellingen voor dag- en nachtduur toe:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Deze waarden bepalen de lengte van dag en nacht in seconden. Bijvoorbeeld, een waarde van `1800` voor dag betekent een langere dagfase, terwijl `1000` voor nacht bepaalt hoe lang de nacht duurt voordat de cyclus opnieuw begint. Sla na het aanpassen het `config.json` bestand op en start de server opnieuw.



## Conclusie

Na deze configuratie heb jij volledige controle over hoe lang dag en nacht duren in elke wereld op jouw Hytale-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />