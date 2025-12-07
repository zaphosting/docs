---
id: dedicated-linux-tf2
title: "Dedicated Server: Team Fortress 2 Dedicated Server Linux Setup"
description: "Ontdek hoe je snel en efficiënt een Team Fortress 2 dedicated server op je Linux VPS installeert → Leer het nu"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je daarop de Team Fortress 2 Dedicated server draaien? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux-server met behulp van SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](dedicated-linux-gs-interface.md) voor meer info.
:::

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt. Ook moet je SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct te installeren onder de `steam` gebruiker.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt is de setup van je Team Fortress 2 server klaar. Je kunt de server verder configureren door het launch-bestand aan te passen.

Ga naar je root directory. Navigeer daar naar de cfg map en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers toe te laten op je server, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Deze token authenticatieert je server bij Steam. Ga naar http://steamcommunity.com/dev/managegameservers om een token aan te maken met game ID 232250, dat is Team Fortress 2.

Zodra je de token hebt, voeg je deze toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en voer het volgende commando uit:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst door in de zoekbalk te zoeken op: `[jouw_ip_adres]:2456`.

## Conclusie

Gefeliciteerd, je hebt succesvol de Team Fortress 2 server geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijke beheeropties en toegang tot logs, en nog veel meer!

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂