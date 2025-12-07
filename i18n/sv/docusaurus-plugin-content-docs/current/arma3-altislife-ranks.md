---
id: arma3-altislife-ranks
title: "Arma 3: Lägga till ranker på en Altis Life-server"
description: "Lär dig hur du tilldelar och hanterar spelar-ranker som Cop, Medic och Admin i Arma 3 för att förbättra gameplay och serverroller → Läs mer nu"
sidebar_label: Altis Life Ranker
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I Arma 3 finns det olika ranker som kan tilldelas en spelare. Dessa inkluderar Cop, Medic och olika Admin-ranker.  
Beroende på servern kan det finnas andra ranker om till exempel en ny faction eller yrke har lagts till.  
Nedan lär du dig hur du tilldelar ranker för Cops, Medics och Administratörer i spelet, alltid via databasen i tabellen **players**.

:::info
VIKTIGT: För att hitta spelarens namn i databasen måste du ha anslutit till servern minst en gång!
:::

<InlineVoucher />

## Öppna databasen

Först måste du navigera till din databas som du når via menyn till vänster under **Verktyg** > **Databaser**:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

Inloggningen till databasen når du via den blå ikonen, till vänster hittar du även inloggningsuppgifterna (användarnamn och lösenord) för din databas:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Efter att du klickat på knappen är du nu i phpMyAdmin, administrationsgränssnittet för din databas.  
Där väljer du namnet på din databas i menyn till vänster:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Sedan väljer du tabellen **players** med ett vänsterklick där du kan tilldela rankerna:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Där söker du efter namnet på spelaren du vill ge en rank och klickar på **Redigera**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Tilldela ranker för Cops och Medics

Fälten för Cop- och Medic-nivå hittar du högst upp i listan:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Där kan du enkelt välja ranknivå via dropdown-menyn, tillgängliga nivåer är 1 till 7 för cops och 1 till 5 för medics.  
Ju högre nivå, desto fler rättigheter har Cop eller Medic i spelet, vilket bland annat påverkar tillgängliga vapen och fordon.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Tilldela rank för administratörer (admin-nivå)

Admin-nivån ställer du in på samma sätt som ovan, bara att fältet finns längre ner:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Här kan du också välja mellan 5 olika nivåer via dropdown. Ju högre nivå, desto fler rättigheter har administratören i spelet.

För att spara ändringarna klickar du bara på **GO**-knappen nere till höger:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

Rankerna är nu sparade och aktiveras för spelaren som måste ansluta till servern igen, en omstart av servern behövs inte.

<InlineVoucher />