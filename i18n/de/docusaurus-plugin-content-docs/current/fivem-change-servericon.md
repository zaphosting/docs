---
id: fivem-change-servericon
title: "FiveM: Icon für Serverliste ändern"
description: Informationen, wie du das Servericon für FiveM-Server von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Icon ändern
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du möchtest deinen Server individuell gestalten und ein eigenes Icon für deinen Server erstellen? Das ist ganz einfach möglich! In dieser Anleitung erfährst du, wie du ein Bild vorbereitest und es als dein neues benutzerdefiniertes Serversymbol einrichtest.

<InlineVoucher />



## Vorbereitung
Um ein benutzerdefiniertes Server-Icon für deinen FiveM Server zu erstellen, musst du zunächst eine Bilddatei in der Größe von 96x96 Pixeln im PNG-Format (Dateierweiterung "png") bereitstellen. Wir empfehlen die Verwendung eines Bildbearbeitungsprogramms wie z.B. GIMP oder die Verwendung eines Online-Tools zur Größenänderung und Konvertierung deines bestehenden Bildes. Sobald du das Bild mit diesen Vorgaben vorbereitet hast, kannst du es hochladen und in deiner Serverkonfiguration einstellen.

## Installation

### Dateien hochladen

Der nächste Schritt ist das Hochladen des fertigen Bildes auf deinen FiveM Gameserver, was mit Hilfe von FTP geschieht. Wenn du mit FTP nicht vertraut bist, empfehlen wir dir einen Blick in die [FTP-Zugriff](gameserver-ftpaccess.md) Anleitung zu werfen.

Sobald du per FTP eingeloggt bist, navigiere zu `gXXXXXX/fivem/DEIN_FRAMEWORK/` und lade dort dein Server-Icon hoch. In diesem Beispiel wird das CFX-Standard-Template verwendet. Lade die Datei in deinen eigenen Framework-Ordner hoch. Achten darauf, dass du dir den Namen der Datei merkst.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Aktivierung

Um sicherzustellen, dass das Icon beim Start des Servers geladen wird, musst du es nun in der Datei `server.cfg` für deinen Server unter dem Parameter `load_server_icon` einstellen. Wenn du zum Beispiel dein Icon `zaphosting96x96` genannt hast, dann würde der Set-Befehl wie folgt lauten: 

```
# Loading a server icon (96x96 PNG file)
load_server_icon zaphosting96x96.png
```

:::info
Bitte stelle sicher, dass der Name der Bilddatei, den du im Befehl angibst, genau mit dem Namen übereinstimmt, den du zuvor hochgeladen hast. Dabei muss die Groß- und Kleinschreibung beachtet werden.
:::



## Abschluss

Vorausgesetzt, dass du alle Schritte befolgt hast, sollte beim nächsten Server Neustart dein neues Server Icon dargestellt werden. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
