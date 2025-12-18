---
id: minecraft-server-optimize
title: "Minecraft: Server Performance Optimierung"
description: "Entdecke, wie du Minecraft-Gameserver für bessere Performance und flüssigeres Gameplay mit effektiven Einstellungstipps optimierst → Jetzt mehr erfahren"
sidebar_label: Minecraft-Server Optimierung
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Was passiert genau bei der Optimierung?

Optimierung ist ein wichtiger Punkt für Minecraft-Gameserver, damit diese flüssig laufen, und du solltest dir auf einem öffentlichen Server auf jeden Fall genug Zeit dafür nehmen. Nur mit viel Zeit und Tests ist es möglich, das beste Ergebnis zu erzielen. Diese Anleitung ist daher nicht zwingend 1:1 zu befolgen, sondern soll dir als Hilfe dienen, in die richtige Richtung zu gehen.

In den meisten Fällen werden bei der Optimierung eine Menge Einstellungen am Server verändert, was teilweise das Verhalten des Servers selbst deutlich ändert. Unter anderem werden einige Einstellungen runtergeschraubt, was den Server entlastet und so mehr Performance bringen kann. Damit das allgemeine Spielerlebnis aber nicht zu sehr leidet, solltest du hier immer die goldene Mitte finden.

## Vanilla

Die Möglichkeiten zur Optimierung eines Vanilla-Servers sind leider sehr begrenzt, da nur wenige Einstellungsmöglichkeiten zur Verfügung stehen. Wir versuchen dem Vanilla-Server mit folgenden Maßnahmen etwas mehr Power zu geben:

### Sichtweite

Eine sehr häufig genutzte Maßnahme ist es, die Sichtweite zu reduzieren. Die Standard-Sichtweite liegt bei 10 Chunks, viele Spieler spielen aber mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit der Chunk-Anzahl und stellen diese z.B. auf 32, was bedeutet, dass der Server all diese Chunks laden und verarbeiten muss, was viel Performance kostet.

Bei einem Vanilla-Server kann die Sichtweite in der "server.properties"-Config angepasst werden, dafür muss der Wert "view-distance" geändert werden. Um das Spielerlebnis nicht zu stark einzuschränken, empfehlen wir, den Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben dazu bereits einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

### Daten-Kompression

Auf einem Server findet ein permanenter Austausch zwischen Server und verbundenen Spielern statt. Die Bewegungen der Spieler werden an den Server gesendet, der diese wiederum an alle anderen Spieler weiterleitet. Auch Spieleraktionen oder Events in der Welt, wie z.B. Explosionen, gehören zu den Daten, die immer wieder übertragen werden.

Um diesen Austausch effizienter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, sodass der Server nur noch 50% des Aufwands hat, um dieselben Daten mit den Spielern auszutauschen. Dafür muss der Wert "network-compression-threshold" in der "server.properties"-Config angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

## Forge

Ähnlich wie bei Vanilla sind die Möglichkeiten, die direkt am Server gemacht werden können, leider etwas begrenzt, da nur sehr kleine Config-Dateien zur Verfügung stehen. Allerdings ist die Installation zusätzlicher Mods möglich, wodurch der Server etwas entlastet werden kann.

### Vorladen der Chunks

Eine Möglichkeit, den Server zu entlasten, ist das Vorladen von Chunks. Der Server muss dann später im Betrieb mit Spielern nur noch die gespeicherten Chunk-Daten laden und nicht die Chunks komplett neu erstellen und generieren. Dieser Prozess sollte am besten über Nacht laufen, den du abends startest.

Dafür muss ein zusätzlicher Mod installiert werden. Ein sehr geeigneter Mod kann [hier](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) heruntergeladen werden.
Der Mod kann dann wie in unseren Anleitungen beschrieben normal auf dem Server installiert werden.

Bevor der Server neu gestartet wird, solltest du sicherstellen, dass "max-tick-time" in der "server.properties" auf "-1" gesetzt ist. Sonst könnte der Server abstürzen. Es empfiehlt sich außerdem, mindestens 8-10 GB RAM zur Verfügung zu haben, da der Prozess leider viel RAM benötigt. Dafür kann der RAM über Nacht kurzzeitig hochgesetzt und danach wieder reduziert werden.

:::info
Beachte, dass der oben genannte Mod eventuell nicht mit deiner Forge-Version kompatibel ist und der Prozess bei Verwendung eines anderen Mods abweichen kann.
:::

Sobald der Server mit dem Mod gestartet ist, muss die Konsole geöffnet werden. Wir empfehlen, eine Weltgrenze mit einem Radius von 16.000 Blöcken zu setzen. Dafür müssen folgende Befehle nacheinander ausgeführt werden:

- worldborder center 0 0
- worldborder set 16000

:::info
Falls nötig, ersetze die Koordinaten mit deinem eigenen Weltzentrum, damit deine Welt nicht „abgeschnitten“ wird (z.B. wenn dort schon gebaut wurde).
:::

Sobald die Grenze gesetzt ist, kann das eigentliche Vorladen gestartet werden. Dafür muss folgender Befehl ausgeführt werden:

- pregen gen startWorldBorder

Jetzt werden alle Chunks innerhalb der Grenze nacheinander vorgeladen. Je nach Anzahl der installierten Mods kann das bis zu 8 Stunden dauern. Der Fortschritt wird regelmäßig über Info-Meldungen in der Konsole ausgegeben. Sobald der Prozess abgeschlossen ist, wird das ebenfalls in der Konsole angezeigt!

:::info
Der Mod kann auch nach Abschluss des Prozesses weiterhin auf dem Server installiert bleiben. Er optimiert Chunks während des Betriebs weiter und funktioniert auch, wenn kein Spieler auf dem Server ist.
:::

### Sichtweite

Eine sehr häufig genutzte Maßnahme ist es, die Sichtweite zu reduzieren. Die Standard-Sichtweite liegt bei 10 Chunks, viele Spieler spielen aber mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit der Chunk-Anzahl und stellen diese z.B. auf 32, was bedeutet, dass der Server all diese Chunks laden und verarbeiten muss, was viel Performance kostet.

Die Sichtweite eines Forge-Servers kann in der "server.properties"-Config angepasst werden, dafür muss der Wert "view-distance" geändert werden. Um das Spielerlebnis nicht zu stark einzuschränken, empfehlen wir, den Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben dazu bereits einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

### Daten-Kompression

Auf einem Server findet ein permanenter Austausch zwischen Server und verbundenen Spielern statt. Die Bewegungen der Spieler werden an den Server gesendet, der diese wiederum an alle anderen Spieler weiterleitet. Auch Spieleraktionen oder Events in der Welt, wie z.B. Explosionen, gehören zu den Daten, die immer wieder übertragen werden.

Um diesen Austausch effizienter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, sodass der Server nur noch 50% des Aufwands hat, um dieselben Daten mit den Spielern auszutauschen. Dafür muss der Wert "network-compression-threshold" in der "server.properties"-Config angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

## Bukkit

### Sichtweite

Eine sehr häufig genutzte Maßnahme ist es, die Sichtweite zu reduzieren. Die Standard-Sichtweite liegt bei 10 Chunks, viele Spieler spielen aber mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit der Chunk-Anzahl und stellen diese z.B. auf 32, was bedeutet, dass der Server all diese Chunks laden und verarbeiten muss, was viel Performance kostet.

Die Sichtweite eines Bukkit-Servers kann in der "server.properties"-Config angepasst werden, dafür muss der Wert "view-distance" geändert werden. Um das Spielerlebnis nicht zu stark einzuschränken, empfehlen wir, den Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben dazu bereits einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

### Daten-Kompression

Auf einem Server findet ein permanenter Austausch zwischen Server und verbundenen Spielern statt. Die Bewegungen der Spieler werden an den Server gesendet, der diese wiederum an alle anderen Spieler weiterleitet. Auch Spieleraktionen oder Events in der Welt, wie z.B. Explosionen, gehören zu den Daten, die immer wieder übertragen werden.

Um diesen Austausch effizienter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, sodass der Server nur noch 50% des Aufwands hat, um dieselben Daten mit den Spielern auszutauschen. Dafür muss der Wert "network-compression-threshold" in der "server.properties"-Config angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawnraten von Mobs auf dem Server etwas reduziert. Im Vergleich zu den Standardwerten ist das kaum spürbar. Dennoch kann es an manchen Stellen, z.B. bei Mob-Farmen, passieren, dass die Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Config "bukkit.yml" bearbeitet werden. Folgende Werte müssen unter "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Du kannst die Werte natürlich auch selbst anpassen, wenn du möchtest. Ansonsten sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawning weiter zu verbessern, sollte auch der Wert "monster-spawns" im Eintrag "ticks-per" in der "bukkit.yml" geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es z.B. ein generelles Problem mit Monstern gibt (z.B. erkennbar im Timing-Report), kann der Wert bis auf 5 gesetzt werden. Das Verhalten des Servers sollte dann bei jedem Wert beobachtet werden, um den besten Wert für deinen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die zusammengefügt werden und für den Client die Welt visuell darstellen. Der Server arbeitet also nur mit Chunks und lädt die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was den Server an manchen Stellen in die Knie zwingt.

Server mit Standard-Einstellungen entladen geladene Chunks nie, was bedeutet, dass der RAM an manchen Stellen sehr stark genutzt wird und eine enorme Menge davon benötigt wird. Die Performance des Servers wird dadurch leider stark reduziert, da immer mehr verarbeitet werden muss.

Damit der Server nur die Chunks lädt, die aktuell benötigt werden, müssen folgende Optionen in der "bukkit.yml" unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Falls gewünscht, kann dieser Wert noch weiter reduziert werden, aber es sollte beachtet werden, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Bei einer Schleife würde der Chunk entladen werden, obwohl er kurz danach wieder benötigt wird, was bedeutet, dass der Server erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Das würde sich dann immer wiederholen und den Server stärker belasten, als wenn die Chunks z.B. eine Minute länger geladen bleiben.

## Spigot

### Sichtweite

Eine sehr häufig genutzte Maßnahme ist es, die Sichtweite zu reduzieren. Die Standard-Sichtweite liegt bei 10 Chunks, viele Spieler spielen aber mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit der Chunk-Anzahl und stellen diese z.B. auf 32, was bedeutet, dass der Server all diese Chunks laden und verarbeiten muss, was viel Performance kostet.

Bei einem Spigot-Server kann die Sichtweite in der "spigot.yml"-Config angepasst werden, dafür muss der Wert "view-distance" geändert werden. Um das Spielerlebnis nicht zu stark einzuschränken, empfehlen wir, den Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.

:::info
Je nach Vorliebe kann der Wert auch auf 4 gesetzt werden, was z.B. sehr gut gegen Laggs hilft, wenn du Farmwelt-Server betreibst, die auf Version 1.13+ laufen.
:::

### Daten-Kompression

Auf einem Server findet ein permanenter Austausch zwischen Server und verbundenen Spielern statt. Die Bewegungen der Spieler werden an den Server gesendet, der diese wiederum an alle anderen Spieler weiterleitet. Auch Spieleraktionen oder Events in der Welt, wie z.B. Explosionen, gehören zu den Daten, die immer wieder übertragen werden.

Um diesen Austausch effizienter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, sodass der Server nur noch 50% des Aufwands hat, um dieselben Daten mit den Spielern auszutauschen. Dafür muss der Wert "network-compression-threshold" in der "server.properties"-Config angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawnraten von Mobs auf dem Server etwas reduziert. Im Vergleich zu den Standardwerten ist das kaum spürbar. Dennoch kann es an manchen Stellen, z.B. bei Mob-Farmen, passieren, dass die Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Config "bukkit.yml" bearbeitet werden. Folgende Werte müssen unter "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Du kannst die Werte natürlich auch selbst anpassen, wenn du möchtest. Ansonsten sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawning weiter zu verbessern, sollte auch der Wert "monster-spawns" im Eintrag "ticks-per" in der "bukkit.yml" geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es z.B. ein generelles Problem mit Monstern gibt (z.B. erkennbar im Timing-Report), kann der Wert bis auf 5 gesetzt werden. Das Verhalten des Servers sollte dann bei jedem Wert beobachtet werden, um den besten Wert für deinen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die zusammengefügt werden und für den Client die Welt visuell darstellen. Der Server arbeitet also nur mit Chunks und lädt die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was den Server an manchen Stellen in die Knie zwingt.

Server mit Standard-Einstellungen entladen geladene Chunks nie, was bedeutet, dass der RAM an manchen Stellen sehr stark genutzt wird und eine enorme Menge davon benötigt wird. Die Performance des Servers wird dadurch leider stark reduziert, da immer mehr verarbeitet werden muss.

Damit der Server nur die Chunks lädt, die aktuell benötigt werden, müssen folgende Optionen in der "bukkit.yml" unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Falls gewünscht, kann dieser Wert noch weiter reduziert werden, aber es sollte beachtet werden, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Bei einer Schleife würde der Chunk entladen werden, obwohl er kurz danach wieder benötigt wird, was bedeutet, dass der Server erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Das würde sich dann immer wiederholen und den Server stärker belasten, als wenn die Chunks z.B. eine Minute länger geladen bleiben.

### Spawn-Reichweite

Mobs können immer in bestimmten Abständen von Spielern spawnen. Hier drehen wir diese Rate etwas runter, damit es keine Probleme mit dem Mob-Spawning gibt. Diese Einstellung ist sehr wichtig, da einige der Spawn-Einstellungen bereits oben erklärt wurden.

Wir ändern folgende Einstellung in der "spigot.yml" unter "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Entity-Reichweiten

Hier legen wir fest, wann Entities – also Tiere und Monster – aktiviert werden. Das bedeutet, dass sich Tiere z.B. bewegen können oder Monster Spieler erkennen. Grundsätzlich ist das für alle Mobs aktiviert, aber in einer Art Standby-Modus. Im Standby-Modus können sich die Mobs weiterhin bewegen und Spieler erkennen, aber z.B. nur sehr langsam, sodass der Server nicht viel Leistung bereitstellen muss.

Auch diese Änderungen müssen in der "spigot.yml" unter "entity-activation-range" gemacht werden. Wir empfehlen folgende Werte:
- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Trichter-Optimierungen

Trichter sind ein sehr wichtiger Teil des Spiels in Minecraft. Für Server sind sie aber echter Gift! Für jeden gesetzten Trichter muss der Server 20 Mal pro Sekunde prüfen, ob ein Item zum Aufnehmen bereitsteht. Das Verschieben von Items von Trichter zu Trichter oder in eine Kiste kostet ebenfalls wertvolle Leistung!

Um das Ganze etwas zu verbessern, erhöhen wir die Zeitintervalle, in denen der Server solche Aktionen ausführt. Mit den hier verwendeten Werten wird so eine Aktion alle 3 Sekunden ausgeführt und geprüft. Die Transfer-Raten ändern sich dadurch nicht. Es kann aber passieren, dass Redstone-Uhren, die mit Trichtern gebaut wurden, nicht mehr richtig funktionieren.

Zur Anpassung müssen folgende Werte in der "spigot.yml" geändert werden:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

### Kollisionen

Seit Minecraft Version 1.9 gibt es Kollisionen, wodurch z.B. kein Spieler mehr im Spieler stehen kann. Hier legen wir fest, wie oft Entities generell kollidieren können. Besonders in Mob-Farmen, wo viele Mobs auf engem Raum sind, kann das den Server manchmal stark belasten.

Zur Anpassung muss folgender Wert in "spigot.yml" geändert werden:
- max-entity-collisions: 1 #Standard: 8

Da Kollisionen bei Mobs keine echten Auswirkungen haben, kann der Wert hier runtergesetzt werden. Für Spieler gilt dieser Wert nicht, nur für Mobs!

### Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, wodurch der Server weniger Entities verarbeiten muss. Besonders bei Servern, wo viele Items auf dem Boden liegen, kann das für Spieler einen positiven Effekt haben, wenn dieser Radius erhöht wird. Auch hier gilt die Regel, dass du einen guten Mittelwert finden solltest, sonst entsteht wieder eine Art Lag-Effekt, weil der Server einen größeren Bereich prüfen muss, was zu viel Leistung kostet!

Zur Anpassung müssen folgende Werte unter "merge-radius" in der "spigot.yml" geändert werden:
- item: 4.0 #Standard: 2.5
- exp: 6.0 #Standard: 3.0

:::info
Die Werte sollten nicht höher als 8 gesetzt werden, sonst kann der oben erwähnte Lag-Effekt auftreten!
:::

## Paper Spigot

### Sichtweite

Eine sehr häufig genutzte Maßnahme ist es, die Sichtweite zu reduzieren. Die Standard-Sichtweite liegt bei 10 Chunks, viele Spieler spielen aber mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit der Chunk-Anzahl und stellen diese z.B. auf 32, was bedeutet, dass der Server all diese Chunks laden und verarbeiten muss, was viel Performance kostet.

Bei einem (Paper) Spigot-Server kann die Sichtweite in der "spigot.yml"-Config angepasst werden, dafür muss der Wert "view-distance" geändert werden. Um das Spielerlebnis nicht zu stark einzuschränken, empfehlen wir, den Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.

:::info
Je nach Vorliebe kann der Wert auch auf 4 gesetzt werden, was z.B. sehr gut gegen Laggs hilft, wenn du Farmwelt-Server betreibst, die auf Version 1.13+ laufen.
:::

### Daten-Kompression

Auf einem Server findet ein permanenter Austausch zwischen Server und verbundenen Spielern statt. Die Bewegungen der Spieler werden an den Server gesendet, der diese wiederum an alle anderen Spieler weiterleitet. Auch Spieleraktionen oder Events in der Welt, wie z.B. Explosionen, gehören zu den Daten, die immer wieder übertragen werden.

Um diesen Austausch effizienter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, sodass der Server nur noch 50% des Aufwands hat, um dieselben Daten mit den Spielern auszutauschen. Dafür muss der Wert "network-compression-threshold" in der "server.properties"-Config angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir einen Eintrag in unserer Anleitung, den du [hier](minecraft-default-config.md) findest.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawnraten von Mobs auf dem Server etwas reduziert. Im Vergleich zu den Standardwerten ist das kaum spürbar. Dennoch kann es an manchen Stellen, z.B. bei Mob-Farmen, passieren, dass die Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Config "bukkit.yml" bearbeitet werden. Folgende Werte müssen unter "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Du kannst die Werte natürlich auch selbst anpassen, wenn du möchtest. Ansonsten sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawning weiter zu verbessern, sollte auch der Wert "monster-spawns" im Eintrag "ticks-per" in der "bukkit.yml" geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es z.B. ein generelles Problem mit Monstern gibt (z.B. erkennbar im Timing-Report), kann der Wert bis auf 5 gesetzt werden. Das Verhalten des Servers sollte dann bei jedem Wert beobachtet werden, um den besten Wert für deinen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die zusammengefügt werden und für den Client die Welt visuell darstellen. Der Server arbeitet also nur mit Chunks und lädt die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was den Server an manchen Stellen in die Knie zwingt.

Server mit Standard-Einstellungen entladen geladene Chunks nie, was bedeutet, dass der RAM an manchen Stellen sehr stark genutzt wird und eine enorme Menge davon benötigt wird. Die Performance des Servers wird dadurch leider stark reduziert, da immer mehr verarbeitet werden muss.

Damit der Server nur die Chunks lädt, die aktuell benötigt werden, müssen folgende Optionen in der "bukkit.yml" unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Falls gewünscht, kann dieser Wert noch weiter reduziert werden, aber es sollte beachtet werden, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Bei einer Schleife würde der Chunk entladen werden, obwohl er kurz danach wieder benötigt wird, was bedeutet, dass der Server erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Das würde sich dann immer wiederholen und den Server stärker belasten, als wenn die Chunks z.B. eine Minute länger geladen bleiben.

### Spawn-Reichweite

Mobs können immer in bestimmten Abständen von Spielern spawnen. Hier drehen wir diese Rate etwas runter, damit es keine Probleme mit dem Mob-Spawning gibt. Diese Einstellung ist sehr wichtig, da einige der Spawn-Einstellungen bereits oben erklärt wurden.

Wir ändern folgende Einstellung in der "spigot.yml" unter "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Mob-Spawner

Gerade auf City-Build-Servern werden Spawner sehr oft und manchmal in großer Anzahl genutzt. Spawner erzeugen dann immer mehr Mobs auf dem Server, was zu vielen Problemen führen kann.

Diese Option passt das Spawn-Verhalten der Spawner etwas an, sodass der Server die Spawner in kurzen Abständen aktiviert. Dafür muss folgender Wert in "paper.yml" angepasst werden:
- mob-spawner-tick-rate: 3 #Standard: 1

:::info
Der oben genutzte Wert ändert das Verhalten nicht zu stark und beeinflusst das Spielerlebnis kaum.
:::

### Entity-Reichweiten

Hier legen wir fest, wann Entities – also Tiere und Monster – aktiviert werden. Das bedeutet, dass sich Tiere z.B. bewegen können oder Monster Spieler erkennen. Grundsätzlich ist das für alle Mobs aktiviert, aber in einer Art Standby-Modus. Im Standby-Modus können sich die Mobs weiterhin bewegen und Spieler erkennen, aber z.B. nur sehr langsam, sodass der Server nicht viel Leistung bereitstellen muss.

Auch diese Änderungen müssen in der "spigot.yml" unter "entity-activation-range" gemacht werden. Wir empfehlen folgende Werte:
- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Trichter-Optimierung

Trichter sind ein sehr wichtiger Teil des Spiels in Minecraft. Für Server sind sie aber echter Gift! Für jeden gesetzten Trichter muss der Server 20 Mal pro Sekunde prüfen, ob ein Item zum Aufnehmen bereitsteht. Das Verschieben von Items von Trichter zu Trichter oder in eine Kiste kostet ebenfalls wertvolle Leistung!

Um das Ganze etwas zu verbessern, erhöhen wir die Zeitintervalle, in denen der Server solche Aktionen ausführt. Mit den hier verwendeten Werten wird so eine Aktion alle 3 Sekunden ausgeführt und geprüft. Die Transfer-Raten ändern sich dadurch nicht. Es kann aber passieren, dass Redstone-Uhren, die mit Trichtern gebaut wurden, nicht mehr richtig funktionieren.

Zur Anpassung müssen folgende Werte in der "spigot.yml" geändert werden:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

:::info
Stelle sicher, dass der Wert "use-hopper-check" in der "paper.yml" auf "true" gesetzt ist!
:::

### Kollisionen

Seit Minecraft Version 1.9 gibt es Kollisionen, wodurch z.B. kein Spieler mehr im Spieler stehen kann. Hier legen wir fest, wie oft Entities generell kollidieren können. Besonders in Mob-Farmen, wo viele Mobs auf engem Raum sind, kann das den Server manchmal stark belasten.

Zur Anpassung muss folgender Wert in "spigot.yml" geändert werden:
- max-entity-collisions: 1 #Standard: 8

Da Kollisionen bei Mobs keine echten Auswirkungen haben, kann der Wert hier runtergesetzt werden. Für Spieler gilt dieser Wert nicht, nur für Mobs!

### Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, wodurch der Server weniger Entities verarbeiten muss. Besonders bei Servern, wo viele Items auf dem Boden liegen, kann das für Spieler einen positiven Effekt haben, wenn dieser Radius erhöht wird. Auch hier gilt die Regel, dass du einen guten Mittelwert finden solltest, sonst entsteht wieder eine Art Lag-Effekt, weil der Server einen größeren Bereich prüfen muss, was zu viel Leistung kostet!

Zur Anpassung müssen folgende Werte unter "merge-radius" in der "spigot.yml" geändert werden:
- item: 4.0 #Standard: 2.5
- exp: 6.0 #Standard: 3.0

:::info
Die Werte sollten nicht höher als 8 gesetzt werden, sonst kann der oben erwähnte Lag-Effekt auftreten!
:::

### Explosionen

Bei Paper Spigot wurden viele Teile von Minecraft-Gameservern neu programmiert, damit der Server besser läuft. Das gilt auch für Explosionen! Hier wird die Software besser mit Explosionen umgehen, sodass größere Laggs auf dem Server vermieden werden.

Dafür muss folgender Wert in der "paper.yml" angepasst werden:
- optimize-explosions: true #Standard: false

### Kisten

Auch bei Kisten gibt es einen kleinen Optimierungspunkt! Wenn eine Katze auf der Kiste sitzt, kann diese nicht geöffnet werden. Damit der Server das prüfen kann, muss er alle Mobs in einem bestimmten Radius durchgehen und prüfen, ob einer auf der Kiste sitzt, was leider sehr zeitaufwändig ist und bei jedem Öffnen einer Kiste passiert!

Die Option kann einfach mit folgender Änderung deaktiviert werden:
- disable-chest-cat-detection: true #Standard: false

### Inventare

Inventare werden viel genutzt, aber Inventar ist nicht gleich Inventar. Eine Kiste oder Werkbank ist z.B. auch ein Inventar. Mit dieser Änderung kannst du dem Server eine kleine Verschnaufpause gönnen, ohne dass es jemand merkt! Hier wird grundsätzlich nur die Anzahl der Ticks gesetzt, nach denen der Server jedes Inventar aktualisieren soll.

Dafür muss folgender Wert in der "paper.yml" angepasst werden:
- container-update-tick-rate: 3 #Standard: 1

:::info
Der Wert sollte nicht höher als 5 gesetzt werden, sonst kann das Inventar etwas buggy werden! In Spielmodi wie SurvivalGames, wo alle Spieler auf die Kisten in der Mitte zugreifen und die besten Items holen wollen, sollte der Wert nicht geändert und auf "1" belassen werden.
:::

### Licht-Updates

Auch hier bietet Paper Spigot eine alternative Option, damit Licht-Updates in der Welt besser ausgeführt werden. Bei dieser Methode werden Licht-Updates nicht innerhalb eines Ticks ausgeführt, was je nach Größe des Updates den Server manchmal zum Stillstand bringen kann, sondern außerhalb des Ticks. Das Ganze nennt sich async threads in Minecraft.

Dafür muss folgender Wert in der "paper.yml" angepasst werden:
- queue-light-updates: true #Standard: false

### Speichern von Chunk-Daten

Sobald Änderungen in einem Chunk gemacht wurden, werden diese nicht direkt auf die Festplatte geschrieben, sondern erst in den RAM geladen. Trotzdem werden alle Änderungen sehr oft gespeichert, was manchmal extreme Laggs verursachen kann, besonders wenn der Server massive Änderungen speichern will.

Mit dieser Änderung reduzieren wir die maximale Anzahl an Chunks, die in einem Speichervorgang gespeichert werden können. Durch die Änderung wird der RAM an manchen Stellen stärker genutzt, da die Änderungen länger im RAM bleiben!

Folgende Änderung muss in der "paper.yml" gemacht werden:
- max-auto-save-chunks-per-tick: 10 #Standard: 24

### Redstone

Redstone wird sehr oft mit teilweise extrem großen Schaltungen genutzt. Auf öffentlichen Servern ist das manchmal sogar der schwächste Punkt bei fast 90% der Server, da massive Laggs durch Redstone entstehen können. Hier nutzen wir eine alternative Verarbeitung von Redstone aus Paper Spigot, die Redstone fast harmlos macht und die gleiche Funktionalität wie in Vanilla hat!

Dafür muss folgende Einstellung in "paper.yml" gemacht werden:
- use-faster-eigencraft-redstone: true #Standard: false

:::info
**Achtung! In manchen Situationen kann das das Verhalten von Redstone stark verändern!**
:::

<InlineVoucher />