---
id: dedicated-iso
title: "Dedicated Server: Eigene ISO"
description: Informationen, wie du eine eigene ISO-Datei auf deinen Dedicated Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Eigene ISO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du möchtest eine ISO mounten? Eventuell eine von uns oder doch lieber eine eigene? Das ist kein Problem. Wir bieten eine große Auswahl an ISO Dateien an und bieten auch weitere Möglichkeiten an. 

:::warning Auswahl und Verwendung von ISO-Dateien
Bei der Verwendung einer eigenen ISO (OS), die wir nicht aktiv anbieten, können wir die Funktionalität bei eventuellen Problemen nicht garantieren. 
:::

<InlineVoucher />

## Verfügbare Mounting Optionen
Es gibt zwei verschiedene Wege, eine eigene ISO einzubinden. Bei allen Wegen ist es erforderlich, dass der Server neu gestartet wird.
Grundsätzlich gibt es keine Beschränkungen, welche ISOs eingebunden werden können, solange diese bootfähig sind funktionieren sie.

### Einbinden über die iLO
Öffne deine iLO Verwaltungsoberfläche, navigiere zum Menü "Virtual Media" und öffne dieses.
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Trage die URL zu deiner ISO-Datei ein, bitte beachte, dass diese URL zwingend mit .iso enden muss.
* Klicke auf "Insert Media"
* Klicke auf "Server Reset" (Startet deinen Server neu)

Deine ausgewählte ISO wird nun geladen.

### Einbinden über eine Remote Console

**HTML5 Console**
Das Einbinden der ISO-Datei erfolgt direkt in der Console selbst:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Klicke auf das CD-Symbol
* Wähle CD/DVD aus
* Wähle zwischen "Scripted media URL" oder "Local *.iso file"

Der Unterschied zwischen Scripted media URL oder Local *.iso file besteht darin, dass wie bei der vorherigen Variante die ISO Datei auf einen Webspace/Server hochgeladen werden muss.
Bei der Auswahl "Local *.iso file" kannst du direkt eine Datei von deinem Computer einbinden, ohne weitere Schritte.

Wenn du deine ISO erfolgreich geladen hast, muss der Server neu gestartet werden.

**Java Console**
Wie auch bei der HTML5 Console wird die ISO-Datei auch in der Java Console direkt eingebunden.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Öffne "Virtual Drives"

Der Unterschied zwischen "Image File CD/DVD-ROM" und "URL CD/DVD-ROM" ist wie auch bei der HTML5-Console, dass über "Image File CD/DVD-ROM" direkt eine Datei von deinem Computer hochgeladen werden kann.

Nach erfolgtem Laden der ISO-Datei muss der Server neu gestartet werden.


## Abschluss

Glückwunsch, du hast erfolgreich erfolgreich eine ISO Datei ausgewählt und gemountet. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
