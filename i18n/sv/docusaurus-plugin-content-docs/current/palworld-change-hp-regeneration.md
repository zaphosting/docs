---
id: palworld-change-hp-regeneration
title: "Palworld: Ändra HP-regenerering"
description: "Lär dig hur du ändrar HP-regenerering i Palworld genom att redigera spelarens och Pals regenereringsinställningar på din server för snabbare, långsammare eller inaktiverad läkning -> Lär dig mer nu"
sidebar_label: Palworld: Ändra HP-regenerering
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig ändra regenereringsinställningar för både spelare och Pals via huvudserverns konfiguration. I den här guiden lär du dig hur du redigerar rätt konfigurationsfil i ZAP-Hostings webbgränssnitt, justerar HP-regenereringsvärden och tillämpar ändringarna korrekt.



## Preparation

Innan du börjar, se till att din Palworld-server är online och att du kan komma åt dess webbadministration via ZAP-Hosting-panelen.

:::info Krav på åtkomst till konfiguration
Du behöver åtkomst till din spelserveradministration och avsnittet `Configs` för att manuellt redigera Palworlds konfigurationsfiler.
:::

## Öppna Palworlds konfigurationsfil

För att ändra HP-regenerering måste du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Navigera till `Configs`.
3. Öppna filen `PalWorldSettings.ini`.

Den här filen innehåller huvudinställningarna för spelets konfiguration på din server, inklusive multiplikatorer för spelarens och Pals hälsoregeneration.

:::note Manuella konfigurationsändringar
Beroende på din nuvarande konfiguration kan inställningarna visas i en lång parametersträng inom avsnittet `OptionSettings`. Redigera de befintliga värdena noggrant och behåll formateringen intakt.
:::

## Ändra HP-regenereringsvärden

HP-regenereringsinställningarna lagras som numeriska multiplikatorer. Värdet `1.0` använder standardhastigheten för regenerering.

### Stödda regenereringsinställningar

Använd följande konfigurationsnycklar i `PalWorldSettings.ini`:

| Konfigurationsnyckel | Beskrivning | Standardvärde |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Spelarens naturliga HP-regenereringshastighet | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Spelarens HP-regenerering under sömn | `1.0` |
| `PalAutoHPRegeneRate` | Pals naturliga HP-regenereringshastighet | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Pals HP-regenerering under sömn i Palbox | `1.0` |

### Värdets effekt

Du kan använda följande värdelogik när du ändrar regenerering:

| Värde | Effekt |
| --- | --- |
| `1.0` | Standard regenereringshastighet |
| Större än `1.0` | Snabbare läkning |
| Mindre än `1.0` | Långsammare läkning |
| `0.0` | Inaktiverar regenerering |

:::tip Välj bra regenereringsvärden
Om du vill ha en något enklare överlevnadsupplevelse, testa värden som `1.5` eller `2.0`. Vill du ha en mer utmanande setup, använd värden under `1.0` eller inaktivera regenerering helt med `0.0`.
:::

## Redigera konfigurationsposterna

I de flesta Palworld-serverinstallationer finns dessa värden inuti raden `OptionSettings=(...)` i `PalWorldSettings.ini`.

### Exempel på konfiguration

Lägg till posterna om de saknas, eller ändra de befintliga värdena om de redan finns:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Om du till exempel vill ha snabbare naturlig läkning för spelare och Pals kan du använda:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Om du bara vill ändra specifika värden, justera endast de posterna och låt resten av dina befintliga `OptionSettings`-värden vara oförändrade.

:::caution Behåll befintliga OptionSettings-värden
Ta inte bort orelaterade poster från `OptionSettings`-raden. Detta avsnitt innehåller vanligtvis många spelinställningar, och att ta bort dem kan oavsiktligt återställa andra delar av din serverkonfiguration.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat filen, spara dina ändringar i ZAP-Hostings `Configs`-område.

För att tillämpa de nya regenereringsinställningarna, starta om din Palworld-server.

### Starta om servern

1. Spara den redigerade filen `PalWorldSettings.ini`.
2. Gå tillbaka till din serveradministration.
3. Starta om servern.

En omstart krävs eftersom Palworld läser dessa spelinställningar vid serverstart.

:::info Omstart krävs
Ändringarna i HP-regenerering träder inte i kraft direkt medan servern körs. Du måste starta om servern efter att ha sparat konfigurationen.
:::

## Verifiera de nya regenereringsinställningarna

Efter att servern har startat om, anslut till din server och testa den nya läkningsbeteendet i spelet.

Du kan verifiera ändringen genom att kontrollera:

- spelarens naturliga HP-återhämtning
- spelarens läkning under sömn
- Pals naturliga HP-återhämtning
- Pals läkningsbeteende i Palbox under sömn

Om regenereringen inte fungerar som förväntat, öppna `PalWorldSettings.ini` igen och kontrollera att:

- konfigurationsnycklarna är exakt rättstavade
- värdena använder giltiga decimaltal som `1.0` eller `2.0`
- posterna finns kvar inom `OptionSettings`-avsnittet
- servern startades om efter sparandet

## Conclusion

Grattis, du har framgångsrikt ändrat HP-regenerering i Palworld. För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂