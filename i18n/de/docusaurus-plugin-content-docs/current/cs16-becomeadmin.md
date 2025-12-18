---
id: cs16-becomeadmin
title: "CS 1.6: Admin auf deinem eigenen Server werden"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und bessere Ingame-Verwaltung → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Administration mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration
Das Hinzufügen eines Admins erfolgt über die **users.ini**-Konfigurationsdatei. Um Admin werden zu können und diese Dateien zu finden, musst du zuerst **AMXmodX** und **Metamod** installieren. Falls du das noch nicht gemacht hast, lohnt sich ein Blick in die folgende Anleitung: [Plugins installieren](cs16-plugins.md)

Um die **users.ini**-Datei zu bearbeiten, musst du dich per FTP mit dem Server verbinden. Dort navigierst du in das Verzeichnis ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Anschließend öffnest du die Datei mit einem Texteditor und passt sie an.

<InlineVoucher />

```
...
; Beispiele für Admin-Accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "Mein Name" "mein_passwort" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

In der Konfig muss der Eintrag ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` angepasst werden. Früher erfolgte die Authentifizierung nur über Name und Passwort. Heutzutage läuft das nur noch über die SteamID64. Deine SteamID64 findest du, indem du dein Steam-Profil öffnest und irgendwo mit der rechten Maustaste draufklickst. Dort wählst du **Steam-URL kopieren** aus.

Anschließend gibst du die URL auf einer der folgenden Seiten ein:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Dort bekommst du allgemeine Account-Infos sowie die Steam ID angezeigt. Wir brauchen hier nur die SteamID64. Die Steam ID muss dann im Client-Eintrag unter **SteamID** eingetragen werden. Das Ergebnis sieht dann so aus:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

Die Zeile enthält folgende Infos:

1. Name/SteamID – Eindeutige ID des Spielers.  
2. Passwort – nicht vorhanden bei Steam-Authentifizierung  
3. Berechtigungslevel  
4. Verbindungsflags – Die Flags steuern, wie AMX Mod X versucht, einen verbindenden Admin zu autorisieren.

In diesem Fall wird kein Passwort benötigt, da die Authentifizierung über Steam läuft. Deshalb setzen wir ``ce`` statt ``en``. Unten findest du eine Übersicht aller Berechtigungslevel und Verbindungsflags:

**Berechtigungslevel**

| Berechtigungslevel | Beschreibung                                                  |
| ------------------ | ------------------------------------------------------------- |
| a                  | Immunität (kann nicht gekickt/gebannt/getötet/geschlagen werden und ist vor anderen Befehlen geschützt) |
| b                  | Reservierung (kann auf reservierte Slots joinen)              |
| c                  | amx_kick Befehl                                               |
| d                  | amx_ban und amx_unban Befehle                                 |
| e                  | amx_slay und amx_slap Befehle                                 |
| f                  | amx_map Befehl                                                |
| g                  | amx_cvar Befehl (nicht alle cvars sind verfügbar)             |
| h                  | amx_cfg Befehl                                               |
| i                  | amx_chat und andere Chat-Befehle                              |
| j                  | amx_vote und andere Vote-Befehle                              |
| k                  | Zugriff auf sv_password cvar (über amx_cvar Befehl)           |
| l                  | Zugriff auf amx_rcon Befehl und rcon_password cvar (über amx_cvar Befehl) |
| m                  | Custom Level A (für zusätzliche Plugins)                      |
| n                  | Custom Level B (für zusätzliche Plugins)                      |
| o                  | Custom Level C (für zusätzliche Plugins)                      |
| p                  | Custom Level D (für zusätzliche Plugins)                      |
| q                  | Custom Level E (für zusätzliche Plugins)                      |
| r                  | Custom Level F (für zusätzliche Plugins)                      |
| s                  | Custom Level G (für zusätzliche Plugins)                      |
| t                  | Custom Level H (für zusätzliche Plugins)                      |
| u                  | Menüzugriff                                                  |
| z                  | User (kein Admin)                                             |

**Verbindungsflags**

| Flag | Beschreibung                                        |
| -----| -------------------------------------------------- |
| a    | Spieler bei falschem Passwort trennen              |
| b    | Clan-Tag                                           |
| c    | Dies ist SteamID/WONID                             |
| d    | Dies ist IP                                        |
| e    | Passwort wird nicht geprüft (nur Name/IP/SteamID nötig) |

## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />