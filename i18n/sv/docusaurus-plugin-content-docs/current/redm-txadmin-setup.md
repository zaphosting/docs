---
id: redm-txadmin-setup
title: "RedM: txAdmin Setup"
description: "Upptäck hur du enkelt hanterar och övervakar din RedM-server med txAdmins fullfjädrade webbpanel → Lär dig mer nu"
sidebar_label: txAdmin Setup
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

txAdmin är en helt gratis och fullfjädrad webbpanel för att hantera & övervaka din RedM-server. Den erbjuder en rad funktioner som gör det busenkelt att sköta en RedM-server. Att sätta upp txAdmin kostar inget alls, så börja din resa med den mest simpla men ändå funktionella webbpanelen för RedM-servrar.

<InlineVoucher />

## Åtkomst

Du hittar en länk och inloggningsuppgifter för att komma åt txAdmin i txAdmin-sektionen på din spelservers kontrollpanel. Där får du all info du behöver för att enkelt logga in i txAdmin-gränssnittet och börja konfigurera.

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

Kopiera användarnamn och lösenord och klicka på länken (IP-adress:port) för att öppna txAdmin-gränssnittet och logga in. txAdmin öppnas i ett nytt fönster där du loggar in med dina uppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Setup

När du loggat in kan du börja sätta upp txAdmin och din server. Du ska nu se txAdmins startsida (Dashboard). Uppe till vänster ser du ett meddelande om att din server fortfarande behöver konfigureras. Klicka på **Go to the setup page** för att starta installationsprocessen.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Välkommen och servernamn

Nu ska du välja ett servernamn för ditt projekt. Det här namnet syns inte i serverlistan utan används bara i txAdmin-gränssnittet och i chat/Discord-meddelanden.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Deployment Type

Under Deployment Type väljer du hur du vill sätta upp din server. Du har följande alternativ: **Popular Recipes**, Existing Server Data, **Remote URL Template** och **Custom Template**. Vi går igenom varje alternativ lite mer i detalj nedan så du kan välja det som passar dig bäst.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Popular Template

Popular Templates är färdiga paket som du kan använda direkt – det enklaste sättet att snabbt få igång din RedM-server. Om det är din första server rekommenderar vi starkt detta alternativ. Dessa templates innehåller alla nödvändiga inställningar och resurser för att snabbt få en fungerande server, så du kan fokusera på att anpassa och spela istället för att krångla med setup. Välj bara en template som passar dig.

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### Existing Server Data

Det här alternativet använder du om du redan har kört en server med txAdmin och vill flytta den till oss. Då kan du enkelt ladda upp serverdata via FTP och ange sökvägen under setup. Om du inte är bekant med FTP kan du kolla in vår guide för [FTP-åtkomst](gameserver-ftpaccess.md). Den hjälper dig steg för steg att smidigt flytta över dina serverfiler så du snabbt kommer igång på vår plattform.

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### Remote URL Template

Vill du använda en template som inte finns inbyggd i txAdmin kan du ange en egen recept-URL här. Den hämtas och körs på din server. Perfekt för att deploya egna serverkonfigurationer eller specialupplägg som inte finns i standardvalen. Genom att ange URL laddar txAdmin ner och applicerar templaten automatiskt så din server sätts upp exakt som du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Custom Template

Det här är för dig som redan skapat ett eget recept och vill ladda om det. Du kan snabbt och enkelt applicera dina egna inställningar utan att behöva börja om från scratch. Välj bara ditt befintliga recept så fixar txAdmin resten och ser till att servern konfigureras precis som du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Recipe Deployer

När du valt Deployment Type och följt stegen klickar du på **Go to Recipe Deployer**. Där slutför du de sista stegen: **Review Recipe**, **Input Parameters**, **Run Recipe** och **Configure server.cfg**.

I första steget kan du finjustera det valda eller tillagda receptet. Om inget mer behöver ändras går du vidare till steg 2. Där kan du lägga in din egen [Egen Licensnyckel](redm-licensekey.md) och kolla databasinfo. När allt ser bra ut klickar du på **Run Recipe**. Det kan ta en liten stund. Till sist kan du justera serverkonfigurationsfilen (`server.cfg`) efter behov.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Avsluta med att klicka på **Save & Run Server**. Nu är txAdmin setup klar och du kan ansluta till din server.


## Extra support

För txAdmin-specifik support, kontakta txAdmin-teamet via deras [officiella hemsida](https://txadm.in/) eller gå med i communityn på [Discord](https://discord.gg/txAdmin/). Communityn och supporten hjälper dig gärna med frågor eller problem så du får bästa möjliga upplevelse när du hanterar din server.

<InlineVoucher />