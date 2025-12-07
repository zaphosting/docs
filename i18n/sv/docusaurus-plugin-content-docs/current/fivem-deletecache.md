---
id: fivem-deletecache
title: "FiveM: Töm Cache"
description: "Upptäck hur rensning av din FiveM-servercache förbättrar prestandan och löser fel för en smidigare spelupplevelse → Läs mer nu"
sidebar_label: Radera Cache
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Att rensa serverns cache på en FiveM-server innebär att temporärt sparade filer tas bort. Detta tvingar servern att ladda ner eller skapa alla nödvändiga filer på nytt nästa gång den startas. Det hjälper till att ta bort föråldrad eller korrupt data, vilket kan lösa prestandaproblem, skriptfel, krascher eller problem med att ladda spelvärlden.

<InlineVoucher />

## Enkel metod

Att radera cache på din FiveM-spelserver är superenkelt. Börja med att gå till din spelservers webbgränssnitt. Leta upp och öppna **Inställningar**-sektionen i webbgränssnittet.



![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)



Scrolla sedan längst ner på sidan för att hitta flera knappar under **Åtgärder**-underrubriken. Här klickar du på knappen **Radera Cache-filer** för att rensa din spelservers cache.

![img](https://screensaver01.zap-hosting.com/index.php/s/A2RiTo8gJiTibGR/download)

:::warning 
Detta kommer omedelbart att starta om din server för att rensa cache-filerna, så se till att du är redo för det.
:::


## Alternativ metod

Först behöver du ansluta till din server via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in guiden för [FTP-åtkomst](gameserver-ftpaccess.md). Nästa steg är att hitta cache-mappen och radera den. Följ sökvägen `/gXXXXXX/fivem/server-data/cache` för att komma åt cache-mappen.

![img](https://screensaver01.zap-hosting.com/index.php/s/dfpssTy8KL7B3cK/download)

Nu ska du helt enkelt rensa/tömma cachen. Klicka på **Cache**-mappen och sedan på **Filer**. Markera alla mappar som finns i **Cache**-mappen och radera dem.

![img](https://screensaver01.zap-hosting.com/index.php/s/MnHpWiDmBgHa63B/download)

Starta sedan om din FiveM-server för att ändringarna ska träda i kraft. När servern startas om kommer den att skriva om cachen. 



## Slutsats

Om du följt alla stegen har du nu framgångsrikt rensat din servercache. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />