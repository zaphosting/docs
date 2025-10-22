---
id: unturned-whitelist
title: "Unturned: Whitelist auf dem Server aktivieren und bearbeiten"
description: "Entdecke, wie du deinen Unturned Gameserver absicherst, indem du die Whitelist aktivierst und verwaltest für kontrollierten Spielerzugang → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Whitelist aktivieren

Die Whitelist in Unturned ermöglicht es dir, deinen Gameserver zu schützen, indem nur ausgewählte Spieler, die auf der Liste stehen, sich verbinden dürfen. Die Aktivierung der Whitelist erfolgt im Spiel per Befehl. Dafür benötigst du **Owner-Rechte**. Falls du nicht weißt, was das ist und wie du sie vergibst, schau dir unsere Anleitung an: [Admin werden](unturned-becomeadmin.md)

Wenn du der Anleitung gefolgt bist und erfolgreich Admin geworden bist, kannst du jetzt die Whitelist auf deinem Server aktivieren. Öffne dazu den Chat/ die Konsole im Spiel auf deinem Server und führe folgenden Befehl aus:

```
/Whitelisted
```

Die Whitelist sollte jetzt aktiv sein und nur noch Spielern erlauben, dem Server beizutreten, die auf der Liste stehen. Das Hinzufügen und Entfernen von Spielern funktioniert mit den folgenden Befehlen.

## Whitelist verwalten

**Spieler zur Whitelist hinzufügen:**

```
Permit [SteamID]/[Tag]
```

**Spieler von der Whitelist entfernen:**

```
Unpermit [SteamID]
```

**Alle erlaubten Spieler anzeigen:**

```
Permits
```

<InlineVoucher />