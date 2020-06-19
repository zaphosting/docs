---
id: gameserver_restartplaner
title: Restartplaner
sidebar_label: Restartplaner
---

## Restartplaner

Bei dem Restartplaner handelt es sich um eine bei Gameservern angebotene Funktion.
Mit dieser kann im Vorfeld ein automatischer Restart erstellt, damit der Server täglich zur selben Zeit automatisch neugestartet werden kann.

> Diese Funktion ist nur für Gameserver eingebunden

Auffinden kann man diese Funktion daher in dem Gameserver Interface von dem bestellten Gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/2FkbFm3Yg6W2kny/preview)

## ✍️ Neue Einträge erstellen

> ***Hinweis:*** Die Änderungen vom Restartplaner werden nur bei einem Serverneustart übernommen. Nach Fertigstellung aller gewünschten automatischen Neustarts, sollte der Server einmal gestoppt und wieder gestartet werden.
Alternativ können die Änderungen auch direkt bei gestopptem Server durchgeführt werden, diese wären dann nach einem Start aktiv.

Um einen automatischen Neustart einzutragen, muss auf das graue "**+**" Icon geklickt werden

![](https://screensaver01.zap-hosting.com/index.php/s/BQwpCcKbDW4eBTi/preview)

In dem neuen Fenster kann nun zwischen Wöchentlichen und Täglichen Restart gewählt werden.
In unserem Beispiel wollen wir vier Restart pro Tag in einem Abstand von 6 Stunden.
Deswegen wählen wir "**Täglich**" und tragen "**06:00**" ein.
Die Eingabe bestätigen wir mit "**Speichern**"

![](https://screensaver01.zap-hosting.com/index.php/s/9rxf29yQ2oNbLjQ/preview)

Dieser Vorgang wird nun für jeden gewünschten automatischen Neustart wiederholt.
Bei "**24:00**" wird von dem System eine Fehlermeldung angezeigt. Um diesen Fehler zu vermeiden, muss dort stattdessen "**00:00**" genutzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/d8dgKspw7RLWnMF/preview)

###  Offline Server starten

Ist diese Funktion aktiviert, dann wird auch ein gestoppter Server automatisch zum festgelegten Zeitpunkt gestartet.
Bleibt diese Funktion deaktiviert, so wird ein Gameserver von unserem System nur zum festgelegten Zeitpunkt neugestartet, wenn dieser auch vorher "**Online**" war.

## ⏲️ Befehl Funktion

Die Befehle unter den festgelegten automatischen Neustarts, sollen dafür genutzt werden Befehle automatisch durchzuführen kurz bevor der Neustart erfolgt.
Die möglichen Befehle welche genutzt werden können, hängen von dem Spiel ab und was die Spieleentwickler dort für Befehle bereitstellen.

Diese Funktion würde den Befehl so wie er dort eingetragen wird an die Konsole weiterleiten.

Sollen Spieler vorgewarnt werden kann bei Minecraft der *say* Befehl genutzt werden

![](https://screensaver01.zap-hosting.com/index.php/s/8oofqcYkMjK8XPM/preview)

###  Verzögerung

Die Verzögerung bei dem Befehl ist die Zeit, in welcher der Befehl vor dem Server Neustart an die Konsole weitergegeben wird.
Diese Verzögerung wird in **Sekunden** gesetzt.
Sollte daher eine Verzögerung von **5** Minuten vor dem Neustart gewünscht sein, muss eine Verzögerung von **300** Sekunden eingetragen werden.

