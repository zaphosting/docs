---
id: palworld-building-limits
title: "Palworld: Bygggränser"
description: "Lär dig hur du ändrar bygggränser, basbyggnadsregler och områdesbegränsningar i Palworld genom att manuellt redigera din serverkonfiguration. -> Läs mer nu"
sidebar_label: Palworld: Bygggränser
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra flera bygggränser och begränsningar via serverkonfigurationen. I den här guiden lär du dig hur du manuellt redigerar rätt konfigurationsfil i ZAP-Hostings webbgränssnitt, ändrar relevanta byggvärden och tillämpar ändringarna korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att:

- du har tillgång till din Palworld-spelserver i ZAP-Hostings spelserveradministration
- din server är offline just nu eller att du är beredd att starta om den efter att ha gjort ändringar
- du vet att den här guiden täcker generella bygggränser och områdesbegränsningar, inte guild-specifika basgränser

:::info Manuell Konfiguration Krävs
Dessa inställningar måste ändras manuellt i konfigurationsfilen. Den relevanta filen finns tillgänglig i din ZAP-Hosting spelserveradministration under `Configs`.
:::

:::note Guild Basgränser
Om du vill ändra antalet baser per guild istället för de generella bygggränserna som täcks här, bör du använda den separata guiden för guild basgränser om den finns i ZAP-Docs.
:::

## Öppna konfigurationsfilen

För att ändra bygggränser behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Navigera till `Configs`.
3. Öppna filen `PalWorldSettings.ini`.

Denna fil innehåller de huvudsakliga värld- och spelinställningarna för din Palworld-server, inklusive flera byggrelaterade konfigurationsposter.

## Redigera bygggränsinställningarna

De relevanta värdena finns i sektionen `OptionSettings` i `PalWorldSettings.ini`.

### Relevanta konfigurationsnycklar

Använd följande inställningar för att styra bygggränser och områdesbegränsningar:

| Konfignyckel | Beskrivning | Exempelvärde |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Sätter max antal byggnader per spelare. `0` inaktiverar gränsen. | `0` |
| `BaseCampMaxNum` | Sätter max antal basläger tillåtna på hela servern. | `128` |
| `bBuildAreaLimit` | Styr om byggbegränsningar nära vissa strukturer är aktiverade. | `False` |

### Exempel på konfiguration

Beroende på innehållet i din fil är dessa värden vanligtvis en del av raden `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Om din fil redan innehåller en längre `OptionSettings`-rad, ta inte bort andra befintliga värden. Du behöver bara ändra eller lägga till de relevanta posterna inom samma inställningsblock.

### Vad varje värde gör

| Inställning | Effekt |
| --- | --- |
| `MaxBuildingLimitNum=0` | Tar bort bygggränsen per spelare |
| `MaxBuildingLimitNum=[ditt_antal]` | Begränsar varje spelare till angivet antal byggnader |
| `BaseCampMaxNum=[ditt_antal]` | Sätter totalt antal basläger tillåtna på servern |
| `bBuildAreaLimit=True` | Förhindrar byggande nära begränsade strukturer som snabbreseplatser |
| `bBuildAreaLimit=False` | Inaktiverar den områdesbegränsningen |

:::caution Behåll Befintlig Syntax Intakt
`PalWorldSettings.ini` är känslig för formatering. Se till att du bara ändrar de värden du behöver och behåller befintliga kommatecken, parenteser och hela `OptionSettings=(...)`-strukturen intakt.
:::

## Spara dina ändringar

Efter att ha redigerat värdena:

1. Spara filen i `Configs`-sektionen.
2. Granska raden en gång till för formateringsfel.

Om syntaxen är felaktig kan servern ignorera ändringarna eller misslyckas med att tillämpa dem korrekt.

### Exempel på egna värden

Här är ett exempel som begränsar varje spelare till `5000` byggnader, tillåter upp till `20` basläger på servern och behåller aktiverade begränsade byggzoner:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Här är ett annat exempel som tar bort spelarbegränsningen och inaktiverar områdesbegränsningar:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Starta om servern

Efter att ha sparat konfigurationen måste du starta om din Palworld-server så att de nya inställningarna laddas.

I ZAP-Hostings spelserveradministration:

1. stoppa servern om den fortfarande körs
2. starta servern igen

En fullständig omstart krävs för att ändringar i `PalWorldSettings.ini` ska träda i kraft.

:::tip Tillämpa Ändringar Pålitligt
Om du gör flera konfigurationsändringar samtidigt är det en bra idé att spara alla ändringar först och sedan göra en omstart efteråt. Detta hjälper till att undvika onödig driftstopp.
:::

## Verifiera de nya gränserna

När servern är online igen, anslut till servern och testa det nya byggbeteendet.

Du bör kontrollera:

- om spelare kan placera fler eller färre byggnader än tidigare
- om det totala antalet basläger stämmer överens med ditt konfigurerade värde
- om byggande nära begränsade strukturer är tillåtet eller blockerat enligt `bBuildAreaLimit`

Om ändringarna inte verkar gälla, öppna `PalWorldSettings.ini` igen och kontrollera att:

- värdena sparades korrekt
- nycklarna finns inom `OptionSettings`-blocket
- servern startades om helt efter redigeringen

## Konfigurationsreferens

| Fil | Plats i ZAP-Hosting | Krävd åtgärd efter redigering |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` i din spelserveradministration | Starta om servern |

| Inställning | Rekommenderad användning |
| --- | --- |
| `MaxBuildingLimitNum` | Använd för att styra bygggränser per spelare |
| `BaseCampMaxNum` | Använd för att styra totalt antal basläger på servern |
| `bBuildAreaLimit` | Använd för att tillåta eller begränsa byggande nära skyddade kartstrukturer |

## Conclusion

Grattis, du har framgångsrikt ändrat bygggränserna på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂