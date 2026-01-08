---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Info over hoe je jouw Vintage Story server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Een whitelist is een toegangs lijst die bepaalt wie er op jouw server mag joinen. Vintage Story heeft een ingebouwde whitelist modus die je aan kunt zetten en per speler kunt aan- of uitzetten.

<InlineVoucher />


## Whitelist activeren

Open de in-game console en zet de whitelist modus aan via de server config command. Gebruik waarde 1 voor whitelist modus om alleen spelers op de whitelist toe te laten.

```text
/serverconfig whitelistmode 1
```

Herstart de server één keer na het aanzetten van de modus om zeker te weten dat de instelling goed wordt opgeslagen en netjes geladen wordt bij het opstarten.

## Whitelist spelers beheren

Om een speler toe te laten, voeg je hem toe aan de whitelist met de player command.

```text
/player PlayerName whitelist on
```

Wil je toegang intrekken? Zet dan de whitelist uit voor die speler.

```text
/player PlayerName whitelist off
```

Wil je checken wat de huidige server instelling is? Print dan de serverconfig of voer de whitelistmode command uit zonder iets te veranderen en check dat deze nog steeds op 1 staat.

## Whitelist werking checken

Probeer te connecten met een speler die niet op de whitelist staat. De verbinding zou geweigerd moeten worden. Connect daarna met een speler waarvoor je `whitelist on` hebt gezet.

Als iedereen nog steeds kan joinen, check dan of `whitelistmode` echt op 1 staat en of je de commands op de juiste server hebt uitgevoerd.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag komen. Werkt het nog niet zoals verwacht? Herstart dan de server nogmaals en check de instellingen of command output om zeker te zijn dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />