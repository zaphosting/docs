---
id: foundry-server-savegames
title: "Foundry: Foundry Savegames beheren"
description: "Ontdek hoe je je Foundry Gamesaves veilig kunt back-uppen en beheren, zowel lokaal als op je server, voor een naadloze game-ervaring → Leer het nu"
sidebar_label: Savegames beheren
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In deze gids laten we je zien hoe je je Foundry Gamesaves beheert op je game server, inclusief het back-uppen van je lokale en server savegames en het uploaden ervan naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinding maken met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in de webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids voor extra hulp bij het verbinden met je server.

## Savegame back-uppen

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je apparaat. Deze vind je in je Windows LocalLow AppData, specifiek op het volgende pad:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Je kunt dit pad makkelijk direct openen door tegelijk `CTRL` + `R` te drukken en in het run-venster het volgende pad in te voeren: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Klik op **OK** en je wordt direct naar de map gebracht.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

Hier zie je al je lokale savegames.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Savegame via FTP benaderen

Je savegame van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP-client, navigeer je naar het volgende pad:
```
../foundry/saves/save
```

Hier zie je mappen, elk een savegame. Klik met de rechtermuisknop op de map en kies **Download** om deze lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Automatische backup

We bieden ook een optie om je savegame (en configuratiebestand) automatisch te back-uppen via onze webinterface. Ga naar de **Tools->Backups** sectie in je game server webinterface. Hier stel je eenvoudig automatische backups in. Je krijgt 10GB gratis backup opslagruimte voor je backups. Voor meer info check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Verbind eerst met je game server via een FTP-client. Ga dan naar:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Sleep simpelweg je savegame map naar deze folder in je FTP-client en hij wordt naar je server geüpload.

:::tip
Het is handig om de naam van de savegame map die je uploadt te onthouden, want die heb je nodig om hem te activeren in de volgende stap.
:::

## Savegame activeren

Om een specifieke savegame te gebruiken moet je een configuratiebestand aanpassen. Er zijn meerdere manieren om dit te doen, wij behandelen hier de webinterface omdat dat het makkelijkst is. Wil je andere methodes zien, check dan onze [Server Configuratie](foundry-configuration.md) gids.

Ga naar de **Settings** sectie in de webinterface van je game server en zoek de **Savename** instelling.

Verander deze naar de naam van de savegame map die je net hebt geüpload. Sla dit onderaan op met de groene **Save** knop en herstart je server.

<InlineVoucher />