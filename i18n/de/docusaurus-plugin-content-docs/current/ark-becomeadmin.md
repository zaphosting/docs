---
id: ark-becomeadmin
title: "ARK: Admin werden"
description: "Entdecke, wie du deinen Gameserver mit voller Admin-Kontrolle verwaltest und das Spielerlebnis verbesserst → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel direkt bietet, im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration

Administratorrechte erlauben es dir, Änderungen direkt im Spiel auf deinem Server vorzunehmen, ohne die Config anpassen zu müssen. Um dir selbst oder anderen Spielern Adminrechte zu vergeben, musst du zuerst ein Server-Admin-Passwort festlegen. Dieses Passwort wird in den Einstellungen unseres Webinterfaces definiert.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Nachdem das Passwort festgelegt wurde, muss der Server neu gestartet werden. Danach kannst du dich mit deinem Server verbinden und dich über die Ingame-Konsole mit folgendem Befehl und deinem Server-Admin-Passwort als Admin einloggen:

```
enableCheats password
```

Anschließend kannst du alle Serverbefehle als Admin ausführen. Im Folgenden findest du eine Übersicht der am häufigsten genutzten Befehle.

## Häufig genutzte Befehle

| Befehl                                         | Beschreibung                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Aktiviert / deaktiviert das Cheat-Menü                        |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Spieler zur Whitelist hinzufügen                              |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Spieler von der Whitelist entfernen                           |
| admincheat SetMessageOfTheDay Nachricht        | Definiert die Message of the Day (MOTD). Diese erscheint, wenn sich ein Spieler mit dem Gameserver verbindet |
| admincheat broadcast Nachricht                 | Sendet eine Nachricht an alle Spieler auf dem Server         |
| admincheat god                                 | Aktiviert Unsterblichkeit für den eigenen Spieler            |
| admincheat fly                                 | Aktiviert Fliegen für den eigenen Spieler                     |
| admincheat walk                                | Deaktiviert Fliegen für den eigenen Spieler                   |
| admincheat teleport                            | Teleportiert deinen Spieler in die Richtung, in die du gerade schaust |
| admincheat slomo                               | Ändert sowohl die Geschwindigkeit des Servers als auch die Bewegungsgeschwindigkeit aller Spieler |
| admincheat playersonly                         | Stoppt alle Kreaturenbewegungen und verhindert Crafting      |
| admincheat ghost                               | Aktiviert Noclip für den eigenen Spieler                      |
| admincheat forcetame                           | Ermöglicht sofortiges Zähmen von Dinos und Reiten ohne Sattel |
| admincheat listplayers                         | Listet alle Spieler inklusive SteamId64 auf                  |
| admincheat banplayer SteamId64                 | Bannt Spieler über die SteamID64                              |
| admincheat unbanplayer SteamId64               | Entbannt Spieler über die SteamID64                           |
| admincheat setplayerpos x y z                  | Teleportiert den eigenen Spieler an die gewünschte Position  |
| admincheat saveworld                           | Speichert den aktuellen Zustand der Welt                      |
| admincheat addexperience Menge                 | Fügt dem Spieler Erfahrung hinzu                              |
| admincheat settimeofday Zeit                   | Ändert die Tageszeit auf dem Gameserver. Beispiel: "admincheat settimeofday 12:00" |

## Abschluss

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />