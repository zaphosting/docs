---
id: css-fastdl
title: "Counter-Strike: Source: FastDL einrichten"
description: "Anleitung zur Einrichtung von FastDL mit Webspace für Counter-Strike: Source Server bei ZAP-Hosting - ZAP-Hosting Dokumentation"
sidebar_label: FastDL
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

FastDL (Fast Download) ist eine Methode zur Bereitstellung benutzerdefinierter Inhalte wie Karten, Sounds oder Modelle über einen externen Webserver anstelle des Gameservers. Dadurch verbessern sich die Download-Geschwindigkeiten für Spieler erheblich und der Gameserver wird entlastet.

Für die Nutzung von FastDL wird ein öffentlicher HTTP-Webserver benötigt. Eine ideale Lösung hierfür ist das **ZAP-Hosting Webspace-Paket**, das sich hervorragend zur Bereitstellung von Spielinhalten eignet. Diese Anleitung zeigt dir, wie FastDL mit dem ZAP-Webspace eingerichtet wird.

<InlineVoucher />

## Voraussetzungen

Du benötigst einen aktiven Counter-Strike: Source Server bei ZAP-Hosting sowie ein zusätzliches Webspace-Paket. Der Zugriff per FTP oder über den integrierten Datei-Manager muss sowohl für den Gameserver als auch für den Webspace möglich sein.

Die Dateien, die du bereitstellen möchtest (z. B. `.bsp` Maps, Sounds oder Models), sollten spielseitig bereits korrekt vorbereitet und strukturiert sein. Die gleiche Struktur muss dann auch auf dem Webspace eingerichtet werden, um eine erfolgreiche Auslieferung über FastDL zu ermöglichen.

## Vorbereitung des Webspace

Zur Verwaltung und zum Hochladen deiner FastDL-Dateien empfehlen wir die Nutzung des integrierten **Datei-Managers** im ZAP-Webinterface. Dieser ist über das Menü **Webspace > Datei-Manager** direkt erreichbar.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Im Hauptverzeichnis deines Webspace legst du einen Ordner mit dem Namen `fastdl` an. Darin erstellst du Unterordner wie `maps`, `sound` oder `models`, je nach Inhalt, den du bereitstellen möchtest. Die Ordnerstruktur muss exakt mit der deines Counter-Strike: Source-Servers übereinstimmen.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Bevor du die Dateien hochlädst, achte darauf, dass sie **im Format `.bz2` (bzip2)** komprimiert sind. Die meisten auf Source basierenden Spiele benötigen dieses Format. Eine Map-Datei mit dem Namen `custom_map.bsp` muss daher als `custom_map.bsp.bz2` hochgeladen werden.

:::info Komprimieren mit 7-Zip
Zum Vorbereiten deiner Dateien für FastDL kannst du Programme wie **7-Zip** verwenden, um sie ins `.bz2`-Format zu komprimieren. Klicke dazu mit der rechten Maustaste auf die Datei, wähle **7-Zip > Zu Archiv hinzufügen...**, setze das Archivformat auf `bzip2` und bestätige.
:::

Nach dem Hochladen deiner `.bz2`-Dateien in die entsprechenden Ordner solltest du sicherstellen, dass **alle Ordner und Dateien über die korrekten Lese-Berechtigungen** verfügen. Der integrierte Datei-Manager ermöglicht es dir, die Dateiberechtigungen bei Bedarf anzupassen.

Sind die Dateien hochgeladen und korrekt freigegeben, ist dein FastDL-Inhalt über die folgende öffentliche URL erreichbar:

```
https://[dein-domain-name].zap.cloud/fastdl/
```

Diese URL kannst du im Browser testen, um zu prüfen, ob die Dateien korrekt geladen werden.

## Konfiguration des Gameservers

Öffne im ZAP-Interface im Bereich der Gameserververwaltung die Datei `server.cfg` über den Reiter **Konfigurationen** und füge folgende Zeilen hinzu:

```cfg
sv_downloadurl "https://[dein-domain-name].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Achte darauf, dass die URL exakt mit der Verzeichnisstruktur auf deinem Webspace übereinstimmt. Speichere die Datei und starte den Server neu.

## Abschluss

Mit Hilfe des ZAP-Webspace lässt sich FastDL für Counter-Strike: Source schnell und zuverlässig einrichten. Das sorgt für eine schnelle und effiziente Bereitstellung benutzerdefinierter Inhalte und verbessert das Spielerlebnis auf deinem Counter-Strike: Source Server.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂