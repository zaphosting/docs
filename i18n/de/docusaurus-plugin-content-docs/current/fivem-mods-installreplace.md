---
id: fivem-mods-installreplace
title: "FiveM: Ersatz-Carmods auf dem Server installieren"
description: "Entdecke, wie du Mods auf deinem FiveM-Server einrichtest und hochlädst für individuelle Gameplay-Erlebnisse → Jetzt mehr erfahren"
sidebar_label: Ersatz-Carmods installieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden
Zuerst solltest du dich per FTP mit deinem Server verbinden. Dafür kannst du unsere [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md) nutzen.

## Vorbereitung

Erstelle jetzt einen Ordner für deine Mods im "resources"-Ordner.

:::info
Du kannst den Ordner beliebig benennen, solange keine Sonderzeichen drin sind. In unserem Beispiel heißt er "assets".
:::

Erstelle nun in deinem frisch erstellten "assets"-Ordner eine fxmanifest.lua Datei.

Folgenden Text fügst du in diese Datei ein:

```
fx_version 'cerulean'
games { 'gta5' }

```

Speichere die fxmanifest.lua und schließe sie, wir brauchen sie jetzt nicht mehr.

In deinem assets-Ordner erstellst du jetzt einen "stream"-Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Mods hochladen

Öffne jetzt den stream-Ordner, hier kannst du alle ytd- und yft-Dateien per Drag & Drop hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Nachdem alle Mods hochgeladen sind, musst du nur noch deine Resource in der server.cfg eintragen. Diese findest du im "server-data"-Ordner deines FiveM-Servers.

Öffne die Datei mit einem beliebigen Texteditor und füge unter den "start"-Einträgen deine Resource wie folgt hinzu:

```
start assets
```

Fertig! Nach einem Server-Neustart sollte der Carmod jetzt auf deinem Server verfügbar sein!

<InlineVoucher />