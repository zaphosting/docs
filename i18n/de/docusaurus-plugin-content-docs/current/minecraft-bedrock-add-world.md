---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Eigene Welt importieren"
description: "Entdecke, wie du deine eigenen Minecraft Bedrock Welten auf deinem Server importierst und teilst – für nahtlosen Multiplayer-Spaß → Jetzt mehr erfahren"
sidebar_label: Eigene Welt importieren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Minecraft Bedrock Edition ermöglicht es dir, eigene Welten zu erstellen und auf deinem Server zu nutzen. In dieser Anleitung zeigen wir dir, wie du eine eigene Welt in deinen Minecraft: Bedrock Server importierst, um sie mit deinen Freunden zu teilen.

<InlineVoucher />

## Vorbereitung

Um eine Welt in deinen Minecraft Bedrock Server zu importieren, musst du dich per FTP verbinden. Falls du damit noch nicht vertraut bist, empfehlen wir dir einen Blick in die [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Stelle sicher, dass du die Welt, die du importieren möchtest, bereits auf deinem PC gespeichert hast. Die Welt sollte in einem Ordner mit den entsprechenden Dateien liegen.
Wenn du eine Welt aus dem Minecraft: Bedrock Singleplayer hochladen möchtest, findest du sie unter folgendem Pfad:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installation

### Server stoppen

Bevor du mit dem Import startest, musst du deinen Minecraft Bedrock Server stoppen. So stellst du sicher, dass keine Daten verloren gehen und der Import reibungslos abläuft.

### Welt hochladen

Navigiere per FTP in das Verzeichnis, in dem die Welten deines Servers gespeichert sind. Der Pfad lautet normalerweise:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Hier siehst du die Ordner aller aktuell auf deinem Server gespeicherten Welten. Jede Welt hat einen einzigartigen Namen.

Lade den Ordner deiner Welt, die du importieren möchtest, in dieses Verzeichnis hoch. Achte darauf, den Ordnernamen nicht zu ändern, da Minecraft die Welt sonst nicht erkennt.

Anschließend musst du die Datei `server.properties` öffnen, die sich im Hauptordner deines Servers befindet, und den Wert von `level-name` auf den Ordnernamen deiner Welt ändern:

```
level-name=Bedrock level
```
:::tip
Wenn du wieder deine Standardwelt nutzen möchtest, kannst du den Wert einfach zurück auf `Bedrock level` ändern und den Server neu starten!
:::

### Server starten

Nachdem du die Welt erfolgreich hochgeladen hast, starte deinen Server wieder. Die importierte Welt sollte nun automatisch geladen werden.

### Änderungen überprüfen

Verbinde dich mit deinem Server und überprüfe, ob die importierte Welt korrekt geladen wurde. Du solltest jetzt in der neuen Welt spielen können. Falls etwas nicht wie erwartet funktioniert, überprüfe die Schritte nochmal und stelle sicher, dass die Weltordner richtig benannt und platziert sind.

## Fazit

Das Importieren einer Welt in deinen Minecraft Bedrock Server ist ein einfacher Prozess, der es dir ermöglicht, deine eigenen Kreationen mit anderen zu teilen. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂

<InlineVoucher />