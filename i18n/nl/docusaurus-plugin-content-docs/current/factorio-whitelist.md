---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Info over hoe je je Factorio-server whitelist bij ZAP-Hosting → Leer er nu meer over"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Een whitelist is een toegangs lijst die de servertoegang beperkt tot goedgekeurde Factorio-accounts. Bij de meeste gehoste servers wordt de whitelist automatisch ingeschakeld zodra er minstens één speler is toegevoegd, en deze wordt opgeslagen in een `server-whitelist.json` bestand.

<InlineVoucher />

## Whitelist activeren

Open de Live Console in het ZAP-Hosting gameserverbeheer en voeg de eerste speler toe aan de whitelist. Het toevoegen van de eerste naam activeert meestal direct de whitelist.

```text
/whitelist add PlayerName
```

Als je host een expliciete inschakel-commando heeft, kun je die ook eerst uitvoeren voordat je gebruikers toevoegt.

```text
/whitelist enable
```

Een herstart is meestal niet nodig om de wijziging door te voeren, maar één keer herstarten na de eerste setup zorgt ervoor dat het whitelist-bestand wordt weggeschreven en bij het opstarten wordt geladen.

## Whitelisted spelers beheren

Om meer spelers toe te voegen, voer je het add-commando opnieuw uit met hun Factorio gebruikersnaam.

```text
/whitelist add AnotherPlayer
```

Om een speler te verwijderen, gebruik je het remove-commando.

```text
/whitelist remove PlayerName
```

Om de huidige whitelist te tonen, gebruik je het get-commando.

```text
/whitelist get
```

## Controleren of de whitelist werkt

Nadat je minstens één speler hebt toegevoegd, probeer in te loggen met een account dat niet op de lijst staat. De verbinding zou geweigerd moeten worden. Log daarna in met een whitelisted account om te checken of het werkt.

Als de server nog steeds iedereen toelaat, controleer dan of de commando’s op de juiste server zijn uitgevoerd en herstart de server één keer om zeker te weten dat het whitelist-bestand bij het opstarten wordt geladen.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag joinen. Werkt de toegang toch niet zoals verwacht? Herstart dan de server één keer en check het bestand of de output van de commando’s om te bevestigen dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />