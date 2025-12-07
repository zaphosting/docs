---
id: dedicated-linux-css
title: "Dedicated Server: Counter-Strike: Source Dedicated Server Linux Setup"
description: "Leer hoe je een Counter-Strike: Source dedicated server installeert op je Linux VPS voor soepel gamehosting → Ontdek het nu"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Counter-Strike: Source Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux-server met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt. Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct te installeren onder de `steam` gebruiker.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt is de setup van je Counter-Strike: Source server afgerond. Je kunt verdere serverconfiguratie doen door het launch-bestand direct te bewerken.

Ga naar je root directory. Navigeer binnen deze directory naar de cfg map en open het `server.cfg` bestand. Hier kun je serveropties aanpassen.
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers op je server te laten joinen, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Deze token authenticeren je server bij Steam. Ga naar http://steamcommunity.com/dev/managegameservers en maak een token aan met game ID 232330, dat hoort bij Counter-Strike: Source.

Zodra je de token hebt, voeg je deze toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.

## Je server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en voer het volgende startcommando uit:
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs verschijnen in je command prompt, wat betekent dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan in de serverlijst door te zoeken op: `[jouw_ip_adres]:2456`.

## Conclusie

Gefeliciteerd, je hebt de Counter-Strike: Source server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, eenvoudige beheer- en logtoegang, en nog veel meer!

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂