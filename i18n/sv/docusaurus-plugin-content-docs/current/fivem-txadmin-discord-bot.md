---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord-bot"
description: "Upptäck hur du integrerar och använder Discord-boten med din txAdmin-server för förbättrad FiveM-serverhantering → Lär dig mer nu"
sidebar_label: txAdmin Discord-bot
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion
txAdmin-panelen ger massor av funktioner för din FiveM-server, inklusive en Discord-bot-integration.
I den här guiden visar vi hur du sätter upp Discord-boten och hur du använder den.

<InlineVoucher />

## Förberedelser

För att sätta upp Discord-boten för din txAdmin-server måste du först logga in på din txAdmin-panel.
Inloggningsuppgifterna visas på serverns översiktssida, som visas här:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Den här guiden förutsätter att txAdmin redan är uppsatt. Vill du veta hur man gör det kan du kolla in vår [FiveM: txAdmin Setup](fivem-txadmin-setup.md)-guide.

:::

## Setup

### Skapa en Discord-applikation

För att koppla boten till txAdmin måste du skapa en Discord-applikation. Din bot kopplas sedan till den och agerar under dess namn. För att skapa en sådan applikation, gå till [Discord Developer Portal](https://discord.com/developers/applications/).

Nu skapar du en ny applikation genom att klicka på **New Application** och kan sedan ge den ett namn, som på bilden nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Skapa sedan applikationen genom att klicka på **Create**. Skriv ner applikations-ID:t för de följande stegen:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Konfigurera bot och hämta token

När du skapar applikationen skapas automatiskt en bot också. Du kan enkelt få tag på token genom att klicka på **Reset Token**. Då får du en användartoken som du också bör skriva ner eller spara:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Dela aldrig bot-token med någon! Det är som en hemlig nyckel som gör att din bot kan fungera ostört och inte orsakar säkerhetsproblem.
:::

På samma sida scrollar du ner lite och aktiverar "Server Members Intent" och sparar ändringarna:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Bjud in boten till din Discord

För att bjuda in boten måste du klistra in det tidigare sparade client ID:t i länken nedan på rätt plats, öppna länken i din webbläsare och lägga till boten i din Discord-server. Det ska se ut ungefär så här:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Hämta server- och kanal-ID:n

För att använda boten korrekt med txAdmin måste du få tag på server-ID:t där boten ska jobba.
Du får det genom att högerklicka på serverikonen i Discord och klicka på **Copy Server ID**. Skriv ner det också.

Så här kan det se ut:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Du kan också välja att sätta en kanal där statusuppdateringar som omstarter ska postas, och kopiera kanalens ID på samma sätt.
Glöm inte att boten måste ha rättigheter att läsa och skriva i den kanalen.

:::info
Om du inte ser alternativet att kopiera server- eller kanal-ID måste du först aktivera utvecklarläge i dina Discord-inställningar:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Anpassa inställningar i txAdmin

Nu kan du aktivera Discord-boten i txAdmin och fylla i alla ID:n och tokens du sparade tidigare:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Valfritt: Skicka statusmeddelande

Du kan välja att skicka ett statusmeddelande som uppdateras kontinuerligt med aktuell serverstatus, spelare med mera.
Gå till den Discord-kanal du vill ha meddelandet i och skriv `/status add`. Se till att boten har rätt att skicka meddelanden i kanalen.

Det skapar ett meddelande som ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Allt i det meddelandet kan du anpassa på Discord-inställningssidan i txAdmin.

## Sammanfattning

Att sätta upp en Discord-bot för txAdmin gör det enkelt att visa din FiveM-serverstatus och annan info direkt i din Discord-server. Har du frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />