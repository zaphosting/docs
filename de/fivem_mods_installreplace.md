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

![](https://screensaver01.zap-hosting.com/index.php/s/4ezY3AMxCR889YA/preview)

Nun erstelle in deinem Frisch erstelltem "assets" Ordner eine __resource.lua Datei

In dieser Datei wird nun folgender Text eingetragen:

```
resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'
```

Danach kann die __resource.lua gespeichert und geschlossen werden, diese brauchen wir nun nicht mehr.

In deinem Assets Ordner erstellst du nun einen "stream" Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/Xm2R8zyB3cFkgdz/preview)

## Mods Hochladen

Öffne diesen stream Ordner nun, hier kannst du nun alle ytd und yft Dateien per drag&drop hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/kys9J3d3tC7nsyT/preview)

Nachdem die Mods alle hochgeladen sind, muss nun nur noch deine resource in der server.cfg eingetragen werden, diese findest du im "server-data" Ordner deines FiveM Servers.

![](https://screensaver01.zap-hosting.com/index.php/s/eM8MtkZJCLg3gdz/preview)

Diese kannst du mit einem beliebigen Texteditor öffnen, unter den "start" Einträgen kannst du nun deine Resource wie folgt eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/H6Y5SHHKqeMPoLo/preview)


Fertig! Nach einem Serverneustart sollte der Carmod nun auf dem Server zu finden sein!
