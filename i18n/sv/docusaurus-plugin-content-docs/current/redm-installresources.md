---
id: redm-installresources
title: "RedM: Installation av resurser"
description: "Upptäck hur du kan förbättra din RedM-server med populära resurser för större projekt som roleplay-servrar → Lär dig mer nu"
sidebar_label: Installera resurser
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Resurser kan användas för att utöka din RedM-server med extra funktioner. Det är särskilt intressant om du planerar att starta större projekt, som en roleplay-server eller liknande. Sånt här går inte att göra utan sådana extra resurser.

RedM och dess community erbjuder ett stort utbud av resurser. En översikt över de mest populära resurserna hittar du på Cfx.re Forum: https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## Förberedelser

Installation av resurser görs via FTP. Du behöver en FTP-klient för att ladda upp filer till din server. Om du inte är van vid att använda FTP rekommenderar vi att du kollar in vår guide för [FTP-access](gameserver-ftpaccess.md).

Nedladdade resurser erbjuds oftast i komprimerat format. Det betyder att du måste packa upp filerna med ett program som 7Zip, WinRAR eller WinZip. Den uppackade resursmappen bör innehålla minst följande filer: `__resource.lua` eller `fxmanifest.lua` samt tillhörande skriptfiler.

:::info
Om dessa filer inte finns kan det vara så att de ligger i en undermapp i resursen.
:::

## Installation

### Ladda upp filer

Nu måste du ladda upp de tidigare uppackade filerna som en egen mapp (om det inte redan är gjort). Din mapp måste laddas upp till serverns `resource`-katalog. Mappstrukturen ser vanligtvis ut så här: `/gXXXXXX/redm-txadmin/DITT_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



Vissa resurser samarbetar med en databas och innehåller därför ofta SQL-filer som måste importeras till databasen. Om så är fallet, gå till vår guide för [SQL-filimport](redm-sql-file-import.md) för att lära dig hur du gör detta.

### Aktivering

För att säkerställa att den installerade resursen laddas vid serverstart måste du först aktivera den i `server.cfg`-filen för din server. Aktiveringen görs med kommandot `start [exempel på resurs]`.

Om du till exempel har laddat upp resursen med mappnamnet `eup-ui` ska startkommandot i config-filen se ut så här:
```
start eup-ui
```

Du kan komma åt din `server.cfg`-fil via CFG-editorn i txAdmin-gränssnittet.

:::info
Se till att namnet på den tidigare skapade mappen är exakt samma som i startkommandot. Det är skiftlägeskänsligt.
:::



## Avslutning
Till sist kan du starta om din server. Den installerade resursen bör nu laddas nästa gång servern är helt igång. Du har framgångsrikt installerat en resurs på din RedM-spelserver. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />