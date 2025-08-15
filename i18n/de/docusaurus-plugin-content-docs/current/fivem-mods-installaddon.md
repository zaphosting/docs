---
id: fivem-mods-installaddon
title: "FiveM: Addon Carmods auf Server installieren"
description: Informationen, wie du Addon Carmods auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Addon Carmods installieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Zuerst solltest du dich über FTP auf deinen Server verbinden, dazu kannst du unser [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung nutzen.

## Vorbereitung

Für dieses Tutorial benutzen wir das [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) Tool, dies vereinfacht den Prozess um einiges, hierzu laden wir uns die "NConvert.zip" und "rpf2fivem.zip" Ordner von der "Releases" Sektion runter:

![](https://screensaver01.zap-hosting.com/index.php/s/cPpXQxMjaqJJ7PN/preview)

Nun entpacken wir zuerst rpf2fivem in einen leeren Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/fjxgM37GafpJSgR/preview)

Danach öffnen wir die NConvert Zip-Datei und kopieren den "NConvert" Ordner in den gleichen Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/YSzxWqwWTmH9EqK/preview)


Nun können wir die `rpf2fivem.exe` öffnen!


## Mods herunterladen

Um Mods über rpf2fivem zu installieren, müssen wir Direktlinks darin hinzufügen, z. B. von gta5-mods.com, hier suchen wir uns einfach den Carmod aus, den wir haben möchten und klicken auf "Download".

Nun müssen wir einfach nur auf den Download Button rechts klicken und "Adresse des Links kopieren" drücken, diesen fügen wir dann links oben in rpf2fivem ein:

![](https://screensaver01.zap-hosting.com/index.php/s/JgDNZdYHzbB7GjT/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/KsJ4oJXw7f9wmyW/preview)

Hier können wir jetzt unseren eigenen Ressource Namen eintippen und "Add to queue" drücken.


Falls weitere Mods heruntergeladen werden sollen, können diese einfach genauso hinzugefügt werden, es können mehrere carmods gleichzeitig installiert werden:

## Mods konvertieren

Nachdem wir uns jetzt eine Liste von Mods gemacht haben, können wir einfach den "Start" Button drücken.

:::info
Beachte: der `compress/downsize textures` haken sollte immer gesetzt werden, um zu verhindern, dass Carmods Texturfehler in FiveM haben.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yx5WqG4oQRsQzCf/preview)

Jetzt werden die Carmods heruntergeladen und für FiveM vorbereitet.

## Ressourcen hochladen

Nachdem rpf2fivem fertig ist, können die Carmods im "rpf2fivem" Ordner gefunden werden:

![](https://screensaver01.zap-hosting.com/index.php/s/KTiTN89Cdx8etBt/preview)

Diese können wir jetzt einfach per [Ressourcen installieren](fivem-installresources.md), ebenfalls wird eine `servercfg.txt` angelegt, welche die Einträge enthält, um die Carmods direkt in die server.cfg einzutragen, diese Einträge können wir einfach in die server.cfg kopieren.


Fertig! Die Carmods sind nun auf deinem Server installiert, nach einem Neustart des Servers können diese benutzt werden.
