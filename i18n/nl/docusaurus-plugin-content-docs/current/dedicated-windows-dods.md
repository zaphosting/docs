---
id: dedicated-windows-dods
title: "Dedicated Server: Day of Defeat: Source Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een Day of Defeat: Source dedicated server op je VPS of server installeert → Leer het nu"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een VPS of dedicated server en wil je daar game servers op draaien? Bijvoorbeeld een Day of Defeat: Source Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n server opzet.



## Voorbereiding

Voor het opzetten van een Day of Defeat: Source server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna ga je de download starten. Dit levert een **steamcmd.zip** bestand op, dat je eerst moet uitpakken. Het is aan te raden om hiervoor een aparte map aan te maken. Na het uitpakken zou je de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot de installatie klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de Day of Defeat: Source server.



## Installatie

Na de installatie kun je commando’s uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet hier inloggen met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie zelf. Dit doe je met het commando `app_update 232290`. De App ID **232290** staat voor de **Day of Defeat: Source Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Heb even geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

Om de server zichtbaar en bereikbaar te maken voor anderen, moeten de gebruikte serverpoorten opengezet/forwarded worden in de firewall. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Je moet extra regels toevoegen in de instellingen. Klik hiervoor op inkomende en uitgaande regels zoals hieronder beschreven en voeg de volgende poorten toe: 27015-27020 voor zowel TCP als UDP.



## Configuratie

Op dit punt is de setup van je Day of Defeat: Source server afgerond. Je kunt de server verder configureren door het launch-bestand aan te passen. Ga naar je root directory. Navigeer daar naar de cfg map en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers op je server te laten joinen, moet je een Game Server Login Token (GSLT) aanmaken en toevoegen. Dit token authenticiseert je server bij Steam. Maak een GSLT aan via http://steamcommunity.com/dev/managegameservers met de game ID 232290, dat hoort bij Day of Defeat: Source.

Heb je het token? Voeg het dan toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.



## Server starten & verbinden

Tijd om je server te starten! Ga naar de hoofdmap van de game en voer het volgende commando uit:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs in je command prompt verschijnen die aangeven dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de serverlijst door in de zoekbalk te zoeken op: `[jouw_ip_adres]:2456`.


## Conclusie

Gefeliciteerd, je hebt je Day of Defeat: Source server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂