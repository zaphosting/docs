---
id: eco_becomeadmin
title: ECO - Global Survival Server: Admin werden
description: Informationen, wie du Admin auf deinem ECO-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden

---


## 🔑 Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Das hinzufügen eines Admins erfolgt über die **Users.eco** Config, welche du im Interface unter Configs findest.

![image](https://user-images.githubusercontent.com/26007280/189889325-21709231-9f93-49a4-a4dc-57fe2a7188e2.png)



Um einen neuen Spieler als Admin hinzuzufügen muss der folgende Teil in der **Users.eco** Config angepasst werden:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



Im Feld **values** wird der Spieler eingetragen, der Admin werden soll. Bei mehreren Admins werden diese mit einem Kommazeichen getrennt hinzugefügt. Zum identifizieren des Spielers wird die SteamID64 verwendet. 

Diese findest du, indem du zunächst einmal dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle Rechtsklick drückst. Dort kann dann die Steam URL des Profils kopiert werden.

![image](https://user-images.githubusercontent.com/26007280/189889346-754e34b7-6702-4705-95b4-98108832c095.png)



Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![image](https://user-images.githubusercontent.com/26007280/189889366-7c977f37-bf4f-47b0-a91e-18358180ed11.png)



Dadurch erhältst du dort die sowohl die allgemeinen Accountinformationen als auch die Steam ID. Diese wird dann bei **values** eingetragen. Das sieht dann folgendermaßen aus: 

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"weitereSteamID"
	]
    }
  },
```



Nach einem Neustart des Servers wurde den dort eingetragenen Spielern Administrator Berechtigungen zugewiesen. Wenn du weitere Admins hinzufügen möchtest, dann musst du das im Anschluss nicht mehr immer über die Config machen. Stattdessen kannst du das im Spiel mit dem folgenden Befehl machen:

```
/admin [player]
```



Im folgenden findest du eine Übersicht von häufig verwendeten Admin Befehlen die du als Admin ausführen kannst.



## ⌨️ Häufig verwendete Befehle

|               Befehl               |                    Beschreibung                    |
| :--------------------------------: | :------------------------------------------------: |
|             /allblocks             |                Erzeugt alle Blöcke                 |
|          /allconstructed           | Erstellt sämtliche für Spieler erstellbaren Blöcke |
|             /allplants             |            Erzeugt alle Pflanzenblöcke             |
|             /allskills             |           Schaltet alle Fähigkeiten frei           |
|            /allterrain             |           Erzeugt alle grabbaren Blöcke            |
|          /allworldobjects          |           Erzeugt alle Objekte der Welt            |
|      /kick [player],(reason)       |                   Spieler kicken                   |
|       /ban [player],(reason)       |                   Spieler bannen                   |
|     /give [itemname],(amount)      |            Sich einen Gegenstand geben             |
| /giveskillpoints [player],(amount) | Fähigkeitspunkte an einen anderen Spieler vergeben |
|                /fly                |           Schaltet den Flugmodus ein/aus           |
|         /move [x],[y],[z]          |       Versetzt Spieler zur Position x, y, z;       |
|       /removeadmin [player]        |          Entfernt einen Spieler als Admin          |

Noch weitere verfügbare Befehle findest du in der offiziellen [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).
