---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Leer hoe je Palworld technology IDs beheert, specifieke technologieën uitschakelt en veilig de juiste serverconfiguratie aanpast. -> Leer nu meer"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld gebruikt *technology IDs* om ontgrendelbare technologieën en bepaalde item-gerelateerde instellingen in de serverconfiguratie te identificeren. In deze gids leer je hoe je specifieke technologieën uitschakelt door de `DenyTechnologyList`-instelling in je ZAP-Hosting Palworld serverconfiguratie aan te passen.



## Preparation

Voordat je begint, zorg dat je toegang hebt tot je Palworld gameserver in de ZAP-Hosting webinterface en toestemming hebt om de configuratiebestanden te bewerken.

:::info Toegang tot Configuratie Vereist
Je hebt toegang nodig tot je game server administratie en de sectie `Configs` om `PalWorldSettings.ini` te kunnen bewerken.
:::

:::note Bron van Technology IDs
Palworld technology IDs zijn string-gebaseerde waarden, zoals `GrapplingGun`, `GrapplingGun2` of `SkillUnlock_JetDragon`. Een actuele lijst van derden vind je hier: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Omdat Palworld updates beschikbare technologieën kunnen wijzigen, moet je altijd controleren of de IDs die je wilt gebruiken nog bestaan in de huidige gameversie.
:::

## Technology IDs begrijpen

Technology IDs zijn interne identificaties die Palworld gebruikt voor ontgrendelbare technologieën. Op dedicated servers kunnen deze IDs gebruikt worden in specifieke configuratie-opties om het gameplaygedrag te sturen.

De belangrijkste instelling voor dit onderwerp is `DenyTechnologyList`, waarmee je geselecteerde technologieën kunt blokkeren zodat ze niet ontgrendeld of gebruikt kunnen worden op je server.

### Ondersteunde configuratiegebruik

De volgende tabel toont de relevante configuratiesleutel die in deze gids wordt behandeld:

| Config key | Doel | Waardeformaat |
| --- | --- | --- |
| `DenyTechnologyList` | Schakelt specifieke technologieën uit op de server | Komma-gescheiden lijst van technology ID strings |

### Voorbeeld van technology IDs

De volgende IDs zijn voorbeelden die vaak worden genoemd:

| Technology ID | Voorbeeld betekenis |
| --- | --- |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Hogere tier Grappling Gun |
| `SkillUnlock_JetDragon` | Ontgrendeling gerelateerd aan JetDragon |
| `SkillUnlock_IceHorse` | Ontgrendeling gerelateerd aan Frostallion |
| `PALBOX` | Technologie gerelateerd aan Palbox |
| `RepairBench` | Repair Bench |
| `AIcore` | AI Core |

:::caution Gebruik Exacte ID Waarden
Technology IDs zijn hoofdlettergevoelige stringwaarden. Als je een onjuiste ID invoert, kan Palworld deze negeren en wordt de technologie niet uitgeschakeld zoals bedoeld.
:::

## Open het Palworld configuratiebestand

Om technology IDs op je ZAP-Hosting server te configureren, moet je het juiste Palworld instellingenbestand handmatig bewerken.

### Vind het bestand in de ZAP-Hosting interface

1. Log in op de ZAP-Hosting webinterface.
2. Open je **Palworld** gameserver.
3. Ga naar **Configs** in de game server administratie.
4. Open het bestand `PalWorldSettings.ini`.

Dit is het configuratiebestand waarin de `DenyTechnologyList`-instelling wordt opgeslagen en bewerkt.



### Zoek de relevante instelling

Zoek in `PalWorldSettings.ini` naar het serveroptieblok dat je Palworld instellingen bevat.

Je moet de `DenyTechnologyList`-vermelding vinden of toevoegen.

:::tip Snel Zoeken in het Bestand
Gebruik de zoekfunctie van je browser met `CTRL` + `F` en zoek op `DenyTechnologyList` om de instelling sneller te vinden.
:::

## Configureer `DenyTechnologyList`

Je kunt nu definiëren welke technologieën op je server geblokkeerd moeten worden.

### Waardeformaat

`DenyTechnologyList` gebruikt een komma-gescheiden lijst van technology IDs.

Voorbeeldformaat:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Elke vermelding moet een geldige Palworld technology ID zijn. Voeg geen beschrijvingen, extra spaties in de ID zelf of niet-ondersteunde tekens toe.

### Voeg de instelling toe of bewerk deze

Als de instelling al bestaat, vervang je de huidige waarde door je gewenste lijst.

Als de instelling nog niet bestaat, voeg je deze toe aan de juiste serverinstellingen-sectie in `PalWorldSettings.ini`.

Voorbeeld:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Dit voorbeeld schakelt meerdere technologieën uit op basis van hun IDs.

### Referentievoorbeeld configuratie

| Voorbeeldvermelding | Resultaat |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Schakelt alleen de basis Grappling Gun technologie uit |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Schakelt meerdere tiers van Grappling Gun technologie uit |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Schakelt geselecteerde speciale ontgrendeltechnologieën uit |

:::note Gerelateerd gebruik van Item IDs
Sommige Palworld item-gerelateerde instellingen gebruiken ook ID-gebaseerde waarden. Bijvoorbeeld, derde partijen geven aan dat `AdditionalDropItemWhenPlayerKillingInPvPMode` ook Palworld ID-waarden kan gebruiken voor PvP item drops. Deze gids richt zich echter specifiek op `DenyTechnologyList`.
:::

## Sla de wijzigingen op en pas ze toe

Na het bewerken van de configuratie moet je het bestand opslaan en de server herstarten zodat Palworld de bijgewerkte instellingen kan laden.

### Sla het bestand op

Nadat je `PalWorldSettings.ini` hebt aangepast:

1. Sla de wijzigingen op in de `Configs` editor.
2. Controleer de vermelding nogmaals om te bevestigen dat de IDs correct gespeld zijn.

### Herstart de server

Zodra het bestand is opgeslagen, herstart je je Palworld server via de ZAP-Hosting game server administratie.

Deze herstart is nodig omdat configuratiewijzigingen in `PalWorldSettings.ini` pas betrouwbaar worden toegepast nadat de server opnieuw is gestart met het bijgewerkte bestand.

:::info Herstart Vereist
Een serverherstart is verplicht na het wijzigen van `DenyTechnologyList`. Meestal is geen extra in-game commando nodig voor deze instelling bij gebruik van de configuratiebestandmethode.
:::

## Controleer of de technologieën zijn uitgeschakeld

Na de herstart moet je bevestigen dat de configuratie werkt zoals verwacht.

### Wat te controleren

Je kunt het resultaat verifiëren door te controleren of de geselecteerde technologieën niet meer beschikbaar zijn in de game.

Gebruik de volgende checklist:

| Controle | Verwacht resultaat |
| --- | --- |
| Server succesvol herstart | Server komt normaal weer online |
| `PalWorldSettings.ini` correct opgeslagen | Je `DenyTechnologyList`-vermelding is nog aanwezig |
| Uitgeschakelde technologie getest in-game | De geselecteerde technologie is niet langer beschikbaar zoals verwacht |

### Als de instelling niet werkt

Als de technologieën nog steeds beschikbaar zijn, controleer dan het volgende:

| Mogelijk probleem | Wat te controleren |
| --- | --- |
| Ongeldige ID | Controleer of de technology ID exact overeenkomt met de huidige gameversie |
| Formatteerfout | Zorg dat de lijst komma-gescheiden is en alleen uit platte ID-strings bestaat |
| Bestand niet opgeslagen | Open `PalWorldSettings.ini` opnieuw en controleer of de waarde nog aanwezig is |
| Server niet herstart | Herstart de server opnieuw na het opslaan van wijzigingen |

:::caution Game-updates kunnen IDs wijzigen
Palworld krijgt regelmatig updates en technologie-informatie kan in de loop van de tijd veranderen. Als een eerder geldige ID niet meer werkt, controleer deze dan eerst tegen een actuele en betrouwbare bron voordat je verder gaat met troubleshooting.
:::

## Conclusion

Gefeliciteerd, je hebt succesvol specifieke technologieën uitgeschakeld op je Palworld server met behulp van technology IDs. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂