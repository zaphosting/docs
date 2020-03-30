---
id: fivem_mods_installreplace
title: Replacement Carmods Installieren
sidebar_label: Replacement Carmods Installieren
---

## Mit FTP Verbinden
Zuerst solltest du dich über FTP auf deinen Server Verbinden, dazu kannst du unser [FTP-Tutorial](gameserver_ftpaccess.md) nutzen.

## Vorbereitung

Erstelle im "resources" Ordner nun einen Ordner für deine Mods.

> Du kannst den Ordner alles nennen, solange es keine speziellen Zeichen enthält, bei unserem Beispiel ist es "assets"

![](https://screensaver01.zap-hosting.com/index.php/s/zdHHkBHdkHX5RAa/preview)

Nun erstelle in deinem Frisch erstelltem "assets" Ordner eine __resource.lua Datei:

![](https://screensaver01.zap-hosting.com/index.php/s/BPk7G884rqwABa5/preview)

In dieser Datei wird nun folgender Text eingetragen:

```
resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'
```

Danach kann die __resource.lua gespeichert und geschlossen werden, diese brauchen wir nun nicht mehr.

In deinem Assets Ordner erstellst du nun einen "stream" Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/KKEt6M35BpNsygn/preview)

## Mods Hochladen

Öffne diesen stream Ordner nun, hier kannst du nun alle ytd und yft Dateien per drag&drop hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/g5Dg67pSTYiEWaM/preview)

Nachdem die Mods alle hochgeladen sind, muss nun nur noch deine resource in der server.cfg eingetragen werden, diese findest du im "server-data" Ordner deines FiveM Servers.

![](https://screensaver01.zap-hosting.com/index.php/s/tFa8yALGJwj82bK/preview)

Diese kannst du mit einem beliebigen Texteditor öffnen, unter den "start" Einträgen kannst du nun deine Resource wie folgt eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/D58nmHkXHgwyTf6/preview)


Fertig! Nach einem Serverneustart sollte der Carmod nun auf dem Server zu finden sein!

![](https://screensaver01.zap-hosting.com/index.php/s/MTWWPwTd9KTSpmX/preview)
