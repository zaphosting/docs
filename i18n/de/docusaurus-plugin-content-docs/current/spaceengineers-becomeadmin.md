---
id: spaceengineers-becomeadmin
title: "Space Engineers: Server-Admin werden"
description: Informationen, wie du dich um Admin auf deinem Space Engineers-Server von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfiguration

Um den eigenen Spielserver gut im Spiel verwalten zu können ist es wichtig den Admin Rang zu haben.

### SteamID64 via Webseite

Zunächst einmal muss in Steam das Profil aufgerufen und dort dann an einer beliebigen Stelle Rechtsklick klicken werden.
Dort kann man dann die Steam URL des Profils kopieren.

![image](https://screensaver01.zap-hosting.com/index.php/s/rG6gLqZrrSBKFoA/preview)

Sobald das erledigt ist, kann man dann die URL auf folgenden Webseiten eingeben:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![image](https://screensaver01.zap-hosting.com/index.php/s/fR4ZzAGSwLTcnHr/preview)

### SteamID in die Config eintragen

Als Nächstes rufst du dein Interface und den Server auf. 
Dort gehst du dann auf den Reiter **Configs**

![image](https://screensaver01.zap-hosting.com/index.php/s/EzMp8LEjWMSkqjr/preview)

Anschließend öffnest du die **SpaceEngineers-Dedicated.cfg**

![image](https://screensaver01.zap-hosting.com/index.php/s/iJH2TSXjTTKxqGY/preview)

Wenn du das gemacht hast, drückst du **STR + F** und suchst nach *admin*

![image](https://screensaver01.zap-hosting.com/index.php/s/wFEQBnF9DGbgwrD/preview)

Nun schreibst du Folgendes:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Das ganze sollte danach dann so aussehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/FqDX9KXdcGkaRqi/preview)

Jetzt nur noch die Config Datei **Speichern** und fertig.
