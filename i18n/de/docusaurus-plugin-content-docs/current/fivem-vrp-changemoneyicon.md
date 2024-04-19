---
id: fivem-vrp-changemoneyicon
title: "FiveM: Geldicon ändern"
description: Informationen, wie du das Geldicon für deinen FiveM Server mit VRP von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Geldicon ändern
---

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver-ftpaccess.md) eingerichtet werden.

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden. Hier öffnen wir folgenden pfad: `gta5-fivem/server-data/resources/vrp/cfg/money.lua`

## Geldicon hochladen

Um ein eigenes Geldicon zu verwenden, muss dieses erst auf Imgur hochgeladen werden:

![image](https://user-images.githubusercontent.com/13604413/159137839-6556817e-d237-44fe-b6f1-671a7bd2d7c4.png)


Hier können wir nun unser Bild via Drag & Drop hochladen:

![image](https://user-images.githubusercontent.com/13604413/159137847-9890edeb-af8e-4b40-9791-cd0c9e524238.png)


Nach dem Upload sehen wir unser Bild hochgeladen, um die URL zu kopieren, klicken wir per Rechtsklick auf das Icon und wählen "Grafikadresse kopieren". Diese URL kann jetzt in die Config eintragen werden.

## Config editieren

In der money.lua können einige Einstellungen der Geldanzeige angepasst werden, um das Geldicon zu ändern, können wir folgende Zeile editieren:

`content: url('https://i.imgur.com/JUz1njC.png'); `

Diese URL ersetzen wir einfach mit unseren eigenen Imgur Link und speichern die Datei. Nach einem Serverneustart wird das Geldicon im Spiel sichtbar sein.
