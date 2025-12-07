---
id: dedicated-windows-cscz
title: "Dedikerad Server: Counter-Strike: Condition Zero Dedikerad Server Windows Setup"
description: "Lär dig hur du snabbt och enkelt sätter upp en Counter-Strike: Condition Zero dedikerad server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Counter-Strike: Condition Zero dedikerad server? Då är du helt rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.



## Förberedelser

För att sätta upp en Counter-Strike: Condition Zero-server behövs SteamCMD. SteamCMD är **kommandoradsvarianten av Steam-klienten**. Det här verktyget kan användas för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Counter-Strike: Condition Zero-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 90`. App ID **90** står för **Counter-Strike: Condition Zero Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ha tålamod medan nedladdningen pågår, det kan ta lite tid för större spel. När det är klart får du ett bekräftelsemeddelande.

För att servern ska vara synlig och nåbar utifrån måste serverportarna som används öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Du behöver lägga till regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande portar: 27015-27020 för TCP/UDP-protokollen.



## Konfiguration

Nu är setupen för din Counter-Strike: Condition Zero-server klar. Du kan göra ytterligare serverinställningar genom att redigera startfilen direkt. Gå till din root-mapp. Inuti den navigerar du till cfg-mappen och öppnar filen `server.cfg`. Där kan du ändra serverinställningar.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör följande startkommando:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Du bör nu se loggar i kommandotolken som visar att servern startat. Tänk på att första starten kan ta lite tid eftersom allt ska sättas upp. Alternativt kan du ansluta direkt via sökfältet längst ner i serverlistan genom att söka på: `[din_ip_adress]:2456`.


## Avslutning

Grattis, du har nu installerat och konfigurerat din Counter-Strike: Condition Zero-server på din VPS! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂