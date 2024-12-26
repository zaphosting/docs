---
id: beammp-addon-map
title: "BeamMP: Addon Map installieren"
description: Informationen, wie du eine Addon Map für deinen BeamMP Server von ZAP-Hosting installieren kannst  - ZAP-Hosting.com Dokumentation
sidebar_label: Addon Map installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Manchmal sind die Standartmaps, welche von den Spieleentwicklern angeboten werden, nicht aufregend genug oder werden nach gewisser Zeit langweilig. Daher gibt es einige Leute in der Community, welche neue Maps für das Spiel erstellen und sie kostenlos zur Verfügung stellen.
Willst du von deiner langweiligen Standartmap auf eine neue, aufregende Addon Map auf dem Internet umsteigen? Dann bist du hier genau richtig!

BeamMP ist eine Mehrspieler-Modifikation für das Einzelspieler-Spiel BeamNG.drive. Daher sind die Maps, welche für das Basisspiel erstellt wurden, ebenfalls mit BeamMP kompatibel.
Dadurch dass BeamNG.drive eine große Community hat, gibt es auch eine Menge an Addon Maps im Internet. Die populärste Quelle dafür ist das [BeamNG Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/).

<InlineVoucher />

## Vorbereitung

Um eine Addon Map auf deinem BeamMP Server installieren zu können, musst du dich zuerst via FTP mit deinem Server verbinden. Du benötigst ein FTP-Programm, um die Dateien auf deinen Server hochladen zu können. Falls du nicht weißt wie das funktioniert, empfehlen wir dir die Anleitung für den [Zugriff per FTP](https://zap-hosting.com/guides/de/docs/gameserver-ftpaccess/) anzuschauen.

## Installation

### Genauen Mapnamen herausfinden

Der erste Schritt, um eine Addon Map installieren zu können und diese auch korrekt in der Konfigurationsdatei einzustellen, ist den genauen Mapnamen herauszufinden.
Das ZIP-Archiv welches man herunterlädt, ist öfters schon richtig benannt, manchmal jedoch nicht, weshalb man du auf Nummer sicher gehen solltest und es manuell nochmal prüfst.

Um den genauen Mapnamen herauszufinden, öffnest du das heruntergeladene Archiv und öffnest den `levels` Ordner, welcher sich darin befindet.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Dann musst du den Namen des Ordners, welcher sich im `levels` Verzeichnis befindet, kopieren. Du kannst das machen, indem du `Rechtsklick` auf den Ordner machst und auf `Eigenschaften` drückst. Dann kannst du den hervorgehobenen Text mit `STRG + C` kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Konfigurationsdatei richtig einstellen

Dadurch, dass du nun den genauen Mapnamen hast, musst du diesen nur noch in der Config als Standartmap setzen.

#### Deaktivieren der Standartmap-Einstellung

Bevor du den Mapnamen in der Config anpassen kannst, musst du die Standartmap-Auswahl in den Einstellungen deaktivieren, da die Configänderung sonst überschrieben wird.

Dafür musst du zur Seite **Einstellungen** im Webinterface wechseln.

![](https://screensaver01.zap-hosting.com/index.php/s/92J8Qn2QcRjEx3G/preview)

Dort deaktivierst du dann die Option "Karte".

![](https://screensaver01.zap-hosting.com/index.php/s/QDm6Ma6mArSPAGN/preview)

Als nächstes speicherst du die Einstellungen am Ende der Seite.

#### Ändern der Map in der Config

Nun musst du zur **Configs** Seite im Webinterface wechseln.

![](https://screensaver01.zap-hosting.com/index.php/s/QnQHKiaG6oia3qJ/preview)

Dort angekommen, öffnest du die `ServerConfig.toml` und suchst nach dem Wert `Map = "/levels/gridmap_v2/info.json"`.

![](https://screensaver01.zap-hosting.com/index.php/s/PiatDsnqPpoiZr4/preview)

Sobald du diesen gefunden hast, ersetzt du ihn durch `Map = "/levels/[your_mapname]/info.json"`, nutzt aber den Mapnamen, welchen wir im vorherigen Schritt kopiert haben und speicherst die Config:

![](https://screensaver01.zap-hosting.com/index.php/s/kFgGEKgrXTQsqYZ/preview)

:::info
In seltenen Fällen kann es sein, dass die Ordnerstruktur der Map sich unterscheidet. Sollte die Map nicht funktionieren, nachdem du alle Schritte durchgeführt hast, musst du statt `Map = "/levels/[dein_mapname]/info.json"` folgenden Wert verwenden: `Map = "/levels/[dein_mapname]/[dein_mapname].mis"`
:::

### Map auf den Server hochladen

Der letzte Schritt besteht darin, das ZIP-Archiv der Map auf den Server zu laden. Dies ist via FTP möglich.
Du musst das Archiv in folgenden Pfad hochladen:

```
/gXXXXXX/beammp/Resources/Client
```

:::tip
Solltest du zu einer der Standartmaps wechseln wollen, kannst du die Einstellung einfach wieder aktivieren und eine der Maps auswählen:
![](https://screensaver01.zap-hosting.com/index.php/s/5yii3i9PA4ADA8G/preview)
:::

## Abschluss

Nachdem du alle Schritte befolgt hast, starte deinen BeamMP Server neu. Du hast nun erfolgreich eine Addon Map auf deinem BeamMP Server installiert!