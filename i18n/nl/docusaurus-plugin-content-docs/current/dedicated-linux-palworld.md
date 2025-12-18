---
id: dedicated-linux-palworld
title: "Dedicated Server: Palworld Dedicated Server Linux Setup"
description: "Ontdek hoe je een Palworld Dedicated Server op Linux installeert en configureert voor soepel gamebeheer → Leer het nu"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je daarop de Palworld Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt is de setup van je Palworld server afgerond. Je kunt de server verder configureren via een configuratiebestand in de serverdirectory.

Je moet eerst een kopie maken van het standaardconfiguratiebestand en deze in de saved map plaatsen voordat je het kunt aanpassen.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Met de kopie gemaakt, kun je de belangrijkste configuratieparameters aanpassen door het nieuwe **PalWorldSettings.ini** bestand te openen.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Bekijk onze Palworld [Server Configuratie](palworld-configuration.md) gids om alle opties en hun functies te zien.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en voer het **PalServer.sh** shellbestand uit.
```
/home/steam/Palworld-Server/PalServer.sh
```

Je ziet nu logs verschijnen in je terminal, inclusief een gameversie log, wat betekent dat de server succesvol is opgestart. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:8211`.

## Conclusie

Gefeliciteerd, je hebt de Palworld server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!