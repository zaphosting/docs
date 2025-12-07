---
id: l4d2-fastdl
title: "Left 4 Dead 2: FastDL einrichten"
description: "Entdecke, wie du Left 4 Dead 2 Content mit FastDL über dein ZAP-Hosting Webspace schneller auslieferst – für schnellere Downloads und weniger Serverlast → Jetzt mehr erfahren"
sidebar_label: FastDL
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

FastDL (Fast Download) ist eine Methode, um Custom Content wie Maps, Sounds oder Models über einen externen Webserver auszuliefern, statt direkt vom Game-Server. Das sorgt für schnellere Downloads bei den Spielern und entlastet deinen Server.

Um FastDL zu nutzen, brauchst du Zugriff auf einen öffentlichen HTTP-Webserver. Perfekt dafür eignet sich ein **ZAP-Hosting Webspace-Paket**, das ideal für die Auslieferung von Game-Content ist. In diesem Guide zeigen wir dir, wie du FastDL mit deinem ZAP-Webspace einrichtest.

<InlineVoucher />

## Voraussetzungen

Du brauchst einen aktiven Left 4 Dead 2 Server bei ZAP-Hosting und ein zusätzliches Webspace-Paket. FTP-Zugang oder Zugriff auf den File Manager muss sowohl für den Gameserver als auch für das Webspace-Paket vorhanden sein.

Auf der Server-Seite müssen die Dateien, die du verteilen willst (z.B. `.bsp` Maps, Soundfiles oder Models), schon richtig organisiert sein. Die gleiche Ordnerstruktur muss dann auch auf dem Webspace angelegt werden, damit FastDL reibungslos funktioniert.

## Webspace vorbereiten

Um deine FastDL-Dateien zu verwalten und hochzuladen, empfehlen wir den **File Manager** im ZAP-Webspace Interface. Du findest ihn direkt im Webpanel unter **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Im Root-Verzeichnis deines Webspaces legst du einen Ordner namens `fastdl` an. Darin erstellst du Unterordner wie `maps`, `sound` oder `models` – je nachdem, welche Inhalte du ausliefern willst. Die Ordnerstruktur muss exakt der deines Left 4 Dead 2 Servers entsprechen.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, solltest du sie **im `.bz2` Format (bzip2) komprimieren**. Die meisten Source-Engines erwarten die Dateien so. Zum Beispiel wird eine Map `custom_map.bsp` als `custom_map.bsp.bz2` hochgeladen.

:::info Komprimieren mit 7-Zip
Um deine Dateien für FastDL vorzubereiten, kannst du Tools wie **7-Zip** nutzen, um sie ins `.bz2` Format zu packen. Einfach Rechtsklick auf die Datei, dann **7-Zip > Zum Archiv hinzufügen...**, als Archivformat `bzip2` auswählen und bestätigen.
:::

Nachdem du die komprimierten Dateien in die passenden Ordner hochgeladen hast, achte darauf, dass **alle Verzeichnisse und Dateien die richtigen Leserechte** haben, damit sie öffentlich zugänglich sind. Im File Manager kannst du die Rechte anpassen.

Sobald alles hochgeladen und die Rechte gesetzt sind, ist dein FastDL-Content über diese öffentliche URL erreichbar:

```
https://[deine-domain].zap.cloud/fastdl/
```

Teste das am besten, indem du die URL im Browser öffnest und prüfst, ob die Dateien erreichbar sind.

## Game Server konfigurieren

Im ZAP-Interface unter der Game-Server-Verwaltung öffnest du die `server.cfg` Datei über die **Configs** Seite und fügst folgende Zeilen ein:

```cfg
sv_downloadurl "https://[deine-domain].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Stell sicher, dass die FastDL-URL genau mit der Struktur auf deinem Webspace übereinstimmt. Nach dem Speichern startest du deinen Game-Server neu, damit die Einstellungen greifen.

## Fazit

FastDL lässt sich super easy und zuverlässig mit deinem eigenen ZAP-Webspace einrichten. So lieferst du Custom Content schnell und effizient aus und sorgst für ein besseres Spielerlebnis auf deinem Left 4 Dead 2 Server.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />