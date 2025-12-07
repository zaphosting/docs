---
id: redm-sql-file-import
title: "RedM: SQL-bestand importeren"
description: "Ontdek hoe je SQL-bestanden correct importeert in je RedM-database om de functionaliteit van resources en database-integratie te garanderen → Leer het nu"
sidebar_label: SQL-bestand importeren
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## SQL-bestanden importeren in je RedM-database

Veel resources voor RedM hebben een database nodig om goed te functioneren. Daarom is het super belangrijk dat je de SQL-bestanden die bij je resources zitten correct importeert in je database. Zo zorg je ervoor dat de resources entries kunnen aanmaken in je database en alles werkt zoals het hoort.

:::info
Niet alle resources hebben een database nodig om te werken! Check altijd de beschrijving of documentatie van de resource die je downloadt om te zien of je een SQL-bestand moet importeren.
:::

In veel gevallen zit er één of meerdere bestanden met de extensie **.sql** in de download van de resource. Deze moet je importeren in je database.

## Het SQL-bestand voorbereiden

In dit voorbeeld importeren we het SQL-bestand voor het RP-framework **RedEM**. Jij moet het SQL-bestand voorbereiden voor de resource die jij wilt importeren. Dit doe je door de map van je resource te openen die een database nodig heeft en een bestand met de extensie **.sql** te zoeken.

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info
Voordat je gaat importeren, open je het .sql-bestand met een teksteditor en check je of de volgende regels erin staan:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Als deze regels erin staan, verwijder dan de `CREATE` en `USE` database regels en sla het bestand op. Anders kan het SQL-bestand niet geïmporteerd worden.

Dit komt omdat de eerste regel aangeeft dat er een nieuwe database aangemaakt moet worden, maar dat heb je niet nodig omdat je RedM-gameserver al een database heeft met een andere naam. De tweede regel geeft aan dat de database `essentialmode` gebruikt moet worden om in te importeren, maar ook dat heb je niet nodig omdat je een bestaande database gebruikt voor de import.
:::

## Het SQL-bestand importeren in je RedM-database

Ga nu naar de **Database** sectie in het webinterface van je gameserver.

![](https://github.com/zaphosting/docs/assets/42719082/5f0f81ec-832b-4b9e-a39a-8ec78fd10890)

Op de databasepagina vind je verschillende functies om je database te beheren, zoals back-ups maken, aanmaken, beheren en meer. Wij focussen ons nu op het openen van je database, maar check zeker ook onze andere database-gidsen als je meer wilt weten: [Externe database toegang](gameserver-database-external-access.md).

Klik op het blauwe redirect-icoon om naar **phpMyAdmin** te gaan, waar je makkelijk toegang hebt tot je database. Log in met de gegevens die op de databasepagina staan als daarom gevraagd wordt.

Eenmaal ingelogd, selecteer je je database in de lijst links. De naam van je database begint **altijd** met `zap` als prefix.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Als je de database nog niet gebruikt hebt, is die nu leeg. Nu ga je het .sql-bestand importeren.

Klik bovenin op de knop **Importeren** om het importmenu te openen.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Klik daarna op de knop **Bladeren...** om een bestandsverkenner te openen. Selecteer het **.sql**-bestand dat je wilt importeren.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
De maximale bestandsgrootte is 2MB. Heb je een groter SQL-bestand? Gebruik dan een SQL-splitter om het bestand op te splitsen in kleinere delen. Wij raden de tool [Pinetools SQL-Splitter](https://pinetools.com/split-files) aan, die dit makkelijk voor je doet. Daarna kun je de SQL-bestanden gewoon importeren.
:::

Klik tot slot op de knop **Importeren** onderaan de pagina om het importproces te starten. Als alles goed gaat, zie je een succesmelding en wordt er een nieuwe tabel aangemaakt in je database die je links kunt zien.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

Je hebt nu succesvol een SQL-bestand geïmporteerd in de database van je gameserver!

## Conclusie

Het importeren van een SQL-bestand voor je RedM-server is essentieel om veel resources zonder problemen te gebruiken. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />