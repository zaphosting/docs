---
id: dedicated-windows-ark
title: "Dedikerad Server: ARK Survival Evolved Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en ARK: Survival Evolved Dedikerad Server på en Windows VPS för smidig multiplayer-gaming → Lär dig mer nu"
sidebar_label: ARK Survival Evolved Dedikerad Server Setup
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera spelservrar på den? Till exempel en ARK: Survival Evolved Dedikerad Server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server. Koppla upp dig mot din VPS via RDP för att sätta upp din ARK: Survival Evolved Dedikerad Server. Om du inte vet hur du ansluter till din server via RDP rekommenderar vi att du kollar in guiden [Initial Access (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="ARK: Survival Evolved Dedikerad Server Setup på Windows VPS" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Förberedelser

För att sätta upp en ARK-server behövs SteamCMD. SteamCMD är **kommandoradsversionen av Steam-klienten**. Det här verktyget kan användas för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddas filen ner. Den innehåller **steamcmd.zip** som först måste packas upp. Vi rekommenderar att du skapar en separat mapp där filen kan packas upp. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera ARK-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör följande kommando: `login anonymous`

Nästa steg är installationen. Det görs med kommandot `app_update 376030`. App-ID **376030** står för **ARK: Survival Evolved Dedikerad Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::



Navigera till mappen där du installerade och gå till följande undermapp: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Där måste du skapa en startfil som behövs för att köra serverprogramvaran. Skapa en fil med namnet: start-ark.bat

:::info
Se till att du har aktiverat alternativet Visa filändelser så att rätt filändelse används.
:::

Öppna filen, lägg in följande innehåll och spara ändringarna:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



För att servern ska vara synlig och åtkomlig utifrån måste de portar som servern använder öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


Du måste lägga till regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande protokoll och portar:

- TCP inkommande och utgående: 27020
- UDP inkommande och utgående: 27015
- UDP inkommande och utgående: 7777-7778



## Konfiguration

Själva setupen är klar nu. Ytterligare konfigurationsändringar kan göras i configfilerna **DefaultGameUserSettings.ini** och **Gameusersettings.ini**. Där kan du ändra servernamn, serverlösenord, adminlösenord och många andra inställningar. Navigera till följande mappar för att hitta filerna:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Spela

När setupen är klar kan du starta servern genom att köra filen **start-ark.bat** som du skapade tidigare. Då öppnas serverns konsol och servern startar. Om allt går som det ska kommer servern synas i serverlistan efter en lyckad start.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

