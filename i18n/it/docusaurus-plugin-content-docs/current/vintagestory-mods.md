---
id: vintagestory-mods
title: "Vintage Story: Mods installieren"
description: "Lerne, wie du Mods auf deinem Vintage Story Server installierst, um neue Features und Gameplay-Mechaniken hinzuzufügen → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mods sind ein zentraler Bestandteil des Vintage Story-Erlebnisses und ermöglichen es Serverbesitzern, das Spiel mit neuen Mechaniken, Items, Weltgenerierungs-Features oder Quality-of-Life-Verbesserungen zu erweitern. Wenn du Mods auf deinem Server installierst, profitieren alle Spieler, die sich verbinden, von denselben Gameplay-Verbesserungen.

Vintage Story bietet eine große Community-Bibliothek mit Mods, die von kleinen Tweaks bis hin zu kompletten Gameplay-Overhauls reichen. Viele dieser Mods findest du in der offiziellen Vintage Story Mod-Datenbank oder in den Community-Foren.

<InlineVoucher />

## Vorbereitung

Bevor du Mods auf deinem Vintage Story Server installierst, stelle sicher, dass du folgende Schritte erledigt hast:

- Lade den gewünschten Mod von einer vertrauenswürdigen Quelle wie der Vintage Story Mod-Datenbank herunter
- Achte darauf, dass die Mod-Version mit der Spielversion deines Servers übereinstimmt
- Stoppe deinen Server, bevor du neue Dateien hochlädst

Die meisten Vintage Story Mods werden als `.zip` Dateien verteilt und sollten vor der Installation nicht entpackt werden.

## Installation

Vintage Story Server-Mods müssen direkt ins Server-Dateisystem hochgeladen werden. Das machst du, indem du dich per [FTP](gameserver-ftpaccess.md) mit deinem Server verbindest. Verbinde dich zuerst mit einem FTP-Client und logge dich mit deinen FTP-Zugangsdaten ein.

Navigiere dann in folgendes Verzeichnis:

```
/gxxxxxx/VintagestoryData/
```

In diesem Verzeichnis musst du zwei Ordner anlegen, falls sie noch nicht existieren:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – enthält alle installierten Server-Mods  
- **ModConfigs** – speichert Konfigurationsdateien, die von Mods erstellt werden

Nachdem du die Ordner erstellt hast, lade deine heruntergeladenen Mod-Dateien in den **Mods**-Ordner hoch. Beispielstruktur:

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

Vintage Story lädt automatisch alle Mod-Dateien, die sich in diesem Ordner befinden, beim Serverstart.

## Installation überprüfen

Nachdem alle Mod-Dateien hochgeladen sind, geh zurück in dein Server-Management-Panel und starte den Server neu. Beim Start erkennt der Server die Mods im `Mods`-Ordner und lädt sie automatisch. Falls eine Mod Konfiguration benötigt, kann sie nach dem ersten Start eine neue Konfigurationsdatei im `ModConfigs`-Ordner anlegen.

Wenn der Server erfolgreich gestartet ist, verbinde dich und check, ob die Mod aktiv ist. Mods werden beim Start auch in den Server-Logs angezeigt. Falls eine Mod nicht lädt, prüfe:

- Ob die Mod-Version zur Server-Version passt
- Ob alle nötigen Abhängigkeiten installiert sind
- Ob die `.zip` Datei im richtigen `Mods`-Ordner liegt

## Fazit

Glückwunsch! Du hast erfolgreich Mods auf deinem Vintage Story Server installiert. Mods erweitern das Gameplay, bringen neue Mechaniken rein und machen das Erlebnis für deine Community noch cooler. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />