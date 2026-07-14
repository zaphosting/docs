---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Leer hoe je Palworld technology IDs beheert, specifieke technologieën uitschakelt en de vereiste config-waarden op je server begrijpt -> Leer nu meer"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld gebruikt *technology IDs* om ontgrendelbare technologieën en bepaalde gerelateerde item-gebaseerde instellingen te identificeren. In deze gids leer je hoe je specifieke technologieën op je ZAP-Hosting Palworld-server uitschakelt door de juiste configuratie-invoer handmatig aan te passen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en toestemming hebt om serverconfiguratiebestanden te bewerken.

:::info Vereiste Toegang
Je hebt toegang nodig tot de Palworld-serveradministratie en de sectie `Configs` in het ZAP-Hosting paneel om deze setup te voltooien.
:::

:::note Bronnen van Technology IDs
Palworld technology IDs zijn intern door het spel gedefinieerde strings, zoals `GrapplingGun` of `SkillUnlock_JetDragon`. Er is geen officiële in-game lijst in het ZAP-Hosting paneel, dus je moet een betrouwbare externe bron gebruiken voor geldige IDs.
:::

## Technologie IDs begrijpen

Technology IDs zijn interne identificatoren die Palworld gebruikt voor ontgrendelbare technologieën. In plaats van de zichtbare in-game naam verwacht de serverconfiguratie de exacte ID-string.

Voor het uitschakelen van technologieën gebruikt Palworld de instelling `DenyTechnologyList`. Deze waarde accepteert een komma-gescheiden lijst van technology IDs.

### Wat `DenyTechnologyList` doet

Wanneer je geldige technology IDs toevoegt aan `DenyTechnologyList`, worden die technologieën geblokkeerd op je server. Dit is handig als je de voortgang wilt beperken, specifieke mobiliteitstools wilt verwijderen of gameplayregels voor je community wilt aanpassen.

### Ondersteund waardetype

De waarde moet worden ingevoerd als een komma-gescheiden lijst zonder extra uitleg.

| Config key | Doel | Formaat | Voorbeeld |
|---|---|---|---|
| `DenyTechnologyList` | Schakelt geselecteerde technologieën uit | Komma-gescheiden technology ID strings | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Exacte ID-overeenkomst
Technology IDs moeten exact overeenkomen met de interne waarde van het spel. Als een ID verkeerd gespeld is of niet meer geldig is voor de huidige Palworld-versie, werkt de instelling mogelijk niet zoals verwacht.
:::

## Open het juiste configuratiebestand

Bij ZAP-Hosting wordt deze wijziging gemaakt door het Palworld-configuratiebestand handmatig te bewerken.

### Bestand om te bewerken

Je moet het volgende bestand bewerken:

```ini
PalWorldSettings.ini
```

### Waar vind je het in de ZAP-Hosting interface

Open de Palworld-serveradministratie en ga dan naar:

```text
Configs
```

Open daar `PalWorldSettings.ini`.

:::tip Config-locatie bij ZAP-Hosting
Als je server meerdere bewerkbare bestanden aanbiedt, zorg dan dat je `PalWorldSettings.ini` selecteert, want dit is het bestand dat wordt gebruikt voor gameplay-gerelateerde serverinstellingen zoals `DenyTechnologyList`.
:::

## Bewerk de technology ID-instelling

Zodra je `PalWorldSettings.ini` hebt geopend, zoek je de serveroptielijst en voeg je de `DenyTechnologyList`-invoer toe of wijzig je deze.

### Voeg technology IDs toe aan `DenyTechnologyList`

Gebruik een komma-gescheiden lijst van de technologieën die je wilt uitschakelen.

Voorbeeld:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Dit voorbeeld schakelt uit:

| Technology ID | Betekenis |
|---|---|
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Hogere variant van Grappling Gun |
| `SkillUnlock_JetDragon` | Ontgrendeling gerelateerd aan JetDragon |

:::note Aanhalingstekens en formaat
Afhankelijk van hoe je bestaande `PalWorldSettings.ini`-invoer is opgebouwd, kan de waarde binnen een grotere optieblok staan. Houd de bestaande syntaxisstijl aan die al in je bestand wordt gebruikt en wijzig alleen de waarde voor `DenyTechnologyList`.
:::

### Voorbeeld binnen een optieblok

Op veel Palworld-servers worden instellingen opgeslagen binnen een grotere `OptionSettings`-regel. In dat geval kan de invoer er zo uitzien:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Als `DenyTechnologyList` nog niet aanwezig is, voeg deze dan toe binnen hetzelfde `OptionSettings=(...)` blok en scheid deze met een komma van andere invoeren.

:::caution Bestaande syntaxis behouden
Verwijder geen andere instellingen uit `OptionSettings`. Een ontbrekende komma, haakje of aanhalingsteken kan ervoor zorgen dat de configuratie niet correct wordt geladen.
:::

## Kies geldige technology IDs

Je moet geldige interne technology IDs gebruiken, niet de weergegeven namen in het spel.

### Voorbeeld technology IDs

De volgende zijn bekende voorbeelden van technology IDs die Palworld gebruikt:

| Technology ID | Voorbeeldbetekenis |
|---|---|
| `AIcore` | AI Core |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Variant van Grappling Gun |
| `GrapplingGun3` | Variant van Grappling Gun |
| `GrapplingGun4` | Variant van Grappling Gun |
| `GrapplingGun5` | Variant van Grappling Gun |
| `SkillUnlock_JetDragon` | JetDragon ontgrendeling |
| `SkillUnlock_IceHorse` | Ice Horse ontgrendeling |
| `PALBOX` | Palbox-gerelateerde technologie |
| `RepairBench` | Repair Bench |

Omdat Palworld updates ontvangt, kan de volledige lijst met IDs in de loop van de tijd veranderen. Als je een bredere referentielijst nodig hebt, controleer dan de IDs aan de hand van een actuele en betrouwbare bron voordat je ze toepast.

### Gerelateerd gebruik van IDs in andere instellingen

Technology-achtige interne IDs kunnen ook in andere Palworld-configuratieopties worden gebruikt. Een bekend voorbeeld is:

| Config key | Doel |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Stelt een aangepaste item drop in voor PvP kills |

:::info Gerelateerde PvP-instelling
Als je van plan bent IDs te gebruiken voor PvP-item drop aanpassingen, controleer dan of het ID-type dat `AdditionalDropItemWhenPlayerKillingInPvPMode` vereist overeenkomt met het item dat je wilt gebruiken. Deze gids richt zich specifiek op `DenyTechnologyList`.
:::

## Opslaan en herstarten van de server

Na het bewerken van het bestand, sla je de wijzigingen op in de ZAP-Hosting interface.

Om de nieuwe configuratie toe te passen, herstart je je Palworld-server.

### Vereiste actie na bewerken

| Actie | Vereist |
|---|---|
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console-commando’s uitvoeren | Geen bevestigd commando vereist |

Een herstart is nodig omdat Palworld deze serverinstellingen tijdens het opstarten inleest. Zonder herstart worden je nieuwe technologiebeperkingen mogelijk niet toegepast.

:::tip Test na herstart
Na het herstarten van de server, join je de server en controleer je of de geselecteerde technologieën zoals bedoeld niet meer beschikbaar zijn. Dit helpt je bevestigen dat de IDs en syntaxis correct zijn ingevoerd.
:::

## Problemen oplossen

Als de technologieën na het herstarten nog steeds beschikbaar zijn, controleer dan de volgende punten.

### Controleer de spelling van de ID

Zorg dat elke technology ID precies is geschreven zoals vereist, inclusief hoofdletters.

### Controleer de config-syntaxis

Als je het `OptionSettings=(...)` blok hebt bewerkt, controleer dan of:

- elke instelling gescheiden is door een komma
- aanhalingstekens correct geopend en gesloten zijn
- haakjes compleet zijn
- `DenyTechnologyList` binnen het juiste instellingenblok staat

### Bevestig dat de server succesvol is herstart

Als de server niet correct is herstart, is de bijgewerkte configuratie mogelijk niet geladen.

:::danger Risico van ongeldige configuratie
Een verkeerd geformatteerd `PalWorldSettings.ini` kan voorkomen dat instellingen correct worden geladen. Als dit gebeurt, herstel dan de vorige werkende versie van het bestand en pas de wijziging zorgvuldig opnieuw toe.
:::

## Conclusie

Gefeliciteerd, je hebt succesvol specifieke technologieën uitgeschakeld op je Palworld-server met behulp van technology IDs. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂