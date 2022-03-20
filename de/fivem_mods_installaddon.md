---
id: fivem_mods_installaddon
title: FiveM: Addon Carmods auf Server installieren
description: Informationen, wie du Addon Carmods auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Addon Carmods Installieren
---

## Mit FTP Verbinden

Zuerst solltest du dich über FTP auf deinen Server Verbinden, dazu kannst du unser [FTP-Tutorial](gameserver_ftpaccess.md) nutzen.

## Vorbereitung

Für dieses Tutorial benutzen wir das [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) Tool, dies vereinfacht den Prozess um einiges, hierzu laden wir uns die "NConvert.zip" und "rpf2fivem.zip" Ordner von der "Releases" Sektion runter:

![image](https://user-images.githubusercontent.com/13604413/159167695-526d6441-d8e5-4387-adf3-c7a27de6919a.png)

Nun entpacken wir zuerst rpf2fivem in einen leeren Ordner:

![image](https://user-images.githubusercontent.com/13604413/159167715-0153b838-5d6a-4650-bccf-d6b353fe3e58.png)

Danach öffnen wir die NConvert Zipdatei und kopieren den "NConvert" Ordner in den gleichen Ordner:

![image](https://user-images.githubusercontent.com/13604413/159167737-4e050771-d8c6-4d80-bc5b-2c591355c04d.png)


Nun können wir die `rpf2fivem.exe` öffnen!


## Mods Runterladen

Um Mods über rpf2fivem zu installieren, müssen wir Direktlinks darin hinzufügen, z. B. von gta5-mods.com, hier suchen wir uns einfach den Carmod aus den wir haben möchten und klicken auf "Download".

Nun müssen wir einfach nur auf den Download Button Rechtsklicken und "Adresse des Links kopieren" drücken, diesen fügen wir dann links oben in rpf2fivem ein:

![image](https://user-images.githubusercontent.com/13604413/159167811-0cfd1264-e0af-4b78-aa98-c85d28884d20.png)

![image](https://user-images.githubusercontent.com/13604413/159167824-56daa647-0abc-4741-aeeb-ff6c8a7d3d7d.png)

Hier können wir nun unseren eigenen Resource Namen eintippen und "Add to queue" drücken.


Falls weitere Mods runtergeladen werden sollen, können diese einfach genauso hinzugefügt werden, es können mehrere carmods gleichzeitig installiert werden:

## Mods Konvertieren

Nachdem wir uns nun eine liste von Mods gemacht haben, können wir einfach den "Start" Button drücken.

> Beachte: der `compress/downsize textures` haken sollte immer gesetzt werden, um zu verhindern, dass Carmods Texturfehler in FiveM haben.

![image](https://user-images.githubusercontent.com/13604413/159167849-ddce8a9b-efbb-4572-b914-eee4c49149ef.png)

Nun werden die Carmods runtergeladen und für FiveM vorbereitet.

## Resourcen Hochladen

Nachdem rpf2fivem fertig ist, können die Carmods im "rpf2fivem" Ordner gefunden werden:

![image](https://user-images.githubusercontent.com/13604413/159167879-bea87ed6-3458-4c61-acaf-05e0b92e6039.png)

Diese können wir nun einfach per [FTP Hochladen](fivem_installresources.md), ebenfalls wird eine `servercfg.txt` angelegt, welche die Einträge enthält, um die Carmods direkt in die server.cfg einzutragen, diese Einträge können wir einfach in die server.cfg kopieren.


Fertig! Die Carmods sind nun auf deinem Server installiert, nach einem Neustart des Servers können diese benutzt werden.
