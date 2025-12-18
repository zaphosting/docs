---
id: vserver-linux-conan
title: "VPS: Conan Exiles Dedicated Server Linux Setup"
description: "Ontdek hoe je een Conan Exiles Dedicated server installeert en draait op je Linux VPS met SteamCMD en Wine compatibiliteit → Leer het nu"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Linux VPS en wil je de Conan Exiles Dedicated server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux server met behulp van SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Meer weten? Check de [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibiliteitslaag
Conan Exiles biedt momenteel geen native Linux server build, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux server gebruikt. Gebruik onze snelle [Wine Compatibiliteitslaag Setup](vserver-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Wees geduldig tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt is de setup van je Conan Exiles server afgerond. Je kunt de server verder configureren via een configuratiebestand in de server directory.

Je kunt alle configuratieparameters aanpassen door het **WindowsServerEngine.ini** bestand te openen en te bewerken in de volgende map:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Je voegt configuratie-opties toe door specifieke parameters toe te voegen. Bijvoorbeeld, om een servernaam, wachtwoord en admin wachtwoord in te stellen, voeg je het volgende toe aan het bestand:
```
[OnlineSubsystem]
ServerName=[jouw_servernaam]
ServerPassword=[jouw_wachtwoord]

[ServerSettings]
AdminPassword=[jouw_adminwachtwoord]
```

We raden aan om de [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) te checken voor een uitgebreide lijst met opties.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en start het **ConanSandboxServer.exe** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine64** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Je ziet nu veel logs in je terminal verschijnen die aangeven dat de server opstart. Je kunt direct verbinden door de server te zoeken in de serverlijst of direct verbinden via: `[jouw_ip_adres]:7777`.

## Afsluiting

Gefeliciteerd, je hebt succesvol de Conan Exiles server geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!

<InlineVoucher />