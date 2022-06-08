---
id: factorio_becomeadmin
title: Factorio Server: Admin werden
description: Informationen, wie du Admin auf deinem Factorio-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden

---



Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Das hinzufügen eines Admins erfolgt über die **server-settings.json** Config, welche du im Interface unter Configs findest.

![img](https://screensaver01.zap-hosting.com/index.php/s/oQpyMxgQmpeXbFW/preview)

Am Ende der Config-Datei befindet sich der wichtige Part. Dort werden die Admins definiert:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": []
}
```

Dort werden nun die Spielernamen von den Personen eingetragen, die Administrator-Berechtigungen erhalten sollen. Wenn mehrere Admins hinzugefügt werden dann kann das zum Beispiel so aussehen:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": [
  	"SpielerName1",
  	"SpielerName2",
  	"SpielerName3"
  ]
}
```

Die Spieler mit den Namen **SpielerName1, SpielerName2, SpielerName3** haben nach dem Speichern nun die Berechtigungen erhalten. Im Spiel können nun über die Konsole Admin Befehle ausgeführt werden. Im folgenden findest du eine Übersicht von häufig genutzten Befehlen.



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
