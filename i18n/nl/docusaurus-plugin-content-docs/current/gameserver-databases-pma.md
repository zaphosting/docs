---
id: gameserver-databases-pma
title: 'Gameserver: PHPMyAdmin toegang'
description: "Ontdek hoe je MySQL-databases efficiënt beheert met phpMyAdmin op ZAP-Hosting gameservers voor naadloze databasecontrole → Leer nu meer"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Met phpMyAdmin kun je MySQL-databases snel en makkelijk beheren via een webinterface. Bij ZAP-Hosting krijg je MySQL-databases erbij bij je gameserver. Die kun je beheren via phpMyAdmin, maar ook met externe MySQL-tools zoals Navicat of HeidiSQL. We hebben ook een handleiding hiervoor, check die hier: [Externe database toegang](gameserver-database-external-access.md).

<InlineVoucher />

## Inloggen op phpMyAdmin

Eerst gaan we naar de lijst met databases die voor de gameserver zijn aangemaakt. Open hiervoor in het linkermenu van de server onder het tabblad "Tools" het onderdeel "Databases".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

Op deze pagina zie je alle databases voor deze server. Inloggen in phpMyAdmin is super easy, want dat gebeurt automatisch via ons systeem. Je hoeft alleen maar op de blauwe knop "Beheren" te klikken.

:::info
Als het automatisch inloggen niet lukt, moet je handmatig inloggen met de juiste gebruikersgegevens. Die info vind je in het rood gemarkeerde gedeelte in dit voorbeeld.
:::


## Tabel-tools

Eerst zie je alleen de startpagina van phpMyAdmin. Om de tabellen van een database te bekijken en te bewerken, moet je de database openen:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Nu zie je alle tabellen van de database en een aantal tools waarmee je acties kunt uitvoeren, bijvoorbeeld tabellen verwijderen door op de rode knop "Verwijderen" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Om tijd te besparen kun je acties op meerdere tabellen tegelijk uitvoeren. Klik hiervoor één keer op het selectievakje helemaal links en herhaal dit tot alle gewenste tabellen geselecteerd zijn. Wil je de actie op alle tabellen toepassen? Gebruik dan de knop "Alles selecteren", die selecteert automatisch alle tabellen. Daarna kies je de gewenste actie uit het dropdown-menu en voer je die uit door op "OK" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Tabelleninhoud aanpassen

Waarden in een tabel kun je snel en makkelijk aanpassen door dubbel te klikken op het veld dat je wilt wijzigen. Let wel: de tabel moet zo ingesteld zijn dat bewerken mogelijk is. Dat zie je aan de drie actieknoppen die in dit voorbeeld zichtbaar zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## SQL-commando’s uitvoeren

Met phpMyAdmin kun je ook gewoon SQL-commando’s uitvoeren. Selecteer eerst de database en klik dan bovenin de menubalk op "SQL".

Als je bij de command prompt bent, kun je alle gewenste SQL-commando’s invoeren en uitvoeren door op "OK" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />