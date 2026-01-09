---
id: vserver-windows-enshrouded
title: "VPS: Enshrouded Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en Enshrouded Dedikerad Server på din Windows VPS för smidig spelupplevelse och kontroll → Lär dig mer nu"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Windows VPS och vill installera Enshrouded Dedicated Server-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="Hur du sätter upp Enshrouded Dedicated Server på Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga dedikerade serverfilerna. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner olika Steam Workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och lägg den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller något program som .7zip eller Winrar. Då får du en **steamcmd.exe**-fil.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja med installationen av Enshrouded dedikerade server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja din installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Enshrouded-Server
```
:::

Kör sedan kommandot `app_update 2278520` för att starta nedladdningen. App-ID **2278520** är **Enshrouded**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där serverfilerna ligger. Där kan du starta servern med **enshrouded_server.exe**. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Portforwarding för din server

För att din server ska vara tillgänglig för andra måste du öppna portarna som den dedikerade servern använder. Det kan du göra antingen via Powershell-kommandon (enklast) eller via Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Enshrouded-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Om du öppnar den vanliga brandväggssidan kan du behöva klicka på **Advanced Settings** för att komma till rätt fönster.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Enshrouded-server. Gör detta både för inkommande och utgående trafik med följande protokoll och portar:
- TCP inkommande och utgående: 15636-15637
- UDP inkommande och utgående: 15636-15637

Behöver du hjälp? Kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta via serverns IP. Gå till huvudmenyn, välj din karaktär, öppna fliken **Find Games** och klicka på **Add Server**. Fyll i din server-IP, port (standard 15636) och lösenord (om du satt något, annars lämna tomt).

:::tip
Kolla in vår [Serverkonfiguration](enshrouded-configuration.md) om du vill sätta lösenord och justera inställningar.
:::

Vi rekommenderar att du konfigurerar servern först enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är grundinstallationen klar. Du kan göra fler inställningar via en konfigurationsfil i serverns mapp.

Navigera till:
```
..EnshroudedServer/ (root-mapp)
```

Där hittar du filen **enshrouded_server.json**. I den kan du ändra olika serverparametrar. Se vår [Serverkonfigurationsguide](enshrouded-configuration.md) för alla tillgängliga inställningar och vad de gör.

## Starta & anslut till din server

Dags att starta servern! Gå till serverns root-mapp och kör **enshrouded_server.exe**. Det öppnar serverns konsol i ett kommandofönster och startar servern. Du kan nu ansluta direkt via fliken **Find Games**, klicka på **Add Server** och fylla i IP och port (standard 15636).

## Avslutning

Grattis, du har nu installerat och konfigurerat Enshrouded-servern på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns här för dig varje dag!

<InlineVoucher />