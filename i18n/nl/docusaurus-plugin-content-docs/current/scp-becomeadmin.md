---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Word admin op je eigen server"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en effectief rollen beheert op je game server → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in-game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten aan je server toevoegt.  
<InlineVoucher />

:::info
Sinds de recente SCP-updates werkt de wachtwoordlogin niet meer. Gebruik daarom de volgende gids om je rollen direct toe te voegen via je SteamID. 
:::


## Configuratie voor de Remote Admin Config

### Voorbereiding

Eerst moet je je Steam64ID vinden.  
Gebruik hiervoor deze tool: [SteamID Lookup](https://steamid.io/lookup).  
Deze ID vul je later in het configuratiebestand in.

Hier zie je een voorbeeld van hoe je je SteamID krijgt door je profiel-link in te voeren:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Admins toevoegen

Open nu het configuratiebestand om het aan te passen.  
Dit bestand vind je onder "**Configs**" in "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Open hier het bestand "**config_remoteadmin.txt**" en pas de benodigde regels aan.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Hier worden de rollen aangemaakt en toegewezen.  
Vervang "**SomeSteamId64**" vóór "**@steam: owner**" met jouw SteamID64, die je eerder via "**steamid lookup**" hebt gevonden.

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Dit kun je herhalen voor elke extra gebruiker die rechten moet krijgen.  
In ons voorbeeld geven we drie gebruikers rechten: één krijgt "**owner**" en de andere twee "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Meer rollen toevoegen om het wachtwoord te omzeilen

Wil je meerdere rollen instellen die het remote admin wachtwoord kunnen omzeilen? Pas dan deze regel aan in het bestand:  
"**config_remoteadmin.txt**"

Zoek het volgende gedeelte:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Voeg extra rollen toe door ze met een komma te scheiden.  
Bijvoorbeeld, om admin en moderator toe te voegen om het wachtwoord te omzeilen:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Om de remote admin console in-game te openen, druk je op de "**M**" toets zodra je bent ingelogd op de server.  
Als de server draait, moet je hem herstarten om de wijzigingen door te voeren. Staat de server uit, zet hem dan aan en check de Remote Admin Console in-game.
:::


## Conclusie

Gefeliciteerd, je hebt succesvol administratorrechten ingesteld! Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />