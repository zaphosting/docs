---
id: arma3-altislife-ranks
title: "Arma 3: Rangen toevoegen aan een Altis Life server"
description: "Leer hoe je spelersrangen zoals Agent, Medic en Admin in Arma 3 toewijst en beheert om de gameplay en serverrollen te verbeteren → Ontdek het nu"
sidebar_label: Altis Life Rangen
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In Arma 3 zijn er verschillende rangen die je aan een speler kunt toewijzen. Denk aan Agent, Medic en de verschillende Admin-rangen.  
Afhankelijk van de server kunnen er ook andere rangen zijn, bijvoorbeeld als er een nieuwe factie of beroep wordt toegevoegd.  
Hieronder leer je hoe je de rangen voor Agenten, Medics en Administrators in het spel toewijst, altijd via de database in de tabel **players**.

:::info
BELANGRIJK: Om de naam van de speler in de database te vinden, moet je minstens één keer verbinding maken met de server!
:::

<InlineVoucher />

## De database openen

Ga eerst naar je database, die je via het menu links onder **Tools** > **Databases** kunt bereiken:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

De login voor de database vind je via dit blauwe icoon, links zie je ook de inloggegevens (gebruikersnaam en wachtwoord) voor je database:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Na het klikken op deze knop kom je in phpMyAdmin, de beheerinterface van je database.  
Kies daar aan de linkerkant de naam van je database:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Daarna selecteer je de tabel **players** met een linkermuisklik, hier kun je de rangen toewijzen:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Zoek hier de naam van de speler aan wie je een rang wilt toewijzen en klik op **Bewerken**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Rangen toewijzen voor Agenten en Medics

De velden voor het Agent- en Medic-level vind je helemaal bovenaan de lijst:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Hier kun je eenvoudig het rangniveau selecteren via het dropdown-menu.  
Beschikbaar zijn levels van 1 tot 7 voor Agenten en van 1 tot 5 voor Medics.  
Hoe hoger het level, hoe meer rechten de Agent of Medic in het spel heeft. Dit beïnvloedt onder andere de beschikbare wapens en voertuigen.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Rangen toewijzen voor administrators (admin level)

Het admin level stel je in zoals hierboven beschreven, alleen staat de invoer verder naar beneden:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Ook hier kun je kiezen uit 5 verschillende levels via het dropdown-menu. Hoe hoger het level, hoe meer rechten de administrator in het spel krijgt.

Om je wijzigingen op te slaan klik je simpelweg op de **GO** knop rechtsonder:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

De rangen zijn nu opgeslagen en worden actief zodra de speler opnieuw verbinding maakt met de server.  
Een server restart is niet nodig.

<InlineVoucher />