---
id: dedicated-linux-soulmask
title: "Dedicated Server: Soulmask Dedicated Server Linux Setup"
description: "Ontdek hoe je een Soulmask Dedicated Server op Linux installeert en configureert voor naadloze gamehosting en beheer → Leer het nu"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je de Soulmask Dedicated Server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](dedicated-linux-gs-interface.md) voor meer info.
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt is de setup van je Soulmask server klaar. Je kunt de server verder configureren via de configuratiebestanden in de serverdirectory.

Je kunt alle configuratie-instellingen aanpassen door het **Engine.ini** bestand te openen en te bewerken, te vinden in de Saved folder.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en voer het **StartServer.sh** script uit met het volgende commando:
```
/home/steam/Soulmask-Server/StartServer.sh
```

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol opstart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst door in de zoekbalk te zoeken op: `[jouw_ip_adres]:18888`.

## Conclusie

Gefeliciteerd, je hebt de Soulmask server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leggen we uit hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!