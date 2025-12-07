---
id: dedicated-windows-dods
title: "Dedikerad Server: Day of Defeat: Source Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Day of Defeat: Source dedikerad server på din VPS eller server → Läs mer nu"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Day of Defeat: Source dedikerad server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.



## Förberedelser

För att sätta upp en Day of Defeat: Source-server behöver du SteamCMD. SteamCMD är **kommandoradsversionen av Steam-klienten**. Det här verktyget används för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Day of Defeat: Source-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör följande kommando: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 232290`. App-ID **232290** står för **Day of Defeat: Source Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett bekräftelsemeddelande.

För att servern ska vara synlig och nåbar utifrån måste serverportarna som används öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande portar: 27015-27020 för TCP/UDP-protokollen.



## Konfiguration

Nu är du klar med grunduppsättningen av din Day of Defeat: Source-server. Du kan göra fler inställningar genom att redigera startfilen direkt. Gå till din root-mapp. Inuti den, navigera till cfg-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## Registrera GSL Token

För att andra spelare ska kunna ansluta till din server måste du skapa och lägga till en Game Server Login Token (GSLT). Denna token autentiserar din server mot Steam. För att skapa en GSLT, gå till http://steamcommunity.com/dev/managegameservers och skapa en token med spel-ID 232290, som är Day of Defeat: Source.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.



## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör följande startkommando:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Du bör nu se loggar i kommandotolken som visar att servern startar som den ska. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:2456`.


## Sammanfattning

Grattis, du har nu installerat och konfigurerat din Day of Defeat: Source-server på din VPS! Har du frågor eller behöver hjälp är vår support alltid redo att hjälpa dig – varje dag! 🙂