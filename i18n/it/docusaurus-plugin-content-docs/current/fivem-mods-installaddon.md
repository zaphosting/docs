---
id: fivem-mods-installaddon
title: "FiveM: Addon Carmods auf Server installieren"
description: "Entdecke, wie du ganz easy Carmods für FiveM runterlädst und konvertierst, um dein Spielerlebnis zu pimpen – Schritt-für-Schritt Anleitung → Jetzt mehr erfahren"
sidebar_label: Addon Carmods installieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Als erstes verbindest du dich via FTP mit deinem Server. Dafür kannst du unseren Guide [Zugriff via FTP](gameserver-ftpaccess.md) nutzen.

## Vorbereitung

Für dieses Tutorial nutzen wir das Tool [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), das den Prozess mega vereinfacht. Lade dir dafür die Ordner „NConvert.zip“ und „rpf2fivem.zip“ aus dem Bereich „Releases“ runter:

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Jetzt entpackst du zuerst rpf2fivem in einen leeren Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Dann öffnest du die NConvert.zip und kopierst den Ordner „NConvert“ in denselben Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Jetzt kannst du die `rpf2fivem.exe` starten!

## Mods herunterladen

Um Mods mit rpf2fivem zu installieren, fügst du direkte Download-Links ein, z.B. von gta5-mods.com. Such dir einfach den Carmod aus, den du willst, und klick auf „Download“.

Dann machst du einen Rechtsklick auf den Download-Button und wählst „Link-Adresse kopieren“. Diesen Link fügst du oben links in rpf2fivem ein:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Hier kannst du deinem Resource-Namen einen eigenen Namen geben und auf „Add to queue“ klicken.

Wenn du noch mehr Mods laden willst, kannst du einfach weitere Links auf dieselbe Weise hinzufügen – mehrere Carmods lassen sich gleichzeitig installieren.

## Mods konvertieren

Wenn deine Mod-Liste fertig ist, klickst du einfach auf den „Start“-Button.

:::info
Tipp: Der Haken bei „compress/downsize textures“ sollte immer gesetzt sein, damit es keine Texture-Fehler bei den Carmods in FiveM gibt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Jetzt werden die Carmods runtergeladen und für FiveM vorbereitet.

## Ressourcen hochladen

Nach dem Abschluss findest du die Carmods im Ordner „rpf2fivem“:

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Diese kannst du jetzt ganz easy via [Ressourcen installieren](fivem-installresources.md) hochladen. Im rpf2fivem-Ordner findest du außerdem eine `servercfg.txt` mit den Einträgen, die du direkt in deine server.cfg kopieren kannst, um die Carmods zu aktivieren.

Fertig! Die Carmods sind jetzt auf deinem Server installiert und nach einem Server-Neustart einsatzbereit.

<InlineVoucher />