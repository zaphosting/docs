---
id: enshrouded-configuration
title: "Enshrouded: Enshrouded Serverkonfiguration"
description: "Utforska hur du anpassar Enshrouded-serverinställningar för optimal spelupplevelse och serverhantering → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Enshrouded har vid lansering några konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje i detalj.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Sätt upp Enshrouded-server på bara 60 sekunder!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna ändra några inställningar. Det finns flera sätt att redigera den här filen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webbgränssnitt" default>

#### Via Webbgränssnitt

Det mest användarvänliga sättet är att gå till **Inställningar** på ditt spelservers webbgränssnitt och leta upp rätt inställningar där, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Via WI Konfigfil">

#### Via WI Konfigfil

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Alternativt, för dig som vill redigera råfilen direkt, kan du göra detta genom att gå till **Konfigurationer** på ditt spelservers webbgränssnitt och klicka på den blå knappen för att redigera filen, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan göra dina ändringar.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Det sista sättet att komma åt råfilen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Men det här sättet tar längre tid och om du vill redigera filens innehåll direkt rekommenderar vi att du använder **Konfigurationer** på ditt spelservers webbgränssnitt som nämnts ovan.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

Här är de konfigurationsalternativ som spelet erbjuder för att anpassa din server, främst servernamn, lösenord samt några interna inställningar.

:::tip
Vi rekommenderar inte att ändra Port, IP eller Katalog-inställningarna eftersom dessa konfigureras automatiskt av spelservern. Att ändra dessa värden kan potentiellt bryta din server!
:::

| Parameter Namn | Exempel                                 | Beskrivning                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                   | Ditt servers namn                                           |
| password       | iLoveZAP!2024                           | Lås servern med ett lösenord (privat)                       |
| saveDirectory  | ./savegame (standard)                   | Ange katalog där dina sparfiler ska lagras                  |
| logDirectory   | ./logs (standard)                       | Ange katalog där dina loggar ska lagras                      |
| ip             | 123.123.123.123                         | Publik IP som servern körs på                               |
| gamePort       | 15636 (standard)                        | Den publika port som servern kör på                         |
| queryPort      | 15637 (standard)                        | Den publika port som servern kan nås via                    |
| slotCount      | 4                                       | Max antal spelare som kan ansluta till servern (max 16)    |

När du är klar med dina ändringar, glöm inte att spara filen och starta om servern. Nästa gång servern startar kommer den använda de inställningar du angett.

<InlineVoucher />