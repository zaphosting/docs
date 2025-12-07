---
id: vserver-windows-fs-22
title: "VPS: Farming Simulator 2022 Dedicated Server Windows Setup"
description: "Upptäck hur du sätter upp Farming Simulator Dedicated Server 2022 på din Windows VPS för smidig multiplayer → Läs mer nu"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Farming Simulator Dedicated Server 2022 på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.
<InlineVoucher />

## Förberedelser
En server baserad på Windows Server 2016/2019 med minst 4x 2.4 GHz CPU (AMD/Intel) och minst 2GB RAM (DDR3/4) samt 6GB ledigt Diskutrymme (SSD eller bättre, rekommenderas) krävs. Servern måste köra 64-bitars arkitektur.  
Dessutom behövs en egen GameLicense (inte Steam-version), samt en publik IPv4-adress. GPU eller ljudkort krävs inte för Dedicated Server.  
Beroende på hur mycket servern moddas eller utökas med mods eller DLC kan fler resurser behövas. 

## Steg 1 Köp digital licens

En digital version av Farming Simulator 2022 krävs, Steam-versionen funkar inte.  
Den digitala versionen kan köpas på [FarmingSimulator webbplats](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Efter köp kan Farming Simulator laddas ner online via länken i mailet från Giants [Länk](https://eshop.giants-software.com/downloads.php).  
:::info
Viktigt: I mailet hittar du GameKey som behövs både för nedladdning och senare aktivering av installationen. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Steg 2 Ladda ner Farming Simulator direkt till din Windows-server

Anslut via [Initial Access (RDP)](vserver-windows-userdp.md) till din Windows-server. När du är inloggad, öppna webbläsaren och gå till länken i mailet igen [länk](https://eshop.giants-software.com/downloads.php). Ange din GameKey och välj nedladdning för Windows8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

Filen laddas ner och bör finnas i din nedladdningsmapp (kan variera).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Dubbelklicka på filen för att öppna och kör Setup.exe.  
Läs igenom TOS och godkänn. Installationen kan göras som Standard eller Custom, Standard räcker oftast.  
Klicka på install och Farming Simulator 2022 installeras – detta kan ta några minuter. 

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

När installationen är klar visas ett meddelande som du bekräftar med "Finish". 

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

Grundinstallationen är nu klar. 

## Steg 3 Aktivering av spelet och konfiguration av dedicated server

Starta nu Farming Simulator. Det ska finnas en genväg på skrivbordet, annars kan du starta via Windows-menyn.  
Felmeddelanden om saknad GPU eller liknande kan ignoreras eller stängas med Nej/Avbryt. Spelet behöver bara startas för att kunna ange nyckeln. 

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Nu måste ett inloggningsnamn och lösenord sättas eller ändras i Config för Dedicated Server, så att du kan logga in på webgränssnittet.  
Config-filen finns i standardinstallationen under  
`C:\Program Files (x86)\Farming Simulator 2022` med namnet `"dedicatedServer.xml"`.  
Inloggningsuppgifterna kan du anpassa helt fritt. 

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Steg 4 Starta Farming Simulator 2022 Dedicated Server

För att starta dedicated server kör du `"dedicatedServer.exe"` i samma mapp där `"dedicatedServer.xml"` ligger.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Öppna sedan webgränssnittet via `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

Logga in med de inloggningsuppgifter du satte i `"dedicatedServer.xml"`.  
Konfigurationen i webgränssnittet är enkel och kan göras med några klick efter dina önskemål. 

## Steg 5 Öppna portar i brandväggen

Servern ska såklart vara tillgänglig för spel med vänner. Därför måste serverns portar öppnas i Windows-brandväggen. Portarna 10823 och 8080 ska tillåtas för TCP-protokollet. 10823 är spelserverporten och 8080 är webporten för webgränssnittet. Webporten behöver bara öppnas om du vill administrera via webben, annars kan administration ske lokalt via RDP.  
Så här öppnar du portar i Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).  

När portarna är öppna och servern är startad är den tillgänglig publikt. 

## Avslutning

Grattis, du har nu installerat och konfigurerat Farming Simulator 2022-servern på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 

<InlineVoucher />