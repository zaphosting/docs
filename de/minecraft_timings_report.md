---
id: minecraft_timings_report
title: Timings-Report
sidebar_label: Timings-Report
---

## Grundlagen

### 🤔 Was ist ein Timings-Report?

Ein Timings-Report ähnelt dem Task-Manager von deinem PC sehr und ermöglicht es gerade bei Laggs das Problem zu finden.
Durch einen Timings-Report werden alle Prozesse auf dem Server aufgezeichnet und dann visuell dargestellt.

## Einen Timings-Report erstellen

## 📈 Aufnahme beginnen

Je nach Server-Software wird der Timings-Report anderes erstellt. Grundlegend muss man bis auf Ausnahme von **Paper Spigot** (sofern die Einstellungen nicht geändert wurden) die Aufnahme zuerst mit folgendem Befehl starten:

`/timings start`

Während der Aufnahme sollte der Server möglichst normale bespielt werden, sodass auch die jeweiligen Probleme aufgezeichnet und im Anschluss genauer analysiert werden können. Die Aufnahme sollte **min. 10 Minuten** dauern, nach Möglichkeit auch länger.

## 🔍 Timings-Report exportieren

Damit der Timings-Report nun wirklich erstellt und exportiert wird, muss der folgende Befehl verwendet werden:

`/timings paste`

Nach einigen Sekunden erscheint nun eine Nachricht, dass der Export erfolgreich war und der Timings-Report durch den Link mittels eines Klicks geöffnet werden kann.

![](https://i.imgur.com/Akum9cl.png)

## Auswertung

### 👀 Allgemeine Auswertung

Nachdem der Timings-Report wie oben beschrieben exportiert und geöffnet wurde, sollte ein ähnliches Fenster wie dieses erscheinen:

![](https://i.imgur.com/X6ErJGe.png)

Als erstes sollte man einen genaueren Blick auf den Graphen werfen, um sich grobe Werte zu den einzelnen Aufnahmepunkten anschauen zu können, indem man mit der Maus über die einzelnen Punkte fährt.

Um möglichste genaue Werte zu erhalten, welche sich auf ein mögliches Problem auf Server bezieht sollte zunächste der problematische Zeitraum wie im Graphen einzusehen durch die Schieberegler darunter eingegrenzt werden.

![](https://i.imgur.com/k3pHKOi.gif)

### 🧐 Plugins genauer untersuchen

