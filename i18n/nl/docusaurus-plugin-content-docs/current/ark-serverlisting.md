---
id: ark-serverlisting
title: "ARK: Problemen met serverlijst bij Steam-games die Steamworks gebruiken"
description: "Ontdek waarom populaire games serverlijstproblemen hebben door Steamworks-limieten en hoe dit je multiplayer-ervaring beïnvloedt → Lees nu meer"
sidebar_label: Problemen met serverlijst
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Helaas hebben veel populaire games zoals ARK of Valheim enorme problemen met het tonen van alle servers in de ingame serverlijst.

Dit komt doordat deze games de "Steamworks" software gebruiken voor hun serverlijst.

Steamworks kan maximaal 4880 servers tonen. Als een game meer actieve servers heeft dan dit aantal, wordt er maar een klein deel van de actieve servers aan de speler getoond.

Het is dus heel willekeurig of speler 1 server Y ziet of niet.  
Het kan dus ook gebeuren dat speler 1 server Y ziet, maar speler 2 niet. Speler 3 ziet hem weer wel, maar mist dan weer een andere server die speler 1 wel ziet.

Om uit te sluiten dat het aan de serverprovider ligt, kun je de server zoeken via "Steam" - "Bekijken" - "Server" met IP en poort. Als je hem daar vindt, is de verbinding tussen speler en server prima. Dit komt omdat de speler dan direct de server opvraagt.

Een goed voorbeeld om het probleem te checken is dat vooral ARK-spelers die het spel via Steam openen servers niet kunnen vinden. Open je ARK via Epic Games, dan worden de servers perfect gevonden. Daar wordt geen Steamworks gebruikt.

Er zijn ook verschillende game-ontwikkelaars die dit probleem hebben besproken. Bijvoorbeeld Garry Newman van Garrysmod dacht eerst dat het aan zijn serverprovider OVH lag. Maar dat bleek niet zo te zijn. Het probleem zit ook bij ZAP-Hosting en elke andere serverprovider, want het ligt direct aan Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Bron: https://x.com/garrynewman/status/1334446218437681152?s=20

Of zelfs Rust, zoals ze in hun blog schrijven:

```
Het is niet altijd rozengeur en maneschijn als je ineens zo’n enorme populariteitsboost krijgt.  
Je begint scheurtjes te zien in de fundering, voor ons was het meest opvallend dat de serverbrowser nooit bedoeld was om zo’n grote hoeveelheid servers te verwerken.  
Zonder te technisch te worden, zorgt dit ervoor dat veel servers niet worden weergegeven voor gebruikers en dat zorgt voor veel frustratie bij servereigenaren.  
We zijn momenteel bezig met het zoeken naar oplossingen, dus heb alsjeblieft nog even geduld.
```

Bron: https://rust.facepunch.com/blog/

We blijven het probleem in de gaten houden en houden je hier op de hoogte zodra er een oplossing is.

<InlineVoucher />