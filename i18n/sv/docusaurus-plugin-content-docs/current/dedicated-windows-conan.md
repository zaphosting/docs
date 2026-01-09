---
id: dedicated-windows-conan
title: "Dedikerad Server: Conan Exiles Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en Conan Exiles Dedikerad Server på Windows Dedikerad Server för smidig spelupplevelse och serverhantering → Läs mer nu"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows Dedikerad Server och vill installera Conan Exiles dedikerade serverservice på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar denna tjänst på din server.



## Förberedelser

Börja med att ansluta till din Dedikerade Server via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

:::note Server Launcher Tool
Som ett alternativ till SteamCMD underhåller utvecklarna av Conan Exiles ett smidigt server launcher-verktyg som kan användas på Windows för att göra serverstart enklare.

Vi rekommenderar att du läser [Officiella Forumtråden](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) om du vill använda detta istället.
:::

När du har kommit in på din server behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga dedikerade serverfilerna. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner olika Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella webbplats](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller något program som .7zip eller Winrar. Då ska du få en **steamcmd.exe**-fil uppackad.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Så fort meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Conan Exiles dedikerade server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ange din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Conan-Server
```
:::

Kör nu kommandot `app_update 443030` som startar nedladdningen. App-ID **443030** är **Conan Exiles**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där serverfilerna ligger. Där kan du använda **StartServer.bat** för att starta servern. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Port Forwarding för din server

För att din server ska vara tillgänglig för allmänheten måste du ändra port forwarding-regler för de portar som den dedikerade servern använder. Det kan du göra antingen via Powershell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökruta och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så allt funkar som det ska.

:::info
Se till att köra Powershell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i Powershell-prompten:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Conan Exiles-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du startar från grundläggande Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Conan Exiles-server. Gör detta genom att lägga till inkommande och utgående regler för följande protokoll och portar:
- TCP inkommande och utgående: 7777, 25575
- UDP inkommande och utgående: 7777, 7778, 27015

Behöver du mer hjälp, kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till dessa regler är din server tillgänglig och du kan ansluta via serverns IP-adress. Vi rekommenderar att du först konfigurerar serverinställningarna enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu har du slutfört installationen av din Conan Exiles-server. Du kan göra fler inställningar via en konfigurationsfil som finns i serverns mapp.

Navigera till följande mapp:
```
../Conan-Server/Engine/Config/Windows
```

Där hittar du filen **WindowsServerEngine.ini**. I den kan du justera en mängd olika inställningar genom att lägga till specifika parametrar.

Exempelvis, för att lägga till servernamn, lösenord och admin-lösenord, lägg till följande i filen:
```
[OnlineSubsystem]
ServerName=[ditt_servernamn]
ServerPassword=[ditt_lösenord]

[ServerSettings]
AdminPassword=[ditt_adminlösenord]
```

Vi rekommenderar att du kollar in [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) för en komplett lista över tillgängliga inställningar.

## Starta & anslut till din server

Dags att starta servern! Gå till grundmappen för din Conan Exiles-server och kör **StartServer.bat** som du skapade tidigare för att starta upp servern. Det öppnar serverns konsol i ett kommandofönster och startar processen. Du kan nu ansluta direkt via spelets serverlista genom att ange serverns IP och port (standard är 7777).

## Avslutning

Grattis, du har nu installerat och konfigurerat Conan Exiles-servern på din dedikerade server! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!