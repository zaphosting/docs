---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Damage-instellingen Configureren"
description: "Leer hoe je schade en gevechtsgedrag aanpast op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Damage-instellingen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Damage-instellingen in **Over the Top WWI** bepalen hoe dodelijk gevechten zijn en hoe wapens zich gedragen tijdens het spelen. Door deze waarden aan te passen, creëer je een realistischere ervaring of juist een meer casual en vergevingsgezinde sfeer.

Door schade-multipliers en gevechtsmechanieken te tweaken, bepaal je hoe snel spelers uitgeschakeld worden en hoe gevechten verlopen.

<InlineVoucher />

## Configuratie

Je stelt de damage-instellingen in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. In dit bestand vind je de volgende parameters:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` regelt de schade van afstandswapens

- `MeleeDamageMulti` bepaalt de schade van melee-aanvallen

- `ShootingVelocityMulti` beïnvloedt de snelheid van projectielen en kan nauwkeurigheid en hit-registratie beïnvloeden

- `DragEffector` bepaalt hoe snel kogels snelheid verliezen over afstand

- `WindEffector` geeft aan hoe sterk de wind de kogelbaan beïnvloedt

- `RandomEffectorr` voegt willekeur toe aan kogelgedrag, wat de nauwkeurigheid beïnvloedt

Door deze waarden aan te passen, kun je realistischere ballistiek creëren of juist de combat mechanics vereenvoudigen, afhankelijk van de stijl van jouw server.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je de server. De nieuwe damage- en gevechtsinstellingen worden dan automatisch toegepast.

## Conclusie

Nice! Je hebt de damage-instellingen op je **Over the Top WWI server** succesvol geconfigureerd. Door deze parameters te finetunen, bepaal je het gevechtsgedrag en creëer je een gameplay-ervaring die perfect past bij jouw community.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />