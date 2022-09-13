---
id: barotrauma_becomeadmin
title: Barotrauma: Admin auf dem eigenen Server werden
description: Informationen, wie du Admin auf deinem Barotrauma-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden

---


## Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Das hinzufügen eines Admins erfolgt über die **Clientpermissions.xml** Config, welche du im Interface unter Configs findest.

![image](https://user-images.githubusercontent.com/26007280/189937640-321e9e45-c344-4107-aad8-77100b7834c5.png)


Um einen neuen Spieler hinzuzufügen, muss ein neuer Client Eintrag zu der Config hinzugefügt werden. Die Syntax dazu sieht wie folgt aus:

```xml
<Client
    name="<player name>"
    steamid="<steamid>"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



In dem Client Eintrag sind die Variablen **Name, SteamID, Permissions, und Command** zu finden. Diese müssen nun noch angepasst werden. Der Name kann beliebig gesetzt werden. Er dient nur als Platzhalter zur Übersicht. Im Anschluss muss die SteamID64 von deinem Steam Account hinterlegt werden.

Diese findest du, indem du zunächst einmal Steam Profil aufrufst und dort dann an einer beliebigen Stelle Rechtsklick drückst. Dort kann dann die Steam URL des Profils kopieren.

![image](https://user-images.githubusercontent.com/26007280/189937665-dab6dc92-b94b-489d-9241-e8ad2ad4dc9c.png)



Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![image](https://user-images.githubusercontent.com/13604413/159179580-c562bce5-444a-4ec6-8993-21483f7f85be.png)



Dadurch erhältst du dort die sowohl die allgemeinen Accountinformationen als auch die Steam ID. Dort wird die **Steam ID 64** benötigt. Diese wird dann im Client Eintrag unter **SteamID** eingetragen. Das sieht dann folgendermaßen aus: 

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



Nun bist du zwar schon Admin, allerdings wurden deinem Account noch keine spezifischen Rechte hinzugefügt. Diese kannst du hinzufügen indem du die Permissions und Commands hinzufügst die genutzt werden dürfen. Das kann dann zum Beispiel so aussehen:

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



In dem Beispiel wurde dem Admin Zugriff auf die Server-Logs, Konsole, Heilen und Spawnen Befehl erlaubt. Im folgenden findest du eine Übersicht an Berechtigungen welche du setzen kannst.



## Berechtigungen

| Berechtigungen    | Beschreibung                                                 |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | Kann Runden beginnen/beenden                                 |
| Kick              | Kann andere Spieler kicken                                   |
| Ban               | Kann andere Spieler bannen                                   |
| Unban             | Kann andere Spieler entbannen                                |
| SelectSub         | Kann das U-Boot wählen                                       |
| SelectMode        | Kann den Spielmodus wählen                                   |
| ManageCampaign    | Kann den Bestimmungsort, die Mission und den Einkauf von Hilfsgütern aus dem Lager der Kampagne auswählen |
| ConsoleCommands   | Kann Konsolenbefehle verwenden - bitte beachte dabei, dass du auch Berechtigungen für einzelne Konsolenbefehle erteilen musst |
| ServerLog         | Kann Server-Logs lesen                                       |
| ManageSettings    | Kann die Servereinstellungen ändern                          |
| ManagePermissions | Kann die Berechtigungen anderer Clients ändern.              |
| KarmaImmunity     | Wird gegen die negativen Auswirkungen des Karmasystems immun gemacht und verliert kein Karma. |
| All               | Erteilt alle Berechtigungen.                                 |

