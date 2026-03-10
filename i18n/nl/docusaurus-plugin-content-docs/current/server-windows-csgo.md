---
id: server-windows-csgo
title: "CS:GO Dedicated Server Windows Setup"
description: "Leer hoe je snel en makkelijk een CS:GO dedicated server op jouw server installeert → Lees nu meer"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een VPS/Dedicated Server en wil je daar game servers op draaien? Bijvoorbeeld een CS:GO Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n server op jouw machine installeert.



## Voorbereiding

Voor het opzetten van een CS:GO server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk de VPS/Dedicated Server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna start je de download. Dit levert een **steamcmd.zip** bestand op, dat je eerst moet uitpakken. Het is aan te raden om hiervoor een aparte map aan te maken. Na het uitpakken zie je de **steamcmd.exe**. Voer deze uit en wacht tot het installatieproces klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is de installatie succesvol afgerond en kun je beginnen met het installeren van de CS:GO server.



## Installatie

Na de installatie kun je commando’s uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet eerst inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie zelf. Dit doe je met het commando `app_update 730`. De App ID **730** staat voor de **CS:GO Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

Om de server zichtbaar en bereikbaar te maken van buitenaf, moeten de gebruikte serverpoorten opengezet/forwarded worden in de firewall. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Je moet extra regels toevoegen in de instellingen. Klik hiervoor op inkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende poorten: 27015-27020 voor de TCP/UDP protocollen.



## Configuratie

Op dit punt is de setup van je CS:GO server afgerond. Je kunt de server verder configureren door het launch-bestand aan te passen. Ga naar je root directory. Navigeer daar naar de cfg map en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers toe te laten op je server, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Deze token authenticatieert je server bij Steam. Ga naar http://steamcommunity.com/dev/managegameservers en maak een token aan met de game ID **4465480**, dit is voor de nieuwe CS:GO Standalone.

Heb je de token? Voeg deze dan toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.



## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdgame map en voer het volgende launch-commando uit:

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan in de serverlijst door te zoeken op: `[jouw_ip_adres]:2456`.


## Conclusie

Gefeliciteerd, je hebt je CS:GO server succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂