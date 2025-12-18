---
id: dedicated-windows-fs-19
title: "Dedikerad Server: Farming Simulator 2019 Dedikerad Server Windows Setup"
description: "Upptäck hur du snabbt och smidigt sätter upp en Farming Simulator 2019 Dedikerad Server på din Windows VPS eller dedikerade server → Läs mer nu"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS eller dedikerad server och vill installera Farming Simulator Dedicated Server 2019 på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.



## Förberedelser

En server baserad på Windows Server 2016/2019 med minst 4x 2,4 GHz CPU (AMD/Intel) och minst 2GB RAM (DDR3/4) samt 6GB ledigt diskutrymme (SSD eller bättre, rekommenderas) krävs. Servern måste köra 64-bitars arkitektur.  
Dessutom krävs en egen GameLicense (inte Steam-version), samt en publik IPv4-adress. GPU eller ljudkort behövs inte för den dedikerade servern.  
Beroende på hur mycket servern moddas eller utökas med mods eller DLC kan mer resurser behövas. 


## Steg 1 Köp digital licens

En digital version av Farming Simulator 2019 krävs, det kan inte vara Steam-versionen.  
Den digitala versionen kan köpas på [FarmingSimulator webbplats](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Efter köp kan Farming Simulator laddas ner online via länken i mailet från Giants [Länk](https://eshop.giants-software.com/downloads.php).  
:::info
Viktigt: I mailet hittar du GameKey som behövs både för nedladdning och senare aktivering av installationen. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Steg 2 Ladda ner Farming Simulator direkt till din Windows-server

Anslut via [Initial Access (RDP)](vserver-windows-userdp.md) till din Windows-server. När du är inloggad, öppna webbläsaren och gå till länken i mailet igen [länk](https://eshop.giants-software.com/downloads.php). Ange din GameKey och välj nedladdning för Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Filen laddas ner och bör finnas i din nedladdningsmapp. (Nedladdningsmappen kan variera)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Dubbelklicka på filen för att öppna den och kör Setup.exe.  
Läs igenom TOS och godkänn. Installationen kan göras som Standard eller Custom, vanligtvis räcker Standard.  
Klicka på installera och Farming Simulator 2019 installeras nu, det kan ta några minuter. 

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

När installationen är klar visas följande meddelande, bekräfta med "Finish". 

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

Grundinstallationen är nu klar. 

## Steg 3 Aktivering av spelet och konfiguration av dedikerad server

Starta nu Farming Simulator. Det ska finnas en genväg på skrivbordet, annars kan det startas via Windows-menyn.  
Felmeddelanden om saknad GPU eller liknande kan ignoreras eller stängas med Nej/Avbryt. Farming Simulator behöver bara startas för att kunna mata in nyckeln. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

När nyckeln har verifierats visas en bekräftelse. 

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Nu måste ett inloggningsnamn och lösenord sättas eller ändras/läsas ut i Config för den dedikerade servern, så att inloggning till webgränssnittet är möjlig.  
Config-filen finns i standardinstallationen under  
`C:\Program Files (x86)\Farming Simulator 2019` med namnet `"dedicatedServer.xml"`.  
Inloggningsuppgifterna kan anpassas fritt. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Steg 4 Starta Farming Simulator 2019 Dedikerad Server

För att starta den dedikerade servern måste `"dedicatedServer.exe"` köras i samma mapp där `"dedicatedServer.xml"` finns.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Därefter kan webgränssnittet öppnas via `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Inloggning sker med de tidigare satta/lästa inloggningsuppgifterna från `"dedicatedServer.xml"`.  
Vidare konfiguration är självinstruerande i webgränssnittet och kan göras med några klick, efter dina personliga önskemål. 

## Steg 5 Öppna portar i brandväggen

Servern ska såklart vara publikt åtkomlig för att spela med kompisar. Därför måste serverns portar öppnas i Windows-brandväggen. Portarna 10823 och 8080 måste tillåtas för TCP-protokollet. 10823 är spelserverporten och 8080 är webporten för webgränssnittet, webporten behöver bara öppnas om den ska användas, administration kan fortfarande göras lokalt på Windows-servern via RDP.  
Så här öppnar du portar i Windows: [Port Forwarding (Firewall)](vserver-windows-port.md). 

Efter portöppning är servern publikt åtkomlig, om den är startad. 


