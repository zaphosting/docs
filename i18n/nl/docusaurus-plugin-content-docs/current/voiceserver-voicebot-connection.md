---
id: voiceserver-voicebot-connection
title: "Voiceserver: Je voicebot koppelen aan je voice server"
description: "Ontdek hoe je je voicebot verbindt met TeamSpeak en Discord servers voor naadloze communicatie en controle → Leer het nu"
sidebar_label: Koppelen aan voice server
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introductie

Wil je je Voicebot koppelen aan je TeamSpeak server, maar weet je nog niet precies hoe? Geen stress, we leggen je hieronder stap voor stap uit hoe je dit doet!



## De bot koppelen aan je TeamSpeak

Om je voicebot te verbinden met je TeamSpeak 3 server, moet je hem openen in het control panel. Ga dan links naar **Server**, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Hier kun je een TeamSpeak server selecteren onder **Server** als deze ook via jouw account is geboekt. Staat hij extern gehost? Kies dan voor **Custom Teamspeak Server**.

Vul daarna de gegevens in en sla op. De voicebot maakt dan verbinding met je TeamSpeak 3 server, zo ziet dat eruit:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## De bot koppelen aan je Discord

Wil je je voicebot koppelen aan Discord? Ga dan naar **Server** en selecteer **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Vul hier de **Discord Bot Token** en **Discord Bot Client ID** in. Daarna maakt de voicebot verbinding met je Discord server.


## Je Discord Bot Token en Client ID vinden

Omdat je Discord server geen directe IP of poort heeft, moet je een paar stappen doorlopen voordat je je bot kunt gebruiken op Discord.


### Een Discord Applicatie aanmaken

Eerst maak je een Discord applicatie aan. Je bot wordt hieraan gekoppeld en draait onder die naam. Ga hiervoor naar [de Discord Developer Portal](https://discord.com/developers/applications/).

Klik op **New Application** om een nieuwe app te maken en geef ‘m een naam, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Klik daarna op **Create**. Noteer nu de application ID, die heb je straks nodig:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot configureren en token ophalen

Bij het aanmaken van de applicatie wordt automatisch een bot aangemaakt. Klik op **Reset Token** om de token te krijgen. Noteer deze goed, want dit is je gebruikers-token:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Deel je bot token met niemand! Zo blijft je bot veilig en kan hij zonder problemen draaien. De token is als een geheime sleutel.
:::

Scroll iets naar beneden en zet de vinkjes aan bij **Presence Intent**, **Server Members Intent** en **Message Content Intent**. Sla daarna je wijzigingen op:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Bot uitnodigen op je Discord

Om de bot uit te nodigen, plak je de eerder genoteerde client ID in de volgende link op de juiste plek en open je die in je browser. Voeg de bot zo toe aan je Discord server. Het ziet er zo uit:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Bot instellen in het control panel

Vul nu de eerder genoteerde token en client ID in de velden in het ZAP-Hosting control panel in en klik onderaan op **Save**:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Start daarna de bot. Binnen ongeveer 10 seconden maakt hij verbinding met je Discord server.


## Conclusie

De Voicebot is een superhandige en leuke tool voor veel mensen. Je kunt ‘m gebruiken op een TeamSpeak server of op Discord. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />