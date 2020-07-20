---
id: minecraft_server_optimize
title: Minecraft-Server optimieren
sidebar_label: Minecraft-Server optimieren
---

### Was genau passiert bei der Optimierung?

Die Optimierung ist ein wichtige Punkt bei Minecraft-Servern, damit ein reibungsloser Betrieb möglich ist und man sollte sich in jedem Fall bei einem öffentlichen Server hierfür ausreichend Zeit nehmen.
Nur mit viel Zeit und tests ist es möglich das optimale Ergebnis zu erzielen. Dieses Dokumentation ist daher nicht zwanghaft genau zu befolgen, sondern eher als Hilfe gedacht, um in die richtige Richtung zu gehen.

Bei der Optimierung werden in den meisten Fällen sehr viele Einstellungen an den Servern geändert, wodurch sich die Verhaltensweise des Servers selbst teilweise stark ändert.
Unter anderem werden einige Einstellungen heruntergeschaubt, wodurch der Server entlastet wird und dadurch mehr Performance erbringen kann.
Damit das allgemeine Spielerlebnis jedoch nicht zu stark beeinflusst wird, sollte man hier immer die goldene Mitte finden.

### Vanilla

Die Möglichkeiten einen Vanilla-Server zu optimieren, sind leider sehr begrenzt, da hierbei nur sehr wenige Einstellungsmöglichkeiten bereitstehen.
Wir versuchen den Vanilla-Server dennoch etwas mehr Power zu verschaffen, indem wir folgende Maßnahmen durchführen:

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8.
Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

Die Sichtweite kann bei einem Vanilla-Server in der "server.properties" Config angepasst werden, hierzu musst der Wert "view-disance" angepasst werden.
Um das Spielerlebnis selbst nicht besonders groß einzuschränken, wird empfohlen diesen Wert auf 5-6 zu stellen, wodurch der Server bis zu 50% entlastet wird.  
Wir halten hierzu auch bereits eine Eintrag in unserer Dokumentation bereit, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#view-distance) gefunden werden kann.

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

### Forge

Ähnlich wie bei Vanilla sind auch hier die Möglichkeiten die am Server selbst gemacht werden können leider etwas eingeschränkt, da nur sehr kleine Config-Dateien zur Verfügung stehen.
Jedoch ist die Installation von zusätzlichen Mods hierbei möglich, wodurch der Server auch etwas entlasst werden kann.

## Vorladen der Chunks

Eine Möglichkeit den Server zu entlasten ist es, dass Chunks vorgeladen werden.
Hierbei muss der Server dann im späteren Betrieb mit Spielern nur die gespeicherten Chunk-Daten laden und nicht den gesamten Chunks erstellen und generieren.
Dieser Prozesse kann am besten über Nacht laufen gelassen werden, welchen man zuvor am Abend startet.

Hierzu ist die Installation einer zusätzlichen Mod nötig. Eine sehr gut dafür geeignete Mod kann [hier](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) runtergeladen werden.
Die Mod kann dann wie in unserer Anleitung beschrieben normal auf dem Server installiert werden.

Bevor der Server erneut gestartet wird, sollte sichergestellt werden, dass die "max-tick-time" in der "server.properties" auf "-1" gestellt wurde. Andernfalls kann es passieren, dass der Server abstürzt.
Ratsam hierbei ist es zudem, dass min. 8-10 GB RAM vorhanden sind, da dieser Prozesse leider sehr viel RAM benötigt. Hierfür kann kurzzeitig auch über Nacht ein Upgrade des RAMs durchgeführt werden, welcher dann nach Abschluss dieses Prozesse wieder gedowngradet werden kann.

> Beachte, dass die oben genannte Mod ggf. mit deiner verwendeten Forge-Version nicht kompatibel ist und der Vorgang abweichend sein kann, als hier beschrieben, sofern du eine andere Mod nutzt.

Sobald der Server dann mit der Mod gestartet ist, muss die Konsole geöffnet werden. Hierbei würden wir empfehlen eine Border zu erstellt für die Welt mit einem Radius von 16.000 Blöcken.
Dazu müssen folgende Befehle nach der Reihe ausgeführt werden:

- worldborder center 0 0
- worldborder set 16000

> Ersetze beim Center-Befehl ggf. die Koordinaten zu deiner eigenen Mitte der Welt, um deine Welt (welche ggf. bereits aufgebaut wurde) nicht "abzuschneiden".

Sobald die Border gesetzt wurde, kann das eigentliche Vorladen gestartet werden.
Hierzu muss der folgende Befehl ausgeführt werden:

- pregen gen startWorldBorder

Damit werden nun alle Chunks innerhalb der Border nach der Reihe vorgeladen.
Dieser Prozess kann je nach Anzahl der installierten Mods bis zu 8 Stunden dauern.
Der Fortschritt dieses Prozesses wird in der Konsole durch Info-Nachrichten immer in regelmäßigen Abständen ausgegeben.
Sobald der Prozesse abgeschlossen ist, wird dies ebenfalls in der Konsole ausgegeben!

> Die Mod kann auch nach Abschluss dieses Prozesses weiterhin auf dem Server installiert werden.
> Sie wird im laufenden Betrieb Chunks weiterhin optimieren und arbeitet zudem auch dann, wenn kein Spieler auf dem Server ist.

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8.
Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

Die Sichtweite kann bei einem Forge-Server in der "server.properties" Config angepasst werden, hierzu musst der Wert "view-disance" angepasst werden.
Um das Spielerlebnis selbst nicht besonders groß einzuschränken, wird empfohlen diesen Wert auf 5-6 zu stellen, wodurch der Server bis zu 50% entlastet wird.  
Wir halten hierzu auch bereits eine Eintrag in unserer Dokumentation bereit, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#view-distance) gefunden werden kann.

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

### Bukkit

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8.
Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

Die Sichtweite kann bei einem Bukkit-Server in der "server.properties" Config angepasst werden, hierzu musst der Wert "view-disance" angepasst werden.
Um das Spielerlebnis selbst nicht besonders groß einzuschränken, wird empfohlen diesen Wert auf 5-6 zu stellen, wodurch der Server bis zu 50% entlastet wird.  
Wir halten hierzu auch bereits eine Eintrag in unserer Dokumentation bereit, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#view-distance) gefunden werden kann.

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

## Spawn-Limits

Bei diesem Schritt werden die generellen Spawn-Raten von Mobs auf dem Server etwas gedrosselt.
Hierbei gibt es nahezu keinen spürbaren Unterschied, als gegenüber den normalen Werten.
Dennoch kann es hierbei stellenweise bei Mob-Farmen als Beispiel vorkommen, dass die Mobfarm nicht so funktioniert wie geplant.

Um die Einstellungen hierfür anzupassen, muss die Config "bukkit.yml" bearbeitet werden.
Hier müssen dann beim Punkt "spawn-limits" die folgenden Werte angepasst werden:
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

> Du kannst die Werte hier natürlich noch gerne selbst anpassen sofern du dies wünscht, andernfalls sind die oben genannten Werte ein sehr guter Mittelwert.

Um das Spawning zusätzlich noch etwas zu verbessern, sollte in der "bukkit.yml" Config zusätzlich noch der Wert "monster-spawns" Wert im Punkt "tickes-per" geändert werden:
- monster-spawns: 2 #Default: 1

Sollte es generell ein Problem mit Monstern als Beispiel geben (wie man als Beispiel im Timings-Report ermitteln kann), so kann der Wert bis auf 5 gestellt werden.
Hierbei sollte sich das Verhalten des Servers dann mit jedem Wert angeschaut werden, um den besten Wert für den eigenen Server zu finden.

## Chunk-Verarbeitung

Minecraft arbeitet mit so genannten Chunks. Ein Chunk wird immer aus 16x16 Blöcken gebildet, welche dann aneinander gereiht werden und für den Client die Welt visuell darstellt.
Der Server arbeitet demnach auch nur mit Chunks und lädt benötigte Chunks dann in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server hierfür aufbringen, was stellenweise die Server in die Knie zwingt.

Server mit den Standard-Einstellungen werden geladene Chunks nie wieder entladen, was zur Folge hat, dass der RAM stellenweise sehr stark ausgelastet wird und unheimlich viel davon benötigt wird. Natürlich wird hierbei auch die Performance des Servers leider sehr stark runtergezogen, da immer mehr verarbeitet werden muss.

Damit der Server wirklich nur die Chunks geladen lässt, welche auch derzeit gebraucht werden, müssen folgenden Optionen in der "bukkit.yml" Config unter den Punkt "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

Die Option "period-in-ticks" bestimmt hierbei in welchen Abständen in Sekunden die Chunks entladen werden sollen.
Wenn gewünscht kann dieser Wert auch noch weiter runtergestellt werden, jedoch sollte man hierbei beachten, dass es dann möglicherweise ein ungewünschter Effekt auftritt: Ein Loop

Beim Loop würde der Chunk entladen werden, worauf der Chunk dann auch nur wenige Später wieder gebraucht wird, wodurch der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk erneut zu laden. Dies würde sich dann immer wieder wiederholen, was den Server stärker belastet, als wenn die Chunks für eine Minuten länger als Beispiel geladen bleiben.

### Spigot

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8. Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

Die Sichtweite kann bei einem Spigot-Server in der "spigot.yml" Config angepasst werden, hierzu musst der Wert "view-disance" angepasst werden.
Um das Spielerlebnis selbst nicht besonders groß einzuschränken, wird empfohlen diesen Wert auf 5-6 zu stellen, wodurch der Server bis zu 50% entlastet wird.  

> Je nach belieben kann der Wert auch auf 4 gestellt werden, was als Beispiel sehr gut gegen Laggs hilft, wenn man Farmwelt-Server betreibt, die auf der Version 1.13+ betrieben werden

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

## Spawn-Limits

Bei diesem Schritt werden die generellen Spawn-Raten von Mobs auf dem Server etwas gedrosselt.
Hierbei gibt es nahezu keinen spürbaren Unterschied, als gegenüber den normalen Werten.
Dennoch kann es hierbei stellenweise bei Mob-Farmen als Beispiel vorkommen, dass die Mobfarm nicht so funktioniert wie geplant.

Um die Einstellungen hierfür anzupassen, muss die Config "bukkit.yml" bearbeitet werden.
Hier müssen dann beim Punkt "spawn-limits" die folgenden Werte angepasst werden:
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

> Du kannst die Werte hier natürlich noch gerne selbst anpassen sofern du dies wünscht, andernfalls sind die oben genannten Werte ein sehr guter Mittelwert.

Um das Spawning zusätzlich noch etwas zu verbessern, sollte in der "bukkit.yml" Config zusätzlich noch der Wert "monster-spawns" Wert im Punkt "tickes-per" geändert werden:
- monster-spawns: 2 #Default: 1

Sollte es generell ein Problem mit Monstern als Beispiel geben (wie man als Beispiel im Timings-Report ermitteln kann), so kann der Wert bis auf 5 gestellt werden.
Hierbei sollte sich das Verhalten des Servers dann mit jedem Wert angeschaut werden, um den besten Wert für den eigenen Server zu finden.

## Chunk-Verarbeitung

Minecraft arbeitet mit so genannten Chunks. Ein Chunk wird immer aus 16x16 Blöcken gebildet, welche dann aneinander gereiht werden und für den Client die Welt visuell darstellt.
Der Server arbeitet demnach auch nur mit Chunks und lädt benötigte Chunks dann in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server hierfür aufbringen, was stellenweise die Server in die Knie zwingt.

Server mit den Standard-Einstellungen werden geladene Chunks nie wieder entladen, was zur Folge hat, dass der RAM stellenweise sehr stark ausgelastet wird und unheimlich viel davon benötigt wird. Natürlich wird hierbei auch die Performance des Servers leider sehr stark runtergezogen, da immer mehr verarbeitet werden muss.

Damit der Server wirklich nur die Chunks geladen lässt, welche auch derzeit gebraucht werden, müssen folgenden Optionen in der "bukkit.yml" Config unter den Punkt "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

Die Option "period-in-ticks" bestimmt hierbei in welchen Abständen in Sekunden die Chunks entladen werden sollen.
Wenn gewünscht kann dieser Wert auch noch weiter runtergestellt werden, jedoch sollte man hierbei beachten, dass es dann möglicherweise ein ungewünschter Effekt auftritt: Ein Loop

Beim Loop würde der Chunk entladen werden, worauf der Chunk dann auch nur wenige Später wieder gebraucht wird, wodurch der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk erneut zu laden. Dies würde sich dann immer wieder wiederholen, was den Server stärker belastet, als wenn die Chunks für eine Minuten länger als Beispiel geladen bleiben.

## Spawn-Range

Mobs können immer in bestimmten Abständen von Spielern spawnen. Hierbei stellen wir diese Rate etwas runter, damit es keine Probleme mit dem Mob-Spawning gibt.
Diese Einstellung ist sehr wichtig, da bereits einige Einstellungen zum Thema Spawning angepasst wurden, welche oben erläutert wurden.

Wir stellen hierbei in der "spigot.yml" Config in den "world-settings" nun folgende Einstellungen um:
- mob-spawn-range: 3 #Default: 4

## Entity-Ranges

Bei diesem Punkt stellen wir nun ein, ab wann Entitys - also Tiere und Monster - aktiviert werden.
Damit gemeint ist, dass die Tiere sich als Beispiel bewegen können oder Monster auch Spieler erkennen können.
Grundlegend ist dies für alle Mobs aktiviert, jedoch in eine Art von Standby.
Im Standby-Mode können sich die Mobs weiterhin bewegen und auch Spieler erkennen, aber können sich die Mobs als Beispiel nur sehr stockend fortbewegen, wodurch der Server hierbei nur wenig Leistung aufbringen muss.

Auch hier müssen die Änderungen in der "spigot.yml" Config unter dem Punkt "entity-activation-range" gemacht werden.
Hierbei empfehlen wir folgende Werte zu verwenden:
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

## Trichter-Optimierung

Trichter sind in Minecraft ein sehr wichtiger Bestandteil des Spieles. Aber für Server sind diese wahres Gift!
Für jeden gesetzten Trichter muss der Server jede Sekunde 20x prüfen, ob ein Item zum aufsammeln bereit liegt.
Auch das verschieben der Items von Trichter zu Trichter oder in eine Kiste kostet wertvolle Leistung!

Um das ganze etwas zu verbessern, stellen wir die erhöhen wir die zeitlichen Abstände, zu wann der Server solche Aktionen jeweils durchführen soll.
Mit den hier verwendeten Werten wird solch eine Aktion alle 3 Sekunden durchgeführt und geprüft. Die Übertragungsraten ändert sich hierbei aber nicht.
Hierbei kann es jedoch passieren, dass Redstone-Clocks, welche mit Hoppern erstellt wurden, möglicherweise nicht mehr korrekt funktionieren.

Um die Einstellungen anzupassen, müssen hierbei folgende Werte in der "spigot.yml" Config angepasst werden:
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

## Kollisionen

Seit der Minecraft-Version 1.9 gibt es Kollisionen, wodurch als Beispiel nicht mehr Spieler in Spieler stehen kann.
Hierbei bestimmen wir, wie oft Entitys sich allgemein kolledieren können. Gerade bei Mob-Farmen, wo viele Mobs auf einem engen Raum zusammentreffen, kann dies den Server teilweise stark beanspruchen.

Um die Einstellung anzupassen, muss in der "spigot.yml" folgender Wert angepasst werden:
- max-entity-collisions: 1 #Default: 8

Da Kollisionen bei Mobs keinen wirklichen Effekt haben, kann die Einstellung hier komplett runtergestellt werden.
Für Spieler wird dieser Wert nicht angewendet, sondern nur bei Mobs!

## Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, wodurch der Server weniger Entitys verarbeiten muss.
Gerade auch bei Servern, wo viele Items auf dem Boden liegen, kann dies für Spieler einen positiven Effekt nachsichziehen, wenn diese Radius erhöht wird.
Auch hierbei gilt, dass man einen guten Mittelwert findet, da andernfalls wieder eine Art Lagg-Effekt entsteht, wodurch der Server eine höhere Range prüfen muss, was dann wie zu viel Leistung benötigt!

Um die Einstellung anzupassen, muss unter dem Punkt "merge-radius" in der "spigot.yml" folgende Werte angepasst werden:
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

> Die Werte hierbei sollten nicht höher als 8 gestellt werden, andernfalls kann der oben angesprochene Lagg-Effekt entstehen!

### Paper Spigot

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8. Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

Die Sichtweite kann bei einem (Paper-)Spigot-Server in der "spigot.yml" Config angepasst werden, hierzu musst der Wert "view-disance" angepasst werden.
Um das Spielerlebnis selbst nicht besonders groß einzuschränken, wird empfohlen diesen Wert auf 5-6 zu stellen, wodurch der Server bis zu 50% entlastet wird.  

> Je nach belieben kann der Wert auch auf 4 gestellt werden, was als Beispiel sehr gut gegen Laggs hilft, wenn man Farmwelt-Server betreibt, die auf der Version 1.13+ betrieben werden

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

## Spawn-Limits

Bei diesem Schritt werden die generellen Spawn-Raten von Mobs auf dem Server etwas gedrosselt.
Hierbei gibt es nahezu keinen spürbaren Unterschied, als gegenüber den normalen Werten.
Dennoch kann es hierbei stellenweise bei Mob-Farmen als Beispiel vorkommen, dass die Mobfarm nicht so funktioniert wie geplant.

Um die Einstellungen hierfür anzupassen, muss die Config "bukkit.yml" bearbeitet werden.
Hier müssen dann beim Punkt "spawn-limits" die folgenden Werte angepasst werden:
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

> Du kannst die Werte hier natürlich noch gerne selbst anpassen sofern du dies wünscht, andernfalls sind die oben genannten Werte ein sehr guter Mittelwert.

Um das Spawning zusätzlich noch etwas zu verbessern, sollte in der "bukkit.yml" Config zusätzlich noch der Wert "monster-spawns" Wert im Punkt "tickes-per" geändert werden:
- monster-spawns: 2 #Default: 1

Sollte es generell ein Problem mit Monstern als Beispiel geben (wie man als Beispiel im Timings-Report ermitteln kann), so kann der Wert bis auf 5 gestellt werden.
Hierbei sollte sich das Verhalten des Servers dann mit jedem Wert angeschaut werden, um den besten Wert für den eigenen Server zu finden.

## Chunk-Verarbeitung

Minecraft arbeitet mit so genannten Chunks. Ein Chunk wird immer aus 16x16 Blöcken gebildet, welche dann aneinander gereiht werden und für den Client die Welt visuell darstellt.
Der Server arbeitet demnach auch nur mit Chunks und lädt benötigte Chunks dann in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server hierfür aufbringen, was stellenweise die Server in die Knie zwingt.

Server mit den Standard-Einstellungen werden geladene Chunks nie wieder entladen, was zur Folge hat, dass der RAM stellenweise sehr stark ausgelastet wird und unheimlich viel davon benötigt wird. Natürlich wird hierbei auch die Performance des Servers leider sehr stark runtergezogen, da immer mehr verarbeitet werden muss.

Damit der Server wirklich nur die Chunks geladen lässt, welche auch derzeit gebraucht werden, müssen folgenden Optionen in der "bukkit.yml" Config unter den Punkt "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

Die Option "period-in-ticks" bestimmt hierbei in welchen Abständen in Sekunden die Chunks entladen werden sollen.
Wenn gewünscht kann dieser Wert auch noch weiter runtergestellt werden, jedoch sollte man hierbei beachten, dass es dann möglicherweise ein ungewünschter Effekt auftritt: Ein Loop

Beim Loop würde der Chunk entladen werden, worauf der Chunk dann auch nur wenige Später wieder gebraucht wird, wodurch der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk erneut zu laden. Dies würde sich dann immer wieder wiederholen, was den Server stärker belastet, als wenn die Chunks für eine Minuten länger als Beispiel geladen bleiben.

## Spawn-Range

Mobs können immer in bestimmten Abständen von Spielern spawnen. Hierbei stellen wir diese Rate etwas runter, damit es keine Probleme mit dem Mob-Spawning gibt.
Diese Einstellung ist sehr wichtig, da bereits einige Einstellungen zum Thema Spawning angepasst wurden, welche oben erläutert wurden.

Wir stellen hierbei in der "spigot.yml" Config in den "world-settings" nun folgende Einstellungen um:
- mob-spawn-range: 3 #Default: 4

## Mob-Spawner

Gerade auf Citybuild-Servern werden sehr oft Spawner verwendet und teilweise massenhaft.
Spawner erstellen dann immer mehr Mobs auf dem Server, was zu vielen Problemen führen kann.

Mit dieser Option wird das Spawn-Verhalten des Spawners etwas angepasst, sodass der Server mit geringen Abständen den Spawner aktiviert.
Hierzu muss der folgende Wert in der "paper.yml" angepasst werden:
- mob-spawner-tick-rate: 3 #Default: 1

> Der oben genutzte Wert verändert das Verhalten nicht zu sehr und berührt das Spielverhalten nicht wirklich.

## Entity-Ranges

Bei diesem Punkt stellen wir nun ein, ab wann Entitys - also Tiere und Monster - aktiviert werden.
Damit gemeint ist, dass die Tiere sich als Beispiel bewegen können oder Monster auch Spieler erkennen können.
Grundlegend ist dies für alle Mobs aktiviert, jedoch in eine Art von Standby.
Im Standby-Mode können sich die Mobs weiterhin bewegen und auch Spieler erkennen, aber können sich die Mobs als Beispiel nur sehr stockend fortbewegen, wodurch der Server hierbei nur wenig Leistung aufbringen muss.

Auch hier müssen die Änderungen in der "spigot.yml" Config unter dem Punkt "entity-activation-range" gemacht werden.
Hierbei empfehlen wir folgende Werte zu verwenden:
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

## Trichter-Optimierung

Trichter sind in Minecraft ein sehr wichtiger Bestandteil des Spieles. Aber für Server sind diese wahres Gift!
Für jeden gesetzten Trichter muss der Server jede Sekunde 20x prüfen, ob ein Item zum aufsammeln bereit liegt.
Auch das verschieben der Items von Trichter zu Trichter oder in eine Kiste kostet wertvolle Leistung!

Um das ganze etwas zu verbessern, stellen wir die erhöhen wir die zeitlichen Abstände, zu wann der Server solche Aktionen jeweils durchführen soll.
Mit den hier verwendeten Werten wird solch eine Aktion alle 3 Sekunden durchgeführt und geprüft. Die Übertragungsraten ändert sich hierbei aber nicht.
Hierbei kann es jedoch passieren, dass Redstone-Clocks, welche mit Hoppern erstellt wurden, möglicherweise nicht mehr korrekt funktionieren.

Um die Einstellungen anzupassen, müssen hierbei folgende Werte in der "spigot.yml" Config angepasst werden:
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

> Stelle sicher, dass hierbei der Wert "use-hopper-check" auf "true" in der "paper.yml" Config gestellt wurde!

## Kollisionen

Seit der Minecraft-Version 1.9 gibt es Kollisionen, wodurch als Beispiel nicht mehr Spieler in Spieler stehen kann.
Hierbei bestimmen wir, wie oft Entitys sich allgemein kolledieren können. Gerade bei Mob-Farmen, wo viele Mobs auf einem engen Raum zusammentreffen, kann dies den Server teilweise stark beanspruchen.

Um die Einstellung anzupassen, muss in der "spigot.yml" folgender Wert angepasst werden:
- max-entity-collisions: 1 #Default: 8

Da Kollisionen bei Mobs keinen wirklichen Effekt haben, kann die Einstellung hier komplett runtergestellt werden.
Für Spieler wird dieser Wert nicht angewendet, sondern nur bei Mobs!

## Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, wodurch der Server weniger Entitys verarbeiten muss.
Gerade auch bei Servern, wo viele Items auf dem Boden liegen, kann dies für Spieler einen positiven Effekt nachsichziehen, wenn diese Radius erhöht wird.
Auch hierbei gilt, dass man einen guten Mittelwert findet, da andernfalls wieder eine Art Lagg-Effekt entsteht, wodurch der Server eine höhere Range prüfen muss, was dann wie zu viel Leistung benötigt!

Um die Einstellung anzupassen, muss unter dem Punkt "merge-radius" in der "spigot.yml" folgende Werte angepasst werden:
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

> Die Werte hierbei sollten nicht höher als 8 gestellt werden, andernfalls kann der oben angesprochene Lagg-Effekt entstehen!

## Explosionen

Bei Paper Spigot wurden viele Teile von Minecraft-Servern umprogrammiert, damit der Server besser läuft. So auch bei Explosionen!
Hierbei wickelt die Software Explosionen besser ab, sodass größere Laggs auf dem Server vermieden werden.

Hierzu muss der folgende Wert in der "paper.yml" Config angepasst werden:
- optimize-explosions: true #Default: false

## Truhen

Auch bei Kisten gibt es eine Kleinigkeit die man optimieren kann! Wenn eine Katze auf der Kiste sitzt, dann kann man diese nicht öffnen.
Damit der Server das prüfen kann, muss der Server alle Mobs in einem bestimmten Radius durchgehen und prüfen, ob eines dieser Mobs auf der Kiste sitzt, was leider sehr aufwendig ist und das jedes Mal, wenn eine Kiste geöffnet wird!

Die Option kann man einfach mit folgender Änderung deaktiviert werden:
- disable-chest-cat-detection: true #Default: false

## Inventare

Das Inventar wird viel gebraucht, aber Inventar ist nicht Inventar. Als Beispiel ist eine Kiste oder eine Werkbank auch ein Inventar.
Mit dieser Änderung kann man auch hier den Server etwas schohnen, ohne das jemand davon etwas merkt!
Hierbei stellen wir grundsätzlich nur ein, nach wie vielen Ticks der Server jedes Inventar aktualisieren soll.

Dafür muss der folgende Wert in der "paper.yml" Config bearbeitet werden:
- container-update-tick-rate: 3 #Default: 1

> Der Wert sollte hierbei nicht höher als 5 gestellt werden, andernfalls kann das Inventar teilweise etwas verbuggt sein!
> Bei Spielmodi, wie etwas SurvivalGames, wo alle Spieler auf die Kisten in der Mitte zugreifen und sich die besten Items ergattern wollen, sollte der Wert nicht geändert werden und auf "1" belassen werden.

## Licht-Updates

Paper Spigot bietet auch hier wieder eine alternative Möglichkeit an, dass die Licht-Updates in der Welt besser durchgeführt werden.
Bei dieser Methode werden die Licht-Updates nicht innerhalb eines Ticks durchgeführt, was dann je nach größere des Updates den Server teilweise zum stocken bringen kann, sondern außerhalb der Ticks. Das ganze nennt man bei Minecraft dann Async-Threads.

Hierzu muss folgende Änderung ebenfalls wieder in der "paper.yml" Config gemacht werden:
- queue-light-updates: true #Default: false

## Speichern von Chunk-Daten

Sobald Änderungen in einem Chunk durchgeführt worden sind, werden die Änderungen nicht direkt auf die Festplatte geschrieben, sondern erstmal in den RAM geladen.
Dennoch werden alle Änderungen sehr oft gespeichert, was teilweise extreme Laggs verursachen kannm, gerade dann, wenn der Server zwanghaft massenhafte Änderungen sichern möchte.

Mit dieser Änderung verringern wir die Anzahl an Chunks, welche maximal bei einem Speichervorgang gespeichert werden können.
Durch die Änderung dieser Option wird der RAM jedoch stellenweise mehr beansprucht, da die Änderungen länger im RAM bleiben!

Änderungen an folgender Einstellung muss in der "paper.yml" Config vorgenommen werden:
- max-auto-save-chunks-per-tick: 10 #Default: 24

## Redstone

Sehr oft wird Redstone verwendet mit teilweise extrem großen Schaltungen. Auf öffentlichen Servern ist dies teilweise sogar die schwächste Stelle bei nahezu 90% der Server, da mit Redstone massive Laggs verursacht werden können.
Hierbei greifen wir auch wieder auf eine alternative Verarbeitung von Redstone von Paper Spigot, was Redstone nahezu schadlos macht und dabei die selbe Funktionsweise hat, wie in Vanilla!

Hierzu muss folgende Einstellung in der "paper.yml" gemacht werden:
- use-faster-eigencraft-redstone: true #Default: false

> **Achtung! In einigen Situationen kann dies die Funktionsweise von Redstone sehr stark verändern!**
