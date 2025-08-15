---
id: satisfactory-blueprints
title: "Satisfactory: Verwalten von Blueprints (Import/Export)"
description: Informationen über die Verwaltung von Blueprints für deinen Satisfactory Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label:  Blueprints verwalten
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Satisfactory verfügt über ein benutzerdefiniertes Blueprint-System, mit dem die Nutzer Baupläne erstellen und mit anderen Community-Mitgliedern teilen können. Diese Baupläne reichen von effizienten Fabrikplänen bis hin zu aufwendig gestalteten Lounges und komplexen Eisenbahnsystemen.

Eine große Auswahl an Bauplänen ist auf der Website von Satisfactory Calculator verfügbar. Baupläne können problemlos importiert und exportiert werden.

<InlineVoucher />



## Blueprints verwalten

Die Verwaltung von Blueprints auf einem Satisfactory Server erfolgt ausschließlich über FTP. Wenn du noch nicht damit vertraut bist, wie du dich per FTP mit deinem Server verbinden kannst, schau dir bitte unsere separate [FTP-Zugriff](gameserver-ftpaccess.md) Anleitung an, um den Einstieg zu finden.

### Blueprints importieren
Zunächst musst du dir die Blueprint-Dateien besorgen, die du hochladen möchtest. Diese bestehen aus einer „sbp“-Datei und optional aus einer zugehörigen „sbpcfg“-Konfigurationsdatei. Diese Dateien können aus vertrauenswürdigen Community-Quellen stammen oder von anderen Spielinstanzen erstellt werden.

Bevor du mit dem Upload fortfährst, ist es empfehlenswert, den Server über die Serververwaltung komplett herunterzufahren. Dadurch wird sichergestellt, dass während des Uploads keine Dateikonflikte oder Speicherprobleme auftreten.

Verbinde dich dann mit einem FTP-Client mit dem Server. Sobald du angemeldet bist, navigiere zum Blueprints-Verzeichnis:

 ```
 /gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
 ```

Innerhalb dieses Verzeichnisses muss es einen Unterordner geben, der genau nach der verwendeten Welt (oder Sitzung) benannt ist. Dieser Name entspricht dem Namen der auf dem Server gespeicherten `.sav`-Datei. Wenn der Ordner noch nicht existiert, muss er manuell unter Verwendung des exakten Namens der Save-Datei erstellt werden.

Sobald der richtige Unterordner vorbereitet ist, lädst du die Blueprint-Dateien in diesen Ordner hoch. Es ist wichtig, dass sowohl die `.sbp` als auch, falls vorhanden, die `.sbpcfg`-Datei enthalten sind. Nachdem der Upload abgeschlossen ist, startest du den Server neu. Sobald er wieder läuft, sind die hochgeladenen Blueprints im Spiel über die Blueprint-Designer-Schnittstelle verfügbar, so dass du auf sie zugreifen und sie normal verwenden kannst.

### Blueprints exportieren

Um Blueprints von einem Satisfactory Server zu exportieren, musst du die Blueprint-Dateien vom Server herunterladen und sie lokal auf deinem PC speichern. Beginne damit, den Server herunterzufahren, um sicherzustellen, dass die Blueprint-Dateien in einem konsistenten und zugänglichen Zustand bleiben. Öffne deinen FTP-Client und verbinde dich mit dem Server und navigieren zu dem Verzeichnis:

````
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
````

Suchen den Unterordner, der der Welt/Sitzung entspricht, aus der du die Blueprints exportieren möchtest. In diesem Ordner findest du die Datei „sbp“ und die optionale Datei „sbpcfg“, die zu jedem gespeicherten Entwurf gehören.

Lade die gewünschten Blueprint-Dateien mit dem FTP-Client direkt auf deinen lokalen Computer herunter.  Sobald die Übertragung abgeschlossen ist, kannst du die Dateien archivieren, sie lokal öffnen oder in eine andere Installation oder Serverumgebung importieren. Wenn du vorhast, die Blueprints auf einem anderen Server wiederzuverwenden, befolge das gleiche, oben beschriebene Importverfahren.



## Abschluss

Die Verwaltung von Blueprints auf einem Satisfactory Server ist ein unkomplizierter Prozess, wenn du die dokumentierten Schritte befolgst. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂



