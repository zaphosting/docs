---
id: palworld-enemy-drop-rate
title: "Palworld: Enemy Drop Rate"
description: "Learn how to change the Palworld enemy drop rate on your Palworld game server by editing the correct config value for better loot balance. -> Learn more now"
sidebar_label: Palworld: Enemy Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

`EnemyDropItemRate` styr hur mycket loot fiender släpper i Palworld. I den här guiden lär du dig hur du manuellt redigerar rätt konfigurationsfil i din ZAP-Hosting spelserveradministration och framgångsrikt applicerar den nya fiendedroppfrekvensen.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld spelserveradministrationspanel och behörighet att redigera serverns konfigurationsfiler.

:::info Manuell Konfiguration Krävs
Denna inställning görs genom att manuellt redigera serverns konfiguration. Den relevanta filen finns i din ZAP-Hosting spelserveradministration under `Configs`.
:::

## Locate the Configuration File

För att ändra fiendedroppfrekvensen behöver du redigera filen `PalWorldSettings.ini`.

### Open the Configs Section

Logga in på din ZAP-Hosting spelserveradministration och öppna din Palworld-server. Navigera sedan till avsnittet `Configs`, där tillgängliga konfigurationsfiler listas.

### Select `PalWorldSettings.ini`

Öppna filen `PalWorldSettings.ini` från `Configs`-området. Denna fil innehåller huvudinställningarna för gameplay på din Palworld-spelserver, inklusive loot- och drop-relaterade inställningar.

:::note Översikt av Konfigurationsfil
På dedikerade Palworld-servrar lagras gameplay-inställningar vanligtvis i `PalWorldSettings.ini`. Fiendens loot-multiplikator konfigureras där via posten `EnemyDropItemRate`.
:::

## Edit the Enemy Drop Rate

Nu när du har öppnat rätt fil kan du justera loot-drop-multiplikatorn.

### Find the Correct Setting

Sök i `PalWorldSettings.ini` efter raden `OptionSettings` och hitta följande nyckel:

```ini
EnemyDropItemRate=1.000000
```

Om nyckeln redan finns, ändra dess värde till din önskade multiplikator.

### Set Your Desired Multiplier

`EnemyDropItemRate` använder en numerisk multiplikator:

| Konfig-nyckel | Standardvärde | Exempelvärde | Effekt |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Fiender släpper dubbelt så många föremål |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Fiender släpper färre föremål |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Fiender släpper tre gånger så många föremål |

Till exempel, för att dubbla loot från besegrade fiender, vilda Pals och bossar, sätt:

```ini
EnemyDropItemRate=2.000000
```

Om du redigerar hela `OptionSettings`-posten kan det se ut ungefär så här:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Behåll Befintliga Inställningar
I många Palworld-serverkonfigurationer innehåller `OptionSettings` flera värden på samma rad. Ändra endast värdet för `EnemyDropItemRate` och undvik att ta bort kommatecken, parenteser eller andra befintliga inställningar, eftersom detta kan göra att konfigurationen misslyckas.
:::

## Review Related Drop Limits

Högre loot-multiplikatorer kan öka antalet föremål som droppas på marken. Detta kan påverka serverns prestanda, särskilt under intensiva strider eller bossfighter.

### Check `DropItemMaxNum`

Om din server redan har ett högt antal samtidiga droppade föremål, kontrollera inställningen `DropItemMaxNum` i samma konfigurationsfil.

| Konfig-nyckel | Syfte |
| --- | --- |
| `EnemyDropItemRate` | Multiplicerar loot som droppas av besegrade fiender |
| `DropItemMaxNum` | Begränsar hur många droppade föremål som kan finnas samtidigt |

:::tip Balans mellan Loot och Prestanda
Om du ökar `EnemyDropItemRate` kraftigt, överväg att hålla `DropItemMaxNum` på en rimlig nivå för att minska risken för onödig föremålsansamling och prestandaproblem.
:::

## Save and Apply the Changes

Efter att du redigerat konfigurationen, spara filen `PalWorldSettings.ini` i `Configs`-sektionen.

### Restart the Server

När filen är sparad, starta om din Palworld-server så att den nya inställningen laddas.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Inget verifierat kommando krävs |

:::info Omstart Krävs
Ändringar i `PalWorldSettings.ini` tillämpas inte direkt under körning. Du måste starta om servern efter att ha sparat filen.
:::

## Verify the New Drop Rate

Efter omstarten, anslut till din Palworld-server och besegra fiender för att bekräfta att den nya loot-multiplikatorn fungerar som förväntat.

Om droppmängden inte verkar ändras, öppna `PalWorldSettings.ini` igen och kontrollera att:

- `EnemyDropItemRate` är rättstavat
- värdet finns i rätt `OptionSettings`-konfiguration
- filen sparades korrekt
- servern startades om efter ändringen

## Conclusion

Grattis, du har framgångsrikt ändrat fiendedroppfrekvensen på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!