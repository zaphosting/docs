---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Informatie over hoe je jouw Terraria-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er op jouw server mag joinen. Voor Terraria hosting is de gebruikelijke whitelist methode om een TShock-server te draaien en de whitelist-functie daarvan aan te zetten, wat wordt beheerd via een whitelist-bestand en commando’s.

<InlineVoucher />

## Whitelist activeren

Verbind via FTP met je server en check of je server TShock draait. Zoek dan het TShock configuratiebestand `tshock/config.json` en zet de whitelist optie aan:

```
"EnableWhitelist": true
```

Sla het bestand op en herstart de server. TShock zal nu whitelist-goedkeuring vragen voor inkomende verbindingen.

## Whitelisted spelers beheren

Om een speler toe te voegen, open je de Live Console in het ZAP-Hosting gameserver beheer en gebruik je het whitelist-commando met het IP-adres van de speler.

```text
whitelist 203.0.113.25
```

TShock slaat de lijst op in `tshock/whitelist.txt`. Om een speler te verwijderen, verbind je via FTP, open je dat bestand, verwijder je de regel met het IP, sla je op en herstart je de server.

```txt
203.0.113.25
198.51.100.10
```

## Controleren of de whitelist werkt

Na de herstart probeer je te verbinden vanaf een IP-adres dat niet op de lijst staat. De toegang moet dan geblokkeerd worden. Probeer daarna te verbinden vanaf een whitelisted IP-adres.

Als spelers toch kunnen joinen zonder op de lijst te staan, check dan nogmaals of `EnableWhitelist` op true staat in `config.json` en of de server echt als TShock is gestart.

## Conclusie

Als je alle stappen hierboven goed hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag komen. Werkt de toegang nog niet zoals verwacht? Herstart dan de server nogmaals en controleer het bestand of de command output om zeker te weten dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />