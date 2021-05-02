---
id: satisfactory_connect
title: Zum Server verbinden
sidebar_label: Zum Server binden
---
> Nutzer eines QWERTY Layouts müssen diese Schritte nicht machen, lediglich STRG + SHIFT + L drücken und mit ~ die Console öffnen

Um auf deinen Satisfactory-Gameserver zu verbinden musst du die Console des Spiels öffnen. Hierzu gibt es zwei verschiedene Wege.

## Das Öffnen der Console

### Ändern des Tastatur-Layouts
Mit wenigen Klicks kannst du das Tastatur-Layout verändern.
Zuerst starte Satisfactory bis du im Hauptmenü bist.
Drücke nun die Tasten `ALT + Shift`, dein Tastatur-Layout hat sich nun auf EN gewechselt.
Du kannst ganz einfach kontrollieren ob es funktioniert hat, indem du kurz auf dein Desktop wechselst, rechts unten sollte nun ein `EN` stehen.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Wenn die Änderung erfolgreich war, kannst du wieder in das Spiel zurück, drücke nun `STRG + SHIFT + L`
Als nächstes klicke sofern du ein QWERTZ Layout auf deiner Tastatur hast die Taste `^`

Am unteren Bildschirmrand sollte sich nun die Console öffnen

### Verändern der Taste welche die Console öffnet
Drücke `Windows-Taste + R` oder suche im Startmenü nach Ausführen
Kopiere dort diesen Pfad hinein:

> %LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 

und bestätige mit Enter.

Öffne die Input.ini mit einem Editor deiner Wahl

> Falls die Datei nicht existiert kannst du diese einfach erstellen.

Füge folgenden Inhalt hinzu:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Speichere und starte das Spiel neu - Du kannst ab jetzt die Console immer mit `F6` öffnen und schließen.

## Verbinden zu deinem Satisfactory Server
Kopiere die IP-Adresse deines Server in deinem Server Dashboard
![](https://screensaver01.zap-hosting.com/index.php/s/DC9rK9yKfKAHJpW/preview)

Öffne im Spiel die Console wie in den vorherigen Schritten beschrieben 

Trage nun in der Console `open IP-Adresse-Deines-Servers` ein.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

und bestätige die Eingabe mit Enter

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Du verbindest dich nun zum Server und kannst darauf spielen!

## Das HUB
Das HUB steht bereits in deiner Welt du kannst es auf Wunsch mit `F` abbauen und an einem anderen Platz erneut platzieren.
Du findest das HUB ganz einfach in dem du dich an der Markierung im Spiel orientierst.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
Dein Server speichert alle 5 Minuten automatisch, du kannst alle Saves sehen im Savegame-Manager sehen.
Es werden immer die letzten 6 Saves behalten, was 30 Minuten deines Fortschritts entsprechen.
