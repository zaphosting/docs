---
id: fivem-change-servericon
title: "FiveM: Icon für Serverliste ändern"
description: Informationen, wie du das Servericon für FiveM-Server von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Icon ändern
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung
Du möchtest deinen Server individuell gestalten und ein eigenes Icon für deinen Server erstellen? Das ist ganz einfach möglich! In dieser Anleitung erfährst du, wie du ein Bild vorbereitest und es als dein neues benutzerdefiniertes Serversymbol einrichtest.

<YouTube videoId="nv0Ss5fo_ps" title="How to change the ICON on your FiveM Server" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

## Vorbereitung
Um ein benutzerdefiniertes Server-Icon für deinen FiveM Server zu erstellen, musst du zunächst eine Bilddatei in der Größe von 96x96 Pixeln im PNG-Format (Dateierweiterung "png") bereitstellen. Wir empfehlen die Verwendung eines Bildbearbeitungsprogramms wie z.B. GIMP oder die Verwendung eines Online-Tools zur Größenänderung und Konvertierung deines bestehenden Bildes. Sobald du das Bild mit diesen Vorgaben vorbereitet hast, kannst du es hochladen und in deiner Serverkonfiguration einstellen.



## Installation

### Dateien hochladen

Der nächste Schritt ist das Hochladen des fertigen Bildes auf deinen FiveM Gameserver, was mit Hilfe von FTP geschieht. Wenn du mit FTP nicht vertraut bist, empfehlen wir dir einen Blick in die [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung zu werfen.

Sobald du bei FTP eingeloggt bist, navigiere zum Ordner `gXXXX/gta-fivem/server-data/` und lade dort deine Server-Icon-Datei hoch. Achte darauf, dass du dir den Namen der Datei merkst.

![image](https://github.com/zaphosting/docs/assets/42719082/ae7c3a42-f240-49cb-8839-fdd0e39bd885)

### Aktivierung

Um sicherzustellen, dass das Icon beim Start des Servers geladen wird, musst du es nun in der Datei `server.cfg` für deinen Server unter dem Parameter `load_server_icon` einstellen. Wenn du zum Beispiel dein Icon `zaphosting96x96` genannt hast, dann würde der Set-Befehl wie folgt lauten: 

```
# Loading a server icon (96x96 PNG file)
load_server_icon zaphosting96x96.png
```

Du kannst auf deine `server.cfg` Datei entweder per FTP (wie oben gesehen), oder über den **Configs** Bereich im Webinterface deines Gameservers zugreifen.

:::info
Bitte stelle sicher, dass der Name der Bilddatei, den du im Befehl angibst, genau mit dem Namen übereinstimmt, den du zuvor hochgeladen hast. Dabei muss die Groß- und Kleinschreibung beachtet werden.
:::

Abschließend kannst du deinen Server neu starten. Dein neues Server-Icon wird beim nächsten vollständigen Start deines Servers geladen und sollte in Kürze in der Serverliste auftauchen. Du hast erfolgreich ein eigenes Server-Icon auf deinem FiveM Gameserver eingerichtet!

