---
title: "Over the Top WWI: Game Mode Wijzigen"
description: "Leer hoe je de game mode op je Over the Top WWI server aanpast → Ontdek het nu"
sidebar_label: Game Mode Wijzigen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

De game mode op een **Over the Top WWI** server bepaalt hoe matches gespeeld worden en welke doelen spelers moeten behalen. Verschillende game modes kunnen de snelheid, strategie en de hele gameplay ervaring flink veranderen.

Door de game mode aan te passen, kun je je server afstemmen op grootschalige gevechten, verdedigende gameplay of doelgerichte scenario’s, afhankelijk van wat jouw community het leukst vindt.

<InlineVoucher />

## Configuratie

De game mode stel je in via het serverconfiguratiebestand. Je kunt dit bestand openen en aanpassen in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. Zoek hierin de volgende parameter:

```
CurrentGameMode = 2
```

De waarde bepaalt welke game mode actief is op je server. Beschikbare waarden:

- `2` → Conquest
- `3` → Siege

De gekozen waarde bepaalt de kernregels van de gameplay voor elke match.

- **Conquest (2)** draait om het veroveren en vasthouden van doelen verspreid over de map, wat zorgt voor constante actie en teamwork.
- **Siege (3)** is meestal meer verdedigend, waarbij het ene team aanvalt en het andere strategische posities verdedigt.

Welke mode je kiest hangt af van je favoriete speelstijl en het aantal spelers.

Na het aanpassen van de waarde in `ServerConfiguration.ini`, sla je het bestand op en herstart je de server. De nieuwe game mode wordt toegepast bij de volgende match of mapwissel.

## Afsluiting

Gefeliciteerd! Je hebt de game mode op je **Over the Top WWI server** succesvol aangepast. Met de juiste mode kun je de gameplay ervaring vormgeven en beter laten aansluiten bij wat jouw community wil.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />