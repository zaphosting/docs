---
id: dedicated-windows-python
title: 'Dedicated Server: Installation von Python'
description: "Lerne, wie du die Python-Laufzeit auf Windows-Servern installierst und einrichtest, um deine Python-Programme effizient auszuführen → Jetzt mehr erfahren"
sidebar_label: Python installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du die Python-Laufzeit auf Windows installierst. Die untenstehenden Schritte müssen per RDP ausgeführt werden. Falls du nicht weißt, wie du dich per RDP mit deinem Server verbindest, schau dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

<InlineVoucher />

## Installation

### Schritt 1: Dateien herunterladen
Öffne deinen Lieblingsbrowser (ich nutze für diese Anleitung Chrome) und gehe auf [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Klicke jetzt auf den Button `Download Python [Version]` und warte, bis der Download abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Schritt 2: Python installieren
Starte den Installer durch einen Klick darauf. Nun wirst du aufgefordert, ein paar Einstellungen für die Installation vorzunehmen. Achte darauf, dass die Checkbox `Add python.exe to PATH` unten aktiviert ist (das macht das Ausführen von Python-Dateien später viel einfacher) und klicke dann auf den Button `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Schritt 3: Installation abschließen
Warte, bis alle Dateien installiert sind. Hab Geduld, das kann einen Moment dauern. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Wenn die Installation fertig ist, klicke einfach auf `Close` und du kannst Python auf deinem Server nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Code ausführen

Jetzt, wo Python auf deinem Server installiert ist, kannst du deine Python-Programme starten.

### Interpreter-Modus

Wenn du den Befehl `python` in der Eingabeaufforderung (Command Prompt) oder PowerShell eingibst, startet der Python-Interpreter. Du kannst jetzt jeden gültigen Python-Code nach dem `>>>`-Prompt eingeben, der nach Drücken von `Enter` ausgeführt wird. Den Interpreter kannst du mit `exit()` oder einfach durch Schließen des Fensters beenden.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Ausführen von .py-Dateien

Um `.py` Python-Dateien auszuführen, kannst du einfach den Befehl `python3 [Dateiname].py` verwenden, wobei du `[Dateiname]` durch den Pfad zur gewünschten Datei ersetzt. Das machst du ebenfalls in der Eingabeaufforderung oder PowerShell.

:::tip
Die meisten Programme, die du online findest, kannst du mit `python3 main.py` starten, da `main.py` der übliche Einstiegspunkt der meisten Python-Programme ist.
:::

Du kannst Python (.py) Dateien auch einfach durch Doppelklick öffnen oder per Rechtsklick direkt über Windows mit Python starten.

## Virtuelle Umgebungen

Beim Programmieren mit Python brauchst du oft externe Pakete, die du über pip installierst. Diese kannst du global installieren, sodass alle `.py`-Skripte darauf zugreifen können, oder du erstellst eine virtuelle Umgebung (venv).

### venv erstellen

Navigiere zuerst im Datei-Explorer in den Ordner, in dem du deine venv einrichten möchtest. Dort führst du dann `python -m venv .` aus, um die nötigen Dateien im aktuellen Verzeichnis zu installieren.

### Aktivieren & Deaktivieren

Um Befehle wie `pip install` in deiner venv auszuführen, musst du sie aktivieren, indem du `.\Scripts\activate` eingibst. Ab jetzt laufen alle Befehle nur noch innerhalb der venv und Skripte greifen nur auf lokal installierte Pakete zu.

Wenn du fertig bist, kannst du die venv mit dem Befehl `deactivate` wieder verlassen.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Fazit

Glückwunsch, du hast Python erfolgreich installiert! Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />