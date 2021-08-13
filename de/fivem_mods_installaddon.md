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

![](https://screensaver01.zap-hosting.com/index.php/s/HeFZebkMZQAK4Dw/preview)

Nun entpacken wir zuerst rpf2fivem in einen leeren Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/fNdbWdnDr44KofT/preview)

Danach öffnen wir die NConvert Zipdatei und kopieren den "NConvert" Ordner in den gleichen Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/cafFciLEeejdszm/preview)


Nun können wir die `rpf2fivem.exe` öffnen!


## Mods Runterladen

Um Mods über rpf2fivem zu installieren, müssen wir Direktlinks darin hinzufügen, z. B. von gta5-mods.com, hier suchen wir uns einfach den Carmod aus den wir haben möchten und klicken auf "Download".

Nun müssen wir einfach nur auf den Download Button Rechtsklicken und "Adresse des Links kopieren" drücken, diesen fügen wir dann links oben in rpf2fivem ein:

![](https://screensaver01.zap-hosting.com/index.php/s/a6qjRGsg2QT89A6/preview)


Hier können wir nun unseren eigenen Resource Namen eintippen und "Add to queue" drücken:

![](https://screensaver01.zap-hosting.com/index.php/s/s9d25qzttRQpWLD/preview)


Falls weitere Mods runtergeladen werden sollen, können diese einfach genauso hinzugefügt werden, es können mehrere carmods gleichzeitig installiert werden:

## Mods Konvertieren

Nachdem wir uns nun eine liste von Mods gemacht haben, können wir einfach den "Start" Button drücken.

> Beachte: der `compress/downsize textures` haken sollte immer gesetzt werden, um zu verhindern, dass Carmods Texturfehler in FiveM haben.

![](https://screensaver01.zap-hosting.com/index.php/s/G6ieBPeEesXdr52/preview)

Nun werden die Carmods runtergeladen und für FiveM vorbereitet.

## Resourcen Hochladen

Nachdem rpf2fivem fertig ist, können die Carmods im "rpf2fivem" Ordner gefunden werden:

![](https://screensaver01.zap-hosting.com/index.php/s/GiQKz2LBjboKycR/preview)

Diese können wir nun einfach per [FTP Hochladen](fivem_installresources.md), ebenfalls wird eine `servercfg.txt` angelegt, welche die Einträge enthält, um die Carmods direkt in die server.cfg einzutragen, diese Einträge können wir einfach in die server.cfg kopieren.


Fertig! Die Carmods sind nun auf deinem Server installiert, nach einem Neustart des Servers können diese benutzt werden.