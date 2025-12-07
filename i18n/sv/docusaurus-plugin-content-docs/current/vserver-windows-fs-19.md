---
id: vserver-windows-fs-19
title: "VPS: Farming Simulator 2019 Dedicated Server Windows Setup"
description: "Lär dig hur du sätter upp en Farming Simulator Dedicated Server 2019 på Windows VPS för smidig multiplayer → Läs mer nu"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Farming Simulator Dedicated Server 2019 på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.
<InlineVoucher />

## Förberedelser

En server baserad på Windows Server 2016/2019 med minst 4x 2.4 GHz CPU (AMD/Intel) och minst 2GB RAM (DDR3/4) samt 6GB ledigt diskutrymme (SSD eller bättre, rekommenderas) krävs. Servern måste köra 64-bitars arkitektur.  
Dessutom krävs en egen GameLicense (inte Steam-version), samt en publik IPv4-adress. GPU eller ljudkort behövs inte för Dedicated Servern.  
Beroende på hur mycket servern moddas, utökas med mods eller DLCs kan fler resurser behövas. 

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

Filen laddas ner och bör finnas i din nedladdningsmapp (kan variera).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Dubbelklicka på filen för att öppna den och kör Setup.exe.  
Läs igenom TOS och godkänn. Installationen kan göras som Standard eller Custom, vanligtvis räcker Standard.  
Klicka på installera och Farming Simulator 2019 installeras – detta kan ta några minuter. 

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

När installationen är klar visas ett meddelande som du bekräftar med "Finish". 

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

Grundinstallationen är nu klar. 

## Steg 3 Aktivering av spelet och konfiguration av dedicated server

Starta nu Farming Simulator. Det ska finnas en genväg på skrivbordet, annars kan du starta via Windows-menyn.  
Felmeddelanden om saknad GPU eller liknande kan ignoreras eller stängas med Nej/Avbryt. Spelet behöver bara startas för att kunna mata in nyckeln. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

När nyckeln är igenkänd visas en bekräftelse. 

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Nu måste ett inloggningsnamn och lösenord sättas eller ändras/läsas i Config-filen för Dedicated Server, så att du kan logga in på webgränssnittet.  
Config-filen finns i standardinstallationen under  
`C:\Program Files (x86)\Farming Simulator 2019` med namnet `"dedicatedServer.xml"`.  
Inloggningsuppgifterna kan anpassas fritt. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Steg 4 Starta Farming Simulator 2019 Dedicated Server

För att starta dedicated servern kör du `"dedicatedServer.exe"` i samma mapp där `"dedicatedServer.xml"` finns.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Öppna sedan webgränssnittet via `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Logga in med de inloggningsuppgifter du satte/läste från `"dedicatedServer.xml"`.  
Konfigurationen i webgränssnittet är enkel och kan göras med några klick efter dina önskemål. 

## Steg 5 Öppna portar i brandväggen

Servern ska såklart vara publikt åtkomlig för att spela med kompisar. Därför måste serverns portar öppnas i Windows brandvägg. Portarna 10823 och 8080 måste tillåtas för TCP-protokollet. 10823 är spelserverporten och 8080 är webporten för webgränssnittet. Webporten behöver bara öppnas om du vill använda webgränssnittet, annars kan administration ske lokalt via RDP.  
Så här öppnar du portar i Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).  

När portarna är öppnade och servern är startad är den publikt åtkomlig. 

## Avslutning

Grattis, du har nu installerat och konfigurerat Farming Simulator 2019-servern på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 

<InlineVoucher />