---
id: palworld-hunger-and-stamina
title: "Palworld: Hunger och Stamina"
description: "Lär dig hur du justerar Palworlds hunger- och staminaförbrukning för spelare och Pals genom att redigera din serverkonfiguration. -> Läs mer nu"
sidebar_label: "Hunger och Stamina"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur snabbt hunger och stamina förbrukas för både spelare och Pals. I den här guiden lär du dig hur du redigerar rätt serverkonfigurationsfil i ZAP-Hostings webbgränssnitt och säkert tillämpar anpassade förbrukningshastigheter.

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings spelserveradministration.

:::info Krav på konfigurationstillgång
Du behöver tillgång till serveradministrationspanelen och avsnittet `Configs` för att manuellt redigera Palworld-konfigurationsfiler.
:::

## Öppna Palworld-konfigurationsfilen

För att ändra hunger- och stamina-beteendet måste du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till avsnittet `Configs`.
3. Öppna filen `PalWorldSettings.ini`.



:::note Fil för gameplay-multiplikatorer
Inställningarna för hunger och stamina sparas i `PalWorldSettings.ini`. Dessa värden är vanligtvis en del av huvudalternativsträngen som används av dedikerade servern.
:::

## Ändra hunger- och stamina-värden

Inuti `PalWorldSettings.ini`, leta upp avsnittet för gameplay-inställningar som innehåller dina serveralternativ. Du behöver lägga till eller justera följande konfigurationsnycklar.

:::caution Viktig stavning i Palworld
Palworld använder stavningen `Decreace` i dessa konfigurationsposter. Detta är avsiktligt i serverkonfigurationsformatet, så du måste använda nycklarna exakt som visas nedan.
:::

### Tillgängliga konfigurationsnycklar

| Konfig-nyckel | Beskrivning | Standardvärde |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Styr spelarens hungerförbrukning | `1.0` |
| `PlayerStaminaDecreaceRate` | Styr spelarens staminaförbrukning | `1.0` |
| `PalStomachDecreaceRate` | Styr Pals hungerförbrukning | `1.0` |
| `PalStaminaDecreaceRate` | Styr Pals staminaförbrukning | `1.0` |

### Hur värdena fungerar

Lägre värden minskar hur snabbt hunger eller stamina förbrukas.

| Värde | Effekt |
| --- | --- |
| `1.0` | Standardförbrukning |
| `0.5` | Halverad förbrukning |
| `0.0` | Inaktiverar förbrukning helt |

:::tip Välja balanserade inställningar
Om du vill ha en mer avslappnad överlevnadsupplevelse utan att ta bort mekaniken helt är `0.5` en praktisk startpunkt för både hunger och stamina.
:::

## Exempel på konfiguration

Lägg till eller redigera följande värden i `PalWorldSettings.ini` beroende på vilken gameplay-upplevelse du vill ha:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Detta exempel minskar hunger- och staminaförbrukningen till hälften av standardvärdet för både spelare och Pals.

Om du vill inaktivera hunger och stamina helt, använd:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Placering av inställningar
Beroende på hur din `PalWorldSettings.ini` är strukturerad kan dessa värden behöva inkluderas inom den befintliga alternativlistan istället för att placeras som separata fristående rader. Om din fil redan innehåller en lång `OptionSettings`-post, se till att bevara befintligt format och endast ändra eller lägg till relevanta nycklar.
:::

## Spara och starta om servern

Efter att du redigerat filen:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings spelserveradministration.

En omstart krävs för att de nya hunger- och stamina-inställningarna ska börja gälla.

:::caution Omstart krävs
Om du inte startar om servern kommer de uppdaterade konfigurationsvärdena inte att laddas av spelservern.
:::

## Verifiera ändringarna i spelet

När servern är online igen, anslut till din server och testa de nya inställningarna.

### Vad du ska kontrollera

- Om spelarens hunger förbrukas långsammare
- Om spelarens stamina räcker längre vid rörelse och handlingar
- Om Pals hunger minskar i förväntad takt
- Om Pals staminaförbrukning matchar dina konfigurerade värden

Om värdena inte verkar gälla, öppna `PalWorldSettings.ini` igen och kontrollera att:

- konfigurationsnycklarna är stavade exakt som visat
- värdena är giltiga decimaltal som `1.0`, `0.5` eller `0.0`
- inställningarna sparades korrekt
- servern startades om helt efter redigering

## Conclusion

Grattis, du har framgångsrikt ändrat hunger- och staminaförbrukningen på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂