---
id: discordbot-setup
title: Sätt upp din Discord-bot
description: "Upptäck hur du kör och hanterar Discord-bots för moderation, musik, giveaways och mer med smidig serverhosting → Lär dig mer nu"
sidebar_label: Setup
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

En **Discord-botserver** låter dig köra dina Discord-bots smidigt och kontinuerligt. Dessa bots kan utföra en mängd olika uppgifter, som att automatiskt moderera din Discord-kanal, spela musik, organisera giveaways och omröstningar, och mycket mer. 

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Så här sätter du upp en Discord-botserver och laddar upp botfiler!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara föredrar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />



## Stödda språk

Discord-bots kan programmeras i olika språk. Vår produkt stödjer Discord-bots skrivna i något av följande programmeringsspråk: 

- Java
- Python
- NodeJS

  
  

## Förberedelser



### Skaffa bot

För att komma igång behöver du en fullt fungerande Discord-bot. Du kan antingen skapa en själv eller ladda ner en färdig bot från internet. Spara den på din dator så att du enkelt kan ladda upp den till din tjänst senare.

### Ladda upp filer

Filerna för din Discord-bot måste laddas upp. Detta görs via FTP. Om du är osäker på hur man använder FTP rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md) för detaljerade instruktioner.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


När du har öppnat mappen kan du enkelt ladda upp botfilerna i den tomma mappen:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Konfiguration

För att kunna köra din bot via Dashboarden behöver boten konfigureras i Discord Bot Dashboard under sidan **Settings**. 

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Där behöver du nu konfigurera vilket programmeringsspråk boten använder och vad dess huvudfil heter. Python 3 används i detta exempel och filnamnet på Discord-boten som ska köras anges. Filnamnet är `main.py`. 

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Beroenden
Discord-bots innehåller ofta extra beroenden för sin funktionalitet. Se till att alla finns med och är korrekt konfigurerade i Discord-boten. Dessa definieras i följande filer: 

- Python: Beroenden i `requirements.txt`.
- Node.js: Beroenden i `package.json`.
- Java: Beroenden i `pom.xml` (Maven) eller `build.gradle` (Gradle).

:::



## Testa funktionalitet

Efter att ha sparat inställningarna kan boten enkelt startas med den gröna startknappen högst upp på sidan. I live-konsolen kan du sedan kolla om boten har startat utan problem. 



## Avslutning

Grattis, du har nu installerat och konfigurerat din Discord-bot! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂






<InlineVoucher />