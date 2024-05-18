---
id: satisfactory-connect
title: "Satisfactory: Zum Server verbinden"
sidebar_label: Zum Server binden
---

import YouTube from '@site/src/components/YouTube/YouTube';

<YouTube videoId="EC4FXT5Mwb8" title="How to create a Satisfactory Server at ZAP and upload your own save-game" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>
:::info
Nutzer eines QWERTY Layouts müssen diese Schritte nicht machen, lediglich STRG + SHIFT + L drücken und mit ~ die Console öffnen
:::

Um auf deinen Satisfactory-Gameserver zu verbinden, musst du die Konsole des Spiels öffnen. Hierzu gibt es zwei verschiedene Wege.

## Das Öffnen der Konsole

### Ändern des Tastatur-Layouts
Mit wenigen Klicks kannst du das Tastatur-Layout verändern.
Zuerst starte Satisfactory bis du im Hauptmenü bist.
Drücke nun die Tasten `ALT + Shift`, dein Tastatur-Layout hat sich nun auf EN gewechselt.
Du kannst ganz einfach kontrollieren ob es funktioniert hat, indem du kurz auf dein Desktop wechselst, rechts unten sollte nun ein `EN` stehen.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Wenn die Änderung erfolgreich war, kannst du wieder in das Spiel zurück, drücke nun `STRG + SHIFT + L`
Als Nächstes klicke, sofern du ein QWERTZ Layout auf deiner Tastatur hast, die Taste `^`

Am unteren Bildschirmrand sollte sich nun die Konsole öffnen

### Verändern der Taste, welche die Konsole öffnet
Drücke `Windows-Taste + R` oder suche im Startmenü nach Ausführen
Kopiere dort diesen Pfad hinein:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

Und bestätige mit Enter.

Öffne die Input.ini mit einem Editor deiner Wahl

:::info
Falls die Datei nicht existiert, kannst du diese einfach erstellen.
:::

Füge folgenden Inhalt hinzu:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Speichere und starte das Spiel neu - Du kannst ab jetzt die Konsole immer mit `F6` öffnen und schließen.

## Verbinden zu deinem Satisfactory Server
Kopiere die IP-Adresse deines Servers in deinem Server Dashboard
![](https://screensaver01.zap-hosting.com/index.php/s/DC9rK9yKfKAHJpW/preview)

Öffne im Spiel die Konsole wie in den vorherigen Schritten beschrieben 

Trage in der Konsole `open IP-Adresse-Deines-Servers` ein.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

und bestätige die Eingabe mit Enter

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Du verbindest dich nun zum Server und kannst darauf spielen!

## Das HUB
Das HUB steht bereits in deiner Welt, du kannst es auf Wunsch mit `F` abbauen und an einem anderen Platz erneut platzieren.
Du findest das HUB ganz einfach, in dem du dich an der Markierung im Spiel orientierst.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
Dein Server speichert alle 5 Minuten automatisch, du kannst alle Saves im Savegame-Manager sehen. Es werden immer die letzten 6 Autosaves deines Servers behalten. Wenn du
deinen Server stoppst, kopiert er das aktuelle Autosave automatisch über dein aktives Savegame, damit beim nächsten Server Start auch der aktuelle Fortschritt geladen wird.
