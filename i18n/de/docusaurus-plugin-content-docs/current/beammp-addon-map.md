---
id: beammp-addon-map
title: "BeamMP: Addon Map installieren"
description: Informationen, wie du eine Addon Map für deinen BeamMP Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Addon Map installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

BeamNG.Drive bietet native Modding-Unterstützung und eine riesige Community, die es Ihnen ermöglicht, das Gameplay mit Ihren Freunden zu erweitern und zu verbessern. Da BeamMP einfach als Multiplayer-Modifikation fungiert, sollten die meisten Karten-Addons mit Ihrem BeamMP-Server kompatibel sein. In diesem Leitfaden werden wir den Prozess der Installation und Aktivierung eines benutzerdefinierten Karten-Addons auf Ihrem BeamMP-Server behandeln.

<InlineVoucher />

## Vorbereitung

Um eine Addon-Karte auf Ihrem BeamMP-Server zu installieren, müssen Sie sich per FTP mit ihm verbinden. Falls du nicht mit der Verwendung von FTP vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung zu werfen.

Bevor Sie mit der Installation fortfahren, müssen Sie auch die Karten-Add-ons finden, die Sie auf Ihrem Server installieren möchten. Wir empfehlen Ihnen, das [offizielle BeamNG.Drive-Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) zu durchsuchen, das eine riesige Bibliothek an Mods und Karten-Add-ons enthält, die von der Community erstellt wurden. 

:::tip
Da BeamMP eine Multiplayer-Modifikation für BeamNG.Drive ist, sollten die meisten Karten-Addons mit Ihrem BeamMP-Server kompatibel sein. Es ist jedoch möglich, dass bestimmte Karten nicht wie erwartet funktionieren, sodass Sie jede Karte einzeln testen müssen.
:::

## Installation

Stellen Sie zunächst sicher, dass Sie eine Addon-Karte heruntergeladen haben, die Sie Ihrem Server hinzufügen möchten. Diese sollte im `.zip`-Dateiformat vorliegen.

### Auswählen des Kartennamens

Bevor Sie mit dem nächsten Schritt fortfahren, müssen Sie sicherstellen, dass Sie den richtigen Kartennamen verwenden. Die heruntergeladene `.zip`-Datei sollte normalerweise den richtigen Namen haben, dies ist jedoch nicht immer der Fall, weshalb Sie dies überprüfen sollten.

Dazu müssen Sie die heruntergeladene `.zip`-Datei öffnen. Suchen und öffnen Sie in der Datei das Verzeichnis `levels`, das die eigentliche Karte enthält.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Sie müssen den spezifischen Namen des Karten-Addon-Ordners in diesem Verzeichnis kopieren. Klicken Sie dazu mit der rechten Maustaste, wählen Sie die Option `eigenschaften` aus und kopieren Sie den markierten Text mit `STRG + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Konfigurieren der Karte

Nachdem Sie den Kartennamen bestimmt haben, müssen Sie die Konfigurationsdatei und einen Parameter anpassen, der die aktive Karte enthält.

Dies kann ganz einfach durch Navigieren zum Abschnitt **Configs** im Webinterface-Panel Ihres Spielservers erfolgen.

![](https://screensaver01.zap-hosting.com/index.php/s/QnQHKiaG6oia3qJ/preview)

Suchen und öffnen Sie die Konfigurationsdatei `ServerConfig.toml` und suchen Sie nach der Zeile `Map = "/levels/gridmap_v2/info.json"`.

![](https://screensaver01.zap-hosting.com/index.php/s/PiatDsnqPpoiZr4/preview)

Danach ersetzen Sie den Wert durch `Map = "/levels/[your_mapname]/info.json"` unter Verwendung des zuvor festgelegten Kartennamens und speichern dann die Konfiguration.

![](https://screensaver01.zap-hosting.com/index.php/s/kFgGEKgrXTQsqYZ/preview)

:::info
In seltenen Fällen kann eine Karte unterschiedlich formatiert sein. Wenn die Karte nach dem Ausführen aller Schritte nicht funktioniert, müssen Sie möglicherweise anstelle von `Map = "/levels/[your_mapname]/info.json"` diesen Pfad angeben: `Map = "/levels/[your_mapname]/[your_mapname].mis"`
:::

:::tip
Sie können jederzeit die Standardkarten des Spiels verwenden, indem Sie die Konfigurationsdatei erneut bearbeiten. Unten finden Sie eine Liste der aktuellen Standardkarten.
```
"/levels/gridmap/info.json"
"/levels/automation_test_track/info.json"
"/levels/east_coast_usa/info.json"
"/levels/hirochi_raceway/info.json"
"/levels/italy/info.json"
"/levels/jungle_rock_island/info.json"
"/levels/industrial/info.json"
"/levels/small_island/info.json"
"/levels/smallgrid/info.json"
"/levels/utah/info.json"
"/levels/west_coast_usa/info.json"
"/levels/driver_training/info.json"
"/levels/derby/info.json"
```
:::

### Karte hochladen 

Als letzten Schritt müssen Sie die zuvor heruntergeladene `.zip`-Datei mit der Karte per FTP auf Ihren BeamMP-Spieleserver hochladen. Wenn Sie dabei Hilfe benötigen, verwenden Sie bitte erneut unseren Leitfaden [Zugriff per FTP](gameserver-ftpaccess.md).

Suchen Sie in Ihrem FTP-Client den folgenden Pfad.
```
../beammp/Resources/Client
```

Ziehen Sie die `.zip`-Datei des Karten-Add-ons einfach per Drag-and-drop an diesen Speicherort, um die Karte auf Ihren Server hochzuladen. Nachdem Sie die Konfigurationsdatei bearbeitet und die Kartendateien hochgeladen haben, sollte Ihr Karten-Add-on einsatzbereit sein.

## Abschluss

Nachdem Sie alle Schritte ausgeführt haben, starten Sie Ihren BeamMP-Server neu. Sie haben erfolgreich eine Add-on-Karte auf Ihrem BeamMP-Spieleserver installiert!