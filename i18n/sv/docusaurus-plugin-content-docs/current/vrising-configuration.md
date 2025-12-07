---
id: vrising-configuration
title: "V Rising: Serverkonfiguration"
description: "Utforska hur du anpassar V Rising-serverinställningar för optimal spelupplevelse och kontroll över din servermiljö → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

V Rising-servrar kommer med en mängd olika konfigurationsparametrar som du kan anpassa efter dina önskemål. I den här guiden går vi igenom alla tillgängliga konfigurationsparametrar och förklarar varje enskilt i detalj.

<InlineVoucher />

## Så här öppnar du din konfigurationsfil

Först måste du komma åt din konfigurationsfil för att kunna ändra några inställningar. Det finns flera sätt att redigera denna fil.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Det mest användarvänliga sättet är att gå till **Inställningar**-sektionen på din spelservers webinterface och leta upp rätt inställningar där, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Konfigfil">

#### Via WI Konfigfil

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras. Om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Alternativt, för dig som vill redigera råfilen direkt, kan du gå till **Konfigurationer**-sektionen på din spelservers webinterface och klicka på den blå knappen för att redigera filen, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan göra dina ändringar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan konfigurationen kan redigeras. Om du redigerar konfigurationen och startar om servern kommer ändringarna att försvinna.
:::

Det sista sättet att komma åt råfilen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md). Men detta tar längre tid och om du vill redigera filens innehåll direkt rekommenderar vi att du använder **Konfigurationer**-sektionen på din spelservers webinterface som nämnt ovan.

</TabItem>
</Tabs>

## Serverkonfigurationsalternativ

I avsnitten nedan hittar du tabeller med information om tillgängliga konfigurationsalternativ, både för själva servern och för gameplay-inställningar.

:::tip
Vi rekommenderar inte att ändra Port-inställningarna, eftersom dessa automatiskt konfigureras av spelservern. Att ändra portvärden kan potentiellt bryta din spelserver!
:::

### Viktiga serverinställningar

Det här avsnittet sammanfattar de viktigaste serverinställningarna som finns i konfigurationsfilen **ServerHostSettings.json**. För hela listan med konfigurationsalternativ, kolla in [spelets officiella GitHub-guide](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Parameter Namn     | Exempel                  | Beskrivning                                                                |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Name               | ZAP-Hosting Docs Test    | Sätt namnet på din server                                                  |
| Description        | ZAP är bäst!             | Sätt en beskrivning för din server                                        |
| Port               | 9876 (standard)          | Ange nätverksporten som spelet ska använda                                |
| QueryPort          | 9877 (standard)          | Ange query-porten som används för att hämta info om servern i serverlistan|
| MaxConnectedUsers  | 10                       | Sätt max antal spelare som kan vara på servern samtidigt                  |
| MaxConnectedAdmins | 4                        | Sätt antal admins som kan ansluta även om servern är full                 |
| ServerFps          | 30 (rekommenderat standard) | Sätt bildfrekvensen för din server, vi rekommenderar att låta den vara standard |
| SaveName           | ZAPDocsTest              | Sätt namnet på världssparningen                                           |
| Password           | iLoveZAP!2024            | Sätt ett lösenord för din server, eller lämna tomt för inget lösenord     |
| ListOnMasterServer | true/false               | Välj om din server ska listas i serverlistan                             |
| AutoSaveCount      | 15                       | Bestäm hur många äldre sparfiler som ska sparas                           |
| AutoSaveInterval   | 600                      | Sätt intervallet mellan varje autosparning                               |
| RCON Enabled       | true/false               | Välj om RCON ska vara aktiverat                                           |
| RCON Port          | 25575                    | Sätt RCON-porten                                                          |
| RCON Password      | iLoveZAP!2024            | Sätt lösenordet för din RCON-anslutning                                  |

När du är klar med dina ändringar, glöm inte att spara filen och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angett.

### Viktiga gameplay-konfigurationsinställningar

V Rising har massor av parametrar och konfigurationsalternativ för att justera gameplay. Här sammanfattar vi de viktigaste, som finns i konfigurationsfilen **ServerGameSettings.json**.

| Parameter Namn           | Exempel                       | Beskrivning                                                                                          |
| ------------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------- | 
| GameDifficulty           | Normal                        | Sätt svårighetsgraden för din värld                                                                 |
| GameModeType             | PvP, PvE                      | Sätt vilken typ av spelläge din värld ska ha                                                        |
| CastleDamageMode         | Always, Never, TimeRestricted | Sätt när slott kan skadas, använd VSCastle-parametern för att välja tid för "TimeRestricted"        |
| PlayerDamageMode         | Always, TimeRestricted        | Sätt om andra spelare kan skadas, använd VSPlayer-parametern för att välja tid för "TimeRestricted" |
| PvPProtectionMode        | Short, Medium, Long           | Sätt hur länge nya spelare är osårbara                                                              |
| DeathContainerPermission | Anyone, ClanMembers           | Sätt vem som kan plundra föremål som droppas när en spelare dör                                     |
| CanLootEnemyContainers   | true/false                    | Sätt om en spelare kan plundra en annan spelares kista som inte tillhör klanen                      |
| BloodBoundEquipment      | true/false                    | Sätt om du behåller din utrustning efter död                                                        |
| TeleportBoundItems       | true/false                    | Sätt om föremål kan blockera dig från att teleportera via Vampire Waygates                           |
| AllowGlobalChat          | true/false                    | Slå på eller av global chat                                                                          |

När du är klar med dina ändringar, glöm inte att spara filen och starta om din server. Nästa gång servern startar kommer den använda de inställningar du angett.

<InlineVoucher />