---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Whitelist konfigurieren"
description: "Lerne, wie du eine Whitelist auf deinem Over the Top WWI Server aktivierst und verwaltest → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ermöglicht es dir, den Zugang zu deinem **Over the Top WWI** Gameserver so einzuschränken, dass nur genehmigte Spieler beitreten können. Das ist besonders praktisch für private Server, Communities oder Testumgebungen, bei denen der Zugang kontrolliert werden soll.

Wenn du die Whitelist aktivierst, können nur Spieler, die in der Whitelist-Datei stehen, eine Verbindung zum Server herstellen.

<InlineVoucher />

## Konfiguration

Die Whitelist wird in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. Dort findest du folgenden Parameter:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` aktiviert oder deaktiviert das Whitelist-System

- `False` → Deaktiviert
- `True` → Aktiviert

- `WhiteListPathString` legt die Datei fest, in der die erlaubten Spieler-IDs gespeichert sind

Wenn die Whitelist aktiviert ist, können nur Spieler, die in der angegebenen Datei stehen, dem Server beitreten.

## Whitelist verwalten

Die Whitelist-Datei befindet sich normalerweise im Serververzeichnis und enthält eine Liste der erlaubten Spieler-IDs.

Jeder Spieler muss in einer neuen Zeile eingetragen werden:

```
SteamID1
SteamID2
SteamID3
```

Achte darauf, die korrekten Spieler-IDs zu verwenden, sonst wird der Zugang verweigert. Nachdem du die Whitelist-Datei oder die `ServerConfiguration.ini` geändert hast, speichere die Änderungen und starte den Server neu. Die Whitelist wird dann aktiv sein.

## Fazit

Glückwunsch! Du hast die Whitelist auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. So kannst du steuern, wer Zugriff auf deinen Server hat und eine private oder moderierte Umgebung schaffen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />