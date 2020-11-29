---
id: mta_becomeadmin
title: Admin werden
sidebar_label: Admin werden

---


## Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. 



### Vorbereitung

Am Anfang muss zunächst ein Benutzer Account erstellt werden welchem später die Admin Rechte zugewiesen werden. Dazu muss in der Live Konsole folgender Befehl aus geführt werden:

```
addaccount <BENUTZERNAME> <PASSWORT>
```

Die Live Konsole kann beim Gameserver Dashboard im Interface gefunden werden, wenn der Server gestartet ist. Das sieht dann folgendermaßen aus:

![img](https://screensaver01.zap-hosting.com/index.php/s/xci8kAmsF4sYsgQ/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/9EdZtC7Wb4FBSeH/preview)





### Konfiguration

Nachdem der Account angelegt wurde muss in der **acl.xml** Config nun noch der Account in der Admin Gruppe hinzugefügt werden. Hierfür verbinden wir uns per FTP mit dem Server und öffnen die Datei. Diese befindet sich in **gXXXX/gtamta/mods/deathmatch/**. Falls du noch nicht weißt, was ein FTP-Client ist und wie du diesen benutzen kannst, dann schaue am besten in die folgende Anleitung: [FTP-Dateizugriff](https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Dort muss nun ein Benutzer Objekt hinzugefügt werden, damit der Benutzer der Admin Gruppe zugewiesen wird:

```
<object name="user.BENUTZERNAME"></object>
```

Statt dem Benutzername trägst du dort deinen eigenen Benutzernamen ein. Das Endresultat davon sollte wie folgt aussehen:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Einloggen als Admin

Nun wo die Konfiguration der **acl.xml** abgeschlossen wurde kannst du dein Spiel/Server starten und dich mit deinem Server verbinden. Im Anschluss kannst du dich mit dem folgenden Befehl einloggen:

```
login BENUTZERNAME PASSWORT
```

Nun hast du deine Administrator-Berechtigungen und kannst deinen Server nach deinen Wünschen verwalten!
