---
id: vserver-linux-satisfactory
title: "VPS: Satisfactory Dedicated Server Linux Setup"
description: "Ontdek hoe je een Satisfactory Dedicated server installeert op je Linux VPS voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Satisfactory Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](vserver-linux-gs-interface.md) voor meer info.
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt is de setup van je Satisfactory server klaar. Je kunt verdere serverconfiguratie doen via de configuratiebestanden in de serverdirectory.

Je kunt alle instellingen aanpassen door de **Engine.ini** en **GameUserSettings.ini** bestanden te openen en te bewerken in de Saved map.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en voer het **FactoryServer.sh** shellbestand uit.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Je ziet nu logs verschijnen in je command prompt, wat betekent dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:15777`.

## Conclusie

Gefeliciteerd, je hebt de Satisfactory server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />