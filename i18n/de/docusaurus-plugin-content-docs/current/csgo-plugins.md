---
id: csgo-plugins
title: "CS:GO: Installation von Plugins"
description: "Lerne, wie du Sourcemod-Plugins auf deinem CS:GO Gameserver installierst und das Gameplay mit individuellen Features erweiterst → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Einführung

CS:GO setzt die lange Tradition der Community-getriebenen Serveranpassung fort. Plugins ermöglichen es Serverbesitzern, das Gameplay zu erweitern, Quality-of-Life-Features hinzuzufügen, individuelle Regelwerke umzusetzen oder komplett neue Spielmodi zu erstellen.

Für CS:GO Gameserver ist **Sourcemod** das am weitesten verbreitete Framework für serverseitige Plugins. Sourcemod arbeitet zusammen mit **Metamod:Source**, das als Basisschicht fungiert und Plugins erlaubt, sich in die Spiel-Engine einzuklinken. Durch die Installation beider Komponenten können Server-Admins Plugins einfach verwalten und die Serverfunktionalität erweitern.

<InlineVoucher />



## Installation von Metamod:Source

Metamod:Source muss zuerst installiert werden, da Sourcemod davon abhängt. Lade dir zunächst die neueste Metamod:Source-Version von der offiziellen Webseite herunter. Entpacke das Archiv auf deinem Rechner.

Im Archiv findest du ein Verzeichnis namens `addons`. Lade dieses Verzeichnis per [FTP](gameserver-ftpaccess.md) auf deinen CS:GO Gameserver hoch, sodass es mit dem bestehenden Spielverzeichnis `../csgo/` zusammengeführt wird.


Nachdem du die Dateien hochgeladen hast, starte deinen Server neu. Um zu überprüfen, ob Metamod korrekt läuft, öffne die Server-Konsole und führe folgenden Befehl aus:

```
meta version
```


Wenn Metamod richtig installiert ist, zeigt die Konsole die installierte Version und weitere Infos an.

<Button label="Metamod:Source herunterladen" link="https://www.metamodsource.net/downloads.php" block />



## Installation von Sourcemod

Sobald Metamod:Source installiert ist, kannst du Sourcemod installieren. Lade die neueste stabile Version von Sourcemod von der offiziellen Webseite herunter und entpacke das Archiv. Lade die enthaltenen Ordner `addons` und `cfg` per [FTP](gameserver-ftpaccess.md) auf deinen CS:GO Gameserver hoch. Die Verzeichnisse müssen im CS:GO Spielverzeichnis `../csgo/` abgelegt werden. Nach dem Hochladen der Dateien starte den Server neu. Sourcemod wird nun automatisch über Metamod geladen.

Um zu bestätigen, dass Sourcemod funktioniert, öffne die Server-Konsole und gib ein:

```
sm version
```


Wenn die Installation erfolgreich war, gibt der Server die aktuelle Sourcemod-Version und Build-Infos zurück.

<Button label="Sourcemod herunterladen" link="https://www.sourcemod.net/downloads.php" block />



## Installation von Plugins

Plugins für Sourcemod werden typischerweise als `.smx` Dateien verteilt. Diese kompilierten Plugin-Dateien müssen in das `plugins` Verzeichnis innerhalb der Sourcemod-Installation hochgeladen werden.

```
../csgo/addons/sourcemod/plugins/
```


Nach dem Hochladen der Plugin-Datei starte den Server neu oder lade das Plugin direkt über die Server-Konsole mit folgendem Befehl neu:

```
sm plugins load <pluginname>
```


Wenn ein Plugin nicht korrekt lädt, überprüfe die Server-Logs im Sourcemod `logs` Verzeichnis auf mögliche Fehlermeldungen.

Manche Plugins enthalten auch zusätzliche Konfigurationsdateien. Diese werden üblicherweise hier abgelegt:

```
../csgo/addons/sourcemod/configs/
```


Folge immer den Installationsanweisungen des Plugin-Entwicklers, um eine korrekte Funktion sicherzustellen.



## Beliebte Plugins

<SearchableItemList items={items} />



## Fazit

Wenn du alle Schritte befolgt hast, solltest du Metamod:Source, Sourcemod und deine gewünschten Plugins erfolgreich auf deinem CS:GO Gameserver installiert haben. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />