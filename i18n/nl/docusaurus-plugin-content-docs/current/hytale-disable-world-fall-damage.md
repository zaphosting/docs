---
id: hytale-disable-world-fall-damage
title: "Hytale: Valbeschadiging in de Wereld Uitschakelen"
description: "Ontdek hoe je valbeschadiging op je Hytale-server uitschakelt → Leer het nu"
sidebar_label: Valbeschadiging Uitschakelen
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Op een Hytale-server horen zwaartekracht en valbeschadiging bij de gameplay. Als valbeschadiging aanstaat, krijgen spelers schade als ze van grote hoogtes vallen. Staat het uit, dan kunnen ze zonder schade vallen. Valbeschadiging uitschakelen is superhandig voor creative servers, bouwprojecten, testomgevingen of elke situatie waarin valbeschadiging de ervaring niet mag verpesten.

<InlineVoucher />



## Configuratie

Valbeschadiging regel je per wereld via het configuratiebestand van die wereld. Elke wereld in het server-universum heeft z’n eigen `config.json`. In dat bestand staat een instelling die bepaalt of valbeschadiging aan of uit staat.

Wil je valbeschadiging uitzetten? Open dan het `config.json` bestand van de wereld in de map `universe/worlds/<world_naam>/config.json`. Zoek de instelling die valbeschadiging regelt, meestal een Boolean zoals `IsFallDamageEnabled`, en zet die op `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Als deze waarde op `false` staat, krijgen spelers geen schade meer door vallen. Wil je valbeschadiging juist aanhouden? Zet het dan op `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Sla het bestand op en **herstart de server**. Configuratie-aanpassingen worden pas actief als de wereld opnieuw geladen wordt, dus een herstart is nodig om de nieuwe instelling te laten werken.



## Conclusie

Door de valbeschadiging-vlag in het configuratiebestand van de wereld aan te passen, bepaal jij of spelers schade krijgen van vallen. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar, dus neem vooral contact op! 🙂

<InlineVoucher />