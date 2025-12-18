---
id: 7d2d-mods
title: "7 Days to Die: Installation von Mods"
description: "Entdecke, wie du deinen Server mit beliebten Mods anpasst und das Gameplay für ein einzigartiges Erlebnis verbesserst → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit Mods kannst du deinen Server noch individueller gestalten. Im Folgenden erklären wir dir, wo du die beliebtesten Server-Mods findest und wie du sie einrichtest. Mit der Einführung von Alpha 17 Experimental wurde das Konzept der Modlets eingeführt. Modlets sind kleinere Mods, die die Vanilla-XML-Dateien nicht überschreiben, sondern aus dem Mods-Ordner geladen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Vorbereitung

Als Erstes musst du die Mods herunterladen, die du auf deinem Server installieren möchtest. Eine große Auswahl findest du auf [7daystodiemods.com](https://7daystodiemods.com/). Dort gibt es über 1000 Mods, und es kommen regelmäßig neue hinzu. Wenn du eine Mod heruntergeladen hast, sollte sie folgende Ordnerstruktur enthalten:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Installation

Sobald du die gewünschten Mods heruntergeladen hast, kannst du mit der eigentlichen Installation starten. Die Einrichtung der Mods erfolgt via FTP. Du brauchst einen FTP-Client, um Dateien auf deinen Server hochzuladen. Falls du nicht weißt, was FTP ist und wie es funktioniert, schau dir am besten unseren Guide an: [Zugriff via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

Im Verzeichnis ``/gXXXXX4/7dtd-linux-exp/`` musst du einen Ordner namens **Mods** erstellen. Klicke dazu mit der rechten Maustaste und wähle **Verzeichnis erstellen**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Anschließend müssen die Dateien der Mod in den Mods-Ordner hochgeladen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

Damit ist die Installation der Mod schon abgeschlossen. Beim nächsten Serverstart sollten die Mods dann automatisch geladen werden.

<InlineVoucher />