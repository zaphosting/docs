---
id: dedicated-linux-arksurvivalascended
title: "Dedicated Server: ARK Survival Ascended Dedicated Server Linux Setup"
description: "Ontdek hoe je een ARK: Survival Ascended dedicated server op Linux instelt voor soepel gamen en serverbeheer → Leer het nu"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je de ARK: Survival Ascended Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je dedicated server kunt installeren? Zo kun je game server services opzetten met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook een eerste setup voor SteamCMD doen als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD helemaal klaar is voordat je verder gaat.

:::info Wine Compatibility Layer
ARK: Survival Ascended biedt momenteel geen native Linux-server build, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesmelding verschijnen.

## Configuratie

Op dit punt is de setup van je ARK: Survival Ascended server klaar. Je kunt de server verder configureren via een configuratiebestand in de serverdirectory.

Je kunt alle instellingen aanpassen door het **GameUserSettings.ini** bestand te openen en te bewerken, te vinden in de Saved map.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Bekijk onze [ARK: Survival Ascended Server Configuratie](ark-configuration.md) gids voor alle opties en wat ze doen.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofd game directory en run het **ArkAscendedServer.exe** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Helaas kun je vanwege gebrek aan ondersteuning de Anti-Cheat Battleye versie van de server niet op Linux draaien. De Anti-Cheat is namelijk niet compatibel.
:::

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:7777`.

## Conclusie

Gefeliciteerd, je hebt de ARK: Survival Ascended server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leggen we uit hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!