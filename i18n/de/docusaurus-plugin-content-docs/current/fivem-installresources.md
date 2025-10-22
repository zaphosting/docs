---
id: fivem-installresources
title: "FiveM: Installation von Resources"
description: "Entdecke, wie du deinen FiveM Gameserver mit beliebten Resources für größere Projekte wie Roleplay-Server aufrüstest → Jetzt mehr erfahren"
sidebar_label: Resources installieren
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Einführung

Resources kannst du nutzen, um deinen FiveM Gameserver mit zusätzlichen Features zu erweitern. Das ist besonders spannend, wenn du größere Projekte wie einen Roleplay-Server oder Ähnliches planst. So etwas geht kaum ohne solche zusätzlichen Resources.

FiveM und seine Community bieten eine riesige Auswahl an Resources. Eine Übersicht der beliebtesten Resources findest du im Cfx.re Forum: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Vorbereitung

Die Installation der Resources erfolgt via FTP. Du brauchst also einen FTP-Client, um Dateien auf deinen Gameserver hochzuladen. Falls du noch nicht mit FTP vertraut bist, empfehlen wir dir einen Blick in unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Heruntergeladene Resources werden meist in komprimierter Form angeboten. Das heißt, du musst die gepackten Dateien mit einem Entpack-Programm wie 7Zip, Winrar oder WinZip entpacken. Der entpackte Resource-Ordner sollte mindestens folgende Dateien enthalten: `__resource.lua` oder `fxmanifest.lua` sowie die zugehörigen Script-Dateien.

:::info
Falls diese Dateien nicht direkt sichtbar sind, könnten sie sich in einem Unterordner innerhalb der Resource befinden.
:::

## Installation

### Dateien hochladen

Jetzt musst du die zuvor entpackten Dateien als einzelnen Ordner (falls noch nicht geschehen) hochladen. Dein Ordner muss in das `resources` Verzeichnis deines Servers hochgeladen werden. Die Verzeichnisstruktur sieht typischerweise so aus: `/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Manche Resources arbeiten mit einer Datenbank zusammen und enthalten daher oft schon SQL-Dateien, die in die Datenbank importiert werden müssen. Falls das bei dir der Fall ist, schau dir unsere [SQL-Datei Import](fivem-sql-file-import.md) Anleitung an, um zu erfahren, wie das geht.

### Aktivierung

Damit die installierte Resource beim Serverstart geladen wird, musst du sie zuerst in der `server.cfg` Datei deines Servers aktivieren. Die Aktivierung erfolgt über den Befehl `start [Beispiel Resource]`.

Wenn du zum Beispiel die Resource im Ordner `eup-ui` hochgeladen hast, muss der Start-Befehl in der Config so aussehen:
```
start eup-ui
```

Auf deine `server.cfg` Datei kannst du über den CFG Editor im txAdmin Interface zugreifen.

:::info
Achte darauf, dass der Name des zuvor erstellten Ordners exakt mit dem im Start-Befehl übereinstimmt – Groß- und Kleinschreibung sind hier wichtig.
:::


## Beliebte Resources

Du suchst noch nach den perfekten Resources für deinen Server? Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und am meisten empfohlenen Resources, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={items} />


## Fazit
Zum Schluss kannst du deinen Server neu starten. Die installierte Resource sollte beim nächsten vollständigen Start deines Servers geladen werden. Du hast erfolgreich eine Resource in deinen FiveM Gameserver installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />