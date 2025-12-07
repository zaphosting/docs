---
id: empyrion-becomeadmin
title: "Empyrion: Word Admin"
description: "Leer hoe je administratorrechten toekent voor volledige servercontrole en effectief gamefuncties beheert → Ontdek het nu"
sidebar_label: Word admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor jouw server instelt.  
<InlineVoucher />

## Vind je Steam64ID

Eerst moet je je Steam64ID vinden.  
Gebruik hiervoor deze tool: [SteamID Lookup](https://steamid.io/lookup).  
Deze ID vul je later in het configuratiebestand in.

Hier zie je een voorbeeld van hoe je je steamid krijgt door je profiel-link in te voeren:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Adminconfig instellen

Het bestand "**adminconfig.yaml**" dat je moet aanpassen, staat in de map "**Saves**".  
Om deze map te openen, volg je de instructies voor [Toegang via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Standaard staan hier de volgende waarden:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Nu vul je achter "**Id:**" de eerder gevonden Steam64ID in.

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Met "**Permission**" bepaal je de rang die je aan de gebruiker geeft.  
De rangen zijn als volgt:

Permission | Rang
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## Afronding

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld! Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />