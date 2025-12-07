---
id: spaceengineers-becomeadmin
title: "Space Engineers: Word server admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en soepel beheer in-game → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide admin-mogelijkheden met volledige controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in-game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor jouw server instelt.  
<InlineVoucher />

Om je eigen game server goed in-game te kunnen beheren, is het belangrijk om de Admin-rang te hebben.

### SteamID64 via website

Open eerst het profiel in Steam en klik er ergens met de rechtermuisknop op.  
Daar kun je de Steam URL van het profiel kopiëren.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Vervolgens kun je deze URL invoeren op een van de volgende websites:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### SteamID in de config zetten

Ga daarna naar je interface en open je server.  
Ga naar het tabblad **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Open vervolgens de **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Druk daarna op **STR + F** en zoek op *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Schrijf nu dit:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Het zou er daarna zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Sla nu alleen nog de config op en dat is alles!

## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />