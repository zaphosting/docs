---
id: trucksim-dlc
title: "Truck Sim: DLC/Mods aktivieren"
description: Informationen, wie du auf deinem Trucksim-Server DLCs und Mods aktivierst
sidebar_label: DLC/Mods aktivieren
---

## Konsole aktivieren

Um bei ETS2 / ATS Server DLCs und Mods zu aktivieren, musst du diese DLC auf deinem Account besitzen und installiert haben.

Um diese auf dem Server zu aktivieren, müssen ein paar Dateien generiert werden, dazu aktivieren wir den Devmode und die Konsole über die Configdateien.

Öffne zunächst deine Dokumente und öffne den "Euro Truck Simulator 2" oder "American Truck Simulator" Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/tD6oWBabHbQT8ox/preview)

Hier finden wir nun eine config.cfg Datei, diese öffnen wir in einem Texteditor:

![](https://screensaver01.zap-hosting.com/index.php/s/85YWmD3ZYjwKJCt/preview)

Hier suchen wir nun nach `g_developer` und `g_console`, dort stellen wir die 0 auf eine 1.

## Server Packages generieren

Wir starten nun das Spiel und laden unser Profil, wir können über die `^` oder `~` Taste jetzt die Konsole öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/GMm2BJzJ39fZtY2/preview)

Hier geben wir nun `export_server_packages` ein, das Ganze sollte vom Spiel bestätigt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/TpsqKad3wW6ptKD/preview)

Nun können wir das Spiel wieder beenden, im Dokumentordner befinden sich nun zwei neue Dateien, `server_packages.dat` & `server_packages.sii`.

## Server Packages Hochladen

Jetzt verbinden wir uns über den [FTP-Zugriff](gameserver-ftpaccess.md) zu unserem Server.

Die beiden Dateien laden wir in den `Euro Truck Simulator 2` oder `American Truck Simulator` Ordner unseres Gameservers hoch:

![](https://screensaver01.zap-hosting.com/index.php/s/ncNABqLSS5ksJx3/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/dsspM5o7GN8YiJN/preview)

Fertig! Nach einem Neustart sind die DLCs und Mods aktiv.

