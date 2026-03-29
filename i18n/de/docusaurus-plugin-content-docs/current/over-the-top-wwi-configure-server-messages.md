---
title: "Over the Top WWI: Servernachrichten konfigurieren"
description: "Lerne, wie du automatisierte Servernachrichten auf deinem Over the Top WWI Gameserver einrichtest → Jetzt mehr erfahren"
sidebar_label: Servernachrichten
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Automatisierte Servernachrichten sind eine praktische Möglichkeit, wichtige Infos während des Spiels an die Spieler zu kommunizieren. Diese Nachrichten können genutzt werden, um Regeln zu teilen, deinen Discord-Server zu bewerben oder hilfreiche Tipps zu geben.

Auf einem **Over the Top WWI** Gameserver können Nachrichten in regelmäßigen Abständen angezeigt werden, sodass alle Spieler wichtige Infos erhalten – ganz ohne manuelles Eingreifen.

<InlineVoucher />

## Konfiguration

Servernachrichten werden in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. Dort findest du folgende Parameter:

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` aktiviert oder deaktiviert die automatischen Nachrichten. Setze den Wert auf `1`, um Nachrichten zu aktivieren, oder auf `0`, um sie auszuschalten.
- `AddServerMessage` definiert die Nachrichten, die angezeigt werden. Du kannst mehrere Zeilen hinzufügen, um verschiedene Nachrichten während des Spiels rotieren zu lassen.
- `ServerMessagesTimer` legt das Intervall zwischen den Nachrichten in Sekunden fest. Zum Beispiel zeigt `120` alle 2 Minuten eine Nachricht an.

Du kannst deine Nachrichten ganz nach Belieben anpassen und erweitern, indem du weitere Zeilen hinzufügst:

```
AddServerMessage = Willkommen auf dem Server!
AddServerMessage = Halte dich an die Regeln und respektiere andere Spieler.
AddServerMessage = Tritt unserem Discord für Updates bei.
```

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Gameserver neu. Die Nachrichten erscheinen dann automatisch im Spiel im eingestellten Intervall.

## Fazit

Glückwunsch! Du hast erfolgreich automatisierte Nachrichten auf deinem **Over the Top WWI Gameserver** eingerichtet. So hältst du deine Spieler immer auf dem Laufenden und verbesserst die Kommunikation auf deinem Server.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />