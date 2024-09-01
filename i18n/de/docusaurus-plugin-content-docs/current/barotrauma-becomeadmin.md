---
id: barotrauma-becomeadmin
title: "Barotrauma: Admin auf dem eigenen Server werden"
description: Informationen, wie du Admin auf deinem Barotrauma-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfiguration 
Das Hinzufügen eines Admins erfolgt über die **Clientpermissions.xml** Config, welche du im Interface unter Configs findest.

![image](https://screensaver01.zap-hosting.com/index.php/s/aY7mydaioewqAm9/preview)


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



In dem Client Eintrag sind die Variablen **Name, SteamID, Permissions, und Befehl** zu finden. Diese müssen nun noch angepasst werden. Der Name kann beliebig gesetzt werden. Er dient nur als Platzhalter zur Übersicht. Im Anschluss muss die SteamID64 von deinem Steam Account hinterlegt werden.

Diese findest du, indem du zunächst einmal Steam Profil aufrufst und dort dann an einer beliebigen Stelle Rechtsklick drückst. Dort kann dann die Steam URL des Profils kopieren.

![image](https://screensaver01.zap-hosting.com/index.php/s/PZtkHWMB8NkCABF/preview)



Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![image](https://screensaver01.zap-hosting.com/index.php/s/Q39EjBqmBez5J2Y/preview)



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



Nun bist du zwar schon Admin, allerdings wurden deinem Account noch keine spezifischen Rechte hinzugefügt. Diese kannst du hinzufügen, indem du die Permissions und Befehls hinzufügst, die genutzt werden dürfen. Das kann dann zum Beispiel so aussehen:

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleBefehls">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleBefehls">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



In dem Beispiel wurde dem Admin Zugriff auf die Server-Logs, Konsole, Heilen und Spawnen Befehl erlaubt. Im Folgenden findest du eine Übersicht an Berechtigungen, welche du setzen kannst.



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
| ConsoleBefehls   | Kann Konsolenbefehle verwenden - bitte beachte dabei, dass du auch Berechtigungen für einzelne Konsolenbefehle erteilen musst |
| ServerLog         | Kann Server-Logs lesen                                       |
| ManageSettings    | Kann die Servereinstellungen ändern                          |
| ManagePermissions | Kann die Berechtigungen anderer Clients ändern.              |
| KarmaImmunity     | Wird gegen die negativen Auswirkungen des Karmasystems immun gemacht und verliert kein Karma. |
| All               | Erteilt alle Berechtigungen.                                 |

