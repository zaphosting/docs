---
id: dedicated-windows-openmp
title: "Dedikerad Server: Open.mp Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp och kör en open.mp Dedikerad Server på Windows för smidig multiplayer-gaming → Lär dig mer nu"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows Dedikerad Server och vill installera open.mp Dedicated server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.



## Förberedelser

Börja med att ansluta till din Dedikerade Server via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på servern, ladda ner senaste releasen från [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Se till att du väljer **win-x86** versionen.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

När releasen är nedladdad, packa upp filerna med ett verktyg som 7zip eller WinRAR. Det ska skapa en **Server**-mapp som innehåller alla nödvändiga serverfiler.

För att starta servern, kör helt enkelt **omp-server.exe** så börjar servern boota. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Port Forwarding för din server

För att din server ska vara tillgänglig för allmänheten måste du ändra port forwarding-regler för de portar som den dedikerade serverprocessen använder. Du kan göra detta antingen direkt via PowerShell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

:::tip
När du startar servern första gången bör en UAC-prompt dyka upp. Accepterar du den skapas brandväggsregler automatiskt, och du kan gå vidare till nästa steg. Annars, följ någon av metoderna nedan.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så allt funkar som det ska.

:::info
Se till att köra PowerShell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din open.mp-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din open.mp-server. Klicka på inkommande och utgående regler och lägg till följande protokoll och portar:
- TCP inkommande och utgående: 7777
- UDP inkommande och utgående: 7777

Behöver du mer hjälp? Kolla in vår [Port Forwarding (Firewall)](vserver-windows-port.md)-guide.

</TabItem>
</Tabs>

När du lagt till reglerna är din server nu tillgänglig, vilket betyder att du kan ansluta via serverns IP-adress.

Vi rekommenderar att du först konfigurerar serverinställningarna i nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen klar för din open.mp-server. Du kan göra fler inställningar via en konfigurationsfil.

Gå tillbaka till root-mappen. Leta upp och öppna **config.json**-filen. Här kan du justera massor av serverparametrar, från port till lösenord och mycket mer.

Exempel på några inställningar:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Kolla in vår [Server Configuration](openmp-configuration.md) för alla tillgängliga alternativ och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till root-mappen och kör **omp-server.exe** för att starta upp. Det öppnar serverns konsol i ett kommandofönster och startar processen.

Nu kan du direktansluta till servern i spelet via open.mp-launchern. Vill du visa serverinfo i serverlistan? Kolla vår [Server Configuration](openmp-configuration.md)-guide och se till att `enable_query` är satt till true (det är standard). Spara filen och starta om servern.

## Avslutning

Grattis, du har nu installerat och konfigurerat open.mp-servern på din Dedikerade Server! Har du fler frågor eller problem? Kontakta vår support, vi finns här för dig varje dag!