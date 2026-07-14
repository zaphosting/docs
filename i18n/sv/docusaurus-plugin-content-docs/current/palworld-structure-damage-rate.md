---
id: palworld-structure-damage-rate
title: "Palworld: Structure Damage Rate"
description: "Learn how to change Palworld structure damage and structure decay rates by editing the server configuration safely and correctly. -> Learn more now"
sidebar_label: Palworld: Structure Damage Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur mycket skada byggnader tar och hur snabbt de förfaller över tid. I den här guiden lär du dig hur du manuellt redigerar rätt konfigurationsfil i din ZAP-Hosting spelserveradministration och tillämpar de nya inställningarna för byggnadsskador.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att din Palworld-server redan är installerad och att du kan komma åt dess webbadministration.

:::info Krävd åtkomst
Du behöver åtkomst till din ZAP-Hosting spelserveradministrationspanel och avsnittet `Configs` för din Palworld-server.
:::

:::note Manuell konfiguration
Denna inställning görs genom att manuellt redigera Palworlds konfigurationsfil. De exakta inställningarna ändras inte via någon separat one-click toggle i denna guide.
:::

## Öppna rätt konfigurationsfil

För att ändra byggnadsskador och förfall behöver du redigera filen `PalWorldSettings.ini`.

I din ZAP-Hosting spelserveradministration:

1. Öppna din **Palworld**-server.
2. Navigera till **Configs**.
3. Öppna filen `PalWorldSettings.ini`.

Denna fil innehåller de huvudsakliga gameplay-konfigurationsvärdena för din server, inklusive multiplikatorer relaterade till byggnader.

## Redigera inställningarna för byggnadsskador

De relevanta värdena finns i serverinställningarna i `PalWorldSettings.ini`.

### Relevanta konfigurationsnycklar

Använd följande inställningar för att styra byggnadsskadebeteendet:

| Konfigurationsnyckel | Beskrivning | Standardvärde |
| --- | --- | --- |
| `BuildObjectDamageRate` | Styr hur mycket skada byggnader tar | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Styr hur snabbt byggnader förfaller över tid | `1.0` |

Värdet `1.0` är normal standardnivå. Lägre värden minskar effekten, medan högre värden ökar den.

### Exempel på konfiguration

Beroende på innehållet i din fil är dessa värden vanligtvis en del av serverns alternativlista i `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Om din konfiguration använder en kombinerad optionssträng, se till att du bara ändrar värdena och behåller den omgivande syntaxen intakt.

Till exempel:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Behåll befintlig syntax intakt
`PalWorldSettings.ini` kan innehålla många inställningar i en enda `OptionSettings=(...)`-rad. Om detta är fallet på din server, ta inte bort kommatecken, parenteser eller andra befintliga poster när du redigerar filen.
:::

## Välj lämpliga värden

Du kan justera multiplikatorerna baserat på hur hållbara du vill att spelargjorda byggnader ska vara.

### Multiplikator för byggnadsskador

`BuildObjectDamageRate` ändrar hur mycket direkt skada en byggnad tar.

| Värde | Effekt |
| --- | --- |
| `0.5` | Byggnader tar halva skadan |
| `1.0` | Standard byggnadsskada |
| `2.0` | Byggnader tar dubbel skada |

### Multiplikator för byggnadsförfall

`BuildObjectDeteriorationDamageRate` ändrar hur snabbt byggnader förfaller över tid.

| Värde | Effekt |
| --- | --- |
| `0.1` | Mycket långsamt förfall |
| `1.0` | Standard förfallshastighet |
| `2.0` | Snabbare förfall |

:::tip Rekommenderat minimivärde för förfall
Det rekommenderas att hålla `BuildObjectDeteriorationDamageRate` på `0.1` eller högre. Mycket lågt eller avaktiverat förfall kan lämna oanvända byggnader kvar längre, vilket kan påverka städning och serverprestanda negativt över tid.
:::

## Spara filen och starta om servern

Efter att du redigerat värdena i `PalWorldSettings.ini`, spara filen i avsnittet `Configs`.

Du behöver sedan starta om Palworld-servern så att de nya inställningarna för byggnadsskador laddas.

### Nödvändiga åtgärder efter redigering

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Inget verifierat kommando krävs |

:::info Omstart krävs
Ändringar i `BuildObjectDamageRate` och `BuildObjectDeteriorationDamageRate` tillämpas inte pålitligt förrän servern har startats om.
:::

## Verifiera ändringarna

När servern är online igen, anslut till din Palworld-server och testa det nya beteendet.

Du kan verifiera ändringarna genom att kontrollera om:

- byggnader tar mer eller mindre direkt skada än tidigare
- övergivna eller exponerade byggnader förfaller i förväntad takt

Om ändringarna inte verkar gälla, öppna `PalWorldSettings.ini` igen och kontrollera att:

- inställningsnamnen är exakt skrivna som `BuildObjectDamageRate` och `BuildObjectDeteriorationDamageRate`
- värdena finns i rätt sektion eller `OptionSettings`-rad
- servern startades om efter sparandet

## Conclusion

Congratulations, you have successfully changed the structure damage and decay rates on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂