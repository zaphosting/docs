---
id: voiceserver-voicebot-connection
title: "Voiceserver: Je voicebot koppelen aan je voice server"
description: "Ontdek hoe je je voicebot verbindt met TeamSpeak en Discord servers voor naadloze communicatie en controle → Leer het nu"
sidebar_label: Koppelen aan voice server
services:
  - voiceserver
  - voicebot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introductie

Wil je je Voicebot koppelen aan je TeamSpeak server, maar weet je nog niet precies hoe? Geen stress, we leggen je hieronder stap voor stap uit hoe je dit doet!



## De bot koppelen aan je TeamSpeak

Om je voicebot te verbinden met je TeamSpeak 3 server, moet je hem openen in het controlepaneel. Ga dan links naar **Server**, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Nu kun je onder **Server** een TeamSpeak selecteren, mits deze ook via jouw account is geboekt. Als deze extern gehost wordt, kun je ook kiezen voor **Custom Teamspeak Server**.

Vul dan de gegevens hieronder in, sla op en de voicebot maakt verbinding met je TeamSpeak 3 server. Hier een voorbeeld:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## De bot koppelen aan je Discord

Om je voicebot te koppelen aan Discord, ga je naar **Server** en selecteer je **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Je moet dan de **Discord Bot Token** en **Discord Bot Client ID** invullen. Daarna maakt de voicebot verbinding met je Discord server.


## Je Discord Bot Token en Client ID krijgen

Omdat je Discord server geen directe IP-adres of poort heeft, moet je een paar stappen doorlopen voordat je je bot op een Discord server kunt gebruiken.


### Een Discord Applicatie aanmaken

Het eerste wat je doet is een Discord applicatie aanmaken. Je bot wordt hieraan gekoppeld en draait onder die naam. Ga hiervoor naar [de Discord Developer Portal](https://discord.com/developers/applications/).

Klik op **New Application** om een nieuwe applicatie te maken en geef ‘m een naam, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Klik daarna op **Create** om de applicatie aan te maken. Schrijf nu de application ID op voor de volgende stappen:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot configureren en Token ophalen

Bij het aanmaken van de applicatie wordt er automatisch een bot aangemaakt. Je krijgt de token door op **Reset Token** te klikken. Noteer deze token goed:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Deel je bot token met niemand! Zo blijft je bot veilig en kan ‘ie zonder problemen draaien. De token is als een geheime sleutel, dus hou ‘m voor jezelf.
:::

Scroll op dezelfde pagina iets naar beneden en zet de vinkjes aan bij **Presence Intent**, **Server Members Intent** en **Message Content Intent**, sla daarna je wijzigingen op:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Bot uitnodigen op je Discord

Om de bot uit te nodigen, plak je de eerder genoteerde client ID in onderstaande link op de juiste plek. Open die link in je browser en voeg de bot toe aan je Discord server. Zo ziet het eruit:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Het botpaneel instellen

Vul nu de eerder genoteerde token en client ID in de velden in het ZAP-Hosting controlepaneel in en klik onderaan op **Opslaan**:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Start daarna de bot. Binnen ongeveer 10 seconden maakt ‘ie verbinding met je Discord server.


## Conclusie

De Voicebot is een superhandige en leuke tool voor veel mensen. Je kunt ‘m gebruiken op een TeamSpeak server of op Discord. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />