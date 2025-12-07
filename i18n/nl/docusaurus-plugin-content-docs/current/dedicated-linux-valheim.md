---
id: dedicated-linux-valheim
title: "Dedicated Server: Valheim Dedicated Server Linux Setup"
description: "Ontdek hoe je een Valheim Dedicated Server op Linux installeert om je game soepel te hosten en je serverprestaties te optimaliseren → Leer het nu"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je daar de Valheim Dedicated Server service op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` gebruikersmap om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Heb even geduld terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt is de setup van je Valheim server afgerond. Je kunt de server verder configureren door het launch-bestand direct te bewerken.

Ga naar je root directory en open het `.sh` bestand. Hier kun je parameters aanpassen.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame map en voer het **start_server.sh** shellbestand uit.
```
/home/steam/Valheim-Server/start_server.sh
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is opgestart. Let op: de eerste keer opstarten kan wat langer duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:2456`.

:::info
Als je niet kunt verbinden en `PlayFab` fouten in de console ziet, moet je mogelijk crossplay uitschakelen. Dit is een bekend probleem met de Linux-versie. Open `nano /home/steam/Valheim-Server/start_server.sh` en verwijder de `-crossplay` vlag.

Heb je crossplay nodig? Dan is een alternatieve oplossing om de Windows-versie te installeren en **Wine** te gebruiken als compatibiliteitslaag. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen. Zodra dat klaar is, installeer je de Valheim Windows server via SteamCMD met:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Start daarna de Windows-versie via Wine met dit commando: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Afsluiting

Gefeliciteerd, je hebt de Valheim server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, eenvoudige beheer- en logtoegang, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!