---
id: minecraft_commands
title: Allgemeine Befehle
sidebar_label: Allgemeine Befehle
---

### Was sind Befehle?

Mit Befehlen können in Minecraft zusätzliche Funktionen genutzt werden oder auch spezielle Funktionen ausgeführt werden.
Minecraft selbst bringt bereits ohne jegliche Modifikation mit über **100 Befehlen** mit sich, mit denen sich die verschiedensten Funktionen aktivieren, verwalten oder Aktionen durchführen lassen.

In diesem Beitrag unserer Dokumentation gehen wir auf die wichtigesten Befehle ein, welche sehr oft genutzt und gebraucht werden.
Sollte ein Befehl hier nicht aufgelistet sein, so ist hierbei das offizielle [Minecraft-Wiki](https://minecraft-de.gamepedia.com/) sehr hilfreich, da dort jeder noch so kleiner Bestandteil (inkl. aller Befehle) genauer erklärt werden.

### Benutzung

Jeder Befehle beginnt grundsätzlich mit einem "/". Möchte man also einen Befehl nutzen, so muss man den Chat im Spiel öffnen und vorerst das "/" eintippen, worauf dann der Befehl selbst geschrieben werden kann.
Durch drücken der TAB-Taste wird eine Vorschau alle verfügbaren Befehle angezeigt bzw. aber der 1.13 eine Liste aller Befehle angezeigt.
Hiermit können Befehle auch schnell und einfach automatisch vervollständig werden, wie man es als Beispiel von Suchanfragen im Internet kennt.

> Sollten Befehle über die Konsole ausgeführt werden, so ist das "/" hierbei nicht notwendig und muss entfernt werden!
> Dieses Zeichen dient nur dafür, um im Spiel zwischen einer normalen Chat-Nachricht oder einem Befehl unterscheiden zu können.

### Rechte / Permissions

Um Befehle verwenden zu können sind die dafür erfoderlichen Rechte notwendig.
In Minecraft-Vanilla oder Forge gibt es kein richtiges Permissions-System, wie es bei Spigot als Beispiel durch Plugins installiert werden kann.
Hierbei kann nur auf das Level-System der OP-Rechte zurückgegriffen werden. Wie genau das geht, haben wir hier beschrieben: [*Klick*](https://zap-hosting.com/guides/docs/de/minecraft_addop/#rechte-level)

Sollte ein Permissions-System installiert worden sein und es geüwnscht ist auch Rechte auf gewisse Minecraft-Befehle zu verteilen, so können wie unten im Hinweis beschrieben die jeweiligen Permissions verteilt werden.

> Die Permissions sind hierbei immer gleich aufgebaut und können für jeden Befehl entsprechend angepasst werden.
> Möchte man als Beispiel für den Locate-Befehl Rechte vergeben, so muss folgende Permissions gesetzt werden: ``minecraft.command.locate``

## Befehle

### /tp

Mit dem **/tp**-Befehl können Administratoren sich zu anderen Spielern teleportieren oder auch einen Spieler zu einem gewünschten Ziel-Spieler teleportieren.
Mit dem Befehl können aber auch Mobs teleportiert werden oder sich durch die Angabe von Koordinaten zu diesem Ort teleportiert werden als Beispiel. Weiteres dazu findest du weiter unten beschrieben.

**Beispiele:**

``/tp SpielerA``

Teleportiert den Ausführer des Befehls zu einem anderen Spieler

``/tp SpielerA SpielerB``

Teleportiert *SpielerA* zu *SpielerB*. Unabhängig vom Ausführer des Befehls werden immer die angegebenen Spieler teleportiert.
Angenommen der Ausführer des Befehles heißt *SpielerB*, so würde *SpielerA* zu sich selbst teleportiert werden.

``/tp -100 75 985``

Hierbei wird der Ausführer des Befehls zu den angegebenen Koordinaten teleportiert.
Durch Angabe eines Spielers vor den Koordinaten (``/tp SpielerA -100 75 985``), würde der Befehl statt sich selbst zu teleportieren, den angegeben Spieler dorthin teleportieren.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teleportiert einen selbst zu der nächsten *Kuh* innerhalb eines 10 Block-Radius.
``@s`` kann hierbei auch durch einen Spieler wie etwas *SpielerA* getauscht werden, wodurch dieser Spieler dann teleportiert werden würde.

### /locate

Mit dem **/locate**-Befehl ist es möglich die Koordinaten des jeweils gesuchten Bauwerkes sich ausgeben zu lassen, wie etwas ein Villager-Dorf.

**Beispiele:**

``/locate fortress``

Findet und gibt die Position der nächsten Netherfestung aus, wenn man sich im Nether befindet.

``/locate village``

Findet und gibt die Position wie bei der Netherfestaus aus, in diesem Fall jedoch für ein Villager-Dorf.

### /worldborder

Mit diesem Befehl kann eine Welt-Bregrenzung erstellt werden in der aktuellen Welt.
Dadurch ist es Spielern nicht möglich die Welt weiter zu erkunden, als wie mit diesem Befehle festgelegt wurde.

**Beispiele:**

``/worldborder center 0 0``

Hiermit wird der Mittelpunkte der Welt auf die Koordinaten 0;0 gesetzt, von wo aus der Radius berechnet und gesetzt wird.

``/worldborder set 16000``

Setzte die Grenze auf 16.000x16.000 Blöcke. Also wäre dies ein 8.000 Blöck Radius in jede Richtung.  

### /effect

Hierdurch können Spielern (oder auch Entitys) normale Trank-Effekte gegeben werden.
Einige Effekte sind jedoch nur über den Befehl zu ergattern, wie etwas den Glücks-Effekt, welcher jedoch bis heute noch keine Funktion erhalten hat.

> Der Befehl hat sich im laufe der Versionen gewandelt und wurde weiter ausgebaut und verändert.
> Die hier gezeigten Beispiele für die Befehle stammen aus der neuste Version und können daher in älteren Versionen abweichend aussehen! 

**Beispiele:**

``/effect give SpielerA minecraft:speed``

Hiermit wird dem Spieler *SpielerA* ein Schnelligkeits-Effekt der **Sss 1 gegeben

Command Example Content

### /gamerule

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /gamemode

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /save-all

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /tps

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /ban

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /pardon

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /kick

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /whitelist

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content

### /summon

Command Description Contect

**Beispiele:**

``/worldborder``

Command Example Content
