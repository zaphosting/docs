---
id: fivem_esx_disablehud
title: FiveM ESX Server: HUD deaktivieren/aktivieren
description: Informationen, wie du das HUD auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktiveren/aktivieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: HUD deaktivieren
---

## 📔 Überschreiben erzwingen Ausstellen

Wir müssen zuerst sichergehen dass "Überschreiben erzwingen" deaktiviert ist.
Dafür gehen wir auf den TAB "Ressourcen".

![](https://screensaver01.zap-hosting.com/index.php/s/6ZXxWHN4wCE6WcE/preview)

Dort entfernen wir dir dann den Haken.

![](https://screensaver01.zap-hosting.com/index.php/s/gQ885gn4qkCyxbi/preview)

## 📑 Config finden und bearbeiten

Haben wir das erledigt öffnen wir die Config Seite und suchen dort dann nach es_extended.
Drücke dafür einfach STRG + F und suche nach `es_`
Dann solltest du es schnell finden.
Diese bearbeiten wir dann.

![](https://screensaver01.zap-hosting.com/index.php/s/gNyanXGeexobkeC/preview)

Nun schauen wir nach: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/25HfeCciXc3wRZr/preview)

Diese setzen wir dann auf false und speichern dann die Datei.

Anschließend öffnen wir die Server.cfg.
Diese finden wir auch auf der Config Seite
Dort suchen wir wieder mit STR + F nach es_
Wir suchen dann nach es_ui und löschen diese Zeile komplett raus.
Nun speichern wir diese wieder.


Wenn ihr das geschafft habt müsst ihr nur noch den Server neustarten, danach wird das HUD Deaktiviert sein.
