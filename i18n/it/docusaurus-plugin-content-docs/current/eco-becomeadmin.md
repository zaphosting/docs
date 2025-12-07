---
id: eco-becomeadmin
title: "ECO: Admin werden"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und effizientes Game-Management → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen des Spiels direkt im Spiel nutzen. Alle Schritte, die du brauchst, um Administratorrechte für deinen Server zu vergeben, werden dir hier erklärt.  
<InlineVoucher />

## Konfiguration
Einen Admin hinzuzufügen erfolgt über die **Users.eco** Config, die du im Interface unter Configs findest.

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



Der Spieler, der Admin werden soll, wird im Feld **values** eingetragen. Bei mehreren Admins werden diese durch Kommas getrennt. Zur Identifikation des Spielers wird die SteamID64 verwendet.

Du findest sie, indem du dein Steam-Profil aufrufst und dann irgendwo im Profil rechtsklickst. Dort kannst du die Steam-URL deines Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



Anschließend gibst du die URL auf einer der folgenden Seiten ein:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



Dort bekommst du allgemeine Account-Infos sowie die Steam ID angezeigt. Diese trägst du dann bei **values** ein. Das Ergebnis sieht dann so aus:

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



Nach einem Server-Neustart haben die eingetragenen Spieler Administratorrechte. Wenn du weitere Admins hinzufügen willst, musst du das nicht immer über die Config machen. Du kannst das auch direkt im Spiel mit folgendem Befehl:

```
/admin [player]
```



Hier findest du eine Übersicht der gängigsten Admin-Befehle, die du als Admin ausführen kannst.



## Häufig genutzte Befehle

|              Befehl               |                      Beschreibung                       |
| :------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Spawnt alle Blöcke                    |
|          /allconstructed           |         Spawnt alle vom Spieler baubaren Blöcke         |
|             /allplants             |                Spawnt alle Pflanzenblöcke               |
|             /allskills             |                   Schaltet alle Skills frei             |
|            /allterrain             |               Spawnt alle abbaubaren Blöcke             |
|          /allworldobjects          |                Spawnt alle Weltobjekte                  |
|      /kick [player],(reason)       |                      Kickt einen Spieler                |
|       /ban [player],(reason)       |                      Bannt einen Spieler                |
|     /give [itemname],(amount)      |                 Gibt dir selbst einen Gegenstand        |
| /giveskillpoints [player],(amount) |           Vergibt Skillpunkte an einen anderen Spieler  |
|                /fly                |                    Schaltet Flugmodus an/aus            |
|         /move [x],[y],[z]          | Bewegt dich zu Position x, y, z; xyz sind ganze Zahlen. |
|       /removeadmin [player]        |               Entfernt einen Spieler als Admin          |

Weitere Befehle findest du im offiziellen [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).

## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich eingerichtet. Bei Fragen oder Support brauchst du nur unser Team kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />