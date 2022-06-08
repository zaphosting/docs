---
id: spaceengineers_becomeadmin
title: Space Engineers: Server-Admin werden
description: Informationen, wie du dich um Admin auf deinem Space Engineers-Server von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden
---

## 🔐 Admin werden

Um den eigenen Spielserver gut Ingame verwalten zu können ist es wichtig den Admin Rang zu haben.

### 🔢 SteamID64 via Webseite

Zunächst einmal muss in Steam das Profil aufgerufen und dort dann an einer beliebigen Stelle Rechtsklick klicken werden.
Dort kann man dann die Steam URL des Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/9ERnWan6k39FsHX/preview)

Sobald das erledigt ist, kann man dann die URL auf folgenden Webseiten engeben:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/92WJfgmrdZWXbFd/preview)

### 📄 SteamID in die Config eintragen

Als nächstes rufst du dein Interface un den Server auf. 
Dort gehst du dann auf den Reiter **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/Bj4MceqzXnnRRjE/preview)

Anschließend öffnest du die **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/edb5wMeWxR3JS2g/preview)

Wenn du das gemacht hast drückst du **STR + F** und suchst nach *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/Mwnfdb7PqgFgAAW/preview)

Nun schreibst du folgendes:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Das ganze sollte danach dann so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/i7QGeJ2dsc7DQQR/preview)

Jetzt nur noch die Config Datei **Speichern** und fertig.
