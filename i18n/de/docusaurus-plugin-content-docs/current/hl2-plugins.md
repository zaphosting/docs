---
id: hl2-plugins
title: "Half-Life 2: Plugins auf deinem eigenen Server installieren"
description: "Informationen zur Installation von Plugins auf deinem Half-Life 2 Server von ZAP-Hosting ZAP-Hosting.com Dokumentation"
sidebar_label: "Plugins installieren"
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/hl2-plugins.json';

## Einleitung

Erfahre, wie du Sourcemod und Metamod installierst und wie du Plugins für deinen Server verwendest. Beide Erweiterungen ermöglichen es dir, Spiele wie CS:S, CS:GO, DoD:S oder TF2 anzupassen und die verfügbaren Optionen für die Serververwaltung deutlich zu erweitern. 

Mit Sourcemod und Metamod kannst du Plugins hinzufügen, besondere Funktionen aktivieren und deinen Server genau an deine Vorstellungen anpassen.

<InlineVoucher />



## Sourcemod / Metamod Installation

### Vorbereitung

Die erforderlichen Erweiterungen können von [Sourcemod](https://sourcemod.net/) und [Metamod](https://www.sourcemm.net/downloads.php?branch=stable) heruntergeladen werden. Verwende immer die neuesten **stabilen** Versionen, um volle Funktionalität und Kompatibilität sicherzustellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Du benötigst die Linux Pakete **Sourcemod** und **Metamod**. Lade diese von den angegebenen Quellen herunter. Nach dem Download solltest du zwei komprimierte Dateien haben. Entpacke diese auf deinem Computer, sodass ein addons Verzeichnis mit den Ordnern `sourcemod` und `metamod` entsteht.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installation

Sobald die oben genannten Schritte abgeschlossen sind, kannst du mit der Installation fortfahren. Lade die Dateien per FTP mit einem FTP Client auf deinen Server hoch. Falls du mit FTP und der Funktionsweise nicht vertraut bist, nutze folgende Anleitung: [Zugriff per FTP](gameserver-ftpaccess.md)

Lade anschließend den Ordner **addons** in das Hauptverzeichnis deines Servers hoch. Die Ordnerstruktur sollte dann wie folgt aussehen:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

Die Einrichtung von **Sourcemod** und **Metamod** ist nun abgeschlossen. Du kannst dich im Spiel mit deinem Server verbinden und in der Konsole den Befehl ``sm version`` verwenden, um zu prüfen, ob Sourcemod und Metamod erfolgreich installiert wurden. Die Ausgabe sollte wie folgt aussehen:

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

Wenn die Meldung **Unknown command** angezeigt wird, ist bei der Installation etwas schiefgelaufen. 



## Plugin Installation

### Vorbereitung

Sobald Sourcemod und Metamod installiert sind und korrekt funktionieren, kannst du mit dem Hinzufügen von Plugins beginnen. Lade die Plugins, die du auf deinem Server installieren möchtest, von [Sourcemod](https://sourcemod.net/) herunter. Dort findest du eine große und stetig wachsende Sammlung, die über die Jahre veröffentlicht wurde. Achte bei jedem Plugin darauf, die zugehörige .smx Datei zu erhalten.

### Installation

Nachdem du die gewünschten Plugins heruntergeladen hast, kannst du mit der Installation fortfahren. Dies erfolgt per FTP, indem du die Plugin Dateien in folgendes Verzeichnis hochlädst:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)


## Beliebte Plugins

Noch auf der Suche nach den perfekten Plugins für deinen Server? Durchstöbere unsere sorgfältig zusammengestellte Liste mit den beliebtesten und am häufigsten empfohlenen Plugins, um dein Spielerlebnis zu erweitern und deinem Server den letzten Feinschliff zu geben. Lass dich inspirieren und finde genau die Erweiterungen, die zu deinem Projekt passen.

<SearchableItemList items={items} />

## Abschluss

Wenn du alle Schritte befolgt hast, solltest du Sourcemod/Metamod und deine gewünschten Plugins erfolgreich installiert haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
