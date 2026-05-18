---
id: dods-fastdl
title: "Day of Defeat: Source: FastDL einrichten"
description: "Entdecke, wie du mit FastDL den Download von Spielinhalten beschleunigst und die Serverlast reduzierst – mit ZAP-Hosting Webspace → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um benutzerdefinierte Inhalte wie Maps, Sounds oder Modelle über einen externen Webserver statt direkt vom Gameserver auszuliefern. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Eine super Option dafür ist ein **ZAP-Hosting Webspace-Paket**, das perfekt geeignet ist, um Spielinhalte auszuliefern. Diese Anleitung zeigt dir, wie du FastDL mit ZAP-Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du benötigst einen aktiven Day of Defeat: Source Gameserver bei ZAP-Hosting und zusätzlich ein Webspace-Paket. FTP-Zugang oder Zugriff auf den Dateimanager muss sowohl für den Gameserver als auch für den Webspace vorhanden sein.

Auf der Gameserver-Seite müssen die Dateien, die du verteilen willst (z.B. `.bsp` Maps, Sounddateien oder Modelle), bereits korrekt organisiert sein. Die gleiche Struktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **Dateimanager** im ZAP-Webspace-Interface. Du findest ihn direkt im Webpanel unter **Webspace > Dateimanager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Lege im Root-Verzeichnis deines Webspaces einen Ordner namens `fastdl` an. Darin erstellst du Unterordner wie `maps`, `sound` oder `models`, je nachdem, welche Inhalte du ausliefern möchtest. Die Ordnerstruktur muss exakt der entsprechen, die dein Day of Defeat: Source Gameserver nutzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, stelle sicher, dass sie **im `.bz2`-Format komprimiert** sind (bzip2). Die meisten Source-basierten Engines erwarten die Dateien in diesem Format. Zum Beispiel sollte eine Map-Datei `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** nutzen, um sie ins `.bz2`-Format zu packen. Einfach Rechtsklick auf die Datei, **7-Zip > Zum Archiv hinzufügen...** wählen, als Archivformat `bzip2` auswählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** besitzen, damit sie öffentlich zugänglich sind. Im Dateimanager kannst du die Zugriffsrechte für Ordner und Dateien anpassen.

Sobald alles hochgeladen und die Rechte gesetzt sind, ist dein FastDL-Content über folgende öffentliche URL erreichbar:

```
https://[deine-domain].zap.cloud/fastdl/
```

Teste die URL am besten im Browser, um sicherzugehen, dass die Dateien erreichbar sind.

## Gameserver konfigurieren

Im ZAP-Interface unter der Gameserver-Verwaltung öffnest du die `server.cfg` Datei über die **Configs**-Seite und fügst folgende Zeilen ein:

```cfg
sv_downloadurl "https://[deine-domain].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die FastDL-URL genau mit der Struktur auf deinem Webspace übereinstimmt. Nach dem Speichern startest du deinen Gameserver neu, damit die Einstellungen wirksam werden.

## Abschluss

FastDL lässt sich mit deinem eigenen ZAP-Webspace schnell und zuverlässig einrichten. So kannst du benutzerdefinierte Inhalte schnell und effizient ausliefern und das Spielerlebnis auf deinem Day of Defeat: Source Gameserver verbessern.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />