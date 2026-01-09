---
id: dedicated-windows-avorion
title: "Dedikerad Server: Avorion Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp Avorion Dedikerad Server på din Windows VPS för smidig spelhosting → Läs mer nu"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Avorion Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Hur du sätter upp Avorion Dedikerad Server på Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>


## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga dedikerade serverfilerna. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och lägg den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som 7zip eller Winrar. Då får du en **steamcmd.exe**-fil.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Avorion dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja din egen installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för servern. Exempel:
```
force_install_dir C:\Avorion-Server
```
:::

Kör sedan kommandot `app_update 565060` för att starta nedladdningen. App-ID **565060** är **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där serverfilerna ligger. Gör en kopia av filen **server.bat** och döp om kopian till **startserver.bat** eller något liknande. Den här nya `.bat`-filen använder du för att starta servern och för att kunna redigera serverinställningar i nästa steg. Vi rekommenderar att du först ställer in port forwarding och konfigurerar servern.

### Portforwarda din server

För att din server ska vara tillgänglig för andra måste du ändra portforwarding-regler för de portar som den dedikerade servern använder. Du kan göra detta antingen via Powershell-kommandon (enklast) eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** så att du har rätt behörigheter.

:::info
Se till att köra Powershell som administratör, annars kan inte inställningarna tillämpas korrekt.
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

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Avorion-server. Klicka på inkommande och utgående regler och lägg till följande protokoll och portar:
- TCP inkommande och utgående: 27000
- UDP inkommande och utgående: 27000, 27003, 27020, 27021

Behöver du mer hjälp? Kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta via serverns IP. I spelets huvudmeny, välj din karaktär, gå till fliken **Find Games** och klicka på **Add Server**. Fyll i serverns IP, port (standard 15636) och lösenord (om du satt något, annars lämna tomt).

Vi rekommenderar att du först konfigurerar serverinställningarna i nästa steg innan du ansluter.

## Konfiguration

Nu är setupen klar för din Avorion-server. Du kan konfigurera serverinställningarna direkt i **startserver.bat**-filen du kopierade tidigare. Öppna den med en texteditor som Notepad och ändra parametrar för din server.

Vill du ändra världsspecifika inställningar måste du redigera **server.ini** i dina galax-sparfiler. De finns i Windows AppData, under denna sökväg:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Du kan snabbt komma till mappen genom att trycka `CTRL` + `R` samtidigt och skriva in `%userprofile%/AppData/Roaming/Avorion/galaxies` i kör-dialogen. Klicka på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Starta & anslut till din server

Dags att starta servern! Gå till din Avorion-servermapp och kör **startserver.bat** som du skapade tidigare. Det öppnar serverns konsol i ett kommandofönster och startar servern. Nu kan du ansluta direkt via spelets serverbrowser genom att skriva in serverns IP och port (standard 27000).

## Avslutning

Grattis, du har nu installerat och konfigurerat Avorion-servern på din VPS! Har du fler frågor eller problem? Kontakta vår support, vi finns här för dig varje dag!