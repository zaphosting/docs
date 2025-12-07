---
id: dedicated-linux-rust
title: "Dedicated Server: Rust Dedicated Server Linux Setup"
description: "Leer hoe je een Rust Dedicated Server op Linux installeert om je game efficiënt te hosten en de serverprestaties te optimaliseren → Leer nu meer"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Linux Dedicated Server en wil je daar de Rust Dedicated Server service op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD helemaal klaar is voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Heb even geduld terwijl de download loopt, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

## Configuratie

Op dit punt is de setup van je Rust server klaar. Je kunt de server verder configureren via configuratiebestanden in de serverdirectory.

Ga naar je root directory en maak een `.sh` bestand aan. Dit wordt het bash-script om de server te starten en verschillende instellingen aan te passen.
```
nano /home/steam/Rust-Server/start_server.sh
```

Voeg nu de volgende inhoud toe aan het bash-bestand. In het commando hieronder staan een aantal basis en veelgebruikte parameters. Wil je meer toevoegen of meer weten over de opties? Check dan de [officiële Rust wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) voor alle configuratiemogelijkheden.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Sla het bestand op met `CTRL+X`, gevolgd door `Y` en `Enter`. Maak het bash-bestand daarna uitvoerbaar zonder sudo-rechten met dit commando:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Server starten & verbinden

Tijd om je server te starten! Ga naar de hoofdgame-directory en run het **start_server.sh** script.
```
/home/steam/Rust-Server/start_server.sh
```

Je ziet nu logs verschijnen in je terminal die aangeven dat de server succesvol opstart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden door te zoeken op: `[jouw_ip_adres]:28015`.

## Conclusie

Gefeliciteerd, je hebt je Rust server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit brengt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!