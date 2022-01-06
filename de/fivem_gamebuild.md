---
id: fivem_gamebuild
title: DLC aktivieren
description: Anleitung, wie du ein spezielles Build aktivierst
sidebar_label: DLC Gamebuild aktivieren

---

## 🔧 Aktivierung bei FiveM Windows oder Linux
Um die Inhalte von Cayo Perico, dem Tuner DLC  oder dem Los Santos Summer Special zu nutzen, ist es notwendig diese in den Einstellungen zu aktivieren.
Die Einstellungen deines Servers findest du im Menü.

![](https://screensaver01.zap-hosting.com/index.php/s/JCdpYxDoc2E3XdD/preview)

Scrolle dann bis ziemlich zum Ende deiner Einstellungen runter, dort findest du den Menüpunkt Enforce Game Build.

![](https://screensaver01.zap-hosting.com/index.php/s/zZsspsbd7TpEA43/preview)

Hier kannst du zwischen den verschiedenen Builds wählen. Danach speichere deine Änderung und starte den Server neu.
Der erweiterte Inahlt steht dir nun zur Verfügung

## 🔧 Aktivierung bei txAdmin
Um die Inhalte auf einem txAdmin Server zu aktivieren, muss in den FXServer Einstellungen in deinem Admin-Menü, der Gamebuild dort hinzugefügt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/z4F6jjfr6CyRWHm/preview)

Füge einfach unter Additional Arguments 

```
+set sv_enforceGameBuild ID
```

hinzu und speichere die Änderungen, sowie starte den Server neu.

Aktuelle Builds:

- Build 2060 Los Santos Summer Special
- Build 2189 Cayo Perico
- Build 2372 Tuner DLC
