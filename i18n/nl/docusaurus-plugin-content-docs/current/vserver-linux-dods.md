---
id: vserver-linux-dods
title: "VPS: Day of Defeat: Source Dedicated Server Linux Setup"
description: "Ontdek hoe je snel en makkelijk een Day of Defeat: Source dedicated server op je Linux VPS installeert → Leer het nu"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je daar een Day of Defeat: Source Dedicated Server op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](vserver-linux-gs-interface.md) voor meer info.
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt. Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gedaan. Volg onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD helemaal klaar is voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando. Hiermee installeer je via SteamCMD direct naar de `steam` gebruiker.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Heb even geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.

## Configuratie

Op dit punt is de setup van je Day of Defeat: Source server klaar. Je kunt de server verder configureren door het launch-bestand aan te passen.

Ga naar je root directory. Navigeer daar naar de cfg map en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers op je server te laten joinen, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Dit token authenticiseert je server bij Steam. Maak een token aan via http://steamcommunity.com/dev/managegameservers met game ID 232290, dat is Day of Defeat: Source.

Zodra je het token hebt, voeg je het toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en voer dit commando uit:
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol opstart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst door onderin te zoeken op: `[jouw_ip_adres]:2456`.

## Afsluiting

Gefeliciteerd, je hebt je Day of Defeat: Source server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin leer je hoe je je dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />