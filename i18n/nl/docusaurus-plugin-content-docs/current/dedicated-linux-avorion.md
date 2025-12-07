---
id: dedicated-linux-avorion
title: "Dedicated Server: Avorion Dedicated Server Linux Setup"
description: "Leer hoe je de Avorion Dedicated server installeert en configureert op je Linux VPS voor naadloze gamehosting → Leer nu meer"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Linux VPS en wil je de Avorion Dedicated server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service installeert op je Linux-server met behulp van SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Ontdek meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux-server hebt gebruikt. Volg onze [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als de `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je het installatieproces met het volgende commando om via SteamCMD direct naar de `steam` gebruiker te installeren.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Wees geduldig terwijl de download voltooid wordt, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesbericht.

## Configuratie

Op dit punt is de setup van je Avorion server klaar. Je kunt je serverinstellingen aanpassen via het **startserver.sh** bestand dat je eerder hebt gekopieerd. Open het bestand met `nano /home/steam/Avorion-Server/startserver.sh` en pas de parameters aan.

Je kunt wereld-specifieke instellingen wijzigen door het **server.ini** configuratiebestand te bewerken dat in elke galaxy save staat. Dit bestand vind je in de root folder van je gebruiker (waarschijnlijk `steam`) en je beheert het met de volgende commando’s:
```
# Bekijk huidige saves
ls /home/steam/.avorion/galaxies

# Bewerk een save configuratie
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame map en maak een kopie van het voorbeeld batchbestand.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Je kunt het bestand naar wens aanpassen. Klaar? Start dan het nieuwe **startserver.sh** batchbestand met:
```
/home/steam/Avorion-Server/startserver.sh
```

Je ziet nu logs in je terminal verschijnen, wat betekent dat de server succesvol opstart. Let op: de eerste keer opstarten kan wat langer duren omdat alles wordt ingesteld. Zodra het klaar is, zie je `Server startup complete.` in de console. Je kunt nu direct verbinden met je server via de in-game server browser door je Server IP en Port (standaard 27000) in te voeren.

## Conclusie

Gefeliciteerd, je hebt de Avorion server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!