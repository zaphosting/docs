---
id: palworld-enemy-drop-rate
title: "Palworld: Enemy Drop Rate"
description: "Leer hoe je de Palworld enemy drop rate aanpast op je Palworld game server door de juiste config waarde te wijzigen voor een betere lootbalans. -> Leer nu meer"
sidebar_label: Palworld: Enemy Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

`EnemyDropItemRate` bepaalt hoeveel loot vijanden droppen in Palworld. In deze gids leer je hoe je handmatig het juiste configuratiebestand aanpast in je ZAP-Hosting game server administratie en de nieuwe enemy drop rate succesvol toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Voordat je begint, zorg dat je toegang hebt tot je Palworld game server administratiepaneel en toestemming om serverconfiguratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze setup wordt uitgevoerd door handmatig het serverconfiguratiebestand te bewerken. Het relevante bestand vind je in je ZAP-Hosting game server administratie onder `Configs`.
:::

## Locate the Configuration File

Om de enemy drop rate te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Open de Configs Sectie

Log in op je ZAP-Hosting game server administratie en open je Palworld server. Navigeer vervolgens naar de sectie `Configs`, waar de beschikbare configuratiebestanden worden weergegeven.

### Selecteer `PalWorldSettings.ini`

Open het bestand `PalWorldSettings.ini` vanuit de `Configs` sectie. Dit bestand bevat de belangrijkste gameplay configuratiewaarden voor je Palworld game server, inclusief loot- en drop-gerelateerde instellingen.

:::note Overzicht Configuratiebestand
Op Palworld dedicated servers worden gameplay-instellingen meestal opgeslagen in `PalWorldSettings.ini`. De loot multiplier voor vijanden wordt daar ingesteld via de `EnemyDropItemRate` entry.
:::

## Edit the Enemy Drop Rate

Nu je het juiste bestand hebt geopend, kun je de loot drop multiplier aanpassen.

### Vind de Juiste Instelling

Zoek in `PalWorldSettings.ini` naar de regel `OptionSettings` en vind de volgende sleutel:

```ini
EnemyDropItemRate=1.000000
```

Als de sleutel al aanwezig is, wijzig dan de waarde naar jouw gewenste multiplier.

### Stel Je Gewenste Multiplier In

`EnemyDropItemRate` gebruikt een numerieke multiplier:

| Config key | Standaardwaarde | Voorbeeldwaarde | Effect |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Vijanden droppen twee keer zoveel items |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Vijanden droppen minder items |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Vijanden droppen drie keer zoveel items |

Om bijvoorbeeld de loot drops van verslagen vijanden, wilde Pals en bazen te verdubbelen, stel je in:

```ini
EnemyDropItemRate=2.000000
```

Als je de volledige `OptionSettings` entry bewerkt, kan het er ongeveer zo uitzien:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Bestaande Instellingen Ongewijzigd Laten
In veel Palworld serverconfiguraties bevat `OptionSettings` meerdere waarden in één regel. Pas alleen de waarde van `EnemyDropItemRate` aan en verwijder geen komma’s, haakjes of andere bestaande instellingen, want dit kan de configuratie laten falen.
:::

## Review Related Drop Limits

Hogere loot multipliers kunnen het aantal items dat op de grond valt verhogen. Dit kan de serverprestaties beïnvloeden, vooral tijdens zware gevechten of bazen.

### Controleer `DropItemMaxNum`

Als je server al veel items tegelijk laat vallen, controleer dan de instelling `DropItemMaxNum` in hetzelfde configuratiebestand.

| Config key | Doel |
| --- | --- |
| `EnemyDropItemRate` | Vermenigvuldigt de loot die vijanden droppen |
| `DropItemMaxNum` | Beperkt hoeveel items er tegelijk op de grond kunnen liggen |

:::tip Balans Loot en Performance
Als je `EnemyDropItemRate` flink verhoogt, zorg er dan voor dat `DropItemMaxNum` op een redelijk niveau blijft om te voorkomen dat er te veel items tegelijk op de grond liggen en de performance lijdt.
:::

## Save and Apply the Changes

Na het bewerken van de configuratie, sla je het bestand `PalWorldSettings.ini` op in de sectie `Configs`.

### Herstart de Server

Zodra het bestand is opgeslagen, herstart je je Palworld server zodat de nieuwe instelling wordt geladen.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console commando | Geen geverifieerd commando nodig |

:::info Herstart Vereist
Wijzigingen in `PalWorldSettings.ini` worden niet direct tijdens runtime toegepast. Je moet de server herstarten nadat je het bestand hebt opgeslagen.
:::

## Verify the New Drop Rate

Na de herstart, join je je Palworld server en versla je vijanden om te controleren of de nieuwe loot multiplier werkt zoals verwacht.

Als de drop hoeveelheid niet lijkt te veranderen, open dan opnieuw `PalWorldSettings.ini` en controleer of:

- `EnemyDropItemRate` correct gespeld is
- de waarde binnen de juiste `OptionSettings` configuratie staat
- het bestand succesvol is opgeslagen
- de server is herstart na de wijziging

## Conclusion

Gefeliciteerd, je hebt de enemy drop rate op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂