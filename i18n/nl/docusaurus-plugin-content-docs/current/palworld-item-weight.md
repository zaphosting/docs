---
id: palworld-item-weight
title: "Palworld: Item Weight"
description: "Leer hoe je de Palworld item weight multiplier aanpast door de item weight instelling in je serverconfiguratie te wijzigen voor een betere draaggewichtbalans. -> Leer nu meer"
sidebar_label: Palworld: Item Weight
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stelt je in staat om het itemgewicht op je server aan te passen door een configuratiewaarde in het hoofdserverinstellingsbestand te wijzigen. In deze gids leer je waar je het juiste bestand vindt in de ZAP-Hosting webinterface, welke `item weight` instelling je moet aanpassen en hoe je de wijziging correct toepast.



## Preparation

Voordat je begint, zorg ervoor dat je Palworld gameserver online is en dat je toegang hebt tot de webadministratie.

:::info Vereiste Toegang
Je hebt toegang nodig tot het Palworld serverbeheerpaneel in de ZAP-Hosting webinterface om configuratiebestanden onder **Configs** te kunnen bewerken.
:::

## Open het Palworld Configuratiebestand

Om de item weight multiplier te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In het ZAP-Hosting gameserverbeheer:

1. Open je Palworld server.
2. Ga naar **Configs**.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplayconfiguratie-instellingen die door je Palworld server worden gebruikt.

:::note Doel van het Configuratiebestand
`PalWorldSettings.ini` slaat meerdere gameplay modifiers op, waaronder waardes voor schade, uithoudingsvermogen, drops en `item weight`.
:::

## Bewerk de Item Weight Instelling

Zoek in `PalWorldSettings.ini` de sectie `OptionSettings` en vind de invoer `ItemWeightRate`.

Als de invoer al bestaat, wijzig dan de waarde. Als deze ontbreekt, voeg deze dan toe binnen de parameterlijst van `OptionSettings`.

### Configuratiesleutel

Gebruik de volgende instelling:

```ini
ItemWeightRate=1.000000
```

### Wat de Waarde Betekent

`ItemWeightRate` bepaalt de gewichtsmultiplier voor items op je server.

| Config key | Standaardwaarde | Effect |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Standaard itemgewicht |
| `ItemWeightRate` lager dan `1.0` | Bijvoorbeeld: `0.500000` | Items wegen minder, spelers kunnen meer dragen |
| `ItemWeightRate` hoger dan `1.0` | Bijvoorbeeld: `2.000000` | Items wegen meer, spelers kunnen minder dragen |

### Voorbeeldwaarden

Je kunt een van de volgende voorbeelden gebruiken, afhankelijk van de gameplaybalans die je wilt:

| Gewenst resultaat | Waarde |
|---|---:|
| Standaard itemgewicht | `1.000000` |
| Half itemgewicht | `0.500000` |
| Zeer lichte items | `0.250000` |
| Dubbel itemgewicht | `2.000000` |

:::tip Kies een Goede Multiplier
Wil je een relaxtere survivalervaring? Dan is een lagere `item weight` waarde zoals `0.5` vaak een praktisch startpunt. Dit vermindert de druk op je inventaris zonder het gewichtbeheer volledig weg te nemen.
:::

## Voorbeeldconfiguratie

In Palworld worden deze gameplaywaardes meestal opgeslagen binnen de regel `OptionSettings=(...)` in `PalWorldSettings.ini`. Je bestand kan al veel andere instellingen bevatten.

Een vereenvoudigd voorbeeld ziet er zo uit:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

Op veel servers bevat `OptionSettings` al meerdere waardes gescheiden door komma’s. Voeg in dat geval alleen het `ItemWeightRate`-gedeelte toe of wijzig dit, zonder de andere invoeren te verwijderen.

Voorbeeld:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Bestaande Instellingen Niet Verwijderen
Verwijder geen andere waardes uit de `OptionSettings` regel tenzij je ze bewust wilt resetten. Het verwijderen van komma’s, haakjes of bestaande invoeren kan configuratiefouten veroorzaken.
:::

## Sla de Wijzigingen Op en Pas ze Toe

Na het bewerken van het bestand:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld server.

Een herstart is nodig omdat de server deze gameplayconfiguratie tijdens het opstarten inleest. De nieuwe `item weight` waarde wordt pas volledig toegepast na de herstart.

## Controleer het Nieuwe Itemgewicht

Na de herstart, join je server en test je het draaggedrag van items in de game.

Je zou moeten merken dat:

- lagere waardes het effectieve gewicht van items verminderen
- hogere waardes het effectieve gewicht van items verhogen
- de inventariscapaciteit anders aanvoelt afhankelijk van de gekozen multiplier

Als de wijziging niet lijkt te werken, open dan `PalWorldSettings.ini` opnieuw en controleer of:

| Controle | Wat te verifiëren |
|---|---|
| Correct bestand | Je hebt `PalWorldSettings.ini` bewerkt |
| Correcte locatie | Het bestand is geopend via **Configs** in het serverbeheer |
| Correcte sleutel | `ItemWeightRate` is aanwezig |
| Correcte syntax | De waarde staat binnen de regel `OptionSettings=(...)` als je bestand dat formaat gebruikt |
| Herstart voltooid | De server is herstart na het opslaan |

## Conclusion

Gefeliciteerd, je hebt de item weight instelling op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂