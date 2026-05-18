---
id: hytale-world-management
title: "Hytale: Wereldbeheer"
description: "Ontdek hoe je jouw Hytale-server beveiligt door spelers toegang te geven via whitelist-functies en bescherm je gameplay → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Wereldbeheer op een Hytale-server betekent het beheren van de persistente game-omgeving waarin spelers verkennen, bouwen en interactie hebben. Een wereld bestaat uit alle terrein-data, structuren, spelersvoortgang en instellingen die de gedeelde ervaring bepalen. Het kunnen aanmaken, hernoemen, resetten of organiseren van werelden is een essentieel onderdeel van het onderhouden van een server, zowel voor private als publieke communities.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel zich nog in een actieve ontwikkelingsfase bevindt, kunnen server-software, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

## Nieuwe wereld aanmaken

Een nieuwe wereld aanmaken geeft je server een frisse omgeving om terrein, structuren en gameplay-voortgang helemaal opnieuw te genereren. Via de live console kun je werelden aanmaken of wisselen door de juiste wereld-gerelateerde commando’s te gebruiken. 
Wanneer je een nieuwe wereldnaam opgeeft, zal de server ofwel een bestaande wereld met die naam laden, of een nieuwe genereren als er geen bijpassende werelddata gevonden wordt.

```
/world create <wereldnaam>
```

Dit commando maakt een nieuwe wereld aan met de naam `<wereldnaam>`. Als er geen bestaande werelddata is voor die naam, genereert de server een verse wereldomgeving.



## Stel een wereld in als standaard

Je kunt een specifieke wereld markeren als de standaardwereld, zodat deze automatisch geladen wordt wanneer de server opstart. Het instellen van een standaardwereld is handig als er meerdere werelden zijn en één daarvan altijd als primaire omgeving gebruikt moet worden.

Via de live console kun je de standaardwereld aanpassen zonder handmatig configuratiebestanden te bewerken. Zodra dit is ingesteld, zal de server deze wereld prioriteren bij de volgende herstart.

```
/world setdefault <wereldnaam>
```

Dit commando stelt de wereld met de naam `mainworld` in als standaardwereld. Na het herstarten van de server wordt deze wereld automatisch geladen.



## Verwijder een bestaande wereld

Naast het aanmaken en laden van werelden, kun je via de live console ook bestaande werelden van de server verwijderen. Dit is handig wanneer verouderde, ongebruikte of testwerelden niet meer nodig zijn. Het verwijderen van een wereld verwijdert de bijbehorende werelddata van de server. Deze actie is permanent en kan niet ongedaan gemaakt worden, tenzij er een backup bestaat.

```
/world remove <wereldnaam>
```

Dit commando verwijdert de wereld met de naam `wereldnaam` van de server. Als de wereld momenteel actief is, moet deze eerst worden uitgeladen, anders kan de server het commando weigeren afhankelijk van de server-implementatie.



## Conclusie

Werelden beheren via de live console biedt een snelle en flexibele manier om de actieve omgeving op een Hytale-server te controleren. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂