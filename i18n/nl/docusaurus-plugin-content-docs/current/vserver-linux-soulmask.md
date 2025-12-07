---
id: vserver-linux-soulmask
title: "VPS: Soulmask Dedicated Server Linux Setup"
description: "Ontdek hoe je de Soulmask Dedicated server snel en efficiënt installeert en configureert op je Linux VPS → Leer het nu"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Soulmask Dedicated server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux server met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gebruikt. Gebruik onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt is de setup van je Soulmask server afgerond. Je kunt verdere serverconfiguratie doen via de configuratiebestanden in de serverdirectory.

Je kunt alle configuratie-instellingen aanpassen door het **Engine.ini** bestand te openen en te bewerken, te vinden in de Saved map.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en voer het uitvoerbare bestand **StartServer.sh** uit met het volgende commando.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Je ziet nu logs verschijnen in je command prompt, wat aangeeft dat de server succesvol is gestart. Let op: de eerste keer opstarten kan wat langer duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:18888`.

## Conclusie

Gefeliciteerd, je hebt de Soulmask server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, eenvoudige beheer- en logtoegang, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />