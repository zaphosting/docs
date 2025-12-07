---
id: vserver-linux-valheim
title: "VPS: Valheim Dedicated Server Linux Setup"
description: "Ontdek hoe je een Valheim Dedicated server op je Linux VPS installeert voor soepel gamen en serverbeheer → Leer het nu"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je daar de Valheim Dedicated server op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Zo zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](vserver-linux-gs-interface.md) voor meer info.
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Volg onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD helemaal klaar is voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct voor de `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Heb even geduld terwijl de download loopt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesmelding verschijnen.

## Configuratie

Op dit punt is de setup van je Valheim server klaar. Je kunt de server verder configureren door het launch-bestand aan te passen.

Ga naar je root directory en open het `.sh` bestand. Hier kun je parameters aanpassen.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame map en run het **start_server.sh** shell-script.
```
/home/steam/Valheim-Server/start_server.sh
```

Je ziet nu logs in je command prompt verschijnen die aangeven dat de server succesvol is opgestart. Let op: de eerste keer opstarten kan wat langer duren omdat alles wordt klaargezet. Je kunt ook direct verbinden via de serverlijst onderaan met de zoekbalk door te zoeken op: `[jouw_ip_adres]:2456`.

:::info
Als je niet kunt verbinden en `PlayFab` errors krijgt in de console, moet je mogelijk crossplay support uitzetten. Dit is een bekend issue met de Linux-versie. Open `nano /home/steam/Valheim-Server/start_server.sh` en verwijder de `-crossplay` flag.

Wil je toch crossplay gebruiken? Dan is een alternatief om de Windows-versie te installeren en **Wine** te gebruiken als compatibiliteitslaag. Gebruik onze snelle [Wine Compatibility Layer Setup](vserver-linux-wine.md) gids om dit in te stellen. Daarna installeer je de Windows server via SteamCMD met:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Start de Windows-versie via Wine met dit commando: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Afsluiting

Gefeliciteerd, je hebt je Valheim server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit brengt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!

<InlineVoucher />