---
id: starrupture-mods
title: "StarRupture: Mods installieren"
description: "Lerne, wie du Mods auf deinem StarRupture-Server und Client installierst, um das Gameplay zu pimpen → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mods lassen dich das Gameplay von StarRupture erweitern, indem sie neue Mechaniken, Inhalte, Quality-of-Life-Verbesserungen oder Gameplay-Anpassungen hinzufügen, die von der Community erstellt wurden. Viele StarRupture-Mods werden über Community-Plattformen wie **NexusMods** verteilt und können sowohl auf dem Server als auch lokal auf dem Client installiert werden.

Wenn du Mods auf deinem Server installierst, sorgt das dafür, dass die Server-Umgebung die modifizierten Inhalte lädt. Die lokale Installation auf deinem Client ermöglicht es deinem Spiel, dieselben Dateien zu nutzen, wenn du dich mit modifizierten Servern verbindest.

<InlineVoucher />

## Mods auf dem Server installieren

Um Mods auf deinem StarRupture-Server zu installieren, lade zuerst die gewünschte Mod-Datei von einer vertrauenswürdigen Quelle wie **NexusMods** herunter.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Bevor du die Mod hochlädst, stelle sicher, dass dein Server gestoppt ist, um Datei-Konflikte während der Installation zu vermeiden. Verbinde dich dann per [FTP](gameserver-ftpaccess.md) mit deinem Server über einen FTP-Client. Navigiere im Server-Verzeichnis zu folgendem Pfad:

```
/home/container/StarRupture/Content/Paks
```
Lade die heruntergeladene `.zip`-Mod-Datei in diesen Ordner hoch. Nach dem Upload entpacke den Inhalt des Archivs direkt im `Paks`-Verzeichnis. Sobald die Dateien extrahiert sind, geh zurück in dein Server-Panel und starte den Server neu.

Beim Start erkennt der Server automatisch die installierten Mods und lädt sie.

## Mods auf dem Client installieren

Einige StarRupture-Mods müssen auch lokal auf dem Client installiert werden. Die meisten lokal installierten Mods bleiben aktiv, wenn du dich mit Servern verbindest. Lade zuerst die gewünschte Mod von einer vertrauenswürdigen Quelle wie NexusMods herunter.

Öffne dann deine **Steam-Bibliothek**, klicke mit der rechten Maustaste auf **StarRupture**, fahre mit der Maus über **Verwalten** und wähle **Lokale Dateien durchsuchen**. Im Installationsverzeichnis findest du folgenden Pfad:

```
StarRupture/StarRupture/Content/Paks
```

Kopiere die heruntergeladene `.zip`-Mod-Datei in diesen Ordner. Entpacke anschließend das Archiv direkt im `Paks`-Verzeichnis. Beim nächsten Spielstart wird die Mod automatisch geladen.

## Fazit

Glückwunsch! Du hast erfolgreich Mods für StarRupture auf Server und Client installiert. Mit Mods kannst du das Gameplay mit neuen Features, Mechaniken und Verbesserungen aus der Community richtig aufpeppen.

Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />