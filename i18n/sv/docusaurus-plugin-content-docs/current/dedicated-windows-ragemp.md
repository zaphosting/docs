---
id: dedicated-windows-ragemp
title: "Dedikerad Server: RageMP Dedikerad Server Windows Setup"
description: "Lär dig hur du sätter upp RageMP Dedikerad Server på din Windows-server för att hosta multiplayer GTA V-sessioner → Läs mer nu"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows Dedikerad Server och vill installera RageMP Dedikerad server-tjänst på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.



## Förberedelser

Börja med att ansluta till din Dedikerade Server via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du har kommit in på din server, börja med att installera [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) eftersom detta är ett krav som RageMP behöver. Se till att detta är installerat innan du går vidare. Om du är osäker på om du redan har det installerat, kör installationsprogrammet så meddelar det dig under setupen.

När du har installerat beroendet, ladda ner den senaste server-releasen från [RageMP:s webbplats](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Om du redan har RageMP installerat kan du gå direkt till avsnittet **Byta till Server-branch**. Du behöver inte installera RageMP igen.
:::

## Installation

När releasen är nedladdad, kör filen **RAGEMultiplayer_Setup.exe** och följ installationsstegen. Du kan justera installationssökvägen under setupen, vilket vi rekommenderar.

När RageMP är installerat, starta appen **RAGE Multiplayer** som nu ska finnas tillgänglig bland dina Windows-appar.

Vid första uppstart måste du ange sökvägen till din GTA:V-installationsmapp. Installationsmappen beror på vilken launcher du installerade spelet med och ligger som standard under `C:/Program Files` eller `C:/Program Files (x86)`.

Nu måste du byta branch för att ladda ner serverfilerna.

### Byta till Server-branch

Navigera till mappen där RageMP installerades. Hitta filen **config.xml** i den här mappen. Ändra parametern `channel` från `prerelease` till `prerelease_server` och spara filen.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Kör sedan filen **updater.exe** som laddar ner de nödvändiga serverfilerna baserat på branch-ändringen. Du kommer se en ny mapp som heter **server-files** i din RageMP-mapp – det är den du behöver.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Du kan nu ändra tillbaka `channel` till `prerelease` och köra **update.exe** igen för att byta tillbaka till klientversionen så att du kan spela igen.

:::tip
Du kan flytta serverfilerna och byta namn på mappen till vad du vill, till exempel till skrivbordet. Du behöver inte köra detta inuti `RAGEMP`-mappen.
:::

För att starta servern, kör helt enkelt **ragemp-server.exe** som finns i `server-files`-mappen eller din servermapp så startar servern. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Portforwarda din server

För att din server ska vara tillgänglig för allmänheten måste du ändra portforwarding-regler för de portar som dedikerade serverprocessen använder. Du kan göra detta antingen via PowerShell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

:::tip
När du startar servern första gången bör en UAC-prompt visas. Om du godkänner den skapas brandväggsregler automatiskt, så du kan gå vidare till nästa steg. Annars följ någon av metoderna nedan.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökruta och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** så att rätt behörigheter finns och allt funkar som det ska.

:::info
Se till att du kör PowerShell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i PowerShell-fönstret:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som krävs för att din RageMP-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du först öppnar den vanliga brandväggssidan.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din RageMP-server. Klicka på inkommande och utgående regler som nedan och lägg till följande protokoll och portar:

- TCP inkommande och utgående: 22005
- UDP inkommande och utgående: 22005

Använd gärna vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md) om du behöver mer hjälp.

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta till den via serverns IP.

Vi rekommenderar att du först konfigurerar serverinställningarna enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är setupen klar för din RageMP-server. Du kan göra fler inställningar via en konfigurationsfil.

Gå tillbaka till root-mappen. Hitta och öppna filen **conf.json**. Här kan du justera serverparametrar som port, servernamn och mer.

Exempel på några inställningar:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Starta & anslut till din server

Dags att starta servern! Gå till `server-files`-mappen eller din servermapp och kör **ragemp-server.exe** för att starta servern. Ett konsolfönster öppnas och servern startar upp.

Du kan nu direktansluta till servern i spelet via RageMP-launchern.

## Avslutning

Grattis! Du har nu installerat och konfigurerat RageMP-servern på din Dedikerade Server! Har du fler frågor eller problem, kontakta gärna vår support som finns tillgänglig varje dag!