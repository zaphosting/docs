---
id: openmp-configuration
title: "Open.mp: Open.mp Serverkonfiguration"
description: "Upptäck hur du anpassar Open.mp-serverinställningar för att optimera din spelupplevelse och serverprestanda → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Open.mp-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje i detalj.

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna redigera några parametrar. Det finns flera sätt att redigera den här filen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Det mest användarvänliga sättet att redigera grundinställningarna är att gå till **Settings**-sektionen på din gameservers webinterface och leta upp rätt inställningar där, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Tänk på att inte alla konfigurationsalternativ är tillgängliga här. Om du vill konfigurera allt, använd fliken **WI Config File** för att enkelt redigera den nödvändiga filen direkt i webinterfacet.

</TabItem>

<TabItem value="configs" label="Via WI Config-fil">

#### Via WI Config-fil

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, att redigera konfigurationen och starta om servern kommer att göra att ändringarna försvinner.
:::

För dig som vill redigera filen direkt och alla konfigurationsalternativ, kan du göra detta genom att gå till **Configs**-sektionen på din gameservers webinterface och klicka på den blåa redigeringsknappen, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan redigera filen.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, att redigera konfigurationen och starta om servern kommer att göra att ändringarna försvinner.
:::

Det sista sättet att komma åt den råa filen är via FTP. Om du inte är van vid att använda FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Den här metoden tar dock längre tid och om du vill redigera filens innehåll direkt rekommenderar vi att du använder **Configs**-sektionen på din gameservers webinterface som nämnts ovan.

När du är inloggad via din FTP-klient, navigera till följande katalog, byt ut `[zap_id]` mot ditt eget ZAP-ID:
```
..g[zap_id]/gta-openmp/
```

I den här sökvägen hittar du filen `config.json` och öppnar den. Det är serverns konfigurationsfil som du ska redigera.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

### Serverdetaljer

Det här är serverkonfigurationsalternativ som justerar din servers information i den offentliga serverlistan. Du hittar dessa alternativ i din konfigurationsfil, vilket enkelt kan göras med `CTRL+F` i din webbläsare eller redigeringsprogram för att söka.

| Parameter Namn                | Exempel                                | Beskrivning                                                                       |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------- |
| name                          | ZAP-Hosting Docs Test                  | Sätt serverns namn                                                                |
| language                      | English                              | Språket som visas i serverlistan för din server                                  |
| website                      | zap-hosting.com/                      | Lägg till en webbplats som folk kan besöka för mer info om din server            |
| discord.invite                | discord.gg/zaphosting                 | Discord-serverlänk som visas i serverlistan                                     |
| banners.light                | zap-hosting.com/lighticon.png         | Ange en URL till din banner för ljust tema som visas i serverlistan              |
| banners.dark                 | zap-hosting.com/darkicon.png          | Ange en URL till din banner för mörkt tema som visas i serverlistan              |
| game.map                     | ZAPtastic Stunt Map                   | Kartnamnet som ska visas i serverlistan                                         |
| game.mode                    | Survival                            | Spelläget som ska visas i serverlistan                                           |
| announce                     | true                                | Välj om din server ska visas i den offentliga serverlistan överhuvudtaget        |
| enable_query                 | true                                | Välj om din servers information ska visas i serverlistan                         |

När du är klar med dina ändringar, glöm inte att spara filen och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angett.

### Grundläggande serverinställningar

Det här är viktiga serverkonfigurationsalternativ som justerar din servers funktionalitet. Du hittar dessa alternativ i din konfigurationsfil, vilket enkelt kan göras med `CTRL+F` i din webbläsare eller redigeringsprogram för att söka.

| Parameter Namn                | Exempel                                | Beskrivning                                                                                  |
| ----------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- | 
| max_players                  | 50 (standard)                         | Sätt max antal spelare som servern kan hantera samtidigt                                    |
| max_bots                     | 0 (standard)                          | Sätt max antal NPC:er som servern kan hantera. Detta räknas in i max_players totalt          |
| password                     | iLoveZAP!2024                        | Sätt ett lösenord som spelare måste använda för att ansluta till servern                     |
| rcon.enable                  | true                                | Välj om RCON-funktionen ska vara aktiverad eller inaktiverad                                 |
| rcon.password                | ZAP-IS-AWESOME                      | Sätt ett lösenord som krävs för att komma åt RCON från klienter                             |
| logging.enable               | true                                | Välj om loggning ska vara aktiverad                                                         |
| logging.file                 | log.txt                             | Sökväg och filnamn som ska användas för loggning om aktiverat                              |
| logging.log_chat             | true                                | Välj om spelarchatt ska visas i serverkonsolen                                             |

När du är klar med dina ändringar, glöm inte att spara filen och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angett.

## Gameplay- & nätverksinställningar

Open.mp har ett brett utbud av gameplay- och nätverksinställningar som låter dig anpassa din server i stor utsträckning. Här sammanfattar vi några av de viktigare. Du hittar dessa alternativ i din konfigurationsfil, vilket enkelt kan göras med `CTRL+F` i din webbläsare eller redigeringsprogram för att söka.

Om du vill justera alla inställningar rekommenderar vi att du läser [open.mp:s config.json-guide](https://www.open.mp/docs/server/config.json) som visar alla tillgängliga konfigurationsalternativ.

:::tip
Vi rekommenderar inte att ändra Port eller IP-inställningarna, eftersom dessa konfigureras automatiskt av gameservern. Att ändra IP/Port kan potentiellt bryta din gameserver!
:::

| Parameter Namn                | Beskrivning                                                                                  | 
| ----------------------------- | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius         | Välj om chattradius ska vara på                                                              |
| game.chat_radius             | Sätt en radiebegränsning för chatten                                                        |
| game.time                    | Sätt den globala tiden som servern använder                                                 |
| game.use_nametags            | Aktiverar visning av namntaggar, hälsobar och rustningsbar ovanför spelare                   |
| game.use_vehicle_friendly_fire | Aktivera friendly fire för teamfordon                                                      |
| game.vehicle_respawn_time    | Fordonets respawntid i millisekunder                                                        |
| game.weather                 | Globalt väder som servern använder                                                          |
| network.bind                 | IP-adressen som servern ska använda (vi rekommenderar att inte ändra detta för gameservrar) |
| network.port                 | Porten som servern ska använda (återigen, vi rekommenderar att inte ändra detta för gameservrar) |
| network.messages_limit       | Max antal meddelanden en användare kan skicka per sekund                                    |
| network.player_timeout       | Tid i millisekunder efter vilken en spelare timeoutas om ingen data skickas till servern    |

När du är klar med dina ändringar, glöm inte att spara filen och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angett.

<InlineVoucher />