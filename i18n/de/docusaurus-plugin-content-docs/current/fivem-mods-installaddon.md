---
id: fivem-mods-installaddon
title: "FiveM: Addon Carmods auf dem Server installieren"
description: "Entdecke, wie du ganz easy Carmods für FiveM runterlädst und konvertierst, um dein Spielerlebnis zu pimpen – mit Schritt-für-Schritt Anleitung → Jetzt mehr erfahren"
sidebar_label: Addon Carmods installieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Als erstes solltest du dich per FTP mit deinem Server verbinden. Dafür kannst du unseren [Zugang via FTP](gameserver-ftpaccess.md) nutzen.

## Vorbereitung

Für dieses Tutorial verwenden wir das Tool [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), das den Prozess mega vereinfacht. Lade dafür die Ordner "NConvert.zip" und "rpf2fivem.zip" aus dem Bereich "Releases" runter:

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Jetzt entpacken wir zuerst rpf2fivem in einen leeren Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Dann öffnen wir die NConvert.zip und kopieren den Ordner "NConvert" in denselben Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Jetzt können wir `rpf2fivem.exe` starten!

## Mods herunterladen

Um Mods mit rpf2fivem zu installieren, müssen wir direkte Links hinzufügen, z.B. von gta5-mods.com. Dort suchst du dir einfach den Carmod aus, den du willst, und klickst auf "Download".

Dann machst du einen Rechtsklick auf den Download-Button und wählst "Linkadresse kopieren". Diesen Link fügst du oben links in rpf2fivem ein:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Hier kannst du deinem Resource-Namen einen eigenen Namen geben und auf "Add to queue" klicken.

Wenn du noch mehr Mods runterladen willst, kannst du sie einfach genauso hinzufügen. So kannst du mehrere Carmods gleichzeitig installieren:

## Mods konvertieren

Wenn du eine Liste mit Mods hast, drückst du einfach auf den "Start"-Button.

:::info
Tipp: Der Haken bei 'compress/downsize textures' sollte immer gesetzt sein, damit die Carmods keine Texture-Fehler in FiveM bekommen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Jetzt werden die Carmods runtergeladen und für FiveM vorbereitet.

## Ressourcen hochladen

Wenn rpf2fivem fertig ist, findest du die Carmods im Ordner "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Diese kannst du jetzt einfach über [Ressourcen installieren](fivem-installresources.md) hochladen. Im rpf2fivem-Ordner wird auch eine `servercfg.txt` erstellt, die alle Einträge enthält, um die Carmods direkt in die server.cfg einzufügen. Diese Einträge kannst du einfach in deine server.cfg kopieren.

Fertig! Die Carmods sind jetzt auf deinem Server installiert und können nach einem Server-Neustart genutzt werden.

<InlineVoucher />