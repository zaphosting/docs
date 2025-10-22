---
id: source-metamod-addadmins
title: Werde Server-Admin
description: "Entdecke, wie du Admin wirst, indem du deine Steam ID bekommst und Berechtigungen für die Serververwaltung einrichtest → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Werde Admin

Um dich als Admin registrieren zu können, ist die Installation von Source- / Metamod unerlässlich.

Außerdem brauchst du die Steam ID deines Steam-Accounts. Es gibt mehrere Wege, diese zu bekommen. Entweder nutzt du eine externe Webseite, die diesen Service anbietet, oder du nutzt die Spielkonsole.

<InlineVoucher />

### SteamID über Webseite

Zuerst musst du das Profil in Steam aufrufen und dann irgendwo im Profil mit der rechten Maustaste klicken. Dort kannst du die Steam-URL des Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Anschließend kannst du die URL auf einer der folgenden Webseiten eingeben:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Danach erhältst du neben den allgemeinen Account-Infos auch die Steam ID. Dort wird die **Steam ID 32** benötigt:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID über Spielkonsole

Starte das Spiel und verbinde dich mit deinem Server. Öffne die Spielkonsole und gib den Befehl 'status' ein, dann bekommst du folgende Ausgabe:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Config

Verbinde dich anschließend wieder per FTP mit dem Server und öffne die admins.cfg Konfigurationsdatei. Diese findest du im Verzeichnis: addons/sourcemod/configs

Die Datei enthält bereits ein Beispiel, wie ein Admin-Eintrag aussehen kann. Du kannst diesen kopieren und dann wie folgt anpassen:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

Der **Spielername** muss **nicht** mit dem Namen des Steam-Accounts übereinstimmen. Er dient nur zur Übersicht in der Config. Der Eintrag 'auth' steht für die Authentifizierung. Hier ist Steam festgelegt, das musst du nicht ändern. Unter `identity` trägst du die SteamID32 des Steam-Accounts ein. Mit `flags` werden die Rechte definiert. Es gibt verschiedene Berechtigungsstufen.

| Berechtigung | Flag | Bedeutung |
| ------------|:----:|:---------:|
| reservation | a | Slot-Reservierung |
| generic | b | Basics (notwendig) |
| kick | c | Spieler kicken |
| ban | d | Spieler bannen |
| unban | e | Spieler entbannen |
| slay | f | Spieler töten |
| changemap | g | Map wechseln |
| cvar | h | Serverwerte ändern |
| config | i | Server-Konfigurationen ausführen |
| chat | j | Erweiterte Chat-Rechte |
| vote | k | Admin-Votes |
| password | l | Server-Passwort setzen |
| rcon | m | RCON-Befehle ausführen |
| cheats | n | sv_cheats im Spiel aktivieren |
| root | z | Vollzugriff |

Je nachdem, welche Rechte vergeben werden sollen, kannst du die jeweiligen Flags hintereinander schreiben. Wenn du z.B. nur Kick-Rechte geben willst, vergibst du die Flags 'b' und 'c'. Für Vollzugriff reicht das Flag `z` allein.

### Nutzung des Admin-Menüs

Mit dem Befehl 'admin' im Chat oder 'sm_admin' in der Konsole kannst du das Menü öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />