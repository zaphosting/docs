---
id: dedicated-windows-arksurvivalascended
title: "Dedikerad Server: ARK Survival Ascended Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och enkelt sätter upp en ARK: Survival Ascended dedikerad server på din Windows VPS eller dedikerade server → Läs mer nu"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Windows VPS eller dedikerad server och vill installera ARK: Survival Ascended dedikerad server på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="ARK: Survival Ascended Dedikerad Server Setup på Windows VPS" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Förberedelser

Börja med att ansluta till din VPS via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de nödvändiga filerna för den dedikerade servern. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam workshop- och dedikerade serverfiler. Ladda ner [SteamCMD från Valves officiella sida](https://developer.valvesoftware.com/wiki/SteamCMD) eller direkt [här](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Skapa en ny mapp någonstans på din server, i det här exemplet kallar vi den `steamcmd`. Gå till din Nedladdningar-mapp, hitta filen **steamcmd.zip** som du precis laddade ner och lägg den i din `steamcmd`-mapp. Packa sedan upp filen genom att högerklicka och använda Windows inbyggda uppackningsfunktion, eller med program som 7zip eller Winrar. Då får du en fil som heter **steamcmd.exe**.

Kör helt enkelt **steamcmd.exe** och vänta tills installationen är helt klar.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

När meddelandet **Loading Steam API.... OK** visas är processen klar och du kan börja installera ARK: Survival Ascended dedikerad server i nästa steg.

## Installation

Efter installationen ska du kunna köra kommandon i **steamcmd.exe**-prompten som du öppnade tidigare. Du måste logga in innan du kan göra något, via användaren **anonymous**, med kommandot: `login anonymous`

När du är inloggad kan du börja ladda ner filerna.

:::tip
Valfritt: Du kan välja var du vill installera servern med kommandot `force_install_dir [sökväg]`, där du byter ut `[sökväg]` mot den mapp du vill använda för servern. Exempel:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Kör sedan kommandot `app_update 2430930` för att starta nedladdningen. App-ID **2430930** är för **ARK: Survival Ascended Dedikerad Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Avbryt inte processen innan den är klar för att undvika fel. Det kan ta en stund, men det är värt att ha tålamod! :)
:::

### Skapa startfil

När nedladdningen är klar, gå till mappen där du installerade och vidare till följande undermapp:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Här ska du skapa en startfil som behövs för att starta den dedikerade servern. Skapa en fil med namnet: `start-ark.bat`. Du kan först skapa en textfil och sedan byta namn på den till `.bat`.

:::info
Se till att du har "Visa filnamnstillägg" aktiverat i Utforskaren så att filändelsen blir korrekt.
:::

Öppna filen i en textredigerare (t.ex. Notepad++) och klistra in följande innehåll:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_namn]?ServerAdminPassword=[admin_lösen]?Port=7777?QueryPort=27015?MaxPlayers=[max_spelare] -NoBattlEye
exit
```

Byt ut `[server_namn]`, `[admin_lösen]` och `[max_spelare]` mot det du vill ha.

Vill du även sätta ett lösenord för vanliga spelare att ansluta med kan du lägga till `?ServerPassword=[join_lösen]` i kommandot ovan. Då blir det så här:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_namn]?ServerPassword=[join_lösen]?ServerAdminPassword=[admin_lösen]?Port=7777?QueryPort=27015?MaxPlayers=[max_spelare] -NoBattlEye
exit
```

Spara filen när du har ändrat variablerna.

Din server kommer nu vara tillgänglig lokalt via `127.0.0.1:7777` när du kör startfilen och servern är online. Men du måste fortfarande lägga till port-forwarding i Windows-brandväggen om du vill att servern ska vara tillgänglig utåt, vilket vi går igenom i nästa avsnitt.

### Port-forwarda din server

För att din server ska vara tillgänglig utåt måste du öppna portarna som den dedikerade servern använder. Det kan du göra antingen via Powershell-kommandon (lättast) eller via Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Dessa regler öppnar brandväggen för de portar som behövs för att din ARK: Survival Ascended-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att komma till rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din ARK: Survival Ascended-server. Lägg till regler för följande protokoll och portar, både inkommande och utgående:
- TCP: 27020
- UDP: 27015
- UDP: 7777-7778

Behöver du hjälp med port-forwarding, kolla in vår guide [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig utåt och du kan ansluta via serverns IP. Öppna konsolen i ARK: Survival Ascended och skriv `open [din_ip]:7777` för att ansluta.

Vi rekommenderar att du först konfigurerar servern enligt nästa avsnitt innan du börjar spela.

## Konfiguration

Nu är setupen klar för din ARK: Survival Ascended dedikerade server. Du kan göra fler inställningar i två konfigurationsfiler som finns i serverns mapp.

Navigera till:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Här hittar du filerna **DefaultGameUserSettings.ini** och **GameUserSettings.ini** där du kan ändra massor av inställningar för din server.


:::warning[CROSSPLAY-SUPPORT]
Sedan 18 november 2023 måste serverägare manuellt installera en certifikatåterkallelse-lista som finns på https://dev.epicgames.com/ (eller direkt från http://crl.r2m02.amazontrust.com/r2m02.crl). Den nedladdade filen r2m02.crl måste installeras (högerklicka på filen) genom att välja "Placera alla certifikat i följande butik" och välja "Trusted Root Certification Authorities". En omstart av systemet kan behövas.

Om serverägare innan 18 november 2023 installerade certifikatet r2m02.cer och servern inte syns, måste detta certifikat tas bort från systemet för att servrarna ska bli synliga igen. Ta bort det genom att köra (Windows + R) certmgr.msc och söka efter Amazon RSA 2048 M02 under Trusted Root Certification Authorities. Samma sak måste göras i certlm.msc. Slutligen kan en omstart behövas.
:::





## Starta & anslut till din server

Nu är det dags att starta servern. För att servern ska starta korrekt måste du först installera [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) på din Windows VPS.

:::info
Du måste installera [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) på din Windows VPS innan du försöker starta servern om du inte redan har det, eftersom det är en beroende komponent. Servern kan annars inte starta.
:::

När du har installerat detta kan du starta servern genom att köra **start-ark.bat**-filen du skapade tidigare.

Det öppnar serverns konsol i ett kommandofönster och startar servern. Om allt går som det ska syns servern i serverlistan. Du kan också ansluta direkt genom att öppna konsolen i spelet och skriva `open [din_ip]:7777`.

Grattis, du har nu installerat Ark: Survival Ascended på din Windows Dedikerade Server!