---
id: rimworldtogether-configuration
title: "RimWorld Together: Serverkonfiguration"
description: "Utforska RimWorld Together-serverinställningar för att anpassa gameplay och hantera åtkomst för en skräddarsydd multiplayerupplevelse → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RimWorld Together-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje i detalj.

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna redigera några parametrar. Just nu är det enda sättet att redigera dessa filer via FTP-åtkomst till din server. Om du inte är van vid att använda FTP rekommenderar vi att du kollar in guiden [Åtkomst via FTP](gameserver-ftpaccess.md).

:::note
Servern måste vara stoppad innan några konfigurationsfiler kan redigeras, att redigera en konfig och sedan starta om servern kommer att göra att ändringarna försvinner.
:::

När din FTP-klient är redo, navigera till följande mapp:
```
../rimworld-together/Core
```

Den här mappen innehåller en mängd `.json`-konfigurationsfiler för din RimWorld Together-server.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Serverkonfigurationsalternativ

I avsnitten nedan presenterar vi info om hur du justerar några populära och vanliga konfigurationsalternativ för din RimWorld Together-server. Du kan lära dig mer om varje fil genom att läsa den [officiella RimWorld Together-guiden](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) som täcker konfigurationsalternativ.

:::tip
Vi rekommenderar inte att du ändrar Port- eller IP-inställningarna i **ServerConfig.json**-filen, eftersom dessa automatiskt konfigureras av spelservern. Att ändra dessa värden kan potentiellt krascha din spelserver!
:::

#### Server Whitelist

Att slå på eller av serverns whitelist är enkelt. Öppna konfigurationsfilen **Whitelist.json** och sätt parametern `UseWhitelist` till true.

Justera sedan parametern `WhitelistedUsers` genom att lägga till in-game-användarnamn på de personer du vill ska finnas på listan. Alla som inte finns på listan kommer inte kunna ansluta.

#### Gameplay-inställningar

Du kan justera en rad svårighetsparametrar för dina RimWorld Together-servrar via filen **DifficultyValues.json**.

Att justera sparspelsinställningarna går också att göra via **WorldConfig.json**. Vi rekommenderar att du inte ändrar denna fil när du är långt in i ditt spel, eftersom det kan förstöra upplevelsen.

<InlineVoucher />