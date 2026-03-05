---
id: server-linux-csgo
title: "CS:GO Dedicated Server Linux Setup"
description: "Ontdek hoe je een CS:GO dedicated server op je Linux-server installeert voor soepel gamehosting → Leer het nu"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS/Dedicated Server en wil je daar de CS:GO Dedicated server service op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS/Dedicated Server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je VPS/Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt. Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` gebruikersmap om alles netjes te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/CS:GO-ds' +login anonymous +app_update 730 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt heb je de setup van je CS:GO server afgerond. Je kunt verdere serverconfiguratie doen door het launch-bestand direct te bewerken.

Ga naar je root directory. Navigeer daar naar de cfg map en open het `server.cfg` bestand. Hier kun je serveropties aanpassen.
```
nano /home/steam/CS:GO-ds/game/csgo/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers op je server te laten joinen, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Deze token authenticatieert je server bij Steam. Ga naar http://steamcommunity.com/dev/managegameservers en maak een token aan met de game ID **4465480**, dit is voor de nieuwe CS:GO Standalone.

Heb je de token? Voeg deze dan toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame map en voer het volgende launch-commando uit:
```
./CS:GO -dedicated +map de_dust2
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst onderaan met de zoekbalk door te zoeken op: `[jouw_ip_adres]:2456`.

## Conclusie

Gefeliciteerd, je hebt je CS:GO server succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijke beheeropties en toegang tot logs, en nog veel meer!

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂