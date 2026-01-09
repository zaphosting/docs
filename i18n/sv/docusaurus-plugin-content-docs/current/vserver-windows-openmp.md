---
id: vserver-windows-openmp
title: "VPS: Open.mp Dedikerad Server Windows-Setup"
description: "Lär dig hur du sätter upp och konfigurerar en open.mp dedikerad server på din Windows VPS för smidig multiplayer-gaming → Läs mer nu"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera open.mp dedikerad server på den? Då är du på rätt plats. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inne på servern, ladda ner senaste releasen från [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Se till att du väljer **win-x86** versionen.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

När releasen är nedladdad, packa upp filerna med ett verktyg som 7zip eller WinRAR. Då får du en **Server**-mapp som innehåller alla nödvändiga serverfiler.

För att starta servern, kör bara **omp-server.exe** så börjar servern boota. Men vi rekommenderar att du först ställer in port forwarding och konfigurerar servern.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Port Forwarding för din server

För att din server ska vara tillgänglig för allmänheten måste du ändra port forwarding-regler för de portar som dedikerade serverprocessen använder. Det kan du göra antingen via PowerShell-kommandon, vilket är enklast, eller via Windows Defender Firewall.

:::tip
När du startar servern första gången bör en UAC-prompt dyka upp. Accepterar du den så skapas brandväggsregler automatiskt, och du kan gå vidare till nästa steg. Annars, följ någon av metoderna nedan.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så allt funkar som det ska.

:::info
Se till att du kör PowerShell som administratör, annars kan inställningarna misslyckas.
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

Behöver du mer hjälp? Kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta via serverns IP.

Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen klar för din open.mp-server. Du kan göra fler inställningar via en konfigurationsfil.

Gå till root-mappen och öppna filen **config.json**. Här kan du justera massor av serverparametrar, som port, lösenord och mycket mer.

Exempel på några inställningar:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Se vår [Server Configuration](openmp-configuration.md) för alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till root-mappen och kör **omp-server.exe** för att starta upp. Då öppnas serverns konsol i ett kommandofönster och servern startar.

Du kan nu direktansluta till servern i spelet via open.mp-launchern. Vill du visa serverinfo i serverlistan, kolla vår [Server Configuration](openmp-configuration.md) och se till att parametern `enable_query` är satt till true (det är standard). Spara filen och starta om servern.

## Avslutning

Grattis! Du har nu installerat och konfigurerat open.mp-servern på din VPS! Har du frågor eller problem, hör av dig till vår support som finns här för dig varje dag!

<InlineVoucher />