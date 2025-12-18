---
id: dedicated-windows-hl2
title: "Dedikerad Server: Half-Life 2 Dedikerad Server Windows Setup"
description: "Lär dig hur du snabbt och smidigt sätter upp en Half-Life 2 dedikerad server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Half-Life 2 dedikerad server? Då har du kommit helt rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.



## Förberedelser

För att sätta upp en Half-Life 2-server behöver du SteamCMD. SteamCMD är **kommandoradsverktyget för Steam-klienten**. Med det här verktyget kan du snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Därefter laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Half-Life 2-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 232370`. App-ID **232370** står för **Half-Life 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett bekräftelsemeddelande.

För att servern ska vara synlig och nåbar utifrån måste serverportarna öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för att göra detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande portar: 27015-27020 för TCP/UDP.



## Konfiguration

Nu är setupen för din Half-Life 2-server klar. Du kan göra fler inställningar genom att redigera startfilen direkt. Gå till din root-mapp. Inuti den, navigera till cfg-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/hl2-ds/hl2mp/cfg/server.cfg
```

## Registrera GSL Token

För att andra spelare ska kunna ansluta till din server måste du skapa och lägga till en Game Server Login Token (GSLT). Denna token autentiserar din server mot Steam. För att skapa en GSLT, gå till http://steamcommunity.com/dev/managegameservers och skapa en token med spel-ID 232370, som är Half-Life 2.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.



## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudmappen för spelet och kör följande startkommando:

```
start srcds.exe -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Du bör nu se loggar i kommandotolken som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:2456`.


## Avslutning

Grattis, du har nu installerat och konfigurerat din Half-Life 2-server på din VPS! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂