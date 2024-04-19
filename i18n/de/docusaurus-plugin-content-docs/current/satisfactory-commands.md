---
id: satisfactory-commands
title: "Satisfactory: Konsolen-Befehle"
description: Informationen zu den möglichen Konsolenbefehlen für deinen Satisfactory Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Konsolen-Befehle
---

In Satisfactory gibt es viele nützliche Befehle, mit denen du die Einstellungen deines Clients anpassen kannst. Auf dieser Seite fassen wir die beliebtesten und nützlichsten Befehle zusammen, die von Spielern in Satisfactory häufig verwendet werden.

## Zugriff auf die Konsole
Die Verwendung der Konsole in Satisfactory ist sehr einfach: Drücke einfach die Taste ` (der Akut befindet sich neben der Rücktaste), um zwischen der Sichtbarkeit der Konsole zu wechseln. Die Konsole wird entweder geschlossen, mit einem kleinen Befehlsfenster am unteren Rand geöffnet oder ganz ausgeklappt, wenn du umschaltest.

:::info
Wenn die Akut-Taste bei dir nicht funktioniert, befolge die Schritte im folgenden Unterabschnitt, um eine neue Tastenkombination festzulegen und zu aktivieren.
:::

### Zugriff auf die Konsole nicht möglich
Aufgrund regionaler Tastaturen kann es vorkommen, dass die Standardtaste für die Aktivierung der Konsole nicht funktioniert, sodass du eine neue Taste einrichten musst. Bevor du dies tust, schließe Satisfactory, falls es noch läuft.

Drücke Windows-Taste + R oder suche in deinem Startmenü nach Ausführen. Kopiere dann den folgenden Pfad hinein:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Öffne die Datei Input.ini mit einem Texteditor (z.B. Notepad)

![Screenshot 2023-02-22 011634](https://user-images.githubusercontent.com/42719082/220495653-6109d259-e31a-429f-aeda-b6c2ca2f495b.png)

Kopiere nun genau diese Zeilen und füge sie unten ein:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://user-images.githubusercontent.com/42719082/220495816-401b59b6-7c1b-434a-a878-bc5988f44519.png)

Speichere abschließend und starte dein Spiel neu. Nun kannst du die Konsole mit der Tastenkombination `F6` öffnen

## Konsolenbefehle

Die Tabelle besteht aus dem Befehl selbst, den akzeptierten Werten für den Befehl (falls zutreffend) und einer Beschreibung, um es leichter zu verstehen.

Um die gesamte Liste der Befehle anzuzeigen, verwende `?` in der Konsole, wodurch eine schwebende Liste aller verschiedenen Befehle angezeigt wird. Mit den Pfeiltasten `HOCH` und `RUNTER` kannst du in dieser Liste navigieren.

Ein Beispiel für die Verwendung von `?` zur Anzeige aller Befehle ist unten zu sehen.

![Screenshot 2023-02-22 015435](https://user-images.githubusercontent.com/42719082/220500871-e1ea0303-718d-4552-9173-3ea2f66669f2.png)

:::info
Jeder Befehl, der auf dieser Seite erwähnt wird, ist für Vanille Satisfactory.
:::

| Befehlssyntax                   | Akzeptierte Werte | Beschreibung | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | Dies zeigt die gesamte Liste der Befehle an         | 
| Stat FPS      | -          | Schaltet den eingebauten FPS-Zähler im Spiel ein und aus         | 
| Stat UNIT      | -          | Schaltet eine Anzeige ein, die die Frame-Zeit, die Spieldaten, die Draw-Zeit und einige andere Statistiken anzeigt         | 
| t.MaxFPS "maxfps"      | Zahl (z.B. 120)          | Legt die maximalen FPS des Spiels fest         | 
| r.ScreenPercentage "value"      | Zahl (default 100)          | Ändert die Skalierung der Bildschirmauflösung (nur für das Rendering der Welt, nicht der UI)         | 
| r.ViewDistanceScale "value"      | Zahl (default 1)          | Ändert die Renderdistanz, aus der Objekte wie Felsen oder Bäume gerendert werden         | 
| Suicide      | -          | Töte deinen eigenen Spieler          | 
| FOV "value"      | Zahl (z.B. 90)          | Legt das Sichtfeld (FOV) des Spiels fest         | 
| r.Atmosphere "1 or 0"      | true (1)/false (0)          | Schaltet um, ob die Atmosphäre für das Spiel eingeschaltet ist        | 
| r.Fog "1 or 0"      | true (1)/false (0)          | Schaltet ein, ob der Nebel für das Spiel eingeschaltet ist         | 
| Gamma "value"      | Zahl (default 50)          | Legt den Helligkeitsgrad des Spiels fest          | 

Du findest eine umfassende Liste der Befehle im [Satisfactory wiki](https://satisfactory.fandom.com/wiki/Console). Dort werden verschiedene Befehle ausführlich beschrieben.
