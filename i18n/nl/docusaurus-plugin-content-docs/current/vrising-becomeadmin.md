---
id: vrising-becomeadmin
title: "V Rising: Word admin"
description: "Ontdek hoe je eenvoudig en efficiënt volledige administratorrechten toekent en beheert voor je game server → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je een simpele en uitgebreide beheerervaring met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder leggen we stap voor stap uit hoe je adminrechten aan je server toevoegt.  
<InlineVoucher />

### Rechten toevoegen

Het beheer van adminrechten gebeurt via het configuratiebestand **adminlist.txt**. Je vindt dit bestand in de webinterface onder Configs. Om een admin toe te voegen heb je de SteamID64 van de speler nodig. Die haal je door je Steam-profiel te openen en ergens met de rechtermuisknop te klikken. Kies dan om de pagina-URL te kopiëren. Deze URL kun je vervolgens invoeren op een van de volgende sites: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Plak daar je Steam-profiel URL in het veld en je krijgt je SteamID64 te zien. Voeg deze SteamID64 toe aan het **adminlist.txt** configuratiebestand. Ga hiervoor in de webinterface naar je game server administratie, open de categorie Configs en open het adminlist.txt bestand. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Wil je adminrechten aan meerdere spelers geven? Zorg er dan voor dat elke SteamID op een eigen regel staat. 
:::

### Rechten activeren

Voordat je adminrechten in het spel kunt gebruiken, moet je eerst de console activeren. Verbind met je server en ga naar de instellingen. Daar zet je de optie **Console Enabled** aan. De console open je standaard met de Gravis-toets (`~`) op je toetsenbord. Activeer de adminrechten in de console met het commando `adminauth`. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Admin commandolijst

Hier een korte lijst met de meest gebruikte admin commands die je op je server kunt uitvoeren. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Adminrechten toewijzen                                  |
| admindeauth              | Adminrechten intrekken                                  |
| banuser [naam/IP/userID] | Verbied een specifieke speler via naam, IP of user ID  |
| banned                   | Toont een lijst van alle verbannen gebruikers           |
| bancharacter             | Verban een specifiek personage                          |
| give [naam]              | Geeft je een specifiek item in het spel                 |
| giveset                  | Laat je verschillende sets armor en wapens kiezen      |
| kick [naam/IP/userID]    | Kicks een specifieke speler via naam, IP of user ID     |
| unban [naam/IP/userID]   | Haal een ban weg voor een speler via naam, IP of user ID|


## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />