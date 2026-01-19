---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Info over hoe je je Vintage Story-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Een whitelist is een toegangs lijst die bepaalt wie er op je server mag joinen. Vintage Story heeft een ingebouwde whitelist-modus die je aan kunt zetten en per speler kunt aan- of uitzetten.

<InlineVoucher />


## Whitelist activeren

Open de in-game console en stel de whitelist-modus in met het serverconfig-commando. Gebruik waarde 1 voor whitelistmodus om alleen spelers op de whitelist toe te laten.

```text
/serverconfig whitelistmode 1
```

Herstart de server één keer nadat je de modus hebt ingeschakeld, zodat de instelling goed wordt opgeslagen en netjes wordt toegepast bij het opstarten.

## Whitelist spelers beheren

Om een speler toe te laten, voeg je hem toe aan de whitelist met het player-commando.

```text
/player PlayerName whitelist on
```

Wil je toegang intrekken? Zet dan de whitelist uit voor die speler.

```text
/player PlayerName whitelist off
```

Wil je de huidige serverinstelling checken? Print dan de serverconfig of voer het whitelistmode-commando uit zonder andere waarden te veranderen en check of het nog steeds op 1 staat.

## Checken of de whitelist werkt

Probeer te connecten met een speler die niet op de whitelist staat. De verbinding zou geweigerd moeten worden. Connect daarna met een speler waarvoor je `whitelist on` hebt gezet.

Als iedereen nog steeds kan joinen, check dan of `whitelistmode` echt op 1 staat en of je de commando’s op de juiste server hebt uitgevoerd.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op je server mag. Werkt het nog niet zoals verwacht? Herstart dan de server nog een keer en check de instellingen of command output opnieuw om zeker te weten dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />