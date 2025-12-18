---
id: gameserver-database-external-access
title: 'Gameserver: Externe database toegang'
description: "Ontdek hoe je ZAP-Hosting MySQL-databases voor gameservers beheert met tools zoals Navicat of HeidiSQL → Leer het nu"
sidebar_label: Externe database toegang
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

ZAP-Hosting levert MySQL-databases inclusief bij de gameserver-producten. Deze kun je beheren via phpMyAdmin of extern met MySQL-beheer tools zoals Navicat of HeidiSQL.

Je hebt de gebruikersgegevens nodig om toegang te krijgen tot de database. Die vind je in de gameserver administratie onder databases. Hiervoor heb je de info nodig over **server/IP**, **database**, **user**, **password** en de standaardpoort **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Voorbereiding

Allereerst heb je software nodig, in dit voorbeeld gebruiken we [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) of [HeidiSQL](https://www.heidisql.com/download.php). Na het downloaden voer je het bestand uit en volg je de installatieprocedure. Als dat klaar is, kun je het programma starten en de verbinding met de database instellen.

## HeidiSQL

Om de verbinding in HeidiSQL te maken, klik je op "New" om een nieuwe verbinding aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

Bij Hostname / IP vul je de naam van je database in, in ons voorbeeld "mysql-mariadb-5-101.zap-hosting.com".  
Gebruikersnaam en wachtwoord haal je ook uit de gegevens, de poort blijft 3306.

Klik daarna op "Open".


## Navicat

Om de verbinding in Navicat te maken, maak je een nieuwe verbinding aan. Kies bij **Connection** voor **MySQL**. Er opent dan een nieuw venster waar je de databasegegevens invult.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

De **Connection Name** is alleen voor jouw overzicht en kun je zelf kiezen. Alle andere gegevens vul je in zoals hierboven beschreven. Klik daarna op **OK** en de setup is klaar. De verbinding vind je links in het database-overzicht. Dubbelklik op je database of klik met rechts en kies "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Daarna opent de database met alle bestaande tabellen. Hier kun je je database beheren en aanpassen, net als in phpMyAdmin, via klikken of met SQL-commando’s.

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Conclusie

Je hebt nu succesvol verbinding gemaakt met je database en kunt ‘m beheren. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />