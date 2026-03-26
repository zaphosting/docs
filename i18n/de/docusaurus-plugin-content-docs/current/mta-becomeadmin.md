---
id: mta-becomeadmin
title: "Multi Theft Auto: So wirst du Admin auf MTA-Servern"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und effizientes Game-Management → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du brauchst, um deinem Server Administratorrechte zu geben, werden dir hier erklärt.  
<InlineVoucher />

### Vorbereitung

Zuerst muss ein Benutzerkonto erstellt werden, dem später die Admin-Rechte zugewiesen werden. Dafür führst du folgenden Befehl in der Live-Konsole aus:

```
addaccount [options] <PASSWORD>
```

Die Live-Konsole findest du im Dashboard deines Gameservers im Interface, während der Server läuft. Das sieht so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Konfiguration

Nachdem das Konto erstellt wurde, muss es in der **acl.xml**-Config der Admin-Gruppe hinzugefügt werden. Dafür verbindest du dich per FTP mit dem Server und öffnest die Datei. Sie liegt unter **gXXXX/gtamta/mods/deathmatch/**. Falls du noch nicht weißt, was ein FTP-Client ist und wie du ihn benutzt, schau dir unsere Anleitung an: [FTP-Dateizugriff](gameserver-ftpaccess.md)

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

Dort musst du ein User-Objekt hinzufügen, um den Benutzer der Admin-Gruppe zuzuweisen:

```
<object name="user.BENUTZERNAME"></object>
```

Statt BENUTZERNAME trägst du deinen eigenen Benutzernamen ein. Das Ergebnis sollte dann so aussehen:

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



### Als Admin einloggen

Nachdem du die **acl.xml**-Config fertig konfiguriert hast, kannst du dein Spiel/deinen Server starten und dich mit deinem Server verbinden. Danach loggst du dich mit folgendem Befehl ein:

```
login USERNAME PASSWORD
```

## Abschluss

Glückwunsch, du hast die Administratorrechte erfolgreich eingerichtet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


<InlineVoucher />