---
id: fivem_mods_installreplace
title: FiveM: Replacement Carmods auf Server installieren
description: Informationen, wie du Replacement Carmods auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Replacement Carmods Installieren
---

## Mit FTP Verbinden
Zuerst solltest du dich über FTP auf deinen Server Verbinden, dazu kannst du unser [FTP-Tutorial](gameserver_ftpaccess.md) nutzen.

## Vorbereitung

Erstelle im "resources" Ordner nun einen Ordner für deine Mods.

> Du kannst den Ordner alles nennen, solange es keine speziellen Zeichen enthält, bei unserem Beispiel ist es "assets"


Nun erstelle in deinem Frisch erstelltem "assets" Ordner eine fxmanifest.lua Datei

In dieser Datei wird nun folgender Text eingetragen:

```
fx_version 'cerulean'
games { 'gta5' }
```

Danach kann die fxmanifest.lua gespeichert und geschlossen werden, diese brauchen wir nun nicht mehr.

In deinem Assets Ordner erstellst du nun einen "stream" Ordner.

![image](https://user-images.githubusercontent.com/13604413/159168259-1508dc05-118c-4508-a1b3-7d11316b56fd.png)


## Mods Hochladen

Öffne diesen stream Ordner nun, hier kannst du nun alle ytd und yft Dateien per drag&drop hochladen:

![image](https://user-images.githubusercontent.com/13604413/159168290-8136adcb-6bb3-4c97-af56-b834bb3311ab.png)

Nachdem die Mods alle hochgeladen sind, muss nun nur noch deine resource in der server.cfg eingetragen werden, diese findest du im "server-data" Ordner deines FiveM Servers.


Diese kannst du mit einem beliebigen Texteditor öffnen, unter den "start" Einträgen kannst du nun deine Resource wie folgt eintragen:


```
start assets
```


Fertig! Nach einem Serverneustart sollte der Carmod nun auf dem Server zu finden sein!
