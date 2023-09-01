---
id: fivem-change-servericon
title: Icon für Serverliste ändern
description: Informationen, wie du das Servericon für FiveM-Server von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Icon ändern
---

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung:

<iframe width="560" height="315" src="https://www.youtube.com/embed/nv0Ss5fo_ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Einführung

Du möchtest deinen Server individuell gestalten und ein eigenes Icon für deinen Server erstellen? Das ist ganz einfach möglich! In dieser Anleitung erfährst du, wie du ein Bild vorbereitest und es als dein neues benutzerdefiniertes Serversymbol einrichtest.



## Vorbereitung

Um ein benutzerdefiniertes Server-Icon für deinen FiveM Server zu erstellen, musst du zunächst eine Bilddatei in der Größe von 96x96 Pixeln im PNG-Format (Dateierweiterung "png") bereitstellen. Wir empfehlen die Verwendung eines Bildbearbeitungsprogramms wie z.B. GIMP oder die Verwendung eines Online-Tools zur Größenänderung und Konvertierung deines bestehenden Bildes. Sobald du das Bild mit diesen Vorgaben vorbereitet hast, kannst du es hochladen und in deiner Serverkonfiguration einstellen.



## Installation

### Dateien hochladen

Der nächste Schritt ist das Hochladen des fertigen Bildes auf deinen FiveM Gameserver, was mit Hilfe von FTP geschieht. Wenn du mit FTP nicht vertraut bist, empfehlen wir dir einen Blick in die [FTP file access](https://zap-hosting.com/guides/docs/gameserver-ftpaccess/) Anleitung zu werfen.

Sobald du bei FTP eingeloggt bist, navigiere zum Ordner `gXXXX/gta-fivem/server-data/` und lade dort deine Server-Icon-Datei hoch. Achte darauf, dass du dir den Namen der Datei merkst.

![image](https://github.com/zaphosting/docs/assets/42719082/ae7c3a42-f240-49cb-8839-fdd0e39bd885)

### Aktivierung

Um sicherzustellen, dass das Icon beim Start des Servers geladen wird, musst du es nun in der Datei `server.cfg` für deinen Server unter dem Parameter `load_server_icon` einstellen. Wenn du zum Beispiel dein Icon `zaphosting96x96` genannt hast, dann würde der Set-Befehl wie folgt lauten: 

```
# Loading a server icon (96x96 PNG file)
load_server_icon zaphosting96x96
```

Du kannst auf deine `server.cfg` Datei entweder per FTP (wie oben gesehen), oder über den **Configs** Bereich im Webinterface deines Gameservers zugreifen.

:::info
Bitte stelle sicher, dass der Name der Bilddatei, den du im Befehl angibst, genau mit dem Namen übereinstimmt, den du zuvor hochgeladen hast. Dabei muss die Groß- und Kleinschreibung beachtet werden.
:::

Abschließend kannst du deinen Server neu starten. Dein neues Server-Icon wird beim nächsten vollständigen Start deines Servers geladen und sollte in Kürze in der Serverliste auftauchen. Du hast erfolgreich ein eigenes Server-Icon auf deinem FiveM Gameserver eingerichtet!

