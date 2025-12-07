---
id: dedicated-linux-vrising
title: "Dedicated Server: V-Rising Dedicated Server Linux Setup"
description: "Ontdek hoe je de V-Rising Dedicated Server op Linux instelt voor naadloze gamehosting en beheer → Leer het nu"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je de V-Rising Dedicated Server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](dedicated-linux-gs-interface.md) voor meer info.
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup voor SteamCMD doen als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
V-Rising biedt momenteel geen native Linux-server build, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt is de setup van je V-Rising server klaar. Je kunt verdere serverconfiguratie doen door het launch-bestand direct te bewerken.

Je kunt alle configuratieparameters aanpassen door de **ServerGameSettings.json** en **ServerHostSettings.json** bestanden te openen en te bewerken in de Settings map.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Check onze V-Rising [Server Configuratie](vrising-configuration.md) gids om alle beschikbare serveropties en hun functies te bekijken.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame map, waar we aanraden een kopie te maken van het voorbeeld batchbestand.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Je kunt het bestand naar wens aanpassen. Als je klaar bent, start je het nieuwe **start_server.bat** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Je zou nu logs in je terminal moeten zien die aangeven dat de server succesvol is opgestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:8211`.

## Conclusie

Gefeliciteerd, je hebt de V-Rising server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!