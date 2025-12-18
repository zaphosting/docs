---
id: fivem-changeloadingscreen
title: "FiveM: Installera Egen Loading Screen"
description: "Lär dig hur du anpassar din FiveM loading screen för en unik spelupplevelse och förbättra din servers visuella stil → Läs mer nu"
sidebar_label: Installera Egen Loading Screen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Vill du använda din egen anpassade loading screen istället för standard FiveM loading screen? Här nedan förklarar vi hur du gör och vilka steg du behöver följa!

<InlineVoucher />



## Förberedelser

För att installera din egen loading screen behöver du först hitta en passande resurs. Du hittar ett stort utbud av resurser på den officiella [Cfx.re-webbplatsen](https://forum.cfx.re/c/releases/7). Ladda sedan ner resursen och packa upp den på din dator.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installation

Installationen av loading screen görs via FTP. Anslut till din gameserver via FTP. Om du inte är bekant med FTP än, kolla in vår guide för [FTP-access](gameserver-ftpaccess.md).

När du är ansluten via FTP, navigera till resursmappen. Beroende på vilket framework du har installerat hittar du din resursmapp under följande mappstruktur: `/gXXXXXX/fivem/DITT_FRAMEWORK/resources`

Ladda upp mappen från din resurs som du tidigare laddade ner och packade upp på din dator till den här platsen.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Nu när loading screen-resursen är uppladdad behöver den läggas till i serverns konfigurationsfil `server.cfg`. Logga in i txAdmin-gränssnittet och öppna CFG Editorn.

Lägg sedan till din resurs i configen. Det gör du med kommandot `start resursnamn`. I det här exemplet blir det `start loadingscreen`. Spara ändringarna och starta om servern.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Avslutning

Om du följt alla stegen korrekt bör du se din nya loading screen efter nästa serveromstart. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />