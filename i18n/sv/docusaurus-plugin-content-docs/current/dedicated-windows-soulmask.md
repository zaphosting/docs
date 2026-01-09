---
id: dedicated-windows-soulmask
title: "Dedikerad Server: Soulmask Dedikerad Server Windows-Setup"
description: "Upptäck hur du snabbt och smidigt installerar Soulmask dedikerad server på din Windows VPS eller dedikerade server → Läs mer nu"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS eller dedikerad server och vill installera Soulmask dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.



## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inloggad på din server behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner olika Steam Workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella webbplats](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som 7zip eller Winrar. Du ska nu ha en fil som heter **steamcmd.exe** uppackad.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Soulmask dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ange din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Soulmask-Server
```
:::

Kör nu kommandot `app_update 3017310` för att starta nedladdningen. App-ID **3017310** är **Soulmask**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där filerna laddats ner. Här kan du använda **StartServer.bat** för att starta servern. Vi rekommenderar dock att du först konfigurerar port forwarding och serverinställningar.

### Portforwarda din server

För att din server ska vara tillgänglig för allmänheten måste du ändra portforwarding-regler för de portar som den dedikerade servern använder. Det kan du göra antingen via PowerShell-kommandon, vilket är enklast, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Öppna Windows sökruta och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så allt funkar som det ska.

:::info
Se till att köra PowerShell som administratör, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i PowerShell-prompten:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Soulmask-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du först hamnar i grundläggande brandväggsinställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Soulmask-server. Gör detta genom att lägga till inkommande och utgående regler för följande protokoll och portar:
- TCP inkommande och utgående: 8777, 27015
- UDP inkommande och utgående: 8777, 27015

Behöver du mer hjälp med detta, kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta till den via serverns IP-adress. Gå till Multiplayer i huvudmenyn, välj IP Direct Connect och skriv in din IP-adress och port (standard är 8777, eller den du valt).

Vi rekommenderar att du först konfigurerar serverinställningarna enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen för din Soulmask-server klar. Du kan göra fler inställningar genom att ändra parametrarna i din **StartServer.bat**-fil i root-mappen och i **GameUserSettings.ini** som finns under `../WS/Saved/Config/WindowsServer`.

Kolla in vår [Server Configuration](soulmask-configuration.md)-guide för att se alla tillgängliga parametrar och konfigurationsmöjligheter för din Soulmask-server.

## Starta & anslut till din server

Dags att starta servern! Gå till root-mappen och kör **StartServer.bat** för att starta upp servern. Det öppnar serverns konsol i ett kommandofönster och startar processen.

:::tip
Om servern inte startar och kommandofönstret bara försvinner, gå till `../WS/Saved/Logs` och kolla senaste loggen för att felsöka.

Ett vanligt problem är att Steam online-tjänsten inte startar på Windows dedikerade serverbinarier pga felaktig paketering. Om felet gäller Steam, flytta följande filer från root-mappen till `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Försök sedan starta servern igen, den ska nu starta korrekt i kommandoprompten.
:::

Du kan nu ansluta direkt till din server via IP genom att skriva in serverns IP och port 8777 i multiplayer-menyn i spelet.

Vill du att din server ska synas i serverlistan? Kolla vår [Server Configuration](soulmask-configuration.md)-guide och lägg till rätt `-SteamServerName`-parameter i din **StartServer.bat**. Spara filen och kör batchfilen igen.

Grattis, du har nu installerat Soulmask på din Windows Dedikerade Server!