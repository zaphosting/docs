---
id: redm-steam-web-api-key
title: "RedM: Steam Web API Key Einrichtung"
description: "Erfahre, wie du einen Steam Web API Key für RedM bekommst und aktivierst, um Authentifizierung zu ermöglichen und deinen Server optimal einzurichten → Jetzt mehr erfahren"
sidebar_label: Steam Web API Key
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Steam Web API Key ist für RedM super wichtig. Er wird unter anderem für die Authentifizierung per API Key genutzt, wenn Steam als Identifikator von verschiedenen Scripts und/oder Ressourcen verwendet wird.

<InlineVoucher />

## Vorbereitung

Du brauchst ein uneingeschränktes Steam-Konto, um einen API Key anzufordern. Eingeschränkte Steam-Konten haben nur begrenzten Zugriff auf Steam-Funktionen, daher ist es ohne vollen Zugriff nicht möglich, einen API Key zu beantragen. Du musst mindestens **5,00 USD** im Steam Store ausgeben, um dein Konto und dessen Funktionen freizuschalten.

## API Key anfordern

Sobald dein Steam-Konto bereit ist, kannst du deinen eigenen Steam Web API Key anfordern. Melde dich dazu [auf der Steam-Webseite](https://steamcommunity.com/dev/apikey) mit deinem Steam-Benutzernamen und Passwort an.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Nach dem Login musst du einen Domainnamen eingeben, die Nutzungsbedingungen der Steam Web API bestätigen und auf den **Register**-Button klicken. Die Domain solltest du auf deine **Server-IP** *(ohne Port)* setzen, also gib diese dort ein.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Wenn alles geklappt hat, solltest du deinen eigenen Steam Web API Key sehen können, wie im Bild unten.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## API Key aktivieren

Jetzt, wo du deinen Steam Web API Key hast, musst du ihn in deine Serverkonfiguration (`server.cfg`) auf deinem RedM Gameserver eintragen. Du kannst auf deine `server.cfg` über die **txAdmin-Oberfläche** unter **CFG Editor** zugreifen. Suche eine bestehende Zeile oder erstelle eine neue, falls sie nicht existiert, und füge Folgendes ein, wobei du `YOUR_KEY_HERE` durch deinen generierten Key ersetzt: 

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)



## Fazit

Starte deinen Server anschließend neu. Dein Steam Web API Key wird beim nächsten vollständigen Start deines Servers geladen. Du hast erfolgreich einen Steam Web API Key in deinen RedM Gameserver integriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />