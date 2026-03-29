---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Chat-Einstellungen konfigurieren"
description: "Lerne, wie du die Chat- und Kommunikations-Einstellungen auf deinem Over the Top WWI Gameserver konfigurierst → Jetzt mehr erfahren"
sidebar_label: Chat-Einstellungen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Chat-Einstellungen in **Over the Top WWI** steuern, wie Spieler während des Gameplays per Text kommunizieren. Mit der Anpassung dieser Einstellungen kannst du globale Kommunikation aktivieren, die Chat-Nutzung einschränken oder Spieler bei Bedarf komplett stummschalten.

Eine richtige Chat-Konfiguration hilft dabei, Ordnung auf dem Server zu halten und das Spielerlebnis insgesamt zu verbessern.

<InlineVoucher />

## Konfiguration

Die Chat-Einstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche und öffne die Datei `ServerConfiguration.ini`. In dieser Datei findest du folgende Parameter:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` aktiviert oder deaktiviert die globale Chat-Kommunikation

- `0` → Deaktiviert
- `1` → Aktiviert

- `ServerMuteAll` schaltet den Chat aller Spieler aus, wenn aktiviert

- `0` → Deaktiviert
- `1` → Aktiviert

- `BannedWordsPathString` definiert die Datei, die für das Filtern von gesperrten Wörtern genutzt wird. Die Datei enthält eine Liste blockierter Begriffe, die im Chat nicht erlaubt sind

Passe diese Einstellungen an, um zu steuern, wie Spieler kommunizieren dürfen und um Chat-Regeln auf deinem Server durchzusetzen.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Die aktualisierten Chat-Einstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast die Chat-Einstellungen auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. So kannst du die Spielerkommunikation managen und eine kontrollierte sowie angenehme Umgebung schaffen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />