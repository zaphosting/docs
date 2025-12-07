---
id: vserver-windows-nmrih
title: "VPS: No More Room In Hell Dedicated Server Windows Setup"
description: "Leer hoe je snel en efficiënt een No More Room In Hell dedicated game server op je VPS of dedicated server installeert → Ontdek het nu"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een VPS of dedicated server en wil je daar game servers op installeren? Bijvoorbeeld een No More Room In Hell Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n server op jouw machine installeert.

<InlineVoucher />

## Voorbereiding

Voor het opzetten van een No More Room In Hell server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD.

Daarna ga je de download starten. Dit levert een **steamcmd.zip** bestand op, dat je eerst moet uitpakken. Het is aan te raden om hiervoor een aparte map aan te maken. Na het uitpakken zou je de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot de installatie is afgerond.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de No More Room In Hell server.



## Installatie

Na de installatie kun je commando’s uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet hier inloggen met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie zelf. Dit doe je met het commando `app_update 317670`. De App ID **317670** staat voor de **No More Room In Hell Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Heb geduld tijdens het downloaden, dit kan even duren bij grotere games. Als het gelukt is, verschijnt er een succesmelding.

Om de server zichtbaar en bereikbaar te maken van buitenaf, moeten de gebruikte serverpoorten opengezet/forwarded worden in de firewall. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Je moet extra regels toevoegen in de instellingen. Klik hiervoor op inkomende en uitgaande regels zoals hieronder beschreven en voeg de volgende poorten toe: 27015-27020 voor de TCP/UDP protocollen.



## Configuratie

Op dit punt is de setup van je No More Room In Hell server afgerond. Je kunt de server verder configureren door het launch-bestand aan te passen. Ga naar je root directory. Navigeer daar naar de cfg map en open het bestand `server.cfg`. Hier kun je serveropties aanpassen.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## GSL Token registreren

Om andere spelers toe te laten op je server, moet je een Game Server Login Token (GSLT) genereren en toevoegen. Dit token authenticiseert je server bij Steam. Maak een GSLT aan via http://steamcommunity.com/dev/managegameservers met de game ID 317670, die hoort bij No More Room In Hell.

Zodra je het token hebt, voeg je het toe aan je server launch parameters met `+sv_setsteamaccount <TOKEN>`.



## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap van de game en voer het volgende launch-commando uit:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Je ziet nu logs verschijnen in je command prompt die aangeven dat de server succesvol is gestart. Houd er rekening mee dat de eerste keer opstarten wat langer kan duren omdat alles wordt ingesteld. Je kunt ook direct verbinden via de zoekbalk onderaan de serverlijst door te zoeken op: `[jouw_ip_adres]:2456`.


## Conclusie

Gefeliciteerd, je hebt de No More Room In Hell server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />