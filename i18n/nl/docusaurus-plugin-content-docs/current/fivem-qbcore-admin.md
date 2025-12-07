---
id: fivem-qbcore-admin
title: "FiveM: Word admin met QBCore"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en betere in-game management → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toekennen van administratorrechten geeft je eenvoudige en uitgebreide admin-mogelijkheden met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor jouw server instelt.

<InlineVoucher />

## Configuratie

De configuratie van administratorrechten gebeurt via het ``server.cfg`` configuratiebestand. Log hiervoor in op de txAdmin interface en open de CFG Editor. Scroll vervolgens helemaal naar het einde van het configuratiebestand tot je bij `Permissions` bent.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore ondersteunt verschillende player identifiers, zoals FiveM IDs (`identifier.fivem:`), Rockstar licenses (`identifier.license:`) en Discord IDs (`identifier.discord:`). Deze identifiers kun je direct uit je txAdmin interface halen. Zo bepaal je zelf of je iemand GOD-, Admin- of Mod-status wilt geven.

Heb je de identifiers te pakken en weet je welke status je wilt toekennen? Dan kun je individuele spelersrechten toevoegen door ze in je `server.cfg` te zetten. Voeg hiervoor één van deze drie opties toe als nieuwe regel onder de permissions sectie:

```
add_principal identifier.license:xxxxxx qbcore.god   # Speler Naam
add_principal identifier.license:xxxxxx qbcore.admin # Speler Naam
add_principal identifier.license:xxxxxx qbcore.mod   # Speler Naam
```

Het eindresultaat kan er bijvoorbeeld zo uitzien:

```
## Permissions ##
add_ace group.admin command allow # alle commands toestaan
# Deployer Note: deze admin master heeft geen identifiers om automatisch toe te voegen.
# add_principal identifier.discord:111111111111111111 group.admin #voorbeeld

add_principal identifier.fivem:16219250 qbcore.admin # Speler Naam
```

## Conclusie

Als je alle stappen succesvol hebt doorlopen, ben je nu admin op je eigen server. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />