---
id: factorio-becomeadmin
title: "Factorio: Admin werden"
description: "Entdecke, wie du Administratorrechte vergibst, um volle Kontrolle über deinen Server zu bekommen und Ingame-Optionen effektiv zu verwalten → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Administrator kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration

Administratorrechte erlauben es dir, Änderungen direkt im Spiel auf deinem Server vorzunehmen, ohne diese in der Config ändern zu müssen. Das Hinzufügen eines Admins erfolgt über die **server-settings.json** Config, die du im Interface unter Configs findest.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Am Ende der Config-Datei befindet sich der wichtige Abschnitt. Dort werden die Admins definiert:

```
  "_comment_admins": "Liste von Benutzernamen (case insensitive), die sofort befördert werden",
  "admins": []
}
```

Die Namen der Spieler, die Administratorrechte erhalten sollen, müssen dort eingetragen werden. Wenn mehrere Admins hinzugefügt werden, könnte das zum Beispiel so aussehen:

```
  "_comment_admins": "Liste von Benutzernamen (case insensitive), die sofort befördert werden",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

Die Spieler mit den Namen **PlayerName1, PlayerName2, PlayerName3** haben nun die Rechte erhalten. Admin-Befehle können jetzt im Spiel über die Konsole ausgeführt werden. Im Folgenden findest du eine Übersicht der häufig genutzten Befehle.



### Häufig genutzte Befehle

|                Befehl                 |                         Beschreibung                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Öffnet die Spieler-Verwaltungs-GUI.            |
|           /ban player reason           |                          Spieler bannen                       |
|                 /bans                  |               Zeigt eine Liste der gebannten Spieler.        |
|             /unban player              |                         Spieler entbannen                     |
|  /banlist add/remove/get/clear player  | Fügt einen Spieler zur Bannliste hinzu oder entfernt ihn. Gleichbedeutend mit /ban oder /unban. |
|          /kick player reason           |                         Spieler kicken                        |
|              /mute player              |                         Spieler stummschalten                 |
|             /unmute player             |                        Stummschaltung aufheben                |
| /whitelist add/remove/get/clear player |         Fügt einen Spieler zur Whitelist hinzu oder entfernt ihn          |

Weitere verfügbare Befehle findest du im offiziellen [Factorio Wiki](https://wiki.factorio.com/Console).


## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />