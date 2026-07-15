---
id: palworld-equipment-durability-rate
title: "Palworld: Uithoudingsvermogen van Uitrusting"
description: "Leer hoe je het uithoudingsvermogen van uitrusting kunt aanpassen en de uithoudingsverhouding op je Palworld-server kunt wijzigen door de juiste config-waarde te bewerken. -> Leer nu meer"
sidebar_label: Palworld: Uithoudingsvermogen van Uitrusting
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In Palworld bepaalt de uithoudingsverhouding van uitrusting hoe snel je gereedschap, wapens en armor slijten tijdens gebruik. In deze gids leer je hoe je de instelling `EquipmentDurabilityDamageRate` handmatig aanpast in de configuratie van je ZAP-Hosting Palworld-server en deze wijziging correct toepast.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot de administratie van je Palworld-gameserver in de ZAP-Hosting webinterface. Je hebt ook toestemming nodig om je serverconfiguratiebestanden te bewerken onder **Configs**.

:::info Handmatige Configuratie Vereist
Deze instelling moet handmatig worden aangepast in het Palworld-configuratiebestand. Er is geen aparte opdracht die in-game uitgevoerd moet worden voor deze specifieke wijziging.
:::

## Begrijpen van de uithoudingsinstelling

Palworld slaat veel gameplay-instellingen op in het configuratiebestand `PalWorldSettings.ini`. De instelling die relevant is voor het uithoudingsvermogen van uitrusting is:

- `EquipmentDurabilityDamageRate`

Deze waarde fungeert als een vermenigvuldiger voor het slijtageverlies:

| Config key | Beschrijving | Standaardwaarde |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Bepaalt hoe snel uitrusting slijtage verliest | `1.000000` |

Lagere waarden verminderen het slijtageverlies, waardoor je uitrusting langer meegaat. Een waarde van `0.000000` schakelt slijtageverlies voor uitrusting volledig uit.

:::note Wat deze instelling beïnvloedt
Deze instelling verandert het slijtageverliespercentage voor uitrusting zoals gereedschap, wapens en armor. Het verhoogt niet de schade van items, reparatiesnelheid of itemkwaliteit.
:::

## Open het Palworld-configuratiebestand

Om de instelling te wijzigen, moet je het hoofdconfiguratiebestand van de Palworld-server bewerken via de ZAP-Hosting gameserveradministratie.

### Vind het bestand in de ZAP-Hosting interface

1. Log in op de ZAP-Hosting website.
2. Open de administratie van je **Palworld** gameserver.
3. Ga naar **Configs**.
4. Open het bestand `PalWorldSettings.ini`.

Dit is het bestand waarin Palworld gameplay-waarden zoals uithoudingsvermogen, stamina, schade en andere wereldinstellingen worden opgeslagen.

## Bewerk de uithoudingsverhouding van uitrusting

Als je `PalWorldSettings.ini` hebt geopend, zoek dan naar de regel `OptionSettings`. Palworld slaat gameplay-instellingen meestal op als komma-gescheiden items binnen deze sectie.

### Voeg de config-entry toe of wijzig deze

Zorg ervoor dat de volgende entry aanwezig is binnen `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Als de sleutel al bestaat, vervang dan de huidige waarde door jouw gewenste waarde. Als deze ontbreekt, voeg hem dan toe binnen het bestaande `OptionSettings=(...)` blok.

### Voorbeeldwaarden

Je kunt de volgende waarden gebruiken, afhankelijk van het gewenste resultaat:

| Waarde | Effect |
| --- | --- |
| `1.000000` | Standaard slijtageverlies |
| `0.500000` | Uitrusting gaat ongeveer twee keer zo lang mee |
| `0.250000` | Uitrusting gaat ongeveer vier keer zo lang mee |
| `0.000000` | Uitrusting wordt onbreekbaar |

### Voorbeeldconfiguratiefragment

De exacte inhoud van je `OptionSettings`-regel kan verschillen afhankelijk van je serverconfiguratie, maar de uithoudingsinstelling zou in dezelfde komma-gescheiden lijst moeten staan, bijvoorbeeld:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Bestaande opmaak behouden
Verwijder geen andere waarden uit de `OptionSettings`-regel bij het bewerken van het bestand. Palworld verwacht dat deze instellingen in de juiste komma-gescheiden opmaak blijven staan.
:::

## Sla de wijzigingen op en pas ze toe

Sla na het bewerken van het configuratiebestand je wijzigingen op in de ZAP-Hosting interface.

### Herstart de server

Om de nieuwe uithoudingsinstelling toe te passen, herstart je je Palworld-server via de gameserveradministratie.

Zonder herstart wordt de bijgewerkte configuratie meestal niet door de server geladen.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| In-game commando uitvoeren | Nee |
| Server opnieuw installeren | Nee |

:::tip Test wijzigingen eerst met een kleine aanpassing
Als je niet zeker weet welke uithoudingswaarde het beste bij jouw speelstijl past, begin dan met `0.500000`. Dit geeft een merkbare verbetering zonder de mechaniek volledig uit te schakelen.
:::

## Problemen oplossen

Als het nieuwe uithoudingsgedrag van uitrusting niet wordt toegepast na het herstarten, controleer dan de volgende punten.

### Controleer de config-sleutel

Zorg dat de sleutel exact zo geschreven is:

```ini
EquipmentDurabilityDamageRate
```

Palworld-configuratiesleutels zijn in de praktijk hoofdlettergevoelig voor betrouwbare administratie, dus kopieer de naam precies zoals hierboven.

### Controleer de plaatsing in `OptionSettings`

De waarde moet binnen de sectie `OptionSettings=(...)` van `PalWorldSettings.ini` staan. Als je hem buiten dit blok plaatst, kan de server hem negeren.

### Bevestig dat het bestand is opgeslagen

Controleer na het bewerken in **Configs** of je wijzigingen nog aanwezig zijn bij het opnieuw openen van `PalWorldSettings.ini`. Zo niet, dan is het bestand mogelijk niet succesvol opgeslagen.

### Herstart opnieuw indien nodig

Als er spelers online waren tijdens de wijziging of de server niet schoon herstartte, voer dan nogmaals een volledige herstart uit via het serverbeheer.

## Conclusie

Gefeliciteerd, je hebt de uithoudingsverhouding van uitrusting op je Palworld-server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂