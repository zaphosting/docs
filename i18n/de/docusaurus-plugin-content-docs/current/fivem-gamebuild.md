---
id: fivem-gamebuild
title: "FiveM: DLC-Inhalte aktivieren"
description: Informationen zur Aktivierung eines DLC Game Builds für FiveM Server - ZAP-Hosting.com - Dokumentation
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

| Build ID |        Build Name         |
| :------: | :-----------------------: |
|   2060   | Los Santos Summer Special |
|   2189   |        Cayo Perico        |
|   2372   |         Tuner DLC         |
|   2545   |       The Contract        |
|   2699   | The Criminal Enterprises  |
|   2802   |   Los Santos Drug Wars    |
|   2944   |  San Andreas Mercenaries  |
|   3095   |       The Chop Shop       |
|   3258   |  Bottom Dollar Bounties   |
|   3407   |    Agents of Sabotage     |


## Build aktivieren

Um zusätzliche DLC-Inhalte wie Cayo Perico, den Tuner-DLC oder Los Santos Summer Special zu verwenden, musst du dies in der Konfiguration deines Servers festlegen. Um den DLC Build zu setzen, musst du dein txAdmin-Interface öffnen und zu den FXServer-Einstellungen navigieren. ![](https://screensaver01.zap-hosting.com/index.php/s/PfQ59DJ7B6DnpYi/preview)

Füge nun einfach deinen gewünschten Gamebuild im Abschnitt **Zusätzliche Argumente** mittels des set-Befehls hinzu und ersetze dabei `BUILD_ID_CHOICE` durch einen Wert aus der Tabelle:

```
+set sv_enforceGameBuild BUILD_ID_AUSWAHL
```



## Abschluss

Wenn du deine Wahl getroffen hast, starte deinen FiveM Server neu. Dein Server startet nun mit dem angegebenen DLC-Build. Du hast erfolgreich ein Game Build für deinen FiveM Gameserver eingestellt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
