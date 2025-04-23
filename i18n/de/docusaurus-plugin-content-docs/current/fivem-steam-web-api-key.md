---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web API Key setup"
description: Information on setting up a Steam Web API key from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Steam Web API Key
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Steam-Web-API-Schlüssel hat wichtige Funktionen für FiveM. Dazu gehört die Authentifizierung durch den API-Schlüssel, wenn Steam als Identifikator von verschiedenen Skripten und/oder Ressourcen verwendet wird.

<InlineVoucher />

## Voraussetzungen

Um einen API-Schlüssel anzufordern, ist ein nicht eingeschränkter Steam-Account erforderlich. Eingeschränkte Steam-Konten haben einen eingeschränkten Zugang zu den Funktionen von Steam, sodass es ohne vollen Zugang nicht möglich ist, einen API-Schlüssel anzufordern. Du musst mindestens **5,00 USD** im Steam-Store ausgeben, um dein Konto und dessen Funktionen freizuschalten.

## Anfordern eines API-Schlüssels

Nachdem du dein Steam-Konto eingerichtet hast, solltest du in der Lage sein, deinen eigenen Steam-Web-API-Schlüssel anzufordern. Dazu musst du dich [auf der Steam-Website] (https://steamcommunity.com/dev/apikey) mit deinem Steam-Kontonamen und Passwort anmelden.

![](https://screensaver01.zap-hosting.com/index.php/s/f4zTKdgnLgKZsY5/preview)

Nach der Anmeldung musst du einen Domainnamen eingeben, die Nutzungsbedingungen für die Steam Web API bestätigen und auf den Button **Registrieren** klicken. Die Domain sollte auf deine **Server IP** *(ohne Port)* eingestellt sein, also gib diese dort an. 

![](https://screensaver01.zap-hosting.com/index.php/s/J5P9Dw2Lqr2ZrfN/preview)

Wenn alles erfolgreich war, solltest du deinen eigenen Steam-Web-API-Schlüssel sehen können, wie unten dargestellt.

![](https://screensaver01.zap-hosting.com/index.php/s/tHW7ZFJfG7CMYET/preview)

## Aktivierung eines API-Schlüssels

Jetzt, wo du deinen Steam Web API Key hast, musst du ihn in deiner Serverkonfigurationsdatei (`server.cfg`) bei deinem FiveM Gameserver ablegen. Du kannst auf deine server.cfg Konfigurationsdatei über das **txAdmin Interface** im **CFG Editor** aufrufen. Suchen eine vorhandene Zeile oder erstellen eine neue, falls sie nicht existiert, und füge folgendes hinzu, wobei du `YOUR_KEY_HERE` durch den von dir erzeugten Schlüssel ersetzt:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## Abschluss

Abschließend kannst du deinen Server neu starten. Dein Steam Web API Key wird geladen, wenn dein Server das nächste Mal vollständig gestartet ist. Du hast erfolgreich einen Steam Web API Key zu deinem FiveM Gameserver hinzugefügt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
