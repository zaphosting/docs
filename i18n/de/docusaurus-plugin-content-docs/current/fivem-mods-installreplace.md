---
id: fivem-mods-installreplace
title: "FiveM: Replacement Carmods auf Server installieren"
description: Informationen, wie du Replacement Carmods auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Replacement Carmods installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP Verbinden
Zuerst solltest du dich über FTP auf deinen Server verbinden, dazu kannst du unser [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung nutzen.

## Vorbereitung

Erstelle im "Ressources" Ordner nun einen Ordner für deine Mods.

:::info
Du kannst den Ordner alles nennen, solange es keine speziellen Zeichen enthält, bei unserem Beispiel ist es "assets"
:::


Nun erstelle in deinem frisch erstelltem "assets" Ordner eine fxmanifest.lua Datei

In dieser Datei wird nun folgender Text eingetragen:

```
fx_version 'cerulean'
games { 'gta5' }
```

Danach kann die fxmanifest.lua gespeichert und geschlossen werden, diese brauchen wir nun nicht mehr.

In deinem Assetsordner erstellst du jetzt einen "stream" Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/njXzEjaiq5wZx4R/preview)


## Mods hochladen

Öffne diesen Stream Ordner nun, hier kannst du nun alle ytd und yft Dateien per Drag & Drop hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/wWjRKfGF3AGFCy4/preview)

Nachdem die Mods alle hochgeladen sind, muss jetzt nur noch deine Ressource in der server.cfg eingetragen werden, diese findest du im "server-data" Ordner deines FiveM Servers.


Diese kannst du mit einem beliebigen Texteditor öffnen, unter den "start" Einträgen kannst du nun deine Ressource wie folgt eintragen:


```
start assets
```


Fertig! Nach einem Serverneustart sollte der Carmod nun auf dem Server zu finden sein!

