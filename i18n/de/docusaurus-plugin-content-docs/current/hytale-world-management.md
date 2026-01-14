---
id: hytale-world-management
title: "Hytale: Weltenverwaltung"
description: "Entdecke, wie du deinen Hytale-Server absicherst, indem du den Spielerzugang mit Whitelist-Funktionen verwaltest und dein Gameplay schützt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Weltenverwaltung auf einem Hytale-Gameserver umfasst die Kontrolle der persistenten Spielwelt, in der Spieler erkunden, bauen und interagieren. Eine Welt besteht aus allen Geländedaten, Strukturen, Spielerfortschritten und Einstellungen, die das gemeinsame Erlebnis definieren. Die Möglichkeit, Welten zu erstellen, umzubenennen, zurückzusetzen oder zu organisieren, ist ein zentraler Bestandteil der Serverpflege – egal ob für private oder öffentliche Communities.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

## Neue Welt erstellen

Das Erstellen einer neuen Welt gibt deinem Server eine frische Umgebung, um Gelände, Strukturen und Spielfortschritt von Grund auf zu generieren. Über die Live-Konsole können Welten erstellt oder gewechselt werden, indem die passenden Welt-Kommandos ausgeführt werden.  
Wenn ein neuer Weltname angegeben wird, lädt der Server entweder eine bestehende Welt mit diesem Namen oder generiert eine neue, falls keine passenden Weltdaten gefunden werden.

```
/world create <weltname>
```

Dieser Befehl erstellt eine neue Welt mit dem Namen `<weltname>`. Falls keine bestehenden Weltdaten für diesen Namen vorhanden sind, generiert der Server eine frische Weltumgebung.



## Welt als Standard setzen

Eine bestimmte Welt kann als Standardwelt markiert werden, sodass sie beim Serverstart automatisch geladen wird. Das Setzen einer Standardwelt ist praktisch, wenn mehrere Welten existieren und eine davon immer als Hauptumgebung genutzt werden soll.

Über die Live-Konsole kann die Standardwelt geändert werden, ohne Konfigurationsdateien manuell bearbeiten zu müssen. Nach dem Setzen priorisiert der Server diese Welt beim nächsten Neustart.

```
/world setdefault <weltname>
```

Dieser Befehl setzt die Welt mit dem Namen `mainworld` als Standardwelt. Nach einem Serverneustart wird diese Welt automatisch geladen.



## Bestehende Welt entfernen

Neben dem Erstellen und Laden von Welten kann die Live-Konsole auch genutzt werden, um bestehende Welten vom Server zu löschen. Das ist praktisch, wenn veraltete, ungenutzte oder Testwelten nicht mehr gebraucht werden. Das Entfernen einer Welt löscht die zugehörigen Weltdaten vom Server. Dieser Vorgang ist dauerhaft und kann nur durch ein Backup rückgängig gemacht werden.

```
/world remove <weltname>
```

Dieser Befehl entfernt die Welt mit dem Namen `weltname` vom Server. Wenn die Welt gerade aktiv ist, muss sie zuerst entladen werden, sonst kann der Server den Befehl je nach Implementierung ablehnen.



## Fazit

Die Verwaltung von Welten über die Live-Konsole bietet eine schnelle und flexible Möglichkeit, die aktive Umgebung auf einem Hytale-Gameserver zu steuern. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂