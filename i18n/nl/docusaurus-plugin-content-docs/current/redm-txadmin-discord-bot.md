---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Discord Bot"
description: "Stel een Discord-bot in en integreer deze met je txAdmin RedM-server om beheer en communicatie te verbeteren → Leer er nu meer over"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie
Het txAdmin-paneel brengt een hoop features voor je RedM-server, waaronder een Discord-bot integratie.
In deze gids laten we je zien hoe je de Discord-bot instelt en hoe je ‘m gebruikt.

<InlineVoucher />

## Voorbereiding

Om de Discord-bot voor je txAdmin-server in te stellen, moet je eerst inloggen op je txAdmin-paneel.
De inloggegevens vind je op de server-overzichtspagina, zoals hier getoond:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Deze gids gaat ervan uit dat txAdmin al is ingesteld. Wil je weten hoe dat moet? Check dan onze [RedM: txAdmin Setup](redm-txadmin-setup.md) gids.

:::

## Setup

### Een Discord Applicatie Aanmaken

Om de bot met txAdmin te koppelen, moet je eerst een Discord-applicatie aanmaken. Je bot wordt hieraan gekoppeld en draait onder die naam. Ga hiervoor naar [de Discord Developer Portal](https://discord.com/developers/applications/).

Klik op **New Application** om een nieuwe applicatie te maken en geef ‘m een naam, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Klik daarna op **Create** om de applicatie aan te maken. Schrijf het application ID op, dat heb je straks nodig:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot Configureren en Token Krijgen

Bij het aanmaken van een applicatie wordt er automatisch een bot aangemaakt. Je krijgt het token door op **Reset Token** te klikken. Dit is je gebruikers-token, zorg dat je ‘m ergens opschrijft:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Deel je bot-token met niemand! Zo blijft je bot veilig en kan ‘ie zonder problemen draaien. Het token is als een geheime sleutel.
:::

Scroll op dezelfde pagina iets naar beneden, zet “Server Members Intent” aan en sla je wijzigingen op:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Bot Uitnodigen op je Discord

Om de bot uit te nodigen, plak je het eerder genoteerde client ID in de volgende link op de juiste plek en open je die in je browser. Voeg de bot toe aan je Discord-server. Het ziet er zo uit:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Server- en Kanaal-ID’s Achterhalen

Om de bot goed te laten werken met txAdmin, heb je de server-ID nodig waar de bot actief is.
Die krijg je door met rechts te klikken op het server-icoon in Discord en te kiezen voor **Server-ID kopiëren**. Schrijf die ID ook op.

Zo ziet dat eruit:

![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Je kunt ook een kanaal instellen waar statusupdates zoals herstartschema’s worden gepost. Kopieer de kanaal-ID op dezelfde manier.
Let erop dat de bot lees- en schrijfrechten heeft in dat kanaal.

:::info
Zie je de optie om server- of kanaal-ID te kopiëren niet? Zet dan eerst de ontwikkelaarsmodus aan in je Discord-gebruikersinstellingen:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Instellingen Aanpassen in txAdmin

Nu kun je de Discord-bot inschakelen in txAdmin en alle eerder genoteerde ID’s en tokens invullen:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optioneel: Statusbericht Verzenden

Je kunt ook een statusbericht sturen dat continu de huidige serverstatus, spelers, etc. bijwerkt.
Ga naar het Discord-kanaal waar je dit wilt en typ `/status add`. Zorg dat de bot berichten mag sturen in dat kanaal.

Er wordt dan zo’n bericht aangemaakt:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Alles in dat bericht kun je aanpassen op de Discord-instellingenpagina binnen txAdmin.

## Conclusie

Met een Discord-bot voor txAdmin toon je makkelijk de status en info van je RedM-server in je Discord-server. Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />