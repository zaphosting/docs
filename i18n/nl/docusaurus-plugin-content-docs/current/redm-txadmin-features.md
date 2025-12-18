---
id: redm-txadmin-features
title: "RedM: txAdmin Interface"
description: "Ontdek hoe je jouw RedM-server efficiënt beheert en monitort met het uitgebreide webpaneel van txAdmin → Leer nu meer"
sidebar_label: txAdmin Interface
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

txAdmin is een volledig gratis te gebruiken, uitgebreid webpaneel om je RedM-server te beheren en te monitoren. Het biedt een breed scala aan functies die het beheren van een RedM-server super makkelijk maken. In deze gids nemen we je mee door de txAdmin interface, lichten we de features uit en leggen we precies uit wat je ermee kunt doen.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigatie

Het navigatiemenu bevat de volgende items: **Players**, **History**, **Whitelist**, **Admins**, **Settings** en **System**. Elk van deze wordt hieronder verder toegelicht.

### Players

De Players-sectie geeft een overzicht van de spelersstatistieken, zoals het totaal aantal spelers dat verbonden is geweest, het aantal spelers dat in de afgelopen 24 uur online was, en het aantal nieuwe spelers in de afgelopen 24 uur en 7 dagen. Daaronder vind je een lijst met momenteel verbonden spelers, inclusief hun totale speeltijd, eerste connectietijd en laatste connectietijd.

Klik op een speler voor extra beheermogelijkheden. Hier kun je meer info bekijken, notities toevoegen, geschiedenis (bans/waarschuwingen) inzien, ID’s (Player Identifiers, Player Hardware IDs) bekijken en ban-opties beheren.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

In de History-sectie zie je alle waarschuwingen en bans die aan spelers zijn gegeven, inclusief gedetailleerde info over de speler, de reden, en wie de waarschuwing/ban heeft uitgegeven of uitgevoerd, met datum en tijd. Je kunt waarschuwingen en bans hier ook intrekken.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

In de Whitelist-sectie kun je de whitelist-functie beheren. De whitelist bepaalt wie toegang heeft tot de server. Als deze optie aanstaat in de txAdmin-instellingen, wordt er automatisch een whitelist-verzoek aangemaakt wanneer een nieuwe speler voor het eerst verbindt. Deze verzoeken kun je hier beheren.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Onder de Admins-sectie kun je beheerders toevoegen en beheren. Nieuwe admins voeg je toe via de **Add** knop. Er opent dan een pop-up waarin je het account aanmaakt en de juiste rechten instelt.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

In de Settings-sectie kun je allerlei opties instellen voor zowel txAdmin als de server zelf. Omdat er veel instellingen zijn, zijn ze verdeeld in de volgende categorieën: **General**, **FXServer**, **Restarter**, **Player Manager**, **Discord** en **Game**. Hieronder leggen we ze stuk voor stuk uit.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

Hier stel je de servernaam, taal voor chat/Discord-berichten en ban-templates in.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

In deze sectie configureer je de Server Data Folder en CFG-bestandspad, plus extra argumenten zoals het activeren van gamemodes/DLC’s, OneSync aan- of uitzetten, Autostart en Quietmode.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

Hier beheer je de ban-functie. Je bepaalt of accounts actief gecontroleerd worden op bans en welke melding getoond wordt als een verbinding geweigerd wordt vanwege een ban.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

In deze sectie beheer je de whitelist-functie. Je kiest of de whitelist aan- of uitgezet wordt en welke melding spelers krijgen als ze geweigerd worden omdat ze niet op de whitelist staan.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

De Discord-integratie kun je hier activeren, zodat info automatisch naar de gekoppelde Discord-server gestuurd wordt. Hiervoor moet je de benodigde gegevens voor de Discord-bot instellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

Hier kun je het txAdmin-menu voor in-game gebruik aanzetten, zodat admins het menu kunnen openen en beheren met de /tx command. Ook kun je hier extra opties instellen voor layout, knopconfiguraties voor toggles en notificaties/waarschuwingen.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

In de Settings-sectie vind je ook een paar belangrijke algemene opties en info, verdeeld in: **Master Actions**, **Diagnostics**, **Console Log** en **Action Log**. Hieronder leggen we ze uit.



#### Master Actions

Hier vind je opties om je FXServer te resetten, een database-backup te maken, de database op te schonen en in te stellen wanneer spelers van de whitelist verwijderd worden als ze te lang inactief zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

De Diagnostics-sectie toont alle relevante info over de omgeving, txAdmin runtime, Diagnostics Report, FXServer /info.json en processen.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

De Console Log toont de output van txAdmin op de hoofdterminal, inclusief de normaal verborgen debugberichten.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

De Action Log registreert alle acties die door txAdmin of een Admin zijn uitgevoerd.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Sidebar 

Het zijmenu bevat de volgende items: **Dashboard**, **Live Console**, **Resources**, **Server Log** en **CFG Editor**. Hieronder leggen we ze verder uit.



### Dashboard

Het dashboard toont alle belangrijke algemene info over de server. Live statistieken geven inzicht in gebruik en performance. De serverstatus (gestart, online of gestopt) zie je in de sidebar. Vanuit daar kun je de server starten, stoppen of herstarten, alle spelers met één klik kicken en aankondigingen versturen. Ook kun je geplande restarts instellen. Rechts in de sidebar zie je info over de spelers die nu verbonden zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

De Live Console geeft je real-time info over serveractiviteiten. Je ziet hier details over activiteiten, waarschuwingen en foutmeldingen. Super handig om problemen te debuggen door foutmeldingen te analyseren.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
Onder Resources vind je een overzicht van alle resources, of ze nu vooraf geïnstalleerd zijn via een template (recept) of later door jou toegevoegd. Je kunt ze ook herstarten of stoppen wanneer nodig.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

De server log laat je alle activiteiten op de server volgen. Bijvoorbeeld wanneer spelers verbinden of disconnecten, chatberichten, game deaths, menu-acties, uitgevoerde commands en systeemgebeurtenissen.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

Met de CFG editor beheer en update je het `server.cfg` configuratiebestand van je server. Hier staan alle belangrijke configuratie-commands die de serverinstellingen bepalen.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />