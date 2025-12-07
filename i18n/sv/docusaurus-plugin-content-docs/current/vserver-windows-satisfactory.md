---
id: vserver-windows-satisfactory
title: "VPS: Satisfactory Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och enkelt sätter upp en Satisfactory Dedikerad Server på din VPS eller dedikerade server → Läs mer nu"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en VPS eller dedikerad server och vill installera spelservrar på den? Till exempel en Satisfactory Dedikerad Server? Då har du kommit rätt! Här går vi igenom steg för steg hur du installerar en sådan tjänst på din server.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Satisfactory Dedikerad Server Setup på Windows VPS" description="Känns det lättare att förstå när du ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser

För att sätta upp en Satisfactory-server behövs SteamCMD. SteamCMD är **kommandoradsverktyget för Steam-klienten**. Med det kan du snabbt och enkelt ladda ner dedikerade server-applikationer för populära Steam-spel. Du hittar SteamCMD på Valves officiella utvecklarsida: https://developer.valvesoftware.com/wiki/SteamCMD.

Efter det laddar du ner filen. Den innehåller **steamcmd.zip** som du först måste packa upp. Vi rekommenderar att du skapar en separat mapp där du packar upp filen. Du ska då se **steamcmd.exe**. Kör den och vänta tills installationen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Satisfactory-servern.



## Installation

Efter installationen ska du kunna köra kommandon i **Steam-kommandoraden (steamcmd.exe)**. Där behöver du logga in. Det gör du med användaren **anonymous**. Kör kommandot: `login anonymous`

Nästa steg är installationen. Det gör du med kommandot `app_update 1690800`. App-ID **1690800** står för **Satisfactory Dedicated Server**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::



Navigera till mappen där du installerade och gå till undermappen: **../steamapps/common/SatisfactoryDedicatedServer**

Där behöver du skapa en startfil som krävs för att köra serverprogramvaran. Skapa en fil med namnet: server-start.bat

:::info
Se till att du har aktiverat alternativet Visa filändelser så att rätt filändelse används.
:::

Öppna filen, lägg in följande innehåll och spara ändringarna:

```
Factoryserver.exe -log -unattended
```



Kör sedan filen. Vid första starten bör ett popup-fönster dyka upp som säger att vissa komponenter behövs för att programmet ska fungera. Spelet kräver Visual C++ Runtime. Klicka på Ja och slutför installationen.

För att servern ska vara synlig och nåbar utifrån måste serverportarna som används öppnas/vidarebefordras i brandväggen. Öppna Windows brandväggsinställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


Du måste lägga till regler i inställningarna. Klicka på inkommande och utgående regler som nedan och lägg till dem för UDP-protokollet och port 15000.



## Konfiguration

Själva grunduppsättningen är klar. Ytterligare konfigurationsändringar kan göras i **ServerSettings.ini**-filen. Där kan du ändra servernamn, lösenord och andra inställningar. Navigera till:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Spela

När allt är klart kan du starta servern genom att köra **server-start.bat**-filen du skapade tidigare. Det ska öppna serverns konsol och starta servern. Om allt funkar som det ska, kommer servern synas i serverlistan efter en lyckad start.



## Avslutning

Grattis, du har nu installerat och konfigurerat Satisfactory-servern på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns här för dig varje dag!

<InlineVoucher />