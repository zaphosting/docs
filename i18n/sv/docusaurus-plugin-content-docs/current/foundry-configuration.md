---
id: foundry-configuration
title: "Foundry: Serverkonfiguration"
description: "Upptäck hur du anpassar Foundry-serverinställningar för bästa spelupplevelse och serverhantering → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Foundry-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar dem mer i detalj.

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna ändra några inställningar. Det finns flera sätt att redigera denna fil.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Det mest användarvänliga sättet är att gå till **Inställningar**-sektionen på din gameservers webbgränssnitt och leta upp rätt inställningar där, som i exemplet nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Konfigfil">

#### Via WI Konfigfil

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, att redigera konfigurationen och sedan starta om servern kommer att göra att ändringarna försvinner.
:::

Alternativt, för dig som vill redigera filen direkt, kan du gå till **Konfigurationer**-sektionen på din gameservers webbgränssnitt och klicka på den blåa knappen för att redigera filen, som i exemplet nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan göra dina ändringar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, att redigera konfigurationen och sedan starta om servern kommer att göra att ändringarna försvinner.
:::

Det sista sättet att komma åt den råa filen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Men detta tar längre tid och om du vill redigera filinnehållet direkt rekommenderar vi att du använder **Konfigurationer**-sektionen i webbgränssnittet som nämnt ovan.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

I tabellen nedan hittar du viktiga serverkonfigurationsalternativ som finns tillgängliga i Foundry-servrar.

:::tip
Vi rekommenderar inte att ändra Port-inställningarna, eftersom dessa automatiskt konfigureras av gameservern. Att ändra portvärden kan potentiellt bryta din server!
:::

### Viktiga serverinställningar

| Parameter Namn      | Exempel                  | Beskrivning                                                                          |
| ------------------- | ------------------------ | ------------------------------------------------------------------------------------ | 
| server_world_name   | ZAPDocsTest              | Sätt namnet på världen, vilket också är mappen där sparfiler lagras                   |
| server_name         | ZAP-Hosting Docs Test    | Namnet som visas i serverlistan för din server                                      |
| server_password     | iLoveZAP!2024            | Sätt ett lösenord som krävs för att ansluta till servern                            |
| server_is_public    | true/false               | Välj om servern ska visas i serverlistan                                            |
| server_port         | 3724 (standard)          | Sätt nätverksporten som spelet ska använda                                         |
| server_query_port   | 27015 (standard)         | Sätt query-porten som används för att hämta info om servern i serverlistan          |
| server_max_players  | 32                       | Sätt max antal spelare som kan vara på servern samtidigt                            |

### Spelkonfigurationsinställningar

| Parameter Namn          | Exempel     | Beskrivning                                                                       |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Välj om servern ska pausa när inga spelare är online                             |
| map_seed                | 42938743982 | Sätt ett eget seed för världsgenerering                                          |
| autosave_interval       | 300         | Sätt hur ofta servern sparar i sekunder                                          |

När du är klar med dina ändringar, glöm inte att spara filen och starta om servern. Nästa gång servern startar kommer den använda de inställningar du angett.

<InlineVoucher />