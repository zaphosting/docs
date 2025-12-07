---
id: vserver-windows-avorion
title: "VPS: Avorion Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Avorion Dedikerad Server på din Windows VPS → Läs mer nu"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Avorion Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar den här tjänsten på din server.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="How To Setup Avorion Dedicated Server on Windows VPS!" description="Känner du att du förstår bättre när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga dedikerade serverfilerna. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner olika Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet döper vi den till `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och lägg den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som 7zip eller Winrar. Då får du en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Avorion dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in först, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja var du vill installera servern genom att använda kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för servern. Exempel:
```
force_install_dir C:\Avorion-Server
```
:::

Kör sedan kommandot `app_update 565060` för att starta nedladdningen. App-ID **565060** är för **Avorion**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en liten stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där serverfilerna ligger. Gör en kopia av filen **server.bat** och döp om kopian till **startserver.bat** eller något liknande. Den här nya `.bat`-filen använder du för att starta servern och för att kunna redigera serverns inställningar i nästa steg. Vi rekommenderar att du först ställer in port forwarding och konfigurerar servern.

### Portforwarda din server

För att din server ska vara tillgänglig för andra måste du ändra portforwarding-regler för de portar som den dedikerade servern använder. Det kan du göra antingen via Powershell-kommandon (lättast) eller via Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Avorion-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Om du öppnar den vanliga brandväggssidan kan du behöva klicka på **Advanced Settings** för att komma till rätt fönster.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Skapa nya regler för din Avorion-server. Gör detta både för inkommande och utgående regler med följande protokoll och portar:
- TCP inkommande och utgående: 27000
- UDP inkommande och utgående: 27000, 27003, 27020, 27021

Behöver du mer hjälp? Kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta via serverns IP-adress. Vi rekommenderar att du först konfigurerar servern enligt nästa steg innan du ansluter.

## Konfiguration

Nu är setupen klar för din Avorion-server. Du kan konfigurera serverinställningarna direkt i **startserver.bat**-filen som du kopierade tidigare. Öppna den med en texteditor som Notepad och ändra parametrar för din server.

Vill du ändra världsspecifika inställningar måste du redigera **server.ini** i dina galax-sparfiler. De finns i Windows AppData, under den här sökvägen:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Du kan snabbt komma till den här mappen genom att trycka `CTRL` + `R` samtidigt och skriva in `%userprofile%/AppData/Roaming/Avorion/galaxies` i kör-dialogen. Klicka på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Starta & anslut till din server

Dags att starta servern! Gå till din Avorion-servermapp och kör **startserver.bat** som du skapade tidigare. Då öppnas serverns konsol i ett kommandofönster och servern startar. Du kan nu ansluta direkt via spelets serverlista genom att skriva in serverns IP och port (standard är 27000).

## Avslutning

Grattis, du har nu installerat och konfigurerat din Avorion-server på VPS:en! Har du fler frågor eller problem? Kontakta vår support som finns här för dig varje dag!

<InlineVoucher />