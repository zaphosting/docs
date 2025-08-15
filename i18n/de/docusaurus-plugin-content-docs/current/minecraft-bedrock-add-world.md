---
id: minecraft-bedrock-add-world
title: "Minecraft: Bedrock Welt importieren"
description: Anleitung zum Importieren einer Welt in deinen Minecraft Bedrock Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Welt importieren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Minecraft: Bedrock Edition ermöglicht es dir, eigene Welten zu erstellen und diese auf deinem Server zu nutzen. In diesemr Anleitung zeigen wir dir, wie du eine eigene Welt in deinen Minecraft: Bedrock Server importierst, um sie mit deinen Freunden zu teilen.

<InlineVoucher />

## Vorbereitung

Um eine Welt in deinen Minecraft: Bedrock Server zu importieren, musst du eine Verbindung über FTP herstellen. Falls du damit nicht vertraut bist, empfehlen wir dir, einen Blick in die Anleitung [FTP-Zugriff](gameserver-ftpaccess.md) zu werfen.

Stelle sicher, dass du die Welt, die du importieren möchtest, bereits auf deinem Computer gespeichert hast. Die Welt sollte als Ordner mit den entsprechenden Dateien vorliegen.
Solltest du eine Welt aus dem Minecraft: Bedrock einzelspieler hochladen wollen, kannst du diese unter folgendem Pfad finden:

```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installation

### Server stoppen

Bevor du mit dem Import beginnst, musst du deinen Minecraft: Bedrock Server stoppen. Dies stellst sicher, dass keine Daten verloren gehen und der Import reibungslos abläuft.

### Welt hochladen

Navigiere über FTP zu dem Verzeichnis, in dem die Welten deines Servers gespeichert sind. Der Pfad lautet normalerweise:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Hier siehst du die Ordner aller Welten, die derzeit auf deinem Server gespeichert sind. Jede Welt hat einen eindeutigen Namen.

Lade den Ordner deiner Welt, die du importieren möchtest, in das Verzeichnis hoch. Achte darauf, dass der Name des Ordners nicht geändert wird, da Minecraft die Welt sonst nicht erkennen kann.

Dann musst du noch die server.properties öffnen, welche im Hauptordner des Servers liegt und den Wert `Bedrock level` in der Folgenden Einstellung zum Ordnernamen deiner Welt ändern:

```
level-name=Bedrock level
```

### Server starten

Nachdem die Welt erfolgreich hochgeladen wurde, starte deinen Server wieder. Die importierte Welt sollte nun automatisch geladen werden.

### Überprüfung

Verbinde dich mit deinem Server und überprüfe, ob die importierte Welt korrekt geladen wurde. Du solltest nun in der neuen Welt spielen können. Falls etwas nicht wie erwartet funktioniert, überprüfe noch einmal die Schritte und stelle sicher, dass die Weltordner korrekt benannt und platziert sind.

## Abschluss

Das Importieren einer Welt in deinen Minecraft: Bedrock Server ist ein einfacher Prozess, der dir ermöglicht, deine eigenen Kreationen mit anderen zu teilen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂