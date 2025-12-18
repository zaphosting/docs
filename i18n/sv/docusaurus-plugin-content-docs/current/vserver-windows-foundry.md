---
id: vserver-windows-foundry
title: "VPS: Foundry Dedicated Server Windows Setup"
description: "Upptäck hur du sätter upp en Foundry Dedicated Server på din Windows VPS för smidig spelhosting → Läs mer nu"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Foundry Dedicated Server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="How To Setup Foundry Dedicated Server on Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Behöver du hjälp med det? Kolla in vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de dedikerade serverfilerna. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam Workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på servern, vi kallar den `steamcmd` i det här exemplet. Gå till din Downloads-mapp, hitta **steamcmd.zip** som du precis laddade ner och lägg den i `steamcmd`-mappen. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda unzip-funktion eller program som 7zip eller WinRAR. Då får du en **steamcmd.exe**-fil.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är klar.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

När meddelandet **Loading Steam API.... OK** visas är installationen klar och du kan gå vidare till nästa steg med Foundry-serverinstallationen.

## Installation

Efter installationen kan du köra kommandon i **steamcmd.exe**-prompten som du startade. Du måste logga in först, gör det som användaren **anonymous** med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja var du vill installera servern med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda. Exempel:
```
force_install_dir C:\Foundry-Server
```
:::

Kör sedan kommandot `app_update 2915550` för att starta nedladdningen. App-ID **2915550** är Foundry.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där filerna ligger. Där kan du starta servern med **FoundryDedicatedServerLauncher.exe**. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Port Forwarding för din server

För att din server ska vara tillgänglig för andra måste du öppna rätt portar i brandväggen. Det kan du göra via PowerShell, vilket är enklast, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och skriv **PowerShell**. Högerklicka och välj **Kör som administratör** så att du har rätt behörigheter.

:::info
Se till att köra PowerShell som administratör, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Foundry-server ska vara tillgänglig.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Sök efter **Windows Firewall Settings with Advanced Security** i Windows och öppna det. Om du bara kommer till grundinställningarna, klicka på **Advanced Settings** för att öppna rätt fönster.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Skapa nya regler för din Foundry-server. Lägg till regler för inkommande och utgående trafik med följande protokoll och portar:
- TCP inkommande och utgående: 3724, 27015
- UDP inkommande och utgående: 3724, 27015

Behöver du hjälp? Kolla vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När reglerna är på plats är din server tillgänglig via IP-adressen. Gå till Multiplayer i huvudmenyn, välj IP Direct Connect och skriv in din IP och port (standard är 3724).

Vi rekommenderar att du konfigurerar servern först enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen klar! Du kan göra fler inställningar via en konfigurationsfil. Gå till din spelmapp och skapa en fil som heter **app.cfg** (om den inte redan finns) i root-mappen, samma mapp som **FoundryDedicatedServerLauncher.exe**.

Öppna **app.cfg** med Notepad eller valfri editor och lägg till inställningar på nya rader med formatet `parameter=värde`.

Exempel på tre inställningar:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Se vår [Server Configuration](foundry-configuration.md) för alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Starta servern genom att köra **FoundryDedicatedServerLauncher.exe** i root-mappen. En konsol öppnas och servern startar.

Du kan nu ansluta direkt via IP genom att gå till **Multiplayer->IP Direct Connect** och skriva in serverns IP och port 3724 (standard och den du öppnat i brandväggen).

Vill du att servern ska synas i serverlistan? Kolla vår [Server Configuration](foundry-configuration.md) och lägg till `server_name` och `server_is_public` i din konfigurationsfil. Spara och starta om servern.

## Avslutning

Grattis! Du har nu installerat och konfigurerat Foundry-servern på din VPS! Har du frågor eller problem? Vår support finns här för dig varje dag!

<InlineVoucher />