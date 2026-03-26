---
id: fivem-change-servericon
title: "FiveM: Server-Icon in der Serverliste ändern"
description: "Entdecke, wie du deinen FiveM-Gameserver mit einem einzigartigen 96x96 PNG-Icon individualisierst und so deine Server-Identität stärkst → Jetzt mehr erfahren"
sidebar_label: Server-Icon ändern
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Willst du deinen Gameserver individuell gestalten und ein eigenes Icon für deinen Server setzen? Das geht ganz easy! In dieser Anleitung lernst du, wie du ein Bild vorbereitest und es als dein neues, individuelles Server-Icon einstellst.

<InlineVoucher />

## Vorbereitung
Um ein individuelles Server-Icon für deinen FiveM-Gameserver zu setzen, musst du zuerst eine Bilddatei vorbereiten, die genau 96x96 Pixel groß ist und im PNG-Format vorliegt (`.png` Dateiendung). Wir empfehlen dir, ein Bildbearbeitungsprogramm wie GIMP zu nutzen oder einfach ein Online-Tool, um dein vorhandenes Bild zu skalieren und ins PNG-Format zu konvertieren. Sobald dein Bild diese Anforderungen erfüllt, kannst du es hochladen und in deiner Server-Konfiguration einbinden.

## Installation

### Dateien hochladen

Der nächste Schritt ist, dein fertiges Bild per FTP auf deinen FiveM-Gameserver hochzuladen. Falls du noch nicht mit FTP vertraut bist, schau dir am besten unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung an.

Nachdem du dich per FTP eingeloggt hast, navigiere zu `gXXXXXX/fivem/YOUR_FRAMEWORK/` und lade dort deine Server-Icon-Datei hoch. Im Beispiel wird die CFX-Standardvorlage genutzt. Lade die Datei in deinen eigenen Framework-Ordner hoch. Merke dir unbedingt den Dateinamen.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Aktivierung

Damit das Icon beim Serverstart geladen wird, musst du es jetzt in der `server.cfg` deines Servers unter dem Parameter `load_server_icon` eintragen. Wenn dein Icon z.B. `zaphosting96x96` heißt, sieht der Eintrag so aus:

```
# Server-Icon laden (96x96 PNG-Datei)
load_server_icon zaphosting96x96.png
```

:::info
Achte darauf, dass der Dateiname im Befehl exakt mit dem hochgeladenen Bild übereinstimmt – inklusive Groß- und Kleinschreibung.
:::

## Abschluss

Wenn du alle Schritte befolgt hast, sollte dein neues Server-Icon beim nächsten Server-Neustart angezeigt werden. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />