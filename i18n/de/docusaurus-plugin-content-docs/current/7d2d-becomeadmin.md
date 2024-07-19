---
id: 7d2d-becomeadmin
title: "7 Days to Die: 7 Days to Die Admin werden - Gameserver von ZAP-Hosting"
description: Anleitung, wie du dich zum Admin für 7 Days to Die Gameserver machst - ZAP-Hosting.com Dokumentation 
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfiguration

Das Hinzufügen eines Admins erfolgt über die **serveradmin.xml** Config, welche du im Webinterface unter Configs findest.

![](https://screensaver01.zap-hosting.com/index.php/s/QN2kKnt9YGDgXwE/preview)

Deine SteamID64 kannst du ausfindig machen, indem du zunächst dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort klickst du dann auf **Steam URL kopieren**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)



Im Anschluss rufst du dann eine der folgenden Seiten auf:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/



Dadurch erhältst du dort sowohl allgemeine Informationen als auch die Steam ID von deinem Account. In dem Fall benötigen wir nur die SteamID64. Diese wird dann unter ``<admins>...</admins>`` eingetragen. Das sieht dann folgendermaßen aus:

```
  <users>
    <user steamID="76561198021925107" name="Hint on who this user is" permission_level="0" />
  </users>
```

Das Spiel bietet bei den Administrator-Berechtigungen die Möglichkeit, unterschiedliche Berechtigungsstufen zu definieren. Somit ist es also möglich, verschiedene Administrator Gruppen mit unterschiedlichen Berechtigungen zu definieren. Das Ganze wird über die ``permission_level`` Option definiert. Diese kann von 0 bis 100 eingestellt werden. Je nachdem, wie diese konfiguriert wurde, haben die Administratoren dann Zugriff auf die zugewiesenen Berechtigungen. Wenn das erledigt wurde, dann wurden die Administrator-Berechtigungen erfolgreich zugewiesen. 



### Berechtigungen

Unter ``permissions`` können für alle Administrator-Befehle die Berechtigungen bestimmt werden. Dafür muss dann ebenfalls wie beim Hinzufügen von Administratoren das ``permission_level`` angepasst werden. Das sieht dann folgendermaßen aus:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Eine Berechtigungsstufe besteht aus einem Wert zwischen 0 und 1000 und legt fest, welche Berechtigungen ein Spieler hat. 1000 ist die niedrigste (keine Berechtigungen) und 0 die höchste (volle Administrator-Berechtigungen). Je nachdem, wie die Zugriffsrechte diesbezüglich sein sollen, muss das dann entsprechend angepasst werden. 
