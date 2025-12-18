---
id: exiled-plugins
title: "SCP EXILED: Installera plugins"
description: "Upptäck hur du kan utöka och anpassa din server med pålitliga plugins för bättre funktionalitet och skräddarsydda inställningar → Lär dig mer nu"
sidebar_label: Installera Plugins
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introduktion

Plugins låter dig utöka och anpassa din server ännu mer. Här nedan förklarar vi var du hittar de vanligaste pluginsen och hur du installerar dem.

<InlineVoucher />

## Förberedelser

Först behöver du ladda ner de plugins du vill installera på din server. Ett brett utbud av EXILED-plugins hittar du på deras officiella GitHub-sida. När du valt ett plugin-repo hittar du en releases-sektion där du kan ladda ner den senaste versionen. Detaljerade instruktioner om hur du går tillväga finns längre ner.

Även om plugins kan laddas ner från olika källor rekommenderar vi att du håller dig till pålitliga plattformar som det officiella GitHub-repot, eftersom dessa generellt anses vara säkrast. Var alltid försiktig när du lägger till plugins på din server. Kontrollera alltid källan, kolla upp utvecklarna och förstå helt vad pluginet gör innan du installerar det.

För att ladda ner ett plugin från GitHub, börja med att besöka den officiella [EXILED GitHub-sidan](https://github.com/Exiled-Team) och välj det plugin-repo du vill använda.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

När du är inne i plugin-repot, leta upp **Releases**-sektionen som finns på höger sida.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

I Releases-sektionen hittar du en nedladdningsbar **.dll**-fil. Klicka på den för att starta nedladdningen.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Klart! När du laddat ner filen kan du gå vidare till installationsstegen längre ner i guiden för att lära dig hur du installerar **.dll**-filen på din server.


## Installation

När du laddat ner de plugins du vill ha kan du fortsätta med installationen. Detta görs via **FTP**, så du behöver en FTP-klient för att ladda upp filerna till din server. Om du inte är bekant med FTP och hur det funkar, kolla in vår guide: [Access via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Du hittar rätt plugin-mapp under: ```/gXXXXXX/.config/EXILED/Plugins```. Ladda helt enkelt upp de nedladdade **.dll**-pluginfilerna till den här mappen. Det bör se ut ungefär så här efter uppladdning:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

När detta är klart är plugin-installationen färdig. Kolla slutligen i **live-konsolen** för att verifiera att pluginet har kompilerats och laddats in utan problem. Bekräftelsen i konsolen ska se ut så här:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Populära Plugins

Letar du fortfarande efter de perfekta pluginsen till din server? Bläddra igenom vår noga utvalda lista med de mest populära och rekommenderade pluginsen för att boosta din gameplay och ge din server den där sista touchen den förtjänar. Hitta inspiration och precis de tilläggen som passar ditt projekt.

<SearchableItemList items={items} />


## Avslutning

Om du följt alla steg bör du nu ha installerat ditt plugin utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />