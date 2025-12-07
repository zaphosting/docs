---
id: moe-configuration
title: "Myth of Empires: Serverkonfiguration"
description: "Upptäck hur du anpassar din Myth of Empires-server för bästa spelupplevelse och kontroll → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Myth of Empires har en mängd olika konfigurationsalternativ som låter dig skräddarsy din server precis som du vill ha den. I den här guiden går vi igenom några av de tillgängliga konfigurationsparametrarna och förklarar dem mer i detalj.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Sätt upp Myth Of Empires-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna ändra några inställningar. Det finns flera sätt att redigera den här filen.

:::tip
Vi rekommenderar starkt att använda **Webinterface**-metoden eftersom MOE har många konfigurationsalternativ och filer, vilket gör det mycket smidigare än att redigera värden direkt i filerna.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Det mest användarvänliga sättet är att gå till **Settings**-sektionen i ditt spelservers webinterface och leta upp rätt inställningar där, som i exemplet nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Här kan du se en mängd olika sektioner och inställningar där du kan ändra värden direkt.

</TabItem>

<TabItem value="configs" label="Via WI Konfigfil">

#### Via WI Konfigfil

:::note
Servern måste vara stoppad innan du kan redigera konfigurationen. Om du redigerar filen och startar om servern kommer ändringarna att försvinna.
:::

Alternativt, för dig som vill redigera råa konfigurationsfiler direkt, kan du gå till **Configs**-sektionen i ditt spelservers webinterface. För att redigera en konfigurationsfil, klicka på den blå redigeringsknappen, som i exemplet nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Det öppnar en textredigerare direkt på sidan där du kan göra dina ändringar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan du kan redigera konfigurationen. Om du redigerar filen och startar om servern kommer ändringarna att försvinna.
:::

Det sista sättet att komma åt filen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Men det här sättet tar längre tid, och om du vill redigera filinnehållet direkt rekommenderar vi att du använder **Settings**-sektionen i webinterfacet som nämnts ovan.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

Här har vi plockat ut några av de viktigaste och mest centrala serverinställningarna som du troligtvis vill ändra, inklusive några interna inställningar.

:::tip
Vi rekommenderar inte att ändra Port, IP eller Directory-inställningarna eftersom dessa konfigureras automatiskt av spelservern. Att ändra dessa kan potentiellt krascha din server!
:::

| Parameter Namn | Exempel                                | Beskrivning                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                  | Namnet på din server                                      |
| password       | iLoveZAP!2024                         | Lås servern med ett lösenord (privat)                     |
| description    | This is a cool server!                 | Lägg till en beskrivning för din server                   |
| gamemode       | PVE / PVP                            | Sätt spelmode för din server                              |
| mapname        | Central Island                       | Välj karta för din server                                 |
| difficulty     | 1                                    | Svårighetsgrad för din värld                              |

När du är klar med dina ändringar, glöm inte att spara filen och starta om servern. Nästa gång servern startar kommer den använda de inställningar du angett.

<InlineVoucher />