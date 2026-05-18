---
id: vserver-windows-troubleshooting-icmpv4-echo
title: "Nätverksfelsökning: ICMPv4 Echo saknas – Servern verkar offline"
description: "Lär dig hur du tillåter ICMPv4 Echo-förfrågningar i Windows-brandväggen så att din server kan upptäckas korrekt av övervakningssystem → Läs mer nu"
sidebar_label: ICMPv4 Echo saknas
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I vissa situationer kan en Windows-server verka **offline i kontrollpanelen** trots att systemet i sig körs som vanligt. Detta beteende är oftast kopplat till brandväggsinställningar som blockerar **ICMPv4 Echo-förfrågningar**. Dessa förfrågningar används av det välkända `ping`-kommandot och är vanligt förekommande i övervakningssystem för att avgöra om en server eller IP-adress är nåbar.

Om Windows-brandväggen blockerar ICMP Echo-förfrågningar kan övervakningssystemet inte få något svar från servern. Som en följd kan kontrollpanelen visa servern eller de tilldelade IP-adresserna som offline, även om servern i sig fungerar utan problem.

![img](https://screensaver01.zap-hosting.com/index.php/s/ptD4W4MkAo85PAo/download)



## Orsak

Den vanligaste orsaken till detta problem är att en regel saknas i **Windows Defender-brandväggen** som tillåter inkommande ICMPv4 Echo-förfrågningar. Utan denna regel blockerar brandväggen ping-förfrågningar som standard.

Övervakningssystem förlitar sig på dessa svar för att avgöra serverns tillgänglighet, vilket är anledningen till att systemet kan verka offline trots att tjänsterna på servern fortsätter att fungera som vanligt.



## Lösning

För att lösa problemet måste en brandväggsregel skapas som tillåter ICMPv4 Echo-förfrågningar. Börja med att ansluta via VNC. Klicka på **VNC Console** i VPS-hanteringen och logga in med dina vanliga inloggningsuppgifter.

![img](https://screensaver01.zap-hosting.com/index.php/s/mDQt7LLbLNSPC6a/download)

När du är inloggad, öppna gränssnittet för **Windows Defender-brandväggen med avancerad säkerhet**. Tryck på `Windows + R`, skriv in följande kommando och bekräfta med Enter:

```
wf.msc
```
Fönstret för avancerad brandväggskonfiguration öppnas. I menyn till vänster väljer du **Inbound Rules** (Inkommande regler), eftersom servern måste acceptera inkommande ICMP-förfrågningar. På höger sida väljer du **New Rule** för att skapa en ny brandväggsregel.

Under skapandet av regeln väljer du **Custom** som regeltyp. I nästa steg väljer du protokolltypen **ICMPv4**. Efter att ha valt protokollet öppnar du inställningarna för **Customize** och aktiverar alternativet för **Echo Request**, vilket tillåter servern att svara på ping-förfrågningar.

Fortsätt genom guiden och välj **Allow the connection** som åtgärd för regeln. I steget för profilval kan du oftast aktivera regeln för alla profiler så att den fungerar oavsett om servern är i ett offentligt, privat eller domännätverk.

Slutligen ger du regeln ett tydligt namn, till exempel `Allow ICMPv4 Echo Requests`. När guiden är klar tillåter den nya regeln omedelbart inkommande ICMP Echo-förfrågningar.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Verifiering

När regeln är skapad kan du kontrollera att servern svarar på ping-förfrågningar. Från en annan dator kör du följande kommando:
```
ping <DIN_SERVER_IP>
```
Om servern svarar korrekt kan övervakningssystemet också upptäcka den igen. Efter en kort stund bör serverns status i panelen ändras från offline till online.



## Slutsats

Grattis! Genom att skapa regeln för ICMPv4 Echo i Windows-brandväggen har du framgångsrikt säkerställt att din Windows VPS kan svara på ping-förfrågningar igen.

Detta gör att övervakningssystem kan upptäcka din servers tillgänglighet korrekt och förhindrar att den visas som offline i kontrollpanelen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂