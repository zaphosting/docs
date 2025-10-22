---
id: fivem-gamebuild
title: "FiveM: DLC-Inhalte aktivieren"
description: "Entdecke, wie du bestimmte DLC-Versionen auf deinem FiveM-Gameserver erzwingst, um die neuesten Maps, Fahrzeuge und Inhalte zu nutzen → Jetzt mehr erfahren"
sidebar_label: DLC Gamebuild aktivieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Erzwingen eines Gamebuilds erlaubt es dir, eine bestimmte DLC-Version auf deinem Server festzulegen, damit du mit den neuesten Maps, Outfits, Fahrzeugen und mehr zocken kannst!

<InlineVoucher />

## Verfügbare Gamebuilds

Hier findest du eine Übersicht aller verfügbaren DLCs und deren Build IDs:

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
|   3570   |        Money Fronts       |



## Gamebuild aktivieren

Um zusätzliche DLC-Inhalte wie Cayo Perico, das Tuner DLC oder Los Santos Summer Special zu nutzen, musst du das in der Konfiguration deines Servers einstellen. Öffne dazu dein txAdmin Interface und gehe zu den FXServer Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Füge nun einfach deinen gewünschten Gamebuild im Bereich **Additional Arguments** mit dem set-Befehl hinzu, wobei du `BUILD_ID_CHOICE` durch eine ID aus der Tabelle ersetzt:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Fazit

Nachdem du deine Wahl getroffen hast, starte deinen FiveM-Gameserver neu. Dein Server startet jetzt mit dem angegebenen DLC-Gamebuild. Du hast erfolgreich einen Gamebuild für deinen FiveM-Gameserver gesetzt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />