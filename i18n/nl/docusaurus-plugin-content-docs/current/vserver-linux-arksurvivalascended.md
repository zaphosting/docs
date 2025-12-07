---
id: vserver-linux-arksurvivalascended
title: "VPS: ARK Survival Ascended Dedicated Server Linux Setup"
description: "Ontdek hoe je de ARK: Survival Ascended Dedicated server op je Linux VPS installeert voor soepel gamebeheer → Leer het nu"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de ARK: Survival Ascended Dedicated server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Check de [GS/TS3 Interface hier](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gedaan. Gebruik onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

:::info Wine Compatibility Layer
ARK: Survival Ascended biedt momenteel geen native Linux-server build, wat betekent dat er een extra stap nodig is om de Windows server build op Linux te draaien.

Je moet eenmalig de **Wine** compatibiliteitslaag installeren als je dit voor het eerst op je Linux-server gebruikt. Gebruik onze snelle [Wine Compatibility Layer Setup](vserver-linux-wine.md) gids om dit in te stellen voordat je verder gaat.
:::

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando om via SteamCMD direct naar je `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Wees geduldig tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesmelding verschijnen.

## Configuratie

Op dit punt is de setup van je ARK: Survival Ascended server afgerond. Je kunt de server verder configureren via een configuratiebestand in de serverdirectory.

Je kunt alle configuratie-instellingen aanpassen door het **GameUserSettings.ini** bestand te openen en te bewerken, te vinden in de Saved map.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Bekijk onze [ARK: Survival Ascended Server Configuration gids](ark-configuration.md) om alle opties en hun functies te zien.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame directory en run het **ArkAscendedServer.exe** bestand met het onderstaande commando. Vergeet niet de **xvfb-run** en **wine** commando’s toe te voegen om het via de Wine compatibiliteitslaag te draaien.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Helaas kun je vanwege gebrek aan ondersteuning de Anti-Cheat Battleye versie van de server niet op Linux draaien. De Anti-Cheat is namelijk helemaal niet compatibel.
:::

Je ziet nu logs verschijnen in je terminal, wat betekent dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan in de serverlijst door te zoeken op: `[jouw_ip_adres]:7777`.

## Afsluiting

Gefeliciteerd, je hebt de ARK: Survival Ascended server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!

<InlineVoucher />