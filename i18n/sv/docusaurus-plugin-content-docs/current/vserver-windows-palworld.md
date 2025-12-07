---
id: vserver-windows-palworld
title: "VPS: Palworld Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en Palworld Dedikerad Server på din Windows VPS för smidig spelhosting → Läs mer nu"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Palworld Dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="Hur du sätter upp Palworld Dedikerad Server på Windows VPS!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med det.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga dedikerade serverfilerna. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, vi kallar den `steamcmd` i det här exemplet. Gå till din Downloads-mapp, hitta **steamcmd.zip** som du precis laddade ner och lägg den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda unzip-funktion eller något program som .7zip eller Winrar. Då får du en **steamcmd.exe**-fil.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är klar.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera Palworld dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade. Du måste logga in först med användaren **anonymous** genom att skriva: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja var du vill installera servern med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda. Exempel:
```
force_install_dir C:\Palworld-Server
```
:::

Kör sedan kommandot `app_update 2394010` för att starta nedladdningen. App ID **2394010** är **Palworld**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

När nedladdningen är klar, gå till mappen där filerna ligger. Där kan du starta servern med **PalServer.exe**. Vi rekommenderar dock att du först ställer in port forwarding och konfigurerar servern.

### Portforwarda din server

För att din server ska vara tillgänglig för andra måste du öppna portarna som servern använder. Det kan du göra via Powershell (lättast) eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och skriv **Powershell**. Högerklicka och välj **Kör som administratör** så att du har rätt behörigheter.

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

Dessa regler öppnar brandväggen för Palworld-servern så att den blir tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Sök efter **Windows Firewall Settings with Advanced Security** i Windows. Om du bara kommer till grundinställningarna, klicka på **Advanced Settings** för att öppna rätt fönster.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Skapa nya regler för inkommande och utgående trafik för följande protokoll och portar:
- TCP inkommande och utgående: 8211
- UDP inkommande och utgående: 8211

Behöver du mer hjälp? Kolla vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När reglerna är på plats är din server tillgänglig via IP-adressen. Du kan ansluta genom att söka på `[din_ip_adress]:8211` i serverlistan.

Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du ansluter.

## Konfiguration

Nu är din Palworld-server installerad. Du kan göra fler inställningar via en konfigurationsfil i serverns mapp.

Navigera till:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Där hittar du filen **PalWorldSettings.ini**. Den innehåller massor av inställningar för servern. Kolla vår [Server Configuration](palworld-configuration.md) för alla alternativ och vad de gör.

:::note
Om filen inte finns, starta servern minst **en gång** så skapas den automatiskt. Alternativt kan du kopiera standardinställningarna från `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Aktivera Xbox-läge

Palworld dedikerade servrar kan nu köras som Microsoft Store/Xbox-servrar så att Xbox- och Microsoft Store PC-spelare kan spela tillsammans.

:::note
Cross-play mellan Steam och Microsoft Store/Xbox-versionerna funkar fortfarande inte. Din server kan antingen vara för Steam eller för Microsoft Store/Xbox.
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
På Xbox-konsoler kan du inte ansluta direkt via IP-adress, så om du vill spela på Xbox måste du göra servern publik.

Skapa en fil `StartServer.bat` i root-mappen och skriv: `PalServer.exe -publiclobby`. Flaggan `-publiclobby` aktiverar Community Server-läge så att servern syns i listan.

Glöm inte att sätta ett servernamn som är lätt att hitta, se vår [Server Configuration](palworld-configuration.md) för hur du gör.
:::

## Starta & anslut till din server

Nu är det dags att starta servern. Du kan behöva installera [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) om det inte redan finns på din Windows VPS.

Gå till serverns huvudmapp och kör **PalServer.exe** för att starta. En konsol öppnas och servern startar. Om allt funkar ska servern synas i serverlistan. Du kan också ansluta direkt genom att söka på `[din_ip_adress]:8211` i sökfältet längst ner i serverlistan.

## Avslutning

Grattis, du har nu installerat och konfigurerat Palworld-servern på din VPS! Har du frågor eller problem, hör av dig till vår support som finns här för dig varje dag!

<InlineVoucher />