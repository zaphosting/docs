---
id: minecraft-commands
title: "Minecraft: Allgemeine Server-Befehle"
description: "Entdecke, wie du Minecraft-Befehle nutzt, um dein Gameplay zu verbessern und Funktionen effektiv zu managen → Jetzt mehr erfahren"
sidebar_label: Allgemeine Befehle
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### Was sind Befehle?

Befehle können in Minecraft genutzt werden, um zusätzliche oder spezielle Funktionen auszuführen. Minecraft selbst enthält bereits über **100 Befehle** ohne jegliche Modifikation, mit denen man eine Vielzahl von Funktionen aktivieren, verwalten oder ausführen kann.

In diesem Artikel unserer Dokumentation gehen wir auf die wichtigsten Befehle ein, die sehr häufig genutzt und benötigt werden.
Wenn ein Befehl hier nicht aufgeführt ist, hilft das offizielle [Minecraft-Wiki](https://minecraft-de.gamepedia.com/) weiter, da dort jeder Bereich (inklusive aller Befehle) detailliert erklärt wird.

<InlineVoucher />

### Nutzung

Jeder Befehl beginnt immer mit einem "/". Wenn du also einen Befehl nutzen möchtest, musst du im Spiel den Chat öffnen und zuerst das "/" eingeben, danach kannst du den Befehl eintippen. Mit der TAB-Taste wird eine Vorschau aller verfügbaren Befehle angezeigt. So können Befehle schnell und einfach automatisch vervollständigt werden – ähnlich wie bei Suchanfragen im Internet.

:::info
Wenn du Befehle über die Konsole ausführst, ist das "/" nicht nötig und muss weggelassen werden!

Dieses Zeichen dient nur dazu, im Spiel zwischen einer normalen Chatnachricht und einem Befehl zu unterscheiden.
:::

### Rechte / Berechtigungen

Um Befehle nutzen zu können, sind die nötigen Rechte erforderlich. In Minecraft-Vanilla oder Forge gibt es kein echtes Berechtigungssystem, das von Plugins wie bei Spigot genutzt werden kann. Hier wird nur das Level-System der OP-Rechte verwendet. Eine Anleitung zum OP-Rechte-System findest du hier: [OP Permissions](minecraft-addop.md)

Wenn ein Berechtigungssystem installiert ist und Rechte für bestimmte Minecraft-Befehle vergeben werden sollen, können die jeweiligen Berechtigungen wie unten beschrieben zugewiesen werden.

:::info
Die Syntax der Berechtigungen für jeden Befehl ist immer gleich und kann entsprechend angepasst werden.

Wenn du zum Beispiel Berechtigungen für den Locate-Befehl vergeben möchtest, muss folgende Berechtigung gesetzt werden: ``minecraft.command.locate``
:::



## Befehle

### /tp

Mit dem **/tp**-Befehl können Admins sich zu anderen Spielern teleportieren oder einen Spieler zu einem gewünschten Zielspieler teleportieren.
Der Befehl kann auch genutzt werden, um Mobs zu teleportieren oder sich selbst an eine bestimmte Position zu teleportieren, indem man Koordinaten angibt. Details findest du weiter unten.

**Beispiele:**

``/tp PlayerA``

Teleportiert den Ausführenden des Befehls zu einem anderen Spieler.

``/tp PlayerA PlayerB``

Teleportiert *PlayerA* zu *PlayerB*. Egal, wer den Befehl ausführt, die angegebenen Spieler werden teleportiert.
Wenn der Ausführende *PlayerB* ist, würde *PlayerA* zu ihm teleportiert.

``/tp -100 75 985``

Der Ausführende des Befehls wird zu den angegebenen Koordinaten teleportiert.
Wenn vor den Koordinaten ein Spieler angegeben wird (``/tp PlayerA -100 75 985``), wird stattdessen dieser Spieler dorthin teleportiert.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teleportiert dich zur nächsten *Kuh* im Umkreis von 10 Blöcken.
``@s`` kann auch durch einen Spieler wie *PlayerA* ersetzt werden, der dann teleportiert wird.

### /locate

Mit dem **/locate**-Befehl kannst du die Koordinaten eines gesuchten Bauwerks finden, z.B. ein Dorfbewohnerdorf.

**Beispiele:**

``/locate fortress``

Findet und zeigt die Position der nächsten Netherfestung an, wenn du dich im Nether befindest.

``/locate village``

Findet und zeigt die Position eines Dorfbewohnerdorfs an, ähnlich wie bei Netherfestungen.

### /worldborder

Mit diesem Befehl kannst du eine Weltgrenze innerhalb der aktuellen Welt setzen. Dadurch wird verhindert, dass Spieler die Welt über die angegebene Grenze hinaus erkunden.

**Beispiele:**

``/worldborder center 0 0``

Setzt den Mittelpunkt der Welt auf die Koordinaten 0;0, von wo aus der Radius berechnet und gesetzt wird.

``/worldborder set 16000``

Setzt die Grenze auf 16.000x16.000 Blöcke. Das entspricht einem Radius von 8.000 Blöcken in jede Richtung.

### /effect

Damit können Spielern (oder auch Entities) normale Trankeffekte gegeben werden.
Einige Effekte sind nur über Befehle erhältlich, wie z.B. der Glückseffekt, der sonst keine Funktion hat.

:::info
Der Befehl hat sich im Laufe der Versionen geändert, wurde erweitert und angepasst.

Die Beispiele unten stammen aus der neuesten Version und können in älteren Versionen anders aussehen!
:::

**Beispiele:**

``/effect give PlayerA minecraft:speed``

Gibt dem Spieler *PlayerA* den Geschwindigkeitseffekt **Stufe 1**.

### /gamerule

Mit diesem Befehl kannst du spezielle Einstellungen in einer Welt ändern oder Funktionen aktivieren/deaktivieren.
Zum Beispiel kann, wie im Beispiel unten, aktiviert werden, dass Spieler ihr Inventar beim Tod behalten.

**Beispiele:**

``/gamerule keepInventory true``

Diese Einstellung sorgt dafür, dass Spieler ihr Inventar (inklusive Erfahrung) beim Tod behalten.

``/gamerule mobGriefing false``

Dieser Befehl definiert, ob Monster wie Creeper der Welt Schaden zufügen können oder nicht.

### /save-all

Der Server speichert die Welt alle 5 Minuten automatisch auf die Festplatte.
Mit diesem Befehl wird die Welt sofort gespeichert und der Countdown für das automatische Speichern auf 5 Minuten zurückgesetzt.

### /tps

Mit diesem Befehl kannst du die TPS (Ticks pro Sekunde) bei Spigot und Paper Spigot abfragen.
TPS gibt Auskunft über die Performance des Servers. Die maximale und beste TPS, die ein Server erreichen kann, sind 20.
Die TPS zeigen die letzten 60 Sekunden an, die zwei folgenden Werte sind der Durchschnitt der letzten 5 und 15 Minuten.

### /ban

Mit diesem Befehl kannst du einen Spieler vom Server ausschließen, sodass er unter keinen Umständen mehr auf den Server kommt. Das Spieler-Konto wird anhand der UUID gebannt.

:::info
Auf Servern mit deaktiviertem Online-Modus können Spieler ihren Namen ändern und so wieder Zugang erhalten. In so einem Fall ist ein IP-Bann über Plugins die beste Lösung.
:::

**Beispiele:**

``/ban PlayerA``

Der Spieler *PlayerA* wird vom Server gebannt.

``/ban @a``

Mit diesem Befehl werden alle aktuellen Spieler auf dem Server gebannt. Admins mit OP-Rechten sind davon nicht betroffen und bleiben auf dem Server.

### /pardon

Mit diesem Befehl kannst du einen Bann aufheben, sodass der Spieler wieder auf den Server kann.

**Beispiele:**

``/pardon PlayerA``

Der Spieler *PlayerA* wird von der Bannliste entfernt und kann wieder auf den Server.

### /kick

Dieser Befehl trennt die Verbindung zwischen Server und dem angegebenen Spieler. Der Spieler wird gezwungen, den Server zu verlassen, kann sich aber wieder verbinden.

**Beispiele:**

``/kick PlayerA``

Wirft den Spieler *PlayerA* mit der Nachricht „Kicked by an operator“ vom Server.

``/kick PlayerA Reason``

Wirft den Spieler *PlayerA* mit der Nachricht „Reason“ vom Server.

<InlineVoucher />