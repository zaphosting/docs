---
id: minecraft-faultyworld
title: "Minecraft: Fehlerhafte Chunks aus der Welt entfernen"
description:  Informationen darüber, wie man fehlerhafte Chunks aus seiner Minecraft-Welt  von ZAP-Hosting entfernt - ZAP-Hosting.com Dokumentation
sidebar_label: Fehlerhafte World (Chunks)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Deine Welt ist teilweise überladen oder fehlerhaft und das schränkt das Spielgeschehen ein, sodass du nicht mehr richtig spielen kannst? Das kann der Fall sein, wenn es in bestimmten Bereichen deiner Welt zu viele Gegenstände enthält oder wenn sie generell beschädigte Chunks aufweist. Ein Chunk-Fehler ist eine recht häufige Schwierigkeit in Minecraft, die auftritt, wenn ein Chunk nicht korrekt geladen wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Vorbereitung

Es gibt verschiedene Tools, mit denen man Minecraft-Welten bearbeiten kann. Eines der gängigsten Tools ist [MCA Selector] (https://github.com/Querz/mcaselector), welches für diese Anleitung verwendet wird. Lade dazu die Datei `MCA_Selector_Setup.exe` herunter.

Außerdem benötigst du die Dateien aus deiner Welt auf deinem Computer. Die Welt kann über FTP heruntergeladen werden. Wenn du mit der Verwendung von FTP nicht vertraut sind, empfehlen wir dir, einen Blick in unsere Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Lade das Verzeichnis `world` aus dem Verzeichnis des Spieleservers herunter. 



## Welt laden

Sobald du das Tool und die Welt heruntergeladen hast, kannst du nun die Welt in das Tool importieren. Klicke dazu im Tool in der Navigation auf `File -> Open World`. Anschließend sollte deine Welt wie im Beispiel zu sehen sein. 

:::info
Je nach Koordinaten kann es sein, dass du erst mit der Maus herauszoomen musst, um den entsprechenden Bereich zu finden. 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)



## Chunk(s) entfernen
Du kannst einzelne Kästchen (Chunks) mit einem Mausklick auswählen. Suche und markiere die Chunks, die für dich problematisch sind und gelöscht werden sollen. Klicke dann in der Navigation auf `Selection -> Delete selected Chunks`.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

Damit sind die ausgewählten Chunks gelöscht und du kannst die Welt nun wieder per FTP auf deinen Server hochladen. 

## Abschluss
Glückwunsch, du hast die fehlerhaften Chunks erfolgreich entfernt und solltest in der Lage sein, auf dieser Welt wieder richtig spielen zu können. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
