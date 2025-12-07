---
id: fivem-txadmin-setup
title: "FiveM: txAdmin Setup"
description: "Upptäck hur du enkelt kan hantera och övervaka din FiveM-server med txAdmins kostnadsfria, fullfjädrade webbpanel → Lär dig mer nu"
sidebar_label: txAdmin Setup
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

txAdmin är en helt gratis och fullfjädrad webbpanel för att hantera & övervaka din FiveM-server. Den erbjuder en rad funktioner som gör det busenkelt att sköta en FiveM-server. Att sätta upp txAdmin är helt gratis, börja din resa med den mest simpla men ändå funktionella webbpanelen för FiveM-servrar.

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="Setup a txAdmin Server" description="Lär du dig bäst när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Access

Du hittar en länk och inloggningsuppgifter för att komma åt txAdmin i txAdmin-sektionen på din spelservers kontrollpanel. Där får du all info du behöver för att enkelt logga in i txAdmin-gränssnittet och börja konfigurera.

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

Kopiera användarnamn och lösenord och klicka på länken (IP-adress:port) för att komma åt txAdmin och logga in. txAdmin öppnas då i ett nytt fönster där du loggar in med dina uppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Setup

När du loggat in kan du börja sätta upp txAdmin och din server. Du ska nu se txAdmins startsida (Dashboard). Uppe till vänster ser du ett meddelande om att din server fortfarande behöver konfigureras. Klicka på **Go to the setup page** för att starta setupen.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Välkommen och servernamn

Nu ska du ange ett servernamn för ditt projekt. Det här namnet syns inte i serverlistan utan används bara i txAdmin-gränssnittet och i chat/Discord-meddelanden.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Deployment Type

Under Deployment Type väljer du hur du vill sätta upp din server. Du har följande alternativ: **Popular Recipes**, Existing Server Data, **Remote URL Template**, och **Custom Template**. Vi går igenom varje alternativ mer i detalj nedan så du kan välja det som passar dig bäst.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Popular Template

Popular Templates är färdiga paket som du kan använda direkt – det enklaste sättet att snabbt få igång din FiveM-server. Om det är din första server rekommenderar vi starkt detta alternativ. Dessa templates innehåller alla nödvändiga inställningar och resurser för att snabbt få en fungerande server, så du kan fokusera på anpassning och gameplay istället för setup. Välj bara en template som passar dig.

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### Existing Server Data

Välj detta om du redan kört en server med txAdmin och vill flytta den till oss. Då kan du enkelt ladda upp serverfilerna via FTP och ange sökvägen under setupen. Om du inte är van vid FTP kan det vara värt att kolla in vår [FTP-access](gameserver-ftpaccess.md) guide. Den visar steg för steg hur du smidigt överför dina filer så du snabbt kommer igång på vår plattform.

![img](https://screensaver01.zap-hosting.com/index.php/s/KS4raRtHWmmw5iN/preview)





### Remote URL Template

Vill du använda en template som inte finns inbyggd i txAdmin kan du här ange en egen recept-URL. Den hämtas och körs på din server. Perfekt för custom-konfigurationer eller setups som inte finns bland standardvalen. Genom att ange URL laddar txAdmin ner och applicerar templaten automatiskt, så din server blir precis som du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Custom Template

Det här är för dig som redan skapat ett eget recept och vill ladda om det. Du kan snabbt och enkelt applicera dina egna inställningar utan att börja om från början. Välj bara ditt befintliga recept så fixar txAdmin resten och konfigurerar servern exakt som du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Recipe Deployer

När du valt Deployment Type och följt stegen klickar du på **Go to Recipe Deployer**. Där slutför du de sista stegen: **Review Recipe**, **Input Parameters**, **Run Recipe**, och **Configure server.cfg**.

I första steget kan du anpassa receptet ytterligare. Om inget mer behöver ändras går du vidare till steg 2 där du kan fylla i din egen [Own License Key](fivem-licensekey.md) och kolla databasinfo. När allt ser bra ut klickar du på **Run Recipe**. Det kan ta en liten stund. Till sist kan du justera serverkonfigurationsfilen (`server.cfg`) efter behov.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Avsluta med att klicka på **Save & Run Server**. Nu är txAdmin-setupen klar och du kan ansluta till din server.


## Extra support

För txAdmin-specifik support, kontakta txAdmin-teamet via deras [officiella hemsida](https://txadm.in/) eller gå med i communityn på [Discord](https://discord.gg/txAdmin/). Communityn och supporten hjälper dig gärna med frågor eller problem så du får bästa möjliga upplevelse när du hanterar din server.

<InlineVoucher />