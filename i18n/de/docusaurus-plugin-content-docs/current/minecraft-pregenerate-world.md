---
id: minecraft-pregenerate-world
title: "Minecraft: Welt vorgenerieren (Chunks)"
description: Informationen darüber, wie du deine Welt (Chunks) auf deinem Minecraft-Server von ZAP-Hosting vorgenerieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Welt vorgenerieren (Chunks)
services:
  - gameserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Möchtest du deine Welt nicht erst während des Spielens, sondern bereits im Voraus schnell, effizient und sicher vorab generieren? Minecraft bietet standardmäßig keine integrierte Funktion dafür. Allerdings kann dies durch speziell dafür vorgesehene Plugins oder Mods umgesetzt werden. Wie du diese benutzt und welche Aspekte es dabei zu beachten gibt, wird im Folgenden genauer erläutert.



## Voraussetzungen

Zunächst muss sichergestellt werden, dass dein Server für die Nutzung von Plugins oder Mods ausgelegt ist. Für die Nutzung  wird die Verwendung  einer der folgenden Minecraft-Varianten vorausgesetzt: 

- Minecraft: Forge, Minecraft Fabric (Mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (Plugins) 

Falls du derzeit keine dieser Minecraft-Varianten nutzt, kannst du die [Spielwechsel](gameserver-gameswitch.md) Option verwenden, um das gewünschte Spiel auszuwählen.


## Installation
Die gängigste Methode zur Vorab-Generierung von Chunks ist die Nutzung von [Chunky](https://github.com/pop4959/Chunky), das für zahlreiche Server-Implementierungen sowohl als Plugin als auch in einer Mod-Variante verfügbar ist. In diesem Beispiel wird die Chunk-Generierung anhand von Chunky erläutert und veranschaulicht.

| Variante | Download                                                     |
| -------- | ------------------------------------------------------------ |
| Mod      | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin   | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Lade **Chunky** entweder als Plugin oder Mod herunter und installiere es auf deinem Server. Falls du nicht genau weißt, wie [Plugins](minecraft-pluginuploader.md) oder [Mods](minecraft-forge-fabric-add-mods-modpacks) installiert werden, hilft dir die entsprechende Anleitung dazu weiter.




## Anwendung

Nachdem **Chunky** erfolgreich installiert wurde, kannst du mit der Generierung der Chunks beginnen. Der Prozess wird mit dem Befehl `chunky start` gestartet.

Falls du die Generierung vorübergehend unterbrechen und später fortsetzen möchtest, kannst du dies mit den Befehlen `chunky pause` und `chunky continue` tun. Um den Vorgang vollständig zu beenden, verwende `chunky cancel`. Die Befehle kannst du entweder über die Live Konsole oder als Operator direkt im Spiel auf deinem Server ausführen.

:::warning Übermäßige Auslastung
Eine dauerhafte Überschreitung der Resourcen Limits über einen längeren Zeitraum kann zu einer temporären Sperrung führen. Um dies zu vermeiden, sollte die Chunk-Generierung in einem ausgewogenen Tempo und Umfang erfolgen, sodass die Systemlast im akzeptablen Bereich bleibt.

Weitere Informationen zu den Ressourcengrenzen und möglichen Maßnahmen kann aus unserer [Ressourcelimit](gameserver-resourcelimit.md) Anleitung entnommen werden. 
:::



## Commands

In diesem Abschnitt können alle Befehle entnommen werden, die von Chunky für die Generierung und Verwaltung von Chunks angewendet werden können. 

#### Task Management

| Befehl          | Beschreibung                                                 |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Startet eine neue Aufgabe zur Erzeugung von Chunks aus der aktuellen Auswahl |
| chunky pause    | Pausiert die aktuellen Chunk-Generierungsaufgaben und speichert den Fortschritt |
| chunky continue | Führt aktuelle oder gespeicherte Chunk-Generierungsaufgaben weiter aus |
| chunky cancel   | Stoppt die aktuellen Chunk-Generierungsaufgaben und bricht den Fortschritt ab. |



#### Selection

| Befehl                                     | Beschreibung                                                 |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Setzt die aktuell ausgewählte Welt                           |
| chunky shape `<shape>`                     | Setzt die zu erzeugende Form                                 |
| chunky center [`<x>` `<z>`]                | Legt die aktuelle Position des Mittelblocks fest             |
| chunky radius `<radius>`                   | Legt den aktuellen Radius fest                               |
| chunky worldborder                         | Setzt den Mittelpunkt und den Radius so, dass sie mit der Weltgrenze in der ausgewählten Welt übereinstimmen |
| chunky spawn                               | Setzt den Mittelpunkt auf den Spawn-Punkt                    |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Setzt die Auswahl nach Eckkoordinaten                        |
| chunky pattern `<pattern>`                 | Legt das bevorzugte Generierungsmuster fest                  |
| chunky slection                            | Anzeige der aktuellen Auswahl                                |





#### Miscellaneous

| Befehl                    | Beschreibung                                                 |
| ------------------------- | ------------------------------------------------------------ |
| chunky silent             | Umschalten der Anzeige von Aktualisierungsmeldungen          |
| chunky quiet `<interval>` | Lege das Ruheintervall in Sekunden für Aktualisierungsmeldungen fest |
| chunky progress           | Zeige den Fortschritt vor der Generierung im Spiel für alle Aufgaben an |
| chunky reload             | Aktualisiert die Konfiguration                               |
| chunky trim               | Lösche Chunks außerhalb der Auswahl                          |



## Abschluss

Durch das Befolgen der Schritte hast du **Chunky** erfolgreich installiert und kannst nun deine Welt (Chunks) vorab generieren. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
