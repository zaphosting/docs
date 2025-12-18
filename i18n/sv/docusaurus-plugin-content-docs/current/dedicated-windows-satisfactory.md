---
id: dedicated-windows-satisfactory
title: "Dedikerad Server: Satisfactory Dedikerad Server Windows Setup"
description: "Lär dig hur du sätter upp en Satisfactory Dedikerad Server på din server för smidig spelupplevelse och hantering → Läs mer nu"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en dedikerad server och vill installera spelservrar på den? Till exempel en Satisfactory Dedikerad Server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Satisfactory Dedikerad Server Setup på Windows VPS" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Förberedelser

För att sätta upp en Satisfactory-server behövs SteamCMD. SteamCMD är **kommandoradsutgåvan av Steam-klienten**. Det här verktyget kan användas för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddas filerna ner. Det kommer innehålla filen **steamcmd.zip** som först måste packas upp. Vi rekommenderar att du skapar en separat mapp där filen kan packas upp. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Satisfactory-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör följande kommando: `login anonymous`

Nästa steg är installationen. Det görs med kommandot `app_update 1690800`. App-ID **1690800** står för **Satisfactory Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en liten stund, men det är värt att ha tålamod! :)
:::



Navigera till mappen där du installerade och gå till följande undermapp: **../steamapps/common/SatisfactoryDedicatedServer**

Där behöver du skapa en startfil som krävs för att köra serverprogramvaran. Skapa en fil med namnet: server-start.bat

:::info
Se till att du har aktiverat alternativet för att visa filändelser så att rätt filändelse används.
:::

Öppna filen, lägg in följande innehåll och spara ändringarna:

```
Factoryserver.exe -log -unattended
```



Kör sedan filen. Vid första starten bör ett popup-fönster dyka upp som säger att vissa komponenter behövs för att programmet ska fungera. Spelet kräver Visual C++ Runtime. Klicka på Ja och slutför installationen. 

För att göra servern synlig och åtkomlig utifrån måste serverportarna som används öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


Du måste lägga till regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till dem för UDP-protokollet och port 15000.



## Konfiguration

Själva grunduppsättningen är klar. Ytterligare konfigurationsändringar kan göras i konfigfilen **ServerSettings.ini**. Där kan du ändra servernamn, serverlösenord och andra inställningar. Navigera till följande mapp: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Spela

När allt är klart kan du starta servern genom att köra **server-start.bat**-filen du skapade tidigare. Då öppnas serverns konsol och servern startar. Om allt går som det ska ska servern synas i serverlistan efter en lyckad start.



