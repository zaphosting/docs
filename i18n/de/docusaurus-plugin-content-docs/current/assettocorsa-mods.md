---
id: assettocorsa-mods
title: Mods auf einen Server installieren
description: Informationen, wie du Mods auf deinen Assetto Corsa-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Mods Installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Bevor mods installiert werden können, muss der [Zugriff per FTP](gameserver-ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/sg6i7AYFZ89znzk/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/pZJmx2iaFinMLMf/preview)


## Vorbereitung

Zunächst öffnen wir den Assetto Corsa Ordner, diesen können wir öffnen, indem wir Steam öffnen und "Assetto Corsa" in der Spieleliste Rechtsklicken,

Nun öffnen wir "Lokale Dateien" und öffnen die Lokalen Spieldateien:

![](https://screensaver01.zap-hosting.com/index.php/s/6fLJiSBbQc5WJkD/preview)

Dort öffnen wir den "Server" Ordner und öffnen den ACServerManager.exe.

## Autos einstellen

Nun wechseln wir in das Tab "Cars / Entry List", hier können wir nun neue Autos hinzufügen:

Um Autos zu aktivieren, muss links das Häkchen gesetzt werden

![](https://screensaver01.zap-hosting.com/index.php/s/ECctRkRDa7swSp6/preview)


In der Mitte erscheinen nun Autos, welche auf dem Grid platziert werden können, hier können wir nun Autos in den Farben wählen, welche im Grid sein sollten:

![](https://screensaver01.zap-hosting.com/index.php/s/bxejDwg2bfzkwXb/preview)


:::info
Um mehrere Autos zu wählen, können mehrere Haken gesetzt werden, um die verschiedenen Autos in der Mitte hinzugefügt werden.


Beachte, dass alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird

![](https://screensaver01.zap-hosting.com/index.php/s/Hoz9NNHL4664ftt/preview)
:::



## Config hochladen

Nun können wir die Config über den "Save" Button abspeichern und über den "Export" Button exportieren:

![](https://screensaver01.zap-hosting.com/index.php/s/n5gFsN8wqYYARz8/preview)

Hier wählen wir nun einen freien Ordner, dort werden die Config-Daten gespeichert.

Jetzt kann der AC Server Manager geschlossen werden, wir öffnen nun den Ordner, in welche die Configs exportiert wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/oTWWgxfNwnk9BTk/preview)


Diese Configs können über Drag&Drop in den "cfg" Ordner des Servers hochgeladen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/5FDBnAXqXGCjELg/preview)



## Server Content hochladen

Wir müssen nun den Content für den Server generieren, damit Car&Map Mods auf dem Server geladen werden, dazu klicken wir zunächst unten auf "Update Server Content"

![](https://screensaver01.zap-hosting.com/index.php/s/xxxGnbP2w2oySM5/preview)


Dieser Prozess kann einige Minuten in Anspruch nehmen, es werden nun alle Maps & Cars zu Serverdateien umgewandelt.

:::info
Nachdem dieser Prozess vollendet ist, kann es ggf. zu einer "Could not update" Meldung kommen, diese ist unproblematisch.
:::

Nun öffnen wir den "Server" Ordner, indem auch der AcServerManager ist, dort befindet sich ein "Content" Ordner, welchen wir nun über Drag&Drop auf unseren Assetto Corsa Server hochladen, und damit unseren alten "Content" Ordner überschreiben:

![](https://screensaver01.zap-hosting.com/index.php/s/cFbaDgjZotKN2bL/preview)


Nachdem der Content hochgeladen wurde, sind die Carmods nach einem Serverneustart installiert und aktiv.
