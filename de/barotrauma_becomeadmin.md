---
id: barotrauma_becomeadmin
title: Admin werden
sidebar_label: Admin werden

---



## Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Damit man sich selbst oder auch anderen Spielern Administrator-Rechte zuweisen kann, muss als erstes ein Serveradmin Passwort definiert werden. Das definieren des Passworts erfolgt über die **Clientpermissions.xml** Config, welche du im Interface unter Configs findest.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ4zWaSiL4zpR6H/preview)





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

![img](https://screensaver01.zap-hosting.com/index.php/s/e9Eb7EDtW7BPSZo/preview)



Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![img](https://screensaver01.zap-hosting.com/index.php/s/Yxg52KfYA3rMDQj/preview)



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

