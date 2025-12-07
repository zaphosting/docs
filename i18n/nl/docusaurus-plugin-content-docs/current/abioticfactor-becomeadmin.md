---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Word admin"
description: "Ontdek hoe je spelers adminrechten geeft voor volledige servercontrole en betere gameplay management → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In **Abiotic Factor** hebben serveradmins verhoogde rechten nodig om spelers te beheren, servercommando’s uit te voeren of instellingen tijdens het spelen aan te passen.

<InlineVoucher />

## Configuratie

De configuratie gebeurt via het `admin.ini` configuratiebestand. Om erbij te komen, open je de **Configs** sectie in de game server administratie en zoek je het `admin.ini` bestand. Standaard bevat het bestand de volgende regel, waarin admins kunnen worden toegevoegd. Vervang de `ExampleID` waarden door de bijbehorende **SteamID64** van de spelers aan wie je adminrechten wilt geven.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Conclusie

Zodra de gegevens correct zijn toegevoegd en de server opnieuw is gestart, heeft de opgegeven speler volledige admin toegang in-game. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />