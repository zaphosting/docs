---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Informatie over hoe je jouw ECO-server whitelist bij ZAP-Hosting→ Leer er nu meer over"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er verbinding kan maken met jouw server. In ECO wordt de whitelist opgeslagen in de `Users.eco` configuratie en wordt automatisch actief zodra er minimaal één SteamID64 is toegevoegd.

## Whitelist activeren

Verbind met je server via FTP en zoek het bestand `Users.eco`. Open het en zoek de sectie `WhiteList`. Voeg SteamID64 waardes toe binnen `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Sla het bestand op en herstart de server om ervoor te zorgen dat de nieuwe toegangs lijst wordt toegepast.

## Whitelisted spelers beheren

Spelers toevoegen kan ook via de Live Console in het ZAP-Hosting gameserver beheer, mits je de benodigde in-game permissies hebt. Gebruik het whitelist-commando met de spelersnaam.

```text
/whitelist PlayerName
```

Spelers verwijderen doe je door `Users.eco` te bewerken. Verwijder de SteamID64 uit `$values`, sla op en herstart de server, want er is geen servercommando om entries te verwijderen.

## Controleren of de whitelist werkt

Probeer na de herstart in te loggen met een account dat niet in `$values` staat. Toegang moet geweigerd worden. Log daarna in met een whitelisted account.

Als toegang nog steeds open is, check dan of er minimaal één SteamID64 aanwezig is en of het `Users.eco` bestand dat je hebt aangepast overeenkomt met de actieve server instance.

## Conclusie

Als je alle stappen hierboven goed hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag joinen. Werkt de toegang nog niet zoals verwacht? Herstart de server dan nogmaals en controleer het bestand of de command output om zeker te zijn dat de wijziging is doorgevoerd.

<InlineVoucher />