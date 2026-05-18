---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Informatie over hoe je je Space Engineers-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er op je server mag joinen. Space Engineers gebruikt meestal een whitelist gebaseerd op een Steam-groep, waarbij alleen leden van een specifieke Steam-groep kunnen verbinden.

<InlineVoucher />

## Whitelist activeren

Maak een Steam-groep aan voor je server en voeg de spelers toe die je wilt toelaten. Verbind daarna via FTP met je server en open `SpaceEngineers-Dedicated.cfg`.

Zorg dat de server ingesteld staat op private modus en zet de groeps-ID onderaan de configuratie.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Vervang de groeps-ID door je eigen Steam-groep ID. Sla het bestand op en herstart de server.

## Whitelist spelers beheren

Om iemand toe te voegen aan de whitelist, nodig je diegene uit voor de Steam-groep en zorg je dat ze lid worden. Ze kunnen dan verbinden zodra ze lid zijn.

Om iemand te verwijderen, haal je diegene uit de Steam-groep. Zodra ze geen lid meer zijn, kunnen ze niet meer verbinden. Wil je de whitelist naar een andere groep switchen? Pas dan de `<GroupID>` aan en herstart de server.

## Controleren of de whitelist werkt

Na de herstart probeer je te verbinden met een Steam-account dat niet in de Steam-groep zit. De server zou de verbinding moeten weigeren. Probeer daarna met een account dat wel lid is van de groep.

Als de toegang nog open is, check dan of de server echt in private modus draait en of de `<GroupID>` regel aanwezig is in het actieve `SpaceEngineers-Dedicated.cfg`.

## Conclusie

Als je alle stappen hierboven goed hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag. Werkt het nog niet zoals verwacht? Herstart de server nogmaals en controleer het bestand of de command output om zeker te zijn dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />