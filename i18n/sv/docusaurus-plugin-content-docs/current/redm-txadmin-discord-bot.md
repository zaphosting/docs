---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Discord-bot"
description: "Ställ in och integrera en Discord-bot med din txAdmin RedM-server för bättre hantering och kommunikation → Lär dig mer nu"
sidebar_label: txAdmin Discord-bot
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion
txAdmin-panelen ger massor av funktioner för din RedM-server, inklusive en Discord-bot-integration.
I den här guiden visar vi hur du ställer in Discord-boten och hur du använder den.

<InlineVoucher />

## Förberedelser

För att ställa in Discord-boten för din txAdmin-server måste du först logga in på din txAdmin-panel.
Inloggningsuppgifterna visas på serverns översiktssida, som här:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Den här guiden förutsätter att txAdmin redan är uppsatt. Vill du veta hur man gör det kan du kolla in vår [RedM: txAdmin Setup](redm-txadmin-setup.md)-guide.

:::

## Installation

### Skapa en Discord-applikation

För att koppla boten till txAdmin måste du skapa en Discord-applikation. Din bot kopplas sedan till den och agerar under dess namn. För att skapa en sådan applikation, gå till [Discord Developer Portal](https://discord.com/developers/applications/).

Skapa en ny applikation genom att klicka på **New Application** och ge den ett namn, som i exemplet nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Skapa applikationen genom att klicka på **Create**. Skriv ner applikations-ID:t som visas härnäst:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Konfigurera bot och hämta token

När du skapar applikationen skapas automatiskt en bot. Du kan enkelt få tag på token genom att klicka på **Reset Token**. Spara eller skriv ner användartoken som visas:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Dela aldrig bot-token med någon! Det är som en hemlig nyckel som gör att din bot kan fungera utan störningar och utan säkerhetsrisker.
:::

På samma sida, scrolla ner lite och aktivera "Server Members Intent" och spara ändringarna:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Bjud in boten till din Discord

För att bjuda in boten måste du klistra in det tidigare sparade client ID:t i länken nedan på rätt plats, öppna länken i din webbläsare och lägg till boten i din Discord-server. Det ska se ut ungefär så här:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Hämta server- och kanal-ID:n

För att använda boten korrekt med txAdmin måste du få tag på server-ID:t där boten ska jobba.
Det gör du genom att högerklicka på serverikonen i Discord och klicka på **Copy Server ID**. Skriv ner det också.

Så här kan det se ut:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Du kan också välja en kanal där statusuppdateringar som omstarter ska postas. Kopiera kanal-ID på samma sätt.
Glöm inte att boten måste ha rättigheter att läsa och skriva i den kanalen.

:::info
Om du inte ser alternativet att kopiera server- eller kanal-ID måste du först aktivera utvecklarläge i Discord under dina användarinställningar:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Anpassa inställningar i txAdmin

Nu kan du aktivera Discord-boten i txAdmin och fylla i alla ID:n och tokens du sparade tidigare:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Valfritt: Skicka statusmeddelande

Du kan välja att skicka ett statusmeddelande som uppdateras kontinuerligt med aktuell serverstatus, spelare med mera.
Gå till den Discord-kanal du vill ha det i och skriv `/status add`. Se till att boten har rätt att skicka meddelanden i kanalen.

Det skapar ett meddelande som ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Allt i det meddelandet kan du anpassa på Discord-inställningssidan i txAdmin.

## Sammanfattning

Att sätta upp en Discord-bot för txAdmin gör det enkelt att visa din RedM-serverstatus och annan info direkt i din Discord-server. Har du frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />