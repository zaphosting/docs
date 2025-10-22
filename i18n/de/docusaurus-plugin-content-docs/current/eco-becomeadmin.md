---
id: eco-becomeadmin
title: "ECO: Admin werden"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und effizientes Spielmanagement → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration
Das Hinzufügen eines Admins erfolgt über die **Users.eco** Config, die du im Interface unter Configs findest.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



Um einen neuen Spieler als Admin hinzuzufügen, muss der folgende Abschnitt in der **Users.eco** Config angepasst werden:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



Der Spieler, der Admin werden soll, wird im Feld **values** eingetragen. Bei mehreren Admins werden diese durch Kommas getrennt hinzugefügt. Zur Identifikation des Spielers wird die SteamID64 verwendet. 

Diese findest du, indem du dein Steam-Profil aufrufst und dann mit der rechten Maustaste irgendwo auf das Profil klickst. Dort kannst du die Steam-URL deines Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



Anschließend muss die URL auf einer der folgenden Webseiten eingegeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



Dort erhältst du allgemeine Account-Informationen sowie die Steam ID. Diese wird dann im Feld **values** eingetragen. Das Ergebnis sieht dann so aus:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



Nach einem Server-Neustart haben die dort eingetragenen Spieler Administratorrechte. Wenn du weitere Admins hinzufügen möchtest, musst du das nicht immer über die Config machen. Stattdessen kannst du das auch direkt im Spiel mit folgendem Befehl erledigen:

```
/admin [player]
```



Im Folgenden findest du eine Übersicht der häufig genutzten Admin-Befehle, die du als Admin ausführen kannst.



## Häufig genutzte Befehle

|              Befehl               |                      Beschreibung                       |
| :------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Spawnt alle Blöcke                   |
|          /allconstructed           |         Spawnt alle vom Spieler errichtbaren Blöcke    |
|             /allplants             |                Spawnt alle Pflanzenblöcke              |
|             /allskills             |                   Schaltet alle Skills frei            |
|            /allterrain             |               Spawnt alle abbaubaren Blöcke            |
|          /allworldobjects          |                Spawnt alle Weltobjekte                 |
|      /kick [player],(reason)       |                      Kickt einen Spieler               |
|       /ban [player],(reason)       |                      Bannt einen Spieler               |
|     /give [itemname],(amount)      |                 Gibt dir selbst einen Gegenstand       |
| /giveskillpoints [player],(amount) |           Vergibt Skillpunkte an einen anderen Spieler |
|                /fly                |                    Schaltet den Flugmodus an/aus       |
|         /move [x],[y],[z]          | Bewegt dich zu Position x, y, z; xyz sind ganze Zahlen |
|       /removeadmin [player]        |               Entfernt einen Spieler als Admin         |

Weitere Befehle findest du in der offiziellen [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).

## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂

<InlineVoucher />