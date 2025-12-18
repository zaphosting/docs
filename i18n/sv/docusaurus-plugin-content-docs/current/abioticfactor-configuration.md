---
id: abioticfactor-configuration
title: "Abiotic Factor: Serverkonfiguration"
description: "Utforska hur du anpassar Abiotic Factor-serverinställningar för att optimera din spelupplevelse och serverprestanda → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Abiotic Factor-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje i detalj.

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna redigera några parametrar. Det finns flera sätt att redigera denna fil.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Det mest användarvänliga sättet är att gå till **Inställningar**-sektionen på din gameservers webinterface och leta upp rätt inställningar där, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Config-fil">

#### Via WI Config-fil

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Alternativt, för dig som vill redigera råfilen direkt, kan du göra detta genom att gå till **Configs**-sektionen på din gameservers webinterface och klicka på den blåa knappen för att redigera filen, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan göra dina ändringar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras, om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Det sista sättet att komma åt råfilen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Men detta tar längre tid och om du vill redigera filens innehåll direkt rekommenderar vi att du använder **Configs**-sektionen på din gameservers webinterface som nämnt ovan.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

I avsnitten nedan hittar du tabeller med information om en mängd olika konfigurationsalternativ som finns tillgängliga för Abiotic Factor dedikerade servrar.

### Viktiga serverinställningar

Dessa inställningar kan endast ändras direkt via din gameservers webinterface-panel under **Inställningar**-sektionen.

| Parameter Namn     | Exempel                  | Beskrivning                                                               |
| ------------------ | ------------------------ | ------------------------------------------------------------------------- | 
| Servernamn         | ZAP-Hosting Docs Test    | Sätt namnet på din server                                                 |
| Lösenord           | iLoveZAP!2024            | Sätt ett lösenord för din server, eller lämna tomt för inget lösenord     |

När du är klar med dina ändringar, glöm inte att spara filen där det behövs och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angivit.

### Gameplay-konfigurationsinställningar

Abiotic Factor har en mängd olika gameplay-konfigurationsalternativ som kallas **Sandbox Settings**. En fil som heter **SandboxSettings.ini** ska finnas i huvudmappen `world` när du ansluter till din server via FTP.

Om du inte ser denna fil, skapa den lokalt på din dator och kopiera följande innehåll: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Du kan nu justera värdena som du vill. När du är klar, ladda upp filen till huvudmappen `world` via FTP, på följande sökväg:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

I tabellen nedan sammanfattar vi några viktiga gameplay-inställningar som finns i **SandboxSettings.ini**-filen. Vill du se alla tillgängliga alternativ, kolla in [Officiella GitHub-sidan](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Parameter Namn               | Exempel    | Beskrivning                                                             |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false | Slå på eller av om loot ska spawnas runt kartan                        |
| PowerSocketsOffAtNight       | true/false | Slå på eller av om strömmen ska vara avstängd under natten             |
| DayNightCycleSpeedMultiplier | 1.0        | Sätt hastighetsmultiplikator för dag- och nattcykeln                   |
| EnemySpawnRate               | 1.0        | Sätt frekvensen för hur ofta fiender spawnar                           |
| EnemyHealthMultiplier        | 1.0        | Sätt multiplikator för fienders hälsa                                  |
| EnemyPlayerDamageMultiplier  | 1.0        | Sätt multiplikator för hur mycket skada fiender gör på spelare         |
| DetectionSpeedMultiplier     | 1.0        | Sätt multiplikator för hur snabbt fiender kan upptäcka spelare         |
| PlayerXPGainMultiplier       | 1.0        | Sätt multiplikator för XP som spelare tjänar                           |
| ItemStackSizeMultiplier      | 1.0        | Sätt multiplikator för hur mycket items som kan staplas i en inventarieplats |
| ItemDurabilityMultiplier     | 1.0        | Sätt multiplikator för itemens hållbarhet                              |
| ShowDeathMessages            | true/false | Slå på eller av om spelare ska få meddelanden om entitetsdöd           |
| AllowRecipeSharing           | true/false | Slå på eller av om spelare kan dela recept för items                   |

När du är klar med dina ändringar, glöm inte att spara filen där det behövs och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angivit.

<InlineVoucher />