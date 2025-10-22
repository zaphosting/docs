---
id: barotrauma-becomeadmin
title: "Barotrauma: Werde Admin auf deinem eigenen Server"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und nahtloses Ingame-Management → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Administrator kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration
Das Hinzufügen eines Admins erfolgt über die **Clientpermissions.xml**-Config, die du im Interface unter Configs findest.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


Ein neuer Client-Eintrag muss in der Config hinzugefügt werden, um einen neuen Spieler hinzuzufügen. Die Syntax sieht so aus:

```xml
<Client
    name="<Spielername>"
    steamid="<steamid>"
    permissions="<Berechtigung(en)>">
    <command
      name="<Befehlsname>" />
  </Client>
```



Der Client-Eintrag enthält die Variablen **Name, SteamID, Permissions und Command**. Diese müssen angepasst werden. Der Name kann frei gewählt werden und dient nur als Platzhalter zur Übersicht. Danach muss die SteamID64 deines Steam-Accounts definiert werden.

Du findest sie, indem du dein Steam-Profil aufrufst und dann irgendwo im Profil mit der rechten Maustaste klickst. Dort kannst du die Steam-URL des Profils kopieren.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Anschließend gibst du die URL auf einer der folgenden Webseiten ein:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



So erhältst du allgemeine Account-Infos sowie die Steam ID. In diesem Fall wird die **Steam ID 64** benötigt. Die Steam ID muss dann im Client-Eintrag unter **SteamID** eingetragen werden. Das Ergebnis sieht dann so aus: 

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<Berechtigung(en)>">
    <command
      name="<Befehlsname>" />
  </Client>
```



Ab jetzt bist du zwar Admin, aber es wurden noch keine spezifischen Rechte deinem Account zugewiesen. Diese kannst du hinzufügen, indem du die Berechtigungen und Befehle einträgst, die genutzt werden dürfen. Das kann zum Beispiel so aussehen:

```xml
...
    permissions="<Berechtigung(en)>"> ---> permissions="ServerLog, ConsoleCommands">
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



In diesem Beispiel hat der Admin Zugriff auf Serverlogs, Konsole, den Heal- und Spawn-Befehl bekommen. Im Folgenden findest du eine Übersicht der Berechtigungen, die du setzen kannst.



## Berechtigungen

| Berechtigungen    | Beschreibung                                                  |
| ----------------- | -------------------------------------------------------------|
| ManageRound       | Kann Runden starten/beenden.                                 |
| Kick              | Kann andere Spieler kicken.                                  |
| Ban               | Kann andere Spieler bannen.                                  |
| Unban             | Kann Banns von anderen Spielern aufheben.                    |
| SelectSub         | Kann das U-Boot auswählen.                                   |
| SelectMode        | Kann den Spielmodus auswählen.                               |
| ManageCampaign    | Kann das Ziel, die Mission auswählen und Vorräte im Campaign-Store kaufen. |
| ConsoleCommands   | Kann Konsolenbefehle nutzen – beachte, dass du auch Berechtigungen für einzelne Konsolenbefehle vergeben musst. |
| ServerLog         | Kann Serverlogs lesen.                                       |
| ManageSettings    | Kann Servereinstellungen ändern.                            |
| ManagePermissions | Kann die Berechtigungen anderer Clients ändern.             |
| KarmaImmunity     | Ist immun gegen negative Effekte des Karma-Systems, verliert kein Karma. |
| All               | Vergibt alle Berechtigungen.                                |



## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />