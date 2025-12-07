---
id: gameserver-databases-pma
title: 'Gameserver: PHPMyAdmin-access'
description: "Upptäck hur du smidigt hanterar MySQL-databaser med phpMyAdmin på ZAP-Hostings gameservrar för sömlös databasstyrning → Lär dig mer nu"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Med phpMyAdmin kan MySQL-databaser hanteras snabbt och enkelt via ett webbgränssnitt. ZAP-Hosting erbjuder MySQL-databaser inkluderade med gameserver-produkterna. Dessa kan hanteras både med phpMyAdmin och externa MySQL-administrationsprogram som Navicat eller HeidiSQL. Vi har även en guide för detta som du hittar under [Extern databasåtkomst](gameserver-database-external-access.md).

<InlineVoucher />

## Logga in på phpMyAdmin

Först går vi till listan över databaser som skapats för gameservern. Det gör vi genom att öppna menyalternativet "Databaser" i vänstra sidomenyn under fliken "Verktyg".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

På den här sidan listas alla databaser för servern. Inloggningen till phpMyAdmin är superenkel eftersom vårt system loggar in automatiskt. Du behöver bara klicka på den blå knappen "Hantera".

:::info
Om inloggningen inte sker automatiskt måste du logga in manuellt med rätt användaruppgifter. Informationen hittar du i det rödmarkerade området i exemplet.
:::


## Tabellverktyg

Först visas bara startsidan för phpMyAdmin. För att se och redigera tabellerna i databasen måste du öppna databasen:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Nu listas alla tabeller i databasen samt några verktyg som låter dig utföra olika åtgärder, t.ex. kan tabeller raderas genom att klicka på den röda "Radera"-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

För att spara tid kan du utföra åtgärder på flera tabeller samtidigt. Klicka en gång i kryssrutan längst till vänster och upprepa tills alla önskade tabeller är markerade. Vill du välja alla tabeller i databasen kan du använda "Markera alla"-knappen som automatiskt väljer varje tabell. Därefter väljer du önskad åtgärd i dropdown-menyn och bekräftar med "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Ändra tabellinnehåll

Värden i en tabell kan redigeras snabbt och enkelt genom att dubbelklicka på det fält du vill ändra. Det krävs dock att tabellen är konfigurerad för att tillåta redigering. Det ser du på de tre action-knapparna som visas i detta fall.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Kör SQL-kommandon

Med phpMyAdmin kan du även köra vanliga SQL-kommandon. Först måste du välja databasen och sedan klicka på menyalternativet "SQL" högst upp i menyraden.

När du är vid kommandoprompten kan du skriva in alla SQL-kommandon du vill köra och sedan klicka på "OK" för att exekvera dem.

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />