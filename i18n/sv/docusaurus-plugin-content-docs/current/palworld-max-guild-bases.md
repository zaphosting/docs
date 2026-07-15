---
id: palworld-max-guild-bases
title: "Palworld: Max Antal Guildbaser"
description: "Lär dig hur du ändrar inställningen för max antal guildbaser i Palworld genom att redigera värdet BaseCampMaxNumInGuild på din server. -> Läs mer nu"
sidebar_label: "Max Antal Guildbaser"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra det maximala antalet baser som varje guild kan placera på din server. I den här guiden lär du dig hur du manuellt redigerar rätt konfigurationsfil i ZAP-Hostings webbgränssnitt, ändrar inställningen `BaseCampMaxNumInGuild` och tillämpar ändringen genom att starta om din server.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt.

:::info Krävd åtkomst
Du behöver åtkomst till din Palworld-serveradministration och avsnittet `Configs` för att kunna redigera konfigurationsfiler.
:::

## Lokalisera konfigurationsfilen

För att ändra inställningen för max antal guildbaser måste du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings webbgränssnitt öppnar du din Palworld-serveradministration och navigerar till:

`Configs` → `PalWorldSettings.ini`

Denna fil innehåller de huvudsakliga konfigurationsvärdena för gameplay på din Palworld-server, inklusive begränsningar för guilds och baser.

## Redigera värdet för max antal guildbaser

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings`. Inställningen du behöver ändra är:

`BaseCampMaxNumInGuild=[ditt_värde]`

Byt ut `[ditt_värde]` mot det antal baser du vill tillåta varje guild att placera.

### Exempel på konfiguration

Om du vill tillåta upp till `6` baser per guild ska raden se ut så här:

```ini
BaseCampMaxNumInGuild=6
```

Om inställningen redan finns, ändra bara dess värde. Om den saknas, lägg till den i den befintliga listan av `OptionSettings` i filen.

:::note Standard och vanilla max
Nuvarande referensinformation visar att standardvärdet är `4` och det normala vanilla-maxvärdet är `10`. Värden över `10` stöds vanligtvis inte på en icke-moddad Palworld-server.
:::

### Värdereferens

| Konfig-nyckel | Beskrivning | Standardvärde | Vanilla max |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Max antal baser tillåtna per guild | `4` | `10` |

:::caution Använd giltiga värden
Sätt `BaseCampMaxNumInGuild` endast till ett rimligt och stöds värde. Värden över `10` kräver oftast servermoddar och kan fungera felaktigt på en standard Palworld-server.
:::

## Spara konfigurationen

Efter att du ändrat värdet, spara filen `PalWorldSettings.ini` i ZAP-Hostings konfigurationsredigerare.

Detta sparar den nya max guild-inställningen, men den träder inte i kraft förrän servern har startats om.

## Starta om servern

När filen är sparad, starta om din Palworld-server från serveradministrationsgränssnittet.

En omstart krävs eftersom Palworld läser in konfigurationen från `PalWorldSettings.ini` vid serverstart. Utan omstart tillämpas vanligtvis inte den nya guildbasgränsen.

### Vad du behöver göra efteråt

Normalt krävs inga ytterligare konsolkommandon efter att ha redigerat `BaseCampMaxNumInGuild`. Efter omstarten ska det nya värdet vara aktivt automatiskt.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare kommandon | Nej |

:::tip Testa den nya gränsen
Efter omstarten, gå med i servern och testa basplacering med en guild för att bekräfta att den nya inställningen har tillämpats som förväntat.
:::

## Felsökning

Om inställningen för max antal guildbaser inte verkar ändras, kontrollera följande punkter.

### Verifiera konfigurationsposten

Se till att `BaseCampMaxNumInGuild` är korrekt skriven och använder ett numeriskt värde, till exempel:

```ini
BaseCampMaxNumInGuild=8
```

Ett stavfel i nyckeln eller ett ogiltigt värde kan förhindra att inställningen fungerar.

### Bekräfta att filen sparades

Kontrollera att dina ändringar sparades i `Configs` → `PalWorldSettings.ini` innan du startar om servern.

### Starta om servern helt

En fullständig serveromstart krävs efter att ha ändrat denna inställning. Om du bara sparade filen utan att starta om, kan det gamla värdet fortfarande användas.

### Håll dig inom vanilla-gränsen

Om du sätter ett värde över `10` kan servern ignorera det eller bete sig oväntat om du inte använder kompatibla moddar. Om du kör en standardserver, håll värdet på `10` eller lägre.

## Conclusion

Grattis, du har framgångsrikt ändrat det maximala antalet guildbaser på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂