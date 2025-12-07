---
id: satisfactory-switchexperimental
title: "Satisfactory: Experimentele Build"
description: "Ontdek de voordelen en risico's van het gebruik van de experimentele build van Satisfactory om vroege toegang te krijgen tot grote updates en je gameplay-ervaring te verbeteren → Leer nu meer"
sidebar_label: Experimentele Build
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wat is de experimentele build?
Satisfactory heeft twee versies: de reguliere build en de experimentele build. De reguliere build is betrouwbaarder, stabieler en minder foutgevoelig omdat het een meer afgeronde versie is. De experimentele build geeft je echter als eerste toegang tot grote patches voordat ze als reguliere build worden uitgebracht. Hierdoor is de kans op bugs groter en zijn updates veel frequenter, maar je kunt wel als eerste de grote updates uitproberen!

:::info
Let op: Ongeacht welke build je kiest, zowel je server als je gameclient moeten op dezelfde build-versie zitten om verbinding te kunnen maken.
:::

<InlineVoucher />

## Hoe switch je naar de experimentele build?
Via ons gameserver-systeem is het super simpel om de build van je server te veranderen via onze website. We raden aan eerst een backup te maken van je Satisfactory savegames, want switchen wist alle bestanden.

### Savegames back-uppen
Je hele gameserver of savegames back-uppen is heel makkelijk. Ga naar de Satisfactory productpagina en open het tabblad `Tools -> Backups`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

Op deze pagina kun je allerlei functies uitvoeren, waaronder automatische backups, die we verder uitleggen in [Backups](gameserver-backups.md). Hier focussen we op een handmatige backup.

Bovenaan de pagina klik je simpelweg op het groene + icoon en bevestig je de prompt om een backup te maken van de hele gameserver naar je ZAP backup opslag.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Je backup is nu gemaakt en is via FTP toegankelijk, zie [Toegang via FTP](gameserver-ftpaccess.md).

Je kunt ook de savegame-bestanden direct downloaden via de `Savegame Manager` in de webinterface. Je vindt deze hier: [Savegame Manager](satisfactory-savegame.md).

### Overschakelen naar de experimentele gameserver
Ga eerst naar je Satisfactory productpagina en open het tabblad `Settings -> Games`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Je ziet de sectie `Installed games` met de games die je al hebt geïnstalleerd. Als je eerder al tussen builds hebt gewisseld, staat hij hier en kun je door naar de laatste stap om de game te activeren.

Scroll daarna naar beneden en klik op het dropdown-menu `Available Games` en zoek in het tekstvak naar "Satisfactory".

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Klik op de groene downloadknop en bevestig de setup in de prompt die verschijnt. De download van de gekozen serverbuild start nu.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>De download kan een paar minuten duren. Wacht tot hij klaar is voordat je verder gaat met de laatste stap.

Nu verschijnen beide versies onder `Installed games` voor toekomstige referentie, wat het wisselen makkelijker maakt.

Tot slot moet je de game activeren onder `Installed games`. Klik op het blauwe icoon om de game te activeren.

:::info
Let op: Tijdens de herinstallatie worden alle gamegegevens verwijderd. Zorg dat je een backup hebt gemaakt als je dat nog niet hebt gedaan.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Wil je terug naar de reguliere build? Volg dan dezelfde stappen, maar kies tijdens het selecteren de reguliere Satisfactory gameserver!

## Gameclient switchen naar experimenteel
:::info
Let op: Ongeacht welke build je kiest, zowel je server als je gameclient moeten op dezelfde build-versie zitten om verbinding te kunnen maken.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Open eerst Steam en ga naar je gamebibliotheek. Zoek "Satisfactory", klik met rechts en kies het eigenschappenmenu.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

Ga in het nieuwe menu naar de sectie `Betas` en selecteer `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

Dat is alles! Nu moet je wachten tot Steam de game update naar de geselecteerde build. Daarna kun je starten en genieten van je server!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Voor Epic Games is switchen naar experimenteel nog makkelijker. Ga naar je bibliotheek en zoek de game "Satisfactory Experimental". Beide builds staan als aparte games in de Epic Games launcher.

Dat is alles! Nu moet je wachten tot Epic Games de game downloadt en installeert. Daarna kun je starten en genieten van je server!

</TabItem>
</Tabs>

<InlineVoucher />