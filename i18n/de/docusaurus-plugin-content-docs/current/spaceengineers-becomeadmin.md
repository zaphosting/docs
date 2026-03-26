---
id: spaceengineers-becomeadmin
title: "Space Engineers: Werde Server-Admin"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und nahtloses Ingame-Management → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt ingame nutzen. Alle Schritte, die du zur Vergabe der Administratorrechte für deinen Server brauchst, werden dir hier erklärt.  
<InlineVoucher />

Um deinen eigenen Gameserver ingame gut verwalten zu können, ist es wichtig, den Admin-Rang zu haben.

### SteamID64 über Website

Zuerst musst du das Profil in Steam aufrufen und dann irgendwo mit der rechten Maustaste klicken.  
Dort kannst du dann die Steam-URL des Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Anschließend kannst du die URL auf folgenden Seiten eingeben:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### SteamID in die Config eintragen

Als Nächstes öffnest du dein Interface und den Server.  
Dort gehst du auf den Reiter **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Dann öffnest du die **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Danach drückst du **STR + F** und suchst nach *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Jetzt schreibst du das hier rein:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Das Ganze sollte danach so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Jetzt nur noch die Config speichern und fertig!

## Abschluss

Glückwunsch, du hast die Administratorrechte erfolgreich eingerichtet. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />