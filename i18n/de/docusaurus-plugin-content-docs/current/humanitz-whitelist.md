---
id: humanitz-whitelist
title: "HumanitZ: Whitelist-Verwaltung"
description: "Lerne, wie du die Whitelist verwaltest und den Serverzugang auf deinem HumanitZ-Server kontrollierst → Jetzt mehr erfahren"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Eine Whitelist ermöglicht dir, genau zu steuern, wer auf deinem HumanitZ-Server spielen darf. Wenn aktiviert, können nur Spieler mit in der erlaubten Spieler-Datei gelisteten Steam IDs verbinden.

<InlineVoucher />



## Konfiguration

Die Whitelist-Funktion wird in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Servermanagement-Panel unter **Configs**. Um den Whitelist-Modus zu aktivieren, suche den folgenden Parameter und setze ihn:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Aktiviert den Whitelist-Modus. Nur gelistete Spieler dürfen joinen.
- `OnlyAllowedPlayers=0` – Deaktiviert den Whitelist-Modus. Alle Spieler können joinen.

Nachdem du den Whitelist-Modus aktiviert hast, musst du die Whitelist-Datei manuell anlegen.

Verbinde dich per [FTP](gameserver-ftpaccess.md) mit deinem Server über deinen bevorzugten FTP-Client. Navigiere im Hauptverzeichnis des Servers und erstelle eine neue Datei namens `F_MVPAccess.txt`. Trage in diese Datei für jeden erlaubten Spieler **eine eindeutige Steam ID pro Zeile** ein.

```
76561198000000001
76561198000000002
```

Speichere die Datei nach dem Hinzufügen der Steam IDs.



## Spieleraktivität überwachen

HumanitZ stellt zusätzliche Dateien zur Verfügung, um Spieler-Verbindungen zu verfolgen. `F_ConnectedPlayers.txt` zeigt aktuell verbundene Spieler an und `PlayerConnectedLog.txt` protokolliert alle Verbindungen und Trennungen der Spieler inklusive Steam-Namen und eindeutiger Steam ID mit Zeitstempel.

Diese Dateien sind super hilfreich, um Steam IDs zu identifizieren und die Serveraktivität zu überwachen. Nach Änderungen an Whitelist- oder Bann-Dateien speichere die Dateien und starte den Server neu, damit die Änderungen wirksam werden.

## Fazit

Glückwunsch! Mit aktiviertem Whitelist-Modus und der Verwaltung der Dateien `F_MVPAccess.txt` und `F_BannedPlayers.txt` hast du erfolgreich die Zugangskontrolle auf deinem HumanitZ-Server eingerichtet.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂 

<InlineVoucher />