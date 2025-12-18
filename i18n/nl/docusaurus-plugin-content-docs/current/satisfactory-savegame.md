---
id: satisfactory-savegame
title: "Satisfactory: Savegames beheren"
description: "Ontdek hoe je je Satisfactory savegames lokaal en op je server beheert en back-upt voor een veilige game-ervaring → Leer het nu"
sidebar_label: Savegames beheren
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In deze gids laten we zien hoe je je Satisfactory savegames beheert op je game server, inclusief het back-uppen van je lokale en server savegames en het uploaden ervan naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in de webinterface van je game server. Gebruik gerust onze [Toegang via FTP](gameserver-ftpaccess.md) gids als extra hulp om verbinding te maken met je server.

## Savegame back-uppen

### Lokale Savegame

Lokale savegames zijn savegames die je hebt gemaakt tijdens het spelen in singleplayer of het lokaal hosten van een multiplayergame op je eigen apparaat. Deze vind je in je Windows AppData, specifiek op de volgende locatie:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Je kunt deze map makkelijk openen door tegelijk `CTRL` + `R` te drukken en in het run-venster het volgende pad in te voeren: `%localappdata%/FactoryGame/Saved/SaveGames`. Druk op **OK** en je wordt direct naar de map gebracht.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

Op deze plek zie je mappen waarin al je lokale savegames verzameld zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Savegame via FTP benaderen

Je savegame van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP-client, navigeer je naar de volgende map:
```
../satisfactory/save-backups
```

Hier zie je een map met een reeks willekeurige tekens, dat is je savegame. Klik met de rechtermuisknop op de map en kies **Download** om deze lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Automatische backup

We bieden ook de optie om je savegame (en configuratiebestand) automatisch te back-uppen via onze webinterface. Ga hiervoor naar de **Tools->Backups** sectie in de webinterface van je game server. Hier kun je verschillende opties instellen om automatische backups in te plannen. Je krijgt 10 GB gratis backup-opslag waar je backups worden bewaard. Voor meer info over backups, check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame uploaden

Net als bij het back-uppen is het uploaden van je savegame makkelijk. Zorg eerst dat je verbonden bent met je game server via een FTP-client. Ga dan naar de volgende map:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Sleep simpelweg je savegame map naar deze folder via je FTP-client en het wordt naar je server geüpload.

:::tip
Het kan handig zijn om de naam van de savegame map die je hebt geüpload te kopiëren, want die heb je nodig om hem te activeren in de volgende stap.
:::

## Savegame activeren

Je savegame gebruiken is super simpel. Dit kan via de in-game Satisfactory Server Manager of door naar het dashboard van je server te gaan en daar de **Savegame Manager** sectie te gebruiken.

## Conclusie

Je hebt succesvol een savegame toegevoegd aan je game server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />