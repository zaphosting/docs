---
id: factorio-becomeadmin
title: "Factorio: Admin werden"
description: Informationen, wie du Admin auf deinem Factorio-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfiguration
Das Hinzufügen eines Admins erfolgt über die **server-settings.json** Config, welche du im Interface unter Configs findest.

![image](https://screensaver01.zap-hosting.com/index.php/s/rS8Js24Ys5aywQf/preview)

Am Ende der Konfigurationsdatei befindet sich der wichtige Part. Dort werden die Admins definiert:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": []
}
```

Dort werden nun die Spielernamen von den Personen eingetragen, die Administrator-Berechtigungen erhalten sollen. Wenn mehrere Admins hinzugefügt werden, dann kann das zum Beispiel so aussehen:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": [
  	"SpielerName1",
  	"SpielerName2",
  	"SpielerName3"
  ]
}
```

Die Spieler mit den Namen **SpielerName1, SpielerName2, SpielerName3** haben nach dem Speichern die Berechtigungen erhalten. Im Spiel können nun über die Konsole Admin Befehle ausgeführt werden. Im Folgenden findest du eine Übersicht von häufig genutzten Befehlen.



### Häufig verwendete Befehle

|                 Befehl                 |                         Beschreibung                         |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |              Öffnet die Player-Verwaltungs-GUI               |
|           /ban spieler grund           |                        Spieler bannen                        |
|                 /bans                  |          Gibt die Liste der gesperrten Spieler aus           |
|             /unban spieler              |                      Spieler entbannen                       |
|  /banlist add/remove/get/clear player  | Fügt einen Spieler zur Bannliste hinzu oder entfernt ihn davon. Dasselbe wie /ban oder /unban |
|          /kick spieler grund           |                        Spieler kicken                        |
|              /mute spieler              |                    Spieler stummschalten                     |
|             /unmute spieler             |            Stummschaltung eines Spielers aufheben            |
| /whitelist add/remove/get/clear spieler | Fügt einen Spieler zur Whitelist hinzu oder entfernt ihn von der Whitelist |

Noch weitere verfügbare Befehle findest du in der offiziellen [Factorio Wiki](https://wiki.factorio.com/Console).
