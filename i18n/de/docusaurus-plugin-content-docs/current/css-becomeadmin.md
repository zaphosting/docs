---
id: css-becomeadmin
title: "Counter-Strike: Source: Admin werden"
description: "Entdecke, wie du Administratorrechte vergibst, um volle Kontrolle über deinen Server zu haben und Spiel-Funktionen effektiv zu managen → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Admin-Rechten für deinen Server durchführen musst, werden im Folgenden beschrieben.

<InlineVoucher />



## Konfiguration

Um dich als Admin zu registrieren, ist die Installation von SourceMod oder MetaMod Pflicht. Außerdem benötigst du die Steam ID deines Steam-Accounts. Es gibt verschiedene Wege, diese zu bekommen: Du kannst entweder eine externe Webseite nutzen, die diesen Service anbietet, oder sie direkt über die Ingame-Konsole abrufen.


Um deine SteamID über eine Webseite zu erhalten, öffne zuerst dein Steam-Profil und klicke mit der rechten Maustaste irgendwo auf die Seite, um die Profil-URL zu kopieren. Füge diese URL anschließend auf einer der folgenden Seiten ein:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Die Seite zeigt dir deine SteamID sowie weitere Account-Infos an. Für die Admin-Registrierung brauchst du die **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternativ kannst du deine SteamID auch ingame über die Konsole abrufen. Starte das Spiel, verbinde dich mit deinem Server, öffne die Konsole und gib den Befehl ein:

```
status
```

Das zeigt dir deine Verbindungsdetails inklusive deiner SteamID an. Verbinde dich danach per FTP mit dem Server und öffne die Datei `admins.cfg`, die sich befindet unter:

```
.../addons/sourcemod/configs/
```

Die Datei enthält einen Beispiel-Eintrag, den du kopieren und anpassen kannst:

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

Der **Spielername** muss nicht mit deinem Steam-Accountnamen übereinstimmen; er dient nur zur internen Referenz. Das Feld `auth` definiert die Authentifizierungsmethode, die auf `steam` bleibt. In `identity` trägst du die SteamID32 ein. Die `flags` legen fest, welche Rechte der Admin bekommt:

| Berechtigung | Flag | Beschreibung           |
|--------------|:----:|-----------------------|
| reservation  | a    | Slot-Reservierung     |
| generic      | b    | Basisrechte (Pflicht) |
| kick         | c    | Spieler kicken        |
| ban          | d    | Spieler bannen        |
| unban        | e    | Bann aufheben         |
| slay         | f    | Spieler töten/schlagen|
| changemap    | g    | Map wechseln          |
| cvar         | h    | Serverwerte ändern    |
| config       | i    | Serverconfigs ausführen|
| chat         | j    | Erweiterte Chatrechte |
| vote         | k    | Admin-Votes starten   |
| password     | l    | Serverpasswort setzen |
| rcon         | m    | RCON-Befehle ausführen|
| cheats       | n    | `sv_cheats` aktivieren|
| root         | z    | Vollzugriff           |

Mehrere Flags können kombiniert werden (z.B. `bc` für Kick-Rechte). Für Vollzugriff nutzt du nur `z`. Das Admin-Menü kannst du öffnen, indem du im Chat `admin` oder in der Konsole `sm_admin` eingibst.



## Admin-Befehle

Hier findest du eine Liste gängiger Admin-Befehle, die du als Admin auf deinem Server nutzen kannst.

| Befehl                           | Beschreibung                                  |
| -------------------------------- | --------------------------------------------- |
| `sm_kick <player>`                | Kickt einen Spieler                           |
| `sm_ban <player> <time> [reason]` | Bannt einen Spieler für X Minuten (0 = permanent) |
| `sm_unban <SteamID/IP>`           | Hebt einen Bann auf                           |
| `sm_slay <player>`                | Tötet den Spieler sofort                      |
| `sm_slap <player> [damage]`       | Schlägt den Spieler (optional mit Schaden)   |
| `sm_map <mapname>`                | Wechselt zur angegebenen Map                  |
| `sm_cvar <cvar> <value>`          | Setzt eine Server-Konfigurationsvariable zur Laufzeit |
| `sm_vote <topic>`                 | Startet eine einfache Abstimmung              |
| `sm_restartgame <seconds>`        | Startet das Spiel nach Countdown neu          |
| `sm_say <message>`                | Sendet eine Nachricht in den globalen Chat   |



## Fazit

Glückwunsch, wenn du alles befolgt hast, solltest du die Admin-Rechte erfolgreich für deinen Server konfiguriert haben. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />