---
id: palworld-player-damage-and-defense
title: "Palworld: Spelerschade en Verdediging"
description: "Leer hoe je de speler schade en verdediging instellingen in Palworld aanpast door de serverconfig te bewerken en de schade-multipliers correct in te stellen. -> Leer nu meer"
sidebar_label: Palworld: Spelerschade en Verdediging
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld laat je bepalen hoeveel schade een speler uitdeelt en hoeveel schade een speler ontvangt via serverconfiguratie-instellingen. In deze gids leer je hoe je het juiste configuratiebestand op je ZAP-Hosting game server bewerkt, de speler schade- en verdedigingsmultipliers aanpast en de wijzigingen correct toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, zorg dat je Palworld-server al geïnstalleerd is en dat je toegang hebt tot de webadministratie.

Je hebt nodig:
- een actieve Palworld game server bij ZAP-Hosting
- toegang tot de webinterface van de game server
- rechten om bestanden te bewerken onder `Configs`

:::info Handmatige Configuratie Vereist
Deze setup voer je handmatig uit door het Palworld configuratiebestand te bewerken. Er is geen extra in-game commando nodig voor deze specifieke instellingen.
:::

## Open het juiste configuratiebestand

Om speler schade en verdediging aan te passen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:
1. Open je Palworld server
2. Ga naar `Configs`
3. Open `PalWorldSettings.ini`

Dit bestand bevat de belangrijkste gameplay multipliers die de dedicated server gebruikt, inclusief de waarden voor speler aanvalsschade en speler verdediging (ontvangen schade).

:::note Locatie van de Configuratie
De taakcontext bevestigt dat het relevante bestand beschikbaar is via de game server administratie onder `Configs`. Als jouw interface iets anders is ingedeeld, zoek dan naar de lijst met configuratiebestanden voor je server en open `PalWorldSettings.ini`.
:::

## Bewerk de speler schade- en verdedigingswaarden

In `PalWorldSettings.ini` moet je de volgende configuratie-items vinden.

| Config key | Functie | Standaardwaarde |
| --- | --- | --- |
| `PlayerDamageRateAttack` | Bepaalt hoeveel schade een speler uitdeelt | `1.000000` |
| `PlayerDamageRateDefense` | Bepaalt hoeveel schade een speler ontvangt | `1.000000` |

Deze waarden staan meestal in het hoofdoptieblok van het bestand.

### Voorbeeldconfiguratie

Gebruik het volgende voorbeeld als referentie:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

Als deze waarden al bestaan, wijzig dan alleen de nummers. Als je bestand een enkele lange optielijn gebruikt, zorg dan dat je de bestaande items zorgvuldig aanpast zonder komma’s, haakjes of aangrenzende waarden te verwijderen.

### Hoe de waarden werken

| Waarde | Effect |
| --- | --- |
| Hogere `PlayerDamageRateAttack` | Spelers doen meer schade |
| Lagere `PlayerDamageRateAttack` | Spelers doen minder schade |
| Hogere `PlayerDamageRateDefense` | Spelers ontvangen minder effectieve schade, afhankelijk van de game logica, maar deze instelling wordt meestal gebruikt als multiplier voor ontvangen schade |
| Lagere `PlayerDamageRateDefense` | Spelers ontvangen meer schade |

:::caution Begrijp de Verdedigingsmultiplicator
`PlayerDamageRateDefense` beïnvloedt de multiplier voor ontvangen schade door de speler. Een lagere waarde betekent dat de speler meer schade ontvangt, terwijl een hogere waarde het relatieve gevaar minder agressief vermindert, afhankelijk van de serverbalans. Test je instellingen altijd na het aanpassen.
:::

## Kies geschikte multiplierwaarden

Je kunt de instellingen aanpassen afhankelijk van de moeilijkheidsgraad die je voor je server wilt.

### Gebalanceerd voorbeeld

Wil je een zo standaard mogelijke ervaring, houd dan beide waarden op `1.000000`:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

### Makkelijker gevecht voorbeeld

Wil je dat spelers meer schade doen en makkelijker overleven, verhoog dan de aanval en test de verdediging zorgvuldig:

```ini
PlayerDamageRateAttack=1.500000
PlayerDamageRateDefense=1.500000
```

### Moeilijker gevecht voorbeeld

Wil je dat spelers minder schade doen en meer te verduren krijgen, verlaag dan de waarden:

```ini
PlayerDamageRateAttack=0.800000
PlayerDamageRateDefense=0.800000
```

:::tip Pas Geleidelijk Aan
Verander multipliers in kleine stappen zoals `0.1` of `0.25`. Zo vind je makkelijker een goede balans zonder dat het gevecht te makkelijk of te straf wordt.
:::

## Sla het bestand op en herstart de server

Na het bewerken van `PalWorldSettings.ini`, sla je het bestand op in de ZAP-Hosting `Configs` sectie.

Zodra het bestand is opgeslagen, herstart je je Palworld server zodat de nieuwe schade-instellingen geladen worden.

### Vereiste actie na bewerken

| Actie | Vereist |
| --- | --- |
| Sla `PalWorldSettings.ini` op | Ja |
| Herstart de server | Ja |
| Voer een in-game commando uit | Nee |
| Voer handmatig een console commando uit | Nee |

:::info Herstart Vereist
Wijzigingen aan `PlayerDamageRateAttack` en `PlayerDamageRateDefense` worden niet betrouwbaar toegepast totdat de server opnieuw is gestart.
:::

## Controleer de nieuwe instellingen

Na de herstart, join je server en test je het gevecht direct.

Controleer of:
- de speler de verwachte hoeveelheid schade doet
- inkomende vijandelijke aanvallen sterker of zwakker aanvoelen
- de algehele balans nog steeds past bij jouw gewenste gameplay

Als het resultaat niet is wat je wilt, ga dan terug naar `PalWorldSettings.ini`, pas de multipliers opnieuw aan, sla het bestand op en herstart de server nogmaals.

## Conclusie

Gefeliciteerd, je hebt succesvol de speler schade- en verdedigingsinstellingen op je Palworld server aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂