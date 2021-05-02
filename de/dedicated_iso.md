---
id: dedicated_iso
title: Eigene ISO
sidebar_label: Eigene ISO
---
> Das einbinden eigener ISO Dateien erfolgt auf eigene Verantwortung

## Welche Möglichkeiten gibt es?
Es gibt zwei verschiedene Wege eine eigene ISO einzubinden. Bei allen Wegen ist es erforderlich das der Server neugestartet wird.
Grundsätzlich gibt es kieine Beschränkungen welche ISOs eingebunden werden können, solange diese bootfähig sind funktionieren sie.

### Einbinden über die iLO
Öffne deine iLO Verwaltungsoberfläche, navigiere zum Menü "Virtual Media" und öffne dieses.
![](https://screensaver01.zap-hosting.com/index.php/s/zHMmYxq45ECe5GL/preview)

* Trage die URL zu deiner ISO-Datei ein, bitte beachte das diese URL mit .iso enden muss.
* Klicke auf "Insert Media"
* Klicke auf "Server Reset" (Startet deinen Server neu)

Deine ausgewählte ISO wird nun geladen.

### Einbinden über eine Remote Console

HTML5 Console
Das Einbinden der ISO-Datei erfolgt direkt in der Console selbst:
![](https://screensaver01.zap-hosting.com/index.php/s/8TFjzAEeqKY628K/preview)

* Klicke auf das CD-Symbol
* Wähle CD/DVD aus
* Wähle zwischen "Scripted media URL" oder "Local *.iso file"

Der Unterschied zwischen Scripted media URL oder Local *.iso file besteht darin das wie bei der vorherigen Variante die ISO Datei auf einen Webspace/Server hochgeladen werden muss.
Bei der Auswahl "Local *.iso file" kannst du direkt eine Datei von deinem Computer einbinden, ohne weitere Schritte.

Wenn du deine ISO erfolgreich geladen hast, muss der Server neugestartet werden.

Java Console
Wie auch bei der HTML5 Console wird die ISO-Datei auch in der Java Console direkt eingebunden.
![](https://screensaver01.zap-hosting.com/index.php/s/x99HAMKGTafEMo9/preview)

* Öffne "Virtual Drives"

Der Unterschied zwischen "Image File CD/DVD-ROM" und "URL CD/DVD-ROM" ist wie auch bei der HTML5-Console das über "Image File CD/DVD-ROM" direkt eine Datei von deinem Computer hochgeladen werden kann.

Nach erfolgtem Laden der ISO-Datei muss der Server neugestartet werden.

