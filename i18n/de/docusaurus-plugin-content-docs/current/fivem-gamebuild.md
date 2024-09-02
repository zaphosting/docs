---
id: fivem-gamebuild
title: "FiveM: DLC-Inhalte aktivieren"
description: Informationen zur Aktivierung eines DLC Gamebuilds für FiveM Server - ZAP-Hosting.com - Dokumentation
sidebar_label: DLC-Inhalte aktivieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Erzwingung des Game Builds ermöglicht es dir, eine bestimmte DLC-Version auf deinem Server zu erzwingen, sodass du mit den neuesten Karten, Kleidungsstücken, Fahrzeugen und mehr spielen kannst! Du kannst dies einfach umsetzen, indem du die unten stehenden Abschnitte für deinen Gameserver-Typ aktivierst.

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
|   3258   |   Bottom Dollar Bounties  |


## Buld aktivieren mit FiveM (Linux/Windows)

Um zusätzliche DLC-Inhalte wie Cayo Perico, den Tuner-DLC oder Los Santos Summer Special zu verwenden, musst du diese in den Einstellungen deines Servers festlegen. Du kannst dies entweder direkt tun, indem du die Datei `server.cfg` bearbeitest, oder der einfachere Weg ist, dies über den Abschnitt **Settings** im Webinterface deines Gameservers zu ändern.

![image](https://github.com/zaphosting/docs/assets/42719082/1f138326-75f0-4681-8290-ec83312179c3)



Du solltest nun entweder nach "Game Build" suchen oder einfach nach unten scrollen, bis du den Unterabschnitt **Enforce Game Build** findest. Hier kannst du über das Dropdown-Menü auswählen, mit welchem DLC-Build du deinen Server betreiben möchtest. 

Wenn du deine Wahl getroffen hast, gehe zum Ende der Seite und drücke den Button **Speichern**, dann starte deinen FiveM Server neu. Dein Server wird jetzt mit dem angegebenen DLC-Build starten. Du hast erfolgreich ein Gamebuild für deinen FiveM Gameserver eingestellt!



## Buld aktivieren mit FiveM TxAdmin

Um den Inhalt auf einem txAdmin Server zu aktivieren, musst du dein txAdmin-Interface öffnen und zu den FXServer-Einstellungen navigieren. ![image](https://screensaver01.zap-hosting.com/index.php/s/PfQ59DJ7B6DnpYi/preview)



Füge nun einfach deinen gewünschten Gamebuild im Abschnitt **Zusätzliche Argumente** mittels des set-Befehls hinzu und ersetze dabei `BUILD_ID_CHOICE` durch einen Wert aus der Tabelle:

```
+set sv_enforceGameBuild BUILD_ID_AUSWAHL
```

Wenn du deine Wahl getroffen hast, starte deinen FiveM Server neu. Dein Server startet nun mit dem angegebenen DLC-Build. Du hast erfolgreich ein Gamebuild für deinen FiveM Gameserver eingestellt!