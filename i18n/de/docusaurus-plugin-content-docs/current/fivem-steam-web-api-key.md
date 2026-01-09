---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web API Key Einrichtung"
description: "Entdecke, wie du einen Steam Web API Key für FiveM erhältst und aktivierst, um die Authentifizierung zu ermöglichen und die Serverfunktionalität zu verbessern → Jetzt mehr erfahren"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Steam Web API Key hat wichtige Funktionen für FiveM. Dazu gehört die Authentifizierung über den API Key, wenn Steam als Identifikator von verschiedenen Scripts und/oder Ressourcen genutzt wird.

<InlineVoucher />

## Vorbereitung

Ein uneingeschränktes Steam-Konto ist erforderlich, um einen API Key anzufordern. Eingeschränkte Steam-Konten haben nur begrenzten Zugriff auf die Steam-Funktionen, daher ist es ohne vollen Zugriff nicht möglich, einen API Key anzufordern. Du musst mindestens **5,00 USD** im Steam-Store ausgeben, um dein Konto und dessen Funktionen freizuschalten.

## API Key anfordern

Sobald dein Steam-Konto bereit ist, kannst du deinen eigenen Steam Web API Key anfordern. Das machst du, indem du dich [auf der Steam-Webseite](https://steamcommunity.com/dev/apikey) mit deinem Steam-Benutzernamen und Passwort anmeldest.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Nach dem Login musst du einen Domainnamen eingeben, die Nutzungsbedingungen für die Steam Web API bestätigen und auf den **Register**-Button klicken. Die Domain sollte auf deine **Server IP** *(ohne Port)* gesetzt werden, also gib diese dort ein.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Wenn alles erfolgreich war, solltest du deinen eigenen Steam Web API Key sehen können, wie unten dargestellt.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Aktivierung des API Keys

Jetzt, wo du deinen Steam Web API Key hast, musst du ihn in deine Serverkonfiguration (`server.cfg`) auf deinem FiveM Gameserver eintragen. Du kannst auf deine `server.cfg` über die **txAdmin-Oberfläche** unter **CFG Editor** zugreifen. Suche eine bestehende Zeile oder erstelle eine neue, falls sie nicht existiert, und füge Folgendes ein, wobei du `YOUR_KEY_HERE` durch deinen generierten Key ersetzt:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## Fazit

Zum Schluss kannst du deinen Server neu starten. Dein Steam Web API Key wird beim nächsten vollständigen Start deines Servers geladen. Du hast erfolgreich einen Steam Web API Key in deinen FiveM Gameserver integriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />