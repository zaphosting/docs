---
id: palworld-enable-raids
title: "Palworld: Aktivera Raids"
description: "Lär dig hur du aktiverar eller inaktiverar raids på din Palworld-server genom att redigera rätt konfigurationsinställning för fiendens invasionsattacker. -> Läs mer nu"
sidebar_label: Palworld: Aktivera Raids
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld raids är fiendens invasionsattacker som kan rikta sig mot spelarnas baser på din server. I den här guiden lär du dig hur du aktiverar eller inaktiverar raids genom att manuellt redigera rätt konfigurationsfil i ZAP-Hostings spelserveradministration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings webbgränssnitt och behörighet att redigera serverns konfigurationsfiler.

:::info Manuell Konfiguration Krävs
Denna inställning görs genom att manuellt redigera Palworld-serverns konfiguration under **Configs** i din spelserveradministration. Efter att du sparat ändringarna måste du starta om servern för att den nya inställningen ska träda i kraft.
:::

## Hitta Rätt Konfigurationsfil

För att aktivera eller inaktivera raids behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din **Palworld**-spelserver.
2. Gå till **Configs**.
3. Öppna filen som heter `PalWorldSettings.ini`.

Denna fil innehåller de viktigaste konfigurationsvärdena för gameplay på din Palworld-server, inklusive inställningen som styr om raids är aktiverade.

## Redigera Raid-inställningen

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings`. Den relevanta konfigurationsnyckeln är:

```ini
bEnableInvaderEnemy=True
```

Denna inställning styr om fiendens invasionsraids är aktiva på servern.

### Aktivera Raids

Om du vill aktivera raids, sätt värdet till `True`:

```ini
bEnableInvaderEnemy=True
```

Med detta värde kan periodiska fiendeattacker mot spelarnas baser ske under spelets gång.

### Inaktivera Raids

Om du vill inaktivera raids, sätt värdet till `False`:

```ini
bEnableInvaderEnemy=False
```

Detta stänger av fiendens invasionsattacker helt, vilket kan skapa en lugnare byggupplevelse och eventuellt minska serverns belastning något.

## Konfigurationsreferens

Använd följande tabell som snabbreferens för raid-inställningen:

| Konfigurationsfil | Konfigurationsnyckel | Värde | Effekt |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Aktiverar raids och fiendens invasionsattacker |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Inaktiverar alla raids och fiendens invasionsattacker |

:::note Standardbeteende
Standardbeteendet för Palworld-servern är vanligtvis `bEnableInvaderEnemy=True`, vilket betyder att raids är aktiverade om du inte ändrar inställningen manuellt.
:::

## Spara och Tillämpa Ändringarna

Efter att du redigerat värdet i `PalWorldSettings.ini`, spara filen i ZAP-Hostings **Configs**-sektion.

Du måste sedan starta om din Palworld-server så att den uppdaterade konfigurationen laddas.

### Starta om Servern

Använd omstarts-funktionen i din ZAP-Hosting spelserveradministration efter att du sparat filen.

:::caution Omstart Krävs
Om du inte startar om servern kan den ändrade raid-inställningen komma att inte tillämpas. Att bara redigera filen räcker inte.
:::

## Verifiera Inställningen

När omstarten är klar ska din nya raid-konfiguration vara aktiv.

- Om `bEnableInvaderEnemy=True` är raids aktiverade.
- Om `bEnableInvaderEnemy=False` är raids inaktiverade.

Om inställningen inte verkar gälla, öppna `PalWorldSettings.ini` igen och kontrollera att värdet sparades korrekt utan formateringsfel.

:::tip Fredlig Basbyggnad
Att inaktivera raids kan vara användbart om du vill fokusera på utforskning, basbyggande eller lugnare samarbetsläge utan periodiska fiendeattacker.
:::

## Conclusion

Grattis, du har nu framgångsrikt aktiverat eller inaktiverat raids på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂