---
id: openmp-rcon
title: "Open.mp: Server med RCON"
description: "Upptäck hur du fjärrstyr spelservrar med RCON för effektiv serverhantering och säkerhet → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad är RCON?

RCON är ett gränssnitt i olika program, som spelservrar, som möjliggör fjärrunderhåll och fjärradministration. Detta gränssnitt kan användas för att hantera servrar som redan är igång och nås. Gränssnittet nås sedan via ett specifikt fjärrunderhållsprogram och servern kan därmed styras.

<InlineVoucher />

## Så här öppnar du din Konfigurationsfil

För att använda RCON måste du börja med att öppna din servers konfiguration och aktivera funktionen. Du kan redigera konfigurationsfilen antingen via serverns webbgränssnitt eller direkt via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via WI Konfigfil">

#### Via Webbgränssnittets Konfigfil

Vi rekommenderar den här metoden eftersom den är enklast.

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Gå helt enkelt till **Configs**-sektionen i ditt spelservers webbgränssnitt och klicka på den blå knappen för att redigera filen, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

En textredigerare öppnas där du kan redigera filen direkt. Leta upp `rcon`-sektionen i filen. Sätt `enable`-parametern till `true`, till exempel: `"enable":true`. Vi rekommenderar att använda `CTRL+F` för att öppna din browsers sökfunktion för att hitta rätt.

I samma sektion ska du också sätta ett lösenord för din RCON-access genom att ändra `password`-parametern. Detta förhindrar obehörig åtkomst och bör hållas hemligt.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Ett annat sätt att redigera din konfigurationsfil är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Denna metod tar dock längre tid och om du vill redigera filens innehåll direkt rekommenderar vi att du använder **Configs**-sektionen i ditt spelservers webbgränssnitt som nämnt ovan.

När du är ansluten till din server via FTP, navigera till följande mapp:
```
..g[zap_id]/gta-openmp/
```

Hitta filen `config.json` i den här mappen och öppna den. Det är serverns konfigurationsfil som du ska redigera.

I filen, leta upp `rcon`-sektionen. Sätt `enable`-parametern till `true` och ange ett lösenord för din RCON-access via `password`-parametern.

</TabItem>
</Tabs>

:::info
Glöm inte att starta om din server när du har ändrat i konfigurationen.
:::

## Använda RCON

Nu när du har aktiverat RCON i din servers konfiguration kan du nå Open.mp:s RCON-gränssnitt via den port som definierades i filen.

Du behöver använda ett RCON-program för att ansluta. Vi rekommenderar [RCON Console](https://sourceforge.net/projects/rconconsole/) eftersom det är open-source.

I det RCON-program du väljer måste du fylla i IP-adressen och porten till din server. Se till att din spelserver är online och igång.

Om anslutningen lyckas kan du nu skicka kommandon till din Palworld-server via RCON Console-programmet du valt.

:::tip
Kolla in våra [Server Commands](openmp-server-commands.md) för att se alla tillgängliga kommandon du kan köra via RCON.
:::

Du har nu framgångsrikt aktiverat RCON på din Palworld-server.

<InlineVoucher />