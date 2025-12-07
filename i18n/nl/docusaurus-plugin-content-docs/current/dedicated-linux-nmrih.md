---
id: dedicated-linux-nmrih
title: "Dedicated Server: No More Room In Hell Dedicated Server Linux Setup"
description: "Ontdek hoe je efficiënt een No More Room In Hell dedicated server op je Linux VPS installeert → Leer het nu"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je daarop de No More Room In Hell Dedicated server draaien? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux server met behulp van SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](dedicated-linux-gs-interface.md) voor meer info.
:::

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt. Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gedaan. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar de `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesmelding verschijnen.

## Configuratie

Op dit punt is de setup van je No More Room In Hell server afgerond. Je kunt verdere serverconfiguratie doen door het launch-bestand direct aan te passen.

Ga naar je root directory. Navigeer daar naar de cfg map en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers toe te laten op je server, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Deze token authenticatieert je server bij Steam. Ga naar http://steamcommunity.com/dev/managegameservers en maak een token aan met game ID 317670, dat hoort bij No More Room In Hell.

Zodra je de token hebt, voeg je deze toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en voer het volgende commando uit:
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs verschijnen in je terminal die aangeven dat de server succesvol is opgestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst door in de zoekbalk te zoeken op: `[jouw_ip_adres]:2456`.

## Afsluiting

Gefeliciteerd, je hebt No More Room In Hell succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijke beheeropties en toegang tot logs, en nog veel meer!

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂