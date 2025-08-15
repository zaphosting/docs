---
id: fivem-esx-disablehud
title: "FiveM: HUD deaktivieren/aktivieren"
description: Informationen, wie du das HUD auf deinem FiveM-Server mit ESX von ZAP-Hosting deaktiveren/aktivieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: HUD deaktivieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, nicht mehr korrekt oder nicht mehr auf dem neuesten Stand sind. Es wurde aus den folgenden Gründen archiviert:

**Grund**: Die Methode zur Umsetzung ist für eine ältere ESX-Version. Dieser Ansatz kann nicht für die aktuelle ESX-Version verwendet werden, da sich die Struktur verändert hat. 
::::



<InlineVoucher />

## Config finden und bearbeiten

Haben wir das erledigt, öffnen wir die Config Seite und suchen dort dann nach es_extended.
Drücke dafür einfach STRG + F und suche nach `es_`
Dann solltest du es schnell finden.
Diese bearbeiten wir dann.

![](https://screensaver01.zap-hosting.com/index.php/s/G3HN9ff2w7Sc2fb/preview)

Nun schauen wir nach: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/xb4XsdJRWdKAeBa/preview)

Diese setzen wir dann auf false und speichern dann die Datei.

Anschließend öffnen wir die Server.cfg.
Diese finden wir auch auf der Config Seite
Dort suchen wir wieder mit STR + F nach es_
Wir suchen dann nach es_ui und löschen diese Zeile komplett raus.
Nun speichern wir diese wieder.


Wenn ihr das geschafft habt, müsst ihr nur noch den Server neu starten, danach wird das HUD deaktiviert sein.

<InlineVoucher />
