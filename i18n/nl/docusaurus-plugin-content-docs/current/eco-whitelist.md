---
id: eco-whitelist
title: "ECO: Whitelist activeren"
description: "Ontdek hoe je jouw server beveiligt door spelers toegang te geven via de whitelist-functie van ECO → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Met de whitelist van ECO bescherm je jouw server door alleen geselecteerde spelers toe te staan verbinding te maken.

<InlineVoucher />

### Activeren (Config)

De whitelist wordt automatisch geactiveerd zodra er minimaal één speler aan de lijst is toegevoegd. Spelers moeten worden toegevoegd in het **Users.eco** configbestand.

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Het veld **$values** bevat de SteamIDs van de spelers die op de whitelist moeten komen. Je vindt deze door eerst je Steam-profiel te openen en ergens met de rechtermuisknop te klikken. Zo kopieer je de Steam URL van je profiel.



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Vervolgens open je één van de volgende sites en plak je daar de URL van je profiel:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Je krijgt dan algemene info plus de Steam ID van je account. We hebben hier alleen de SteamID64 nodig. Die zet je vervolgens in **$values**. Dat ziet er zo uit:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "andereSteamID"      
      ]
    }
```



### Activeren (Chat)

Je kunt ook spelers aan de whitelist toevoegen via de in-game chat of console, mits je adminrechten hebt. Gebruik hiervoor het volgende commando:

```
/whitelist [speler]
```



## Whitelist beheren

De whitelist beheer je alleen via het **Users.eco** configbestand, want er is geen servercommando om een speler van de whitelist te verwijderen. Wil je iemand verwijderen? Verwijder die speler dan uit het configbestand. Vergeet niet de server te herstarten zodat de wijziging actief wordt.

<InlineVoucher />