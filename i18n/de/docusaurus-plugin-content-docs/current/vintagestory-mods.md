---
id: vintagestory-mods
title: "Vintage Story: Mods installieren"
description: "Lerne, wie du Mods auf deinem Vintage Story Gameserver installierst, um neue Features und Gameplay-Mechaniken hinzuzufügen → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mods sind ein zentraler Bestandteil des Vintage Story-Erlebnisses und ermöglichen es Serverbesitzern, das Spiel mit neuen Mechaniken, Items, Weltgenerierungs-Features oder Quality-of-Life-Verbesserungen zu erweitern. Die Installation von Mods auf deinem Gameserver stellt sicher, dass alle Spieler, die sich mit dem Server verbinden, von denselben Gameplay-Erweiterungen profitieren.

Vintage Story bietet eine große Community-Bibliothek mit Mods, die von kleinen Tweaks bis hin zu kompletten Gameplay-Überarbeitungen reichen. Viele dieser Mods findest du in der offiziellen Vintage Story Mod-Datenbank oder in Community-Foren.

<InlineVoucher />

## Vorbereitung

Bevor du Mods auf deinem Vintage Story Gameserver installierst, stelle sicher, dass du folgende Schritte erledigt hast:

- Lade den gewünschten Mod von einer vertrauenswürdigen Quelle wie der Vintage Story Mod-Datenbank herunter  
- Stelle sicher, dass die Mod-Version mit der Spielversion deines Servers übereinstimmt  
- Stoppe deinen Gameserver, bevor du neue Dateien hochlädst  

Die meisten Vintage Story Mods werden als `.zip`-Dateien verteilt, die vor der Installation nicht entpackt werden sollten.

## Installation

Vintage Story Server-Mods müssen direkt ins Server-Dateisystem hochgeladen werden. Das machst du, indem du dich per [FTP](gameserver-ftpaccess.md) mit deinem Server verbindest. Verbinde dich zuerst mit einem FTP-Client und logge dich mit deinen FTP-Zugangsdaten ein.

Navigiere dann in folgendes Verzeichnis:

```
/gxxxxxx/VintagestoryData/
```

In diesem Verzeichnis musst du zwei Ordner erstellen, falls sie noch nicht existieren:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – enthält alle installierten Server-Mods  
- **ModConfigs** – speichert Konfigurationsdateien, die von Mods erstellt werden  

Nachdem du diese Ordner erstellt hast, lade deine heruntergeladenen Mod-Dateien in den **Mods**-Ordner hoch. Beispielhafte Struktur:

```
VintagestoryData
└── Mods
    ├── examplemod.zip
    ├── anothermod.zip
```

Vintage Story lädt automatisch alle Mod-Dateien, die in diesem Ordner liegen, beim Serverstart.

## Installation überprüfen

Nachdem alle Mod-Dateien hochgeladen wurden, geh zurück in dein Server-Management-Panel und starte den Gameserver neu. Während des Starts erkennt der Server die Mods im `Mods`-Ordner und lädt sie automatisch. Falls eine Mod Konfiguration benötigt, kann sie nach dem ersten Start eine neue Konfigurationsdatei im `ModConfigs`-Ordner anlegen.

Sobald der Server erfolgreich gestartet ist, verbinde dich mit dem Server und überprüfe, ob die Mod aktiv ist. Mods sollten beim Serverstart in den Logs auftauchen. Falls eine Mod nicht geladen wird, prüfe Folgendes:

- Die Mod-Version stimmt mit der Server-Version überein  
- Alle benötigten Abhängigkeiten sind installiert  
- Die `.zip`-Datei liegt im richtigen `Mods`-Ordner  

## Fazit

Glückwunsch! Du hast erfolgreich Mods auf deinem Vintage Story Gameserver installiert. Mods ermöglichen es dir, das Gameplay zu erweitern, neue Mechaniken einzuführen und das Erlebnis für deine Community individuell anzupassen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />