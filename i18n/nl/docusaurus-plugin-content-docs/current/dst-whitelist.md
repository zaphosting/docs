---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Informatie over hoe je jouw Don't Starve Together-server whitelist bij ZAP-Hosting → Leer nu meer"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er op jouw server kan joinen. In Don't Starve Together wordt dit geregeld via een allowlist gebaseerd op Klei user ID's. De standaard setup is een `whitelist.txt` bestand plus `whitelist_slots` in `cluster.ini`.

<InlineVoucher />


## Whitelist activeren

Verbind met je server via FTP en zoek je cluster map, meestal iets als `DoNotStarveTogether/Cluster_1/` of een provider-specifiek pad waar `cluster.ini` in staat. Open `cluster.ini` en zet in de `[NETWORK]` sectie `whitelist_slots`.

Wil je dat de server effectief alleen whitelist gebruikt, zet dan `whitelist_slots` gelijk aan je `max_players` waarde.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

Maak in dezelfde cluster map een `whitelist.txt` aan of bewerk deze. Voeg per regel één Klei ID toe in het KU_ formaat.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Sla de bestanden op en herstart de server. De allowlist wordt bij het opstarten ingeladen.

## Whitelisted spelers beheren

Om een speler toe te voegen, voeg je zijn KU_ ID toe aan `whitelist.txt`, sla op en herstart.

Om een speler te verwijderen, verwijder je zijn KU_ ID uit `whitelist.txt`, sla op en herstart.

Zorg dat het aantal ID's in `whitelist.txt` minstens zo hoog is als `whitelist_slots` om joinproblemen te voorkomen als er meer gereserveerde allowlist slots zijn dan gebruikers in de lijst.

## Whitelist werking controleren

Na de herstart probeer je in te loggen met een account dat niet in `whitelist.txt` staat. Als `whitelist_slots` gelijk is aan `max_players`, zou het joinen moeten mislukken. Log daarna in met een KU_ ID uit de lijst om toegang te bevestigen.

Als de server nog steeds niet-geliste spelers toelaat, check dan of je de juiste actieve cluster map hebt aangepast en dat de `[NETWORK]` sectie de regel `whitelist_slots` bevat.

## Conclusie

Als je alle stappen hierboven goed hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag joinen. Werkt de toegang toch niet zoals verwacht? Herstart de server dan nogmaals en controleer de bestanden of command output om zeker te zijn dat de wijziging is doorgevoerd.

<InlineVoucher />