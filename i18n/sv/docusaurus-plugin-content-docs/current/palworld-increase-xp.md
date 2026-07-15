---
id: palworld-increase-xp
title: "Palworld: Öka XP"
description: "Lär dig hur du ökar XP i spelet Palworld genom att redigera Palworld-serverns konfiguration och justera XP-multiplikatorn korrekt. -> Läs mer nu"
sidebar_label: Palworld: Öka XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig justera spelmultiplikatorer via serverkonfigurationen, inklusive mängden XP spelare får. I den här guiden lär du dig hur du ökar XP-hastigheten på din ZAP-Hosting Palworld-server genom att redigera rätt konfigurationsfil och tillämpa ändringarna korrekt.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings webbgränssnitt och behörighet att redigera dess konfigurationsfiler.

:::info Krav på åtkomst till konfiguration
Du behöver åtkomst till serverns webbadministration för att redigera konfigurationsfiler under avsnittet `Configs`. Om du inte kan komma åt serveradministrationen, kontrollera först din produktåtkomst i ZAP-Hosting-panelen.
:::

## Lokalisera konfigurationsfilen

För att öka XP på din Palworld-server behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Navigera till avsnittet `Configs`.
3. Öppna filen `PalWorldSettings.ini`.

Denna fil innehåller de huvudsakliga spelinställningarna som används av Palworld dedikerade server, inklusive XP-multiplikatorn.

## Redigera XP-multiplikatorn

Inställningen som styr XP-intjäning heter `ExpRate`.

### Hitta rätt inställning

Öppna `PalWorldSettings.ini` och leta efter raden `OptionSettings` eller sektionen där spelmultiplikatorer definieras.

Den relevanta konfigurationsposten är:

```ini
ExpRate=1.000000
```

### Ändra värdet

Justera värdet på `ExpRate` till den multiplikator du vill använda.

| Konfigurationsnyckel | Standardvärde | Exempelvärde | Effekt |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Dubblad XP-intjäning |
| `ExpRate` | `1.000000` | `3.000000` | Trippel XP-intjäning |

Till exempel, för att aktivera dubbel XP, sätt:

```ini
ExpRate=2.000000
```

För att aktivera trippel XP, sätt:

```ini
ExpRate=3.000000
```

:::tip Rekommenderat värdeformat
Palworld-serverinställningar använder ofta decimala värden som `1.000000` eller `2.000000`. Att använda samma format hjälper till att hålla konfigurationen konsekvent och lättläst.
:::

## Exempel på konfiguration

Beroende på innehållet i din fil visas inställningen vanligtvis inom `OptionSettings`-blocket. Till exempel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Om `ExpRate` redan finns, ändra bara dess värde. Om det saknas, lägg till `ExpRate=[ditt_värde]` inuti det befintliga `OptionSettings=(...)`-blocket.

:::caution Redigera befintligt OptionSettings-block försiktigt
Skapa inte flera `OptionSettings`-poster om inte din nuvarande konfiguration specifikt kräver det. I de flesta fall ska du bara redigera den befintliga raden `OptionSettings=(...)` och ändra värdet för `ExpRate` där.
:::

## Spara och starta om servern

Efter att ha ändrat XP-multiplikatorn:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings serveradministration.

En omstart krävs eftersom Palworld inte tillämpar denna spelinställningsändring direkt medan servern redan körs.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare konsolkommandon | Nej |

:::note Inga ytterligare kommandon krävs
För denna inställning behövs normalt inga extra in-game- eller konsolkommandon. Den nya XP-hastigheten tillämpas efter serveromstart.
:::

## Verifiera den nya XP-hastigheten

När servern är online igen, anslut till servern och utför en handling som ger XP, till exempel att besegra fiender, fånga Pals eller slutföra vanliga spelaktiviteter.

Om XP-intjäningen inte verkar ändras:

- öppna `PalWorldSettings.ini` igen
- kontrollera att `ExpRate` finns i `OptionSettings`-blocket
- verifiera att värdet är korrekt skrivet, till exempel `2.000000`
- säkerställ att servern startades om helt efter sparandet

:::danger Undvik ogiltig konfigurationssyntax
Om du av misstag tar bort kommatecken, parenteser eller andra värden från raden `OptionSettings=(...)` kan servern ignorera inställningen eller misslyckas med att ladda konfigurationen korrekt. Granska alltid hela raden innan du sparar.
:::

## Conclusion

Grattis, du har framgångsrikt ökat XP-intjäningshastigheten på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig!