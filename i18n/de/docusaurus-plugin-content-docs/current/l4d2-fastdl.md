---
id: l4d2-fastdl
title: "Left 4 Dead 2: FastDL einrichten"
description: "Entdecke, wie du die Content-Auslieferung von Left 4 Dead 2 mit FastDL optimierst – nutze ZAP-Hosting Webspace für schnellere Downloads und weniger Serverlast → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um Custom Content wie Maps, Sounds oder Modelle über einen externen Webserver statt direkt vom Gameserver auszuliefern. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Eine super Option dafür ist ein **ZAP-Hosting Webspace-Paket**, das perfekt für die Auslieferung von Game-Content geeignet ist. Diese Anleitung zeigt dir, wie du FastDL mit ZAP-Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du benötigst einen aktiven Left 4 Dead 2 Gameserver bei ZAP-Hosting und zusätzlich ein Webspace-Paket. FTP-Zugang oder Zugriff auf den Dateimanager muss sowohl für den Gameserver als auch für den Webspace verfügbar sein.

Auf der Gameserver-Seite müssen die Dateien, die du verteilen willst (z.B. `.bsp` Maps, Sounddateien oder Modelle), bereits richtig strukturiert sein. Die gleiche Ordnerstruktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **Dateimanager** im ZAP-Webspace-Interface. Du findest ihn direkt im Webpanel unter **Webspace > Dateimanager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Lege im Root-Verzeichnis deines Webspaces einen Ordner namens `fastdl` an. Darin erstellst du Unterordner wie `maps`, `sound` oder `models`, je nachdem, welche Inhalte du ausliefern möchtest. Die Ordnerstruktur muss exakt der entsprechen, die dein Left 4 Dead 2 Gameserver nutzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, stelle sicher, dass sie **im `.bz2`-Format (bzip2) komprimiert** sind. Die meisten Source-basierten Engines erwarten die Dateien in diesem Format. Zum Beispiel sollte eine Map-Datei `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** nutzen, um sie ins `.bz2`-Format zu packen. Einfach Rechtsklick auf die Datei, **7-Zip > Zum Archiv hinzufügen...** wählen, `bzip2` als Archivformat auswählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** besitzen, damit sie öffentlich zugänglich sind. Im Dateimanager kannst du die Berechtigungen anpassen.

Sobald alles hochgeladen und die Rechte gesetzt sind, ist dein FastDL-Content über folgende öffentliche URL erreichbar:

```
https://[dein-domain-name].zap.cloud/fastdl/
```

Teste die URL am besten im Browser, um zu prüfen, ob die Dateien erreichbar sind.

## Gameserver konfigurieren

Im ZAP-Interface unter der Gameserver-Verwaltung öffnest du die `server.cfg` Datei über die **Configs**-Seite und fügst folgende Zeilen ein:

```cfg
sv_downloadurl "https://[dein-domain-name].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die FastDL-URL exakt der Struktur auf deinem Webspace entspricht. Nach dem Speichern startest du deinen Gameserver neu, damit die Einstellungen wirksam werden.

## Abschluss

FastDL lässt sich mit deinem eigenen ZAP-Webspace schnell und zuverlässig einrichten. So kannst du Custom Content blitzschnell ausliefern und das Spielerlebnis auf deinem Left 4 Dead 2 Gameserver deutlich verbessern.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />