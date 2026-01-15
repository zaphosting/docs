---
id: hytale-permissions
title: "Hytale: Gebruikers- en Groepsrechten Beheren"
description: "Beheer gebruikers- en groepsrechten op je Hytale-server → Leer er nu meer over"
sidebar_label: Rechten
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het beheren van rechten op een Hytale-server geeft je controle over wat spelers wel en niet kunnen doen. Dit betekent dat je verschillende toegangsniveaus kunt toewijzen aan vertrouwde spelers, moderators en admins. Het correct instellen van rechten is essentieel om een gebalanceerde en veilige serveromgeving te behouden, waar spelers kunnen genieten zonder ongewenste exploits of misbruik.

De serversoftware van Hytale ondersteunt hiërarchische rechten die bepalen welke commando’s en acties elke speler mag uitvoeren. Deze kun je beheren via de live console of via configuratiebestanden, afhankelijk van je server setup.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog in actieve ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

<InlineVoucher />



## Overzicht van rechten-niveaus

Rechten bepalen welke acties een speler op de server mag uitvoeren. Op het meest basale niveau hebben normale spelers alleen standaard gameplayrechten, zoals bewegen, interactie met de wereld en chatten. Hogere rechten zoals operator of admin geven toegang tot servercommando’s die gameplay, andere spelers, serverconfiguratie en moderatietools beïnvloeden.

Het rechten-systeem bestaat uit twee hoofdcomponenten:

- **Gebruikersrechten** die direct op een specifieke speler van toepassing zijn
- **Groepsrechten** waarmee je rechten kunt bundelen en aan meerdere spelers tegelijk kunt toewijzen

Elke speler wordt intern geïdentificeerd met een UUID, wat nodig is bij het beheren van rechten via commando’s.



## Gebruikersrechten beheren

Met gebruikersrechten kun je specifieke rechten aan een enkele speler geven of intrekken.

### Gebruikersrechten bekijken

Toont alle rechten die direct aan een gebruiker zijn toegewezen. Dit commando laat elke recht zien die momenteel op de opgegeven gebruiker van toepassing is.

```
/perm user list <uuid>
```



### Rechten toevoegen aan een gebruiker

Om één of meerdere rechten direct aan een gebruiker toe te kennen. De opgegeven rechten worden meteen toegevoegd en zijn direct actief, zonder dat de server opnieuw gestart hoeft te worden.

```
/perm user add <uuid> <permissions>
```



### Rechten verwijderen bij een gebruiker

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



### Rechten verwijderen bij een groep

Dit verwijdert alleen de opgegeven rechten uit de groep zonder andere rechten te beïnvloeden.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />