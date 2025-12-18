---
id: soulmask-configuration
title: "Soulmask: Serverkonfiguration"
description: "Utforska hur du anpassar Soulmask-serverinställningar och optimerar gameplay-konfigurationer för en skräddarsydd spelupplevelse → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Soulmask-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje i detalj.

<InlineVoucher />

## Så här kommer du åt din konfigurationsfil

Först måste du komma åt dina konfigurationsfiler för att kunna redigera några parametrar. Du kan justera dina serverinställningar via webgränssnittet och dina gameplay-inställningar via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webgränssnitt" default>

#### Via Webgränssnitt

Huvudsättet att komma åt dina serverkonfigurationsalternativ är att gå till **Inställningar**-sektionen i ditt spelservers webgränssnitt och leta upp rätt inställningar där, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan du kan redigera konfigurationen, att redigera konfigurationen och sedan starta om servern kommer göra att ändringarna försvinner.
:::

Huvudsättet att komma åt din gameplay-konfigurationsfil är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md).

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ
I följande avsnitt går vi igenom hur du kommer åt konfigurationsalternativen samt utforskar några av de tillgängliga inställningarna för både server och gameplay.

### Viktiga serverinställningar

Just nu är det enda sättet att justera serverinställningar via **Inställningar**-sektionen i ditt spelservers webgränssnitt. Här kan du ändra följande:

| Parameter Namn       | Exempel               | Beskrivning                                             |
| -------------------- | --------------------- | ------------------------------------------------------- | 
| Servernamn           | ZAP-Hosting Docs Test | Sätt namnet på din server                                |
| Spelserverlösenord   | iLoveZAP!2024         | Sätt ett lösenord för din server, eller lämna tomt för inget |
| Adminlösenord        | iLoveZAP!2024         | Sätt ett lösenord för adminåtkomst                       |
| Spelläge             | PVE/PVP               | Välj om du vill att spelet ska vara PVE eller PVP       |

När du är klar, glöm inte att klicka på spara-knappen längst ner i sektionen och starta om din server.

### Gameplay-konfigurationsinställningar

För tillfället är det enda sättet att komma åt konfigurationsfilen via FTP. Se till att stoppa servern innan du redigerar filen, annars riskerar ändringarna att försvinna.

Navigera till följande sökväg och öppna filen **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Den här filen innehåller en hel del gameplay-konfigurationsalternativ som du kan justera efter eget tycke.

När du är klar med dina ändringar, spara filen och starta om servern. Nästa gång servern startar kommer den använda de inställningar du angett.

<InlineVoucher />