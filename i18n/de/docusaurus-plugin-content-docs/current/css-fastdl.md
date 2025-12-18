---
id: css-fastdl
title: "Counter-Strike: Source: FastDL einrichten"
description: "Entdecke, wie du mit FastDL und ZAP-Hosting Webspace die Spieleinhalte schneller auslieferst, Downloads beschleunigst und die Serverlast reduzierst → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um benutzerdefinierte Inhalte wie Maps, Sounds oder Modelle über einen externen Webserver statt direkt über den Gameserver auszuliefern. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Eine super Option dafür ist ein **ZAP-Hosting Webspace-Paket**, das perfekt für die Auslieferung von Spieleinhalten geeignet ist. Diese Anleitung zeigt dir, wie du FastDL mit ZAP Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du benötigst einen aktiven Counter-Strike: Source Gameserver bei ZAP-Hosting sowie ein zusätzliches Webspace-Paket. FTP-Zugang oder Zugriff auf den Dateimanager muss sowohl für den Gameserver als auch für den Webspace vorhanden sein.

Auf der Gameserver-Seite müssen die Dateien, die du verteilen möchtest (z.B. `.bsp` Maps, Sounddateien oder Modelle), bereits korrekt organisiert sein. Die gleiche Ordnerstruktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **Dateimanager** im ZAP Webspace-Interface. Du findest ihn direkt im Webpanel unter **Webspace > Dateimanager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Lege im Root-Verzeichnis deines Webspaces einen Ordner namens `fastdl` an. Darin erstellst du Unterordner wie `maps`, `sound` oder `models`, je nachdem, welche Inhalte du ausliefern möchtest. Die Ordnerstruktur muss exakt der deines Counter-Strike: Source Servers entsprechen.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, stelle sicher, dass sie **im `.bz2`-Format (bzip2) komprimiert** sind. Die meisten Source-basierten Engines erwarten die Dateien in diesem Format. Zum Beispiel sollte eine Map-Datei `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** nutzen, um sie ins `.bz2`-Format zu packen. Einfach Rechtsklick auf die Datei, **7-Zip > Zum Archiv hinzufügen...** wählen, `bzip2` als Archivformat auswählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** besitzen, damit sie öffentlich zugänglich sind. Im Dateimanager kannst du die Zugriffsrechte anpassen.

Sobald alles hochgeladen und die Rechte gesetzt sind, ist dein FastDL-Content über folgende öffentliche URL erreichbar:

```
https://[deine-domain].zap.cloud/fastdl/
```

Teste die URL am besten im Browser, um sicherzugehen, dass die Dateien erreichbar sind.

## Gameserver konfigurieren

Im ZAP Interface unter der Gameserver-Verwaltung öffnest du die `server.cfg` Datei über die **Configs**-Seite und fügst folgende Zeilen ein:

```cfg
sv_downloadurl "https://[deine-domain].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die FastDL-URL exakt der Struktur auf deinem Webspace entspricht. Nach dem Speichern startest du deinen Gameserver neu, damit die Einstellungen wirksam werden.

## Fazit

FastDL lässt sich mit deinem eigenen ZAP Webspace schnell und zuverlässig einrichten. So kannst du benutzerdefinierte Inhalte zügig und effizient ausliefern und das Spielerlebnis auf deinem Counter-Strike: Source Gameserver verbessern.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – melde dich einfach! 🙂

<InlineVoucher />