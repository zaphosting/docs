---
id: soulmask-server-savegames
title: "Soulmask: Soulmask Savegames Beheren"
description: "Ontdek hoe je je Soulmask Gamesaves lokaal en op je server beheert en back-upt voor een veilige game-ervaring → Leer het nu"
sidebar_label: Savegames Beheren
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids laten we je zien hoe je je Soulmask Gamesaves beheert op je game server, inclusief het back-uppen van je lokale en server savegames en hoe je ze uploadt naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids voor extra hulp bij het verbinden met je server.

## Savegame Back-up

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je apparaat. Deze vind je in je Windows Local AppData, specifiek op deze locatie:
```
../AppData/Local/WS/[your_steamid]/AutoGames
```

:::tip
Je kunt deze map makkelijk openen door tegelijk `CTRL` + `R` te drukken en in het run-venster deze map te typen: `%userprofile%/appdata/local/WS/`. Klik op **OK** en open de map met je SteamID om bij de AutoGames map te komen.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

Hier zie je al je lokale savegames. Elke map is gelabeld met de invite code van de server, zodat je makkelijk de juiste wereld herkent.

### Savegame Toegang via FTP

Je savegame back-uppen vanaf de server is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar deze map:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Hier vind je de hoofdmap `Level01_Main`, waar de save van de dedicated server staat. Klik met rechts op de map en kies **Download** om deze lokaal op je apparaat op te slaan.

:::note
Op dit moment ondersteunen Soulmask dedicated servers maar één save tegelijk, die staat in de hoofdmap `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Automatische Back-up

We bieden ook een optie om je savegame (en configuratiebestand) automatisch te back-uppen via ons webinterface. Ga naar je game server webinterface en open **Tools->Backups**. Hier stel je makkelijk automatische back-ups in voor je server. Je krijgt 10GB gratis back-up opslagruimte voor je backups. Voor meer info check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame Uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Zorg eerst dat je verbonden bent met je game server via FTP en dat je server uitstaat.

:::note
Soulmask dedicated servers ondersteunen momenteel maar één save tegelijk, die in de hoofdmap `Level01_Main` staat.
:::

Ga dan naar deze map:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Sleep nu het **world.db** bestand van de save die je wilt uploaden naar deze map en vervang het bestaande bestand. Download het bestaande bestand eerst als je het wilt bewaren, want anders gaat het verloren bij overschrijven.

Je kunt ook je gameplay instellingen uploaden via deze map:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Sleep het **GameXishu.json** bestand van de save die je wilt uploaden naar deze map en vervang het bestaande bestand. Vergeet niet eerst het oude bestand te downloaden als je het wilt bewaren.

:::tip
Als het savebestand een iets andere naam heeft voor het **GameXishu.json** bestand, bijvoorbeeld `GameXishu_2.json`, hernoem het dan terug naar `GameXishu.json` zodat de dedicated server het herkent.
:::

Start nu je server opnieuw op en je save zou succesvol moeten laden op de server.

<InlineVoucher />