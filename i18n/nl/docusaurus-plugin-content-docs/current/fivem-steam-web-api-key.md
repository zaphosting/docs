---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web API Key instellen"
description: "Ontdek hoe je een Steam Web API key krijgt en activeert voor FiveM om authenticatie mogelijk te maken en je serverfuncties te verbeteren → Leer het nu"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een Steam Web API key is super belangrijk voor FiveM. Hiermee kan je authenticeren via de API Key wanneer Steam wordt gebruikt als identifier door verschillende scripts en/of resources.

<InlineVoucher />

## Voorbereiding

Je hebt een Steam-account nodig zonder beperkingen om een API key aan te vragen. Beperkte Steam-accounts hebben minder toegang tot Steam-functies, dus zonder volledige toegang kun je geen API key aanvragen. Je moet minimaal **5,00 USD** besteden in de Steam Store om je account en functies te ontgrendelen.

## API key aanvragen

Als je Steam-account klaar is, kun je je eigen Steam Web API key aanvragen. Dit doe je door in te loggen [op de Steam-website](https://steamcommunity.com/dev/apikey) met je Steam-accountnaam en wachtwoord.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Eenmaal ingelogd, moet je een domeinnaam invullen, de gebruiksvoorwaarden van de Steam Web API accepteren en op de **Register** knop klikken. Het domein moet je **Server IP** zijn *(zonder poort)*, dus vul dat daar in.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Als alles goed gaat, zie je je eigen Steam Web API Key, zoals hieronder.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## API key activeren

Nu je je Steam Web API Key hebt, moet je deze toevoegen aan je serverconfiguratie (`server.cfg`) op je FiveM game server. Je opent je `server.cfg` via de **txAdmin interface** onder **CFG Editor**. Zoek een bestaande regel of maak een nieuwe aan als die er niet is, en voeg het volgende toe, waarbij je `YOUR_KEY_HERE` vervangt door jouw key:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## Afsluiting

Herstart je server en je Steam Web API key wordt geladen zodra je server volledig is opgestart. Je hebt nu succesvol een Steam Web API Key toegevoegd aan je FiveM game server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />