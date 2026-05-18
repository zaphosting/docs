---
id: rust-plugins
title: "Rust: Installation von Plugins"
description: "Entdecke, wie du deinen Rust-Gameserver mit beliebten Plugins für mehr Individualität und verbessertes Gameplay aufrüstest → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Einführung

Plugins ermöglichen es dir, deinen Server noch weiter auszubauen und zu personalisieren. Im Folgenden erklären wir dir, wo du die meistgenutzten Plugins findest und wie du sie einrichtest.

<InlineVoucher />


## Vorbereitung

Zuerst musst du die Plugins herunterladen, die du auf deinem Server installieren möchtest. Eine große Auswahl an Plugins findest du auf [umod.org (ehemals OXIDE)](https://umod.org/plugins). Beim Download erhältst du eine `.cs`-Datei.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Installation

Nachdem du die gewünschten Plugins heruntergeladen hast, kannst du mit der Installation starten. Diese erfolgt über **FTP**, daher benötigst du einen FTP-Client, um die Dateien auf deinen Server hochzuladen. Falls du noch nicht mit FTP vertraut bist, schau dir bitte unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung an.

Das richtige Plugin-Verzeichnis findest du unter: `/gXXXXXX/rust-oxide/oxide/plugins`. Lade die heruntergeladenen `.cs` Plugin-Dateien einfach in diesen Ordner hoch. Danach sollte es ungefähr so aussehen:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Mehr musst du nicht tun. Damit ist die Installation schon abgeschlossen. Anschließend kannst du in der Live-Konsole prüfen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte so aussehen:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Beliebte Plugins

Du suchst noch die perfekten Plugins für deinen Server?

Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und am meisten empfohlenen Plugins, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Erweiterungen, die zu deinem Projekt passen.

<SearchableItemList items={items} />


## Abschluss

Wenn du alle Schritte befolgt hast, solltest du dein Plugin erfolgreich installiert haben. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />