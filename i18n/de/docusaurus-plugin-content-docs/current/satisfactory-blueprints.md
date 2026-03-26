---
id: satisfactory-blueprints
title: "Satisfactory: Blueprints verwalten (Import/Export)"
description: "Entdecke, wie du individuelle Blueprints erstellst, teilst und verwaltest für effiziente Satisfactory-Bauten und Layouts → Jetzt mehr erfahren"
sidebar_label:  Blueprints verwalten
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Satisfactory bietet ein eigenes Blueprint-System, mit dem du Baupläne erstellen und mit anderen Community-Mitgliedern teilen kannst. Diese Blueprints reichen von effizienten Fabriklayouts über aufwendig gestaltete Lounges bis hin zu komplexen Eisenbahnsystemen.

Eine große Auswahl an Blueprints findest du auf der Satisfactory Calculator Webseite. Blueprints lassen sich ganz easy importieren und exportieren.

<InlineVoucher />

## Blueprints verwalten

Das Verwalten von Blueprints auf deinem Satisfactory-Gameserver läuft komplett über FTP. Falls du noch nicht weißt, wie du dich per FTP mit deinem Server verbindest, schau dir am besten unsere separate [FTP-Zugang](gameserver-ftpaccess.md) Anleitung an, um loszulegen.

### Blueprints importieren

Zuerst brauchst du die Blueprint-Dateien, die du hochladen möchtest. Diese bestehen aus einer `.sbp` Datei und optional einer zugehörigen `.sbpcfg` Konfigurationsdatei. Die Dateien stammen entweder aus vertrauenswürdigen Community-Quellen oder wurden aus anderen Spiel-Instanzen exportiert.

Bevor du die Dateien hochlädst, solltest du den Server komplett über dein Server-Management-Interface herunterfahren. So vermeidest du Datei-Konflikte oder Speicherprobleme während des Uploads.

Verbinde dich anschließend mit einem FTP-Client zum Server. Navigiere dann in das Blueprint-Verzeichnis:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

In diesem Verzeichnis muss ein Unterordner existieren, der exakt den Namen der Welt (oder Session) trägt, die du nutzt. Dieser Name entspricht dem Namen der `.sav` Datei auf dem Server. Falls der Ordner noch nicht existiert, musst du ihn manuell mit genau diesem Namen anlegen.

Ist der richtige Unterordner bereit, lade die Blueprint-Dateien in diesen Ordner hoch. Wichtig: Sowohl die `.sbp` als auch, falls vorhanden, die `.sbpcfg` Datei müssen dabei sein. Nach dem Upload startest du den Server neu. Sobald er wieder läuft, sind die hochgeladenen Blueprints im Spiel über den Blueprint Designer verfügbar und können ganz normal genutzt werden.

### Blueprints exportieren

Blueprints vom Satisfactory-Gameserver zu exportieren bedeutet, die Blueprint-Dateien vom Server herunterzuladen und lokal auf deinem PC zu speichern. Fahre dafür zuerst den Server herunter, damit die Dateien in einem konsistenten und zugänglichen Zustand sind. Öffne deinen FTP-Client und verbinde dich mit dem Server. Navigiere zum Verzeichnis:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Finde den Unterordner, der zur Welt/Session gehört, aus der du Blueprints exportieren möchtest. In diesem Ordner findest du die `.sbp` Datei sowie optional die `.sbpcfg` Datei zu jedem gespeicherten Blueprint.

Lade die gewünschten Blueprint-Dateien direkt mit dem FTP-Client auf deinen lokalen Rechner herunter. Nach dem Transfer kannst du die Dateien archivieren, lokal öffnen oder in eine andere Installation bzw. Serverumgebung importieren. Wenn du die Blueprints auf einem anderen Server wiederverwenden willst, folge einfach der oben beschriebenen Import-Anleitung.

## Abschluss

Das Verwalten von Blueprints auf deinem Satisfactory-Gameserver ist super easy, wenn du die beschriebenen Schritte befolgst. Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


<InlineVoucher />