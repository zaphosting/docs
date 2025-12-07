---
id: webspace-mybb
title: "Webspace: Installera MyBB forumprogramvara"
description: "Upptäck hur du sätter upp och startar ditt eget MyBB-forum för att bygga en engagerande onlinecommunity → Lär dig mer nu"
sidebar_label: Installera MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

MyBB, tidigare MyBulletinBoard, är en gratis och öppen källkods-forumprogramvara utvecklad av MyBB Group. I den här guiden förklarar vi hur du installerar denna forumprogramvara på vår webspace-produkt.

<InlineVoucher />

## Förberedelser

Innan den faktiska installationen av MyBB kan genomföras måste vissa förberedelser göras. Detta inkluderar att skaffa forumprogramvaran, sätta upp databasen som ska användas och mailservern (e-postadress).

**Programvara**

Forumprogramvaran kan laddas ner från MyBB:s officiella webbplats. Nedladdningen hittar du här: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

Nedladdningen innehåller en packad fil som måste packas upp på din lokala dator. Inuti hittar du en mapp med namnet **Upload**. Dess innehåll behövs och måste laddas upp antingen via **FTP eller Filhanteraren**. Under **Webbplatser & Domäner** vid **FTP-Access** kan du skapa en FTP-användare.

Efter att ha öppnat filhanteraren i Plesk-panelen navigerar vi till katalogen **httpdocs** och laddar upp filerna för forumprogramvaran.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Databas**

Nästa steg är att skapa databasen som senare kommer att användas för att lagra all information från forumet. För att göra detta klickar du återigen på **Webbplatser & Domäner** och sedan på **Databaser**. Klicka sedan på Lägg till databas och skapa en databas:

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Klicka på **OK** så skapas databasen.

**Mailserver (e-postadress)**

För att registrera ett konto på forumet behövs en mailserver med en e-postadress, så att registreringsmail kan skickas till användarna. Instruktioner för att sätta upp en sådan e-postadress hittar du här: [Skicka e-post](webspace-plesk-sendmail.md)

## Installation

Om alla steg från förberedelserna är klara kan själva installationen av MyBB startas. För detta måste webbplatsen nu öppnas i webbläsaren. Det bör se ut så här:

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

När du är där måste vi nu konfigurera de 9 kategorierna under installationen. Konfigurationen kommer att kontrollera om alla förutsättningar är uppfyllda, konfigurera databasen och forumprogramvaran med mera. Först måste vi bestämma om anonym statistik ska skickas till MyBB eller inte. Därefter måste licensvillkoren godkännas.

En översikt över de nödvändiga systemkraven visas sedan. Detta inkluderar PHP-version, minne osv. Webspacen bör redan vara konfigurerad för att uppfylla alla dessa krav som standard.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Om några krav inte uppfylls, kontakta supporten. Annars kan du klicka på **Nästa** och fortsätta installationen. Nu måste vi konfigurera databasen som redan skapats i förväg. Databasuppgifterna från den skapade databasen måste fyllas i här:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

Databasen konfigureras därefter. Detta kan ta en liten stund. Efter det sker implementeringen av standarddata och teman. Allt du behöver göra här är att klicka på **Nästa**.

Därefter kommer vi till den allmänna konfigurationen. Här kan du definiera namn på webbplatsen, forumet, URL och mer:

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Sist men inte minst måste ett administratörskonto skapas innan installationen kan slutföras.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

När du gjort detta och allt annat är konfigurerat korrekt bör du se följande meddelande och kunna komma åt ditt forum:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />