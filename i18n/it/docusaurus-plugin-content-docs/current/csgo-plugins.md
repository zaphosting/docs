---
id: csgo-plugins
title: "CS:GO: Installation von Plugins"
description: "Entdecke die sich wandelnde Welt der CS:GO-Plugins und Community-Projekte, um dein Counter-Strike-Erlebnis zu verbessern → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Einführung

CS:GO setzt die lange Tradition der Community-getriebenen Server-Anpassung fort. Plugins ermöglichen es Server-Besitzern, das Gameplay zu erweitern, Quality-of-Life-Features hinzuzufügen, eigene Regelwerke umzusetzen oder komplett neue Spielmodi zu bauen.

Mit dem Wechsel zu Source 2 hat sich das Plugin-Ökosystem stark verändert. Für CS:GO hat sich **CounterStrikeSharp** als das primäre und aktiv gepflegte Framework für serverseitige Plugin-Entwicklung etabliert.

<InlineVoucher />



## Metamod:Source installieren

Metamod muss zuerst installiert werden, da CounterStrikeSharp darauf aufbaut. Nach dem Download des [Metamod:Source 2.x Dev Builds](https://www.metamodsource.net/downloads.php?branch=dev) entpackst du das Archiv. Im Archiv findest du einen `addons`-Ordner. Diesen Ordner musst du direkt per [FTP](gameserver-ftpaccess.md) in dein CS:GO-Spielverzeichnis hochladen.

```
../game/csgo/
```

Nachdem du die Dateien kopiert hast, öffne die Datei `gameinfo.gi` im Verzeichnis `/game/csgo/` mit einem Texteditor. Suche in der Datei die Zeile mit `Game_LowViolence csgo_lv`. Direkt darunter fügst du folgende Zeile ein:

```
Game csgo/addons/metamod
```

<Button label="Metamod:Source herunterladen" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## CounterStrikeSharp installieren

Sobald Metamod läuft, kannst du CounterStrikeSharp installieren. CounterStrikeSharp wird über das offizielle GitHub-Repo als vorgefertigtes Release-Paket verteilt. Lade die CounterStrikeSharp-Version mit Runtime herunter. Entpacke das Archiv und kopiere den enthaltenen `addons`-Ordner per [FTP](gameserver-ftpaccess.md) in dasselbe CS:GO-Spielverzeichnis.

```
/game/csgo/
```

Bitte keine Ordner manuell zusammenführen oder umbenennen. Die vom Archiv vorgegebene Struktur muss erhalten bleiben. Nach dem Hochladen startest du den Server neu. Beim Start lädt Metamod CounterStrikeSharp automatisch. Zur Überprüfung öffnest du die Server-Konsole und gibst ein:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="CounterStrikeSharp herunterladen" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Plugins installieren

Plugins für CounterStrikeSharp werden als kompilierte `.dll`-Dateien bereitgestellt. Diese Dateien kommen in den `plugins`-Ordner innerhalb des CounterStrikeSharp-Installationspfads.

Nachdem du ein Plugin in diesen Ordner kopiert und den Server neu gestartet hast, lädt CounterStrikeSharp automatisch alle verfügbaren Plugins. Falls ein Plugin nicht lädt, check die Server-Logs auf Fehlermeldungen zu CounterStrikeSharp oder dem Plugin.



## Beliebte Plugins

<SearchableItemList items={items} />



## Fazit

Wenn du alle Schritte befolgt hast, solltest du Metamod/CounterStrikeSharp und deine gewünschten Plugins erfolgreich installiert haben. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂




<InlineVoucher />