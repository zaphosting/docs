---
id: palworld-pal-damage-multiplier
title: "Palworld: Pal Damage Multiplier"
description: "Learn how to change the Palworld pal damage multiplier by editing Pal damage settings for attack and defense values on your server. -> Learn more now"
sidebar_label: Palworld: Pal Damage Multiplier
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig justera hur mycket skada dina Pals ger och tar genom att ändra serverns skademultiplikatorinställningar. I den här guiden lär du dig vilken konfigurationsfil du ska redigera i ZAP-Hosting-gränssnittet, vilka värden du ska ändra och hur du korrekt tillämpar de nya inställningarna.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings spelserveradministrationspanel.

:::info Manuell konfiguration krävs
Denna inställning görs genom att manuellt redigera Palworlds konfigurationsfil. Det krävs inga separata kommandon i spelet för denna ändring.
:::

## Öppna rätt konfigurationsfil

För att ändra Pal-skademultiplikatorn behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration, öppna avsnittet `Configs` och hitta filen `PalWorldSettings.ini` där. Denna fil innehåller huvudvärlds- och spelkonfigurationsvärden för din Palworld-server.

:::note Konfigurationsplats
Den relevanta filen för denna guide är `PalWorldSettings.ini`, tillgänglig via din spelserveradministration under `Configs`.
:::

## Redigera Pal-skademultiplikatorvärdena

Inuti `PalWorldSettings.ini`, leta efter sektionen `OptionSettings`. Pal-skademultiplikatorinställningarna sparas som konfigurationsnycklar inom denna sektion.

Du behöver justera följande poster:

| Konfigurationsnyckel | Standardvärde | Syfte |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Styr hur mycket skada dina Pals ger |
| `PalDamageRateDefense` | `1.000000` | Styr hur mycket skada dina Pals tar |

### Exempel på konfiguration

Om nycklarna redan finns, ändra deras värden till den multiplikator du vill ha. Om de saknas, lägg till dem inom `OptionSettings`-posten.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Vad värdena betyder

Använd följande beteende som referens när du väljer dina multiplikatorvärden:

| Värdeförändring | Effekt |
| --- | --- |
| Högre `PalDamageRateAttack` | Dina Pals ger mer skada |
| Lägre `PalDamageRateAttack` | Dina Pals ger mindre skada |
| Högre `PalDamageRateDefense` | Dina Pals får mindre gynnsam försvarsbalansering och tar effektivt skada enligt den ökade multiplikatorn |
| Lägre `PalDamageRateDefense` | Dina Pals tar mer skada |

:::caution Kontrollera dina multiplikatorvärden noggrant
Palworld-serverinställningar använder numeriska multiplikatorvärden. Ange endast giltiga decimaltal som `0.500000`, `1.000000` eller `2.000000`. Ogiltigt format kan förhindra att servern laddar konfigurationen korrekt.
:::

## Spara ändringarna

Efter att du redigerat värdena i `PalWorldSettings.ini`, spara filen i ZAP-Hostings konfigurationsredigerare.

Om du justerar balansen för PvE eller samarbetsläge rekommenderas att du ändrar en multiplikator i taget först. Det gör det enklare att testa hur mycket skada som ges eller tas har förändrats.

:::tip Börja med små justeringar
En liten ökning som `1.200000` för `PalDamageRateAttack` är ofta lättare att balansera än ett stort hopp som `3.000000`.
:::

## Starta om servern

När du har sparat den uppdaterade konfigurationen, starta om din Palworld-server så att de nya skademultiplikatorinställningarna laddas.

Inga extra konsolkommandon krävs efter att filen har redigerats. En fullständig serveromstart räcker för att tillämpa ändringarna.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Kör extra kommandon | Nej |
| Starta om servern | Ja |

## Verifiera de nya skadeinställningarna

Efter serveromstart, anslut till din Palworld-server och testa strid med dina Pals. Kontrollera om:

- dina Pals ger den förväntade mängden skada
- dina Pals tar den förväntade mängden skada
- spelbalansen fortfarande passar din serverkonfiguration

Om resultatet är för starkt eller för svagt, gå tillbaka till `PalWorldSettings.ini`, justera multiplikatorvärdena igen, spara filen och starta om servern en gång till.

## Conclusion

Grattis, du har framgångsrikt ändrat Pal-skademultiplikatorn på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂