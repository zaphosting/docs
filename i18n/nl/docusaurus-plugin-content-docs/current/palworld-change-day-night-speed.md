---
id: palworld-change-day-night-speed
title: "Palworld: Verander de Snelheid van Dag en Nacht"
description: "Leer hoe je de snelheid van dag en nacht in Palworld aanpast door de dagcyclusinstellingen op je server te wijzigen. -> Leer nu meer"
sidebar_label: Palworld: Verander de Snelheid van Dag en Nacht
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld laat je bepalen hoe snel de dag- en nachtcyclus op je server verloopt. In deze gids leer je hoe je de snelheid van dag en nacht aanpast door het juiste configuratiebestand in je ZAP-Hosting game serverbeheer te bewerken en de wijzigingen correct toe te passen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld game server via de ZAP-Hosting webinterface en dat je toestemming hebt om serverconfiguratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze aanpassing wordt handmatig uitgevoerd via de serverconfiguratiebestanden. Je moet de Palworld-instellingen direct aanpassen en kunt dit niet via automatische in-game commando’s doen.
:::

## Vind het Configuratiebestand

Om de snelheid van dag en nacht te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In het ZAP-Hosting game serverbeheer vind je dit bestand via de sectie **Configs**. Open je Palworld server in de webinterface en ga naar het beheer van configuratiebestanden.

Het relevante bestand is:

```ini
PalWorldSettings.ini
```

:::note Locatie van het Configuratiebestand
Afhankelijk van het game server template en de panelindeling wordt het bestand aangeboden via de **Configs** sectie in het ZAP-Hosting beheer. Als het volledige interne pad in je interface wordt getoond, is dit meestal het Palworld serverinstellingenbestand dat gebruikt wordt voor gameplayconfiguratie.
:::

## Bewerk de Instellingen voor Dag- en Nachtsnelheid

Zoek in `PalWorldSettings.ini` naar de gameplayconfiguratie voor de snelheid van dag en nacht.

Je moet de volgende waarden aanpassen:

| Config key | Standaardwaarde | Beschrijving |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Bepaalt hoe snel de dag verloopt |
| `NightTimeSpeedRate` | `1.000000` | Bepaalt hoe snel de nacht verloopt |

Hogere waarden zorgen dat de tijd sneller gaat, lagere waarden maken de tijd langzamer.

### Voorbeeldconfiguratie

Wil je dat zowel dag als nacht sneller verlopen, dan kun je hogere waarden instellen zoals:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Wil je een langere dag maar een snellere nacht, gebruik dan verschillende waarden, bijvoorbeeld:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Waar Plaats je de Waarden

Palworld slaat veel gameplay-instellingen op in de sectie `OptionSettings` van `PalWorldSettings.ini`. Je moet de bestaande `DayTimeSpeedRate` en `NightTimeSpeedRate` waarden daar aanpassen, en geen dubbele keys elders toevoegen.

Een typische sectie ziet er zo uit:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Na bewerking kan het er zo uitzien:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Wees Voorzichtig met Bestaande Waarden
Zorg dat je alleen de waarde achter `DayTimeSpeedRate=` en `NightTimeSpeedRate=` aanpast. Verwijder geen komma’s, haakjes of andere instellingen in de `OptionSettings` regel, want een verkeerde opmaak kan ervoor zorgen dat de server de configuratie niet goed kan laden.
:::

## Opslaan en Wijzigingen Toepassen

Nadat je de waarden in `PalWorldSettings.ini` hebt aangepast, sla je het bestand op in de ZAP-Hosting configuratie-editor.

Start daarna je Palworld server opnieuw op zodat de nieuwe dagcyclusinstellingen geladen worden.

| Actie | Vereist |
| --- | --- |
| `PalWorldSettings.ini` opslaan | Ja |
| Server herstarten | Ja |
| Extra consolecommando’s uitvoeren | Nee |

:::tip Herstart is Verplicht
Configuratiewijzigingen voor Palworld wereldinstellingen worden pas betrouwbaar toegepast nadat de server opnieuw is gestart. Herstart de server dus altijd na het aanpassen van de dag- of nachtsnelheid.
:::

## Controleer de Nieuwe Dagcyclus

Na de herstart, join je server en kijk je hoe de in-game tijd verloopt.

Je zou nu moeten merken dat:

- de **dag** sneller of langzamer verloopt afhankelijk van `DayTimeSpeedRate`
- de **nacht** sneller of langzamer verloopt afhankelijk van `NightTimeSpeedRate`

Als de snelheid niet lijkt te veranderen, open dan `PalWorldSettings.ini` opnieuw en controleer of:

- de waarden correct zijn opgeslagen
- de opmaak van de `OptionSettings` regel nog geldig is
- de server na de wijziging opnieuw is gestart

## Configuratie Referentie

Gebruik de volgende tabel als snelle referentie als je later weer de daginstellingen wilt aanpassen.

| Instelling | Voorbeeld | Resultaat |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Langzamere dag | Dag duurt langer |
| `DayTimeSpeedRate=2.000000` | Snellere dag | Dag verloopt sneller |
| `NightTimeSpeedRate=0.500000` | Langzamere nacht | Nacht duurt langer |
| `NightTimeSpeedRate=2.000000` | Snellere nacht | Nacht verloopt sneller |

:::note Gebalanceerde Instellingen
Voor een natuurlijkere gameplay-ervaring, vermijd extreem hoge waarden. Zeer snelle dag- en nachtwisselingen kunnen het plannen van farming, verkenning en basisonderhoud lastiger maken.
:::

## Conclusie

Gefeliciteerd, je hebt de snelheid van dag en nacht op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂