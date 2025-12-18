---
id: vserver-windows-mythofempires
title: "VPS: Myth of Empires Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Myth of Empires dedikerad server på din Windows VPS → Läs mer nu"
sidebar_label: MOE Dedikerad Server Setup
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Windows VPS och vill installera en MOE Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din server.
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="How To Setup Myth Of Empires Server on Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser
Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inne på din server behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och är verktyget som gör det enkelt att ladda ner olika Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Downloads-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och lägg den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda unzip-funktion, eller något program som .7zip eller Winrar. Då ska du få en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Så fort meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera MOE dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja vilken mapp du vill installera servern i med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\MOE-Server
```
:::

Kör sedan kommandot `app_update 1794810` för att starta nedladdningen. App-ID **1794810** är **MOE**-applikationen.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där alla serverfiler har laddats ner.

### Kom åt PrivateServerTool

Till skillnad från vanliga SteamCMD-installationer kräver MOE att du hämtar en mapp från din lokala Steam-spelinstallation för att kunna köra servern på Windows.

Öppna Steam på din dator, högerklicka på spelet **Myth of Empires** och välj **Bläddra lokala filer** under **Hantera**-menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

I rotmappen som öppnas, hitta mappen **PrivateServerTool**. Den här mappen måste du kopiera till din server. Det gör du enkelt genom att trycka `CTRL+C` på din lokala PC och `CTRL+V` för att klistra in i din Windows-server via RDP. Se till att klistra in den i rotmappen för din dedikerade server.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Gå sedan vidare till nästa steg för att portforwarda och konfigurera din server.

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

Klistra in följande kommandon i Powershell:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din MOE-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Skapa nya regler för din MOE-server. Gör så här för inkommande och utgående regler för följande protokoll och portar:
- TCP inkommande och utgående: 11888, 12888
- UDP inkommande och utgående: 11888, 12888

Använd gärna vår [Port Forwarding (Firewall)](vserver-windows-port.md)-guide om du behöver mer hjälp.

</TabItem>
</Tabs>

Gå vidare till nästa steg innan du startar servern för att skapa din konfigurationsfil och startfilen `.bat`.

## Konfiguration

Nu ska du använda serververktyget som finns i mappen du kopierade tidigare från dina spel-filer, för att skapa din konfigurationsfil och startfilen `.bat` som du använder för att starta servern.

Navigera till den här mappen (den du kopierade tidigare):
```
../MOE/PrivateServerTool
```

Kör filen **PrivateServerTool.exe**. Med det här verktyget kan du konfigurera serverinställningar som mods, spelinställningar och mycket mer.

Vi rekommenderar att du åtminstone ställer in grundläggande parametrar som **Server Name** innan du går vidare.

När du är klar, gå till fliken **Start Console** i verktyget och klicka på **Save Config** följt av **Start Server**. Då skapas filen `StartPrivateServer.bat` som du använder för att starta servern.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Vi rekommenderar att du skapar en genväg till din `StartPrivateServer.bat` genom att högerklicka och välja **Skapa genväg**, så blir det smidigare att starta.

:::note
Du kan behöva redigera sökvägen till din spelmapp i den automatiskt genererade `StartPrivateServer.bat`-filen. Öppna filen med ett verktyg som Notepad och se till att sökvägen i början av filen stämmer överens med var servern finns.

Om sökvägen är fel kan du dubbelklicka på sökvägsfältet högst upp i rotmappen för din dedikerade MOE-server för att kopiera den aktuella sökvägen och klistra in den på rätt ställe i filen.
:::

## Starta & anslut till din server

Nu är det dags att starta servern. Gå till mappen för din Myth of Empires-server och kör **StartPrivateServer.bat** (eller genvägen om du skapade en) för att starta upp processen. Det öppnar serverns konsol i ett kommandofönster och startar servern. Du kan nu ansluta direkt till din server genom att gå till fliken **Custom Server** och söka efter din server i sökrutan.

:::tip
Om du har problem att ansluta, öppna din `StartPrivateServer.bat`-fil med ett verktyg som Notepad och kontrollera att de två IP-parametrarna matchar IP-adressen på din Windows-server. Det ska fyllas i automatiskt av verktyget, men det är ett bra felsökningssteg.
:::

## Avslutning

Grattis, du har nu installerat och konfigurerat Myth of Empires-servern på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />