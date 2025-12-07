---
id: dedicated-windows-vrising
title: "Dedikerad Server: V-Rising Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en V Rising dedikerad Windows-server för optimal spelprestanda och serverhantering → Lär dig mer nu"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="Hur du sätter upp en V RISING Dedikerad Windows Server!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



## Grundläggande info: 
En server baserad på Windows Server 2016/2019 med minst 4x 2.4 GHz CPU (AMD/Intel) och minst 4GB RAM (DDR3/4) samt 6GB ledigt Diskutrymme (SSD eller bättre, rekommenderas) krävs. Servern måste köra 64-bitars arkitektur. 

## Steg 1 Skapa en mapp för V-Rising

Först behöver du ansluta till din server via [Initial Access (RDP)](vserver-windows-userdp.md). När du är ansluten, skapa en ny mapp på din server där V-Rising-filerna ska installeras.
I det här exemplet skapar vi en ny mapp på skrivbordet.
Det gör du genom att högerklicka.
Välj sedan "Ny -> Mapp".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Du kan döpa mappen till vad du vill. Vi kallar den "VRising" i vårt exempel.

## Steg 2 Ladda ner SteamCMD till din Windows-server

Öppna webbläsaren och gå till [den här länken](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Det laddar ner SteamCMD för Windows till din server.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

Filen laddas ner och bör finnas i din nedladdningsmapp. (Nedladdningsmappen kan variera)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

För översiktens skull kopierar vi steamcmd.zip-filen till VRising-mappen vi skapade på skrivbordet.
Markera filen och tryck "CTRL+C".
Öppna sedan VRising-mappen på skrivbordet och tryck "CTRL+V".
Nu ser du filen i VRising-mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Högerklicka på steamcmd.zip-filen och välj "Extrahera alla". Bekräfta med "Extrahera"-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

När det är klart, dubbelklicka på steamcmd-filen.
Ett nytt fönster öppnas och installerar steamcmd-filerna.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Steg 3 Ladda ner V Rising-filerna

När steamcmd-filerna är installerade ser du detta i det nya fönstret.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Nu anger du var filerna ska laddas ner.
Det gör du med kommandot "force_install_dir".
I vårt exempel ser kommandot ut så här:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Sen loggar du in som anonym användare.
Skriv "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

När det är klart kan du äntligen ladda ner filerna.
Använd kommandot:
app_update 1829350 validate

Filerna laddas ner nu.
Det kan ta några minuter.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

När processen är klar ser du alla filer i VRising-mappen på din server.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Steg 4 Starta och konfigurera V Rising-servern

Du kan redigera start_server_example.bat-filen för att göra några ändringar.
Högerklicka på filen och välj "Redigera".
Du kan ändra serverns namn och sökvägen där processen ska sparas.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Fler ändringar kan göras i konfigurationsfilerna.
De finns i mappen VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

I ServerHostSettings.json kan du göra generella ändringar.
Som att definiera portar, serverbeskrivning, SaveInterval och t.ex. lösenord för gameservern.
Jag ändrade servernamnet till "ZAP-Hosting Test Server".

För att starta servern dubbelklickar du på start_server_example.bat-filen.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

Startprocessen tar lite tid.
Om portarna är korrekt vidarebefordrade kan du hitta servern i serverlistan.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Steg 5 Öppna portar i brandväggen

Servern ska såklart vara offentligt tillgänglig för att spela med polarna. Därför måste serverns portar öppnas i Windows-brandväggen. Portarna 9876 och 9877 måste tillåtas för både TCP OCH UDP. 9876 är gameserver-porten och 9877 är Query-porten.
Så här öppnar du portar i Windows: [Port Forwarding (Firewall)](vserver-windows-port.md). 

När portarna är öppnade är servern publik om den är igång. 


