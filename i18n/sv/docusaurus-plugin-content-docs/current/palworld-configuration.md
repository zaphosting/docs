---
id: palworld-configuration
title: "Palworld: Palworld Serverkonfiguration"
description: "Utforska hur du anpassar Palworld-serverinställningar för en skräddarsydd spelupplevelse och optimera ditt gameplay → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Palworld-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje enskilt i detalj.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Sätt upp Palworld-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna redigera några parametrar. Det finns flera sätt att göra detta på.

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

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan göra dina ändringar.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Det sista sättet att komma åt råfilen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Men detta tar längre tid, och om du vill redigera filinnehållet direkt rekommenderar vi att du använder **Konfigurationer**-sektionen på ditt spelservers webbgränssnitt som nämnt ovan.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

### Aktivera Crossplay-stöd

Palworld dedikerade servrar stödjer flera plattformar, så du kan använda crossplay. Steam-plattformen är förvald. Vill du aktivera stöd för Xbox, PS5 och Mac kan du göra det i spelserverns administration under inställningarna.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Crossplay mellan Steam & Microsoft Store/Xbox-versionerna är fortfarande inte möjligt. Din server kan antingen vara inställd för Steam eller för Microsoft Store/Xbox.
:::

:::info
På Xbox-konsoler kan du inte ansluta direkt via IP-adress, så om du planerar att spela på Xbox måste du göra din dedikerade server publik.

Du bör också sätta ett servernamn som är lätt att hitta, se vår [Serverkonfiguration](palworld-configuration.md)-guide för hur du gör detta.
:::

### Viktiga serverinställningar

Det här är serverkonfigurationsalternativ som är viktiga för att anpassa din servers listning, skydda den med lösenord och andra interna inställningar.

:::tip
Vi rekommenderar inte att du ändrar Port eller IP-inställningar, eftersom dessa konfigureras automatiskt av spelservern. Att ändra IP/Port kan potentiellt bryta din spelserver!
:::

| Parameter Namn                | Exempel                                | Beskrivning                                               |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------- | 
| ServerPlayerMaxNum            | 4                                     | Max antal spelare som kan ansluta till servern (max 32)  |
| ServerName                   | ZAP-Hosting Docs Test                 | Ditt servers namn                                         |
| ServerDescription            | Detta är en server vi testar på       | Din servers beskrivning                                  |
| AdminPassword                | ctRQvhPAWVHq                         | Admin-lösenord för admin-kommandon                        |
| ServerPassword               | iLoveZAP!2024                       | Lås servern med lösenord (privat)                         |
| PublicPort                   | 8211 (standard)                      | Den publika port som servern kör på                       |
| PublicIP                     | 123.123.123.123                     | Publik IP som servern kör på                              |
| RCONEnabled                  | true                                | Aktivera användning av RCON                                |
| RCONPort                     | 8222                                | Portnummer som används för RCON                            |

När du är klar med dina ändringar, glöm inte att spara filen och starta om servern. Nästa gång servern startar kommer den använda de inställningar du angivit.

### Gameplay-konfigurationsinställningar

Dessa är mindre viktiga serverinställningar, mest för att ändra gameplay och progression samt kartan och världen du spelar i.

| Parameter Namn                  | Beskrivning                                      | 
| ------------------------------ | ------------------------------------------------ | 
| DayTimeSpeedRate               | Ställ in tidsfarten under dagen                   |
| NightTimeSpeedRate             | Ställ in tidsfarten under natten                   |
| ExpRate                       | Sätt hastigheten för hur snabbt du får erfarenhet (XP) |
| PalCaptureRate                | Hastighet för att fånga Pals                       |
| PalSpawnNumRate               | Frekvens för Pal-spawn                             |
| PalDamageRateAttack           | Skada från pals multiplikator                      |
| PalDamageRateDefense          | Skada på pals multiplikator                        |
| PlayerDamageRateAttack        | Skada från spelare multiplikator                   |
| PlayerDamageRateDefense       | Skada på spelare multiplikator                      |
| PlayerStomachDecreaceRate     | Spelarens hungerförbrukning                         |
| PlayerStaminaDecreaceRate     | Spelarens uthållighetsminskning                     |
| PlayerAutoHPRegeneRate        | Spelarens automatiska HP-regenerering               |
| PlayerAutoHpRegeneRateInSleep | Spelarens HP-regenerering under sömn                 |
| PalStomachDecreaceRate        | Pals hungerförbrukning                              |
| PalStaminaDecreaceRate        | Pals uthållighetsminskning                           |
| PalAutoHPRegeneRate           | Pals automatiska HP-regenerering                     |
| PalAutoHpRegeneRateInSleep    | Pals HP-regenerering under sömn (i Palbox)           |
| BuildObjectDamageRate         | Skada på byggnadsobjekt multiplikator               |
| BuildObjectDeteriorationDamageRate | Byggnadsförslitningshastighet                      |
| CollectionDropRate            | Samlingsbara föremåls multiplikator                  |
| CollectionObjectHpRate        | Samlingsbara objekts HP multiplikator                 |
| CollectionObjectRespawnSpeedRate | Samlingsbara objekts respawn-intervall               |
| EnemyDropItemRate             | Multiplikator för föremål som droppas av fiender     |
| DeathPenalty                  | Dödsstraff (Inget/Föremål)                           |
| GuildPlayerMaxNum             | Max antal spelare i guild                             |
| PalEggDefaultHatchingTime     | Tid (timmar) för att kläcka massivt ägg              |

När du är klar med dina ändringar, glöm inte att spara filen och starta om servern. Nästa gång servern startar kommer den använda de inställningar du angivit.

<InlineVoucher />