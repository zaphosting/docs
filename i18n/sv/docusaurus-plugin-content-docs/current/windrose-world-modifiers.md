---
id: windrose-world-modifiers
title: "Windrose: Världsmodifierare"
description: "Konfigurera Windrose världsmodifierare med full parameterreferens för flyttal, stridsinställningar och co-op-skalningsparametrar exempel -> Lär dig mer nu"
sidebar_label: Världsmodifierare
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windrose anpassade världsmodifierare låter dig justera strid, sjöstrid, utforskning, uppdrag och co-op-skalning i detalj. I den här guiden lär du dig hur du redigerar filen `WorldDescription.json`, förstår varje parameter och tillämpar egna inställningar på din Windrose-spelserver.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Förberedelser

Innan du börjar, se till att du har följande:

- En aktiv Windrose-spelserver hos ZAP-Hosting
- Tillgång till spelserverns hantering
- Din server stoppad innan du redigerar filer
- Tillgång till området **Configs** eller **File Manager** i spelserverhanteringen

:::info Plats för konfigurationsfil
Anpassade världsmodifierare sparas i filen `WorldDescription.json` under blocket `WorldSettings`.
:::

:::caution Stoppa servern först
Du bör alltid stoppa din server innan du redigerar `WorldDescription.json`. Detta förhindrar filkorruption eller att ändringar skrivs över under uppstart eller autosparning.
:::

## Förstå världsmodifierare

Varje anpassad inställning definieras individuellt i `WorldDescription.json` under `WorldSettings`. Spelet skiljer värden efter typ:

- `float` för numeriska multiplikatorer som hälsa eller skada
- `bool` för sant eller falskt-alternativ
- `tag` för namngivna svårighetsvärden som stridssvårighet

Denna struktur är viktig eftersom varje parameter måste placeras i rätt sektion. Om du placerar ett `float`-värde i `bool` eller använder en ogiltig tagg kan inställningen sluta fungera som förväntat.

:::note Parametertyper
Om du inte är bekant med termen *parameter* betyder det helt enkelt ett konfigurerbart värde som spelet använder. I den här guiden styr varje parameter en del av världens svårighet eller spelbeteende.
:::

## Öppna världskonfigurationsfilen

För att använda anpassade världsmodifierare måste du redigera rätt världsfil.

1. Stoppa din Windrose-server i spelserverhanteringen.
2. Öppna **File Manager**.
3. Navigera till följande sökväg:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Byt ut platshållarna enligt följande:

| Platshållare | Betydelse |
| --- | --- |
| `[your_game_version]` | Din aktuella Windrose-spelversionsmapp |
| `[your_world_id]` | ID för den värld du vill ändra |

:::tip Hitta rätt värld
Om du har flera världar, se till att du redigerar filen `WorldDescription.json` i rätt `[your_world_id]`-mapp. Annars påverkar dina ändringar en annan sparfil.
:::

## Redigera blocket WorldSettings

I `WorldDescription.json`, hitta blocket `WorldSettings`. Lägg till eller justera dina egna värden där.

Använd följande struktur:

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

Efter att du sparat filen, starta din server igen.

:::info Förinställd beteende
Om du manuellt sätter något anpassat värde ändras `WorldPresetType` automatiskt till `Custom` vid nästa serverstart. Om du vill använda en ren förinställning istället för anpassade värden bör du använda rätt förinställningskonfiguration istället för att blanda metoder.
:::

## Fullständig parameterreferens

Följande tabeller ger en komplett referens för alla tillgängliga anpassade världsmodifierare.

### Stridsparametrar

| Parameter | Sektion | Standard | Intervall | Effekt |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Fiendens hälsomultiplikator |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Fiendens skademultiplikator |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Boss-aggressivitet och mötessvårighet |

`CombatDifficulty` måste skrivas som ett tagg-värde, till exempel:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Tillgängliga värden:

| Svårighet | TagName-värde |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Sjöstridsparametrar

| Parameter | Sektion | Standard | Intervall | Effekt |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Fiendens skeppshälsomultiplikator |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Fiendens skeppsskademultiplikator |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Antal fiendesjömän att besegra vid bordning |

Dessa inställningar är användbara om du vill göra sjöstrider enklare för mindre besättningar eller mycket mer krävande för erfarna grupper.

### Co-Op-skalningsparametrar

| Parameter | Sektion | Standard | Intervall | Effekt |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Justerar fiendens hälsa och hållningsförlust baserat på antal spelare |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Justerar fiendens skeppshälsa baserat på antal spelare |

Dessa värden är särskilt användbara för större besättningar. De låter dig hålla strider balanserade när fler spelare ansluter till världen.

### Utforskningsparametrar

| Parameter | Sektion | Standard | Effekt |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Inaktiverar kartmarkörer för intressanta platser |

:::note EasyExplore-namn
Trots namnet gör inställningen `EasyExplore` satt till `true` utforskningen svårare eftersom kartmarkörer för intressanta platser inaktiveras. Detta är i praktiken ett immersivt utforskningsläge.
:::

### Uppdragsparametrar

| Parameter | Sektion | Standard | Effekt |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | När en spelare slutför ett co-op-uppdrag slutförs det automatiskt för alla andra spelare som har det aktivt |

Denna inställning är användbar om du vill förenkla gruppframsteg eller kräva att varje spelare slutför uppgifter individuellt.

## Multiplikatorskala referens

Om du är osäker på hur ett `float`-värde påverkar spelet, använd denna snabba skalreferens.

| Värde | Effekt |
| --- | --- |
| `0.5` | `50%` - märkbart enklare |
| `1.0` | `100%` - standard eller normal |
| `2.0` | `200%` - märkbart svårare |
| `5.0` | `500%` - extremt svårt |

Denna tabell är ett praktiskt exempel för att balansera din värld. Lägre värden minskar svårigheten, medan högre värden ökar den avsevärt.

:::tip Börja med små justeringar
Om du testar balansändringar, höj eller sänk en parameter i taget. Det gör det lättare att förstå vilken inställning som orsakade skillnaden i spelupplevelsen.
:::

## Exempel på konfigurationer

Följande exempel kan hjälpa dig att bygga din egen anpassade setup.

### Casual Crew

Denna setup sänker stridstrycket, behåller delade uppdrag aktiverade och gör bordning enklare.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore Seas

Denna setup ökar både land- och sjöstridssvårigheten, inaktiverar delade uppdrag och aktiverar immersiv utforskning.

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

### Skalning för stora grupper

Denna setup är användbar för större grupper, till exempel 8 spelare, där standard-skalning kan kännas för enkel.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Bästa praxis för att redigera värden

### Använd giltiga intervall

Varje `float`-parameter stödjer endast ett definierat intervall. Att hålla sig inom dokumenterat intervall hjälper till att undvika oväntat beteende.

| Parameter | Minimum | Maximum |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Ogiltiga värden
Om du använder icke-stödda värden, felaktig formatering eller placerar en parameter i fel sektion kan spelet ignorera inställningen eller misslyckas med att tillämpa den korrekt.
:::

### Håll JSON-formatet korrekt

När du redigerar `WorldDescription.json`, se till att:

- Alla nycklar är inom dubbla citattecken
- Kommatecken är korrekt placerade
- Klammrar `{}` och hakparenteser är korrekt stängda
- `true` och `false` skrivs med små bokstäver
- Decimaltal använder punkt, till exempel `1.5`

En trasig JSON-fil kan förhindra att världskonfigurationen laddas korrekt.

### Starta om efter sparning

När du är klar med redigeringen:

1. Spara `WorldDescription.json`
2. Starta din server igen
3. Gå med i servern och testa ändringarna i spelet

Vissa värden är lättast att verifiera i strid, bordning eller co-op-sessioner snarare än direkt vid inloggning.

## Hantera konfigurationer i spelserverhanteringen

Du kan hantera Windrose-konfigurationsfiler direkt i ZAP-Hostings spelserverhantering under tillgängliga konfigurations- och filalternativ. Detta är det rekommenderade sättet att redigera `WorldDescription.json` om du inte vill använda externa verktyg.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Om den exakta konfigurationsposten inte listas direkt, använd **File Manager** och navigera manuellt till världens filsökväg som visas tidigare i guiden.

:::info Konfigurationshantering
Beroende på aktuell spelservergränssnitt och din befintliga världsetup kan den exakta fillistan variera. Om en specifik konfigurationspost inte syns, använd filvägen direkt istället för att anta att en funktion saknas.
:::

## Felsökning

### Ändringar tillämpas inte

Om dina modifierare inte är aktiva efter omstart, kontrollera följande:

- Du redigerade rätt `WorldDescription.json`
- Servern var stoppad innan redigering
- JSON-syntaxen är giltig
- Varje parameter är i rätt sektion: `float`, `bool` eller `tag`
- Servern startades om helt efter sparning

### Svårigheten känns oförändrad

Vissa modifierare märks mer än andra. Till exempel:

- `MobHealthMultiplier` märks lättast i vanlig strid
- `ShipHealthMultiplier` märks endast under sjöstrid
- `Coop_StatsCorrectionModifier` syns mest med flera spelare
- `EasyExplore` påverkar bara utforskning och kartmarkörer

### Förinställning ändrades till Custom

Detta är förväntat beteende när du manuellt sätter anpassade värden. Spelet byter automatiskt världens förinställningstyp till `Custom` vid nästa uppstart.

## Slutsats

Grattis, du har framgångsrikt konfigurerat Windrose världsmodifierare. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂