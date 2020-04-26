---
id: spaceengineers_beomeadmin
title: Admin werden
sidebar_label: Admin werden
---

## 🔐 Admin werden

Um den eigenen Spielserver gut Ingame verwalten zu können ist es wichtig den Admin Rang zu haben.

### 🔢 SteamID64 via Webseite

Zunächst einmal muss in Steam das Profil aufgerufen und dort dann an einer beliebigen Stelle Rechtsklick klicken werden.
Dort kann man dann die Steam URL des Profils kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/x3ReDxz7eoy2eQ8/preview)

Sobald das erledigt ist, kann man dann die URL auf folgenden Webseiten engeben:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/gYNQfW96iwyE6Dk/preview)

### 📄 SteamID in die Config eintragen

Als nächstes rufst du dein Interface un den Server auf. 
Dort gehst du dann auf den Reiter **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/yfoed4EHWmCods4/preview)

Anschließend öffnest du die **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/wmqCM98tMnx96Dg/preview)

Wenn du das gemacht hast drückst du **STR + F** und suchst nach *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/erPTjwPXEFxqK5n/preview)

Nun schreibst du folgendes:
```
<Administrators >
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Das ganze sollte danach dann so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/knrZXfQn5bWFqJ7/preview)

Jetzt nur noch die Config Datei **Speichern** und fertig.
