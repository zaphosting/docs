---
id: cs2-plugins
title: "CS2: Installation von Plugins"
description: "Entdecke die sich entwickelnde Welt der CS2-Plugins und Community-Projekte, um dein Counter-Strike-Erlebnis zu verbessern → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Einführung

Counter-Strike 2 setzt die lange Tradition der Community-getriebenen Serveranpassung fort. Plugins ermöglichen es Serverbesitzern, das Gameplay zu erweitern, Quality-of-Life-Features hinzuzufügen, eigene Regelwerke umzusetzen oder komplett neue Spielmodi zu erstellen.

Mit dem Wechsel zu Source 2 hat sich das Plugin-Ökosystem stark verändert. Für CS2 hat sich **CounterStrikeSharp** als das primäre und aktiv gepflegte Framework für serverseitige Plugin-Entwicklung etabliert.

<InlineVoucher />



## Installation von Metamod:Source

Metamod muss zuerst installiert werden, da CounterStrikeSharp davon abhängt. Nach dem Download des [Metamod:Source 2.x Dev Builds](https://www.metamodsource.net/downloads.php?branch=dev) entpackst du das Archiv. Im Archiv findest du ein `addons`-Verzeichnis. Dieses Verzeichnis muss direkt per [FTP](gameserver-ftpaccess.md) in das CS2-Gameserver-Verzeichnis hochgeladen werden.

```
../game/csgo/
```

Nachdem du die Dateien kopiert hast, suche die Datei `gameinfo.gi` im Verzeichnis `/game/csgo/`. Öffne diese Datei mit einem Texteditor. Finde die Zeile mit `Game_LowViolence csgo_lv`. Direkt darunter fügst du folgenden Eintrag hinzu:

```
Game csgo/addons/metamod
```

<Button label="Metamod:Source herunterladen" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Installation von CounterStrikeSharp

Sobald Metamod läuft, kannst du CounterStrikeSharp installieren. CounterStrikeSharp wird über das offizielle GitHub-Repository verteilt und als vorgefertigtes Release-Paket bereitgestellt. Lade das CounterStrikeSharp-Release herunter, das die Runtime enthält. Entpacke das Archiv und kopiere das enthaltene `addons`-Verzeichnis per [FTP](gameserver-ftpaccess.md) in dasselbe CS2-Gameserver-Verzeichnis.

```
/game/csgo/
```

Bitte keine Verzeichnisse manuell zusammenführen oder umbenennen. Die vom Archiv vorgegebene Struktur muss erhalten bleiben. Nach dem Hochladen der Dateien startest du den Server neu. Beim Start lädt Metamod automatisch CounterStrikeSharp. Um die Installation zu überprüfen, öffne die Server-Konsole und führe aus:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="CounterStrikeSharp herunterladen" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Installation von Plugins

Plugins für CounterStrikeSharp werden als kompilierte `.dll`-Dateien bereitgestellt. Diese Dateien kommen in das `plugins`-Verzeichnis innerhalb des CounterStrikeSharp-Installationspfads.

Nachdem du ein Plugin in dieses Verzeichnis kopiert und den Server neu gestartet hast, lädt CounterStrikeSharp automatisch alle verfügbaren Plugins. Falls ein Plugin nicht geladen wird, solltest du die Server-Logs auf Fehlermeldungen zu CounterStrikeSharp oder dem Plugin prüfen.




## Beliebte Plugins

<SearchableItemList items={items} />



## Fazit

Wenn du alle Schritte befolgt hast, solltest du Metamod/CounterStrikeSharp und deine gewünschten Plugins erfolgreich installiert haben. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂




<InlineVoucher />