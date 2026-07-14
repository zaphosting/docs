---
id: palworld-change-day-night-speed
title: "Palworld: Ändra dag- och natthastighet"
description: "Lär dig hur du ändrar dag- och natthastigheten i Palworld genom att redigera dagcykelinställningarna på din server. -> Läs mer nu"
sidebar_label: Palworld: Ändra dag- och natthastighet
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig justera hur snabbt dag- och nattcykeln passerar på din server. I den här guiden lär du dig hur du ändrar dag- och natthastigheten genom att redigera rätt konfigurationsfil i din ZAP-Hosting spelserveradministration och tillämpa ändringarna korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings webbgränssnitt och behörighet att redigera serverns konfigurationsfiler.

:::info Manuell konfiguration krävs
Denna inställning görs manuellt via serverns konfigurationsfiler. Du behöver redigera Palworld-inställningarna direkt istället för att använda automatiserade kommandon i spelet.
:::

## Locate the Configuration File

För att ändra dag- och natthastigheten behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration når du denna fil via sektionen **Configs**. Öppna din Palworld-server i webbgränssnittet och navigera till området för hantering av konfigurationsfiler.

Den relevanta filen är:

```ini
PalWorldSettings.ini
```

:::note Plats för konfigurationsfil
Beroende på spelservermall och panelens layout tillhandahålls filen via **Configs**-området i ZAP-Hosting-administrationen. Om den fullständiga interna sökvägen visas i ditt gränssnitt är det vanligtvis Palworld-serverns inställningsfil som används för spelkonfiguration.
:::

## Edit the Day and Night Speed Settings

Inuti `PalWorldSettings.ini`, leta efter spelkonfigurationsposter för dag- och natthastighet.

Du behöver justera följande värden:

| Konfigurationsnyckel | Standardvärde | Beskrivning |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Styr hur snabbt dagen passerar |
| `NightTimeSpeedRate` | `1.000000` | Styr hur snabbt natten passerar |

Högre värden gör att tiden går snabbare, medan lägre värden gör att tiden går långsammare.

### Exempel på konfiguration

Om du vill att både dag och natt ska passera snabbare kan du sätta högre värden så här:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Om du vill ha en längre dag men snabbare natt kan du använda olika värden, till exempel:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Var du placerar värdena

Palworld lagrar många spelinställningar i sektionen `OptionSettings` i `PalWorldSettings.ini`. Du bör redigera de befintliga posterna `DayTimeSpeedRate` och `NightTimeSpeedRate` där istället för att lägga till dubbletter någon annanstans.

En typisk sektion kan se ut så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Efter redigering kan den se ut så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Redigera befintliga poster noggrant
Se till att du bara ändrar värdet efter `DayTimeSpeedRate=` och `NightTimeSpeedRate=`. Ta inte bort kommatecken, parenteser eller andra befintliga inställningar i `OptionSettings`-raden, eftersom felaktig formatering kan göra att servern inte kan läsa in konfigurationen korrekt.
:::

## Save and Apply the Changes

När du har uppdaterat värdena i `PalWorldSettings.ini`, spara filen i ZAP-Hostings konfigurationsredigerare.

Efter sparandet, starta om din Palworld-server så att de nya dagcykelinställningarna laddas.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare konsolkommandon | Nej |

:::tip Omstart krävs
Konfigurationsändringar för Palworlds världinställningar tillämpas inte pålitligt förrän servern har startats om. Starta alltid om servern efter att du ändrat dag- eller natthastigheten.
:::

## Verify the New Day Cycle

När omstarten är klar, anslut till din server och observera hur tiden i spelet går.

Du bör nu märka att:

- **dagen** passerar snabbare eller långsammare baserat på `DayTimeSpeedRate`
- **natten** passerar snabbare eller långsammare baserat på `NightTimeSpeedRate`

Om hastigheten inte verkar ändras, öppna `PalWorldSettings.ini` igen och kontrollera att:

- värdena sparades korrekt
- formateringen av `OptionSettings`-raden fortfarande är giltig
- servern startades om efter ändringen

## Configuration Reference

Använd följande tabell som snabbreferens när du vill ändra daginställningarna igen senare.

| Inställning | Exempel | Resultat |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Långsammare dag | Dagen varar längre |
| `DayTimeSpeedRate=2.000000` | Snabbare dag | Dagen passerar snabbare |
| `NightTimeSpeedRate=0.500000` | Långsammare natt | Natten varar längre |
| `NightTimeSpeedRate=2.000000` | Snabbare natt | Natten passerar snabbare |

:::note Balanserade inställningar
Om du vill ha en mer naturlig spelupplevelse, undvik extremt höga värden. Mycket snabba dag- och nattväxlingar kan göra det svårare att planera odling, utforskning och basbyggande.
:::

## Conclusion

Grattis, du har nu framgångsrikt ändrat dag- och natthastigheten på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂