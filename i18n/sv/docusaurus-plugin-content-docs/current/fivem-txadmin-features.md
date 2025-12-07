---
id: fivem-txadmin-features
title: "FiveM: txAdmin-gränssnitt"
description: "Upptäck hur du effektivt hanterar och övervakar din FiveM-server med txAdmins fullfjädrade webbpanel → Lär dig mer nu"
sidebar_label: txAdmin-gränssnitt
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

txAdmin är en helt gratis och fullfjädrad webbpanel för att Hantera & Övervaka din FiveM-server. Den erbjuder en rad funktioner som gör det busenkelt att sköta en FiveM-server. I den här guiden introducerar vi dig till txAdmin-gränssnittet, lyfter fram dess funktioner och förklarar exakt vad du kan göra med det.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigering

Navigationsmenyn innehåller följande delar: **Players**, **History**, **Whitelist**, **Admins**, **Settings** och **System**. Var och en förklaras mer i detalj nedan.

### Players

Players-sektionen ger en översikt över spelarstatistik, inklusive totalt antal anslutna spelare, antal spelare som anslutit under de senaste 24 timmarna, samt nya spelare under de senaste 24 timmarna och 7 dagarna. Under detta hittar du en lista över spelare som är anslutna just nu, tillsammans med deras totala speltid, första anslutning och senaste anslutning.

Klicka på en spelare för att komma åt fler hanteringsalternativ. Här kan du se mer info, anteckningar, historik (ban/varningar), ID:n (Player Identifiers, Player Hardware IDs) och ban-alternativ.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

History-sektionen listar alla varningar och ban som utfärdats till spelare, med detaljerad info om spelaren, orsaken och vem som utfärdade eller verkställde varningen/ban, inklusive datum och tid. Du kan även återkalla varningar och ban därifrån.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

I Whitelist-sektionen kan du hantera whitelist-funktionen. Whitelisten låter dig begränsa vem som får tillgång till servern. Om detta är aktiverat i txAdmin-inställningarna skapas automatiskt en whitelist-förfrågan när en ny spelare ansluter för första gången. Du kan sedan hantera dessa förfrågningar här.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Under Admins-sektionen kan du specificera och hantera administratörer. Nya admins läggs till genom att klicka på **Add**-knappen. Då öppnas ett popup-fönster där du skapar kontot och sätter rätt behörigheter.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

I Settings-sektionen kan du konfigurera en mängd olika inställningar för både txAdmin och servern. Eftersom det finns många inställningar är de indelade i följande kategorier: **Global**, **FXServer**, **Bans**, **Whitelist**, **Discord** och **Game**. Varje kategori förklaras mer i detalj nedan.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

Under Global kan du ställa in servernamn, språk för chat/Discord-meddelanden och mallar för ban.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mr4D28GGqfPQQw/preview)

#### FXServer

Under FXServer kan du konfigurera Server Data Folder och CFG File Path, samt lägga till extra argument som att aktivera gamemodes/DLCs, slå på/av OneSync, Autostart och Quietmode.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

I Bans-sektionen hanterar du ban-funktionen. Här definierar du om konton ska kontrolleras aktivt för ban-status och vilket meddelande som ska visas om anslutningen nekas på grund av ban.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

I Whitelist-sektionen hanterar du whitelist-funktionen. Här bestämmer du om whitelist ska vara aktiv eller inaktiv och vilket meddelande som ska visas om anslutningen nekas på grund av att whitelist-posten saknas.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)



#### Discord

Discord-integrationen kan aktiveras under Discord-sektionen, vilket gör att info automatiskt skickas till den kopplade Discord-servern. För att aktivera detta måste du konfigurera nödvändiga uppgifter för Discord-boten.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

Under Game kan du aktivera txAdmin-menyn för in-game-användning, så att admins kan öppna och hantera menyn med kommandot /tx. Du kan även anpassa layout, knappkonfiguration för att växla inställningar och notiser/varningar.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

I Settings-sektionen hittar du viktiga allmänna alternativ och info, indelade i: **Master Actions**, **Diagnostics**, **Console Log** och **Action Log**. Varje del förklaras mer i detalj nedan.



#### Master Actions

Under Master Actions finns alternativ för att återställa din FXServer, göra databasbackup, rensa databasen och definiera när spelare ska tas bort från whitelist om de varit inaktiva för länge.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

Diagnostics visar all relevant info om miljön, txAdmin-runtime, Diagnostics Report, FXServer /info.json och processer.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

Console Log visar txAdmins output i huvudterminalen, inklusive de vanligtvis dolda debug-meddelandena.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

Action Log visar alla åtgärder som utförts av txAdmin eller någon admin.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Sidomeny

Sidomenyn innehåller följande delar: **Dashboard**, **Live Console**, **Resources**, **Server Log** och **CFG Editor**. Varje del förklaras mer i detalj nedan.



### Dashboard

Dashboard visar all viktig info om servern. Live-data om belastning och prestanda kan följas via statistiken. Serverstatus – om den är startad, online eller stoppad – syns i sidomenyn. Därifrån kan du också starta, stoppa eller starta om servern, kicka alla spelare med ett klick och skicka ut meddelanden. Du kan även schemalägga omstarter. På högra sidan i sidomenyn ser du info om spelarna som är anslutna just nu.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

Live Console ger dig realtidsinfo om serverns aktiviteter. Här kan du se detaljer om aktiviteter, varningar och felmeddelanden. Det är en grym hjälp när du felsöker genom att analysera eventuella felmeddelanden.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
Under Resources hittar du en översikt över alla resurser, oavsett om de är förinstallerade via en mall (recipe) eller tillagda av dig senare. Du kan också starta om eller stoppa dem vid behov.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

Server Log låter dig följa alla aktiviteter på servern. Du kan till exempel se när spelare ansluter eller kopplar från, chattmeddelanden, dödsfall i spelet, menyåtgärder, utförda kommandon och systemhändelser.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

Med CFG Editor kan du hantera och uppdatera din servers `server.cfg`-fil. Här finns alla viktiga konfigurationskommandon som styr serverns inställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />