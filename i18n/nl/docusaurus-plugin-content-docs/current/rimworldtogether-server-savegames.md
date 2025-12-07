---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Je Rimworld Together Savegames Beheren"
description: "Ontdek hoe je je Rimworld Together savegames beheert en back-upt voor een soepele multiplayer ervaring → Leer het nu"
sidebar_label: Savegames Beheren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids laten we je zien hoe je je Rimworld Together savegames beheert op je game server, inclusief het back-uppen van je lokale en server savegames en hoe je ze uploadt naar je server.

:::info
Houd er rekening mee dat het verplaatsen van een bestaande vanilla game naar een Rimworld Together server met mods waarschijnlijk gameplayproblemen veroorzaakt. Dit geldt vooral bij het verplaatsen van werelden tussen servers met verschillende mods.
:::

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids voor extra hulp bij het verbinden met je server.

## Savegame Back-up

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je apparaat. Je vindt ze in de Windows LocalLow AppData, specifiek op deze locatie:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Je kunt deze map makkelijk openen door `CTRL` + `R` tegelijk in te drukken en in het run-venster deze map te plakken: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Druk op **OK** en je wordt direct naar de map gebracht.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

Hier zie je al je lokale savegames.

### Savegame Toegang via FTP

Je savegame van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar deze map:
```
../rimworld-together/Saves
```

Hier zie je mappen, elk een savegame. Rechtsklik op een map en kies **Download** om deze lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Automatische Back-up

We bieden ook een optie om je savegame (en configuratiebestand) automatisch te back-uppen via ons webinterface. Ga naar je game server webinterface en open **Tools->Backups**. Hier kun je verschillende opties instellen om automatische back-ups te plannen. Je krijgt 10GB gratis back-up opslagruimte waar je back-ups worden opgeslagen. Voor meer info check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame Uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Verbind eerst met je game server via een FTP-client. Ga dan naar deze map:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Sleep simpelweg je savegames in deze map via je FTP-client en ze worden naar je server geüpload.

:::info
Zoals eerder gezegd, kan het verplaatsen van werelden tussen servers met verschillende mods gameplayproblemen veroorzaken.
:::

<InlineVoucher />