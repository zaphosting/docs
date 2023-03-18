---
id: fivem_gamebuild
title: DLC aktivieren
description: Anleitung, wie du ein spezielles Build aktivierst
sidebar_label: DLC Gamebuild aktivieren

---

## Aktivierung bei FiveM Windows oder Linux
Um die Inhalte von Cayo Perico, dem Tuner DLC  oder dem Los Santos Summer Special zu nutzen, ist es notwendig diese in den Einstellungen zu aktivieren.
Die Einstellungen deines Servers findest du im Menü.

![image](https://user-images.githubusercontent.com/13604413/159138053-e9b031f6-0316-4330-9ffa-be661259b6ce.png)

Scrolle dann bis ziemlich zum Ende deiner Einstellungen runter, dort findest du den Menüpunkt Enforce Game Build.

![image](https://user-images.githubusercontent.com/13604413/159138054-48f0b832-e2ae-45ea-9f3b-67ee9c55cc6e.png)

Hier kannst du zwischen den verschiedenen Builds wählen. Danach speichere deine Änderung und starte den Server neu.
Der erweiterte Inahlt steht dir nun zur Verfügung

## Aktivierung bei txAdmin
Um die Inhalte auf einem txAdmin Server zu aktivieren, muss in den FXServer Einstellungen in deinem Admin-Menü, der Gamebuild dort hinzugefügt werden.

![image](https://user-images.githubusercontent.com/13604413/159138094-9d72159c-36f7-4193-aea9-fb1c0260ad04.png)

Füge einfach unter Additional Arguments 

```
+set sv_enforceGameBuild ID
```

hinzu und speichere die Änderungen, sowie starte den Server neu.

Aktuelle Builds:

| Build ID | Build Name                |
| :------: | :-----------------------: |
| 2060     | Los Santos Summer Special |
| 2189     | Cayo Perico               |
| 2372     | Tuner DLC                 |
| 2545     | The Contract              |
| 2699     | The Criminal Enterprises  |
| 2802     | Los Santos Drug Wars      |
