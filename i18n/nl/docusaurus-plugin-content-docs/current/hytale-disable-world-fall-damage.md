---
id: hytale-disable-world-fall-damage
title: "Hytale: Valsschade in de Wereld Uitschakelen"
description: "Ontdek hoe je valsschade op je Hytale-server uitschakelt → Leer het nu"
sidebar_label: Valsschade Uitschakelen
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Op een Hytale-server horen zwaartekracht en valsschade bij de gameplay. Als valsschade aanstaat, krijgen spelers schade als ze van grote hoogtes vallen. Staat het uit, dan kunnen ze zonder schade vallen. Valsschade uitschakelen is superhandig voor creative servers, bouwprojecten, testomgevingen of elke situatie waarin valsschade de game-ervaring niet mag beïnvloeden.

<InlineVoucher />



## Configuratie

Valsschade regel je per wereld via het configuratiebestand van die wereld. Elke wereld in je server-universum heeft z’n eigen `config.json`, en daarin staat een instelling die bepaalt of valsschade aanstaat.

Wil je valsschade uitzetten? Open dan het `config.json` bestand van de wereld in de map `universe/worlds/<wereld_naam>/config.json`. Zoek de instelling die valsschade regelt, meestal een Boolean zoals `IsFallDamageEnabled`, en zet die op `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Als deze waarde op `false` staat, krijgen spelers geen schade meer van vallen. Wil je valsschade juist aanhouden? Zet het dan op `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Sla het bestand op en **herstart de server**. De configuratie wordt pas toegepast als de wereld opnieuw geladen wordt, dus een herstart is nodig om de wijziging actief te maken.



## Conclusie

Door de valsschade-vlag in het configuratiebestand van de wereld aan te passen, bepaal jij of spelers schade krijgen van vallen. Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die staat elke dag voor je klaar! 🙂

<InlineVoucher />