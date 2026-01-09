---
id: ark-savegame
title: ARK Survival Evolved Importera egen savefil
description: "Upptäck hur du återställer din Ark: Survival Evolved-server med officiella eller egna backup-saves för sömlös spelkontinuitet → Lär dig mer nu"
sidebar_label: Importera savefil
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vill du importera din egen eller en officiell backup-savefil till din Ark: Survival Evolved-server? Sluta leta, den här guiden förklarar stegen för att importera din vanliga egen eller officiella backup-savefil till din nya server.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Hur du får en ARK:SE-server med officiella server-backups" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Förbered din savefil

### Officiell backup-savefil

Du måste först ladda ner din officiella servers savefil. Det kan du göra direkt från [ARK:s webbplats](https://survivetheark.com/index.php?/server-backups/), eller använda [ett community-skapad verktyg](https://arkutils.netlify.app/tools/officialdownload) för att enklare hitta din server eftersom det tillåter sökning.

:::note
Om du spelar på Xbox eller Playstation kan du tyvärr inte ladda ner officiella serverfiler. Utvecklarna har bara tillåtit världssaves från Steam och Epic-plattformarna att laddas ner fritt.
:::

Det finns två snapshots som gjordes, den första från 25 augusti 2023 och den andra från 30 september 2023. För båda måste du hitta din server och ladda ner din savefil.

:::note
Användning av din egen officiella backup-save är endast möjlig med **ARK - SE (Official backupsave compatible)** spelservervariant. Om du använder en annan version för din server kan du ändra version under **games**-sektionen på din spelservers webbgränssnitt eller använda vår [Game Change](gameserver-gameswitch.md)-guide.

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::



### Egen vanlig savefil

För att importera din egen savefil (icke-officiell) krävs alla filer från savefilen. Dessa sparas vanligtvis i **SavedArks**-mappen som finns i **Shootergame/Saved**-katalogen. Leta upp dessa filer och spara dem för den kommande importprocessen.

:::note
För detta bör du använda den vanliga **Ark: SE** spelservervarianten (utan officiellt backupsave-stöd) eftersom du importerar en vanlig savefil som inte är officiell.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::



## Ladda upp save till servern

När du har laddat ner din `.zip` savefil måste du packa upp den med ett program som 7zip eller Winrar. Oavsett vilken typ av spelserver och savefil gäller samma uppladdningsprocess.

Nu måste du logga in på din server via FTP för att ladda upp dina savefiler. Använd gärna vår [Access via FTP](gameserver-ftpaccess.md)-guide om du behöver hjälp med att logga in via din favorit FTP-klient och överföra filer.

Med din FTP-klient öppen, navigera till följande undermapp på din spelserver:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Radera alla filer från den nuvarande savefilen (eller säkerhetskopiera dem först om du vill spela på den savefilen i framtiden). Dra sedan in och ladda upp alla de uppackade filerna till denna mapp (inklusive .ark, .arktribe och .arkprofile-filer). Ha tålamod då det kan ta lite tid att ladda upp allt beroende på storleken på din savefil.

När uppladdningen är klar, starta om din server så ska de nya filerna laddas in. Du har nu framgångsrikt laddat upp en officiell backup-savefil till din Ark: Survival Evolved-spelserver.

<InlineVoucher />