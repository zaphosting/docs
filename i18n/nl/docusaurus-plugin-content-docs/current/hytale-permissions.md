---
id: "hytale-permissions"
title: "Hytale: Gebruikers- en Groepsrechten Beheren"
description: "Beheer gebruikers- en groepsrechten op je Hytale-server → Leer er nu meer over"
sidebar_label: Trage Verbinding / Wereld Laadt Niet
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het beheren van rechten op een Hytale-server geeft je controle over wat spelers wel en niet kunnen doen. Dit betekent dat je verschillende toegangsniveaus kunt toewijzen aan vertrouwde spelers, moderators en beheerders. Het correct instellen van rechten is essentieel om een gebalanceerde en veilige serveromgeving te behouden, waar spelers zonder ongewenste exploits of misbruik van het spel kunnen genieten.

De serversoftware van Hytale ondersteunt hiërarchische permissieniveaus die bepalen welke commando’s en acties elke speler mag uitvoeren. Deze kunnen worden beheerd via de live console of via configuratie-instellingen, afhankelijk van je server setup.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel zich nog in een actieve ontwikkelingsfase bevindt, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

<InlineVoucher />



## Overzicht van permissieniveaus

Rechten bepalen welke acties een speler op de server mag uitvoeren. Op het meest basale niveau hebben normale spelers alleen standaard gameplay-rechten, zoals bewegen, interactie met de wereld en chatten. Hogere permissieniveaus zoals operator of admin geven toegang tot servercommando’s die gameplay, andere spelers, serverconfiguratie en moderatietools beïnvloeden.

Het permissiesysteem bestaat uit twee hoofdcomponenten:

- **Gebruikersrechten** die direct op een specifieke speler van toepassing zijn
- **Groepsrechten** waarmee rechten worden gebundeld en aan meerdere spelers tegelijk kunnen worden toegewezen

Elke speler wordt intern geïdentificeerd door een UUID, wat nodig is bij het beheren van rechten via commando’s.



## Gebruikersrechten beheren

Gebruikersrechten stellen je in staat om specifieke rechten toe te kennen of in te trekken voor één enkele speler.

### Gebruikersrechten bekijken

Toont alle rechten die direct aan een gebruiker zijn toegewezen. Dit commando laat elke permissie zien die momenteel op de opgegeven gebruiker van toepassing is.

```
/perm user list <uuid>
```



### Rechten toevoegen aan een gebruiker

Om één of meerdere rechten direct aan een gebruiker toe te kennen. De opgegeven rechten worden meteen toegevoegd en zijn direct actief zonder dat de server opnieuw gestart hoeft te worden.

```
/perm user add <uuid> <permissions>
```



### Rechten verwijderen van een gebruiker

Om rechten van een gebruiker in te trekken. Dit verwijdert alleen de opgegeven rechten, terwijl alle andere rechten ongewijzigd blijven.

```
/perm user remove <uuid> <permissions>
```



## Gebruikersgroep-toewijzingen beheren

Naast directe rechten kunnen gebruikers ook rechten erven via groepen.

### Gebruikersgroep-rechten bekijken

Dit commando toont van welke permissiegroepen de gebruiker momenteel lid is.

```
/perm user group list <uuid>
```



### Een gebruiker aan een groep toevoegen

Om een gebruiker toe te wijzen aan een permissiegroep. Zodra toegevoegd, erft de gebruiker alle rechten die voor die groep zijn gedefinieerd.

```
/perm user group add <uuid> <group>
```



### Een gebruiker uit een groep verwijderen

Om een gebruiker uit een permissiegroep te verwijderen. Na verwijdering ontvangt de gebruiker geen rechten meer vanuit die groep.

```
/perm user group remove <uuid> <group>
```



## Groepsrechten beheren

Groepen maken het mogelijk om rechten centraal te beheren en te hergebruiken voor meerdere gebruikers.

### Groepsrechten bekijken

Toont alle rechten die aan een groep zijn toegewezen. Dit commando geeft een overzicht van elke permissie die bij de opgegeven groep hoort.

```
/perm group list <group>
```



### Rechten toevoegen aan een groep

Om één of meerdere rechten aan een groep toe te voegen. Alle gebruikers die aan deze groep zijn toegewezen, erven direct de nieuwe rechten.

```
/perm group add <group> <permissions>
```



### Rechten verwijderen van een groep

Dit verwijdert alleen de opgegeven rechten van de groep zonder andere rechten te beïnvloeden.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />