---
id: fivem-installresources
title: "FiveM: Installation av resurser"
description: "Upptäck hur du kan förbättra din FiveM-server med populära resurser för större projekt som roleplay-servrar → Lär dig mer nu"
sidebar_label: Installera resurser
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introduktion

Resurser kan användas för att utöka din FiveM-server med extra funktioner. Det är särskilt intressant om du planerar att starta större projekt, som en roleplay-server eller liknande. Sånt här går inte att göra utan dessa extra resurser.

FiveM och dess community erbjuder ett stort utbud av resurser. En översikt över de mest populära resurserna hittar du på Cfx.re Forum: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Förberedelser

Installation av resurser görs via FTP. Du behöver en FTP-klient för att ladda upp filer till din server. Om du inte är van vid FTP rekommenderar vi att du kollar in vår guide för [FTP-åtkomst](gameserver-ftpaccess.md).

Nedladdade resurser kommer oftast i ett komprimerat format. Det betyder att du måste packa upp filerna med ett program som 7Zip, Winrar eller WinZip. Den uppackade resursmappen bör innehålla minst följande filer: `__resource.lua` eller `fxmanifest.lua` samt tillhörande skriptfiler.

:::info
Om dessa filer inte finns kan det vara så att de ligger i en undermapp inom resursen.
:::

## Installation

### Ladda upp filer

Nu måste du ladda upp de tidigare uppackade filerna som en egen mapp (om det inte redan är gjort). Din mapp måste laddas upp till serverns `resource`-katalog. Mappstrukturen ser vanligtvis ut så här: `/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Vissa resurser samarbetar med en databas och innehåller därför ofta SQL-filer som måste importeras till databasen. Om så är fallet, kolla in vår guide för [SQL-filimport](fivem-sql-file-import.md) för att lära dig hur du gör detta.

### Aktivering

För att säkerställa att den installerade resursen laddas vid serverstart måste du först aktivera den i `server.cfg`-filen för din server. Aktiveringen görs med kommandot `start [exempel på resurs]`.

Till exempel, om du har laddat upp resursen med mappnamnet `eup-ui`, ska startkommandot i config-filen se ut så här: 
```
start eup-ui
```

Du kan komma åt din `server.cfg`-fil via CFG Editorn i txAdmin-gränssnittet.

:::info
Se till att namnet på den tidigare skapade mappen är exakt samma som i startkommandot. Det är skiftlägeskänsligt.
:::


## Populära resurser

Letar du fortfarande efter de perfekta resurserna till din server? Bläddra igenom vår noga utvalda lista med de mest populära och starkt rekommenderade resurserna för att förbättra din spelupplevelse och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tillägg som passar ditt projekt.

<SearchableItemList items={items} />


## Avslutning
Till sist kan du starta om din server. Den installerade resursen bör nu laddas nästa gång servern är helt igång. Du har framgångsrikt installerat en resurs på din FiveM-spelserver. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />