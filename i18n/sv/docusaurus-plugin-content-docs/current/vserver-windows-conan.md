---
id: vserver-windows-conan
title: "VPS: Conan Exiles Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Conan Exiles dedikerad server på din Windows VPS → Läs mer nu"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Conan Exiles dedikerade server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

:::note Server Launcher Tool
Som ett alternativ till SteamCMD underhåller utvecklarna av Conan Exiles ett smidigt server launcher-verktyg som kan användas på Windows för att göra serverstart enklare.

Vi rekommenderar att du läser [Officiella Forumtråden](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) om du vill använda detta istället.
:::

När du är inloggad på din server behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda unzip-funktion eller något program som 7zip eller Winrar. Då får du en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Conan Exiles dedikerade server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade. Du måste logga in innan du kan göra något, med användaren **anonymous**, genom att skriva: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ange din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Conan-Server
```
:::

Kör sedan kommandot `app_update 443030` för att starta nedladdningen. App-ID **443030** är för **Conan Exiles**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där filerna laddats ner. Där kan du använda **StartServer.bat** för att starta servern. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Portforwarding för din server

För att din server ska vara tillgänglig för allmänheten måste du öppna portarna som den dedikerade servern använder. Det kan du göra antingen via Powershell-kommandon (enklast) eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** så att du har rätt behörigheter.

:::info
Se till att köra Powershell som administratör, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Conan Exiles-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Skapa nya regler för din Conan Exiles-server. Gör detta för inkommande och utgående trafik med följande protokoll och portar:
- TCP inkommande och utgående: 7777, 25575
- UDP inkommande och utgående: 7777, 7778, 27015

Behöver du mer hjälp, kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta via serverns IP-adress. Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen klar för din Conan Exiles-server. Du kan göra fler inställningar via en konfigurationsfil i serverns mapp.

Navigera till:
```
../Conan-Server/Engine/Config/Windows
```

Där hittar du filen **WindowsServerEngine.ini**. I den kan du justera mängder av inställningar genom att lägga till specifika parametrar.

Exempelvis, för att sätta servernamn, lösenord och admin-lösenord lägger du till följande i filen:
```
[OnlineSubsystem]
ServerName=[ditt_servernamn]
ServerPassword=[ditt_lösenord]

[ServerSettings]
AdminPassword=[ditt_adminlösenord]
```

Vi rekommenderar att du kollar in [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) för en komplett lista på tillgängliga inställningar.

## Starta & anslut till din server

Dags att starta servern! Gå till basmappen för din Conan Exiles-server och kör **StartServer.bat** som du skapade tidigare. Det öppnar serverns konsol i ett kommandofönster och startar servern. Du kan nu ansluta direkt via spelets serverlista genom att skriva in serverns IP och port (standard är 7777).

## Avslutning

Grattis, du har nu installerat och konfigurerat Conan Exiles-servern på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />