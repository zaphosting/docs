---
id: gameserver-database-manage-sqlfiles
title: "Gameserver: Een SQL-bestand importeren of exporteren"
description: "Ontdek hoe je efficiënt je gameserver-database beheert door SQL-bestanden te importeren en exporteren met phpMyAdmin → Leer het nu"
sidebar_label: SQL-bestanden importeren/exporteren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Veel games voor jouw gameserver gebruiken databases om data langdurig op te slaan en goed te functioneren. Sommige games, resources of mods leveren een `.sql`-bestand waarmee je de juiste tabellen en data in je eigen database kunt importeren. Het exporteren van je database is ook handig om data tussen systemen over te zetten of simpelweg handmatig een back-up te maken. In deze gids leggen we uit hoe je SQL-bestanden importeert en exporteert in of uit de database van je gameserver via de phpMyAdmin-interface.

<InlineVoucher />

## Voorbereiding

Om te beginnen moet je toegang krijgen tot de MySQL-database van je gameserver, wat je direct via de webinterface kunt doen. Zorg ook dat je de `.sql`-bestanden klaar hebt staan die je wilt importeren.

:::tip
Sommige SQL-bestanden dwingen je om een specifieke databasenaam te gebruiken, wat kan botsen met de ZAP ID-databasenaam die je automatisch krijgt en fouten kan veroorzaken.

Je herkent zo’n bestand door te zoeken naar een `USE xxx` of `CREATE DATABASE` statement als je het bestand opent in een teksteditor. In dat geval verwijder je deze statements en sla je het bestand op voordat je het importeert.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Ga naar het **Tools->Databases** gedeelte en klik op de blauwe linkknop om de phpMyAdmin-interface te openen. Log in met de gegevens die je op je webinterfacepagina vindt.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Wil je meer weten over phpMyAdmin? Check dan onze [Database Toegang](gameserver-databases-pma.md) gids, waarin we de interface uitgebreider behandelen.

## SQL-bestand importeren

Als je bent ingelogd in phpMyAdmin, selecteer je de hoofd-database, dit is meestal je ZAP ID. Bovenin de navigatiebalk vind je de **Import** sectie.

Klik op de **Browse...** knop om een bestandsverkenner te openen. Zoek het SQL-bestand dat je wilt importeren en open het.

:::note
De maximale bestandsgrootte voor je SQL-bestand is 2MB. Is je bestand groter? Gebruik dan een SQL-splitter zoals de [Pinetools SQL-Splitter](https://pinetools.com/split-files) om het op te splitsen in kleinere bestanden. Die kun je vervolgens apart importeren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Je kunt ook nog wat extra instellingen aanpassen als je wilt. Voor de meeste gebruikers zijn de standaardwaarden prima, dus scroll gewoon naar beneden en klik op de **Import** knop.

Het SQL-bestand wordt nu succesvol geïmporteerd en je ziet dit terug in de database, bijvoorbeeld door nieuwe tabellen en data.

## SQL-bestand exporteren

Het exporteren van je database is ook superhandig, bijvoorbeeld om makkelijk databases over te zetten of back-ups te maken. Selecteer weer de hoofd-database (je ZAP ID) en ga naar de **Export** sectie bovenin.

Standaard staat de **Quick** exportmethode geselecteerd, die automatisch al je tabellen en data exporteert. Wil je zelf bepalen welke tabellen en data je exporteert? Kies dan voor **Custom** en pas de instellingen aan zoals jij wilt. Klik daarna op **Export** om het SQL-bestand lokaal op je systeem te downloaden.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Conclusie

Je hebt nu succesvol je database geëxporteerd naar een SQL-bestand, zodat je deze makkelijk in de toekomst kunt importeren. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />