---
id: minecraft-worlds
title: "Minecraft: Welten verwalten"
description: "Entdecke, wie du Minecraft-Welten plattformübergreifend verwaltest, konvertierst und sicherst, um deinen Spielfortschritt sicher und nahtlos zu halten → Jetzt mehr erfahren"
sidebar_label: Welten verwalten
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Kern speichert Minecraft Spielstände als **Welten**, wobei jede Welt ihr eigener, eigenständiger Save ist. In dieser Anleitung zeigen wir dir, wie du Welten auf deinem Minecraft Gameserver verwaltest, inklusive der Konvertierung von Welten zwischen Plattformen, dem Regenerieren von Welten, dem Backup deiner lokalen und Server-Welten sowie dem Hochladen von Welten auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um deine Welten zu verwalten, musst du zunächst per FTP auf deinen Minecraft Gameserver zugreifen. Falls du noch nicht weißt, wie FTP funktioniert, schau dir bitte unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung an.

## Unterschiede zwischen Plattformen vergleichen

Ein wesentlicher Unterschied zwischen Vanilla-Servern und Server-Plattformen ist, dass Vanilla-Server die normale Welt, den Nether und das Ende als einen einzigen Save zusammenfassen.

Im Gegensatz dazu trennen alternative Server-Plattformen wie Spigot, PaperMC und Bukkit jede Dimension als eigene Welt-Saves. In der folgenden Tabelle siehst du, wie eine Beispielwelt namens **zapdocs** von beiden Server-Typen behandelt wird.

| Welt-Dimension  | Vanilla Server (Kombiniert) | Server-Plattformen (Einzeln)  |
| --------------- | --------------------------- | ----------------------------- |
| Normal/Overworld | zapdocs                     | zapdocs                       |
| Nether           | zapdocs                     | zapdocs_nether                |
| The End          | zapdocs                     | zapdocs_the_end               |

## Welten konvertieren

Wenn du zwischen einem Vanilla-Server und einer Server-Plattform wechselst, möchtest du vielleicht deinen Welt-Save behalten. Aufgrund der oben genannten Unterschiede musst du die Ordnerstruktur anpassen, um die einzelnen Welten für Nether und Ende entweder zu extrahieren oder zusammenzuführen.

:::info
Das ist nur nötig, wenn du zwischen Vanilla und Server-Plattformen wechselst und eine bestehende Welt behalten und verschieben möchtest. Wenn du nur zwischen Vanilla oder verschiedenen Server-Plattformen wechselst, musst du nichts konvertieren.
:::

:::note
Stelle sicher, dass du den Server vor dem Vorgang ausschaltest, um Konflikte oder Rollbacks zu vermeiden.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Von Vanilla konvertieren" default>

Um eine Welt vom Vanilla-Format in das Server-Plattform-Format zu konvertieren, musst du bestimmte Ordner extrahieren, um neue einzelne Welten für jede Dimension zu erstellen. Üblicherweise verschiebst du alle Welten auf einen neuen Server, der eine Server-Plattform wie Spigot, PaperMC oder Bukkit nutzt.

Greife per FTP auf deinen Server zu und navigiere zum Pfad `../vanilla/[deine_welt]`, um den Welt-Save zu finden, den du konvertieren möchtest. Suche die Ordner **DIM1** und **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

Der Ordner **DIM1** enthält die End-Daten, während **DIM-1** die Nether-Daten enthält.

Du musst jeden Ordner in einen eigenen neuen Welt-Ordner verschieben, wie folgt:
- Für den Nether erstelle einen neuen Ordner `[deine_welt]_nether` im Root-Verzeichnis. Verschiebe den **DIM-1** Ordner in diesen neuen separaten Welt-Ordner.
- Für das Ende erstelle einen neuen Ordner `[deine_welt]_the_end` im Root-Verzeichnis. Verschiebe den **DIM1** Ordner in diesen neuen separaten Welt-Ordner.

:::info
Es kann sein, dass du die `DIM`-Ordner überschreiben musst, das ist normal, da Server-Plattformen standardmäßig alle Dimensionen sofort generieren.
:::

In diesem Beispiel heißt die Welt `world`, daher wurden die neuen Ordner `world_nether` und `world_the_end` im Root-Verzeichnis erstellt und die entsprechenden `DIM`-Ordner hineingeschoben.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Die drei einzelnen Welten sind jetzt bereit für die Nutzung auf Server-Plattformen.

</TabItem>

<TabItem value="converting-to-vanilla" label="Zu Vanilla konvertieren">

Um eine Welt von einer Server-Plattform ins Vanilla-Format zu konvertieren, ist der Prozess praktisch identisch, aber umgekehrt. Du musst die Daten aus den einzelnen Welten für Nether und Ende extrahieren und in ein einziges Welt-Format zusammenführen. Üblicherweise verschiebst du die kombinierte Welt auf einen neuen Server, der einen Vanilla-Server nutzt.

Greife per FTP auf deinen Server zu und öffne das Root-Verzeichnis. Suche die drei einzelnen Welt-Ordner, die `[deine_welt]`, `[deine_welt]_nether` und `[deine_welt]_the_end` heißen sollten, wobei `[deine_welt]` durch den Namen deiner Welt ersetzt wird.

Öffne den Ordner `[deine_welt]_nether` und verschiebe den Ordner `DIM-1` in den Hauptordner `[deine_welt]`. In diesem Beispiel heißt die Welt wie zuvor `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Wiederhole das Gleiche für den Ordner `[deine_welt]_the_end` und verschiebe `DIM1` in den Hauptordner `[deine_welt]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

Die kombinierte Welt ist jetzt bereit für die Nutzung auf einem Vanilla-Server.

</TabItem>
</Tabs>

## Welten generieren

Welten zu generieren ist easy: Du kannst entweder eine komplett neue Welt erstellen oder die aktuelle Welt frisch regenerieren. Minecraft nutzt ein **Seed**-System, bei dem jede Welt einen einzigartigen Seed hat. Mit dem Seed kannst du eine exakte Kopie der Startwelt regenerieren.

<Tabs>
<TabItem value="generating-new" label="Neue Welt generieren" default>

Um eine neue Welt zu generieren, fahre den Server herunter und verbinde dich per FTP. Öffne außerdem die `server.properties` Konfigurationsdatei, entweder über den **Configs**-Bereich im Webinterface deines Servers oder per FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Um eine neue Welt zu generieren, kannst du entweder:
- Per FTP die Welt löschen, die denselben Namen wie der `level-name` Parameter in der Konfig hat.
- Den `level-name` Parameter in der Konfig auf einen anderen Namen ändern und speichern.

Wenn du den alten Save behalten möchtest, empfehlen wir Option 2, so bleibt die alte Welt auf dem Server, ist aber "inaktiv".

Starte den Server neu. Der Server erkennt, dass die Welt mit dem `level-name` fehlt und generiert eine neue Welt mit einem neuen Seed.

</TabItem>

<TabItem value="regenerating-current" label="Aktuelle Welt regenerieren">

Um die aktuelle Welt zu regenerieren, musst du den Seed notieren. Das geht über die **Konsole** im Webinterface oder direkt im Spiel (du brauchst dafür OP-Rechte).

Führe den Befehl `/seed` in der Konsole oder im Spiel aus, um den **Seed** der aktuellen Welt zu erhalten. Notiere dir diesen Seed.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Mit dem Seed musst du den `level-seed` Parameter in der `server.properties` Datei anpassen. Das kannst du über den **Configs**-Bereich im Webinterface oder per FTP machen.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Schalte den Server vorher aus, damit die Datei korrekt gespeichert wird.
:::

Ändere den `level-seed` Parameter auf den notierten Seed und speichere die Datei. Verbinde dich dann per FTP mit deinem Server.

Um die Welt zu regenerieren, kannst du entweder:
- Per FTP die Welt löschen, die denselben Namen wie der `level-name` Parameter hat.
- Den `level-name` Parameter in der Konfig auf einen anderen Namen ändern und speichern.

Wenn du den alten Save behalten möchtest, empfehlen wir Option 2, so bleibt die alte Welt auf dem Server, ist aber "inaktiv".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Starte den Server neu. Der Server erkennt, dass die Welt mit dem `level-name` fehlt und regeneriert die aktuelle Welt mit dem Seed aus dem `level-seed` Parameter.

</TabItem>
</Tabs>

## Welt-Saves sichern

### Lokale Saves

Lokale Welt-Saves sind die, die du im Singleplayer erstellt hast. Diese findest du in deinem Windows AppData-Ordner, genauer unter folgendem Pfad:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Du kannst diesen Pfad ganz einfach öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%appdata%/.minecraft/saves/`. Einfach auf **OK** klicken und du landest direkt im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

In diesem Ordner findest du alle lokalen Welt-Saves an einem Ort.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Zugriff auf Saves via FTP

Das Backup deiner Welt vom Server ist easy. Sobald du per FTP mit deinem Gameserver verbunden bist, öffne einfach das Root-Verzeichnis der Server-Plattform, die du nutzt. Die Welt-Saves liegen direkt dort, der Standardwelt-Name ist `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, deine Welt-Saves (und Konfigurationsdateien) automatisch über unser Webinterface zu sichern. Gehe dazu im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups schau dir unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Welt-Save hochladen

Ähnlich wie beim Backup ist das Hochladen deines Welt-Saves simpel. Verbinde dich per FTP mit deinem Gameserver und öffne das Root-Verzeichnis der Server-Plattform, die du nutzt.

:::info Vanilla- & Server-Plattform-Welten
Denk daran, dass Vanilla-Server und Server-Plattformen Welten etwas unterschiedlich speichern.

Wenn du einen Save von Vanilla zu einer Server-Plattform wie PaperMC oder umgekehrt verschiebst, schau dir bitte den Abschnitt Welten konvertieren in dieser Anleitung an.
:::

Zieh einfach deinen Welt-Save per Drag & Drop in das Root-Verzeichnis via FTP, dann wird er auf deinen Server hochgeladen.

:::tip
Es kann hilfreich sein, den Namen des hochgeladenen Gamesave-Ordners zu kopieren, da du ihn brauchst, um die Welt im nächsten Schritt zu aktivieren.
:::

## Welt-Save aktivieren

Um eine bestimmte Welt zu nutzen, musst du die `server.properties` Konfigurationsdatei bearbeiten, genauer den `level-name` Parameter.

Das kannst du entweder über den **Configs**-Bereich im Webinterface deines Servers oder per FTP machen.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Suche in der Datei den `level-name` Parameter und ändere ihn so, dass er mit dem Ordnernamen deines Welt-Saves übereinstimmt. Wenn du eine Server-Plattform nutzt, verwende den Hauptordnernamen und nicht die `_nether` oder `_the_end` Ordner.

## Fazit

Jetzt weißt du, wie du deine Minecraft-Welten souverän managst. Vom Konvertieren zwischen Vanilla und Server-Plattformen, über das Generieren neuer Welten, das Regenerieren alter Welten mit Seeds, zuverlässige Backups, das Hochladen eigener Welten bis hin zum Aktivieren auf deinem Server. Mit diesem Wissen kannst du deine Welten problemlos verwalten und deine Abenteuer sicher und organisiert halten.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />