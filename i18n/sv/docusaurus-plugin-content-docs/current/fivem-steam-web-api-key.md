---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web API-nyckel setup"
description: "Upptäck hur du skaffar och aktiverar en Steam Web API-nyckel för FiveM för att möjliggöra autentisering och förbättra serverfunktionaliteten → Läs mer nu"
sidebar_label: Steam Web API-nyckel
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En Steam Web API-nyckel har viktiga användningsområden för FiveM. Det inkluderar autentisering via API-nyckeln när Steam används som identifierare av olika scripts och/eller resurser.

<InlineVoucher />

## Förberedelser

Ett Steam-konto utan begränsningar krävs för att kunna begära en API-nyckel. Begränsade Steam-konton har begränsad tillgång till Steams funktioner, så utan full tillgång går det inte att begära en API-nyckel. Du måste spendera minst **5,00 USD** i Steam-butiken för att låsa upp ditt konto och dess funktioner.

## Begär en API-nyckel

När ditt Steam-konto är redo kan du begära din egen Steam Web API-nyckel. Det gör du genom att logga in [på Steams webbplats](https://steamcommunity.com/dev/apikey) med ditt Steam-kontonamn och lösenord.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

När du är inloggad måste du ange ett domännamn, godkänna användarvillkoren för Steam Web API och klicka på **Register**-knappen. Domänen ska sättas till din **Server IP** *(utan port)*, så skriv in den där.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Om allt går bra ska du kunna se din egen Steam Web API-nyckel, som visas nedan.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Aktivering av API-nyckel

Nu när du har din Steam Web API-nyckel måste du lägga in den i din serverkonfiguration (`server.cfg`) på din FiveM-spelserver. Du kan komma åt din `server.cfg` via **txAdmin-gränssnittet** under **CFG Editor**. Hitta en befintlig rad eller skapa en ny om den inte finns, och lägg till följande, där du byter ut `YOUR_KEY_HERE` mot nyckeln du skapade:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## Avslutning

Till sist kan du starta om din server. Din Steam Web API-nyckel kommer att laddas nästa gång servern är helt igång. Du har nu framgångsrikt lagt till en Steam Web API-nyckel i din FiveM-spelserver. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />