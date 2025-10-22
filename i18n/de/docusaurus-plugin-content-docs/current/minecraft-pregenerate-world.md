---
id: minecraft-pregenerate-world
title: "Minecraft: Welt vorab generieren (Chunks)"
description: "Entdecke, wie du Minecraft-Welten effizient mit Plugins oder Mods vorab generierst für flüssigeres Gameplay und optimierte Serverperformance → Jetzt mehr erfahren"
sidebar_label: Welt vorab generieren (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Willst du deine Welt schnell, effizient und sicher vorab generieren, statt während des Spielens? Minecraft bietet standardmäßig keine integrierte Funktion dafür. Mit speziell entwickelten Plugins oder Mods lässt sich das aber realisieren. Wie du diese nutzt und worauf du achten musst, erklären wir dir hier genauer.



## Vorbereitung

Zuerst musst du sicherstellen, dass dein Server für den Einsatz von Plugins oder Mods ausgelegt ist. Folgende Minecraft-Varianten sind für die Nutzung erforderlich:

- Minecraft: Forge, Minecraft Fabric (Mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (Plugins)

Falls du aktuell keine dieser Minecraft-Varianten nutzt, kannst du über die [Spielwechsel(gameserver-gameswitch.md) Option das gewünschte Spiel auswählen.


## Installation
Die gängigste Methode, um Chunks vorab zu generieren, ist die Nutzung von [Chunky](https://github.com/pop4959/Chunky), das für zahlreiche Server-Implementierungen sowohl als Plugin als auch als Mod-Version verfügbar ist. In diesem Beispiel erklären und zeigen wir die Chunk-Generierung mit Chunky.

| Variante | Download |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Lade **Chunky** entweder als Plugin oder Mod herunter und installiere es auf deinem Server. Falls du nicht genau weißt, wie man [Plugins](minecraft-pluginuploader.md) oder [Mods](minecraft-forge-fabric-add-mods-modpacks) installiert, helfen dir die entsprechenden Anleitungen weiter.




## Nutzung

Sobald **Chunky** erfolgreich installiert ist, kannst du mit der Generierung der Chunks starten. Der Prozess wird mit dem Befehl `chunky start` gestartet.

Wenn du die Generierung vorübergehend unterbrechen und später fortsetzen möchtest, kannst du das mit den Befehlen `chunky pause` und `chunky continue` machen. Um den Vorgang komplett zu beenden, nutze `chunky cancel`. Die Befehle kannst du entweder über die Live-Konsole oder als Operator direkt im Spiel auf deinem Server ausführen.

:::warning Überlastung vermeiden
Ein dauerhaftes Überschreiten der Ressourcenlimits über längere Zeit kann zu einer temporären Sperrung führen. Um das zu vermeiden, sollte die Chunk-Generierung in einem ausgewogenen Tempo und Umfang stattfinden, sodass die Systemlast im akzeptablen Bereich bleibt.

Weitere Infos zu Ressourcenlimits und möglichen Maßnahmen findest du in unserer [Ressourcenlimit](gameserver-resourcelimit.md) Anleitung. 
:::



## Befehle

Hier findest du alle Befehle, die Chunky zur Generierung und Verwaltung von Chunks nutzt.

#### Aufgabenverwaltung

| Befehl          | Beschreibung                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Startet eine neue Chunk-Generierungsaufgabe aus der aktuellen Auswahl |
| chunky pause    | Pausiert die laufenden Chunk-Generierungsaufgaben und speichert den Fortschritt |
| chunky continue | Setzt laufende oder gespeicherte Chunk-Generierungsaufgaben fort |
| chunky cancel   | Stoppt die laufenden Chunk-Generierungsaufgaben und bricht den Fortschritt ab |



#### Auswahl

| Befehl                                    | Beschreibung                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Setzt die aktuell ausgewählte Welt                            |
| chunky shape `<shape>`                     | Legt die Form der Generierung fest                            |
| chunky center [`<x>` `<z>`]                | Setzt den aktuellen Mittelpunkt-Block                         |
| chunky radius `<radius>`                   | Legt den aktuellen Radius fest                                |
| chunky worldborder                         | Setzt Mittelpunkt und Radius passend zur Weltgrenze der ausgewählten Welt |
| chunky spawn                               | Setzt den Mittelpunkt auf den Spawnpunkt                      |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Setzt die Auswahl anhand von Eckkoordinaten                   |
| chunky pattern `<pattern>`                 | Legt das bevorzugte Generierungsmuster fest                   |
| chunky slection                            | Zeigt die aktuelle Auswahl an                                 |





#### Sonstiges

| Befehl                   | Beschreibung                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Schaltet die Anzeige von Update-Meldungen ein/aus     |
| chunky quiet `<interval>` | Legt das Intervall in Sekunden für Update-Meldungen fest |
| chunky progress           | Zeigt den Fortschritt der Vorab-Generierung im Spiel für alle Aufgaben an |
| chunky reload             | Lädt die Konfiguration neu                            |
| chunky trim               | Löscht Chunks außerhalb der Auswahl                   |



## Fazit

Wenn du die Schritte befolgt hast, hast du Chunky erfolgreich installiert und kannst jetzt deine Welt (Chunks) vorab generieren. Glückwunsch! Wenn du alles richtig gemacht hast, solltest du erfolgreich eine Verbindung zum Server aufgebaut haben. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />