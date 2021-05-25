---
id: source_gsltoken
title: Source Spiele: Gameserver Login Token verwenden
description: Informationen, wie du ein Login Token für deinen Source Gameserver von ZAP-Hosting.com erstellen und verwenden kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: GSL-Token
---

## Was ist ein GSL Token?

Gameserver Login Tokens (GSLTs) ist ein Verfahren, welches Steam als Schutzmaßnahme implementiert hat. Um Gameserver von gewissen Steam Games (hauptsächlich Source-Games) zu betreiben ist es zwingend notwendig einen Token zu generieren. 



## Was ist der Sinn eines GSL Token?

In der Vergangenheit gab es seitens Valve einige Regeländerungen für das Betreiben eines Gameservers. An diese haben sich nicht alle Betreiber eines Gameserver gehalten. Als Folge wurden dann die IP-Adressen der Gameserver gesperrt, welche sich nicht an die Richtlinien gehalten haben. 



Allerdings war diese Methode nicht effektiv, da diese erstens mit einer neuen IP-Adresse leicht umgangen werden konnte und auch für Gameserver Anbieter auch ein großes Problem war. Denn durch die Sperrung der IP-Adresse sind oftmals dann auch andere Kunden betroffen gewesen. 

Deshalb wurde das Verfahren eingebunden, welches stattdessen nun die Tokens und den dazu verlinkten Steam Account für das weitere betreiben von Gameserver sperrt. 



## Token erstellen

Um einen Gameserver Login Token zu erstellen, muss man auf der Steam Webseite eingeloggt sein. Der Token kann unter hier erstellt werden: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)



![img](https://screensaver01.zap-hosting.com/index.php/s/W3g6NZSJawddYcq/preview)



Dort angelangt wird nach der App ID und einer Memo (beliebiger Name zur Übersicht) verlangt. Die App ID ist vom Spiel abhängig. Im Folgenden findest du wichtigsten App IDs:

|              Spiel               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |



Unter den Einstellungen deines Gameservers kann in den Basiseinstellungen der GSL-Token eingetragen werden.



![img](https://screensaver01.zap-hosting.com/index.php/s/rMeQjwCjgw66qxQ/preview)



Wenn dieser Schritt abgeschlossen ist und im Anschluss der Server neu gestartet wurde, dann wird der Server daraufhin auch in der öffentlichen Server-Liste angezeigt. 



## Häufig gestellte Fragen

**Was sind die Voraussetzungen für einen GSL-Token?**

Der Steam Account darf keine Einschränkung wie einen Community Ban vorweisen. Zudem muss beim Steam Account eine gültige Telefonnummer hinterlegt sein.



**Kann ich einen GSL-Token für mehrere Server verwenden? **

Für jeden einzelnen Gameserver wird ein individueller Token benötigt.



**Wegen was kann mein GSL-Token gebannt werden?**

Gerade bei CS:GO Gameserver gibt es einige Plugins, welche seitens Valve nicht benutzt werden dürfen. Eine offizielle Liste wurde nicht veröffentlicht. Allerdings gehören dazu Plugins, welche Spieler Inventare (Waffenskins), Ranks oder ähnliches verändern. 



**Was passiert, wenn mein GSL-Token gebannt wird?**

Wenn ein Token gesperrt wird, dann wird infolgedessen auch der Account und alle dazugehörigen Tokens gesperrt. Dadurch ist der Gameserver nicht mehr öffentlich zugänglich. Für die Zukunft kann der Account dann auch für keine weiteren Gameserver mehr verwendet werden. Der Steam Account kann zum Spielen dennoch weiterbenutzt werden. Diesbezüglich sind keine weiteren Bestrafungen zu erwarten.
