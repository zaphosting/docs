---
id: palworld-randomized-pals
title: "Palworld: Randomized Pals"
description: "Learn how to enable randomized Pals in Palworld by editing your server configuration, including randomizer type and seed settings for the Palworld game world. -> Learn more now"
sidebar_label: Palworld: Randomized Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld har randomizer-inställningar som kan ändra hur Pals spawnar i din spelvärld. I den här guiden lär du dig hur du manuellt aktiverar och konfigurerar randomiserade Pals på din ZAP-Hosting Palworld-server genom att redigera rätt konfigurationsfil.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att redigera serverns konfigurationsfiler.

:::info Krav på konfigurationstillgång
Du behöver tillgång till serverns webbadministration för att öppna avsnittet `Configs` och redigera Palworld-konfigurationsfilerna.
:::

## Öppna rätt konfigurationsfil

För att konfigurera randomiserade Pals måste du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din **Palworld**-server.
2. Gå till **Configs**.
3. Öppna filen som heter `PalWorldSettings.ini`.

Den här filen innehåller de viktigaste konfigurationsvärdena för gameplay på din Palworld-server, inklusive randomizer-alternativ.

## Konfigurera randomiserade Pals

Randomizer-inställningarna sparas som nycklar i `PalWorldSettings.ini`. Du behöver hitta den befintliga inställningsblocket och justera relevanta värden manuellt.

### Översikt över randomizer-inställningar

Använd följande konfigurationsnycklar för randomiserade Pal-spawns:

| Konfigurationsnyckel | Tillåtna värden | Standard | Syfte |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Styr om slumpmässig Pal-spawn är avstängd eller randomiserad per region |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Aktiverar helt slumpmässiga nivåer på vilda Pals när satt till `True` |
| `RandomizerSeed` | `[your_seed_value]` eller tom | `""` | Definierar seed som används när världen genereras |

:::caution Kompatibilitet med dedikerad server
Värdet `All` har rapporterats som inkompatibelt med Palworld dedikerade servrar. Du bör endast använda stödjade värden som `None` eller `Region`.
:::

### Exempel på konfiguration

Lägg till eller justera följande värden i din `PalWorldSettings.ini`-fil vid behov:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Byt ut `zaphosting` mot ditt eget seed-värde om du vill ha en specifik randomiserad setup. Ett seed säkerställer att samma slumpmässiga mönster används när världen genereras.

### Vad varje inställning gör

#### `RandomizerType`

Denna inställning styr om Pal-spawns randomiseras.

- `None` inaktiverar randomisering
- `Region` aktiverar regional randomisering för Pal-spawns

Om du vill ha randomiserade Pals i din Palworld-världskarta, sätt detta värde till `Region`.

#### `bIsRandomizerPalLevelRandom`

Denna inställning styr nivåerna på vilda Pals.

- `False` behåller normal nivåbeteende
- `True` aktiverar helt slumpmässiga nivåer på vilda Pals

Detta kan göra Palworld-spelet betydligt mindre förutsägbart, särskilt i tidig progression.

#### `RandomizerSeed`

Denna valfria inställning definierar randomizer-seed som används vid världsgenerering.

Exempel:

```ini
RandomizerSeed="[your_seed_value]"
```

Byt ut `[your_seed_value]` mot valfri egen text eller nummer som du vill använda som seed.

:::note Seed-beteende
Randomizer-seed appliceras när världen genereras. Om du ändrar `RandomizerSeed` senare på en befintlig värld, kommer ändringen inte att gälla om du inte återställer världen eller startar en ny.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat filen, spara dina ändringar i ZAP-Hostings `Configs`-sektion.

När filen är sparad, starta om din Palworld-server så att den uppdaterade konfigurationen kan laddas.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare konsolkommandon | Nej |
| Återställ världen för seed-ändringar på befintligt sparande | Om du ändrar `RandomizerSeed` |

:::tip När du bör starta en ny värld
Om du aktiverar randomisering för första gången, särskilt med ett anpassat `RandomizerSeed`, är det bäst att använda en ny värld för att säkerställa att inställningarna tillämpas korrekt.
:::

## Verifiera resultatet

Efter omstart, anslut till din server och kontrollera om Pal-spawns beter sig enligt dina valda randomizer-inställningar.

Du bör verifiera:

- om randomiserade regionala spawns är aktiva
- om nivåerna på vilda Pals är randomiserade om det är aktiverat
- om världens beteende motsvarar ditt konfigurerade seed på en ny värld

Om ändringarna inte verkar fungera, öppna `PalWorldSettings.ini` igen och kontrollera att:

- nycklarna är korrekt inskrivna
- värdena använder giltig versalisering som `True` och `False`
- servern startades om efter sparande
- en ny värld skapades om du ändrade seed

## Felsökning

### Randomiserade Pals visas inte

Kontrollera att `RandomizerType=Region` finns i `PalWorldSettings.ini`. Om det fortfarande står `None` är randomisering avstängd.

### Seed-ändringar trädde inte i kraft

Detta betyder oftast att världen redan genererats innan det nya seedet lades till. Då måste du återställa världen eller skapa en ny för att seedet ska gälla.

### Serverproblem efter ändring av randomizer-inställningar

Om du använde ett icke-stött värde, som `All`, återställ inställningen till ett stödjat värde som `None` eller `Region`, spara filen och starta om servern igen.

:::danger Undvik icke-stödda randomizer-värden
Använd inte `RandomizerType=All` på en dedikerad server om inte officiell Palworld-serverdokumentation bekräftar stöd för det. Denna inställning är för närvarande känd för att vara inkompatibel i dedikerade servermiljöer.
:::

## Conclusion

Congratulations, you have successfully configured randomized Pals on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂