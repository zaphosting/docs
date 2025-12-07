---
id: vserver-linux-palworld
title: "VPS: Palworld Dedicated Server Linux Setup"
description: "Ontdek hoe je efficiënt een Palworld Dedicated server op je Linux VPS installeert en runt → Leer het nu"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je daarop de Palworld Dedicated server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface](vserver-linux-gs-interface.md) voor meer info.
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gedaan. Volg onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt is de setup van je Palworld server klaar. Je kunt de server verder configureren via een configuratiebestand in de serverdirectory.

Je moet eerst een kopie maken van het standaard configuratiebestand en deze in de saved map plaatsen voordat je het kunt aanpassen.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Met de kopie gemaakt, kun je de belangrijkste instellingen aanpassen door het nieuwe **PalWorldSettings.ini** bestand te openen.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Bekijk onze Palworld [Server Configuratie](palworld-configuration.md) gids om alle opties en hun functies te ontdekken.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en voer het **PalServer.sh** shell script uit.
```
/home/steam/Palworld-Server/PalServer.sh
```

Je ziet nu logs verschijnen in je terminal, inclusief een gameversie log, wat betekent dat de server succesvol is opgestart. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:8211`.

## Afsluiting

Gefeliciteerd, je hebt de Palworld server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijke beheeropties en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />