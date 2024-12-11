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

BeamNG.Drive bietet native Modding-Unterstützung und eine riesige Community, die es dir ermöglicht, das Gameplay mit deinen Freunden zu erweitern und zu verbessern. Da BeamMP einfach als Multiplayer-Modifikation fungiert, sollten die meisten Addon Maps mit deinem BeamMP-Server kompatibel sein. In dieser Anleitung behandeln wir den Prozess der Installation und Aktivierung einer benutzerdefinierten Addon Map auf deinem BeamMP-Server.

<InlineVoucher />

## Vorbereitung

Um eine Addon Map auf deinem BeamMP-Server zu installieren, musst du dich per FTP verbinden. Falls du nicht mit der Verwendung von FTP vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung zu werfen.

Bevor du mit der Installation fortfährst, musst du die Addon Map heraussuchen, die du auf deinem Server installieren möchtest. Wir empfehlen dir, das [offizielle BeamNG.Drive-Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) zu durchsuchen, die eine riesige Bibliothek an Mods und Addon Maps enthält, die von der Community erstellt wurden.

:::tip
Da BeamMP eine Multiplayer-Modifikation für BeamNG.Drive ist, sollten die meisten Addon Maps mit deinem BeamMP-Server kompatibel sein. Es ist jedoch möglich, dass bestimmte Maps nicht wie erwartet funktionieren, sodass du jede Map einzeln testen musst.
:::

## Installation

Stelle zunächst sicher, dass du eine Addon Map heruntergeladen hast, die du deinem Server hinzufügen möchtest. Diese sollte im `.zip`-Dateiformat vorliegen.

### Auswählen der Map

Bevor du mit dem nächsten Schritt fortfährst, musst du sicherstellen, dass du den richtigen Mapnamen verwendest. Die heruntergeladene `.zip`-Datei sollte normalerweise den richtigen Namen haben, dies ist jedoch nicht immer der Fall, weshalb du dies überprüfen solltest.

Dazu musst du die heruntergeladene `.zip`-Datei öffnen. Suche und öffne in der Datei das Verzeichnis `levels`, das die eigentliche Map enthält.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Du musst den spezifischen Namen des Addon Maps Ordners in diesem Verzeichnis kopieren. Klicke dazu mit der rechten Maustaste, wähle die Option `eigenschaften` aus und kopiere den markierten Text mit `STRG + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Konfigurieren der Map

Nachdem du den Mapnamen bestimmt hast, musst du die Konfigurationsdatei und einen Parameter anpassen, der die aktive Map enthält.

Dies kann ganz einfach durch Navigieren zum Abschnitt **Configs** im Webinterface deines Gameservers erfolgen.

![](https://screensaver01.zap-hosting.com/index.php/s/QnQHKiaG6oia3qJ/preview)

Suche und öffne die Konfigurationsdatei `ServerConfig.toml` und suche nach der Zeile `Map = "/levels/gridmap_v2/info.json"`.

![](https://screensaver01.zap-hosting.com/index.php/s/PiatDsnqPpoiZr4/preview)

Danach ersetzt du den Wert durch `Map = "/levels/[your_mapname]/info.json"` unter Verwendung des zuvor festgelegten Mapnamen und speicherst dann die Konfiguration.

![](https://screensaver01.zap-hosting.com/index.php/s/kFgGEKgrXTQsqYZ/preview)

:::info
In seltenen Fällen kann eine Map unterschiedlich formatiert sein. Wenn die Map nach dem Ausführen aller Schritte nicht funktioniert, musst du möglicherweise anstelle von `Map = "/levels/[your_mapname]/info.json"` diesen Pfad angeben: `Map = "/levels/[your_mapname]/[your_mapname].mis"`
:::

:::tip
Du kannst jederzeit die Standardmaps des Spiels verwenden, indem du die Konfigurationsdatei erneut bearbeitest. Unten findest du eine Liste der aktuellen Standardmaps.
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

### Map hochladen

Als letzten Schritt musst du die zuvor heruntergeladene `.zip`-Datei mit der Map per FTP auf deinen BeamMP Gameserver hochladen. Wenn du dabei Hilfe benötigst, verwende bitte erneut unsere [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung.

Suche in deinem FTP-Client den folgenden Pfad.
```
../beammp/Resources/Client
```

Ziehe die `.zip`-Datei der Addon Map einfach per Drag-and-drop an diesen Speicherort, um die Map auf deinen Server hochzuladen. Nachdem du die Konfigurationsdatei bearbeitet und die Addon Map hochgeladen hast, sollte deine Addon Map einsatzbereit sein.

## Abschluss

Nachdem du alle Schritte ausgeführt hast, starte deinen BeamMP-Server neu. Du hast erfolgreich eine Addon Map auf deinem BeamMP Gameserver installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
