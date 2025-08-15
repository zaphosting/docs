---
id: minecraft-worlds
title: "Minecraft: Server Welten verwalten"
description: Hier erfährst du, wie du mit ZAP-Hosting Welt-Saves auf deinem Minecraft-Server verwalten, konvertieren und erstellen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Welten verwalten
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Grunde speichert Minecraft Spielstände als **Welten**, wobei jede Welt ein eigenständiger Spielstand ist. In dieser Anleitung zeigen wir dir, wie du Welten auf deinem Minecraft-Spielserver verwaltest, einschließlich der Konvertierung von Welten zwischen Plattformen, der Regenerierung von Welten, der Sicherung deiner lokalen und Server-Welten und dem Hochladen von Welten auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um deine Welten zu verwalten, musst du erst mal über FTP auf deinen Minecraft-Spielserver zugreifen. Wenn du nicht weißt, wie FTP funktioniert, schau dir unsere Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) an.

## Vergleich der Plattformunterschiede

Ein wichtiger Unterschied zwischen Vanilla-Servern und Serverplattformen ist, dass Vanilla-Server die normale Welt, die Nether- und die End-Dimensionen in einem einzigen Speicher kombinieren.

Andere Serverplattformen wie Spigot, PaperMC und Bukkit teilen jede Dimension in separate Speicher auf. In der Tabelle unten siehst du, wie eine Beispielwelt namens **zapdocs** von beiden Serverplattformen behandelt wird.

| Weltweite Dimension | Vanilla-Server (kombiniert) | Serverplattformen (einzeln) |
| ------------------- | --------------------------- | --------------------------- |
| Normal/Overworld    | zapdocs                     | zapdocs                     |
| Nether              | zapdocs                     | zapdocs_nether              |
| The End             | zapdocs                     | zapdocs_the_end             |

## Welten umwandeln

Wenn du zwischen einem Vanilla-Server und einer Serverplattform wechselst, möchtest du vielleicht deine Welt speichern. Wegen der oben genannten Unterschiede musst du die Dateistruktur anpassen, um einzelne Welten für die Nether- und Enddimensionen je nach Aktion zu extrahieren oder zusammenzuführen.

:::info
Das ist nur nötig, wenn du zwischen Vanilla- und Server-Plattformen wechselst und dabei eine bestehende Welt behalten und verschieben möchtest. Wenn du einfach nur zwischen Vanilla- oder Server-Plattformen wechselst, musst du nichts konvertieren.
:::

:::note
Stell sicher, dass du den Server ausschaltest, bevor du weitermachst, damit es keine Probleme oder Rückgängigmachungen gibt.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Von Vanilla konvertieren" default>

Um eine Welt vom Vanilla-Format in das Server-Plattform-Format zu konvertieren, musst du bestimmte Ordner extrahieren, um für jede Dimension neue individuelle Welten zu erstellen. Natürlich solltest du alle Welten auf einen neuen Server verschieben, auf dem eine Server-Plattform wie Spigot, PaperMC oder Bukkit läuft.

Geh per FTP auf deinen Server und folge dem Pfad `../vanilla/[deine_welt]`, um zu der Welt zu gelangen, die du umwandeln möchtest. Such die Ordner **DIM1** und **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

Der Ordner **DIM1** ist für die Enddaten und der Ordner **DIM-1** für die Netherdaten.

Du musst jeden Ordner in einen eigenen neuen Weltordner verschieben, und zwar so:
- Für Nether erstellst du einen neuen Ordner `[deine_welt]_nether` im Stammordner. Verschieb den Ordner **DIM-1** in diesen neuen separaten Weltordner.
- Mach dasselbe für „The End“ und leg einen neuen Ordner `[deine_welt]_the_end` im Stammordner an. Verschieb den Ordner **DIM1** in diesen neuen separaten Weltordner.

:::info
Möglicherweise musst du die `DIM`-Ordner überschreiben, aber das ist normal, da Serverplattformen standardmäßig alle Dimensionen sofort generieren.
:::

In this example, the world is called `world` therefore new `world_nether` and `world_the_end` folders were created in the root folder, with the appropriate `DIM` folder moved into them.

In diesem Beispiel heißt die Welt `world`, also wurden im Hauptordner neue Ordner `world_nether` und `world_the_end` angelegt und die passenden `DIM`-Ordner dorthin verschoben.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Die drei einzelnen Welten können jetzt auf Serverplattformen genutzt werden.

</TabItem>

<TabItem value="converting-to-vanilla" label="In Vanilla umwandeln">

Um eine Welt von einer Serverplattform ins Vanilla-Format zu bringen, machst du es quasi genau umgekehrt. Du musst die Daten aus den einzelnen Welten für die Nether- und End-Dimensionen extrahieren und sie dann zu einem einzigen Weltformat zusammenfügen. Natürlich solltest du die kombinierte Welt auf einen neuen Server mit Vanilla-Server verschieben.

Melde dich über FTP bei deinem Server an und gib den Pfad zum Root-Server ein. Such die drei einzelnen Weltordner, die `[deine_welt]`, `[deine_welt]_nether` und `[deine_welt]_the_end` heißen sollten, wobei `[deine_welt]` den Namen der Welt ersetzt.

Öffne den Ordner `[deine_welt]_nether` und verschiebe den Ordner `DIM-1` in den Hauptordner `[deine_welt]`. In diesem Beispiel heißt die Welt wie zuvor standardmäßig `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Mach jetzt dasselbe für den Ordner `[deine_welt]_the_end` und verschieb `DIM1` in den Hauptordner `[deine_welt]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

Die kombinierte Welt kann jetzt auf einem Vanilla-Server genutzt werden.

</TabItem>
</Tabs>

## Welten generieren

Das Erstellen von Welten ist ganz einfach. Du kannst entweder eine komplett neue Welt erstellen oder die aktuelle Welt neu generieren. Minecraft nutzt ein **Seed**-System, bei dem jede Welt einen einzigartigen Seed hat. Das heißt, dass du mit dem Seed allein eine exakte Kopie einer Welt erstellen kannst.

<Tabs>
<TabItem value="generating-new" label="Neue Welt erstellen" default>

Um eine neue Welt zu erstellen, schalte einfach den Server aus und verbinde dich über FTP mit dem Server. Öffne auch die Konfigurationsdatei `server.properties`, entweder über den Abschnitt **Configs** im Webinterface-Panel deines Servers oder über FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Um jetzt eine neue Welt zu erstellen, hast du zwei Möglichkeiten:
- Such über FTP die Welt, die genauso heißt wie der Parameter `level-name` in der Konfigurationsdatei, und lösche sie.
- Ändere den Parameter `level-name` in der Konfigurationsdatei und speichere die Datei.

Wenn du die alte Speicherdatei behalten willst, empfehlen wir Option 2, da die Welt auf dem Server bleibt, aber "inaktiv" ist. Starte jetzt den Server neu. Der Server merkt, dass die Welt mit dem Namen `level-name` fehlt, und erstellt eine neue Welt mit einem neuen Seed.

</TabItem>

<TabItem value="regenerating-current" label="Aktuelle Welt neu aufbauen">

Um die aktuelle Welt neu zu starten, musst du dir den Seed merken. Das kannst du über den **Konsolenbereich** auf der Weboberfläche deines Servers oder direkt im Spiel machen, aber denk dran, dass du dafür OP-Rechte (Operator) brauchst, wenn du es im Spiel machen willst.

Führ den Befehl `/seed` entweder in der Konsole oder im Spiel aus, um den **seed**-Wert der aktuellen Welt zu sehen. Schreib dir diesen Seed auf.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Jetzt, wo du den Seed kennst, musst du den Parameter `level-seed` in der Konfigurationsdatei `server.properties` anpassen. Das kannst du entweder über den Abschnitt **Configs** im Webinterface-Panel deines Servers oder per FTP machen.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Stell sicher, dass du den Server vorher ausschaltest, damit die Datei richtig gespeichert wird.
:::

Ändere den Parameter `level-seed` in den Startwert und speichere die Datei. Jetzt verbinde dich per FTP mit deinem Server.

Um die Welt neu zu starten, kannst du entweder:
- Über FTP die Welt suchen, die genauso heißt wie der Parameter `level-name` in der Konfigurationsdatei, und sie löschen.
- Den Parameter `level-name` in der Konfigurationsdatei ändern und speichern.

Wenn du den alten Spielstand behalten willst, empfehlen wir Option 2, da die Welt auf dem Server bleibt, aber "inaktiv" ist.

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Jetzt startest du den Server nochmal und er merkt, dass die Welt mit dem Namen `level-name` fehlt. Deshalb erstellt er die aktuelle Welt neu mit dem Startwert, der über den Parameter `level-seed` angegeben wurde.

</TabItem>
</Tabs>

## Backup World Sicherungen

### Lokale Speicher
Lokale Spielstände sind die, die du im Einzelspielermodus erstellt hast. Du findest sie in deinen Windows-AppData, genauer gesagt unter folgendem Pfad:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Du kannst ganz einfach auf diesen Pfad zugreifen, indem du gleichzeitig `CTRL` + `R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%appdata%/.minecraft/saves/`. Drücke einfach **OK** und du wirst zu dem Ordner weitergeleitet.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

In diesem Ordner kannst du alle lokalen Spielstände an einem Ort sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Zugriff auf gespeicherte Daten perFTP

Das Sichern deiner Weltspeicherstände vom Server ist ganz einfach. Sobald du über einen FTP-Client mit deinem Spielserver verbunden bist, geh einfach in den Stammordner der Serverplattform, die du benutzt. Die Weltspeicherstände findest du direkt dort, wobei der Standardname für die Welt `world` lautet.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Automatische Backups

Wir bieten auch die Möglichkeit, ein automatisches Backup deines Savegames (und deiner Konfigurationsdatei) direkt über unser Webinterface zu erstellen. Rufe einfach das Webinterface deines Gameservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserer [Backups](gameserver-backups.md) zu diesem Thema.

## Welt-Spielstand hochladen

Genau wie beim Backup ist auch das Hochladen deiner gespeicherten Welt ganz einfach. Stell zuerst sicher, dass du über einen FTP-Client mit deinem Spielserver verbunden bist. Wenn du bereit bist, geh zum Stammverzeichnis der Serverplattform, die du benutzt.

:::info Vanilla- und Server-Plattform-Welten
Denk dran, dass der Vanilla-Server und die Server-Plattformen Welten in einem etwas anderen Format speichern.

Wenn du einen Spielstand von Vanilla auf eine Server-Plattform wie PaperMC verschieben willst oder umgekehrt, schau dir bitte den Abschnitt in der [Welten konvertieren](#welten-umwandeln) Anleitung an.
:::

Zieh einfach deine gespeicherten Welten über deinen FTP-Client in den Stammordner und sie werden auf deinen Server hochgeladen.

:::tip
Es kann hilfreich sein, den Namen des Gamesave-Ordners zu kopieren, den du hochgeladen hast, da du ihn brauchst, wenn du ihn im nächsten Abschnitt aktivieren möchtest.
:::

## Welt-Spielstand aktivieren

Um einen bestimmten Spielstand zu speichern, musst du die Konfigurationsdatei `server.properties` bearbeiten, genauer gesagt den Parameter `level-name`. Das kannst du entweder über den Abschnitt **Configs** im Webinterface deines Servers oder per FTP machen.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Such in der Datei den Parameter `level-name` und ändere ihn so, dass er mit dem Namen des Ordners übereinstimmt, in dem deine Welt gespeichert ist. Wenn du eine Serverplattform verwendest, nimm den Namen des Hauptordners und nicht den der Ordner `_nether` oder `_the_end`.



## Abschluss

Du weißt jetzt, wie du deine Minecraft-Welten sicher verwalten kannst. Von der Konvertierung von Spielständen zwischen Vanilla- und Server-Plattformen bis hin zur Erstellung neuer Welten, der Regeneration alter Welten mithilfe von Seeds, der Erstellung zuverlässiger Backups, dem Hochladen benutzerdefinierter Welten und deren Aktivierung auf deinem Server. Mit diesem Wissen bist du bereit, deine Welten reibungslos zu verwalten und deine Abenteuer sicher und organisiert zu halten.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
