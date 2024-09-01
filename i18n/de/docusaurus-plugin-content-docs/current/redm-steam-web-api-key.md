---
id: redm-steam-web-api-key
title: "RedM: Einrichtung des Steam-Web-API-Key"
description: Informationen zum Einrichten eines Steam-Web-API-Schlüssels von ZAP-Hosting - ZAP-Hosting.com-Dokumentation
sidebar_label: Steam Web API Key
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Steam-Web-API-Schlüssel hat wichtige Funktionen für RedM. Dazu gehört die Authentifizierung durch den API-Schlüssel, wenn Steam als Identifikator von verschiedenen Skripten und/oder Ressourcen verwendet wird.

<InlineVoucher />

## Voraussetzungen

Um einen API-Schlüssel anzufordern, ist ein nicht eingeschränkter Steam-Account erforderlich. Eingeschränkte Steam-Konten haben einen eingeschränkten Zugang zu den Funktionen von Steam, sodass es ohne vollen Zugang nicht möglich ist, einen API-Schlüssel anzufordern. Du musst mindestens **5,00 USD** im Steam-Store ausgeben, um dein Konto und dessen Funktionen freizuschalten.



## Anfordern eines API-Schlüssels

Nachdem du dein Steam-Konto eingerichtet hast, solltest du in der Lage sein, deinen eigenen Steam-Web-API-Schlüssel anzufordern. Dazu musst du dich [auf der Steam-Website] (https://steamcommunity.com/dev/apikey) mit deinem Steam-Kontonamen und Passwort anmelden.

![image](https://screensaver01.zap-hosting.com/index.php/s/4sPfaj7yT4SgWwM/preview)

Nach der Anmeldung musst du einen Domainnamen eingeben, die Nutzungsbedingungen für die Steam Web API bestätigen und auf die Schaltfläche **Registrieren** klicken. Die Domain sollte auf deine **Server IP** *(ohne Port)* eingestellt sein, also gib diese dort an. 

![image](https://screensaver01.zap-hosting.com/index.php/s/a5oNcgBGiTYdWT3/preview)

Wenn alles erfolgreich war, solltest du deinen eigenen Steam-Web-API-Schlüssel sehen können, wie unten dargestellt.

![image](https://screensaver01.zap-hosting.com/index.php/s/i9ewyEdXwp6iHWt/preview)

## Aktivierung eines API-Schlüssels

Jetzt, wo du deinen Steam Web API Key hast, musst du ihn in deiner Serverkonfigurationsdatei (`server.cfg`) bei deinem FiveM Gameserver ablegen. Du kannst auf deine server.cfg Konfigurationsdatei entweder per FTP (siehe oben) oder über den Abschnitt **Configs** im Webinterface deines Gameservers zugreifen. 

![image](https://github.com/zaphosting/docs/assets/42719082/e3c7392c-7246-4133-be2e-383dac4b0327)

Suchen eine vorhandene Zeile oder erstellen eine neue, falls sie nicht existiert, und füge folgendes hinzu, wobei du `YOUR_KEY_HERE` durch den von dir erzeugten Schlüssel ersetzt:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

Abschließend kannst du deinen Server neu starten. Dein Steam Web API Key wird geladen, wenn dein Server das nächste Mal vollständig gestartet ist. Du hast erfolgreich einen Steam Web API Key zu deinem FiveM Gameserver hinzugefügt!
