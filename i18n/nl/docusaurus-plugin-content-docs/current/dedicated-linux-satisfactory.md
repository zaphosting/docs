---
id: dedicated-linux-satisfactory
title: "Dedicated Server: Satisfactory Dedicated Server Linux Setup"
description: "Begin met het installeren en configureren van een Satisfactory Dedicated Server op je Linux-server voor naadloze gamehosting → Leer nu meer"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je daarop de Satisfactory Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux-server met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup voor SteamCMD doen als je dit voor het eerst gebruikt op je Linux-server. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` gebruikersmap om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct te installeren naar de `steam` gebruiker.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt heb je de setup van je Satisfactory server afgerond. Je kunt verdere serverconfiguratie doen via de configuratiebestanden in de serverdirectory.

Je kunt alle configuratieparameters aanpassen door de **Engine.ini** en **GameUserSettings.ini** bestanden te openen en te bewerken in de Saved map.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame map en voer het **FactoryServer.sh** shellbestand uit.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan in de serverlijst door te zoeken op: `[jouw_ip_adres]:15777`.

## Conclusie

Gefeliciteerd, je hebt de Satisfactory server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, eenvoudige beheer- en logtoegang, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!