---
id: satisfactory-commands
title: "Satisfactory: Konsolenbefehle"
description: "Entdecke, wie du dein Satisfactory-Gameplay mit wichtigen Konsolenbefehlen und Keybind-Tipps optimierst → Jetzt mehr erfahren"
sidebar_label: Konsolenbefehle
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Satisfactory bietet eine Vielzahl nützlicher Befehle, mit denen Spieler ihre Client-Einstellungen anpassen können. Auf dieser Seite fassen wir die beliebten und hilfreichen Befehle zusammen, die von Spielern in Satisfactory häufig genutzt werden.

<InlineVoucher />

## Zugriff auf die Konsole
Die Konsole in Satisfactory zu öffnen ist super easy: Drücke einfach die `-Taste (Backtick, die über der TAB-Taste liegt), um zwischen der Sichtbarkeit der Konsole zu wechseln. Die Konsole wird entweder geschlossen, als kleines Befehlsfenster unten angezeigt oder komplett aufgeklappt, je nachdem wie oft du die Taste drückst.

:::info
Falls die Backtick-Taste bei dir nicht funktioniert, folge den Schritten im nächsten Abschnitt, um eine neue Tastenkombination einzurichten und zu aktivieren.
:::

### Konsole lässt sich nicht öffnen
Manchmal funktioniert die Standard-Backtick-Taste wegen regionaler Tastaturlayouts nicht. Dann musst du eine neue Taste festlegen. Bevor du das machst, schließe Satisfactory, falls es läuft.

Drücke `Windows-Taste + R` oder suche im Startmenü nach `Ausführen`. Kopiere dann folgenden Pfad hinein:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Öffne die Datei `Input.ini` mit einem Texteditor (z.B. Notepad).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Füge dann die folgende Zeile ganz unten ein:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Speichere die Datei und starte dein Spiel neu. Ab jetzt kannst du die Konsole mit der Taste `F6` öffnen.

## Konsolenbefehle

Die Tabelle zeigt den Befehl selbst, die akzeptierten Werte (falls vorhanden) und eine Beschreibung, damit du besser verstehst, was der Befehl macht.

Um die komplette Liste aller Befehle anzuzeigen, gib `?` in der Konsole ein. Es erscheint eine schwebende Liste mit allen verfügbaren Befehlen. Du kannst mit den Pfeiltasten `HOCH` und `RUNTER` darin navigieren.

Ein Beispiel, wie das mit `?` aussieht, findest du hier:

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Alle hier genannten Befehle gelten für die Vanilla-Version von Satisfactory.
:::

| Befehlssyntax                  | Akzeptierte Werte | Beschreibung | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | Zeigt die komplette Liste aller Befehle an         | 
| Stat FPS      | -          | Schaltet den eingebauten FPS-Zähler im Spiel an oder aus         | 
| Stat UNIT      | -          | Zeigt eine Anzeige mit Framezeit, Spieldaten, Renderzeit und weiteren Stats         | 
| t.MaxFPS "maxfps"      | Ganzzahl (z.B. 120)          | Legt die maximale FPS deines Spiels fest         | 
| r.ScreenPercentage "value"      | Ganzzahl (Standard 100)          | Ändert die Skalierung der Bildschirmauflösung (nur für die Welt-Renderung, nicht für die UI)         | 
| r.ViewDistanceScale "value"      | Ganzzahl (Standard 1)          | Ändert die Sichtweite, also wie weit Objekte wie Steine oder Bäume gerendert werden         | 
| Suicide      | -          | Tötet deinen eigenen Spieler         | 
| FOV "value"      | Ganzzahl (z.B. 90)          | Legt das Sichtfeld (Field of View) deines Spiels fest         | 
| r.Atmosphere "1 oder 0"      | true (1)/false (0)          | Schaltet die Atmosphäre im Spiel an oder aus        | 
| r.Fog "1 oder 0"      | true (1)/false (0)          | Schaltet den Nebel im Spiel an oder aus         | 
| Gamma "value"      | Ganzzahl (Standard 50)          | Legt die Helligkeit deines Spiels fest         | 

Für eine ausführliche Liste mit noch mehr Befehlen schau am besten auf [die Satisfactory Wiki](https://satisfactory.fandom.com/wiki/Console), die viele technische Befehle detailliert erklärt.

<InlineVoucher />