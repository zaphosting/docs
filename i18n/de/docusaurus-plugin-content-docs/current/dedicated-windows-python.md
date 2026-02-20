---
id: dedicated-windows-python
title: 'Python auf einem Windows Server einrichten – Entwicklung und Automatisierung starten'
description: "Lerne, wie du die Python-Laufzeit auf Windows Servern installierst und einrichtest, um deine Python-Programme effizient auszuführen → Jetzt mehr erfahren"
sidebar_label: Python installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du die Python-Laufzeit auf Windows installierst. Die folgenden Schritte müssen per RDP ausgeführt werden. Falls du nicht weißt, wie du dich per RDP mit deinem Server verbindest, schau dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

## Installation

### Schritt 1: Dateien herunterladen
Öffne deinen Lieblingsbrowser (ich nutze für diese Anleitung Chrome) und gehe auf [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Klicke jetzt auf den Button `Download Python [Version]` und warte, bis der Download abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Schritt 2: Python installieren
Starte den Installer per Klick. Nun wirst du aufgefordert, einige Einstellungen für die Installation vorzunehmen. Achte darauf, dass die Checkbox `Add python.exe to PATH` unten aktiviert ist (das macht das Ausführen von Python-Dateien später viel einfacher) und klicke dann auf `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Schritt 3: Installation abschließen
Warte, bis alle Dateien installiert sind. Hab etwas Geduld, das kann einen Moment dauern. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Wenn die Installation fertig ist, klicke einfach auf `Close` und du kannst Python auf deinem Server nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Code ausführen

Jetzt, wo Python auf deinem Server installiert ist, kannst du deine Python-Programme starten.

### Interpreter-Modus

Wenn du den Befehl `python` in der Eingabeaufforderung oder PowerShell eingibst, startet der Python-Interpreter. Du kannst jetzt jeden gültigen Python-Code nach dem `>>>`-Prompt eingeben, der nach Drücken von `Enter` ausgeführt wird. Den Interpreter kannst du mit `exit()` oder einfach durch Schließen des Fensters beenden.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### .py Dateien ausführen

Um `.py` Python-Dateien auszuführen, kannst du einfach den Befehl `python3 [Dateiname].py` verwenden, wobei du `[Dateiname]` durch den Pfad zur gewünschten Datei ersetzt. Das machst du ebenfalls in der Eingabeaufforderung oder PowerShell.

:::tip
Die meisten Programme, die du online findest, kannst du mit `python3 main.py` starten, da `main.py` oft der Einstiegspunkt der meisten Python-Programme ist.
:::

Du kannst Python (.py) Dateien auch einfach durch Doppelklick öffnen oder per Rechtsklick direkt über Windows mit Python starten.

## Virtuelle Umgebungen

Beim Programmieren mit Python brauchst du oft externe Pakete, die du mit pip installierst. Diese kannst du global installieren, sodass alle `.py` Skripte darauf zugreifen können, oder du erstellst eine virtuelle Umgebung (venv).

### venv erstellen

Navigiere zuerst im Datei-Explorer in den Ordner, in dem du deine venv einrichten möchtest. Dort führst du dann `python -m venv .` aus, um die nötigen Dateien am aktuellen Ort zu installieren.

### Aktivieren & Deaktivieren

Um Befehle wie `pip install` innerhalb deiner venv auszuführen, musst du sie aktivieren mit `.\Scripts\activate`. Ab jetzt läuft deine Konsole nur noch innerhalb der venv und Skripte greifen nur auf lokal installierte Pakete zu.

Wenn du fertig bist, kannst du die venv mit dem Befehl `deactivate` wieder verlassen.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Fazit

Glückwunsch, du hast Python erfolgreich installiert! Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂