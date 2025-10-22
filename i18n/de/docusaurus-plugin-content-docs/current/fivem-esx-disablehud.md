---
id: fivem-esx-disablehud
title: "FiveM: HUD deaktivieren/aktivieren"
description: "Verstehe, wie du deine ESX-Serverkonfiguration für ein besseres HUD-Management und verbesserte Serverperformance anpasst → Jetzt mehr erfahren"
sidebar_label: HUD deaktivieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, falsch oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

**Grund**: Die Umsetzungs-Methode basiert auf einer veralteten ESX-Version. Dieser Ansatz funktioniert nicht mit der aktuellen ESX-Version, da sich die Struktur geändert hat. 
::::



<InlineVoucher />

## 📑 Config finden und bearbeiten

Sobald wir das gemacht haben, öffnen wir die Config-Seite und suchen nach es_extended.
Drück einfach STRG + F und such nach es_extended.
Dann findest du es bestimmt schnell.
Wir arbeiten an diesen Einträgen.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Schauen wir uns jetzt Config.EnableHUD an.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Wir setzen den Wert auf false und speichern die Datei.

Dann öffnen wir die Server.cfg.
Die findest du auch auf der Config-Seite.
Dort suchen wir wieder mit STRG + F nach es_
Dann suchen wir nach es_ui und löschen diese Zeile komplett.
Jetzt speichern wir erneut.

Wenn du das gemacht hast, musst du nur noch den Server neu starten – fertig.

<InlineVoucher />