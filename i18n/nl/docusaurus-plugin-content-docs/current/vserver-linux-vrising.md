---
id: vserver-linux-vrising
title: "VPS: V-Rising Dedicated Server Linux Setup"
description: "Ontdek hoe je de V-Rising Dedicated server efficiënt installeert en draait op je Linux VPS → Leer het nu"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de V-Rising Dedicated server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux-server met behulp van SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Meer weten over de [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
V-Rising biedt momenteel geen native Linux-server build, wat betekent dat je een extra stap moet doen om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](vserver-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt is de setup van je V-Rising server afgerond. Je kunt de server verder configureren door het launch-bestand direct te bewerken.

Je kunt alle configuratieparameters aanpassen door de **ServerGameSettings.json** en **ServerHostSettings.json** bestanden te openen en te bewerken in de Settings map.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Check onze V-Rising [Server Configuratie](vrising-configuration.md) gids om alle beschikbare serveropties en hun functies te bekijken.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame map en maak een kopie van het voorbeeld batchbestand.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Je kunt het bestand naar wens aanpassen. Als je klaar bent, start je het nieuwe **start_server.bat** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol is opgestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst onderaan met de zoekbalk door te zoeken op: `[jouw_ip_adres]:8211`.

## Afsluiting

Gefeliciteerd, je hebt de V-Rising server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Hierin leggen we uit hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijke beheer- en logtoegang, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />