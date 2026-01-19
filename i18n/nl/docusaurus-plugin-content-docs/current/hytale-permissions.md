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

Rechten beheren op een Hytale-server geeft je controle over wat spelers wel en niet kunnen doen. Dit betekent dat je verschillende toegangsniveaus kunt toewijzen aan vertrouwde spelers, moderators en admins. De juiste permissies instellen is super belangrijk om een gebalanceerde en veilige server te houden waar iedereen zonder problemen kan gamen.

De serversoftware van Hytale ondersteunt hiërarchische permissieniveaus die bepalen welke commando’s en acties elke speler mag uitvoeren. Je kunt dit beheren via de live console of via configuratiebestanden, afhankelijk van hoe jouw server is opgezet.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en zit momenteel in Early Access. Omdat het spel nog volop in ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd veranderen.

:::

<InlineVoucher />



## Overzicht van permissieniveaus

Permissies bepalen welke acties een speler op de server mag uitvoeren. Op het laagste niveau hebben normale spelers alleen standaard gameplayrechten, zoals bewegen, de wereld interactief gebruiken en chatten. Hogere permissieniveaus zoals operator of admin geven toegang tot servercommando’s die gameplay, andere spelers, serverinstellingen en moderatietools beïnvloeden.

Het permissiesysteem bestaat uit twee hoofdonderdelen:

- **Gebruikersrechten** die direct aan een specifieke speler worden toegekend
- **Groepsrechten** waarmee je permissies kunt bundelen en aan meerdere spelers tegelijk kunt toewijzen

Elke speler wordt intern geïdentificeerd met een UUID, wat nodig is om permissies via commando’s te beheren.



## Gebruikersrechten beheren

Met gebruikersrechten kun je specifieke permissies aan één speler geven of intrekken.

### Gebruikersrechten bekijken

Toont alle permissies die direct aan een gebruiker zijn toegekend. Dit commando laat elke permissie zien die momenteel op die gebruiker van toepassing is.

```
/perm user list <uuid>
```



### Permissies toevoegen aan een gebruiker

Geeft één of meerdere permissies direct aan een gebruiker. De opgegeven permissies worden meteen toegevoegd en zijn direct actief, zonder dat de server opnieuw gestart hoeft te worden.

```
/perm user add <uuid> <permissions>
```



### Permissies verwijderen bij een gebruiker

Neemt permissies weg bij een gebruiker. Alleen de opgegeven permissies worden verwijderd, de rest blijft ongewijzigd.

```
/perm user remove <uuid> <permissions>
```



## Gebruikersgroep-toewijzingen beheren

Naast directe permissies kunnen gebruikers ook permissies erven via groepen.

### Gebruikersgroep-permissies bekijken

Toont van welke permissiegroepen de gebruiker momenteel lid is.

```
/perm user group list <uuid>
```



### Gebruiker aan een groep toevoegen

Voegt een gebruiker toe aan een permissiegroep. De gebruiker erft dan automatisch alle permissies die voor die groep gelden.

```
/perm user group add <uuid> <group>
```



### Gebruiker uit een groep verwijderen

Verwijdert een gebruiker uit een permissiegroep. De gebruiker krijgt dan geen permissies meer vanuit die groep.

```
/perm user group remove <uuid> <group>
```



## Groepsrechten beheren

Groepen maken het mogelijk om permissies centraal te beheren en te hergebruiken voor meerdere gebruikers.

### Groepsrechten bekijken

Toont alle permissies die aan een groep zijn toegekend. Dit commando geeft een overzicht van elke permissie die bij die groep hoort.

```
/perm group list <group>
```



### Permissies toevoegen aan een groep

Voegt één of meerdere permissies toe aan een groep. Alle gebruikers in die groep krijgen direct de nieuwe permissies.

```
/perm group add <group> <permissions>
```



### Permissies verwijderen uit een groep

Verwijdert alleen de opgegeven permissies uit de groep, zonder andere permissies te beïnvloeden.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />