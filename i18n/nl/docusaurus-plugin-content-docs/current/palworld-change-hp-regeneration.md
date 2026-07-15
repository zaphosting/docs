---
id: palworld-change-hp-regeneration
title: "Palworld: HP-regeneratie aanpassen"
description: "Leer hoe je de HP-regeneratie in Palworld kunt aanpassen door de speler- en Pal-regeneratie-instellingen op je server te wijzigen voor snellere, langzamere of uitgeschakelde genezing -> Leer het nu"
sidebar_label: "HP-regeneratie aanpassen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld stelt je in staat om de regeneratie-instellingen voor zowel spelers als Pals aan te passen via de hoofdserverconfiguratie. In deze gids leer je hoe je het juiste configuratiebestand in de ZAP-Hosting webinterface bewerkt, de HP-regeneratiewaarden aanpast en de wijzigingen correct toepast.



## Voorbereiding

Zorg ervoor dat je Palworld-server online is en dat je toegang hebt tot de webadministratie via het ZAP-Hosting paneel.

:::info Toegang tot configuratie vereist
Je hebt toegang nodig tot de game server administratie en het `Configs`-gedeelte om de Palworld-configuratiebestanden handmatig te kunnen bewerken.
:::

## Open het Palworld-configuratiebestand

Om de HP-regeneratie te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je Palworld-server.
2. Ga naar `Configs`.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-configuratiewaarden voor je server, inclusief de multipliers voor speler- en Pal-gezondheidsregeneratie.

:::note Handmatige configuratiewijzigingen
Afhankelijk van je huidige configuratie kunnen instellingen in een lange parameterregel binnen de sectie `OptionSettings` staan. Bewerk de bestaande waarden zorgvuldig en behoud de opmaak.
:::

## HP-regeneratiewaarden aanpassen

De HP-regeneratie-instellingen worden opgeslagen als numerieke multipliers. Een waarde van `1.0` gebruikt de standaard regeneratiesnelheid.

### Ondersteunde regeneratie-instellingen

Gebruik de volgende configuratiesleutels in `PalWorldSettings.ini`:

| Config key | Beschrijving | Standaardwaarde |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Natuurlijke HP-regeneratiesnelheid van de speler | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | HP-regeneratie van de speler tijdens slapen | `1.0` |
| `PalAutoHPRegeneRate` | Natuurlijke HP-regeneratiesnelheid van de Pal | `1.0` |
| `PalAutoHpRegeneRateInSleep` | HP-regeneratie van de Pal tijdens slapen in de Palbox | `1.0` |

### Gedrag van de waarden

Je kunt de volgende logica gebruiken bij het aanpassen van de regeneratie:

| Waarde | Effect |
| --- | --- |
| `1.0` | Standaard regeneratiesnelheid |
| Groter dan `1.0` | Snellere genezing |
| Kleiner dan `1.0` | Langzamere genezing |
| `0.0` | Regeneratie uitgeschakeld |

:::tip Goede regeneratiewaarden kiezen
Wil je een iets makkelijkere survival-ervaring? Probeer dan waarden zoals `1.5` of `2.0`. Voor een uitdagendere setup gebruik je waarden onder `1.0` of schakel je regeneratie volledig uit met `0.0`.
:::

## Configuratie-invoer bewerken

In de meeste Palworld-serverconfiguraties staan deze waarden in de regel `OptionSettings=(...)` van `PalWorldSettings.ini`.

### Voorbeeldconfiguratie

Voeg de invoer toe als deze ontbreekt, of wijzig de bestaande waarden als ze al aanwezig zijn:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Wil je bijvoorbeeld snellere natuurlijke genezing voor spelers en Pals, dan kun je dit gebruiken:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Als je alleen specifieke waarden wilt aanpassen, wijzig dan alleen die invoer en laat de rest van je bestaande `OptionSettings`-waarden ongewijzigd.

:::caution Bestaande OptionSettings-waarden behouden
Verwijder geen niet-gerelateerde invoer uit de `OptionSettings`-regel. Deze sectie bevat meestal veel gameplay-instellingen en het verwijderen kan onbedoeld andere delen van je serverconfiguratie resetten.
:::

## Wijzigingen opslaan en toepassen

Sla na het bewerken het bestand op in het `Configs`-gedeelte van ZAP-Hosting.

Om de nieuwe regeneratie-instellingen toe te passen, moet je je Palworld-server herstarten.

### Server herstarten

1. Sla het bewerkte `PalWorldSettings.ini` bestand op.
2. Ga terug naar je serveradministratie.
3. Herstart de server.

Een herstart is nodig omdat Palworld deze gameplay-instellingen tijdens het opstarten van de server inleest.

:::info Herstart vereist
De HP-regeneratiewijzigingen worden niet direct toegepast terwijl de server draait. Je moet de server herstarten nadat je de configuratie hebt opgeslagen.
:::

## Nieuwe regeneratie-instellingen controleren

Na het herstarten van de server, join je de server en test je het nieuwe genezingsgedrag in de game.

Je kunt de wijziging controleren door te letten op:

- natuurlijke HP-herstel van de speler
- genezing van de speler tijdens slapen
- natuurlijke HP-herstel van de Pal
- genezingsgedrag van de Pal in de Palbox tijdens slapen

Als de regeneratie niet werkt zoals verwacht, open dan opnieuw `PalWorldSettings.ini` en controleer of:

- de configuratiesleutels exact correct gespeld zijn
- de waarden geldige decimale getallen zijn zoals `1.0` of `2.0`
- de invoer binnen de `OptionSettings`-sectie blijft
- de server is herstart na het opslaan

## Conclusie

Gefeliciteerd, je hebt de HP-regeneratie in Palworld succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂