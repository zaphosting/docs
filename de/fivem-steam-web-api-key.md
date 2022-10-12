---
id: fivem-steam-web-api-key
title: FiveM: Steam Web API Key einrichten
description: Anleitung, wie du bei deinem FiveM Server einen Steam Web API Key einrichtest - ZAP-Hosting.com Dokumentationen
sidebar_label: Steam Web API Key
---

## Voraussetzungen

Für FiveM hat ein Steam Web API Key wichtige nutzen. Dazu gehört die Authentifizerung durch den API Key, wenn Steam von verschiedenen Skripten und/oder Ressourcen als Identifier benutzt wird.
Damit ein API Key angefordert werden kann, wird ein nicht-limitierter Steam Account benötigt. Limitierte Steam Accounts haben nur beschränkten Zugriff auf die Funktionen von Steam, so ist es ohne vollen Zugriff auch nicht möglich einen API Key anzufordnern. Um deinen Account und dessen Funktionen freizuschalten, müssen mindestens **5,00 USD** im Steam-Shop ausgegeben worden sein.


## API Key anfordern

Jetzt, wo du einen Steam Account besitzt und bereits mehr als **5,00 USD** im Shop ausgegeben hast, solltest du in der Lage sein, deinen eigenen Steam-API-Key anzufordern. Melde dich dazu [hier](https://steamcommunity.com/dev/apikey) mit deinem Steam-Kontonamen und Passwort an.

![image](https://user-images.githubusercontent.com/115637675/195389732-939c0a8e-f011-4242-8048-97bb51122a58.png)

Nun musst du einen Domain Namen eingeben, die Nutzungsbedingungen für die Steam-API bestätigen und auf *"Registrieren"* klicken.
Bei dem Domain Namen handelt es sich um deine **Server IP** *(ohne Port)*, trage diese also dort ein.

![image](https://user-images.githubusercontent.com/115637675/195401735-0615a6e3-ea01-4a77-97ce-f91d3d753bee.png)

Wenn alles gut gegangen ist, solltest du, wie unten gezeigt, deinen eigenen Steam Web API Key sehen.

![image](https://user-images.githubusercontent.com/115637675/195397282-c79aff45-2e38-49f9-bf1a-3efd563b3294.png)


## API Key einfügen

Da wir nun unseren API Key haben, müssen wir diesen nur noch in die **server.cfg** einfügen.
Öffne dazu die *server.cfg* über **Configs**, und füge den Key bei dem Eintrag **set steam_webApiKey ""** ein.

![image](https://user-images.githubusercontent.com/115637675/195388724-bdbf700a-a636-45d2-9a21-92b1e2af304a.png)

Sollte dieser Eintrag nicht bei dir nicht vorhanden sein, kannst du diesen ganz leicht im Nachhinein einfügen:
```
set steam_webApiKey "KEYS"
```

Starte deinen Server im Anschluss einmal neu, und der Key wird auch schon aktiv benutzt.
