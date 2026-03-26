---
id: minecraft-faultyworld
title: "Minecraft: Fehlerhafte Chunks aus der Welt entfernen"
description: "Entdecke, wie du Minecraft Chunk-Fehler behebst und flüssiges Gameplay wiederherstellst, indem du beschädigte Weltbereiche entfernst → Jetzt mehr erfahren"
sidebar_label: Fehlerhafte Welt (Chunks)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Deine Welt ist teilweise überlastet oder fehlerhaft und das limitiert dein Gameplay, sodass du nicht mehr richtig spielen kannst? Das kann passieren, wenn sich zu viele Items in bestimmten Bereichen deiner Welt befinden oder wenn generell beschädigte Chunks vorhanden sind. Ein Chunk-Fehler ist ein relativ häufiger Bug in Minecraft, der auftritt, wenn ein Chunk falsch geladen wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Vorbereitung

Es gibt verschiedene Tools, mit denen Minecraft-Welten bearbeitet werden können. Eines der bekanntesten Tools ist [MCA Selector](https://github.com/Querz/mcaselector), das wir in dieser Anleitung verwenden. Lade dafür die Datei `MCA_Selector_Setup.exe` herunter.

Außerdem brauchst du die Dateien deiner Welt auf deinem PC. Die Welt kannst du per FTP herunterladen. Wenn du mit FTP noch nicht vertraut bist, empfehlen wir dir einen Blick in unsere [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md). Lade das Verzeichnis `world` aus dem Gameserver-Verzeichnis herunter.

## Welt laden

Sobald du das Tool und die Welt heruntergeladen hast, kannst du die Welt ins Tool importieren. Klicke dazu im Tool in der Navigation auf `Datei -> Welt öffnen`. Danach solltest du deine Welt wie in unserem Beispiel sehen.

:::info
Je nach Koordinaten musst du eventuell erst mit der Maus herauszoomen, um den relevanten Bereich zu finden.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## Chunk(s) entfernen

Du kannst einzelne Kästchen (Chunks) mit einem Mausklick auswählen. Suche und markiere die Chunks, die bei dir Probleme machen und gelöscht werden sollen. Klicke dann in der Navigation auf `Auswahl -> Ausgewählte Chunks löschen`.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

Die ausgewählten Chunks wurden nun gelöscht und du kannst die Welt wieder per FTP auf deinen Server hochladen.

## Abschluss

Glückwunsch, du hast die fehlerhaften Chunks erfolgreich entfernt und solltest diese Welt jetzt wieder problemlos spielen können. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />