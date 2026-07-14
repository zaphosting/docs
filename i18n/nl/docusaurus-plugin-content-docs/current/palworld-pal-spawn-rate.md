---
id: palworld-pal-spawn-rate
title: "Palworld: Pal Spawn Rate"
description: "Learn how to change the Palworld pal spawn rate by editing the spawn setting for Pal frequency on your server -> Learn more now"
sidebar_label: Palworld: Pal Spawn Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld laat je bepalen hoe vaak Pals in jouw wereld verschijnen via een serverconfiguratie-instelling. In deze gids leer je hoe je het juiste configuratiebestand in de ZAP-Hosting game server administratie aanpast en veilig een nieuwe Pal spawn rate instelt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Voordat je begint, zorg ervoor dat:

- je toegang hebt tot je Palworld game server in de ZAP-Hosting webinterface
- je server offline is of dat je bereid bent deze te herstarten na het aanbrengen van wijzigingen
- je begrijpt dat hogere spawnwaarden de serverbelasting kunnen verhogen en de performance kunnen verminderen

:::info Handmatige Configuratie Nodig
Deze wijziging voer je handmatig uit door het serverconfiguratiebestand te bewerken onder **Configs** in je game server administratie. Er is geen aparte schuifregelaar in het ZAP-Hosting paneel voor deze specifieke instelling.
:::

## Open het Palworld Configuratiebestand

Om de Pal spawn rate te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In je ZAP-Hosting game server administratie:

1. Open je **Palworld** server.
2. Ga naar **Configs**.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-gerelateerde serverinstellingen, inclusief de Pal spawn multiplier.

:::note Locatie Configuratiebestand
Voor ZAP-Hosting Palworld servers is het relevante bestand direct beschikbaar via de **Configs** sectie in de game server administratie, zoals geleverd bij de server setup.
:::

## Wijzig de Pal Spawn Rate

De instelling die je nodig hebt is `PalSpawnNumRate`.

### Wat doet `PalSpawnNumRate`

`PalSpawnNumRate` regelt de spawn frequentie multiplier van Pals op je server.

| Config key | Standaardwaarde | Beschrijving |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Bepaalt hoeveel Pals er in de wereld verschijnen. Hogere waarden verhogen de spawn frequentie. |

In Palworld maakt deze waarde meestal deel uit van de `OptionSettings` regel in `PalWorldSettings.ini`.

### Pas de Instelling aan

Open `PalWorldSettings.ini` en zoek de sectie `OptionSettings=`. Zoek binnen die sectie de invoer `PalSpawnNumRate`.

Als de invoer al bestaat, wijzig dan de waarde. Bijvoorbeeld:

```ini
PalSpawnNumRate=1.000000
```

Je kunt deze verhogen zoals dit:

```ini
PalSpawnNumRate=2.000000
```

Dit voorbeeld verdubbelt de Pal spawn multiplier ten opzichte van de standaardwaarde.

:::tip Aanbevolen Startwaarden
Begin met kleine verhogingen zoals `1.500000` of `2.000000` en test de serverperformance voordat je agressievere waarden gebruikt.
:::

### Voorbeeld Configuratiefragment

Afhankelijk van de inhoud van je bestand kan de instelling verschijnen binnen een lange `OptionSettings` regel zoals deze:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Bestaande Syntax Behouden
Verwijder geen komma’s, haakjes of andere bestaande waarden uit de `OptionSettings` regel. Onjuiste opmaak in `PalWorldSettings.ini` kan voorkomen dat de server de configuratie correct laadt.
:::

## Aanbevolen Waarden en Performance Impact

Je kunt verschillende waarden gebruiken afhankelijk van de gameplay-ervaring die je wilt creëren.

| Waarde | Effect |
| --- | --- |
| `1.000000` | Standaard Pal spawn rate |
| `1.500000` | Licht verhoogde spawn frequentie |
| `2.000000` | Duidelijk meer Pals in de wereld |
| `3.000000` of hoger | Sterke toename van spawns, kan performance beïnvloeden |

Hogere waarden kunnen de wereld actiever laten aanvoelen, maar verhogen ook het aantal entiteiten dat de server moet verwerken.

:::danger Hoge Spawnwaarden Kunnen Stabiliteit Verminderen
Zeer hoge spawninstellingen kunnen de serverperformance negatief beïnvloeden, vooral op drukke servers of in combinatie met andere veeleisende wereldinstellingen. Als je lag merkt, verlaag dan de waarde weer en herstart de server.
:::

## Opslaan en Server Herstarten

Na het bewerken van het bestand:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld server via de ZAP-Hosting game server administratie.

Een herstart is nodig om de nieuwe Pal spawn rate actief te maken.

## Controleer de Wijziging

Zodra de server weer online is, join je je Palworld server en observeer je de wereldactiviteit op plekken waar normaal Pals verschijnen.

Als de spawn rate niet lijkt te zijn veranderd:

- open `PalWorldSettings.ini` opnieuw en controleer of `PalSpawnNumRate` aanwezig is
- zorg dat de waarde binnen de juiste `OptionSettings` sectie staat
- controleer of het bestand succesvol is opgeslagen
- herstart de server opnieuw nadat je de wijziging hebt bevestigd

## Configuratie Referentie

| Item | Waarde |
| --- | --- |
| Configuratiebestand | `PalWorldSettings.ini` |
| ZAP-Hosting locatie | Game server administratie → `Configs` |
| Instelling naam | `PalSpawnNumRate` |
| Standaardwaarde | `1.000000` |
| Herstart vereist | Ja |

## Conclusion

Gefeliciteerd, je hebt de Pal spawn rate op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂