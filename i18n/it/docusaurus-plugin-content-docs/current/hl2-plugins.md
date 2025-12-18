---
id: hl2-plugins
title: "Half-Life 2: Plugin auf deinem eigenen Server installieren"
description: "Entdecke, wie du deinen Gameserver mit Sourcemod und Metamod anpasst und erweiterst für bessere Verwaltung und Features → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/hl2-plugins.json';


## Einführung

Lerne, wie du Sourcemod und Metamod installierst und Plugins auf deinem Server nutzt. Beide Erweiterungen ermöglichen es dir, Games wie CS:S, CS:GO, DoD:S oder TF2 zu individualisieren und die Serververwaltung deutlich zu erweitern.

Mit Sourcemod und Metamod kannst du Plugins hinzufügen, spezielle Features aktivieren und deinen Server genau nach deinen Wünschen anpassen.

<InlineVoucher />



## Sourcemod / Metamod Installation

### Vorbereitung

Die benötigten Erweiterungen kannst du dir von [Sourcemod](https://sourcemod.net/) und [Metamod](https://www.sourcemm.net/downloads.php?branch=stable) herunterladen. Nutze immer die aktuellsten **stabilen** Versionen, um volle Funktionalität und Kompatibilität sicherzustellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Du brauchst die Linux-Pakete **Sourcemod** und **Metamod**. Lade sie von den angegebenen Quellen runter. Nach dem Download hast du zwei komprimierte Dateien. Entpacke sie auf deinem PC, sodass du einen addons-Ordner mit den `sourcemod` und `metamod` Verzeichnissen bekommst.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installation

Wenn du die Schritte erledigt hast, kannst du mit der Installation starten. Lade die Dateien per FTP mit einem FTP-Client auf deinen Server hoch. Falls du FTP noch nicht kennst, schau dir unseren Guide an: [Zugriff via FTP](gameserver-ftpaccess.md)

Danach lädst du den **addons**-Ordner in das Hauptverzeichnis deines Servers hoch. Die Ordnerstruktur sollte dann so aussehen:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

Die Einrichtung von **Sourcemod** und **Metamod** ist jetzt abgeschlossen. Verbinde dich im Spiel mit deinem Server und gib im Konsolenfenster den Befehl ``sm version`` ein, um zu prüfen, ob Sourcemod und Metamod erfolgreich installiert wurden. Die Ausgabe sollte so aussehen:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Wenn die Meldung **Unknown command** erscheint, ist bei der Installation etwas schiefgelaufen.



## Plugins Installation

### Vorbereitung

Sobald Sourcemod und Metamod installiert und funktionsfähig sind, kannst du mit dem Hinzufügen von Plugins starten. Lade die Plugins, die du auf deinem Server installieren möchtest, von [Sourcemod](https://sourcemod.net/) herunter. Dort findest du eine große und stetig wachsende Sammlung, die über die Jahre veröffentlicht wurde. Für jedes Plugin brauchst du die passende .smx-Datei.

### Installation

Hast du die gewünschten Plugins runtergeladen, kannst du sie installieren. Lade die Plugin-Dateien per FTP in folgendes Verzeichnis hoch:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Beliebte Plugins
Du suchst noch die perfekten Plugins für deinen Server? Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und meist empfohlenen Plugins, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.
<SearchableItemList items={items} />


## Fazit

Wenn du alle Schritte befolgt hast, solltest du Sourcemod/Metamod und deine Wunsch-Plugins erfolgreich installiert haben. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />