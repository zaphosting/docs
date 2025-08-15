---
id: mta-becomeadmin
title: "Multi Theft Auto: Admin auf MTA-Server werden"
description: Informationen, wie du dich zum Admin auf deinem MTA-Server von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

### Vorbereitung

Am Anfang muss zunächst ein Benutzeraccount erstellt werden, welchem später die Adminrechte zugewiesen werden. Dazu muss in der Live Konsole folgender Befehl aus geführt werden:

```
addaccount <BENUTZERNAME> <PASSWORT>
```

Die Live Konsole kann beim Gameserver Dashboard im Interface gefunden werden, wenn der Server gestartet ist. Das sieht dann folgendermaßen aus:

![](https://screensaver01.zap-hosting.com/index.php/s/dn2GrAMsYazW6MM/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/nDgjWHiZsP7ct6C/preview)





### Konfiguration

Nachdem der Account angelegt wurde, muss in der **acl.xml** Config nun noch der Account in der Admin-Gruppe hinzugefügt werden. Hierfür verbinden wir uns per FTP mit dem Server und öffnen die Datei. Diese befindet sich in **gXXXX/gtamta/mods/deathmatch/**. Falls du noch nicht weißt, was ein FTP-Client ist und wie du diesen benutzen kannst, dann schaue am besten in die folgende Anleitung: [FTP-Dateizugriff](gameserver-ftpaccess.md)

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

Dort muss nun ein Benutzerobjekt hinzugefügt werden, damit der Benutzer der Admin Gruppe zugewiesen wird:

```
<object name="user.BENUTZERNAME"></object>
```

Statt des Benutzernamen trägst du dort deinen eigenen Benutzernamen ein. Das Endresultat davon sollte wie folgt aussehen:

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

Jetzt wo die Konfiguration der **acl.xml** abgeschlossen wurde kannst du dein Spiel/Server starten und dich mit deinem Server verbinden. Im Anschluss kannst du dich mit dem folgenden Befehl einloggen:

```
login BENUTZERNAME PASSWORT
```

## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂