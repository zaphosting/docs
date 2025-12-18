---
id: assettocorsa-configure
title: "Assetto Corsa: Configureer je server"
description: "Ontdek hoe je je Assetto Corsa-server configureert met custom maps en auto's voor de ultieme game-ervaring → Leer het nu"
sidebar_label: Server Configureren
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Verbinden met FTP

Voordat we de server kunnen configureren, moet de [Toegang via FTP](gameserver-ftpaccess.md) ingesteld zijn:

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

Als dit is ingesteld, kun je nu verbinden en de servermap openen:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Voorbereiding

Open eerst de Assetto Corsa-map, dit doe je door Steam te openen en met rechts te klikken op "Assetto Corsa" in je Games-lijst.

Klik nu op "Lokale Bestanden" en open de lokale gamebestanden:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Open nu de "server" map, daar vind je het bestand "acServerManager", open dit bestand.

## Map Instellen

Je bent nu in de interface van de "AC Server Manager". Hiermee kun je serverconfigs aanmaken en beheren. Maak eerst een nieuwe config aan.

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Nu kunnen we onze server configureren. In ons geval willen we alleen de circuits & auto's aanpassen, dus openen we het tabblad "Tracks".

Hier kun je klikken op je favoriete circuit, bovenaan kun je het aantal auto's op de baan instellen.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Zorg dat je niet meer auto's instelt dan het aantal slots op je server, anders start de server niet.
:::

## Auto's Instellen

Switch nu naar het tabblad "Cars / Entry List". Hier kun je nieuwe auto's toevoegen:


Om auto's te activeren, moet het vinkje links aangezet zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

In het midden zie je de auto's die op de grid geplaatst kunnen worden. Hier kies je de kleuren van de auto's die op de grid moeten staan:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
Om meerdere auto's te selecteren, kun je meerdere vinkjes zetten om verschillende auto's in het midden toe te voegen.

Let erop dat alle autoslots gevuld zijn en dat je niet meer auto's instelt dan het aantal beschikbare slots.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Config Uploaden

Sla nu de config op met de knop "Save" en exporteer hem met de knop "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Selecteer hier een vrije map waar de config-data opgeslagen wordt.

Sluit nu de AC Server Manager af en open de map waar je de configs naartoe hebt geëxporteerd.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Deze configs kun je nu via Drag & Drop kopiëren naar de "cfg" map van je game server.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

De server kan nu gestart worden met de nieuwe config.

<InlineVoucher />