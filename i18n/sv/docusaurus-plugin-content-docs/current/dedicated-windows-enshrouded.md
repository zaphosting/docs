---
id: dedicated-windows-enshrouded
title: "Dedikerad Server: Enshrouded Dedikerad Server Windows-Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Enshrouded Dedikerad Server på din Windows VPS eller dedikerade server → Läs mer nu"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Windows VPS eller dedikerad server och vill installera Enshrouded Dedikerad server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Hur du sätter upp Enshrouded Dedikerad Server på Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på din server behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner olika Steam Workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet döper vi den till `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som .7zip eller Winrar. Då ska du få en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Så fort meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Enshrouded dedikerade server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja din egen installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel: 
```
force_install_dir C:\Enshrouded-Server
```
:::

Kör sedan kommandot `app_update 2278520` för att starta nedladdningen. App-ID **2278520** är **Enshrouded**-applikationen.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en liten stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där alla serverfiler har laddats ner. Där kan du använda **enshrouded_server.exe** för att starta servern. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Portforwarda din server

För att din server ska vara tillgänglig för allmänheten måste du ändra portforwarding-regler för de portar som den dedikerade servern använder. Du kan göra detta antingen via Powershell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så att allt funkar som det ska.

:::info
Se till att köra Powershell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i din Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Enshrouded-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Skapa nya regler för din Enshrouded-server. Klicka på inkommande och utgående regler som nedan och lägg till följande protokoll och portar:
- TCP inkommande och utgående: 15636-15637
- UDP inkommande och utgående: 15636-15637

Använd gärna vår [Port Forwarding (Firewall)](vserver-windows-port.md)-guide om du behöver mer hjälp.

</TabItem>
</Tabs>

När du lagt till dessa regler är din server tillgänglig och du kan ansluta till den via serverns IP. Välj din karaktär i huvudmenyn, gå till fliken **Find Games** och klicka på **Add Server**. Fyll i din server-IP, port (standard 15636) och lösenord (om du satt något, annars lämna tomt).

:::tip
Kolla in vår [Serverkonfiguration](enshrouded-configuration.md)-guide om du vill aktivera lösenord och justera inställningar.
:::

Vi rekommenderar att du konfigurerar servern först enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu har du slutfört setupen för din Enshrouded-server. Du kan göra fler inställningar via en konfigurationsfil som finns i serverns mapp.

Navigera till följande mapp:
```
..EnshroudedServer/ (root-mapp)
```

Här hittar du filen **enshrouded_server.json**. I den kan du justera olika parametrar för din server. Se vår [Serverkonfiguration](enshrouded-configuration.md)-guide för alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för din Enshrouded-server och kör **enshrouded_server.exe** för att starta upp. Det öppnar serverns konsol i ett kommandofönster och startar servern. Du kan nu ansluta direkt genom att gå till fliken **Find Games**, klicka på **Add Server** och fylla i din server-IP och port (standard 15636).

Grattis, du har nu installerat Enshrouded på din Windows Dedikerade Server!