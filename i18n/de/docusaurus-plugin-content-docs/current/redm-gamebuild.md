---
id: redm-gamebuild
title: "RedM: DLC-Inhalte aktivieren"
description: Informationen zur Aktivierung eines DLC Game Builds für RedM Server - ZAP-Hosting.com - Dokumentation
sidebar_label: DLC-Inhalte aktivieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Erzwingung des Game Builds ermöglicht es dir, eine bestimmte DLC-Version auf deinem Server zu erzwingen, sodass du mit den neuesten Karten, Kleidungsstücken, Fahrzeugen und mehr spielen kannst! 

<InlineVoucher />

## Verfügbare Gamebuilds

Hier findest du eine Übersicht über alle verfügbaren DLCs und dessen Build-IDs:

| Build ID |                          Build Name                          |
| :------: | :----------------------------------------------------------: |
|   1311   | Mid 2020 update, not compatible with Red Dead Online licenses. |
|   1355   | December 2020 update, works with newer game editions such as RDO. |
|   1436   | July 2021 update, includes new content from Blood Money DLC. |
|   1491   |       September 2022 update, limited content/changes.        |


## Build aktivieren

Um zusätzliche DLC-Inhalte wie Blood Money DLC zu verwenden, musst du dies in der Konfiguration deines Servers festlegen. Um den DLC Build zu setzen, musst du dein txAdmin Interface öffnen und zum CFG Editor navigieren. Stelle nun einfach dein gewünschtes Spiel Build über den Befehl `sv_enforceGameBuld` mit einem der Builds aus der Tabelle ein.

![img](https://screensaver01.zap-hosting.com/index.php/s/YoRFMoHxdSNydoD/preview)





## Abschluss

Wenn du deine Wahl getroffen hast, starte deinen RedM Server neu. Dein Server startet nun mit dem angegebenen DLC-Build. Du hast erfolgreich ein Game Build für deinen RedM Gameserver eingestellt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
