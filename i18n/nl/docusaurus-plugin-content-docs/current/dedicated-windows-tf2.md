---
id: dedicated-windows-tf2
title: "Dedicated Server: Team Fortress 2 Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een Team Fortress 2 dedicated server op je VPS of dedicated server installeert → Leer het nu"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een VPS of dedicated server en wil je daar game servers op draaien? Bijvoorbeeld een Team Fortress 2 Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n server opzet.



## Voorbereiding

Voor het opzetten van een Team Fortress 2 server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna download je het bestand. Dit bevat de **steamcmd.zip** file, die je eerst moet uitpakken. Het is aan te raden om een aparte map aan te maken waar je het bestand uitpakt. Je zou dan de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot de installatie klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de Team Fortress 2 server.



## Installatie

Na de installatie kun je commando’s uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet hier inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie zelf. Dit doe je met het commando `app_update 232250`. De App ID **232250** staat voor de **Team Fortress 2 Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Zodra het gelukt is, verschijnt er een succesmelding.

Om de server zichtbaar en bereikbaar te maken van buitenaf, moeten de gebruikte serverpoorten opengezet/forwarded worden in de firewall. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Je moet extra regels toevoegen in de instellingen. Klik hiervoor op inkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende poorten: 27015-27020 voor de TCP/UDP protocollen.



## Configuratie

Op dit punt is de setup van je Team Fortress 2 server afgerond. Je kunt de server verder configureren door het launch-bestand aan te passen. Ga naar je root directory. Navigeer binnen deze map naar de cfg directory en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers op je server te laten joinen, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Deze token authenticiseert je server bij Steam. Ga naar http://steamcommunity.com/dev/managegameservers om een GSLT aan te maken met de game ID 232250, wat overeenkomt met Team Fortress 2.

Zodra je de token hebt, voeg je deze toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.



## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap van de game en voer het volgende launch-commando uit:

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is opgestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst door in de zoekbalk te zoeken op: `[jouw_ip_adres]:2456`.


## Conclusie

Gefeliciteerd, je hebt je Team Fortress 2 server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂