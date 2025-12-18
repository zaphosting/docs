---
id: minecraft-timings-report
title: "Minecraft: Serverprobleme mit Timings-Report erkennen"
description: "Entdecke, wie du Server-Performance-Probleme mit Timings-Reports analysierst, um Lags zu identifizieren und deinen Server zu optimieren → Jetzt mehr erfahren"
sidebar_label: Timings-Report
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Erklärung

### Was ist ein Timings-Report?

Timings-Reports sind ähnlich wie der Task-Manager deines PCs und helfen dir dabei, Probleme, besonders bei Lags, zu finden. Ein Timings-Report zeichnet alle Aktivitäten des Servers auf und stellt sie visuell dar.

## Timings-Report

## Timings-Report erstellen

Je nach Server-Software wird der Timings-Report unterschiedlich erstellt. Grundsätzlich musst du die Aufnahme zuerst mit folgendem Befehl starten (außer bei **Paper Spigot** (sofern die Einstellungen nicht geändert wurden)):

`/timings start`

Während der Aufnahme solltest du den Server wie gewohnt nutzen, damit die jeweiligen Probleme erfasst und anschließend genauer analysiert werden können. Die Aufnahmedauer sollte **mindestens 10 Minuten** betragen oder länger, wenn möglich.

## Timings-Report exportieren

Um den Timings-Report zu erstellen und zu exportieren, musst du folgenden Befehl nutzen:

`/timings paste`

Nach ein paar Sekunden erscheint eine Meldung, dass der Export erfolgreich war. Den Timings-Report kannst du über den Link öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analyse

### ↔️ Werte eingrenzen

Sobald der Timings-Report exportiert und wie oben beschrieben geöffnet wurde, sollte ein Fenster ähnlich diesem erscheinen:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Schau dir zuerst den Graphen genauer an, um grobe Werte der einzelnen Aufnahmezeitpunkte zu checken, indem du mit der Maus über die Punkte fährst.

Um möglichst genaue Werte zu erhalten, die auf ein mögliches Problem auf dem Server hinweisen, solltest du den problematischen Zeitraum mit den Schiebereglern unten eingrenzen, wie im Graph gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Serverwerte untersuchen

Es gibt insgesamt 3 Spalten. Wie im Screenshot unten zu sehen, zeigt Box Nummer 1, wie viel % eines Ticks (20 Ticks sind eine Sekunde) der Hauptprozess benötigt. Außerdem siehst du, wie oft dieser Prozess während der Aufnahme ausgeführt wurde.

In Box Nummer 2 findest du genauere Werte in Millisekunden, aber beachte bitte, dass die Zeit niemals über 50ms liegen sollte. Wenn das der Fall ist, löst das eine Kettenreaktion aus und alle weiteren Prozesse stauen sich, was letztendlich zu Lags führt, da der Server die Prozesse nur verzögert abarbeiten kann.

:::info
Der **Full Server Tick** kann meistens ignoriert werden, da die Werte immer im roten Bereich liegen, was aber kein großes Problem darstellt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

Auf jeden Fall solltest du die farblich hervorgehobenen Werte genauer unter die Lupe nehmen.

In diesem Beispiel schauen wir uns den Prozess für alle Entities (Tiere, Monster, Items, etc.) an, da die Werte bereits orange markiert sind. Daraus kannst du direkt schließen, dass es ein Problem mit zu vielen Entities auf dem Server gibt.
Vielleicht gibt es Mob-Farmen auf dem Server oder es werden massenhaft neue Mobs gespawnt. Wenn du Probleme mit zu vielen Entities hast, kannst du die Spawnrate in den Einstellungen drosseln oder Plugins installieren, die die Anzahl der Entities begrenzen und sie bei Bedarf automatisch entfernen.

Wie oben beschrieben zeigt die Liste grundsätzlich immer den Hauptprozess. Durch Klicken auf einen Prozess kannst du einzelne Prozesse für jede Entity-Art genauer anschauen und untersuchen. Achte dabei auch auf die Spalten 2 und 3, wie zuvor erwähnt.

Du wirst sehen, dass **Minecraft::tickEntity - nms.EntitySkeleton** viele Prozesse ausgeführt hat. Auch hier könnten Mob-Farmen das Problem sein.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Ein weiterer Prozess mit bereits orangen Werten sind wartende Blöcke. Blöcke, die warten, können besonders ineffizient sein, weil der Server den Status jedes wartenden Blocks bei jedem Tick prüfen muss. Beispiele dafür sind fliegender Sand, Kies oder auch Lava und Wasser.

Wenn zum Beispiel viel Wasser auf einer großen Farm genutzt wird, kann das viele Probleme verursachen. Das Problem kann auch auftreten, wenn neue Chunks generiert werden und Wasserquellen in diesen Chunks in einem Berg entstehen. Der Server muss den Status jedes Mal neu berechnen, damit das Wasser fließt. Außerdem muss der Server die Chunks erstellen und laden, was ebenfalls ein sehr intensiver Prozess ist.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Alle weiteren Untersuchungen kannst du genauso durchführen, da die Schritte für jeden anderen Prozess identisch sind. Wenn du trotzdem Hilfe bei der Auswertung brauchst, sind wir jederzeit für dich da!

### Plugins checken

Manchmal werden Probleme auch durch Plugins verursacht. Um herauszufinden, ob ein Plugin der Übeltäter ist, kannst du testweise Plugins vom Server entfernen und den aktuellen Zustand erneut checken.

Wenn es ein Problem mit Plugins gibt, kannst du das auch im Bereich „Plugins“ untersuchen. Die Werte sind ebenfalls in drei Spalten aufgelistet, die genau die gleiche Struktur wie die normalen Serverwerte oben haben. Der Unterschied ist, dass hier kein Hauptprozess angezeigt wird, sondern das Plugin selbst. Trotzdem kannst du alle Prozesse durch Klicken öffnen und die Werte genauer untersuchen.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />