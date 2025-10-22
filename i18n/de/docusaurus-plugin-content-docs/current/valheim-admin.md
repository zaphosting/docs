---
id: valheim-admin
title: "Valheim: Server Admin Befehle & Cheats"
description: "Entdecke, wie du Admin-Rechte vergibst, um volle Kontrolle über deinen Server zu haben und Spieler effektiv zu managen in Valheim → Jetzt mehr erfahren"
sidebar_label: Admin Befehle & Cheats
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Admin-Rechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

### Konfiguration
Um dich selbst als Admin hinzuzufügen, brauchst du zuerst deine SteamID64. Du kannst dafür ein Tool wie den [Steam ID Finder](https://steamidfinder.com/) verwenden.

Dort gibst du deine Steam-URL ein:

![](https://screensaver01.zap-hosting.com/index.php/s/e8H8Y4P9ojW9sD2/preview)

Dann klickst du auf `Find Steam ID`.

Jetzt solltest du dein Steam-Profil sehen können, hier kopierst du deine "Steam64ID (Dec)".

Anschließend öffnest du das Webinterface deines Servers und gehst auf die Einstellungen. Dort findest du die Option "Admins", wo du deine Steam ID hinzufügen kannst:

![](https://screensaver01.zap-hosting.com/index.php/s/aJkGRMcmWrnZyiM/preview)

Nachdem du deine Steam ID hinzugefügt hast, speicherst du die Einstellungen und startest den Server neu.

## Zugriff auf die Konsole

Die Konsole in Valheim erreichst du im Spiel, indem du "F5" drückst. Dort kannst du alle Admin-Befehle eingeben.

### Admin Befehle

|  Befehl   |           Argumente          |                  Wirkung               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   kick     |        Name/PlayerID/IP      |     Kickt den angegebenen Spieler     |
|   ban      |        Name/PlayerID/IP      |     Bannt den angegebenen Spieler     |
|   unban    |        PlayerID/IP           |     Entbannt den angegebenen Spieler  |
|   banned   |           Keine              |    Zeigt alle gebannten Spieler       |

<InlineVoucher />