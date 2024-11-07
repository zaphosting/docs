---
id: vserver-windows-python
title: 'vServer: Installation von Python'
description: Informationen darüber, wie man Python auf deinem Windows-Server von ZAP-Hosting.com installiert und ausführt -  ZAP-Hosting.com Dokumentation
sidebar_label: Python installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung liefert Schritte zur Installation der Python-Laufzeitumgebung auf Windows. Die unten aufgeführten Schritte müssen über RDP ausgeführt werden. Wenn du nicht weißt, wie man sich über RDP mit deinem Server verbindet, schau dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

<InlineVoucher />

## Installation

### Schritt 1: Dateien herunterladen
Öffne den Browser deiner Wahl und navigiere zu [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Klicke nun auf den `Python [Version] herunterladen`-Button und warte, bis der Download abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Schritt 2: Python installieren
Starte den Installer, indem du darauf klickst. Nun wirst du aufgefordert, einige Einstellungen für die Installation vorzunehmen. Achte darauf, dass das Kontrollkästchen `python.exe zum PATH hinzufügen` am unteren Rand markiert ist (dies erleichtert später das Ausführen von Python-Dateien) und klicke auf den Button `Jetzt installieren`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Schritt 3: Installation abschließen
Warte, bis alle Dateien installiert sind. Hab Geduld, denn das kann etwas dauern. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Sobald es fertig ist, drücke einfach auf `Schließen` und du kannst anfangen, Python auf deinem Server zu verwenden.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Code ausführen

Jetzt, da du Python auf deinem Server installiert hast, kannst du beginnen, deine Python-Programme auszuführen.

### Interpreter-Modus

Das Ausführen des `python`-Befehls in einer Eingabeaufforderung oder PowerShell-Instanz startet nun den Python-Interpreter. Du kannst nach dem `>>>`-Präfix gültigen Python-Code schreiben, der nach dem Drücken von `Enter` ausgeführt wird. Du kannst den Interpreter schließen, indem du `exit()` in die Konsole eingibst oder einfach die Eingabeaufforderung schließt.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### .py-Dateien ausführen

Um `.py` Python-Dateien auszuführen, kannst du einfach den Befehl `python3 [dateiname].py` verwenden, wobei `[dateiname]` durch den Pfad zum gewünschten Dateinamen ersetzt wird, den du ausführen möchtest. Dies wird wiederum über eine Eingabeaufforderung oder PowerShell-Instanz durchgeführt.

:::tip
Die meisten Programme, die du online finden kannst, werden mit `python3 main.py` ausgeführt, da `main.py` der übliche Startpunkt der meisten Python-Programme ist.
:::

Du kannst auch einfach Python (.py) Dateien öffnen oder mit der rechten Maustaste klicken und Python direkt über Windows auswählen.

## Virtuelle Umgebungen

Wenn du ein Python-Programm schreibst, musst du möglicherweise externe Pakete von pip installieren. Diese können global installiert werden, sodass sie für alle `.py`-Skripte zugänglich sind, oder du kannst eine virtuelle Umgebung (venv) erstellen.

### Die venv erstellen

Navigiere zuerst mit dem Datei-Explorer zu dem Ordner, in dem du deine venv einrichten möchtest, und führe, sobald du bereit bist, `python -m venv .` aus, das die erforderlichen Dateien am aktuellen Standort installiert.

### Aktivieren & Deaktivieren

Um Befehle wie `pip install` innerhalb deiner venv auszuführen, musst du sie aktivieren, indem du `.\Scripts\activate` ausführst. Nun wird deine Konsole nur innerhalb der venv arbeiten und Skripte haben nur Zugang zu lokal installierten Paketen.

Wenn du mit der Arbeit in der venv fertig bist, kannst du mit dem Befehl `deactivate` zurückkehren.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Abschluss

Glückwunsch, du hast Python erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!