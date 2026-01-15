---
id: hytale-permissions
title: "Hytale: Gebruikers- en Groepsrechten Beheren"
description: "Beheer gebruikers- en groepsrechten op je Hytale-server → Leer er nu meer over"
sidebar_label: Rechten
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Rechten beheren op een Hytale-server geeft je controle over wat spelers wel en niet kunnen doen. Dit betekent dat je verschillende toegangsniveaus kunt toewijzen aan vertrouwde spelers, moderators en admins. De juiste rechten instellen is super belangrijk om een gebalanceerde en veilige serveromgeving te houden, waar spelers lekker kunnen gamen zonder ongewenste exploits of misbruik.

De serversoftware van Hytale ondersteunt hiërarchische rechten die bepalen welke commando’s en acties elke speler mag uitvoeren. Je kunt deze beheren via de live console of via configuratiebestanden, afhankelijk van hoe jouw server is opgezet.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en zit momenteel in Early Access. Omdat het spel nog volop in ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd veranderen.

:::

<InlineVoucher />



## Overzicht van rechten

Rechten bepalen welke acties een speler op de server mag uitvoeren. Op het laagste niveau hebben normale spelers alleen standaard gameplayrechten, zoals bewegen, de wereld interactief gebruiken en chatten. Hogere rechten zoals operator of admin geven toegang tot servercommando’s die gameplay, andere spelers, serverconfiguratie en moderatietools beïnvloeden.

Het rechten-systeem bestaat uit twee hoofdonderdelen:

- **Gebruikersrechten** die direct aan een specifieke speler worden toegekend
- **Groepsrechten** waarmee je rechten kunt bundelen en aan meerdere spelers tegelijk kunt toewijzen

Elke speler wordt intern geïdentificeerd met een UUID, die je nodig hebt om rechten via commando’s te beheren.



## Gebruikersrechten beheren

Met gebruikersrechten kun je specifieke rechten aan één speler geven of intrekken.

### Gebruikersrechten bekijken

Toont alle rechten die direct aan een gebruiker zijn toegekend. Dit commando laat elke recht zien die momenteel op de opgegeven gebruiker van toepassing is.

```
/perm user list <uuid>
```



### Rechten toevoegen aan een gebruiker

Geeft één of meerdere rechten direct aan een gebruiker. De opgegeven rechten worden meteen toegevoegd en zijn direct actief, zonder dat de server opnieuw gestart hoeft te worden.

```
/perm user add <uuid> <permissions>
```



### Rechten verwijderen bij een gebruiker

Neemt rechten weg bij een gebruiker. Dit verwijdert alleen de opgegeven rechten, alle andere rechten blijven behouden.

```
/perm user remove <uuid> <permissions>
```



## Gebruikersgroepen beheren

Naast directe rechten kunnen gebruikers ook rechten erven via groepen.

### Groepsrechten van een gebruiker bekijken

Toont van welke permissiegroepen de gebruiker lid is.

```
/perm user group list <uuid>
```



### Gebruiker aan een groep toevoegen

Voegt een gebruiker toe aan een permissiegroep. De gebruiker erft dan automatisch alle rechten die voor die groep gelden.

```
/perm user group add <uuid> <group>
```



### Gebruiker uit een groep verwijderen

Verwijdert een gebruiker uit een permissiegroep. Na verwijdering ontvangt de gebruiker geen rechten meer vanuit die groep.

```
/perm user group remove <uuid> <group>
```



## Groepsrechten beheren

Groepen maken het mogelijk om rechten centraal te beheren en te hergebruiken voor meerdere gebruikers.

### Groepsrechten bekijken

Toont alle rechten die aan een groep zijn toegekend. Dit commando geeft een overzicht van alle rechten die bij de opgegeven groep horen.

```
/perm group list <group>
```



### Rechten toevoegen aan een groep

Voegt één of meerdere rechten toe aan een groep. Alle gebruikers in deze groep krijgen direct de nieuwe rechten.

```
/perm group add <group> <permissions>
```



### Rechten verwijderen uit een groep

Verwijdert alleen de opgegeven rechten uit de groep, zonder andere rechten te beïnvloeden.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />