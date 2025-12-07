---
id: voiceserver-voicebot-connection
title: "Voiceserver: Koppla din voicebot till din voiceserver"
description: "Upptäck hur du kopplar din voicebot till TeamSpeak och Discord-servrar för smidig kommunikation och kontroll → Lär dig mer nu"
sidebar_label: Koppla till voiceserver
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introduktion

Vill du koppla din Voicebot till din TeamSpeak-server men vet inte riktigt hur du ska göra? Ingen fara, här förklarar vi steg för steg hur du gör!



## Koppla boten till din TeamSpeak

För att koppla din voicebot till din TeamSpeak 3-server måste du öppna den i kontrollpanelen. Gå sedan till **Server** i menyn till vänster, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Nu kan du välja en TeamSpeak under **Server** om den också är bokad via ditt konto. Om den är hostad externt kan du även välja **Custom Teamspeak Server** där.

Fyll i uppgifterna nedan, spara, så kopplar voiceboten upp sig mot din TeamSpeak 3-server. Här är ett exempel:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Koppla boten till din Discord

För att koppla din voicebot till Discord går du till **Server** och väljer sedan **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Fyll i **Discord Bot Token** och **Discord Bot Client ID**. Då kopplar voiceboten upp sig mot din Discord-server.


## Så får du din Discord Bot Token och Client ID

Eftersom din Discord-server inte har en direkt IP-adress eller port, krävs några förberedande steg innan du kan använda din bot på en Discord-server.


### Skapa en Discord-applikation

Det första du behöver göra är att skapa en Discord-applikation. Din bot kopplas sedan till den och agerar under dess namn. För att skapa en applikation, gå till [Discord Developer Portal](https://discord.com/developers/applications/).

Skapa en ny applikation genom att klicka på **New Application** och ge den ett namn, som på bilden nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Skapa applikationen genom att klicka på **Create**. Skriv ner applikations-ID:t för nästa steg:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Konfigurera bot och hämta token

När du skapar applikationen skapas automatiskt en bot. Du kan enkelt få token genom att klicka på **Reset Token**. Spara token någonstans säkert:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Dela aldrig din bot-token med någon! Den är som en hemlig nyckel och om den kommer i orätta händer kan det skapa säkerhetsproblem och störa din bot.
:::

Scrolla ner på samma sida och aktivera **Presence Intent**, **Server Members Intent** och **Message Content Intent**, spara sedan ändringarna:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Bjud in boten till din Discord

För att bjuda in boten, klistra in den tidigare antecknade client ID i länken nedan på rätt plats, öppna länken i din webbläsare och lägg till boten på din Discord-server. Det ska se ut ungefär så här:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Konfigurera botens panel

Fyll i den tidigare antecknade token och client ID i fälten i ZAP-Hostings kontrollpanel och klicka på **Spara** längst ner:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Starta sedan boten. Den bör koppla upp sig mot din Discord-server inom cirka 10 sekunder.


## Sammanfattning

Voiceboten är en riktigt användbar och rolig produkt för många. Du kan använda den på både TeamSpeak och Discord. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />