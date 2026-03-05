---
id: server-windows-csgo
title: "CS:GO Dedikerad Server Windows Setup"
description: "Lär dig hur du snabbt och smidigt sätter upp en CS:GO dedikerad server på din server → Läs mer nu"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS/Dedikerad Server och vill installera spelservrar på den? Till exempel en CS:GO Dedikerad Server? Då har du kommit helt rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.



## Förberedelser

För att sätta upp en CS:GO-server behöver du SteamCMD. SteamCMD är **kommandoradsverktyget för Steam-klienten**. Med det här verktyget kan du snabbt och enkelt ladda ner VPS/Dedikerad Server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Därefter laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är allt klart och du kan börja installera CS:GO-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 730`. App-ID **730** står för **CS:GO Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett bekräftelsemeddelande.

För att servern ska vara synlig och nåbar utifrån måste serverportarna öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande portar: 27015-27020 för TCP/UDP.



## Konfiguration

Nu är setupen för din CS:GO-server klar. Du kan göra fler inställningar genom att redigera startfilen direkt. Gå till din root-mapp. Inuti den, navigera till cfg-mappen och öppna `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Registrera GSL-token

För att andra spelare ska kunna ansluta måste du skapa och lägga in en Game Server Login Token (GSLT). Den autentiserar din server mot Steam. Skapa en GSLT på http://steamcommunity.com/dev/managegameservers med spel-ID **4465480**, som är för nya CS:GO Standalone.

När du har token, lägg in den i serverns startparametrar med `+sv_setsteamaccount <TOKEN>`.



## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör följande startkommando:

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Du kommer se loggar i kommandoprompten som visar att servern startar. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att skriva: `[din_ip_adress]:2456`.


## Avslutning

Grattis, du har nu installerat och konfigurerat din CS:GO-server på VPS/Dedikerad Server! Har du frågor eller behöver hjälp är vår support alltid redo att hjälpa dig – varje dag! 🙂