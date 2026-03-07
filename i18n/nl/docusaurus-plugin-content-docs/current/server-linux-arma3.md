---
id: server-linux-arma3
title: "Arma 3 Dedicated Server Linux Setup"
description: "Ontdek hoe je de Arma 3 Dedicated Server op Linux installeert en runt voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS/Dedicated Server en wil je daarop de Arma 3 Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met behulp van SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS/Dedicated Server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::



## Voorbereiding

Begin met verbinden met je VPS/Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup voor SteamCMD doen als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.



## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` gebruikersmap om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren. Met de parameter `+@sSteamCmdForcePlatformType windows` zorg je er geforceerd voor dat de Windows binaries worden geïnstalleerd.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesbericht verschijnen.



## Configuratie

Op dit punt heb je de setup van je Arma 3 server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de serverdirectory.

Je kunt alle configuratie-instellingen aanpassen door het **server.cfg** bestand te openen en te bewerken in de root directory.
```
nano /home/steam/arma3-server/server.cfg
```



## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame map en start het uitvoerbare bestand **arma3server_x64** met het volgende commando.

```
/home/steam/arma3-server/arma3server_x64
```

Je ziet nu veel logs in je terminal verschijnen die aangeven dat de server succesvol is gestart.

Spelers kunnen direct verbinden via de **Arma 3 server browser** met jouw server IP-adres en de standaardpoort **2302**.

## Afsluiting

Gefeliciteerd, je hebt de **Arma 3 server** succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />