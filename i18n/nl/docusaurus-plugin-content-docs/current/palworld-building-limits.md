---
id: palworld-building-limits
title: "Palworld: Bouwlimieten"
description: "Leer hoe je de bouwlimieten, basisbouwregels en gebiedsbeperkingen in Palworld kunt aanpassen door je serverconfiguratie handmatig te bewerken. -> Leer nu meer"
sidebar_label: Palworld: Bouwlimieten
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld stelt je in staat om verschillende bouwlimieten en beperkingen te beheren via de serverconfiguratie. In deze gids leer je hoe je het juiste configuratiebestand handmatig bewerkt in de ZAP-Hosting webinterface, de relevante bouwwaarden aanpast en de wijzigingen correct toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, zorg ervoor dat:

- je toegang hebt tot je Palworld gameserver in de ZAP-Hosting game server administratie
- je server momenteel offline is of dat je bereid bent deze na het aanbrengen van wijzigingen opnieuw te starten
- je weet dat deze gids algemene bouwlimieten en gebiedsbeperkingen behandelt, en niet de guild-specifieke basislimieten

:::info Handmatige Configuratie Vereist
Deze instellingen moeten handmatig worden aangepast in het configuratiebestand. Het relevante bestand is toegankelijk in je ZAP-Hosting game server administratie onder `Configs`.
:::

:::note Guild Basislimieten
Als je het aantal bases per guild wilt aanpassen in plaats van de algemene bouwlimieten die hier behandeld worden, gebruik dan de aparte gids voor guild basislimieten als die beschikbaar is in ZAP-Docs.
:::

## Open het configuratiebestand

Om bouwlimieten aan te passen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je Palworld server.
2. Ga naar `Configs`.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste wereld- en gameplay-instellingen voor je Palworld server, inclusief verschillende bouwgerelateerde configuratie-items.

## Bewerk de bouwlimietinstellingen

De relevante waarden staan in de sectie `OptionSettings` in `PalWorldSettings.ini`.

### Relevante configuratiesleutels

Gebruik de volgende instellingen om bouwlimieten en gebiedsbeperkingen te regelen:

| Config sleutel | Beschrijving | Voorbeeldwaarde |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Bepaalt het maximale aantal gebouwen per speler. `0` schakelt de limiet uit. | `0` |
| `BaseCampMaxNum` | Bepaalt het maximale aantal basis kampen dat op de hele server is toegestaan. | `128` |
| `bBuildAreaLimit` | Regelt of bouwbeperkingen nabij bepaalde structuren zijn ingeschakeld. | `False` |

### Voorbeeldconfiguratie

Afhankelijk van de inhoud van je huidige bestand maken deze waarden meestal deel uit van de regel `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Als je bestand al een langere `OptionSettings`-regel bevat, verwijder dan niet de andere bestaande waarden. Je hoeft alleen de relevante items binnen diezelfde instellingenblok te wijzigen of toe te voegen.

### Wat elke waarde doet

| Instelling | Effect |
| --- | --- |
| `MaxBuildingLimitNum=0` | Verwijdert de bouwlimiet per speler |
| `MaxBuildingLimitNum=[jouw_nummer]` | Beperkt elke speler tot het opgegeven aantal gebouwen |
| `BaseCampMaxNum=[jouw_nummer]` | Bepaalt het totale aantal basis kampen dat serverbreed is toegestaan |
| `bBuildAreaLimit=True` | Voorkomt bouwen nabij beperkte structuren zoals snelreis-punten |
| `bBuildAreaLimit=False` | Schakelt die gebiedsbeperking uit |

:::caution Houd de Bestaande Syntax Ongewijzigd
`PalWorldSettings.ini` is gevoelig voor de opmaak. Zorg dat je alleen de waarden wijzigt die nodig zijn en behoud de bestaande komma’s, haakjes en de algemene `OptionSettings=(...)` structuur.
:::

## Sla je wijzigingen op

Na het aanpassen van de waarden:

1. Sla het bestand op in de sectie `Configs`.
2. Controleer de regel nogmaals op opmaakfouten.

Als de syntax niet klopt, kan de server de gewijzigde instellingen negeren of niet correct toepassen.

### Voorbeeld aangepaste waarden

Hier is een voorbeeld dat elke speler beperkt tot `5000` gebouwen, maximaal `20` basis kampen op de server toestaat en de beperkte bouwzones ingeschakeld houdt:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Hier is een ander voorbeeld dat de bouwlimiet per speler verwijdert en gebiedsbeperkingen uitschakelt:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Herstart de server

Na het opslaan van de configuratie moet je je Palworld server herstarten zodat de nieuwe instellingen worden geladen.

In de ZAP-Hosting game server administratie:

1. stop de server als deze nog draait
2. start de server opnieuw

Een volledige herstart is vereist om wijzigingen in `PalWorldSettings.ini` door te voeren.

:::tip Wijzigingen Betrouwbaar Toepassen
Als je meerdere configuratiewijzigingen tegelijk maakt, is het slim om eerst alle aanpassingen op te slaan en daarna één keer te herstarten. Dit voorkomt onnodige downtime.
:::

## Controleer de nieuwe limieten

Zodra de server weer online is, verbind je met de server en test je het nieuwe bouwgedrag.

Controleer of:

- spelers meer of minder structuren kunnen plaatsen dan voorheen
- het totale aantal basis kampen overeenkomt met je ingestelde waarde
- bouwen nabij beperkte structuren is toegestaan of geblokkeerd volgens `bBuildAreaLimit`

Als de wijzigingen niet lijken te werken, open dan `PalWorldSettings.ini` opnieuw en controleer of:

- de waarden correct zijn opgeslagen
- de sleutels binnen het `OptionSettings` blok staan
- de server volledig is herstart na de wijziging

## Configuratie referentie

| Bestand | Locatie in ZAP-Hosting | Vereiste actie na bewerken |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` in je game server administratie | Herstart de server |

| Instelling | Aanbevolen gebruik |
| --- | --- |
| `MaxBuildingLimitNum` | Gebruik dit om bouwlimieten per speler te regelen |
| `BaseCampMaxNum` | Gebruik dit om het totale aantal basis kampen op de server te regelen |
| `bBuildAreaLimit` | Gebruik dit om bouwen nabij beschermde mapstructuren toe te staan of te beperken |

## Conclusie

Gefeliciteerd, je hebt de bouwlimieten op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂