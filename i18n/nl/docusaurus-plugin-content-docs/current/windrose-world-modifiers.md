---
id: windrose-world-modifiers
title: "Windrose: Wereldmodifiers"
description: "Configureer Windrose wereldmodifiers met een volledige parameterreferentie voor float-waarden, gevechtsinstellingen en co-op schaalparameters voorbeeld -> Leer nu meer"
sidebar_label: Wereldmodifiers
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windrose custom wereldmodifiers laten je gevecht, zeeslagen, verkenning, quests en co-op schaalverdeling gedetailleerd aanpassen. In deze gids leer je hoe je het bestand `WorldDescription.json` bewerkt, elke parameter begrijpt en aangepaste instellingen toepast op je Windrose gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, zorg dat je het volgende hebt:

- Een actieve Windrose gameserver bij ZAP-Hosting
- Toegang tot het gameserverbeheer
- Je server gestopt voordat je bestanden bewerkt
- Toegang tot de **Configs** of **Bestandsbeheer** sectie in het gameserverbeheer

:::info Locatie configuratiebestand
Custom wereldmodifiers worden opgeslagen in het bestand `WorldDescription.json` onder de `WorldSettings` sectie.
:::

:::caution Stop de server eerst
Stop altijd je server voordat je `WorldDescription.json` bewerkt. Dit voorkomt bestandscorruptie of overschreven wijzigingen tijdens het opstarten of autosave.
:::

## Wereldmodifiers begrijpen

Elke custom instelling wordt individueel gedefinieerd in `WorldDescription.json` onder `WorldSettings`. Het spel onderscheidt waarden op type:

- `float` voor numerieke vermenigvuldigers zoals gezondheid of schade
- `bool` voor true of false opties
- `tag` voor benoemde moeilijkheidswaarden zoals gevechtsmoeilijkheid

Deze structuur is belangrijk omdat elke parameter in de juiste sectie moet staan. Als je een `float` waarde in `bool` zet, of een ongeldige tag gebruikt, werkt de instelling mogelijk niet zoals verwacht.

:::note Parameter Types
Als je het woord *parameter* niet kent: het betekent simpelweg een configureerbare waarde die het spel gebruikt. In deze gids bestuurt elke parameter een deel van de wereldmoeilijkheid of gameplaygedrag.
:::

## Open het wereldconfiguratiebestand

Om custom wereldmodifiers toe te passen, moet je het juiste wereldbestand bewerken.

1. Stop je Windrose server in het gameserverbeheer.
2. Open de **Bestandsbeheer**.
3. Navigeer naar het volgende pad:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Vervang de placeholders als volgt:

| Placeholder | Betekenis |
| --- | --- |
| `[your_game_version]` | De map van je huidige Windrose gameversie |
| `[your_world_id]` | De ID van de wereld die je wilt aanpassen |

:::tip De juiste wereld vinden
Als je meerdere werelden hebt, zorg dan dat je het bestand `WorldDescription.json` in de juiste `[your_world_id]` map bewerkt. Anders beïnvloeden je wijzigingen een andere save.
:::

## Bewerk de WorldSettings sectie

In `WorldDescription.json` zoek je de `WorldSettings` sectie. Voeg daar je custom waarden toe of pas ze aan.

Gebruik de volgende structuur:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Start je server opnieuw nadat je het bestand hebt opgeslagen.

:::info Gedrag van presets
Als je handmatig een custom waarde instelt, verandert `WorldPresetType` automatisch naar `Custom` bij de volgende serverstart. Wil je een schone preset gebruiken in plaats van custom waarden, gebruik dan de juiste presetconfiguratie en meng deze methodes niet.
:::

## Volledige parameterreferentie

De volgende tabellen geven een complete referentie van alle beschikbare custom wereldmodifiers.

### Gevechtsparameters

| Parameter | Sectie | Standaard | Bereik | Effect |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Vermenigvuldiger voor vijandelijke gezondheid |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Vermenigvuldiger voor vijandelijke schade |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Boss agressie en moeilijkheid van ontmoetingen |

`CombatDifficulty` moet als tagwaarde geschreven worden, bijvoorbeeld:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Beschikbare waarden:

| Moeilijkheid | TagName waarde |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Zeeslagparameters

| Parameter | Sectie | Standaard | Bereik | Effect |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Vermenigvuldiger voor vijandelijke scheepsgezondheid |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Vermenigvuldiger voor vijandelijke scheepsschade |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Aantal vijandelijke matrozen om te verslaan bij enteren |

Deze instellingen zijn handig als je zeeslagen makkelijker wilt maken voor kleinere bemanningen of juist veel uitdagender voor ervaren groepen.

### Co-Op schaalparameters

| Parameter | Sectie | Standaard | Bereik | Effect |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Past vijandelijke gezondheid en houdingverlies aan op basis van spelersaantal |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Past vijandelijke scheepsgezondheid aan op basis van spelersaantal |

Deze waarden zijn vooral nuttig voor grotere bemanningen. Ze zorgen dat het gevecht in balans blijft als er meer spelers meedoen.

### Verkenningsparameters

| Parameter | Sectie | Standaard | Effect |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Schakelt kaartmarkeringen voor interessante punten uit |

:::note EasyExplore naamgeving
Ondanks de naam maakt het instellen van `EasyExplore` op `true` verkenning juist moeilijker, omdat kaartmarkeringen voor interessante punten worden uitgeschakeld. Dit is effectief een immersive verkenningsmodus.
:::

### Questparameters

| Parameter | Sectie | Standaard | Effect |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Als één speler een co-op quest voltooit, wordt deze automatisch voor alle andere spelers met die quest ook voltooid |

Deze instelling is handig als je groepsprogressie wilt vereenvoudigen of juist wilt dat elke speler doelen individueel moet voltooien.

## Vermenigvuldiger schaalreferentie

Als je niet zeker weet hoe een `float` waarde de gameplay verandert, gebruik dan deze snelle schaalreferentie.

| Waarde | Effect |
| --- | --- |
| `0.5` | `50%` - merkbaar makkelijker |
| `1.0` | `100%` - standaard of normaal |
| `2.0` | `200%` - merkbaar moeilijker |
| `5.0` | `500%` - extreem moeilijk |

Deze tabel is een praktisch voorbeeld om je wereld in balans te brengen. Lagere waarden verlagen de moeilijkheid, hogere waarden verhogen deze flink.

:::tip Begin met kleine aanpassingen
Als je balanswijzigingen test, verhoog of verlaag dan één parameter tegelijk. Zo zie je makkelijker welke instelling het verschil maakt.
:::

## Voorbeeldconfiguraties

De volgende voorbeelden helpen je bij het maken van je eigen custom setup.

### Casual Crew

Deze setup verlaagt de gevechtsdruk, houdt quest delen aan en maakt enteren makkelijker.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore Seas

Deze setup verhoogt zowel land- als zeeslagmoeilijkheid, schakelt gedeelde questvoltooiing uit en zet immersive verkenning aan.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Grote Groep Schaling

Deze setup is handig voor grotere groepen, bijvoorbeeld 8 spelers, waarbij de standaard schaalverdeling te makkelijk kan aanvoelen.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Beste praktijken voor het bewerken van waarden

### Gebruik geldige bereiken

Elke `float` parameter ondersteunt alleen een bepaald bereik. Blijf binnen het gedocumenteerde bereik om onverwacht gedrag te voorkomen.

| Parameter | Minimum | Maximum |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Ongeldige waarden
Als je niet-ondersteunde waarden gebruikt, onjuiste opmaak toepast of een parameter in de verkeerde sectie zet, kan het spel de instelling negeren of niet correct toepassen.
:::

### Houd JSON-opmaak correct

Bij het bewerken van `WorldDescription.json` zorg je dat:

- Alle sleutels tussen dubbele aanhalingstekens blijven
- Komma’s correct geplaatst zijn
- Haken `{}` en blokhaken correct gesloten zijn
- `true` en `false` in kleine letters geschreven zijn
- Decimale waarden een punt gebruiken, bijvoorbeeld `1.5`

Een kapot JSON-bestand kan voorkomen dat de wereldconfiguratie correct laadt.

### Herstart na opslaan

Na het bewerken:

1. Sla `WorldDescription.json` op
2. Start je server opnieuw
3. Join de server en test de wijzigingen in de gameplay

Sommige waarden zijn het makkelijkst te controleren in gevechten, enteren of co-op sessies, niet direct bij het inloggen.

## Configuraties beheren in het gameserverbeheer

Je kunt Windrose configuratiebestanden direct beheren in het ZAP-Hosting gameserverbeheer via de beschikbare config- en bestandsopties. Dit is de aanbevolen manier om `WorldDescription.json` te bewerken als je geen externe tools wilt gebruiken.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Als de exacte config niet direct zichtbaar is, gebruik dan de **Bestandsbeheer** en navigeer handmatig naar het wereldbestandspad zoals eerder in deze gids beschreven.

:::info Configuratiebeheer
Afhankelijk van de huidige gameserverinterface en je wereldsetup kan de exacte bestandslijst verschillen. Als een specifieke config niet zichtbaar is, gebruik dan het bestandspad direct in plaats van te denken dat de functie ontbreekt.
:::

## Problemen oplossen

### Wijzigingen worden niet toegepast

Als je modifiers niet actief zijn na herstart, controleer dan:

- Of je het juiste `WorldDescription.json` hebt bewerkt
- Of de server gestopt was voor het bewerken
- Of de JSON-syntaxis geldig is
- Of elke parameter in de juiste sectie staat: `float`, `bool` of `tag`
- Of de server volledig opnieuw is gestart na opslaan

### Moeilijkheid voelt onveranderd

Sommige modifiers zijn beter merkbaar dan andere. Bijvoorbeeld:

- `MobHealthMultiplier` is het makkelijkst te zien in regulier gevecht
- `ShipHealthMultiplier` is alleen merkbaar tijdens zeeslagen
- `Coop_StatsCorrectionModifier` valt het meest op met meerdere spelers
- `EasyExplore` beïnvloedt alleen verkenningsgedrag en kaartmarkeringen

### Preset verandert naar Custom

Dit is verwacht gedrag zodra je handmatig custom waarden instelt. Het spel schakelt automatisch de wereldpreset naar `Custom` bij de volgende start.

## Conclusie

Gefeliciteerd, je hebt Windrose wereldmodifiers succesvol geconfigureerd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂