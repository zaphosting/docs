---
id: dedicated-linux-foundry
title: "Dedicated Server: Foundry Dedicated Server Linux Setup"
description: "Ontdek hoe je de Foundry Dedicated server installeert op je Linux server voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je daarop de Foundry Dedicated server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux server met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Zo zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](dedicated-linux-gs-interface.md) voor meer info.
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup doen voor SteamCMD als je dit voor het eerst op je Linux server gebruikt. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
Foundry biedt momenteel geen native Linux server build aan, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct voor de `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Wees geduldig tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt heb je de setup van je Foundry server afgerond. Je kunt de server verder configureren via een configuratiebestand in de server directory.

Je kunt alle configuratie-instellingen aanpassen door het **app.cfg** bestand in de root directory te openen en te bewerken.
```
nano /home/steam/Foundry-Server/app.cfg
```

Bekijk onze Foundry [Server Configuratie](foundry-configuration.md) gids voor alle opties en wat ze doen.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofd game directory en start het **FoundryDedicatedServerLauncher.exe** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol is opgestart. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst met: `[jouw_ip_adres]:3724`.

## Afsluiting

Gefeliciteerd, je hebt de Foundry server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, we helpen je elke dag graag verder!