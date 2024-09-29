---
id: source-metamod-addadmins
title: Source Spiele Server-Admin werden
description: Informationen, wie du dich zum Admin auf deinem Source Gameserver von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Admin werden

Damit man sich als Admin eintragen kann, ist die Installation von Source- / Metamod essenziell.

Des Weiteren benötigt man die Steam ID des Steam Accounts. Es gibt mehrere Möglichkeiten, um an diese heranzukommen. Entweder man benutzt eine externe Webseite, die so einen Dienst anbietet oder die Spiel-Konsole dafür.

<InlineVoucher />

### SteamID via Webseite

Zunächst einmal muss in Steam das Profil aufgerufen und dort dann an einer beliebigen Stelle Rechtsklick klicken werden. Dort kann man dann die Steam URL des Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/fyoCMabN6w7DzbH/preview)

Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/DTJa9cHQJQNCBay/preview)

Im Anschluss erhält man neben den allgemeinen Account Informationen auch die Steam ID. Dort wird die **Steam ID 32** benötigt:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID via Spiel-Konsole

Starte das Spiel und verbinde dich mit deinem Server. Durch das Öffnen der Spiel-Konsole und der Verwendung des `status` Befehls dort erhält man folgende Ausgabe:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os      :  Linux
type    :  community dedicated
map     : de_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
#  2 1 "Spielername" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Config

Als Nächstes verbindet man sich wieder mit dem Server per FTP und ruft die admins.cfg Konfigurationsdatei auf. Diese findet man unter dem folgenden Verzeichnis: addons/sourcemod/configs

In der Datei befindet sich bereits ein Beispiel, wie ein Admin Eintrag zum Beispiel aussehen kann. Diesen kann man so kopieren und dann wie folgt eintragen:

```
Admins
{
	"Spielername"
	{
		"auth"			"steam"
		"identity"		"STEAM_0:1:XXXXX"
		"flags"			"abcdef"
	}
}
```

Der **Spielername** muss **nicht** mit dem Namen des Steam Accounts übereinstimmen. Er dient nur den Übersichtszwecken innerhalb der Config. Der Eintrag `auth` steht für die Authentifizierung. In dem Fall ist Steam festgelegt, weshalb ihr das auch nicht ändern müsst. Unter `identity` wird die SteamID32 des Steam Accounts angeben. Mit `flags` sind die Rechte gemeint. Hierbei gibt es verschiedene Stufen von Rechten. 


| Berechtigung | Flag  | Nutzung |
| ------------|:----:|:--------:|
| reservation | a | Slot reservieren |
| generic | b |  Basics (notwendig)  |
| kick | c |  Spieler kicken  |
| ban | d |  Spieler bannen   |
| unban | e |   Spieler entbannen  |
| slay | f |  Spieler schlagen oder töten   |
| changemap | g |   Wechseln von Maps  |
| cvar | h |   Verändern von Server-Werten  |
| config | i |  Ausführen von Server-Configs   |
| chat | j |   Erweiterte Chat Rechte  |
| vote | k |  Admin Abstimmungen starten   |
| password | l |  Server Passwort festlegen   |
| rcon | m |  RCON Befehle ausführen   |
| cheats | n |  sv_cheats vom Spiel aktivieren   |
| root | z |  Voller Zugriff   |


Je nachdem, welche Rechte vergeben werden sollen, kann man die jeweiligen Flags nacheinander schreiben. Wenn man zum Beispiel nur die Rechte zum Kicken geben möchte, dann würde man die Flags `b` und `c` zuweisen. Wenn man aber vollen Zugang zuweisen möchte, dann reicht lediglich das Flag `z`

### Verwendung des Admin-Menüs 

Mit dem Befehl `!admin` im Chat oder `sm_admin` in der Konsole kann das Menü aufgerufen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/o6WyMxb4NiEfNim/preview)
