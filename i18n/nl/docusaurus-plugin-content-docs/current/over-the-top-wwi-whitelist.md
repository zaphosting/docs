---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Whitelist Instellen"
description: "Leer hoe je een whitelist activeert en beheert op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Met een whitelist kun je de toegang tot je **Over the Top WWI** server beperken, zodat alleen goedgekeurde spelers kunnen joinen. Super handig voor private servers, communities of testomgevingen waar je de toegang wilt controleren.

Als je de whitelist activeert, kunnen alleen spelers die in het whitelist-bestand staan verbinding maken met de server.

<InlineVoucher />

## Configuratie

De whitelist stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. Zoek hierin de volgende parameter:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` zet het whitelist-systeem aan of uit

- `False` → Uitgeschakeld
- `True` → Ingeschakeld

- `WhiteListPathString` geeft aan welk bestand gebruikt wordt om de toegestane spelers-ID’s op te slaan

Als de whitelist aan staat, kunnen alleen spelers die in het opgegeven bestand staan de server joinen.

## Whitelist beheren

Het whitelist-bestand staat meestal in je servermap en bevat een lijst met toegestane spelers-ID’s.

Elke speler voeg je toe op een nieuwe regel in het bestand:

```
SteamID1
SteamID2
SteamID3
```

Zorg dat je de juiste spelers-ID’s gebruikt, anders wordt de toegang geweigerd. Na het aanpassen van het whitelist-bestand of het `ServerConfiguration.ini` bestand, sla je de wijzigingen op en herstart je de server. De whitelist wordt dan actief.

## Conclusie

Nice! Je hebt de whitelist succesvol ingesteld op je **Over the Top WWI server**. Zo bepaal jij wie er op je server kan en houd je het lekker privé of gemodereerd.

Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />