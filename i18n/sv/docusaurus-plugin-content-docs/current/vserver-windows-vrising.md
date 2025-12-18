---
id: vserver-windows-vrising
title: "VPS: V-Rising Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en dedikerad V Rising Windows-server för optimal spelprestanda och smidig hosting → Lär dig mer nu"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="Så här sätter du upp en V RISING Dedikerad Windows Server!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>
<InlineVoucher />

## Grundläggande info: 
En server baserad på Windows Server 2016/2019 med minst 4x 2.4 GHz CPU (AMD/Intel) och minst 4GB RAM (DDR3/4) samt 6GB ledigt Diskutrymme (SSD eller bättre, föredras) krävs. Servern måste köra 64-bitars arkitektur. 

## Steg 1 Skapa en mapp för V-Rising

Först behöver du ansluta till din server via [Initial Access (RDP)](vserver-windows-userdp.md). När du är ansluten, skapa en ny mapp på din server där V-Rising-filerna ska installeras.
I det här exemplet skapar vi en ny mapp på skrivbordet.
Det gör du genom att högerklicka.
Välj sedan "Ny -> Mapp".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Du kan döpa mappen till vad du vill. Vi kallar den "VRising" i vårt exempel.

## Steg 2 Ladda ner SteamCMD till din Windows-server

Öppna webbläsaren och gå till [den här länken](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Det laddar ner SteamCMD för Windows till din server.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

Filen laddas ner och bör finnas i din nedladdningsmapp. (Nedladdningsmappen kan variera)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

För översiktens skull kopierar vi steamcmd.zip-filen till VRising-mappen vi skapade på skrivbordet.
Markera filen och tryck "CTRL+C".
Öppna sedan VRising-mappen på skrivbordet och tryck "CTRL+V".
Nu ser du filen i VRising-mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Högerklicka på steamcmd.zip-filen och välj "Extrahera alla". Bekräfta med "Extrahera"-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

När det är klart, dubbelklicka på steamcmd-filen.
Ett nytt fönster öppnas och installerar steamcmd-filerna.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Steg 3 Ladda ner V Rising-filerna

När steamcmd-filerna är installerade ser du detta i det nya fönstret.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Nu anger du var filerna ska laddas ner.
Det gör du med kommandot "force_install_dir".
I vårt exempel ser kommandot ut så här:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Sen loggar du in som anonym användare.
Skriv "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

När det är klart kan du äntligen ladda ner filerna.
Använd kommandot:
app_update 1829350 validate

Filerna laddas ner nu.
Det kan ta några minuter.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

När processen är klar ser du alla filer i VRising-mappen på servern.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Steg 4 Starta och konfigurera V Rising-servern

Du kan redigera start_server_example.bat-filen för att göra några ändringar.
Högerklicka på filen och välj "Redigera".
Du kan ändra servernamnet och sökvägen där processen ska sparas.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

Fler ändringar kan göras i konfigurationsfilerna.
De finns i mappen VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

I ServerHostSettings.json kan du göra generella ändringar.
Som att definiera portar, serverbeskrivning, SaveInterval och t.ex. lösenord för spelservern.
Jag ändrade servernamnet till "ZAP-Hosting Test Server".

För att starta servern dubbelklickar du på start_server_example.bat-filen.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

Startprocessen tar lite tid.
Om portarna är korrekt vidarebefordrade kan du hitta servern i serverlistan.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Steg 5 Öppna portar i brandväggen

Servern måste såklart vara publikt åtkomlig för att spela med polarna. Därför måste serverns portar öppnas i Windows-brandväggen. Portarna 9876 och 9877 måste tillåtas för både TCP OCH UDP. 9876 är spelserverporten och 9877 är Query-porten.
Så här öppnar du portar i Windows, [Port Forwarding (Firewall)](vserver-windows-port.md). 

När portarna är öppnade är servern publikt åtkomlig, om den är igång. 


## Slutsats

Grattis, du har nu installerat och konfigurerat V-Rising på din VPS! Har du fler frågor eller problem, hör av dig till vårt supportteam som finns här för dig varje dag! 

<InlineVoucher />