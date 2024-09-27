---
id: valheim-admin
title: "Valheim: Server Admin Befehle title: Server Admin Befehle & Cheats"
description: Informationen zu Admin Befehlen und Cheats für deinen Valheim-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Admin Befehls & Cheats
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. 
<InlineVoucher />

## Als Admin hinzufügen

### Herausfinden der SteamID
Um sich selbst als Admin hinzuzufügen, muss zunächst die SteamID herausgefunden. Dazu kann der [Steam ID Finder](https://steamidfinder.com/) verwendet werden.


Hier gibt man seine Steam-URL ein:

![](https://screensaver01.zap-hosting.com/index.php/s/8JSZYgMH637oJKj/preview)

Dann drücken wir auf `Find Steam ID`.

Jetzt sollten wir unser Steam-Profil sehen können, hier kopieren wir unsere "Steam64ID (Dec)".


### In den Einstellungen eintragen

Nun öffnen wir unser Server-Webinterface und öffnen die Einstellungen, hier sehen wir eine "Admins"-Option, wo wir unsere SteamID hinzufügen können:

![](https://screensaver01.zap-hosting.com/index.php/s/DBZrdtf9NttzQ9a/preview)


Nachdem wir unsere SteamID hinzugefügt haben, speichern wir die Einstellungen und starten dann den Server neu.

## Zugriff auf die Konsole

Die Konsole in Valheim kann durch Drücken von "F5" während des Spiels aufgerufen werden, dort können Admin-Befehle eingegeben werden


### Admin Befehle

|  Befehl   |           Arguments          |                  Effect               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   kick     |        Name/PlayerID/IP      |     Kickt den angegebenen Spieler     |
|   ban      |        Name/PlayerID/IP      |     Bannt den angegebenen Spieler     |
|   unban    |        PlayerID/IP           |     Entbannt den angegebenen Spieler  |
|   banned   |           None               |  Zeigt alle gebannten Spieler an      |
