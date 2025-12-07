---
id: satisfactory-switchexperimental
title: "Satisfactory: Experimentell Build"
description: "Upptäck fördelarna och riskerna med att använda Satisfactorys experimentella build för att få tillgång till stora uppdateringar tidigt och förbättra din spelupplevelse → Läs mer nu"
sidebar_label: Experimentell Build
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad är experimentell build?
Satisfactory finns i två versioner, den vanliga builden och den experimentella builden. Den vanliga builden är mer pålitlig, stabil och mindre buggig eftersom den är en mer färdig version. Den experimentella builden ger däremot tillgång till stora patchar först, innan de släpps som vanlig build, vilket innebär högre risk för buggar och mycket oftare uppdateringar – men fördelen är att du får testa stora uppdateringar först!

:::info
Obs: Oavsett vilken build du väljer måste både din server och din spelklient vara på samma build-version för att kunna ansluta.
:::

<InlineVoucher />

## Hur byter jag till experimentell build?
Via vårt gameserversystem är det superenkelt att byta build på servern via vår hemsida. Innan du börjar rekommenderar vi att du säkerhetskopierar dina Satisfactory-sparfiler eftersom bytet raderar alla filer.

### Säkerhetskopiera sparfiler
Att säkerhetskopiera hela din spelserver eller sparfiler är busenkelt. Gå till Satisfactory-produktens sida och klicka på fliken `Verktyg -> Säkerhetskopior`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

På den här sidan kan du göra en massa saker, bland annat automatiska säkerhetskopior som förklaras mer i [Säkerhetskopior](gameserver-backups.md). Här fokuserar vi på manuell backup.

Högst upp på sidan trycker du bara på den gröna +-ikonen och bekräftar prompten för att göra en backup av hela spelservern till din ZAP-backuplagring.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Din backup är nu skapad och du kan nå den via FTP, se [Åtkomst via FTP](gameserver-ftpaccess.md).

Alternativt kan du ladda ner sparfilerna direkt från `Savegame Manager` i webbgränssnittet. Du hittar den här [Savegame Manager](satisfactory-savegame.md).

### Byta till experimentell gameserver
Börja med att gå till din Satisfactory-produkt och klicka på fliken `Inställningar -> Spel`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Du ser sektionen `Installerade spel` som visar spel du redan har installerat. Om du bytt build tidigare finns den där och du kan gå direkt till sista steget för att aktivera spelet.

Scrolla sedan ner och öppna dropdown-menyn `Tillgängliga spel` och sök efter "Satisfactory" i sökrutan.

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Tryck på den gröna nedladdningsknappen och bekräfta installationen i prompten som dyker upp. Nedladdningen av den valda serverbuilden startar nu.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>Nedladdningen kan ta några minuter. Vänta tills den är klar innan du fortsätter med sista steget.

Nu kommer båda versionerna att visas under `Installerade spel` för framtida enkel åtkomst, så du kan smidigt växla mellan dem.

Till sist måste du aktivera spelet under `Installerade spel`. Klicka på den blå aktivera-spel-ikonen.

:::info
Varning: All data i spelet raderas vid ominstallation, se till att gå tillbaka och göra en backup om du inte redan gjort det.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Vill du byta tillbaka till vanlig build gör du samma steg men väljer den vanliga Satisfactory-servern istället!

## Byta spelklient till experimentell
:::info
Obs: Oavsett vilken build du väljer måste både din server och din spelklient vara på samma build-version för att kunna ansluta.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Börja med att öppna Steam och gå till ditt spelbibliotek. Sök efter "Satisfactory", högerklicka och välj egenskaper.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

I den nya menyn går du till fliken `Betas` och väljer `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

Klart! Nu får du vänta medan Steam uppdaterar spelet till den valda builden, sen kan du starta och njuta av din server!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
För Epic Games är det ännu enklare att byta till experimental. Gå bara till ditt bibliotek och hitta spelet "Satisfactory Experimental". Båda builds finns som separata spel i Epic Games-launchern.

Klart! Nu får du vänta medan Epic Games laddar ner och installerar spelet, sen kan du starta och njuta av din server!

</TabItem>
</Tabs>

<InlineVoucher />