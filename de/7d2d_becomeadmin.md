---
id: 7d2d_becomeadmin
title: 7 Days to Die Admin werden - Gameserver von ZAP-Hosting
description: Anleitung, wie du dich zum Admin für 7 Days to Die Gameserver machst - ZAP-Hosting.com Dokumentationen 
sidebar_label: Admin werden

---



## Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live-Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Das Hinzufügen eines Admins erfolgt über die **serveradmin.xml** Config, welche du im Webinterface unter Configs findest.

![img](https://screensaver01.zap-hosting.com/index.php/s/zDoFi6YF65s3Me4/preview)

Deine SteamID64 kannst du ausfindig machen, indem du zunächst dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort klickst du dann auf **Steam URL kopieren**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/e9Eb7EDtW7BPSZo/preview)



Im Anschluss rufst du dann eine der folgenden Seiten auf:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/



Dadurch erhältst du dort sowohl allgemeine Informationen als auch die Steam ID von deinem Account. In dem Fall benötigen wir nur die SteamID64. Diese wird dann unter ``<admins>...</admins>`` eingetragen. Das sieht dann folgendermaßen aus:

```
<admins>
	<admin steamID="DeineSTEAM64ID" permission_level="0" />
</admins>
```

Das Spiel bietet bei den Administrator-Berechtigungen die Möglichkeit unterschiedliche Berechtigungsstufen zu definieren. Somit ist es also möglich verschiedene Administrator Gruppen mit unterschiedlichen Berechtigungen zu definieren. Das Ganze wird über die ``permission_level`` Option definiert. Diese kann von 0 bis 100 eingestellt werden. Je nachdem wie diese konfiguriert wurde haben die Administratoren dann Zugriff auf die zugewiesenen Berechtigungen. Wenn das erledigt wurde, dann wurden die Administrator-Berechtigungen erfolgreich zugewiesen. 



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

Eine Berechtigungsstufe besteht aus einem Wert zwischen 0 und 1000 und legt fest, welche Berechtigungen ein Spieler hat. 1000 ist die niedrigste (keine Berechtigungen) und 0 die höchste (volle Administrator-Berechtigungen). Je nachdem wie die Zugriffsrechte diesbezüglich sein sollen muss das dann entsprechend angepasst werden. 
