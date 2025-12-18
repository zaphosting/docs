---
id: css-fastdl
title: "Counter-Strike: Source: FastDL einrichten"
description: "Entdecke, wie du mit FastDL und ZAP-Hosting Webspace die Game-Content-Auslieferung optimierst für schnellere Downloads und weniger Serverlast → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um Custom Content wie Maps, Sounds oder Models über einen externen Webserver statt direkt vom Game-Server auszuliefern. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Perfekt dafür eignet sich ein **ZAP-Hosting Webspace-Paket**, das ideal für die Auslieferung von Game-Content ist. In dieser Anleitung zeigen wir dir, wie du FastDL mit ZAP-Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du brauchst einen aktiven Counter-Strike: Source Server bei ZAP-Hosting und zusätzlich ein Webspace-Paket. FTP-Zugang oder Zugriff auf den File Manager muss sowohl für den Gameserver als auch für den Webspace vorhanden sein.

Auf der Game-Seite müssen die Dateien, die du verteilen willst (z.B. `.bsp` Maps, Soundfiles oder Models), bereits richtig strukturiert sein. Die gleiche Ordnerstruktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **File Manager** im ZAP-Webspace Interface. Du findest ihn direkt im Webpanel unter **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Lege im Root-Verzeichnis deines Webspaces einen Ordner namens `fastdl` an. Darin erstellst du Unterordner wie `maps`, `sound` oder `models`, je nachdem, welche Inhalte du ausliefern willst. Die Ordnerstruktur muss exakt der deines Counter-Strike: Source Servers entsprechen.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, stelle sicher, dass sie **im `.bz2` Format komprimiert** sind (bzip2). Die meisten Source-Engines erwarten die Dateien so. Zum Beispiel sollte eine Map `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** nutzen, um sie ins `.bz2` Format zu packen. Einfach Rechtsklick auf die Datei, **7-Zip > Zum Archiv hinzufügen...** wählen, `bzip2` als Archivformat auswählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** besitzen, damit sie öffentlich zugänglich sind. Im File Manager kannst du die Berechtigungen anpassen.

Sobald alles hochgeladen und die Rechte gesetzt sind, ist dein FastDL-Content über folgende öffentliche URL erreichbar:

```
https://[dein-domain-name].zap.cloud/fastdl/
```

Teste das am besten, indem du die URL im Browser öffnest und prüfst, ob die Dateien erreichbar sind.

## Game-Server konfigurieren

Im ZAP-Interface unter der Game-Server-Verwaltung öffnest du die `server.cfg` Datei über die **Configs** Seite und fügst folgende Zeilen ein:

```cfg
sv_downloadurl "https://[dein-domain-name].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die FastDL-URL genau mit der Struktur auf deinem Webspace übereinstimmt. Speichere die Datei und starte deinen Game-Server neu, damit die Einstellungen greifen.

## Fazit

FastDL lässt sich mit deinem eigenen ZAP-Webspace schnell und zuverlässig einrichten. So lieferst du Custom Content super fix und effizient aus und verbesserst das Spielerlebnis auf deinem Counter-Strike: Source Server.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />