---
id: palworld-supply-drop-settings
title: "Palworld: Inställningar för Supply Drop"
description: "Lär dig hur du ändrar frekvensen för supply drops i Palworld på din Palworld-spelserver genom att manuellt redigera inställningen SupplyDropSpan. -> Läs mer nu"
sidebar_label: Palworld: Inställningar för Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld har supply drops som dyker upp med jämna mellanrum och kan ge användbara resurser under spelets gång. I den här guiden lär du dig hur du manuellt ändrar frekvensen för supply drops på din ZAP-Hosting Palworld-spelserver genom att redigera rätt konfigurationsfil.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att redigera serverns konfigurationsfiler.

:::info Manuell Konfiguration Krävs
Denna inställning görs manuellt via din serveradministration under **Configs**. Efter att du ändrat inställningen måste du starta om servern för att Palworld ska läsa in den uppdaterade konfigurationen.
:::

## Hitta rätt konfigurationsfil

För att ändra intervallet för supply drops behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings webbgränssnitt:

1. Öppna din Palworld-spelserveradministration.
2. Gå till **Configs**.
3. Öppna filen `PalWorldSettings.ini`.

Denna fil innehåller de viktigaste konfigurationsvärdena för gameplay på din Palworld-server, inklusive inställningen för supply drop-timern.

## Redigera supply drop-inställningen

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings` och hitta posten `SupplyDropSpan`.

Den relevanta konfigurationsnyckeln visas nedan:

| Inställning | Beskrivning | Exempel |
| --- | --- | --- |
| `SupplyDropSpan` | Definierar intervallet mellan supply drops i minuter | `180` |

Om posten redan finns, ändra dess värde till det intervall du föredrar.

### Exempelvärden

Du kan använda följande värden som referens:

| Värde | Resultat |
| --- | --- |
| `30` | Mycket frekventa supply drops |
| `60` | Supply drops var 1 timme |
| `180` | Standardinställning, var 3:e timme |
| `360` | Supply drops var 6:e timme |

### Exempel på konfiguration

Beroende på innehållet i din fil kommer inställningen att visas som en del av den större `OptionSettings`-raden. Till exempel:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Om din fil redan innehåller många inställningar i samma `OptionSettings=(...)`-block, ändra endast värdet för `SupplyDropSpan` och låt resten av posterna vara oförändrade.

Till exempel:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Behåll Befintliga Inställningar
Ta inte bort andra värden från `OptionSettings`-blocket när du redigerar `SupplyDropSpan`. Om du av misstag tar bort kommatecken, parenteser eller andra poster kan din Palworld-konfiguration sluta laddas korrekt.
:::

## Spara och tillämpa ändringarna

När du har uppdaterat värdet för `SupplyDropSpan`:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings serveradministration.

En omstart krävs eftersom Palworld inte tillämpar denna inställning live medan servern redan körs.

:::note Ingen Ytterligare Kommando Krävs
Normalt behövs inget extra kommando i spelet eller konsolen för denna ändring. Att starta om servern är det nödvändiga steget för att tillämpa det uppdaterade intervallet för supply drops.
:::

## Verifiera det nya supply drop-intervallet

Efter omstarten kommer din server att använda det nya värdet för `SupplyDropSpan`. Du kan verifiera ändringen genom att observera tiden mellan supply drop-händelser under spelets gång.

Om ändringen inte verkar gälla, kontrollera följande:

| Kontroll | Vad du ska verifiera |
| --- | --- |
| Rätt fil | Du redigerade `PalWorldSettings.ini` |
| Rätt plats | Filen öppnades via **Configs** i din serveradministration |
| Rätt syntax | `SupplyDropSpan` är korrekt skriven och finns kvar i `OptionSettings`-blocket |
| Serveromstart | Servern startades om helt efter sparandet |

:::tip Välj ett Balancerat Värde
Mycket låga värden kan göra att supply drops dyker upp mycket oftare än normalt i Palworld. Om du vill ha fler händelser utan att det blir överdrivet är `60` oftast en bra startpunkt.
:::

## Conclusion

Grattis, du har nu ändrat frekvensen för supply drops på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂