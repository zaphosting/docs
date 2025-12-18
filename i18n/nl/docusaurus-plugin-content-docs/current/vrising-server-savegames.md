---
id: vrising-server-savegames
title: "V Rising: Je V Rising Savegames Beheren"
description: "Ontdek hoe je je V Rising game saves beheert en back-upt voor een veilige multiplayer ervaring → Leer het nu"
sidebar_label: Savegames Beheren
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids laten we je zien hoe je je V Rising savegames beheert op je game server, inclusief het back-uppen van je lokale en server savegames en hoe je ze uploadt naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids als extra hulp om verbinding te maken met je server.

## Savegame Back-up

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je apparaat. Deze vind je in je Windows LocalLow AppData, specifiek op deze locatie:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Je kunt deze map makkelijk openen door tegelijk `CTRL` + `R` te drukken en in het run-venster deze map te plakken: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Klik op **OK** en je komt direct in de map terecht.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

Hier zie je een `Saves` en/of `CloudSaves` map, afhankelijk van of je de Steam Cloud Saving functie hebt gebruikt en het type server. In deze mappen vind je je lokale savegames.

:::note
Afhankelijk van de gameversie staan je saves in een v1 of v3 map.
:::

### Savegame via FTP Toegang

Je savegame van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar deze map:
```
../vrising/save-data/Saves
```

Hier zie je een v1 en v3 map, afhankelijk van de gameversie. In elke map vind je je savegames. Klik met de rechtermuisknop op de map en kies **Download** om ze lokaal op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Automatische Back-up

We bieden ook een optie om je savegame (en configuratiebestand) automatisch te back-uppen via ons webinterface. Ga naar **Tools->Backups** in je game server webinterface. Hier stel je eenvoudig automatische back-ups in. Je krijgt 10GB gratis back-up opslagruimte voor je backups. Voor meer info check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame Uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Verbind eerst met je game server via een FTP-client. Ga dan naar:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Afhankelijk van je save versie sleep je je savegames naar de juiste map in je FTP-client en ze worden geüpload naar je server.

:::tip
Handig om de naam van de savegame map te kopiëren die je uploadt, want die heb je nodig om hem te activeren in de volgende stap.
:::

## Savegame Activeren

Om een specifieke savegame te gebruiken moet je een configuratiebestand aanpassen. Er zijn meerdere manieren, maar we leggen hier uit hoe je dat via het webinterface doet, want dat is het makkelijkst. Wil je andere methodes zien? Check dan onze [Server Configuratie](vrising-configuration.md) gids.

Ga naar de **Settings** sectie in het webinterface van je game server en zoek de **Savename** instelling.

Verander deze naar de naam van de savegame map die je net hebt geüpload. Sla dit onderaan op met de groene **Save** knop en herstart je server.

<InlineVoucher />