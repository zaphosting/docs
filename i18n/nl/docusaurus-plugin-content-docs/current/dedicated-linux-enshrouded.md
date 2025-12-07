---
id: dedicated-linux-enshrouded
title: "Dedicated Server: Enshrouded Dedicated Server Linux Setup"
description: "Ontdek hoe je de Enshrouded Dedicated Server op Linux installeert en runt voor naadloze gamehosting en beheer → Leer het nu"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je de Enshrouded Dedicated Server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup doen voor SteamCMD als je dit voor het eerst op je Linux-server gebruikt. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
Enshrouded biedt momenteel geen native Linux-server build, wat betekent dat er een extra voorbereiding nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` gebruikersmap om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct voor de `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Heb geduld terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt heb je de setup van je Enshrouded server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de serverdirectory.

Je kunt alle configuratie-instellingen aanpassen door het **enshrouded_server.json** configuratiebestand te openen en te bewerken in de root directory.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Bekijk onze Enshrouded [Server Configuratie](enshrouded-configuration.md) gids om alle beschikbare serveropties en hun functies te zien.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame map en start het **enshrouded_server.exe** uitvoerbare bestand met het onderstaande commando. Zorg dat je de **xvfb-run** en **wine** commando’s gebruikt om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Je ziet nu veel logs verschijnen in je terminal. Als je de log `[Session] 'HostOnline' (up)!` ziet, betekent dit dat de server succesvol is opgestart. Je kunt nu direct verbinden door de servergegevens toe te voegen in het **Find Games** tabblad: `[jouw_ip_adres]:15636`.

## Conclusie

Gefeliciteerd, je hebt de Enshrouded server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!