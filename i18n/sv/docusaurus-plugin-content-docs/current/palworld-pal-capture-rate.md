---
id: palworld-pal-capture-rate
title: "Palworld: Pal Capture Rate"
description: "Learn how to change the Palworld Pal capture rate by editing the PalCaptureRate setting for easier capture results on your server. -> Learn more now"
sidebar_label: Palworld: Pal Capture Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig justera Pal capture rate på din server via huvudkonfigurationen för världen. I den här guiden lär du dig var du hittar rätt konfigurationsfil i ZAP-Hosting-gränssnittet, vilken värde du ska ändra och hur du tillämpar den nya capture rate.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings webbgränssnitt och att servern är igång och konfigurerad.

:::info Åtkomst till konfigurationsfil
För Palworld-servrar hos ZAP-Hosting kan relevanta inställningar redigeras via spelserveradministrationen under `Configs`.
:::

## Hitta Palworld-konfigurationsfilen

För att ändra Pal capture rate behöver du redigera filen `PalWorldSettings.ini`.

### Öppna avsnittet Configs

Logga först in i ZAP-Hostings webbgränssnitt och öppna din Palworld-spelserver. Navigera sedan till `Configs` i spelserveradministrationen.

Där letar du efter filen med namnet:

```ini
PalWorldSettings.ini
```

### Identifiera rätt inställning

I `PalWorldSettings.ini` lagras många gameplay-inställningar i sektionen `OptionSettings`. Den inställning som är relevant för Pal capture är:

```ini
PalCaptureRate=[your_value]
```

Standardvärdet är vanligtvis:

```ini
PalCaptureRate=1.000000
```

Ett högre värde gör det enklare att fånga Pals, medan ett lägre värde gör fångstförsöken svårare.

## Ändra Pal Capture Rate

Nu när du har öppnat rätt fil kan du justera capture rate för att passa din önskade spelbalans.

### Ändra konfigurationsvärdet

Sök i `PalWorldSettings.ini` efter posten `PalCaptureRate` och ersätt dess värde med din föredragna multiplikator.

Till exempel:

```ini
PalCaptureRate=2.000000
```

Detta skulle dubbla capture rate jämfört med standardinställningen.

### Exempelvärden

Använd följande tabell som en generell referens:

| Värde | Effekt |
| --- | --- |
| `1.000000` | Standard Pal capture rate |
| `1.500000` | Lite enklare fångst |
| `2.000000` | Märkbart enklare fångst |
| `3.000000` | Mycket enklare fångst |

:::tip Balanserad konfiguration
Om du vill ha enklare fångster utan att det känns garanterat är ett värde mellan `1.500000` och `2.000000` oftast en bra startpunkt.
:::

## Spara och tillämpa ändringarna

Efter att ha ändrat värdet för `PalCaptureRate`, spara ändringarna i ZAP-Hostings konfigurationsredigerare.

### Starta om servern

Palworld tillämpar inte denna inställning live. Efter att du sparat filen måste du starta om din spelserver från ZAP-Hostings serveradministration för att den nya capture rate ska laddas.

:::caution Omstart krävs
Om du inte startar om servern efter att ha redigerat `PalWorldSettings.ini` kommer den nya capture rate inte att träda i kraft.
:::

## Konfigurationsreferens

Följande tabell sammanfattar inställningen som används för denna ändring:

| Fil | Konfigurationsnyckel | Standardvärde | Syfte | Omstart krävs |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Styr multiplikatorn för Pal capture rate | Ja |

## Felsökning

Om den nya capture rate inte verkar fungera, kontrollera följande punkter.

### Kontrollera inställningens format

Se till att raden är korrekt skriven och använder ett numeriskt värde, till exempel:

```ini
PalCaptureRate=2.000000
```

Undvik att lägga till extra tecken eller ändra andra poster i filen.

### Bekräfta att filen sparades

Efter redigering, kontrollera att ändringarna faktiskt sparades i `PalWorldSettings.ini` via `Configs`-sektionen.

### Starta om igen vid behov

Om servern inte startades om korrekt efter ändringen, gör en ny omstart från serveradministrationen.

:::note Serverbaserad gameplay-inställning
`PalCaptureRate` är en serverbaserad gameplay-inställning, så spelare kommer bara att märka den nya capture rate efter att servern laddat om den uppdaterade konfigurationen.
:::

## Conclusion

Grattis, du har nu framgångsrikt ändrat Pal capture rate på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!