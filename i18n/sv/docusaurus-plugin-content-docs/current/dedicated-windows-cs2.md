---
id: dedicated-windows-cs2
title: "Dedikerad Server: Counter-Strike 2 Dedikerad Server Windows Setup"
description: "Lär dig hur du snabbt och smidigt sätter upp en Counter-Strike 2 dedikerad server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Counter-Strike 2 dedikerad server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.



## Förberedelser

För att sätta upp en Counter-Strike 2-server behöver du SteamCMD. SteamCMD är **kommandoradsvarianten av Steam-klienten**. Det här verktyget används för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Counter-Strike 2-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 730`. App-ID **730** står för **Counter-Strike 2 Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett bekräftelsemeddelande.

För att servern ska vara synlig och nåbar utifrån måste serverportarna öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande portar: 27015-27020 för TCP/UDP.



## Konfiguration

Nu är setupen för din Counter-Strike 2-server klar. Du kan göra fler inställningar genom att redigera launch-filen direkt. Gå till din root-mapp. Inuti den, navigera till cfg-mappen och öppna `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/cs2-ds/game/csgo/cfg/server.cfg
```

## Registrera GSL Token

För att andra spelare ska kunna ansluta till din server måste du skapa och lägga till en Game Server Login Token (GSLT). Denna token autentiserar din server mot Steam. För att skapa en GSLT, gå till http://steamcommunity.com/dev/managegameservers och skapa en token med spel-ID 730, som är Counter-Strike 2.

När du har token, lägg till den i dina serverstartparametrar med `+sv_setsteamaccount <TOKEN>`.



## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudmappen för spelet och kör följande startkommando:

```
.\cs2.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Du ska nu se loggar i kommandotolken som visar att servern startat korrekt. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt via serverlistans sökfält genom att söka på: `[din_ip_adress]:2456`.


## Avslutning

Grattis, du har nu installerat och konfigurerat din Counter-Strike 2-server på din VPS! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂