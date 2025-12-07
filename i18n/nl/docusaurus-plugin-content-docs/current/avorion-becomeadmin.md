---
id: avorion-becomeadmin
title: "Avorion: Word admin op je eigen server"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en effectief beheer van gamefuncties → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toekennen van administratorrechten geeft je een eenvoudige en uitgebreide administratie met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder vind je alle stappen die je moet doorlopen om administratorrechten voor jouw server toe te wijzen.  
<InlineVoucher />

## Configuratie

Een admin toevoegen doe je via de instellingenpagina in de webinterface. Klik in de **Gameserver Administratie** op **Instellingen** en scroll naar beneden naar de **Serverinstellingen**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Daar vind je een veld genaamd **Admin SteamIDs**. Hier moet je je SteamID64 invullen. Je vindt je SteamID64 door eerst je Steam-profiel te openen en vervolgens ergens met de rechtermuisknop te klikken. Klik dan op **Steam URL kopiëren**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Open daarna een van de volgende websites en plak daar de URL van je profiel: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Hier krijg je algemene info en de Steam ID van je account te zien. We hebben alleen de SteamID64 nodig. Die vul je in het veld in. Het ziet er ongeveer zo uit:



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Klik op **Opslaan**. Na een serverherstart kun je admin-commando’s in het spel uitvoeren. Druk op Enter om de chat te openen en voer de commando’s uit met een / ervoor. 



## Admin-commando’s

Hier vind je een overzicht van veelgebruikte commando’s die je als admin kunt uitvoeren. 



**Algemene commando’s**

| Commando                 | Beschrijving                                               |
| :---------------------- | :--------------------------------------------------------- |
| /help                   | toont het helpbericht                                      |
| /w [spelernaam]         | stuurt een privébericht naar een speler                    |
| /save                   | slaat de huidige staat op                                 |
| /stop                   | stopt de server                                           |
| /seed                   | toont de seed van de server                               |
| /version                | toont de huidige serverversie                             |
| /suicide                | vernietigt je huidige schip                               |
| /player                 | toont het aantal spelers                                  |
| /status                 | toont info over de huidige status van de server          |
| /admin -a [spelernaam]  | voegt een speler toe als admin                             |
| /admin -r [spelernaam]  | verwijdert een speler als admin                            |
| /kick [spelernaam]      | verwijdert een speler van de server                        |
| /ban [spelernaam]       | zet een speler op de blacklist                             |
| /unban [spelernaam]     | verwijdert een speler van de blacklist                     |
| /banip [speler ip]      | zet een IP-adres op de blacklist                           |
| /unbanip [speler ip]    | verwijdert een IP-adres van de blacklist                   |
| /blacklist              | toont de blacklist-opties                                 |
| /whitelist              | toont de whitelist-opties                                 |



**Cheat-commando’s (in-game):**

| Commando                                | Beschrijving                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [spelernaam] [aantal] credits    | geeft de speler het gewenste aantal credits           |
| /give [spelernaam] [aantal] [ertsnaam] | geeft de speler het gewenste aantal van het gekozen erts |



**Server-commando’s (console):**

| Commando                       | Beschrijving                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [waarde]            | aantal logbestanden dat bewaard blijft                       |
| /difficulty [waarde]           | moeilijkheidsgraad van de server, toegestane waarden: -3, -2, -1, 0, 1, 2, 3 Standaard: 0 |
| /collision-damage [waarde]     | hoeveelheid schade bij botsing, van 0 tot 1. 0: geen schade, 1: volledige schade. standaard: 1 |
| /exit-on-last-admin-logout    | server afsluiten als de laatste admin uitlogt                |
| /public [waarde]               | geeft aan of de server andere spelers mag toelaten           |
| /infinite-resources [waarde]   | zet oneindige resources aan voor alle spelers                |
| /listed [waarde]               | geeft aan of de server zichtbaar moet zijn in publieke lijsten |
| /max-players [waarde]          | maximaal aantal spelers online Standaard: 10                 |
| /save-interval [waarde]        | tijd tussen automatische saves Standaard: 300                |
| /same-start-sector arg        | geeft aan of alle spelers in hetzelfde sector starten        |
| /server-name [waarde]          | servernaam, wordt getoond bij opvragen                        |
| /use-steam-networking [waarde] | gebruik Steam networking en authenticatie voor gebruikers    |
| /galaxy-name [waarde]          | galaxynaam, toegevoegd aan datapad, eindpad wordt [datapad]/[galaxynaam] |
| /datapath [waarde]             | map waarin de galaxies worden opgeslagen, wordt voor galaxynaam gezet |
| /admin [waarde]                | steam id(s) van de administrator(s) van de server            |


## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />