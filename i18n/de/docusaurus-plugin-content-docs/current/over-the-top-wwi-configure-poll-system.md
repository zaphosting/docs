---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Poll-System konfigurieren"
description: "Lerne, wie du die Abstimmungs- und Poll-Einstellungen auf deinem Over the Top WWI Server konfigurierst → Jetzt mehr erfahren"
sidebar_label: Poll-System
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Poll-System in **Over the Top WWI** ermöglicht es Spielern, über verschiedene Aktionen abzustimmen, wie z.B. das Kicken von Spielern, das Wechseln von Maps oder das Anpassen von Gameplay-Einstellungen. Dieses Feature verbessert die Community-Interaktion und reduziert den Bedarf an ständiger Admin-Einmischung.

Durch die Konfiguration der Poll-Einstellungen kannst du steuern, welche Abstimmungen erlaubt sind und wie sie sich während des Spiels verhalten.

<InlineVoucher />

## Konfiguration

Das Poll-System wird in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver-Management-Panel** unter **Configs** öffnen und bearbeiten. Suche und öffne die Datei `ServerConfiguration.ini`. In dieser Datei findest du folgende Parameter:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` definiert den Prozentsatz an Stimmen, der für das Bestehen einer Abstimmung nötig ist
- `EnableBanPlayerPoll` erlaubt Spielern, über das Bannen anderer abzustimmen
- `EnableKickPlayerPoll` erlaubt Spielern, über das Kicken anderer abzustimmen
- `EnableChangeMapsPoll` erlaubt Spielern, über Map-Wechsel abzustimmen
- `EnableMutePlayerPoll` erlaubt Spielern, über das Stummschalten anderer abzustimmen
- `EnableCustomPoll` aktiviert benutzerdefinierte Abstimmungsoptionen
- `ChangeMapImmediately` bestimmt, ob ein erfolgreicher Map-Vote sofort umgesetzt wird

Erlaubte Poll-Spielmodi:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Diese Einstellungen legen fest, welche Spielmodi bei Abstimmungen ausgewählt werden können.

- `1` → Aktiviert
- `0` → Deaktiviert

Du kannst einzelne Modi deaktivieren, um die Abstimmungsoptionen einzuschränken und ein konsistentes Gameplay-Erlebnis zu gewährleisten.

Nachdem du die `ServerConfiguration.ini` angepasst hast, speichere die Datei und starte deinen Server neu. Die aktualisierten Poll-Einstellungen werden automatisch übernommen.

## Fazit

Glückwunsch! Du hast das Poll-System auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. So können Spieler aktiv an Entscheidungen teilnehmen und die Serververwaltung wird automatisiert.

Bei weiteren Fragen oder Support brauchst du nur unser Support-Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />