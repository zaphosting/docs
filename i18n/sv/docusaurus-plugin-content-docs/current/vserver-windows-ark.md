---
id: vserver-windows-ark
title: "VPS: ARK Survival Evolved Dedicated Server Windows Setup"
description: "Upptäck hur du snabbt och enkelt sätter upp en ARK: Survival Evolved Dedicated Server på din Windows VPS → Läs mer nu"
sidebar_label: ARK Survival Evolved Dedicated Server Setup
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion
Har du en Windows VPS och vill installera spelservrar på den? Till exempel en ARK: Survival Evolved Dedicated Server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="ARK: Survival Evolved Dedicated Server Setup on Windows VPS" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

Anslut till din VPS via RDP för att sätta upp din ARK: Survival Evolved Dedicated Server. Om du inte vet hur du ansluter till din server via RDP rekommenderar vi att du kollar in guiden [Initial Access (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Förberedelser

För att sätta upp en ARK-server behövs SteamCMD. SteamCMD är **kommandoradsvarianten av Steam-klienten**. Det här verktyget kan användas för att snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD. 

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera ARK-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 376030`. App-ID **376030** står för **ARK: Survival Evolved Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



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



För att servern ska vara synlig och nåbar utifrån måste de portar som servern använder öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar för detta.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Lägg till nya regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till följande protokoll och portar:

- TCP inkommande och utgående: 27020
- UDP inkommande och utgående: 27015
- UDP inkommande och utgående: 7777-7778



## Konfiguration

Själva installationen är klar. Ytterligare konfigurationsändringar kan göras i konfigurationsfilerna **DefaultGameUserSettings.ini** och **Gameusersettings.ini**. Där kan du ändra servernamn, serverlösenord, adminlösenord och många andra inställningar. Navigera till följande mappar:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Spela

När allt är klart kan du starta servern genom att köra **start-ark.bat**-filen du skapade tidigare. Det ska öppna serverns konsol och starta servern. Om allt går som det ska kommer servern synas i serverlistan efter en lyckad start.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Avslutning

Grattis, du har nu installerat och konfigurerat din ARK Survival-server på VPS:en! Har du fler frågor eller problem är det bara att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />