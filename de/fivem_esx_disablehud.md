---
id: fivem_esx_disablehud
title: FiveM ESX Server: HUD deaktivieren/aktivieren
description: Informationen, wie du das HUD auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktiveren/aktivieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: HUD deaktivieren
---

## 📑 Config finden und bearbeiten

Haben wir das erledigt öffnen wir die Config Seite und suchen dort dann nach es_extended.
Drücke dafür einfach STRG + F und suche nach `es_`
Dann solltest du es schnell finden.
Diese bearbeiten wir dann.

![image](https://user-images.githubusercontent.com/13604413/159166882-9f7ff88e-e82e-4f0f-8942-c729fe037906.png)

Nun schauen wir nach: Config.EnableHUD.

![image](https://user-images.githubusercontent.com/13604413/159166890-39e92b90-cb40-4650-8733-c08fa926775a.png)

Diese setzen wir dann auf false und speichern dann die Datei.

Anschließend öffnen wir die Server.cfg.
Diese finden wir auch auf der Config Seite
Dort suchen wir wieder mit STR + F nach es_
Wir suchen dann nach es_ui und löschen diese Zeile komplett raus.
Nun speichern wir diese wieder.


Wenn ihr das geschafft habt müsst ihr nur noch den Server neustarten, danach wird das HUD Deaktiviert sein.
