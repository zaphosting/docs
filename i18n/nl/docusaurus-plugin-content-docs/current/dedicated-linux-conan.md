---
id: dedicated-linux-conan
title: "Dedicated Server: Conan Exiles Dedicated Server Linux Setup"
description: "Ontdek hoe je een Conan Exiles Dedicated Server op Linux instelt voor naadloze gamehosting en beheer → Leer het nu"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Linux Dedicated Server en wil je daarop de Conan Exiles Dedicated server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup voor SteamCMD doen als je dit voor het eerst op je Linux-server gebruikt. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
Conan Exiles biedt momenteel geen native Linux-server build, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct voor de `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt heb je de setup van je Conan Exiles server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de serverdirectory.

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

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en start het **ConanSandboxServer.exe** bestand met het onderstaande commando. Vergeet niet **xvfb-run** en **wine64** te gebruiken om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Je ziet nu veel logs in je terminal verschijnen, wat betekent dat de server aan het opstarten is. Je kunt direct verbinden door de server te zoeken in de serverlijst of direct te connecten via: `[jouw_ip_adres]:7777`.

## Conclusie

Gefeliciteerd, je hebt de Conan Exiles server succesvol geïnstalleerd en geconfigureerd op je dedicated server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!