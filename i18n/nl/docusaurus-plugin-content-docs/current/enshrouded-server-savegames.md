---
id: enshrouded-server-savegames
title: "Enshrouded: Je Enshrouded Savegames Beheren"
description: "Ontdek hoe je je Enshrouded Gamesaves beheert en back-upt voor veilig multiplayer gamen → Leer het nu"
sidebar_label: Savegames Beheren
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In deze gids laten we je zien hoe je je Enshrouded Gamesaves beheert op je game server, inclusief het back-uppen van je lokale en server savegames en het uploaden ervan naar je server.

<InlineVoucher />

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinden met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids voor extra hulp bij het verbinden met je server.

## Savegame Back-up

### Lokale Savegame

Lokale savegames zijn savegames die je hebt gemaakt terwijl je een multiplayer game lokaal op je apparaat hostte. Standaard gebruikt Enshrouded Steam Cloud om je savegame automatisch te back-uppen. Om hier toegang toe te krijgen, moet je naar je Steam userdata map gaan om de game data te vinden. Ga naar het volgende pad:
```
../Steam/userdata/[jouw_steamid]/1203620/remote
```

:::tip
Bij een standaard installatie staat de Steam map op je OS-schijf, op het pad: `C://Program Files x86/Steam`. Houd er rekening mee dat dit anders kan zijn als je Steam ergens anders hebt geïnstalleerd.
:::

Als je deze map bereikt, zie je een characters-bestand samen met al je lokale savegames op één plek.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Als je expliciet **geen** gebruik maakt van Steam Cloud om op te slaan, vind je je save map in de volgende directory: `C://Users/[jouwgebruikersnaam]/Saved Games/Enshrouded`.
:::

### Savegame Toegang via FTP

Je savegame back-uppen vanaf de server is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar het volgende pad:
```
../enshrouded/savegame/
```

Hier zie je een bestand met willekeurige tekens, dat is je savegame. Klik er met de rechtermuisknop op en gebruik de **Download** knop om het lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Automatische Back-up

We bieden ook een optie om je savegame (en configuratiebestand) automatisch te back-uppen via ons webinterface. Ga naar het webinterface van je game server en open de sectie **Tools->Backups**. Hier kun je verschillende opties instellen om automatische back-ups van je server te plannen. We geven je 10GB gratis back-up opslagruimte waar je back-ups worden opgeslagen. Voor meer info over back-ups, check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame Uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Zorg eerst dat je verbonden bent met je game server via een FTP-client. Ga dan naar het volgende pad:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Sleep simpelweg je savegames in deze map via je FTP-client en ze worden geüpload naar je server.

## Savegame Activeren

Je savegame gebruiken is super easy. Verbind met je server en tijdens het opstarten van de game kun je een specifieke savegame kiezen die je wilt gebruiken. De naam, level en laatste gespeelde datum van de save worden onder elke save weergegeven zodat je makkelijk kunt kiezen.

Je hebt nu succesvol een savegame toegevoegd aan je game server.

<InlineVoucher />