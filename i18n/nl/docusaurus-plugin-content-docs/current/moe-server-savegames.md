---
id: moe-server-savegames
title: "Myth of Empires: Savegames beheren"
description: "Ontdek hoe je je Myth of Empires savegames veilig beheert en back-upt voor een soepele game-ervaring → Leer het nu"
sidebar_label: Savegames beheren
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids leer je hoe je je Myth of Empires savegames beheert op je game server, inclusief het back-uppen van je lokale en server savegames en het uploaden ervan naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in de webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids voor extra hulp bij het verbinden met je server.

## Savegame back-uppen

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je eigen apparaat. MOE slaat deze op in een map binnen de game-installatiemap.

Open Steam op je systeem, klik met de rechtermuisknop op je **Myth of Empires** game en kies **Lokale bestanden bekijken** terwijl je over de **Beheren** sectie hovert.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigeer naar het volgende pad:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

In deze map zie je al je bestaande lokale savegames.

### Savegame via FTP benaderen

Je savegame van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar het volgende pad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

Hier zie je mappen die je savegames zijn. Klik met de rechtermuisknop op de map en gebruik de **Download** knop om deze lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatische backup

We bieden ook een optie om je savegame (en configuratiebestand) automatisch te back-uppen via onze webinterface. Ga naar de **Tools->Backups** sectie in je game server webinterface. Hier kun je verschillende opties instellen om automatische backups te plannen. Je krijgt 10GB gratis backup opslagruimte waar je backups worden bewaard. Voor meer info over backups, check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Zorg eerst dat je verbonden bent met je game server via een FTP-client. Ga dan naar het volgende pad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Sleep simpelweg je savegame map naar deze folder via je FTP-client en het wordt geüpload naar je server.

## Savegame activeren

Je savegame gebruiken betekent dat je deze moet selecteren in je serverconfiguratie. De makkelijkste manier is via de **Instellingen** sectie in de webinterface van je game server. Gebruik onze [Serverconfiguratie](moe-configuration.md) gids voor meer info.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Zoek in deze sectie de parameter **Map Name** in de Basic settings. Je geüploade wereld zou hier nu zichtbaar moeten zijn. Zie je hem niet? Herstart dan je server na het uploaden.

Je hebt nu succesvol een savegame toegevoegd aan je game server.

<InlineVoucher />