---
id: palworld-collection-drop-rate
title: "Palworld: Collection Drop Rate"
description: "Leer hoe je Palworld collectie-instellingen aanpast, verzamelde resources verhoogt en respawns versnelt op je Palworld game server. -> Leer nu meer"
sidebar_label: Palworld: Collection Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld geeft je controle over hoeveel resources spelers verzamelen en hoe snel verzamelbare objecten terugkomen. In deze gids leer je hoe je handmatig het juiste configuratiebestand op je ZAP-Hosting game server aanpast om de collection drop rate en gerelateerde resource-instellingen te wijzigen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zorg ervoor dat je toegang hebt tot je Palworld game server in de ZAP-Hosting webinterface en dat de server offline is of herstart kan worden nadat je de wijzigingen hebt doorgevoerd.

:::info Toegang tot Configuratiebestand
Voor Palworld worden de relevante gameplay-instellingen opgeslagen in het bestand `PalWorldSettings.ini`. In de ZAP-Hosting game server administratie vind je dit bestand onder de sectie `Configs`.
:::

## Open het Palworld Configuratiebestand

Om de collectie-instellingen te wijzigen, moet je het hoofdconfiguratiebestand van de Palworld server bewerken.

### Vind het bestand in de ZAP-Hosting interface

1. Log in op de [ZAP-Hosting webinterface](https://zap-hosting.com).
2. Open je Palworld game server.
3. Ga naar de sectie `Configs` in de serveradministratie.
4. Open het bestand met de naam `PalWorldSettings.ini`.

:::note Juiste Bestand
De collectie-gerelateerde instellingen in deze gids staan in `PalWorldSettings.ini`. Als je de verwachte instellingen niet direct ziet, staan ze meestal binnen de configuratieregel `OptionSettings`.
:::

## Pas de Collection Instellingen aan

Palworld slaat veel gameplay-opties op als key-value paren binnen de sectie `OptionSettings` van `PalWorldSettings.ini`. Om verzamelde resources te verhogen of de respawnsnelheid van resource nodes aan te passen, moet je de relevante waarden daar wijzigen.

### Relevante configuratiesleutels

Gebruik de volgende instellingen voor collectie-gerelateerd gedrag:

| Config key | Standaardwaarde | Beschrijving |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Bepaalt hoeveel items spelers krijgen van verzamelbare resources. Hogere waarden verhogen de hoeveelheid. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Bepaalt hoe snel verzamelbare objecten respawnen. Hogere waarden zorgen voor snellere terugkeer van resources. |
| `CollectionObjectHpRate` | `1.000000` | Bepaalt de HP van verzamelbare objecten zoals stenen of bomen. Hogere waarden maken ze meestal moeilijker kapot te krijgen. |

### Voorbeeld configuratiewaarden

Wil je de verzamelde resources verdubbelen en resource nodes twee keer zo snel laten respawnen, stel dan beide waarden in op `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Wil je ook dat verzamelbare objecten makkelijker kapot gaan, verlaag dan de HP-multiplier:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Aanbevolen Startwaarden
Een waarde van `2.000000` is een veelgebruikte startpunt voor zowel `CollectionDropRate` als `CollectionObjectRespawnSpeedRate`. Dit zorgt voor merkbaar snellere progressie zonder de Palworld gameplay te agressief te veranderen.
:::

## Pas de Wijzigingen toe in `PalWorldSettings.ini`

Na het openen van `PalWorldSettings.ini` zoek je de bestaande `OptionSettings` regel en pas je de relevante sleutels direct daarin aan.

### Voorbeeld `OptionSettings` fragment

Afhankelijk van je huidige serverconfiguratie kan de regel al veel instellingen bevatten. Je hoeft alleen de waarden voor de collectie-gerelateerde sleutels te wijzigen als ze al bestaan, of toe te voegen als ze ontbreken.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Bestaande Syntax Behouden
Zorg dat je het bestaande formaat van de `OptionSettings` regel intact houdt. Verwijder geen komma’s, haakjes of andere instellingen per ongeluk, anders kan de server de configuratie niet correct laden.
:::

## Opslaan en Herstarten van de Server

Als je klaar bent met bewerken, sla je de wijzigingen op in de sectie `Configs`.

### Herstart vereiste

Palworld past deze gameplay-configuratie niet direct toe terwijl de server draait. Je moet de server herstarten nadat je het bestand hebt opgeslagen zodat de nieuwe waarden geladen worden.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console commando | Geen geverifieerd commando nodig |

:::info Herstart Nodig
Een volledige serverherstart is vereist na het wijzigen van `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` of `CollectionObjectHpRate`. Er is geen extra in-game of console commando nodig voor deze specifieke instellingen.
:::

## Controleer het Nieuwe Collection Gedrag

Na de herstart, join je server en test je een paar verzamelbare objecten zoals bomen, stenen of erts nodes.

### Waar op te letten

- Of spelers meer materialen per verzamelactie krijgen
- Of vernietigde resource nodes sneller terugkomen dan voorheen
- Of verzamelbare objecten makkelijker of moeilijker kapot gaan als je `CollectionObjectHpRate` hebt aangepast

Is het resultaat te sterk of te zwak, ga dan terug naar `PalWorldSettings.ini` en pas de multipliers opnieuw aan.

:::tip Fijnslijpen van je Server
Wil je een meer gebalanceerde Palworld collectie setup, verhoog dan de waarden geleidelijk, bijvoorbeeld van `1.000000` naar `1.500000`, voordat je hogere multipliers gebruikt.
:::

## Configuratie Referentie

De volgende tabel vat de belangrijkste waarden samen voor deze Palworld collectie setup.

| Instelling | Voorbeeld | Effect |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Standaard | Standaard hoeveelheid verzamelde resources |
| `CollectionDropRate=2.000000` | Verhoogd | Verdubbelde verzamelde resources |
| `CollectionObjectRespawnSpeedRate=1.000000` | Standaard | Standaard respawnsnelheid |
| `CollectionObjectRespawnSpeedRate=2.000000` | Verhoogd | Snellere resource respawn |
| `CollectionObjectHpRate=1.000000` | Standaard | Standaard HP van verzamelbare objecten |
| `CollectionObjectHpRate=0.500000` | Verlaagd | Verzamelbare objecten gaan sneller kapot |

## Conclusion

Gefeliciteerd, je hebt de collection drop rate op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂