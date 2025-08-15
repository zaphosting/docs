---
id: ark-becomeadmin
title: "ARK: Admin werden"
description: Informationen, wie du Admin auf deinem ARK-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfiguration

Damit man sich selbst oder auch anderen Spielern Administrator-Rechte zuweisen kann, muss als erstes ein Serveradmin Passwort definiert werden. Das definieren des Passworts erfolgt über die Einstellungen in unserem Interface:

![](https://screensaver01.zap-hosting.com/index.php/s/mJrDsH34G2iCq3c/preview)

Nach dem definieren des Passworts muss der Server neu gestartet werden. Im Anschluss kannst du dich mit deinem Server verbinden und über die Konsole im Spiel mit dem folgenden Befehl und deinem Server Admin Passwort als Admin einloggen:

```
enableCheats password
```



Danach kannst du sämtliche Server-Befehle als Admin ausführen. Im folgenden findest du eine Übersicht von den am häufigsten benutzten Befehle. 



## Häufig verwendete Befehle

| Befehl                                         | Beschreibung                                                 |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Aktiviert / deaktiviert das Cheat-Menu                       |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Spieler zur Whitelist hinzufügen                             |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Spieler von der Whitelist entfernen                          |
| admincheat SetMessageOfTheDay Nachricht        | Bestimmt die Nachricht des Tages (MOTD). Wenn ein Spieler sich mit dem Server des Spiels verbindet, erscheint diese Nachricht |
| admincheat broadcast Nachricht                 | Verschickt eine Nachricht an alle auf dem Server befindenden Spieler |
| admincheat god                                 | Aktiviert die Unsterblichkeit für den eigenen Spieler        |
| admincheat fly                                 | Aktiviert das Fliegen für den eigenen Spieler                |
| admincheat walk                                | Deaktiviert das Fliegen für den eigenen Spieler              |
| admincheat teleport                            | Teleportiert den eigenen Spieler in die Richtung in die er gerade schaut |
| admincheat slomo                               | Verändert sowohl die Geschwindigkeit des Servers als auch die Bewegungsgeschwindigkeit aller Spieler |
| admincheat playersonly                         | Hiermit werden alle Bewegungen der Kreatur angehalten und die Herstellung von Crafting gestoppt/verhindert |
| admincheat ghost                               | Aktiviert Noclip für den eigenen Spieler                     |
| admincheat forcetame                           | Ermöglicht das sofortige zähmen von Dinosaurier und reiten ohne Sattel |
| admincheat listplayers                         | Listet alle Spieler mitsamt der SteamId64 auf                |
| admincheat banplayer SteamId64                 | Spieler anhand der SteamID64 bannen                          |
| admincheat unbanplayer SteamId64               | Spieler anhand der SteamID64 entbannen                       |
| admincheat setplayerpos x y z                  | Teleportiert den eigenen Spieler zu gewünschten Position     |
| admincheat saveworld                           | Speichert den aktuellen Stand der Welt                       |
| admincheat addexperience Menge                 | Fügt dem Spieler Erfahrung hinzu                             |
| admincheat settimeofday Zeit                   | Ändert die Tageszeit des Gameservers. Beispiel: "admincheat settimeofday 12:00" |

## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
