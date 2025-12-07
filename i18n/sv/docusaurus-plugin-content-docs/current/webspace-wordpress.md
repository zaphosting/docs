---
id: webspace-wordpress
title: "Webspace: Installera WordPress"
description: "Upptäck hur du sätter upp WordPress på ditt webspace för att skapa och hantera din webbplats effektivt → Lär dig mer nu"
sidebar_label: Installera
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

WordPress är världens mest använda gratis innehållshanteringssystem. Det programmerades från 2003 av Matthew Mullenweg som mjukvara för webloggar och fortsätter att utvecklas som ett open source-projekt. I den här guiden förklarar vi hur du installerar denna mjukvara på vår webspace-produkt. 

![](https://screensaver01.zap-hosting.com/index.php/s/j3Ctfont64EnpcH/preview)

<InlineVoucher />

## Förberedelser

Innan den faktiska installationen av WordPress kan göras måste vissa förberedelser göras. Det inkluderar att skaffa mjukvaran, sätta upp databasen som ska användas och mailservern (e-postadress).



**Mjukvara**

Mjukvaran kan laddas ner från WordPress officiella webbplats. Nedladdningen hittar du här: [WordPress Download](https://en.wordpress.org/download/)

![](https://screensaver01.zap-hosting.com/index.php/s/69YD2QWG8iHzzaa/preview)

Nedladdningen innehåller en packad zip-fil som måste packas upp på din lokala dator. Inuti hittar du en mapp med namnet **wordpress**. Dess innehåll behövs och måste laddas upp antingen via **FTP eller Filhanteraren**. I detta exempel visas installationen med FTP. Du kan skapa en FTP-användare under **Webbplatser & Domäner** under **FTP-åtkomst**.



![](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



Nu ansluter vi till webspace med det skapade FTP-kontot. Där navigerar vi till katalogen **httpdocs** och laddar upp mjukvarans filer.



![](https://screensaver01.zap-hosting.com/index.php/s/c9JSb9XEjfwGwwQ/preview)



**Databas**

Nästa steg är att skapa databasen som senare kommer att användas för att lagra all information på webbplatsen. För detta klickar du återigen på **Webbplatser & Domäner** och sedan på **Databaser**. Klicka därefter på Lägg till databas och skapa en databas:  



![](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)



Klicka på **OK** så skapas databasen.



**Mailserver (e-postadress)**

För att registrera ett konto på forumet behövs en mailserver med en e-postadress, så att registreringsmail kan skickas till användarna. Instruktioner för att sätta upp en sådan e-postadress hittar du här: [Skicka e-post](webspace-plesk-sendmail.md)



## Installation

Om alla steg i förberedelserna är klara kan själva installationen av WordPress startas. För detta måste webbplatsen nu öppnas i webbläsaren. Det bör se ut så här: 

![](https://screensaver01.zap-hosting.com/index.php/s/8AcGsKyHpsSgKxL/preview)



När du är där kan du klicka på **Let's go!** för att starta installationen. Det första som ska göras är att konfigurera databasen, som redan skapats i förberedelserna. Databasuppgifterna från den skapade databasen måste nu fyllas i.



![](https://screensaver01.zap-hosting.com/index.php/s/9jnjxz8B9TaeZSD/preview)



Klicka på **Skicka** och i nästa steg på **Kör installationen**. 



![](https://screensaver01.zap-hosting.com/index.php/s/ZLZdC5NeWDoQBkr/preview)



WordPress behöver nu lite mer information. Webbplatsens titel, användarnamn, lösenord och e-postadress kan nu anges.

 

![](https://screensaver01.zap-hosting.com/index.php/s/WzckYZ47QJLd7yM/preview)



När alla fält är ifyllda klickar du på **Installera WordPress**. Installationen slutförs inom några sekunder och inloggningsfönstret bör dyka upp. Där kan du logga in med ditt skapade konto. Därefter kan du konfigurera din WordPress precis som du vill!

![](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)



## Avslutning

Grattis, du har installerat WordPress på ditt webspace. Om du har fler frågor eller problem, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig!

<InlineVoucher />