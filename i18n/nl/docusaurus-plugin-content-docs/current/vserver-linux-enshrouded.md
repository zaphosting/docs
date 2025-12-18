---
id: vserver-linux-enshrouded
title: "VPS: Enshrouded Dedicated Server Linux Setup"
description: "Ontdek hoe je de Enshrouded Dedicated server op je Linux VPS installeert voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Enshrouded Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](vserver-linux-gs-interface.md) voor meer info.
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD helemaal klaar is voordat je verder gaat.

:::info Wine Compatibility Layer
Enshrouded heeft momenteel geen native Linux server build, dus is er een extra stap nodig om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](vserver-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je ervoor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesmelding verschijnen.

## Configuratie

Op dit punt is de setup van je Enshrouded server klaar. Je kunt de server verder configureren via een configuratiebestand in de serverdirectory.

Je kunt alle instellingen aanpassen door het **enshrouded_server.json** configuratiebestand te openen en te bewerken in de root directory.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Bekijk onze Enshrouded [Server Configuration](enshrouded-configuration.md) gids om alle beschikbare serveropties en hun functies te zien.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en start het **enshrouded_server.exe** bestand met het onderstaande commando. Vergeet niet **xvfb-run** en **wine** te gebruiken om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Je ziet nu veel logs in je terminal verschijnen. Als je de log `[Session] 'HostOnline' (up)!` ziet, betekent dit dat de server succesvol is gestart. Je kunt nu verbinden door de serverdetails toe te voegen in het **Find Games** tabblad: `[jouw_ip_adres]:15636`.

## Conclusie

Gefeliciteerd, je hebt de Enshrouded server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!

<InlineVoucher />