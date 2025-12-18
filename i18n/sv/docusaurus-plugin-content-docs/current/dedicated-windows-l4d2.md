---
id: dedicated-windows-l4d2
title: "Dedikerad Server: Left 4 Dead 2 Dedikerad Server Windows Setup"
description: "Lär dig hur du snabbt och enkelt sätter upp en Left 4 Dead 2 dedikerad server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Left 4 Dead 2 dedikerad server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.



## Förberedelser

För att sätta upp en Left 4 Dead 2-server behövs SteamCMD. SteamCMD är **kommandoradsvarianten av Steam-klienten**. Det här verktyget används för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Left 4 Dead 2-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 222840`. App-ID **222840** står för **Left 4 Dead 2 Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta en stund för större spel. När det är klart ser du ett meddelande som bekräftar att allt gick bra.

För att servern ska vara synlig och nåbar utifrån måste de portar som servern använder öppnas/vidarebefordras i brandväggen. Öppna Windows-brandväggens inställningar för att göra detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som visas nedan och lägg till följande portar: 27015-27020 för TCP/UDP-protokollen.



## Konfiguration

Nu är du klar med grundinstallationen av din Left 4 Dead 2-server. Du kan göra fler inställningar genom att redigera startfilen direkt. Gå till din root-mapp. Inuti den hittar du mappen cfg och där öppnar du filen `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/l4d2-ds/l4d2/cfg/server.cfg
```

## Registrera GSL-token

För att andra spelare ska kunna ansluta till din server måste du skapa och lägga till en Game Server Login Token (GSLT). Denna token autentiserar din server mot Steam. För att skapa en GSLT, gå till http://steamcommunity.com/dev/managegameservers och skapa en token med spel-ID 222840, som är Left 4 Dead 2.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.



## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudmappen för spelet och kör följande startkommando:

```
start srcds.exe -console -game l4d2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Du bör nu se loggar i kommandotolken som visar att servern startar som den ska. Observera att första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt genom att söka på: `[din_ip_adress]:2456` i sökfältet längst ner i serverlistan.


## Avslutning

Grattis, du har nu installerat och konfigurerat din Left 4 Dead 2-server på din VPS! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂