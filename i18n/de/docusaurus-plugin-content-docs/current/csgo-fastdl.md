---
id: csgo-fastdl
title: "CS:GO: FastDL einrichten"
description: "Entdecke, wie du mit FastDL die Auslieferung von Spielinhalten optimierst, Downloads beschleunigst und die Serverlast für CS:GO-Spieler reduzierst → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um benutzerdefinierte Inhalte wie Maps, Sounds oder Modelle über einen externen Webserver statt direkt vom Gameserver auszuliefern. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Eine super Option dafür ist ein **ZAP-Hosting Webspace-Paket**, das perfekt für die Auslieferung von Spielinhalten geeignet ist. Diese Anleitung zeigt dir, wie du FastDL mit ZAP-Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du benötigst einen aktiven CS:GO-Server bei ZAP-Hosting und ein zusätzliches Webspace-Paket. FTP-Zugang oder Zugriff auf den Dateimanager muss sowohl für den Gameserver als auch für den Webspace vorhanden sein.

Auf der Spieleseite müssen die Dateien, die du verteilen willst (z.B. `.bsp` Maps, Sounddateien oder Modelle), bereits korrekt organisiert sein. Die gleiche Struktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **Dateimanager** im ZAP-Webspace-Interface. Du findest ihn direkt im Webpanel unter **Webspace > Dateimanager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Lege im Root-Verzeichnis deines Webspaces einen Ordner namens `fastdl` an. Innerhalb dieses Ordners erstellst du Unterordner wie `maps`, `sound` oder `models`, je nachdem, welche Inhalte du ausliefern möchtest. Die Ordnerstruktur muss exakt der entsprechen, die dein CS:GO-Server nutzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, stelle sicher, dass sie **im `.bz2`-Format (bzip2) komprimiert** sind. Die meisten Source-basierten Engines erwarten Dateien in diesem Format. Zum Beispiel sollte eine Map-Datei `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** nutzen, um sie im `.bz2`-Format zu komprimieren. Einfach Rechtsklick auf die Datei, dann **7-Zip > Zum Archiv hinzufügen...** auswählen, `bzip2` als Archivformat wählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** besitzen, damit sie öffentlich zugänglich sind. Im Dateimanager kannst du die Zugriffsrechte für Ordner und Dateien anpassen.

Sobald alles hochgeladen und die Rechte gesetzt sind, ist dein FastDL-Content über folgende öffentliche URL erreichbar:

```
https://[dein-domain-name].zap.cloud/fastdl/
```

Teste die URL am besten im Browser, um sicherzugehen, dass die Dateien erreichbar sind.

## Gameserver konfigurieren

Öffne im ZAP-Interface unter der Gameserver-Verwaltung die `server.cfg` Datei über die **Configs**-Seite und füge folgende Zeilen ein:

```cfg
sv_downloadurl "https://[dein-domain-name].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die FastDL-URL exakt der Struktur auf deinem Webspace entspricht. Nach dem Speichern musst du deinen Gameserver neu starten, damit die Einstellungen wirksam werden.

## Fazit

FastDL lässt sich mit deinem eigenen ZAP-Webspace schnell und zuverlässig einrichten. So kannst du benutzerdefinierte Inhalte schnell und effizient ausliefern und das Spielerlebnis auf deinem CS:GO-Server verbessern.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />