---
id: vserver-windows-soulmask
title: "VPS: Soulmask Dedicated Server Windows Setup"
description: "Upptäck hur du installerar Soulmask dedicated server på din Windows VPS eller dedikerade server för smidig spelupplevelse → Läs mer nu"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS eller dedikerad server och vill installera Soulmask Dedicated Server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för dedicated servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedicated server-filer. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion eller något program som .7zip eller Winrar. Du ska nu ha en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Soulmask dedicated server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade tidigare. Du måste logga in innan du kan göra något, gör det som användaren **anonymous** med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ange din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Soulmask-Server
```
:::

Kör sedan kommandot `app_update 3017310` för att starta nedladdningen. App-ID **3017310** är **Soulmask**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där filerna laddats ner. Här kan du starta servern med **StartServer.bat**, men vi rekommenderar att du först konfigurerar port forwarding och serverinställningar.

### Port Forwarding för din server

För att din server ska vara tillgänglig för allmänheten måste du öppna rätt portar i brandväggen. Det kan du göra antingen via PowerShell-kommandon, vilket är enklast, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter.

:::info
Se till att köra PowerShell som administratör, annars kan inte inställningarna tillämpas korrekt.
:::

Klistra in följande kommandon i PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Soulmask-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Om du öppnar den vanliga brandväggssidan kan du behöva klicka på **Advanced Settings** för att komma till rätt fönster.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Soulmask-server. Klicka på inkommande och utgående regler och lägg till följande protokoll och portar:
- TCP inkommande och utgående: 8777, 27015
- UDP inkommande och utgående: 8777, 27015

Behöver du mer hjälp? Kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När reglerna är tillagda är din server tillgänglig via IP-adressen. Du kan ansluta genom att gå till Multiplayer i spelets huvudmeny, välja IP Direct Connect och skriva in din IP-adress och port (standard är 8777 eller den du valt).

Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är installationen klar. Du kan göra fler inställningar genom att ändra parametrarna i **StartServer.bat** i root-mappen och i **GameUserSettings.ini** som finns under `../WS/Saved/Config/WindowsServer`.

Kolla in vår [Server Configuration](soulmask-configuration.md) för alla tillgängliga inställningar och parametrar för din Soulmask-server.

## Starta & anslut till din server

Dags att starta servern! Gå till root-mappen och kör **StartServer.bat** för att starta servern. Ett kommandofönster öppnas och servern startar upp.

:::tip
Om servern inte startar och kommandofönstret bara försvinner, kolla i `../WS/Saved/Logs` efter senaste loggen för att felsöka.

Ett vanligt problem är att Steam-tjänsten inte startar på Windows dedicated server-binaries pga felaktig paketering. Om felet gäller Steam, flytta filerna `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll` från root-mappen till `../WS/Binaries/Win64` och försök starta servern igen.
:::

Du kan nu ansluta direkt till servern via IP och port 8777 i spelets multiplayer-meny.

Vill du att servern ska synas i serverlistan? Kolla vår [Server Configuration](soulmask-configuration.md) och lägg till rätt `-SteamServerName`-parameter i **StartServer.bat**. Spara och starta om batch-filen.

Grattis, du har installerat Soulmask på din Windows Dedicated Server!

## Avslutning

Grattis, du har nu installerat och konfigurerat Soulmask Server på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />