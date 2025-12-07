---
id: vserver-linux-foundry
title: "VPS: Foundry Dedicated Server Linux Setup"
description: "Ontdek hoe je de Foundry Dedicated server installeert op je Linux VPS voor naadloze gamehosting en beheer → Leer het nu"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Foundry Dedicated server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux-server met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Meer weten over de [GS/TS3 Interface](vserver-linux-gs-interface.md)?
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup doen voor SteamCMD als je dit voor het eerst op je Linux-server gebruikt. Volg onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
Foundry biedt momenteel geen native Linux-server build aan, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](vserver-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct te installeren onder de `steam` gebruiker. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Heb geduld terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt heb je de setup van je Foundry server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de serverdirectory.

Je kunt alle configuratie-instellingen aanpassen door het **app.cfg** configuratiebestand te openen en te bewerken in de root directory.
```
nano /home/steam/Foundry-Server/app.cfg
```

Check onze Foundry [Server Configuratie](foundry-configuration.md) gids om alle opties te zien en wat ze doen.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en start het **FoundryDedicatedServerLauncher.exe** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol is opgestart. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst met: `[jouw_ip_adres]:3724`.

## Conclusie

Gefeliciteerd, je hebt de Foundry server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Hierin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />