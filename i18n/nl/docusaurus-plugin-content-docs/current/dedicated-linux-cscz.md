---
id: dedicated-linux-cscz
title: "Dedicated Server: Counter-Strike: Condition Zero Dedicated Server Linux Setup"
description: "Ontdek hoe je een Counter-Strike: Condition Zero dedicated server op een Linux VPS installeert voor soepel gamebeheer → Leer het nu"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Counter-Strike: Condition Zero Dedicated server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](dedicated-linux-gs-interface.md) voor meer info.
:::

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt. Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar de `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Heb geduld terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt is de setup van je Counter-Strike: Condition Zero server afgerond. Je kunt de server verder configureren door het launch-bestand aan te passen.

Ga naar je root directory. Navigeer naar de cfg map en open het `server.cfg` bestand. Hier kun je serveropties aanpassen.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en voer het volgende startcommando uit:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Je ziet nu logs verschijnen in je command prompt, wat betekent dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:2456`.

## Afsluiting

Gefeliciteerd, je hebt de Counter-Strike: Condition Zero server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂