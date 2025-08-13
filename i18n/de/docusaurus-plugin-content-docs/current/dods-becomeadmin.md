---
id: dods-becomeadmin
title: "Day of Defeat: Source: Admin werden"
description: "Informationen darüber, wie du auf deinem Day of Defeat: Source Server Admin werden kannst – ZAP-Hosting.com Dokumentation"
sidebar_label: "Admin werden"
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einleitung

Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Administrator hast du die Möglichkeit, alle vom Spiel bereitgestellten Optionen und Funktionen direkt im Spiel zu nutzen. Im Folgenden werden alle Schritte beschrieben, die du durchführen musst, um Administratorrechte für deinen Server zu vergeben.

<InlineVoucher />



## Konfiguration

Um dich als Admin zu registrieren, ist die Installation von SourceMod oder MetaMod zwingend erforderlich. Zusätzlich benötigst du die Steam ID deines Steam Kontos. Es gibt mehrere Möglichkeiten, diese zu ermitteln: Du kannst entweder eine externe Webseite nutzen, die diesen Dienst anbietet, oder sie direkt über die Ingame Konsole abrufen.


Um deine SteamID über eine Webseite zu erhalten, öffne zunächst dein Steam Profil und klicke mit der rechten Maustaste an eine beliebige Stelle der Seite, um die Profil-URL zu kopieren. Füge diese URL anschließend in eine der folgenden Webseiten ein:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Die Seite zeigt dir deine SteamID zusammen mit weiteren Kontoinformationen an. Für die Admin Registrierung benötigst du die **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternativ kannst du deine SteamID auch im Spiel über die Konsole abrufen. Starte dazu das Spiel, verbinde dich mit deinem Server, öffne die Konsole und gib folgenden Befehl ein:

```
status
```

Dadurch werden deine Verbindungsdetails einschließlich deiner SteamID angezeigt. Verbinde dich anschließend per FTP mit dem Server und öffne die Datei `admins.cfg` im folgenden Verzeichnis:

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

Der **Spielername** muss nicht mit deinem Steam Kontonamen übereinstimmen; er dient nur als interne Referenz. Das Feld `auth` legt die Authentifizierungsmethode fest, welche `steam` bleibt. In `identity` trägst du die SteamID32 ein. Die `flags` definieren die dem Admin gewährten Berechtigungen:

| Berechtigung | Flag | Beschreibung                    |
| ------------ | :--: | ------------------------------- |
| reservation  |   a  | Slotreservierung                |
| generic      |   b  | Grundrechte (erforderlich)      |
| kick         |   c  | Spieler kicken                  |
| ban          |   d  | Spieler bannen                  |
| unban        |   e  | Bann aufheben                   |
| slay         |   f  | Spieler schlagen oder töten     |
| changemap    |   g  | Karte wechseln                  |
| cvar         |   h  | Serverwerte ändern              |
| config       |   i  | Serverkonfigurationen ausführen |
| chat         |   j  | Erweiterte Chatrechte           |
| vote         |   k  | Admin-Abstimmungen starten      |


Mehrere Flags können kombiniert werden (z. B. `bc` für Kick-Rechte). Für vollen Zugriff nutze nur `z`. Du kannst das Admin Menü öffnen, indem du im Chat `admin` oder in der Konsole `sm_admin` eingibst.



## Admin Befehle

Im Folgenden findest du eine Liste gängiger Admin Befehle, die du als Admin auf deinem Server verwenden kannst.

| Befehl                  | Beschreibung                                               |
|-------------------------|------------------------------------------------------------|
| `sm_kick <Spieler>`     | Kickt einen Spieler                                       |
| `sm_ban <Spieler> <Zeit> [Grund]` | Bannt einen Spieler für X Minuten (0 = permanent) |
| `sm_unban <SteamID/IP>` | Hebt einen Bann auf                                       |
| `sm_slay <Spieler>`     | Tötet den Spieler sofort                                  |
| `sm_slap <Spieler> [Schaden]` | Verpasst dem Spieler Schaden                        |
| `sm_map <Mapname>`      | Wechselt zur angegebenen Map                              |
| `sm_cvar <Cvar> <Wert>` | Ändert eine Serverkonfiguration zur Laufzeit              |
| `sm_vote <Thema>`       | Startet eine einfache Umfrage                             |
| `sm_restartgame <Sek>`  | Startet das Spiel neu nach Countdown                      |
| `sm_say <Nachricht>`    | Sendet Nachricht in den globalen Chat                     |


## Abschluss

Glückwunsch, wenn du alles befolgt hast, solltest du die Admin Rechte für deinen Server erfolgreich konfiguriert haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
