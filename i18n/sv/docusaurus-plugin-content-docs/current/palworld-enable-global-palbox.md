---
id: palworld-enable-global-palbox
title: "Palworld: Aktivera Global Palbox"
description: "Lär dig hur du aktiverar Palworlds globala palbox-serverinställning för global import och export av pals på din dedikerade server. -> Läs mer nu"
sidebar_label: Palworld: Aktivera Global Palbox
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Global Palbox* i Palworld låter spelare överföra Pals mellan servrar genom Palworlds globala molnbaserade pal-lagringssystem. I den här guiden lär du dig hur du aktiverar global import och export av Palbox på din ZAP-Hosting Palworld-server genom att manuellt redigera rätt konfigurationsfil.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att:

- du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt
- din server är stoppad eller kan startas om efter ändringarna
- du kan komma åt avsnittet `Configs` i din spelserveradministration

:::info Åtkomst till konfigurationsfil
För ZAP-Hosting Palworld-servrar kan relevanta inställningar redigeras via spelserveradministrationen under `Configs`. Du behöver inte extern filåtkomst om konfigurationseditorn finns där.
:::

## Öppna Palworlds konfigurationsfil

För att aktivera Global Palbox-funktionen måste du redigera filen `PalWorldSettings.ini`.

### Hitta konfigurationsfilen i ZAP-gränssnittet

1. Logga in på [ZAP-Hosting webbplats](https://zap-hosting.com).
2. Öppna din Palworld-spelserveradministration.
3. Navigera till avsnittet `Configs`.
4. Öppna filen som heter `PalWorldSettings.ini`.

Denna fil innehåller de huvudsakliga serverinställningarna som Palworld använder, inklusive Global Palbox-alternativen.

:::note Manuell konfiguration krävs
Global Palbox-inställningen konfigureras manuellt via serverns konfigurationsfil. Om du inte ser en separat knapp för denna funktion i gränssnittet är det korrekt att redigera `PalWorldSettings.ini` direkt.
:::

## Aktivera global import och export för Palbox

När du har öppnat `PalWorldSettings.ini` behöver du hitta serverns alternativlista och justera Global Palbox-inställningarna.

### Nödvändiga konfigurationsnycklar

Följande inställningar styr Global Palbox-beteendet:

| Konfigurationsnyckel | Värde | Funktion |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` eller `False` | Tillåter spelare att importera Pals från Global Palbox |
| `bAllowGlobalPalboxExport` | `True` eller `False` | Tillåter spelare att exportera Pals till Global Palbox |

Enligt aktuell tredjepartsreferens är `bAllowGlobalPalboxImport` som standard inaktiverad med `False`, medan `bAllowGlobalPalboxExport` är aktiverad med `True`. Om din fil redan innehåller dessa värden behöver du bara justera dem vid behov.

### Ställ in värdena

För att helt aktivera Global Palbox-överföringar mellan servrar, sätt båda värdena till `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Om dessa alternativ redan finns i filen, ersätt de befintliga värdena. Om de saknas, lägg till dem i serverinställningssektionen i `PalWorldSettings.ini`.

:::caution Behåll befintlig syntax intakt
Palworlds konfigurationsfiler är känsliga för formatering. Ändra endast de nödvändiga värdena och undvik att ta bort kommatecken, parenteser eller andra befintliga poster om dessa alternativ är en del av en större inställningsrad i din fil.
:::

## Spara ändringarna

Efter att du redigerat filen:

1. Spara ändringarna i `PalWorldSettings.ini`-editorn.
2. Kontrollera att båda Global Palbox-värdena finns och är korrekt inställda.

Om din serverpanel bara har en spara-knapp, använd den först innan du startar om servern i nästa steg.

## Starta om servern

Efter att ha ändrat Global Palbox-inställningarna måste du starta om Palworld-servern för att den nya konfigurationen ska laddas.

### Tillämpa de nya inställningarna

Starta om din server från spelserveradministrationen efter att du sparat filen.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare konsolkommandon | Nej |

Inga ytterligare kommandon krävs efter att ha redigerat konfigurationsfilen. En vanlig serveromstart räcker för att tillämpa den nya Palworld global palbox-serverinställningen.

:::tip Verifiera funktionen i spelet
Efter omstarten, anslut till din server och testa om spelare kan importera och exportera Pals via Global Palbox. Det är det enklaste sättet att bekräfta att inställningen har tillämpats korrekt.
:::

## Felsökning

Om Global Palbox inte fungerar efter omstarten, kontrollera följande punkter.

### Bekräfta att värdena sparades korrekt

Öppna `PalWorldSettings.ini` igen och verifiera att dessa värden fortfarande finns:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Om värdena har återställts kan filen ha sparats felaktigt.

### Kontrollera formateringsproblem

Om du lade till värdena i en befintlig inställningsblock, se till att den omgivande syntaxen fortfarande är giltig. Felaktig formatering i `PalWorldSettings.ini` kan göra att Palworld ignorerar inställningar eller misslyckas med att läsa in dem korrekt.

### Starta om servern igen

Om du sparade filen medan servern kördes, gör en fullständig omstart till för att säkerställa att den nya konfigurationen tillämpas.

:::danger Funktionens tillgänglighet beror på spelversion
Global Palbox är en spelmekanik som tillhandahålls av Palworld själv. Om inställningen inte fungerar trots korrekt konfiguration kan funktionen bero på aktuell Palworld-serverversion eller tillfälliga begränsningar i spelet. Kontrollera i så fall att din server är helt uppdaterad.
:::

## Conclusion

Grattis, du har nu framgångsrikt aktiverat global import och export av Palbox på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig!