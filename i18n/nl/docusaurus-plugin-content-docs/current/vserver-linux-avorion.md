---
id: vserver-linux-avorion
title: "VPS: Avorion Dedicated Server Linux Setup"
description: "Ontdek hoe je een Avorion Dedicated server op je Linux VPS installeert en configureert voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de Avorion Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux server installeert met SteamCMD. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Meer weten? Check de [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je moet ook SteamCMD voor de eerste keer instellen als je dit nog niet eerder op je Linux server hebt gedaan. Volg onze [SteamCMD Linux Setup](vserver-linux-steamcmd.md) gids en zorg dat SteamCMD volledig is ingesteld voordat je verder gaat.

## Installatie

Log eerst in als `steam` gebruiker en ga naar de root `home/steam` directory om alles netjes georganiseerd te houden.
```
sudo -u steam -s
cd ~
```

Als je bent ingelogd, start je de installatie met het volgende commando. Hiermee installeer je Avorion via SteamCMD direct onder de `steam` gebruiker.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Wees geduldig tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, zie je een succesmelding verschijnen.

## Configuratie

Op dit punt is de setup van je Avorion server klaar. Je kunt je serverinstellingen aanpassen via het **startserver.sh** bestand dat je eerder hebt gekopieerd. Open het bestand met `nano /home/steam/Avorion-Server/startserver.sh` en pas de parameters aan naar wens.

Je kunt wereld-specifieke instellingen wijzigen door het **server.ini** configuratiebestand aan te passen, dat je vindt in elke galaxy save. Deze staat in de root folder van je gebruiker (waarschijnlijk `steam`) en beheer je met de volgende commando’s:
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

Je kunt het bestand eventueel aanpassen. Klaar? Start dan het nieuwe **startserver.sh** batchbestand met:
```
/home/steam/Avorion-Server/startserver.sh
```

Je ziet nu logs in je terminal verschijnen, wat betekent dat de server succesvol opstart. Let op: de eerste keer opstarten kan wat langer duren omdat alles wordt klaargezet. Zodra het klaar is, zie je `Server startup complete.` in de console. Je kunt nu direct verbinden via de in-game serverbrowser met je Server IP en Port (standaard 27000).

## Afsluiting

Gefeliciteerd, je hebt de Avorion server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Daarin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, we helpen je elke dag graag verder!

<InlineVoucher />