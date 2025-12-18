---
id: satisfactory-blueprints
title: "Satisfactory: Blueprints Beheren (Importeren/Exporteren)"
description: "Ontdek hoe je custom blueprints maakt, deelt en beheert voor efficiënte Satisfactory builds en layouts → Leer het nu"
sidebar_label: Blueprints Beheren
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Satisfactory heeft een custom blueprint-systeem waarmee je bouwplannen kunt maken en delen met andere communityleden. Deze blueprints variëren van efficiënte fabriekslayouts tot uitgebreid ontworpen lounges en complexe spoorwegsystemen.

Een grote selectie blueprints is beschikbaar via de Satisfactory Calculator website. Blueprints kunnen eenvoudig geïmporteerd en geëxporteerd worden.

<InlineVoucher />

## Blueprints Beheren

Het beheren van blueprints op een Satisfactory server gebeurt volledig via FTP. Als je nog niet weet hoe je met FTP verbinding maakt met je server, check dan onze aparte [FTP Toegang](gameserver-ftpaccess.md) gids om snel aan de slag te gaan.

### Blueprints Importeren
Om te beginnen heb je de blueprint-bestanden nodig die je wilt uploaden. Dit zijn een `.sbp` bestand en eventueel een bijbehorend `.sbpcfg` configuratiebestand. Deze bestanden komen vaak van betrouwbare communitybronnen of zijn gemaakt vanuit andere game-instanties.

Voordat je gaat uploaden, raden we aan om de server volledig uit te schakelen via je serverbeheerinterface. Zo voorkom je conflicten met bestanden of geheugenproblemen tijdens het uploaden.

Verbind daarna met de server via een FTP-client. Navigeer naar de blueprint-map:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

In deze map moet een subfolder staan die exact dezelfde naam heeft als de wereld (of sessie) die je gebruikt. Deze naam komt overeen met de naam van het `.sav` bestand op de server. Bestaat deze map nog niet? Maak ‘m dan handmatig aan met precies dezelfde naam als het savebestand.

Als de juiste subfolder klaarstaat, upload je de blueprint-bestanden naar die map. Zorg dat je zowel het `.sbp` bestand als, als die er is, het `.sbpcfg` bestand uploadt. Na het uploaden start je de server weer op. Zodra ‘ie draait, zijn de geüploade blueprints beschikbaar in de game via de Blueprint Designer, zodat je ze normaal kunt gebruiken.

### Blueprints Exporteren

Blueprints exporteren vanaf een Satisfactory server betekent dat je blueprint-bestanden downloadt van de server en lokaal opslaat op je pc. Begin met het uitschakelen van de server, zodat de blueprint-bestanden in een consistente en toegankelijke staat zijn. Open je FTP-client en maak verbinding met de server. Navigeer naar de map:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Zoek de subfolder die overeenkomt met de wereld/sessie waarvan je blueprints wilt exporteren. In deze map vind je de `.sbp` bestanden, plus eventueel de `.sbpcfg` bestanden, die bij elke opgeslagen blueprint horen.

Download de gewenste blueprint-bestanden direct naar je lokale computer via de FTP-client. Als de overdracht klaar is, kun je de bestanden archiveren, lokaal openen of importeren in een andere installatie of serveromgeving. Wil je de blueprints op een andere server gebruiken? Volg dan gewoon dezelfde importprocedure als hierboven beschreven.

## Conclusie

Blueprints beheren op een Satisfactory server is een simpel proces als je de stappen volgt. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />