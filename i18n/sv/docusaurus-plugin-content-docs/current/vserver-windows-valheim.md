---
id: vserver-windows-valheim
title: "VPS: Valheim Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Valheim dedikerad server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Valheim Dedikerad Server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Valheim Dedikerad Server Setup på Windows VPS" description="Känns det lättare att förstå när du ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser
För att sätta upp en Valheim-server behövs SteamCMD. SteamCMD är **kommandoradsverktyget för Steam-klienten**. Med det kan du snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD.

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Valheim-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 896660`. App-ID **896660** står för **Valheim Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

Gå till mappen där du installerade och vidare till undermappen:  **../steamapps/common/Valheim dedicated Server/**

Där måste du skapa en startfil som behövs för att köra serverprogramvaran. Skapa en fil med namnet: start_headless.bat

:::info
Se till att du har aktiverat alternativet för att visa filändelser så att rätt filändelse används.
:::

Öppna filen, lägg in följande innehåll och spara ändringarna:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

För att servern ska vara synlig och nåbar utifrån måste serverportarna som används öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till för portarna: 2456-2458 för TCP/UDP-protokollen.




## Konfiguration

Själva installationen är klar. Ytterligare konfigurationsändringar gör du i filen **start_headless_server.bat**. Där kan du ändra servernamn, serverlösenord, adminlösenord och många andra inställningar. Navigera till följande mapp för att göra ändringar:

```
../steamapps/common/Valheim dedicated Server/
```



## Spela

När setupen är klar kan du starta servern genom att köra filen **start_headless_server.bat** som du skapade tidigare. Då öppnas serverns konsol och servern startar. Om allt går som det ska syns servern i serverlistan efter en lyckad start.


## Avslutning

Grattis, du har nu installerat och konfigurerat Valheim på din VPS! Har du fler frågor eller problem är det bara att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />