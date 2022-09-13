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

![image](https://user-images.githubusercontent.com/26007280/189890542-53ea224a-e530-466a-8cfb-b416111ce636.png)

Sobald das erledigt ist, kann man dann die URL auf folgenden Webseiten engeben:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![image](https://user-images.githubusercontent.com/26007280/189890562-60f73099-0d50-47f0-a38a-800ad3b3778a.png)

### 📄 SteamID in die Config eintragen

Als nächstes rufst du dein Interface un den Server auf. 
Dort gehst du dann auf den Reiter **Configs**

![image](https://user-images.githubusercontent.com/26007280/189890578-d404d3c2-0d82-4f63-865a-073404dda486.png)

Anschließend öffnest du die **SpaceEngineers-Dedicated.cfg**

![image](https://user-images.githubusercontent.com/26007280/189890601-283ea429-4505-4c54-a6c8-0e33f5fec0d8.png)

Wenn du das gemacht hast drückst du **STR + F** und suchst nach *admin*

![image](https://user-images.githubusercontent.com/26007280/189890632-8cacffc0-c7b8-4e53-a9f7-e3ea339f6d28.png)

Nun schreibst du folgendes:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Das ganze sollte danach dann so aussehen:

![image](https://user-images.githubusercontent.com/26007280/189890656-e5ad6ab6-ac25-46e9-b372-02ae3752ae5b.png)

Jetzt nur noch die Config Datei **Speichern** und fertig.
