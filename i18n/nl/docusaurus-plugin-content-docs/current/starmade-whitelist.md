---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Info over hoe je je StarMade-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Een whitelist is een toegangs lijst die bepaalt wie er op je server mag joinen. StarMade heeft een ingebouwde whitelist die je regelt via `server.cfg` en vult met `whitelist.txt`.

<InlineVoucher />

## Whitelist activeren

Verbind met je server via FTP en open `server.cfg`. Zet authenticatie en de whitelist aan.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Sla het bestand op. Open of maak daarna `whitelist.txt` aan in dezelfde servermap. Voeg spelers toe in het StarMade-formaat, één per regel.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Herstart de server om de nieuwe whitelist te laden.

## Whitelist spelers beheren

Om een speler toe te voegen, voeg je een regel toe in `whitelist.txt` met hetzelfde formaat, sla op en herstart. Om een speler te verwijderen, verwijder je de regel, sla op en herstart.

Als namen speciale tekens bevatten, gebruik dan exact de in-game naam zoals die bij het inloggen verschijnt om mismatches te voorkomen.

## Checken of de whitelist werkt

Na de herstart probeer je in te loggen met een account dat niet in `whitelist.txt` staat. Toegang moet geweigerd worden. Log daarna in met een naam die wel op de lijst staat.

Als whitelist-spelers niet kunnen joinen, check dan of StarMade-authenticatie aan en verplicht is, anders kunnen namen niet goed gematcht worden.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op je server mag. Werkt het nog niet zoals verwacht? Herstart de server nog een keer en check het bestand of de command output om zeker te zijn dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />