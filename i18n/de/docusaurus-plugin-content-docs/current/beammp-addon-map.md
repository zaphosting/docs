---
id: beammp-addon-map
title: "BeamMP: Addon-Map installieren"
description: "Entdecke, wie du deinen BeamMP Gameserver mit benutzerdefinierten Map-Addons für ein besseres Multiplayer-Erlebnis aufrüstest → Jetzt mehr erfahren"
sidebar_label: Addon-Map installieren
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

BeamNG.Drive bietet native Modding-Unterstützung und eine riesige Community, die es dir ermöglicht, das Gameplay mit deinen Freunden zu erweitern und zu verbessern. Da BeamMP einfach als Multiplayer-Modifikation fungiert, sollten die meisten Map-Addons mit deinem BeamMP Gameserver kompatibel sein. In dieser Anleitung zeigen wir dir, wie du ein benutzerdefiniertes Map-Addon auf deinem BeamMP Gameserver installierst und aktivierst.

<InlineVoucher />

## Vorbereitung

Um eine Addon-Map auf deinem BeamMP Gameserver zu installieren, musst du dich per FTP verbinden. Falls du damit noch nicht vertraut bist, empfehlen wir dir einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

Bevor du mit der Installation startest, solltest du außerdem Map-Addons finden, die du auf deinem Server installieren möchtest. Wir empfehlen dir, im [offiziellen BeamNG.Drive Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) zu stöbern, das eine riesige Bibliothek an Mods und Map-Addons von der Community enthält.

:::tip
Da BeamMP eine Multiplayer-Modifikation für BeamNG.Drive ist, sollten die meisten Map-Addons mit deinem BeamMP Gameserver kompatibel sein. Es kann jedoch sein, dass manche spezifische Maps nicht wie erwartet funktionieren, daher solltest du jede Map testen.
:::

## Installation

Stelle zuerst sicher, dass du eine Addon-Map im `.zip`-Format heruntergeladen hast, die du auf deinem Server hinzufügen möchtest.

### Map-Name auswählen

Bevor du weitermachst, ist es wichtig, den korrekten Map-Namen zu verwenden. Die heruntergeladene `.zip`-Datei sollte normalerweise den richtigen Namen haben, aber das ist nicht immer der Fall, deshalb solltest du das überprüfen.

Öffne dazu die heruntergeladene `.zip`-Datei. Im Inneren findest du den Ordner `levels`, der die eigentliche Map enthält.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Kopiere den genauen Namen des Map-Addon-Ordners in diesem Verzeichnis. Das geht, indem du mit Rechtsklick auf den Ordner klickst, `Eigenschaften` auswählst und den markierten Text mit `STRG + C` kopierst.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Map konfigurieren

Nachdem du den Map-Namen ermittelt hast, musst du die Konfigurationsdatei anpassen und einen Parameter ändern, der die aktive Map definiert.

#### Config-Override deaktivieren

Zuerst musst du die Standard-Map-Auswahl in den Einstellungen deaktivieren, da diese sonst deine Änderungen überschreibt.

Das geht ganz einfach im **Settings**-Bereich im Webinterface deines Gameservers.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Dort deaktivierst du die Einstellung „Map“.

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Speichere anschließend die Einstellungen unten auf der Seite.

#### Map in der Config ändern

Um die Map in der Config zu ändern, gehst du zuerst in den **Configs**-Bereich im Webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Öffne die Datei `ServerConfig.toml` und suche die Zeile:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Ersetze den Wert durch `Map = "/levels/[dein_mapname]/info.json"` mit dem Map-Namen, den du vorher ermittelt hast, und speichere die Config.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
In seltenen Fällen kann eine Map anders formatiert sein. Wenn die Map nach allen Schritten nicht funktioniert, musst du statt `Map = "/levels/[dein_mapname]/info.json"` diesen Pfad angeben: `Map = "/levels/[dein_mapname]/[dein_mapname].mis"`
:::

:::tip
Du kannst jederzeit die Standard-Maps des Spiels nutzen, indem du die Option in den Einstellungen wieder aktivierst und eine davon auswählst:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Map hochladen

Als letzten Schritt musst du die zuvor heruntergeladene `.zip`-Datei mit der Map per FTP auf deinen BeamMP Gameserver hochladen. Falls du Hilfe brauchst, nutze unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

Navigiere im FTP-Client zu folgendem Pfad:
```
../beammp/Resources/Client
```

Zieh die Map-Addon-`.zip`-Datei einfach per Drag & Drop in diesen Ordner, um die Map auf deinen Server hochzuladen. Mit der bearbeiteten Config und den hochgeladenen Map-Dateien ist dein Map-Addon einsatzbereit.

## Abschluss

Nachdem du alle Schritte befolgt hast, starte deinen BeamMP Gameserver neu. Du hast erfolgreich ein Addon-Map auf deinem BeamMP Gameserver installiert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />