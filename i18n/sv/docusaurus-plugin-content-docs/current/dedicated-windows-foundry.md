---
id: dedicated-windows-foundry
title: "Dedikerad Server: Foundry Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Foundry Dedikerad Server på din Windows VPS eller dedikerade server → Läs mer nu"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS eller dedikerad server och vill installera Foundry Dedikerad server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Hur du sätter upp Foundry Dedikerad Server på Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och är verktyget som gör det enkelt att ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella webbplats](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i detta exempel kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som .7zip eller Winrar. Du ska nu ha en fil som heter **steamcmd.exe** uppackad.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja med installationen av Foundry dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ange din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Foundry-Server
```
:::

Kör nu kommandot `app_update 2915550` för att starta nedladdningen. App-ID **2915550** är **Foundry**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till din nedladdningsmapp där alla serverfiler finns. Här kan du starta servern med **FoundryDedicatedServerLauncher.exe**. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Portforwarda din server

För att din server ska vara tillgänglig för allmänheten måste du ändra portforwarding-regler för de portar som den dedikerade servern använder. Du kan göra detta antingen via PowerShell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så allt funkar som det ska.

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

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Foundry-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du bara öppnar grundläggande brandväggsinställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Foundry-server. Gör detta genom att lägga till inkommande och utgående regler för följande protokoll och portar:
- TCP inkommande och utgående: 3724, 27015
- UDP inkommande och utgående: 3724, 27015

Behöver du mer hjälp? Kolla in vår [Port Forwarding (Firewall)](vserver-windows-port.md)-guide.

</TabItem>
</Tabs>

När du lagt till dessa regler är din server tillgänglig och du kan ansluta till den via serverns IP. Gå till Multiplayer i huvudmenyn, välj IP Direct Connect och skriv in din IP-adress och port (standard är 3724 eller den du valt).

Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen klar för din Foundry-server. Du kan göra vidare konfiguration via en konfigurationsfil. Gå tillbaka till din spelmapp och skapa en ny fil som heter **app.cfg** (om den inte redan finns) i root-mappen. Den ska ligga i samma mapp som **FoundryDedicatedServerLauncher.exe**.

Öppna **app.cfg** med Notepad eller valfri editor och börja lägga till konfigurationsparametrar. Skriv varje parameter på en ny rad med ett likamedtecken och värdet du vill sätta.

Exempel på tre inställningar:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Se vår [Server Configuration](foundry-configuration.md)-guide för alla tillgängliga alternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till root-mappen och kör **FoundryDedicatedServerLauncher.exe** för att starta servern. Ett konsolfönster öppnas och servern startar.

Du kan nu ansluta direkt via IP genom att gå till **Multiplayer->IP Direct Connect** och skriva in serverns IP och port 3724 (standard eller den du valt och portforwardat).

Vill du att servern ska synas i serverlistan? Kolla vår [Server Configuration](foundry-configuration.md)-guide och lägg till `server_name` och `server_is_public` i din konfigurationsfil. Spara och starta om servern.

Grattis, du har nu installerat Foundry på din Windows Dedikerade Server!