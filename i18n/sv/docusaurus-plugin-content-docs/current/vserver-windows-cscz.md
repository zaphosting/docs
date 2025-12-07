---
id: vserver-windows-cscz
title: "VPS: Counter-Strike: Condition Zero Dedikerad Server Windows-Setup"
description: "Lär dig hur du snabbt och enkelt sätter upp en Counter-Strike: Condition Zero dedikerad server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Counter-Strike: Condition Zero dedikerad server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.

<InlineVoucher />

## Förberedelser

För att sätta upp en Counter-Strike: Condition Zero-server behövs SteamCMD. SteamCMD är **kommandoradsversionen av Steam-klienten**. Det här verktyget kan användas för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddas filerna ner. Det kommer innehålla filen **steamcmd.zip** som först måste packas upp. Vi rekommenderar att du skapar en separat mapp där filen kan packas upp. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Counter-Strike: Condition Zero-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör följande kommando: `login anonymous`

Nästa steg är installationen. Det görs med kommandot `app_update 90`. App-ID **90** står för **Counter-Strike: Condition Zero Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart kommer ett lyckat meddelande att visas.

För att göra servern synlig och åtkomlig utifrån måste serverportarna som används öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Du måste lägga till regler i inställningarna. Klicka på inkommande och utgående regler som visas nedan och lägg till följande portar: 27015-27020 för TCP/UDP-protokollen.



## Konfiguration

Nu har du slutfört setupen för din Counter-Strike: Condition Zero-server. Du kan göra ytterligare serverinställningar genom att redigera launch-filen direkt. Gå till din root-katalog. Inuti den, navigera till cfg-mappen och öppna filen `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Starta & anslut till din server

Nu är det dags att starta servern. Gå till huvudkatalogen för spelet och kör följande startkommando:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Du bör nu se loggar i kommandoprompten som visar att starten lyckades. Observera att första starten kan ta lite tid eftersom allt sätts upp. Alternativt kan du ansluta direkt genom att söka i serverlistans sökfält efter: `[din_ip_adress]:2456`.


## Avslutning

Grattis, du har nu installerat och konfigurerat Counter-Strike: Condition Zero-servern på din VPS! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />