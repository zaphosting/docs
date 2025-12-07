---
id: fivem-resolve-dbconnection
title: "FiveM: Databaseverbinding problemen oplossen"
description: "Ontdek hoe je databaseverbinding problemen op je FiveM-server oplost en de communicatie met je database weer soepel laat verlopen → Leer het nu"
sidebar_label: Databaseverbinding oplossen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Oxmysql is een handige open-source FiveM-resource die standaard geïnstalleerd is op je FiveM-server, zodat de server kan communiceren met je database. Tijdens het ontwikkelen kan het voorkomen dat je wijzigingen doorvoert (zoals het vernieuwen van databasegegevens) die aanpassingen aan de oxmysql-connection string vereisen. Voorbeeld van een databaseverbinding probleem:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

In deze gids bekijken we hoe je databaseverbinding problemen op je FiveM-server oplost door de connection string in je serverconfiguratiebestand aan te passen.

<InlineVoucher />

## Automatische methode

Open eerst het webinterfacepaneel van je server op de website en ga naar de **Instellingen** sectie.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Scroll op deze pagina helemaal naar beneden, waar je de **Acties** knoppen vindt. Gebruik simpelweg de knop **MySQL-connection string opnieuw configureren** en start daarna je server opnieuw op zodat de wijzigingen worden doorgevoerd.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Dit werkt je `server.cfg` bestand automatisch bij met de juiste, actuele gegevens, waardoor je database weer zou moeten werken.

## Handmatige methode

Om dit handmatig op te lossen heb je toegang nodig tot je `server.cfg` bestand, waar je de connection string handmatig aanpast met de gegevens die je in het webinterfacepaneel vindt. Log in op de txAdmin interface en open de CFG-editor. Ga in een nieuw tabblad naar **Tools->Databases** waar je je huidige inloggegevens kunt bekijken.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

Voeg in je `server.cfg` bestand de volgende regel toe (of **vervang** deze als die er al staat), en vul de gegevens in met jouw databasegegevens uit het webpaneel.

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Sla het bestand op en start je server opnieuw op zodra je klaar bent.

## Conclusie

De volgende keer dat de server opstart, zou je database weer bereikbaar moeten zijn en volledig moeten functioneren. Je hebt succesvol je databaseverbinding problemen opgelost. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />