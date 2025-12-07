---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Je Abiotic Factor Savegames beheren"
description: "Ontdek hoe je je Abiotic Factor game saves lokaal en op je server beheert en back-upt voor een veilige game-ervaring → Leer het nu"
sidebar_label: Savegames beheren
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids laten we je zien hoe je je Abiotic Factor savegames beheert op je game server, inclusief het back-uppen van je lokale en server savegames en hoe je ze uploadt naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik ook onze [Toegang via FTP](gameserver-ftpaccess.md) gids als extra hulp om verbinding te maken met je server.

## Savegame back-uppen

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je apparaat. Die vind je in je Windows Local AppData, specifiek op deze locatie:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[jouw_steamid]/Worlds
```

:::tip
Je kunt deze map makkelijk openen door tegelijk `CTRL` + `R` te drukken en in het run-venster deze map te plakken: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Klik op **OK** en je komt direct in de map terecht.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Zorg dat je naar de juiste Steam ID map navigeert en daarna naar de `Worlds` map. Hier vind je al je lokale savegames.

### Savegame via FTP benaderen

Je savegame van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar deze map:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

Hier vind je je savegames. Klik met de rechtermuisknop op de map en kies **Download** om ze lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Automatische backup

We bieden ook een optie om je savegame (en config-bestand) automatisch te back-uppen via ons webinterface. Ga naar je game server webinterface en open **Tools->Backups**. Hier stel je makkelijk automatische backups in voor je server. Je krijgt 10 GB gratis backup opslagruimte waar je backups worden bewaard. Voor meer info check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame uploaden

Net als bij back-uppen is uploaden van je savegame makkelijk. Zorg eerst dat je verbonden bent met je game server via een FTP-client. Ga dan naar deze map:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Op dit moment ondersteunen Abiotic Factor dedicated servers nog geen savegame wisseling, dus je moet de inhoud van je savegame map uploaden naar de hoofdmap `world`.
:::

Open de map van de savegame die je wilt uploaden. Sleep alle bestanden en mappen uit die savegame map naar de hoofdmap `world` op de server. Zo upload je je savegame naar je server.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Als de hoofdmap `world` ontbreekt, probeer dan de server uit en aan te zetten. Helpt dat niet, gebruik dan de knop **Revalidate Steam Files** in het hoofd dashboard van je gameserver om de standaardbestanden te herstellen.
:::

## Savegame activeren

In tegenstelling tot normaal waarbij je een config-bestand moet aanpassen om je savegame te activeren, is dat hier niet nodig omdat Abiotic Factor dedicated servers nog geen savegame wisseling ondersteunen.

Start je server gewoon opnieuw op en bij de volgende start laadt de server automatisch de savegame die je in de hoofdmap `world` hebt geüpload.

<InlineVoucher />