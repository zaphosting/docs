---
id: valheim-serverlisting
title: "Valheim: Problemen met serverlijst bij Steam-games die Steamworks gebruiken"
description: "Ontdek waarom populaire games moeite hebben om alle actieve servers te tonen door Steamworks-beperkingen en hoe dit jouw multiplayer-ervaring beïnvloedt → Lees nu meer"
sidebar_label: Problemen met serverlijst
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Helaas hebben veel populaire games zoals ARK of Valheim enorme problemen met het tonen van alle servers in de ingame serverlijst.

Dit komt doordat deze games de "Steamworks" software gebruiken voor hun serverlijst.

Steamworks kan maximaal 4880 servers tonen. Heeft een game meer actieve servers dan dit, dan wordt er maar een klein deel van de actieve servers aan de speler getoond.

Het is dus heel random of speler 1 server Y ziet of niet.  
Het kan zelfs gebeuren dat speler 1 server Y ziet, maar speler 2 niet. Speler 3 ziet 'm weer wel, maar mist dan weer een andere server die speler 1 wel ziet.

Om uit te sluiten dat het aan de serverprovider ligt, kun je de server zoeken via "Steam" - "Bekijken" - "Server" met IP en poort. Als je 'm daar vindt, is de verbinding tussen speler en server prima. Dit komt omdat de speler dan direct een query doet.

Een goed voorbeeld om het probleem te checken is dat vooral ARK-spelers die het spel via Steam openen vaak geen servers kunnen vinden. Open je ARK via Epic Games, dan worden de servers wel gewoon gevonden. Daar wordt geen Steamworks gebruikt.

Ook verschillende game-ontwikkelaars hebben al gereageerd op dit probleem. Bijvoorbeeld Garry Newman van Garrysmod dacht eerst dat het aan zijn serverprovider OVH lag. Maar dat bleek niet zo te zijn. Het probleem zit ook bij ZAP-Hosting en elke andere serverprovider, want het ligt direct aan Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/mWWpmZzJ6ZXX59W/preview)

Bron: https://x.com/garrynewman/status/1334446218437681152?s=20

Of kijk naar Rust, zoals ze in hun blog schrijven:

```
Het is niet altijd rozengeur en maneschijn als je ineens zo’n enorme populariteitsboost krijgt.  
Je ziet scheurtjes ontstaan in de basis, voor ons was het meest opvallend dat de serverbrowser nooit bedoeld was om zo’n grote hoeveelheid servers te verwerken.  
Zonder te technisch te worden, zorgt dit ervoor dat veel servers niet getoond worden aan gebruikers en dat zorgt voor veel frustratie bij server-eigenaren.  
We zijn momenteel bezig met het zoeken naar oplossingen, dus heb alsjeblieft nog even geduld.
```

Bron: https://rust.facepunch.com/blog/

We blijven het probleem in de gaten houden en houden je hier op de hoogte zodra er een oplossing is.

<InlineVoucher />