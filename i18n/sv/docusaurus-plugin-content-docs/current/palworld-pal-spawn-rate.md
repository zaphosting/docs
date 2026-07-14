---
id: palworld-pal-spawn-rate
title: "Palworld: Pal Spawn Rate"
description: "Learn how to change the Palworld pal spawn rate by editing the spawn setting for Pal frequency on your server -> Learn more now"
sidebar_label: Palworld: Pal Spawn Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur ofta Pals spawnar i din värld genom en serverkonfigurationsinställning. I den här guiden lär du dig hur du redigerar rätt konfigurationsfil i ZAP-Hostings spelserveradministration och säkert tillämpar en ny spawnfrekvens för Pals.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att:

- du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt
- din server är offline eller att du är beredd att starta om den efter att du gjort ändringar
- du förstår att högre spawnvärden kan öka serverbelastningen och minska prestandan

:::info Manuell Konfiguration Krävs
Den här ändringen görs manuellt genom att redigera serverns konfigurationsfil under **Configs** i din spelserveradministration. Det finns ingen separat reglage i panelen dokumenterad för ZAP-Hosting för just denna inställning.
:::

## Öppna Palworlds Konfigurationsfil

För att ändra Pal spawn rate behöver du redigera filen `PalWorldSettings.ini`.

I din ZAP-Hosting spelserveradministration:

1. Öppna din **Palworld**-server.
2. Gå till **Configs**.
3. Öppna filen `PalWorldSettings.ini`.

Den här filen innehåller de viktigaste serverinställningarna för gameplay, inklusive multiplikatorn för Pal spawn.

:::note Plats för Konfigurationsfilen
För ZAP-Hostings Palworld-servrar finns den relevanta filen direkt tillgänglig via **Configs**-sektionen i spelserveradministrationen, enligt serverns standarduppsättning.
:::

## Ändra Pal Spawn Rate

Inställningen du behöver är `PalSpawnNumRate`.

### Vad `PalSpawnNumRate` Gör

`PalSpawnNumRate` styr multiplikatorn för hur ofta Pals spawnar på din server.

| Konfigurationsnyckel | Standardvärde | Beskrivning |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Styr hur många Pals som spawnar i världen. Högre värden ökar spawnfrekvensen. |

I Palworld är detta värde vanligtvis en del av raden `OptionSettings` i `PalWorldSettings.ini`.

### Redigera Inställningen

Öppna `PalWorldSettings.ini` och leta upp sektionen `OptionSettings=`. Inuti den sektionen hittar du posten `PalSpawnNumRate`.

Om posten redan finns, ändra dess värde. Exempel:

```ini
PalSpawnNumRate=1.000000
```

Du kan öka det så här:

```ini
PalSpawnNumRate=2.000000
```

Detta exempel dubblar multiplikatorn för Pal spawn jämfört med standardvärdet.

:::tip Rekommenderade Startvärden
Börja med små ökningar som `1.500000` eller `2.000000` och testa serverns prestanda innan du använder högre värden.
:::

### Exempel på Konfigurationssnutt

Beroende på innehållet i din fil kan inställningen finnas inuti en lång `OptionSettings`-rad som denna:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Behåll Befintlig Syntax
Ta inte bort kommatecken, hakparenteser eller andra befintliga värden från `OptionSettings`-raden. Felaktig formatering i `PalWorldSettings.ini` kan göra att servern inte kan läsa in konfigurationen korrekt.
:::

## Rekommenderade Värden och Prestandapåverkan

Du kan använda olika värden beroende på vilken spelupplevelse du vill ha.

| Värde | Effekt |
| --- | --- |
| `1.000000` | Standard spawnfrekvens för Pals |
| `1.500000` | Lätt ökad spawnfrekvens |
| `2.000000` | Märkbart fler Pals i världen |
| `3.000000` eller högre | Kraftig ökning av spawn, kan påverka prestanda |

Högre värden kan göra världen mer levande, men ökar också antalet entiteter som servern måste hantera.

:::danger Höga Spawnvärden Kan Minska Stabiliteten
Mycket höga spawninställningar kan påverka serverns prestanda negativt, särskilt på belastade servrar eller i kombination med andra krävande världinställningar. Om du märker lagg, sänk värdet igen och starta om servern.
:::

## Spara och Starta Om Servern

Efter att du redigerat filen:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings spelserveradministration.

En omstart krävs för att den nya Pal spawn rate ska börja gälla.

## Verifiera Ändringen

När servern är online igen, anslut till din Palworld-server och observera aktiviteten i områden där Pals normalt spawnar.

Om spawnfrekvensen inte verkar ha ändrats:

- öppna `PalWorldSettings.ini` igen och kontrollera att `PalSpawnNumRate` finns med
- se till att värdet är i rätt `OptionSettings`-sektion
- verifiera att filen sparades korrekt
- starta om servern igen efter att du bekräftat ändringen

## Konfigurationsreferens

| Objekt | Värde |
| --- | --- |
| Konfigurationsfil | `PalWorldSettings.ini` |
| ZAP-Hosting plats | Spelserveradministration → `Configs` |
| Inställningsnamn | `PalSpawnNumRate` |
| Standardvärde | `1.000000` |
| Kräver omstart | Ja |

## Conclusion

Grattis, du har nu ändrat Pal spawn rate på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!