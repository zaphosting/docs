---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord Bot"
description: "Ontdek hoe je de Discord bot integreert en gebruikt met je txAdmin server voor betere FiveM serverbeheer → Leer het nu"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie
Het txAdmin paneel brengt een hoop handige features voor je FiveM server, waaronder een Discord bot integratie.
In deze gids laten we je zien hoe je de Discord bot instelt en gebruikt.

<InlineVoucher />

## Voorbereiding

Om de Discord bot voor je txAdmin server in te stellen, moet je eerst inloggen op je txAdmin Paneel.
De inloggegevens vind je op de server overzichtspagina, zoals hier getoond:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Deze gids gaat ervan uit dat txAdmin al is opgezet. Wil je weten hoe dat moet? Check dan onze [FiveM: txAdmin Setup](fivem-txadmin-setup.md) gids.

:::

## Setup

### Een Discord Applicatie Aanmaken

Om de bot met txAdmin te koppelen, moet je eerst een Discord applicatie aanmaken. Je bot wordt hieraan gekoppeld en draait onder die naam. Ga hiervoor naar [de Discord Developer Portal](https://discord.com/developers/applications/).

Klik op **New Application** om een nieuwe applicatie te maken en geef ‘m een naam, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Klik daarna op **Create** om de applicatie aan te maken. Schrijf het Application ID op, dat heb je straks nodig:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot Configureren en Token Krijgen

Bij het aanmaken van de applicatie wordt er automatisch een bot aangemaakt. Je krijgt het token door op **Reset Token** te klikken. Dit token moet je goed bewaren:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Geef je bot token aan niemand door! Het is een soort geheime sleutel die je bot veilig en stabiel laat draaien. Delen = no-go.
:::

Scroll op dezelfde pagina iets naar beneden en zet de "Server Members Intent" aan. Vergeet niet je wijzigingen op te slaan:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Bot Uitnodigen in je Discord

Om de bot toe te voegen aan je Discord server, plak je het eerder genoteerde client ID in onderstaande link op de juiste plek en open je die in je browser. Voeg de bot toe aan je server. Zo ziet het eruit:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Server- en Channel-ID’s Opzoeken

Voor een goede werking van de bot met txAdmin heb je de server ID nodig waar de bot actief is.
Klik met de rechtermuisknop op het server-icoon in Discord en kies **Copy Server ID**. Noteer deze ID.

Zo ziet dat eruit:

![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Je kunt ook een kanaal instellen waar statusupdates zoals herstartschema’s worden gepost. Kopieer de channel ID op dezelfde manier.
Zorg dat de bot lees- en schrijfrechten heeft in dat kanaal.

:::info
Zie je de optie om server- of channel-ID te kopiëren niet? Zet dan eerst de ontwikkelaarsmodus aan in je Discord gebruikersinstellingen:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Instellingen Aanpassen in txAdmin

Nu kun je de Discord bot inschakelen in txAdmin en alle eerder genoteerde ID’s en tokens invullen:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optioneel: Statusbericht Verzenden

Je kunt ook een statusbericht sturen dat continu de actuele serverstatus, spelers, etc. bijwerkt.
Ga naar het Discord kanaal waar je dit wilt en typ `/status add`. Zorg dat de bot berichten mag sturen in dat kanaal.

Er wordt dan zo’n bericht aangemaakt:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Alles in dat bericht kun je aanpassen op de Discord instellingenpagina binnen txAdmin.

## Conclusie

Met een Discord bot voor txAdmin toon je makkelijk de status en info van je FiveM server in je Discord server. Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />