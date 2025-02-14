---
id: minecraft-bedrock-addons
title: "Minecraft: Bedrock Addons installieren"
description: Informationen zur Installation von Addons auf deinem Minecraft Bedrock Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Addon Installation
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Minecraft: Bedrock Edition bietet native Modding-Unterstützung und eine große Community, die es dir ermöglicht, das Spielerlebnis mit deinen Freunden zu erweitern und zu verbessern. In dieser Anleitung werden wir den Prozess der Installation und Aktivierung eines Addons auf deinem Minecraft: Bedrock Server behandeln.

<InlineVoucher />

## Vorbereitung

Um ein Addon auf deinem Minecraft: Bedrock Server zu installieren, musst du eine Verbindung über FTP herstellen. Falls du damit nicht vertraut bist, empfehlen wir dir, einen Blick in die Anleitung [Zugriff via FTP](gameserver-ftpaccess.md) zu werfen.

Bevor du mit der Installation fortfährst, musst du auch Addons finden, die du auf deinem Server installieren möchtest. Wir empfehlen, auf [CurseForge](https://www.curseforge.com/minecraft-bedrock) zu suchen, da sie eine große Bibliothek von Addons und Ressourcenpaketen bieten, die von der Community erstellt wurden.

## Installation

### Die Welt vom Server herunterladen

Das erste, was du tun musst, ist, den Server zu stoppen, um den aktuellen Fortschritt zu speichern.

Dann musst du über FTP zu diesem Ort navigieren:

```
C:\Users\%username%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

### Das Addon in die Welt installieren
Öffne nun die .mcpack-Datei deines Addons. Das Spiel sollte sich öffnen und das Addon automatisch importieren. Die Welt, die du von deinem Server heruntergeladen hast, sollte nun angezeigt werden. Wenn du die Welt nicht heruntergeladen hast, klicke einfach auf "Neue erstellen". Stelle sicher, dass du alles ausgewählt hast, was du möchtest, und gehe dann auf "Spielen". Deine Addons sollten nun im Spiel verfügbar sein. Wenn alles funktioniert, schließe einfach Minecraft.

### Die Welt auf den Server hochladen

Gehe nun zurück zu deiner FTP-Anwendung (z.B. Filezilla/WinSCP). Lösche die Welt, die du zuvor heruntergeladen hast, da wir sie ersetzen werden. Lade danach den Ordner erneut auf deinen Server hoch. Es ist wichtig, dass der Name nicht geändert wurde und gleich bleibt. Ein letzter Schritt steht noch aus. Im Weltordner auf deinem PC hast du nun den Ordner "behavior_packs" und/oder "resource_packs".

Lade diese in die entsprechenden Ordner auf dem Server hoch. Diese befinden sich im selben Ordner wie der "worlds"-Ordner. Dann musst du die server.properties öffnen und die Zeile von 

```
texturepack-required=false
```
zu
```
texturepack-required=true
```
ändern.

Dies stellt sicher, dass Spieler, die deinem Server beitreten, die benötigten Ressourcen herunterladen. Wenn das erledigt ist, musst du nur noch den Server starten, ihm beitreten und dann solltest du in der Lage sein, dein Addon zu verwenden.

### Überprüfung

Verbinde dich mit deinem Server und überprüfe, ob die Addons korrekt installiert wurden. Teste die neuen Funktionen oder Ressourcen, um sicherzustellen, dass alles wie erwartet funktioniert. Falls etwas nicht wie geplant läuft, überprüfe noch einmal die Schritte und stelle sicher, dass die Dateien korrekt hochgeladen und die Einstellungen in der `server.properties` angepasst wurden.

## Fazit

Das Installieren von Addons auf deinem Minecraft: Bedrock Server ist eine großartige Möglichkeit, das Spielerlebnis zu erweitern und neue Inhalte hinzuzufügen. Mit dieser Anleitung kannst du ganz einfach Addons installieren und deinen Server anpassen. Viel Spaß beim Erkunden der neuen Möglichkeiten!