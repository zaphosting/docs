---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Instellingen"
description: "Leer hoe je de frequentie van supply drops in Palworld aanpast op je Palworld game server door de SupplyDropSpan instelling handmatig te wijzigen. -> Leer nu meer"
sidebar_label: Palworld: Supply Drop Instellingen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld bevat supply drops die op vaste tijdstippen verschijnen en nuttige resources kunnen bieden tijdens het spelen. In deze gids leer je hoe je handmatig de frequentie van supply drops aanpast op je ZAP-Hosting Palworld game server door het juiste configuratiebestand te bewerken.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, zorg ervoor dat je toegang hebt tot je Palworld game server in de ZAP-Hosting webinterface en dat je toestemming hebt om serverconfiguratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze instelling wordt handmatig uitgevoerd via je serverbeheer onder **Configs**. Na het wijzigen van de instelling moet je de server herstarten zodat Palworld de bijgewerkte configuratie kan laden.
:::

## Vind het juiste configuratiebestand

Om het interval van de supply drops te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting webinterface:

1. Open je Palworld game server beheer.
2. Ga naar **Configs**.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-configuratiewaarden voor je Palworld server, inclusief de timerinstelling voor supply drops.

## Bewerk de supply drop instelling

Zoek in `PalWorldSettings.ini` de sectie `OptionSettings` en vind de invoer `SupplyDropSpan`.

De relevante configuratiesleutel ziet er als volgt uit:

| Instelling | Beschrijving | Voorbeeld |
| --- | --- | --- |
| `SupplyDropSpan` | Bepaalt het interval tussen supply drops in minuten | `180` |

Als de invoer al bestaat, wijzig dan de waarde naar het gewenste interval.

### Voorbeeldwaarden

Je kunt de volgende waarden als referentie gebruiken:

| Waarde | Resultaat |
| --- | --- |
| `30` | Zeer frequente supply drops |
| `60` | Supply drops elke 1 uur |
| `180` | Standaardinstelling, elke 3 uur |
| `360` | Supply drops elke 6 uur |

### Voorbeeldconfiguratie

Afhankelijk van de inhoud van je bestand verschijnt de instelling als onderdeel van de grotere `OptionSettings` regel. Bijvoorbeeld:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Als je bestand al veel instellingen bevat in hetzelfde `OptionSettings=(...)` blok, wijzig dan alleen de waarde van `SupplyDropSpan` en laat de rest van de bestaande invoeren ongewijzigd.

Bijvoorbeeld:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Bestaande Instellingen Behouden
Verwijder geen andere waarden uit het `OptionSettings` blok bij het bewerken van `SupplyDropSpan`. Als je per ongeluk komma’s, haakjes of andere invoeren verwijdert, kan je Palworld-configuratie niet meer correct laden.
:::

## Sla de wijzigingen op en pas ze toe

Nadat je de waarde van `SupplyDropSpan` hebt aangepast:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld server via het ZAP-Hosting serverbeheer.

Een herstart is nodig omdat Palworld deze instelling niet live toepast terwijl de server al draait.

:::note Geen Extra Commando Nodig
Normaal is geen extra in-game of console commando nodig voor deze wijziging. Het herstarten van de server is de noodzakelijke stap om het bijgewerkte supply drop interval toe te passen.
:::

## Controleer het nieuwe supply drop interval

Na de herstart gebruikt je server de nieuwe `SupplyDropSpan` waarde. Je kunt de wijziging controleren door de tijd tussen supply drop events tijdens het spelen te monitoren.

Als de wijziging niet lijkt te werken, controleer dan het volgende:

| Controle | Wat te verifiëren |
| --- | --- |
| Juiste bestand | Je hebt `PalWorldSettings.ini` bewerkt |
| Juiste locatie | Het bestand is geopend via **Configs** in je serverbeheer |
| Juiste syntax | `SupplyDropSpan` is correct geschreven en blijft binnen het `OptionSettings` blok |
| Server herstart | De server is volledig herstart na het opslaan |

:::tip Kies een Gebalanceerde Waarde
Zeer lage waarden kunnen ervoor zorgen dat supply drops veel vaker verschijnen dan normaal in Palworld gameplay. Als je vaker events wilt zonder dat het overdreven wordt, is `60` meestal een goede startwaarde.
:::

## Conclusie

Gefeliciteerd, je hebt de frequentie van supply drops op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂