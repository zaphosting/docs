---
id: dedicated-windows-palworld
title: "Dedikerad Server: Palworld Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Palworld Dedikerad Server på din Windows VPS eller server → Läs mer nu"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS eller dedikerad server och vill installera Palworld Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Hur du sätter upp Palworld Dedikerad Server på Windows VPS!" description="Känns det lättare att förstå när du ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta **steamcmd.zip**-filen du precis laddade ner och placera den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som 7zip eller Winrar. Då ska du få en **steamcmd.exe**-fil uppackad.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Så fort meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Palworld dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du startade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan ange din önskade installationsmapp med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för din server. Exempel:
```
force_install_dir C:\Palworld-Server
```
:::

Kör sedan kommandot `app_update 2394010` för att starta nedladdningen. App-ID **2394010** är **Palworld**-applikationen.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där serverfilerna ligger. Där kan du starta servern med **PalServer.exe**. Vi rekommenderar dock att du först konfigurerar port forwarding och serverinställningar.

### Portforwarda din server

För att din server ska vara tillgänglig för allmänheten måste du öppna portarna som den dedikerade servern använder. Det kan du göra antingen via Powershell-kommandon (lättast) eller via Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Palworld-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Palworld-server. Gör detta både för inkommande och utgående regler med följande protokoll och portar:
- TCP inkommande och utgående: 8211
- UDP inkommande och utgående: 8211

Behöver du mer hjälp? Kolla vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig och du kan ansluta via serverns IP-adress. Gå till serverlistan och sök på: `[din_ip_adress]:8211`

Vi rekommenderar att du först konfigurerar serverinställningarna enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är grunduppsättningen klar för din Palworld-server. Du kan göra fler inställningar via en konfigurationsfil i serverns mapp.

Navigera till:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Här hittar du filen **PalWorldSettings.ini**. I den kan du justera många olika inställningar för din server. Se vår [Server Configuration](palworld-configuration.md)-guide för alla alternativ och vad de gör.

:::note
Om du inte ser filen, starta servern minst **en gång** så skapas den automatiskt. Alternativt kan du kopiera standardinställningarna från `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Aktivera Xbox-läge

Palworld dedikerade servrar kan nu köras som Microsoft Store/Xbox-servrar, så Xbox- och Microsoft Store PC-spelare kan spela tillsammans på samma server.

:::note
Cross-play mellan Steam och Microsoft Store/Xbox-versionerna fungerar fortfarande inte. Din server kan antingen vara för Steam eller för Microsoft Store/Xbox.
:::

Gå till:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Lägg till följande rad för att aktivera Xbox-läge:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Spara filen och nästa gång du startar servern körs den i Xbox-läge.

:::info
På Xbox-konsoler kan du inte ansluta direkt via IP-adress, så om du vill spela på Xbox måste du göra din server publik.

Skapa en fil `StartServer.bat` i serverns rotmapp med innehållet: `PalServer.exe -publiclobby`. Flaggan `-publiclobby` aktiverar Community Server-läge så att servern syns i serverlistan.

Sätt också ett servernamn som är lätt att hitta, se vår [Server Configuration](palworld-configuration.md)-guide för hur du gör.
:::

## Starta & anslut till din server

Dags att starta servern! Du kan behöva installera [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) om det inte redan finns på din Windows Dedicated Server.

Gå till serverns rotmapp och kör **PalServer.exe** för att starta servern. Ett kommandofönster öppnas och servern startar. Om allt funkar som det ska syns servern i serverlistan. Du kan också ansluta direkt genom att söka på: `[din_ip_adress]:8211` i serverlistans sökfält.

Grattis, du har nu installerat Palworld på din Windows Dedikerade Server!