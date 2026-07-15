---
id: palworld-max-guild-players
title: "Palworld: Max Antal Guild-spelare"
description: "Lär dig hur du ändrar gränsen för guild-spelare i Palworld genom att redigera inställningen för max guild-spelare på din server. -> Läs mer nu"
sidebar_label: Palworld: Max Guild Players
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur många spelare som kan gå med i en och samma guild på din server. I den här guiden lär du dig hur du manuellt ändrar maxgränsen för guild-spelare genom att redigera rätt konfigurationsfil i din ZAP-Hosting spelserveradministration.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld spelserveradministration i ZAP-Hostings webbgränssnitt.

:::info Krav på åtkomst till konfiguration
Du behöver åtkomst till din Palworld-serveradministration och avsnittet `Configs`, eftersom denna inställning måste ändras manuellt i serverns konfigurationsfil.
:::

## Hitta rätt konfigurationsfil

För att ändra gränsen för guild-spelare måste du redigera filen `PalWorldSettings.ini`.

I din ZAP-Hosting spelserveradministration:

1. Öppna din **Palworld**-server
2. Gå till **Configs**
3. Öppna filen som heter `PalWorldSettings.ini`

Denna fil innehåller de viktigaste gameplay-konfigurationsvärdena för din Palworld-server, inklusive guild-relaterade inställningar.

## Redigera inställningen för max guild-spelare

Inuti `PalWorldSettings.ini`, leta efter konfigurationsraden `OptionSettings`. Gränsen för guild-spelare styrs av nyckeln `GuildPlayerMaxNum`.

### Konfigurationsvärde

Använd följande inställning för att definiera max antal spelare som tillåts i en guild:

```ini
GuildPlayerMaxNum=[your_value]
```

Byt ut `[your_value]` mot det antal spelare du vill tillåta per guild.

### Standard- och exempelvärden

| Konfig-nyckel | Beskrivning | Standardvärde |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Max antal spelare som tillåts i en guild | `20` |

Om du till exempel vill tillåta upp till `30` spelare per guild, sätt:

```ini
GuildPlayerMaxNum=30
```

:::note Redigera befintlig OptionSettings-rad
I Palworld lagras serverinställningar vanligtvis i en enda `OptionSettings=(...)`-post. Du behöver oftast ändra det befintliga värdet för `GuildPlayerMaxNum` inom den raden istället för att lägga till en ny duplicerad post.
:::

### Exempelutdrag

Din konfiguration kan se ut ungefär så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Om din fil redan innehåller många inställningar inom `OptionSettings=(...)`, ändra endast `GuildPlayerMaxNum` och låt övriga värden vara oförändrade.

:::caution Undvik duplicerade nycklar
Lägg inte till `GuildPlayerMaxNum` flera gånger i samma konfigurationsblock. Duplicerade nycklar kan orsaka oväntat beteende eller göra det oklart vilket värde servern använder.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat värdet:

1. Spara ändringarna i `PalWorldSettings.ini`
2. Starta om din Palworld-server

En omstart krävs för att den nya gränsen för guild-spelare ska laddas av servern.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Inget verifierat kommando krävs |

:::tip Omstart krävs
Det uppdaterade värdet för max guild-spelare gäller inte direkt medan servern körs. Du måste starta om servern helt efter att ha sparat konfigurationen.
:::

## Verifiera den nya guild-gränsen

När servern har startat om ska den nya gränsen för guild-storlek vara aktiv för spelare som går med i eller hanterar guilds på din Palworld-server.

Om ändringen inte verkar gälla, kontrollera följande:

- att du redigerade rätt fil: `PalWorldSettings.ini`
- att `GuildPlayerMaxNum` är korrekt skriven
- att värdet finns inom den aktiva `OptionSettings=(...)`-konfigurationen
- att serveromstarten slutfördes utan problem

:::caution Formateringskrav för konfiguration
Palworlds konfigurationsfiler är känsliga för formatering. Om du av misstag tar bort kommatecken, parenteser eller andra befintliga värden inom `OptionSettings=(...)` kan servern ignorera inställningen eller misslyckas med att läsa in den korrekt.
:::

## Conclusion

Grattis, du har nu ändrat maxgränsen för guild-spelare på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂