---
id: starrupture-mods
title: "StarRupture: Mods installieren"
description: "Lerne, wie du Mods auf deinem StarRupture Gameserver und Client installierst, um das Gameplay zu verbessern → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mods ermöglichen es dir, das Gameplay von StarRupture zu erweitern, indem sie neue Mechaniken, Inhalte, Quality-of-Life-Verbesserungen oder Gameplay-Anpassungen hinzufügen, die von der Community erstellt wurden. Viele StarRupture-Mods werden über Community-Plattformen wie NexusMods verteilt und können sowohl auf dem Server als auch lokal auf dem Client installiert werden.

Die Installation von Mods auf deinem Server stellt sicher, dass die Serverumgebung die modifizierten Inhalte lädt, während die lokale Installation deinem Spielclient erlaubt, dieselben Dateien beim Verbinden mit modifizierten Servern zu verwenden.

<InlineVoucher />

## Mods auf dem Server installieren

Um Mods auf deinem StarRupture Gameserver zu installieren, lade zuerst die gewünschte Mod-Datei von einer vertrauenswürdigen Quelle wie **NexusMods** herunter.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Bevor du die Mod hochlädst, stelle sicher, dass dein Server gestoppt ist, um Datei-Konflikte während der Installation zu vermeiden. Verbinde dich anschließend über [FTP](gameserver-ftpaccess.md) mit deinem Server, indem du einen FTP-Client benutzt. Navigiere nach dem Verbinden zu folgendem Verzeichnis auf deinem Server:

```
/home/container/StarRupture/Content/Paks
```
Lade die heruntergeladene `.zip`-Mod-Datei in diesen Ordner hoch. Nachdem der Upload abgeschlossen ist, entpacke den Inhalt des Archivs direkt im `Paks`-Verzeichnis. Sobald die Dateien entpackt sind, kehre zurück zu deinem Server-Management-Panel und starte den Server neu.

Beim Start erkennt der Server automatisch die installierten Mods und lädt sie.

## Mods auf dem Client installieren

Einige StarRupture-Mods müssen auch lokal auf dem Client installiert werden. Die meisten lokal installierten Mods bleiben aktiv, wenn du dich mit Servern verbindest. Lade zuerst die gewünschte Mod von einer vertrauenswürdigen Quelle wie NexusMods herunter.

Öffne anschließend deine **Steam-Bibliothek**, klicke mit der rechten Maustaste auf **StarRupture**, fahre mit der Maus über **Verwalten** und wähle **Lokale Dateien durchsuchen**. Im Installationsverzeichnis des Spiels findest du folgenden Pfad:

```
StarRupture/StarRupture/Content/Paks
```

Kopiere die heruntergeladene `.zip`-Mod-Datei in diesen Ordner. Nachdem du die Datei kopiert hast, entpacke das Archiv direkt im `Paks`-Verzeichnis. Nach dem Entpacken wird die Mod beim nächsten Spielstart automatisch geladen.

## Fazit

Glückwunsch! Du hast erfolgreich Mods für StarRupture sowohl auf dem Server als auch auf dem Client installiert. Mit installierten Mods kannst du das Spielerlebnis mit neuen Features, Mechaniken und Verbesserungen aus der Community erweitern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />