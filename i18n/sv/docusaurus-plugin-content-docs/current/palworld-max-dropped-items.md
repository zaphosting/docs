---
id: palworld-max-dropped-items
title: "Palworld: Max Droppade Föremål"
description: "Lär dig hur du ändrar gränser för droppade föremål och inställningar för föremålsförsvinnande på din Palworld-server genom att redigera rätt konfigurationsvärden. -> Läs mer nu"
sidebar_label: Palworld: Max Droppade Föremål
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig kontrollera hur många droppade föremål som kan finnas i din värld och hur länge dessa föremål stannar kvar innan de försvinner. I den här guiden lär du dig hur du redigerar rätt konfigurationsfil i ZAP-Hosting-gränssnittet, justerar inställningarna för droppade föremål och tillämpar ändringarna på ett säkert sätt.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hosting webbgränssnitt och behörighet att redigera dess konfigurationsfiler.

:::info Manuell Konfiguration Krävs
Denna inställning görs manuellt genom att redigera Palworld-serverns konfiguration. Den nödvändiga filen finns tillgänglig i din spelserveradministration under `Configs`.
:::

## Öppna Palworld Konfigurationsfil

För att ändra gränsen för droppade föremål behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hosting spelserveradministration:

1. Öppna din Palworld-server
2. Navigera till `Configs`
3. Öppna filen `PalWorldSettings.ini`

Denna fil innehåller de huvudsakliga konfigurationsvärdena för gameplay på din Palworld-server, inklusive beteendet för droppade föremål.

## Ändra Inställningarna för Droppade Föremål

Inställningarna för droppade föremål konfigureras via poster i `PalWorldSettings.ini`. Du behöver justera relevanta värden i den aktiva inställningsraden eller sektionen i filen.

### Relevanta Konfigurationsnycklar

Använd följande konfigurationsnycklar för att styra droppade föremål:

| Konfigurationsnyckel | Standardvärde | Beskrivning |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Max antal droppade föremål som kan finnas i världen samtidigt |
| `DropItemAliveMaxHours` | `1.0` | Tid i timmar innan droppade föremål försvinner automatiskt |

### Exempel på Konfiguration

Beroende på innehållet i din fil är dessa värden vanligtvis en del av Palworlds alternativinställningar. Till exempel:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Om dessa nycklar redan finns i din `OptionSettings`-post, ändra endast värdena. Till exempel:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

I detta exempel:

- `DropItemMaxNum=2000` begränsar världen till `2000` droppade föremål
- `DropItemAliveMaxHours=0.500000` gör att droppade föremål försvinner efter `0.5` timmar, vilket är `30` minuter

:::note Värdeformat
Palworld-serverinställningar använder ofta decimaltal med flera nollor efter decimalpunkten, som `1.000000`. Du bör behålla det befintliga formateringsstilen i din fil där det är möjligt.
:::

## Välj Passande Värden

De korrekta värdena beror på din spelarantal, serveraktivitet och lootgenerering.

### Rekommenderade Användningsfall

| Scenario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Liten privat server | `3000` | `1.000000` |
| Upptagen multiplayer-server | `2000` | `0.500000` |
| Prestandafokuserad setup | `1000` till `1500` | `0.250000` till `0.500000` |

### Prestandahänsyn

Lägre gränser för droppade föremål kan förbättra serverns prestanda, särskilt om:

- många spelare är aktiva samtidigt
- din värld genererar ett stort antal föremål
- spelare ofta farmar, bygger eller lämnar loot på marken

:::tip Förbättra Prestanda med Lägre Föremålsgränser
Om du märker lagg eller minskad serverrespons kan det hjälpa att sänka både maxvärdet för droppade föremål och försvinnandetiden för att minska röran i världen och förbättra stabiliteten.
:::

:::caution Undvik Extremt Låga Värden
Om du sätter dessa värden för lågt kan spelare märka att föremål försvinner för snabbt eller att droppad loot når taket snabbare än väntat. Testa ändringarna noggrant efter att du tillämpat dem.
:::

## Spara och Tillämpa Ändringarna

Efter att du redigerat `PalWorldSettings.ini`, spara filen i ZAP-Hosting-gränssnittet.

När filen är sparad, starta om din Palworld-server så att de nya inställningarna för droppade föremål laddas.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Nej |

:::info Omstart Krävs
Ändringar i `PalWorldSettings.ini` träder inte i kraft förrän du startar om Palworld-servern.
:::

## Verifiera de Nya Inställningarna

Efter omstart, anslut till din server och övervaka hur droppade föremål beter sig under normalt spelande.

Du bör kontrollera om:

- antalet droppade föremål styrs som förväntat
- föremål stannar kvar på marken under avsedd tid
- serverns prestanda förbättras efter att ha minskat föremålsantal eller livslängd

Vid behov, gå tillbaka till `PalWorldSettings.ini` och finjustera värdena ytterligare.

## Conclusion

Grattis, du har framgångsrikt konfigurerat max antal droppade föremål och försvinnandetid på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig! 🙂