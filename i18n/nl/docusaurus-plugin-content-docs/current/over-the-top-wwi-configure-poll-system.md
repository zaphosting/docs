---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Pollsysteem Configureren"
description: "Leer hoe je stem- en poll-instellingen configureert op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Pollsysteem
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het pollsysteem in **Over the Top WWI** stelt spelers in staat om te stemmen over verschillende acties zoals het kicken van spelers, het veranderen van maps of het aanpassen van gameplay-instellingen. Deze feature verbetert de community-interactie en vermindert de noodzaak voor constante admin-inmenging.

Door de poll-instellingen te configureren, bepaal je welke stemmen toegestaan zijn en hoe ze tijdens het spelen werken.

<InlineVoucher />

## Configuratie

Het pollsysteem wordt ingesteld in het serverconfiguratiebestand. Je kunt dit bestand openen en bewerken in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. Zoek hierin de volgende parameters:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` bepaalt het percentage stemmen dat nodig is om een poll te laten slagen
- `EnableBanPlayerPoll` staat spelers toe om te stemmen voor het bannen van anderen
- `EnableKickPlayerPoll` staat spelers toe om te stemmen voor het kicken van anderen
- `EnableChangeMapsPoll` staat spelers toe om te stemmen voor mapwisselingen
- `EnableMutePlayerPoll` staat spelers toe om te stemmen voor het muten van anderen
- `EnableCustomPoll` zet aangepaste stemopties aan
- `ChangeMapImmediately` bepaalt of een geslaagde mapstem direct wordt doorgevoerd

Toegestane poll gamemodi:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Deze instellingen bepalen welke gamemodi gekozen kunnen worden tijdens polls.

- `1` → Aan
- `0` → Uit

Je kunt specifieke modi uitschakelen om stemopties te beperken en een consistente gameplay-ervaring te behouden.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe poll-instellingen worden dan automatisch toegepast.

## Conclusie

Gefeliciteerd! Je hebt het pollsysteem succesvol geconfigureerd op je **Over the Top WWI server**. Zo kunnen spelers meebeslissen en wordt serverbeheer een stuk makkelijker.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />