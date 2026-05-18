---
id: server-windows-arma3
title: "Arma 3 Dedikerad Server Windows-Setup"
description: "Upptäck hur du sätter upp en Arma 3 Dedikerad Server på din Windows-server för smidig gameplay och kontroll → Läs mer nu"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Windows VPS/Dedikerad Server och vill installera Arma 3 Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din server.


<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS/Dedikerade Server via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du just laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som .7zip eller Winrar. Då ska du få en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Arma 3 dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja din egen installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\arma3-server
```
:::

Kör sedan kommandot `app_update 233780` för att starta nedladdningen. App-ID **233780** är för **Arma 3**.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där filerna laddats ner. Där kan du starta servern med **Arma 3_server.exe**. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Portforwarda din server

För att din server ska vara tillgänglig för andra måste du ändra port forwarding-regler för de portar som VPS/Dedikerad Server-processen använder. Det kan du göra antingen via Powershell-kommandon, vilket är enklast, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter.

:::info
Se till att köra Powershell som administratör, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i Powershell:
```
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Arma 3-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sök för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Skapa nya regler för din Arma 3-server. Klicka på inkommande och utgående regler och lägg till följande protokoll och portar:
- UDP inkommande och utgående: 2302–2306

Använd gärna vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md) om du behöver mer hjälp.

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta till den via serverns IP. Välj din karaktär i huvudmenyn, gå till fliken **Find Games** och klicka på **Add Server**. Skriv in din server-IP, port (standard 2302) och lösenord (om du satt något, annars lämna tomt).

Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu har du satt upp din Arma 3-server. Du kan göra fler inställningar via en konfigurationsfil i serverns mapp.

Navigera till:
```
C:\arma3-Server
```

Där hittar du filen **server.cfg**. I den kan du justera olika parametrar för din server. 




## Starta & anslut till din server

Dags att starta servern! Gå till huvudmappen för spelet och kör filen **arma3server_x64.exe**.

Det öppnar serverkonsolen och startar servern.

Spelare kan ansluta via **Arma 3 server browser** med din **server-IP** och standardporten **2302**.

## Avslutning

Grattis, du har nu installerat och konfigurerat din **Arma 3-server** på din VPS/Dedikerade Server! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns här för dig varje dag!


<InlineVoucher />