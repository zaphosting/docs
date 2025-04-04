---
id: fivem-installresources
title: "FiveM: Installation von Ressourcen"
description: Informationen, wie du Ressourcen auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Ressourcen installieren
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ressourcen können verwendet werden, um deinen FiveM Server um zusätzliche Funktionen zu erweitern. Dies ist gerade dann interessant, wenn du größere Projekte angehen möchtest, wie zum Beispiel einen Roleplay Server oder ähnlichen. Ohne solche zusätzlichen Ressourcen lässt sich das so direkt nicht umsetzen.

FiveM beziehungsweise dessen Community bietet hierbei eine große Auswahl an Ressourcen an. Eine Übersicht mit den beliebtesten Ressourcen findest du im Cfx.re Forum: https://forum.cfx.re/c/development/releases/7

<InlineVoucher />

## Vorbereitung

Die Installation der Ressourcen erfolgt per FTP. Du benötigst einen FTP-Client, um Dateien auf deinen Server hochzuladen. Falls du nicht mit der Verwendung von FTP vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung zu werfen.

Heruntergeladene Ressourcen werden in der Regel in einem komprimierten Format bereitgestellt. Das bedeutet, dass du die komprimierten Dateien mit einem Entpackungsprogramm wie 7Zip, Winrar oder WinZip entpacken musst. Der entpackte Ressourcenordner sollte mindestens die folgenden Dateien enthalten: `__resource.lua` oder `fxmanifest.lua` sowie die zugehörigen Skriptdateien.

:::info
Falls diese Dateien nicht vorhanden sind, kann es sein, dass sie sich in einem Unterverzeichnis innerhalb der Ressource befinden.
:::


## Installation

### Dateien hochladen

Du musst nun die zuvor unkomprimierten Dateien als einen einzelnen Ordner hochladen (falls noch nicht geschehen). Dein Ordner muss in das `Ressource`-Verzeichnis des Servers hochgeladen werden. Die Verzeichnisstruktur sieht normalerweise wie folgt aus: `/gXXXXXX/fivem/DEIN_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)

Bestimmte Ressourcen kooperieren mit einer Datenbank und enthalten daher oft bereits SQL-Dateien, die in die Datenbank importiert werden müssen. Wenn dies der Fall ist, dann lese unsere Anleitung [SQL-Datei importieren](fivem-sql-file-import.md), um mehr darüber zu erfahren, wie du dies tun kannst.

### Aktivierung

Um sicherzustellen, dass die installierte Ressource beim Start des Servers geladen wird, musst du sie zunächst in der Datei `server.cfg` für deinen Server aktivieren. Die Aktivierung erfolgt über den Befehl `start [Beispielressource]`. 

Wenn du zum Beispiel die Ressource mit dem Ordnernamen `eup-ui` hochgeladen hast, muss der Startbefehl in der Konfiguration wie folgt aussehen: 
```
start eup-ui
```

Du kannst auf deine `server.cfg` Konfigurationsdatei über den CFG Editor im txAdmin interface zugreifen.

:::info
Bitte vergewissern dich, dass der Name des zuvor erstellten Ordners mit dem Namen übereinstimmt, der im Startbefehl angegeben ist. Dabei ist auch die Groß- und Kleinschreibung zu beachten.
:::





## Abschluss

Abschließend kannst du deinen Server neu starten. Die installierte Ressource sollte nun geladen werden, wenn dein Server das nächste Mal vollständig gestartet ist. Du hast erfolgreich eine Ressource auf deinem FiveM Gameserver installiert.  Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
