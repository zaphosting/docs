---
id: dedicated-ipmi
title: "Dedikerad Server: Serverhantering via IPMI"
description: "Upptäck hur du fullt ut kan hantera din Enterprise Dedikerade Server med IPMI för smidig kontroll och övervakning → Lär dig mer nu"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Våra AMD Ryzen Dedikerade Servrar hanteras via **Supermicro IPMI**, en kraftfull och beprövad out-of-band-hanteringslösning designad för professionella servermiljöer. Till skillnad från våra Intel-baserade konfigurationer som använder HPE iLO, använder AMD Ryzen-plattformen Supermicro-hårdvara och erbjuder därför IPMI som sitt inbyggda hanteringsgränssnitt.

Supermicro IPMI ger full fjärrkontroll över din server, oberoende av operativsystemets status. Du kan slå på eller av systemet, starta om det, övervaka hårdvarans hälsa, komma åt sensorer och använda den fjärrstyrda konsolen för att arbeta direkt på servern som om du vore på plats. Detta säkerställer maximal kontroll, snabba reaktionstider och pålitlig administration även i kritiska situationer.


## IPMI-åtkomst
Öppna serverpanelen för din ZAP Dedikerade Server i valfri webbläsare. Där hittar du redan den viktigaste informationen om din IPMI.
För att aktivera IPMI klickar du helt enkelt på **Aktivera IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Observera att det kan ta några sekunder innan din IPMI är fullt tillgänglig. 
När systemet har startat hanteringsgränssnittet och det är åtkomligt, ser du inloggningsinformationen.
För att öppna IPMI klickar du på den visade IP-adressen och använder inloggningsuppgifterna för att logga in.



## Översikt

Nyfiken på hur IPMI-hanteringsgränssnittet är uppbyggt och vad varje sektion används till? Denna översikt introducerar de olika sidorna i gränssnittet och visar hur övervakning, hårdvaruinsikter och fjärrhantering är organiserade.

Den ger en guidad startpunkt för att utforska IPMI-miljön och förstå hur de olika vyerna samverkar för att ge full kontroll och insyn över servern.

### Dashboard

Ger en samlad översikt över serverns aktuella status och viktiga hanteringsfunktioner. Systeminformation som hårdvarumodell, BIOS-version, BMC-firmware och driftstatus visas för snabb referens.

Sektionen för ström visar aktuell strömstatus och effektförbrukning, vilket möjliggör direkt kontroll över påslagning, avstängning och omstart samt insikt i energianvändningen.

Direktåtkomst till fjärrkonsolen finns på denna sida, vilket ger full fjärrstyrning av tangentbord, video och mus för uppgifter som installation av operativsystem, felsökning och underhåll, oberoende av serverns driftstatus.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### System

#### Komponentinfo

Visar en detaljerad översikt över installerade hårdvarukomponenter och deras aktuella status. Information ges för CPU, minnesmoduler, strömförsörjningsenheter, strömleverans, nätverks-AOC, sensorer och kylkomponenter.

Varje sektion presenterar hårdvaruspecifika detaljer som modellinformation, konfiguration och driftstatus. Statusindikatorer gör det enkelt att snabbt identifiera friska komponenter samt varningar eller fel.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Hälsologg

Lista över systemrelaterade händelser som registrerats av hanteringskontrollern, vilket ger en kronologisk historik över hårdvaru- och hälsorelaterade aktiviteter. Poster inkluderar strömhändelser, uppstartsprocesser, sensorgränsöverskridanden, temperaturvarningar, spänningsavvikelser och hårdvarufel.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Lagringsövervakning

Ger en översikt över anslutna lagringsenheter och deras aktuella driftstatus. Information inkluderar upptäckta enheter, gränssnittstyp, kapacitet och hälsindikatorer rapporterade av kontrollern och tillgängliga sensorer.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Konfiguration

#### Kontotjänster

Visar en lista över befintliga användarkonton med deras tilldelade roller och behörighetsnivåer. Sidan är avsedd för informationsändamål och ger insyn i vilka konton som har åtkomst till hanteringsgränssnittet.

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notifieringar

Visar aktuell konfiguration för systemnotiser och hantering av larm. Denna sektion visar vilka typer av händelser som kan trigga notiser, som hårdvarufel, temperaturgränser, strömproblem eller sensorvarningar.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Nätverk

Visar nätverkskonfigurationen för hanteringsgränssnittet. Detta inkluderar tilldelad IP-adress, nätmask, gateway, MAC-adress och aktuell länksstatus för IPMI-nätverksporten.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Virtuella Media

Tillåter användning av fjärrmedia via hanteringsgränssnittet. Visar status för monterade virtuella media som ISO-avbilder eller fjärranslutna lagringsenheter kopplade till servern.

Virtuella media kan användas för att starta systemet, installera operativsystem eller utföra återställnings- och underhållsuppgifter utan fysisk åtkomst till hårdvaran.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### BMC-inställningar

Visar konfigurationsdetaljer för Baseboard Management Controller. Denna sektion ger information om firmwareversion, systemidentifieringsdata och allmänt controllerbeteende.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Fjärrkontroll

Ger åtkomst till funktioner för direkt fjärrinteraktion med servern. Denna sektion inkluderar strömhanteringsalternativ som påslagning, avstängning, återställning och ordnad avstängning.

Den fungerar också som en ingångspunkt till fjärrhanteringsfunktioner som möjliggör interaktion med systemet oavsett operativsystemets status.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Underhåll

#### Firmwarehantering

Ger insyn i firmwarenivån för hanteringsmiljön, inklusive aktiv BMC-firmware och relaterade komponenter. Firmwareversioner och deras aktuella status kan granskas för att bekräfta konsistens i hanteringsstacken. Uppdaterings- eller ändringsåtgärder är medvetet otillgängliga för kunder.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Underhållslogg

Registrerar underhållsrelaterade aktiviteter och systemnivååtgärder utförda via hanteringsgränssnittet. Loggade poster inkluderar konfigurationsändringar, firmwareoperationer, återställningar och administrativa åtgärder.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Vanliga problem, tips & tricks

- **Servern startar inte eller fastnar under POST:**
   Om servern inte slutför uppstartsprocessen eller verkar fastna under POST, öppna fjärrkonsolen för att identifiera exakt var processen stannar. Meddelanden om hårdvaruinitiering eller felutskrifter kan synas där.
   Utför en strömcykel med hjälp av strömhanteringsalternativen genom att tvinga avstängning i några sekunder och sedan starta servern igen. Om systemet fortfarande inte startar, kontakta support.

- **Fjärrkonsolen öppnas inte eller förblir svart:**
   Kontrollera att fjärrkonsolsessionen inte redan används av en annan anslutning. Stäng eventuella befintliga sessioner och försök igen.
   I vissa fall löser en uppdatering av webbläsaren eller att öppna konsolen på nytt laddningsproblem. Om problemet kvarstår, kontrollera att servern är påslagen och nåbar.

- **Virtuellt media ISO upptäcks inte:**
   Kontrollera att ISO-källan är nåbar och att filen kan öppnas direkt, till exempel genom att öppna länken i en webbläsare.
   Bekräfta att det virtuella mediet är korrekt monterat och starta om servern efter att ISO har kopplats in. Kontrollera även startordningen för att säkerställa att virtuellt CD/DVD-media prioriteras.

- **Servern tar lång tid på sig att starta:**
   Långa uppstartstider är normalt för hårdvara i företagsklass. Hårdvaruinitiering, kontroll av kontroller och minnesträning kan ta flera minuter, särskilt efter en fullständig strömcykel.

- **IPMI-gränssnittet är tillfälligt otillgängligt:**
   Efter konfigurationsändringar eller längre inaktivitet kan hanteringsgränssnittet vara tillfälligt otillgängligt. Vänta några minuter och försök igen.
   Om åtkomsten inte återkommer, kontakta support för att kontrollera hanteringsgränssnittets status.



## Slutsats

Det här borde göra din administration mycket enklare när du har gått igenom allt i detalj. För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂