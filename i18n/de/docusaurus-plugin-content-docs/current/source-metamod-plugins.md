---
id: source-metamod-plugins
title: Plugins installieren
description: "Entdecke, wie du Sourcemod-Plugins effektiv verwaltest und Fehler behebst, um die Performance deines Servers zu verbessern → Jetzt mehr erfahren"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Installation

Hier erfährst du, wie du Plugins installierst. Um Plugins nutzen zu können, brauchst du Sourcemod / Metamod. Eine Anleitung zur Installation findest du hier: [Installation](source-metamod-installation.md)



Um Plugins zu installieren, musst du sie per FTP hochladen. Die Plugin-Dateien müssen in das **Plugins** Verzeichnis unter **../addons/sourcemod/** hochgeladen werden. Je nach Komplexität des Plugins gibt es möglicherweise schon Konfigurations- und Übersetzungsdateien. Falls ja, müssen diese in die Ordner **configs** und **translations** hochgeladen werden.



## Plugins deaktivieren / entfernen

Im **Plugins** Verzeichnis findest du einen Unterordner namens **disabled**. Dort kannst du Plugins reinlegen, die vorübergehend nicht geladen werden sollen. Es reicht, die entsprechende **.smx** Datei dorthin zu verschieben.



Wenn du ein Plugin dauerhaft deaktivieren willst, musst du die entsprechenden Plugin-Dateien löschen. Das Plugin wird dann nach einem Mapwechsel oder Serverneustart deaktiviert.



## Häufige Probleme


**Warum funktioniert mein installiertes Plugin nicht?**

Lösungen:

- Stelle sicher, dass alle Voraussetzungen bei der Plugin-Installation erfüllt sind. Manche Plugins benötigen eine Datenbank, um richtig zu funktionieren. In dem Fall musst du weitere Anpassungen an der **database.cfg** im config-Verzeichnis vornehmen.
- Änderungen an der Source Engine passieren regelmäßig. Ein Plugin, das schon lange veröffentlicht, aber nicht gepflegt wurde, kann daher inkompatibel sein. Dann bleibt meist nur, im Alliedmodders Forum nach einer inoffiziellen Fix-Version zu suchen oder generell ein alternatives Plugin zu nutzen.
- Wenn keine der obigen Optionen hilft, schau am besten in die Live-Konsole oder die Logdateien. Dort findest du meistens die Ursache des Problems.

<InlineVoucher />