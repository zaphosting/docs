---
id: ark-savegame
title: ARK Survival Evolved Eigen savegame importeren
description: "Ontdek hoe je je Ark: Survival Evolved server herstelt met officiële of eigen backup saves voor een naadloze game-ervaring → Leer het nu"
sidebar_label: Savegame importeren
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Wil je je eigen of een officiële backup save importeren op je Ark: Survival Evolved server? Zoek niet verder, deze gids legt stap voor stap uit hoe je je eigen of officiële backup save importeert naar je nieuwe server.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Hoe krijg je een ARK:SE Server met Officiële Server Backups" description="Snap je dingen beter als je ze in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier tot je neemt!"/>

<InlineVoucher />

## Bereid je savegame voor

### Officiële backup save

Download eerst je officiële server save. Dit kan direct via [ARK’s website](https://survivetheark.com/index.php?/server-backups/), of gebruik [een community-tool](https://arkutils.netlify.app/tools/officialdownload) om je server makkelijker te vinden dankzij de zoekfunctie.

:::note
Ben je Xbox- of Playstation-speler? Helaas kun je dan geen officiële serverbestanden downloaden. De devs hebben alleen wereldsaves van Steam en Epic platformen vrijgegeven om te downloaden.
:::

Er zijn twee snapshots beschikbaar: eentje van 25 augustus 2023 en eentje van 30 september 2023. Zoek je server op en download je save.

:::note
Je eigen officiële backup save gebruiken kan alleen met de **ARK - SE (Official backupsave compatible)** game server variant. Gebruik je een andere versie? Pas dan de versie aan onder de **games** sectie in je game server webinterface of check onze [Game Change](gameserver-gameswitch.md) gids.

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::

### Eigen reguliere save

Wil je je eigen save importeren (niet-officieel), dan heb je alle bestanden uit de save nodig. Die staan meestal in de **SavedArks** map, te vinden in de **Shootergame/Saved** directory. Zoek deze bestanden op en bewaar ze voor de import.

:::note
Gebruik hiervoor de reguliere **Ark: SE** game server variant (zonder officiële backupsave support), want je importeert een gewone save die niet officieel is.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::

## Save uploaden naar je server

Heb je je `.zip` save gedownload? Pak ‘m dan uit met een programma zoals 7zip of Winrar. Voor beide soorten servers en saves is het uploadproces hetzelfde.

Log nu in op je server via FTP om je savebestanden te uploaden. Check onze [Toegang via FTP](gameserver-ftpaccess.md) gids als je hulp nodig hebt met inloggen of bestanden overzetten.

Open je FTP client en ga naar deze map op je game server:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Verwijder alle bestanden van de huidige save (of maak eerst een backup als je die save later nog wil spelen). Sleep daarna alle uitgepakte bestanden (inclusief .ark, .arktribe en .arkprofile bestanden) naar deze map. Heb geduld, het uploaden kan even duren afhankelijk van de grootte van je save.

Als de upload klaar is, herstart je je server. De nieuwe save wordt dan geladen. Gefeliciteerd, je hebt succesvol een officiële backup save geüpload naar je Ark: Survival Evolved server.

<InlineVoucher />