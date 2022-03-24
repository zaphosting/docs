---
id: minecraft_timings_report
title: Minecraft: Server-Probleme mit Timings-Report identifizieren
description: Informationen wie du Lag-Probleme bei deinem Minecraft-Server mit einem Timings-Report identifizieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Timings-Report
---

Hier gelangst du zu unseren Minecraft Servern: [Minecraft Server mieten](https://zap-hosting.com/de/minecraft-server-mieten/)

## Erklärung

### ❓ Was ist ein Timings-Report?

Ein Timings-Report ähnelt dem Task-Manager von deinem PC sehr und ermöglicht es gerade bei Laggs das Problem zu finden.
Durch einen Timings-Report werden alle Prozesse auf dem Server aufgezeichnet und dann visuell dargestellt.

## Einen Timings-Report erstellen

## 📈 Timings-Report erstellen

Je nach Server-Software wird der Timings-Report anderes erstellt. Grundlegend muss man bis auf Ausnahme von **Paper Spigot** (sofern die Einstellungen nicht geändert wurden) die Aufnahme zuerst mit folgendem Befehl starten:

`/timings start`

Während der Aufnahme sollte der Server möglichst normale bespielt werden, sodass auch die jeweiligen Probleme aufgezeichnet und im Anschluss genauer analysiert werden können. Die Aufnahme sollte **min. 10 Minuten** dauern, nach Möglichkeit auch länger.

## 🔍 Timings-Report exportieren

Damit der Timings-Report nun wirklich erstellt und exportiert wird, muss der folgende Befehl verwendet werden:

`/timings paste`

Nach einigen Sekunden erscheint nun eine Nachricht, dass der Export erfolgreich war und der Timings-Report durch den Link mittels eines Klicks geöffnet werden kann.

![](https://i.imgur.com/Akum9cl.png)

## Auswertung

### ↔️ Werte eingrenzen

Nachdem der Timings-Report wie oben beschrieben exportiert und geöffnet wurde, sollte ein ähnliches Fenster wie dieses erscheinen:

![](https://i.imgur.com/X6ErJGe.png)

Als erstes sollte man einen genaueren Blick auf den Graphen werfen, um sich grobe Werte zu den einzelnen Aufnahmepunkten anschauen zu können, indem man mit der Maus über die einzelnen Punkte fährt.

Um möglichste genaue Werte zu erhalten, welche sich auf ein mögliches Problem auf Server bezieht sollte zunächste der problematische Zeitraum wie im Graphen einzusehen durch die Schieberegler darunter eingegrenzt werden.

![](https://i.imgur.com/k3pHKOi.gif)

### 🧐 Server-Werte untersuchen

Es gibt insgesamt 3 Spalten, wobei wie unten auf dem Screenshot zu sehen Box 1 darstellt, wie viel % eines Ticks (wobei 20 Ticks einer Sekunden entspricht) der Hauptprozess in Anspruch nimmt. Unter anderem kann hier auch eingesehen werden, wie oft dieser Prozess insgesamt ausgeführt wurde während der Aufnahme.

In Box 2 sehen wir genauere Werte in Milisekunden, hierbei sollte man beachten, dass die Zeitangaben niemals höher als 50ms liegen sollten. Sollte dies dennoch der Fall sein, so würde dies eine Kettenreaktion auslösen und alle weiteren Prozesse stauen sich etwas an, wodurch es schlussendlich zu Laggs kommt, da der Server die Prozesse nur verzögert bearbeiten kann.

> Der **Full Server Tick** kann in der Regel ignoriert werden, da die Werte hierbei immer im roten Bereich liegen, was jedoch kein Problem darstellt.

![image](https://user-images.githubusercontent.com/13604413/159177796-03f504fc-94f4-4f88-af53-d4ce33ed8039.png)

Grundlegend sollte man in jedem Fall die farblich hervorgehobenen Werte Punkte genauer untersuchen.

In diesem Beispiel schauen wir uns den Prozess für alle Entitys (Tiere, Monster, Items, etc.) an, da die Werte bereits orange dargestellt wird. Hieraus könnte man also nun direkt schließen, dass es ein Problem mit zu vielen Entitys auf dem Server gibt.
Möglicherweise werden auf dem Server derartige Mobfarmen betrieben, oder massenweise neue Mobs spawnwn.
Hilfreich bei Problemen mit zu vielen Entiys ist, dass man Spawnrate in den Einstellungen drosselt oder Plugins installiert, welche Entitys limitiert und nach Bedarf automatisch entfernt.

Wie oben beschrieben, wird in der Liste grundlegend immer der Hauptprozess aufgelistet. Mit einem Klick auf einen Prozess können wir einzelne Prozesse je Art des Entitys genauer einsehen und untersuchen. Auch hier sollte man wieder Spalte 2 und 3 beachten, wie oben beschrieben.

Hierbei fällt auf, dass **Minecraft::tickEntity - nms.EntitySkeleton** sehr viele Prozesse ausgeführt hat. Auch hier können wieder derartige Mobfarmen das Problem sein.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Ein anderer Prozess mit bereits ebenfalls orangenen Werten sind zu Deutsch wartende Blöcke.
Blöcke die Warten sind besondere Leistungsfresser, da der Server den Status jeden wartenden Blocks jeden Tick prüfen muss.
Als Beispiel wäre dies fliegender Sand, Kies oder auch Lava und Wasser.

Nanchdem der Hauptprozess ausgeklappt wurde, ist ebenfalls ein anderer Prozess bereits im orangenden Bereich.
Wie der Name des Prozesses verrät, handelt es sich hierbei um Flüssigkeiten wie Lava und Wasser.

Wenn viel Wasser als Beispiel bei einer großen Farm als Beispiel verwendet wird, kann dies unter anderem viele Probleme mit sich führen.
Das Problem kann sich aber auch ergeben, wenn neue Chunks generiert werden und in diesen Chunks Wasserquellen als Beispiel in einem Berg erstellt wurden. Der Server muss auch hier wieder den Status jeweils berechnen, damit das Wasser normal verläuft.
Hierbei kommt hinzu, dass der Server die Chunks erstellen und laden muss, was ebenfalls ein sehr intensiver Prozess ist.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW/preview)

Alle weiteren Untersuchungen können ebenfalls so vorgenommen werden, da es bei jedem anderen Prozess ebenfalls genau die gleichen Schritte sind. Solltest du dennoch Hilfe bei der Auswertung benötigen, so stehen wir dir im Support jederzeit zur Verfügung!

### ✔️ Plugins prüfen

Teilweise stammen Probleme auch von Plugins, um überhaupt feststellen zu können, dass möglicherweise ein Plugin schuld ist, kann man installierte Plugins temporär vom Server einmal entfernen und sich dann nochmal ein Bild der Lage machen.

Ist ein Problem mit Plugins möglich, so kann man dies ebenfalls im Bereich "Plugins" genauer untersuchen.
Auch hier werden die Werte wieder in drei Spalten aufgeleitet, die genau gleich aufgebaut sind, wie oben bei den normalen Server-Werten.
Anders hierbei ist es, dass nun kein Hauptprozess mehr dargestellt wird, sondern das Plugin selbst.
Dennoch können wir die Prozesse durch anklicken alle einsehen und die Werte besser untersuchen.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD/preview)
