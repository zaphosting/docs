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

### Bukkit

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8.
Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

### Spigot

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8.
Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

### Paper Spigot

## Sichtweite

Eine Maßnahme welche sehr oft ergriffen wird, ist es die Sichtweite runterzustellen. Standardmäßig liegt die Sichtweite bei 10 Chunks, viele Spieler spielen aber mit weit aus weniger, wie etwa 6-8.
Einige Spieler übertreiben es aber auch sehr mit den Chunks und stellen dieses teilweise auf 32 Chunks als Beispiel, wodurch der Server dann all dieses Chunks laden und verarbeiten muss, was sehr viel Leistung kostet.

## Daten-Komprimierung

Auf einem Server werden permanent zwischen Server und den verbundenen Spielern ausgetauscht.
Dabei werden etwas die Bewegungen von den Spieler selbst an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler.
Aber auch Spieler-Aktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel sind ein Teil der Daten, welche immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austausches etwas eleganter zu gestallten, kann man die Größe der gepackten Daten verdoppeln, wodurch erzielt wird, dass der Server im Vergleich zu vorher nur 50% des Aufwandes betreiben muss, um die gleichen Daten mit den Spielern auszutauschen.
Hierzu muss ebenfalls wieder in der "server.properties" Config der Wert "network-compression-threshold" angepasst werden. Hierbei sollte der Wert auf 512 gestellt werden.
Auch hier haben wir bereits einen Eintrag in unserer Dokumentation  zu, welcher [hier](https://zap-hosting.com/guides/docs/de/minecraft_default_config/#network-compression-threshold) gefunden werden kann.

