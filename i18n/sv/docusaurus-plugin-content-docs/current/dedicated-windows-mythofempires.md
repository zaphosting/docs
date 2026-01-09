---
id: dedicated-windows-mythofempires
title: "Dedikerad Server: Myth of Empires Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Myth of Empires dedikerad server på din Windows VPS → Läs mer nu"
sidebar_label: MOE Dedikerad Server Setup
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Windows VPS och vill installera en MOE dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din server.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Hur du sätter upp Myth Of Empires Server på Windows VPS!" description="Känner du att du förstår bättre när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara föredrar att ta in info på det mest engagerande sättet!"/>



## Förberedelser
Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du har kommit in på din server behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och är verktyget som låter dig enkelt ladda ner en rad Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella webbplats](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Nu behöver du packa upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller något program som .7zip eller Winrar. Då ska du få en fil som heter **steamcmd.exe** uppackad.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Så fort meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja med installationen av MOE dedikerade servern i nästa avsnitt.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ställa in din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\MOE-Server
```
:::
 
Kör nu kommandot `app_update 1794810` som startar nedladdningen. App-ID **1794810** är **MOE**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där alla serverfiler har laddats ner.

### Komma åt PrivateServerTool

Till skillnad från vanliga SteamCMD-installationer kräver MOE att du hämtar en mapp från din lokala Steam-spelinstallation för att kunna köra servern på Windows.

Öppna Steam på din dator, högerklicka på spelet **Myth of Empires** och välj **Bläddra lokala filer** under **Hantera**-menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

I rotmappen som öppnas, hitta mappen **PrivateServerTool**. Den här mappen måste du kopiera till din server. Det gör du enkelt genom att trycka `CTRL+C` för att kopiera på din lokala PC, och `CTRL+V` för att klistra in på din Windows-server via RDP. Se till att klistra in den i rotkatalogen för din dedikerade server.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Gå sedan vidare till nästa avsnitt för att portforwarda och konfigurera din server.

### Portforwarda din server

För att din server ska vara tillgänglig för allmänheten måste du ändra portforwarding-regler för de portar som den dedikerade servern använder. Du kan göra detta antingen via Powershell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** så att du har rätt behörigheter och allt funkar som det ska.

:::info
Se till att köra Powershell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i Powershell-fönstret:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din MOE-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du först öppnar den vanliga brandväggssidan.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Du måste skapa nya regler för din MOE-server. Klicka på inkommande och utgående regler som nedan och lägg till följande protokoll och portar:
- TCP inkommande och utgående: 11888, 12888
- UDP inkommande och utgående: 11888, 12888

Använd gärna vår [Port Forwarding (Firewall)](vserver-windows-port.md)-guide om du behöver mer hjälp.

</TabItem>
</Tabs>

Gå vidare till nästa avsnitt innan du ansluter till din server för att skapa din konfigurationsfil och startfilen `.bat`.

## Konfiguration

Nu ska du använda serververktyget som finns i mappen du kopierade tidigare från dina spel-filer, för att skapa din konfigurationsfil och startfilen `.bat` som du använder för att starta servern.

Navigera till följande mapp (den du kopierade tidigare):
```
../MOE/PrivateServerTool
```

I den här mappen kör du filen **PrivateServerTool.exe**. Med det här verktyget kan du konfigurera serverinställningar som du vill, inklusive mods, spelinställningar och mycket mer.

Vi rekommenderar att du åtminstone ställer in grundläggande parametrar som **Server Name** innan du går vidare.

När du är klar, gå till fliken **Start Console** i verktyget och klicka på **Save Config** följt av **Start Server**. Då skapas filen `StartPrivateServer.bat` som du använder för att starta servern.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Vi rekommenderar att du skapar en genväg till din `StartPrivateServer.bat` genom att högerklicka och välja **Skapa genväg**, för att göra det enklare att starta.

:::note
Du kan behöva redigera sökvägen till din spelmapp i den automatiskt genererade `StartPrivateServer.bat`-filen. Öppna filen med ett verktyg som Notepad och se till att sökvägen i början av filen stämmer överens med var servern finns.

Om sökvägen är fel kan du dubbelklicka på sökvägsfältet högst upp i rotmappen för din dedikerade MOE-server för att kopiera den aktuella sökvägen och klistra in den på rätt ställe i filen.
:::

## Starta & anslut till din server

Nu är det dags att starta din server. Gå till mappen för din Myth of Empires-server och kör **StartPrivateServer.bat** (eller genvägen om du skapade en sådan) för att starta upp servern. Det öppnar serverns konsol i ett kommandofönster och startar processen. Du kan nu ansluta direkt till din server genom att gå till fliken **Custom Server** och söka efter din server i sökrutan.

:::tip
Om du har problem att ansluta till servern, öppna din `StartPrivateServer.bat`-fil med ett verktyg som Notepad och kontrollera att de två IP-parametrarna matchar IP-adressen på din Windows-server. Det ska fyllas i automatiskt av verktyget, men det är ett bra felsökningssteg.
:::

Du har nu framgångsrikt installerat Myth of Empires på din Windows Dedikerade Server.