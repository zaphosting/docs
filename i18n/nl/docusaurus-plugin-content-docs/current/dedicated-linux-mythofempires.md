---
id: dedicated-linux-mythofempires
title: "Dedicated Server: Myth of Empires Dedicated Server Linux Setup"
description: "Ontdek hoe je de Myth of Empires Dedicated Server op Linux installeert en je game hosting setup optimaliseert → Leer het nu"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je de Myth of Empires Dedicated server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup voor SteamCMD doen als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
Myth of Empires biedt momenteel geen native Linux-server build aan, wat betekent dat er een extra voorbereiding nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` gebruikersmap om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct als `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Heb geduld terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt heb je de setup van je Myth of Empires server afgerond. Je kunt verdere serverconfiguratie doen via verschillende configuratiebestanden in de serverdirectory.

Je kunt alle configuratieparameters aanpassen door de `.ini` configuratiebestanden in de Saved map te openen en te bewerken. Gebruik het `ls` commando om te zien welke bestanden er zijn.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Om een bestand te bewerken, gebruik je simpelweg `nano ./[bestandsnaam].ini` om de nano editor te openen.

Bekijk onze Myth of Empires [Server Configuratie](moe-configuration.md) gids om alle beschikbare serveropties en hun functies te zien.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en start het **MOEServer.exe** uitvoerbare bestand met het onderstaande commando. Zorg dat je de **xvfb-run** en **wine** commando’s gebruikt om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Je ziet nu logs verschijnen in je terminal die aangeven dat de server succesvol is opgestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt direct verbinden door in de **Custom Server** tab te zoeken op: `[jouw_ip_adres]:15636`.

## Conclusie

Gefeliciteerd, je hebt de Myth of Empires server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijke beheer- en logtoegang, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!