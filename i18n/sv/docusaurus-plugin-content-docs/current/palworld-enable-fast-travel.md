---
id: palworld-enable-fast-travel
title: "Palworld: Aktivera Snabbresor"
description: "Lär dig hur du konfigurerar snabbresor på din Palworld-server, inklusive inställningar för snabbresor endast mellan baser och manuella konfigurationsändringar. -> Läs mer nu"
sidebar_label: Palworld: Aktivera Snabbresor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur spelare använder snabbresor på din server via huvudkonfigurationen. I den här guiden lär du dig hur du redigerar rätt konfigurationsfil i ZAP-Hostings gränssnitt, justerar snabbresorna och tillämpar ändringarna korrekt.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att redigera dess konfigurationsfiler.

:::info Manuell Konfiguration Krävs
Denna inställning görs genom att manuellt redigera Palworld-serverns konfiguration. Du når den nödvändiga filen via din spelserveradministration under `Configs`.
:::

## Locate the Configuration File

För att ändra snabbresornas beteende behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till `Configs`.
3. Öppna filen `PalWorldSettings.ini`.

Denna fil innehåller serverns spelrelaterade inställningar, inklusive snabbresor.

:::note Konfigurationsplats
Beroende på aktuell panellayout hanteras filen via `Configs` i din serveradministration. Om den exakta underliggande sökvägen inte visas i gränssnittet kan du ändå säkert redigera de nödvändiga värdena direkt i `PalWorldSettings.ini`.
:::

## Understand the Fast Travel Settings

Palworld har två relevanta konfigurationsnycklar för snabbresornas beteende.

| Konfig-nyckel | Värdetyp | Standardvärde | Funktion |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Aktiverar eller inaktiverar snabbresor helt |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Begränsar snabbresor så att spelare bara kan resa mellan baser |

Dessa värden är en del av serverns optionssträng i `PalWorldSettings.ini`.

:::tip Välj Rätt Inställning
Vill du ha en mer immersiv reseupplevelse och mer utforskning kan du stänga av snabbresor helt. Vill du behålla snabbresor men minska hur fritt spelare rör sig på kartan är snabbresor endast mellan baser oftast det bättre valet.
:::

## Edit the Fast Travel Values

Öppna `PalWorldSettings.ini` och leta upp sektionen `OptionSettings=`. I Palworld lagras många serverinställningar som kommaseparerade värden i denna post.

### Aktivera Vanliga Snabbresor

För att tillåta standard snabbresor, se till att följande värde finns:

```ini
bEnableFastTravel=True
```

Vill du att spelare ska kunna använda alla normala snabbresor, kontrollera även att detta värde är satt så här:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Inaktivera Alla Snabbresor

För att helt stänga av snabbresor, sätt:

```ini
bEnableFastTravel=False
```

När detta är avstängt måste spelare resa manuellt över världen.

### Begränsa Snabbresor till Endast Baser

Vill du tillåta snabbresor endast mellan basläger, använd denna kombination:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Denna inställning är vanligt förekommande på PvP-servrar eftersom den fortfarande tillåter begränsad resa utan att ge spelare fri rörelse.

:::caution Behåll Befintlig Syntax
Ta inte bort andra befintliga värden från `OptionSettings=`-raden om du inte avsiktligt vill ändra dem. Palworld lagrar många inställningar i en enda kommaseparerad post, så felaktig formatering kan göra att inställningarna inte laddas.
:::

## Example Configuration

Nedan är ett exempel på hur den relevanta delen av konfigurationen kan se ut i `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Byt ut snabbresornas värden i din befintliga konfiguration enligt den inställning du vill använda.

:::note Befintliga Serverkonfigurationer
Din `OptionSettings=`-rad innehåller vanligtvis många fler värden än exemplet ovan. Du behöver bara justera `bEnableFastTravel` och `bEnableFastTravelOnlyBaseCamp` och behålla resten av raden oförändrad.
:::

## Recommended Configurations

Du kan använda följande kombinationer beroende på vilken typ av server du vill köra:

| Serverstil | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Resultat |
| --- | --- | --- | --- |
| Standardspel | `True` | `False` | Fulla snabbresor aktiverade |
| Utforskningsfokuserad | `False` | `False` | Alla snabbresor inaktiverade |
| PvP eller begränsad resa | `True` | `True` | Snabbresor endast mellan baser |

## Apply the Changes

Efter att du sparat dina ändringar i `PalWorldSettings.ini` måste du starta om servern för att de nya inställningarna ska laddas.

### Starta om Servern

Använd omstarts-funktionen i din ZAP-Hosting spelserveradministration efter att du sparat filen.

Inga ytterligare kommandon i spelet eller konsolen krävs normalt för denna ändring. Den nya snabbresorkonfigurationen tillämpas när servern startar om.

:::info Omstart Krävs
Ändringar i `PalWorldSettings.ini` tillämpas inte pålitligt förrän Palworld-servern har startats om.
:::

## Verify the Result

När servern är online igen, anslut och testa snabbresornas funktion i spelet.

Du bör kontrollera att:

- fulla snabbresor fungerar om de är aktiverade
- inga snabbresor är tillgängliga om de är inaktiverade
- endast bas-till-bas-resor fungerar om du aktiverat snabbresor endast mellan baser

:::tip Felsökning av Felaktigt Beteende
Om inställningen inte tillämpas, öppna `PalWorldSettings.ini` igen och kontrollera formateringsfel i `OptionSettings=`-raden, särskilt saknade kommatecken, duplicerade nycklar eller ogiltiga `True` / `False`-värden.
:::

## Conclusion

Grattis, du har framgångsrikt aktiverat eller konfigurerat snabbresor på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!