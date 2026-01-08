---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Informatie over hoe je jouw Don't Starve Together-server whitelist bij ZAP-Hosting - ZAP-Hosting.com Documentatie"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Een whitelist is een toegangslist die bepaalt wie er op je server mag joinen. In Don't Starve Together werkt dit als een allowlist gebaseerd op Klei user ID's. De standaard setup is een `whitelist.txt` bestand plus `whitelist_slots` in `cluster.ini`.

<InlineVoucher />


## Whitelist activeren

Verbind via FTP met je server en zoek je cluster map, meestal iets als `DoNotStarveTogether/Cluster_1/` of een provider-specifiek pad waar `cluster.ini` in staat. Open `cluster.ini` en zet in de `[NETWORK]` sectie `whitelist_slots`.

Wil je dat de server echt alleen whitelist gebruikt, zet dan `whitelist_slots` gelijk aan je `max_players` waarde.

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

Om een speler te verwijderen, haal je zijn KU_ ID weg uit `whitelist.txt`, sla op en herstart.

Zorg dat het aantal ID's in `whitelist.txt` minstens zo hoog is als `whitelist_slots` om joinproblemen te voorkomen als er meer gereserveerde slots zijn dan gebruikers op de lijst.

## Controleren of de whitelist werkt

Probeer na de herstart in te loggen met een account dat niet in `whitelist.txt` staat. Als `whitelist_slots` gelijk is aan `max_players`, zou het joinen moeten mislukken. Log daarna in met een KU_ ID van de lijst om toegang te bevestigen.

Als de server nog steeds niet-geliste spelers toelaat, check dan of je de juiste actieve cluster map hebt aangepast en dat de `[NETWORK]` sectie de `whitelist_slots` regel bevat.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag. Werkt het nog niet zoals verwacht? Herstart de server dan nog een keer en check de bestanden of command output om zeker te weten dat de wijziging is doorgevoerd.

<InlineVoucher />