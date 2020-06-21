---
id: fivem_vrp_changemoneyicon
title: Geldicon Ändern
sidebar_label: Geldicon Ändern
---

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/QAyH2tdjj7cNrwC/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/QoXf3iSZirN7Ndy/preview)

Hier öffnen wir folgenden pfad: `gta5-fivem/server-data/resources/vrp/cfg/money.lua`

## Geldicon Hochladen

Um ein eigenes Geldicon zu verwenden, muss dieses erst auf Imgur hochgeladen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/5sA37RxfLQqQFjA/preview)

Hier können wir nun unser Bild via Drag&Drop hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/Y5Q57pW5znbEPMP/preview)

Nach dem upload sehen wir unser Bild hochgeladen, um die URL zu kopieren, klicken wir per Rechtsklick auf das Icon und wählen "Grafikadresse kopieren"

![](https://screensaver01.zap-hosting.com/index.php/s/39fB2Qf2W2stdCW/preview)

Diese URL kann nun in die Config Eintragen werden.

## Config Editieren

In der money.lua können einige Einstellungen der Geldanzeige angepasst werden, um das Geldicon zu ändern, können wir folgende Zeile editieren:

`content: url('https://i.imgur.com/JUz1njC.png'); `

Diese URL ersetzen wir einfach mit unseren eigenen Imgur Link und speichern die Datei.

Nach einem Serverneustart wird das Geldicon Ingame Sichtbar sein.
