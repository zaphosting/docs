---
id: tf2-fastdl
title: "Team Fortress 2: FastDL einrichten"
description: "Entdecke, wie du mit FastDL die Auslieferung von Spielinhalten optimierst für schnellere Downloads und weniger Serverlast → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um benutzerdefinierte Inhalte wie Maps, Sounds oder Modelle über einen externen Webserver statt direkt über den Gameserver auszuliefern. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Eine super Option dafür ist ein **ZAP-Hosting Webspace-Paket**, das perfekt für die Auslieferung von Spielinhalten geeignet ist. Diese Anleitung zeigt dir, wie du FastDL mit ZAP-Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du benötigst einen aktiven Team Fortress 2 Gameserver bei ZAP-Hosting sowie ein zusätzliches Webspace-Paket. FTP-Zugang oder Zugriff auf den Dateimanager muss sowohl für den Gameserver als auch für den Webspace vorhanden sein.

Auf der Spieleseite müssen die Dateien, die du verteilen möchtest (z. B. `.bsp` Maps, Sounddateien oder Modelle), bereits korrekt organisiert sein. Die gleiche Struktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **Dateimanager** im ZAP-Webspace-Interface. Du findest ihn direkt im Webpanel unter **Webspace > Dateimanager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Lege im Root-Verzeichnis deines Webspaces einen Ordner namens `fastdl` an. Innerhalb dieses Ordners erstellst du Unterordner wie `maps`, `sound` oder `models`, je nachdem, welche Inhalte du ausliefern möchtest. Die Ordnerstruktur muss exakt der entsprechen, die dein Team Fortress 2 Server verwendet.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, stelle sicher, dass sie **im `.bz2` Format komprimiert** sind (bzip2). Die meisten Source-basierten Engines erwarten Dateien in diesem Format. Zum Beispiel sollte eine Map-Datei `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** verwenden, um sie im `.bz2` Format zu komprimieren. Einfach Rechtsklick auf die Datei, dann **7-Zip > Zum Archiv hinzufügen...** auswählen, `bzip2` als Archivformat wählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** besitzen, damit sie öffentlich zugänglich sind. Im Dateimanager kannst du die Berechtigungen anpassen.

Sobald deine Dateien hochgeladen und die Rechte geprüft sind, ist der FastDL-Inhalt über folgende öffentliche URL erreichbar:

```
https://[deine-domain].zap.cloud/fastdl/
```

Teste das, indem du die URL im Browser öffnest und prüfst, ob die Dateien erreichbar sind.

## Gameserver konfigurieren

Im ZAP-Interface unter der Gameserver-Verwaltung öffnest du die `server.cfg` Datei über die **Configs**-Seite und fügst folgende Zeilen ein:

```cfg
sv_downloadurl "https://[deine-domain].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die FastDL-URL exakt der Struktur auf deinem Webspace entspricht. Nach dem Speichern startest du deinen Gameserver neu, damit die Einstellungen wirksam werden.

## Abschluss

FastDL lässt sich schnell und zuverlässig mit deinem eigenen ZAP-Webspace einrichten. So kannst du benutzerdefinierte Inhalte schnell und effizient ausliefern und das Spielerlebnis auf deinem Team Fortress 2 Server verbessern.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />