---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Informatie over hoe je je StarMade-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er op je server kan joinen. StarMade ondersteunt een ingebouwde whitelist die wordt geregeld in `server.cfg` en gevuld via `whitelist.txt`.

<InlineVoucher />

## De Whitelist Activeren

Verbind met je server via FTP en open `server.cfg`. Zet authenticatie en de whitelist aan.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Sla het bestand op. Open of maak daarna `whitelist.txt` aan in dezelfde servermap. Voeg spelers toe in het door StarMade gebruikte formaat, één entry per regel.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Herstart de server om de bijgewerkte whitelist te laden.

## Whitelisted Spelers Beheren

Om een speler toe te voegen, voeg je een nieuwe regel toe aan `whitelist.txt` met hetzelfde formaat, sla op en herstart. Om een speler te verwijderen, verwijder je de regel uit `whitelist.txt`, sla op en herstart.

Als namen speciale tekens bevatten, gebruik dan exact de in-game naam zoals die bij het inloggen verschijnt om mismatches te voorkomen.

## Controleren of de Whitelist Werkt

Probeer na de herstart in te loggen met een account dat niet in `whitelist.txt` staat. Toegang moet geweigerd worden. Log daarna in met een naam die wel op de lijst staat.

Als spelers op de lijst niet kunnen joinen, controleer dan of StarMade-authenticatie is ingeschakeld en verplicht is, anders kunnen namen niet betrouwbaar overeenkomen.

## Conclusie

Als je alle stappen hierboven goed hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag joinen. Werkt de toegang toch niet zoals verwacht, herstart dan de server nogmaals en controleer het bestand of de command output om te bevestigen dat de wijziging is doorgevoerd.

Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />