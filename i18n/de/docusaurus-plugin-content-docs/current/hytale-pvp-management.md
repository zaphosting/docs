---
id: hytale-pvp-management
title: "Hytale: PvP Management"
description: "Verwalte und konfiguriere den Spieler-gegen-Spieler-Kampf (PvP) auf deinem Hytale Gameserver → Jetzt mehr erfahren"
sidebar_label: PvP Management
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das PvP-Management auf einem Hytale Gameserver steuert, ob Spieler sich innerhalb einer Welt gegenseitig Schaden zufügen oder bekämpfen können. Durch die Anpassung der PvP-Einstellungen können Serverbesitzer festlegen, ob der Kampf zwischen Spielern komplett aktiviert, vollständig deaktiviert oder auf bestimmte Situationen beschränkt ist.

<InlineVoucher />

## Konfiguration

Das PvP-Verhalten wird pro Welt definiert und über die Konfigurationsdatei des Servers eingestellt:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

Diese Einstellung bestimmt, wie der Server mit Spieler-gegen-Spieler-Schaden umgeht und ob PvP in der aktiven Welt erlaubt ist. Änderungen an den PvP-Einstellungen gelten global für die betroffene Welt und erfordern einen Serverneustart, damit sie wirksam werden.

Das folgende Beispiel zeigt eine Konfiguration, bei der PvP für eine Welt deaktiviert ist:

```
"WorldConfig": {
  "PvP": false
}
```

Mit dieser Einstellung können Spieler sich in dieser Welt nicht mehr gegenseitig Schaden zufügen, wodurch effektiv eine PvE-fokussierte Umgebung entsteht.

Um PvP zu aktivieren und den Kampf zwischen Spielern zu erlauben, kann die Konfiguration wie folgt gesetzt werden:

```
"WorldConfig": {
  "PvP": true
}
```

## Fazit

Sobald die Einstellungen vorgenommen sind, hast du eine klare Übersicht darüber, wie PvP verwaltet wird, und kannst die Konfiguration einfach anpassen, um kooperatives Gameplay, kompetitive Umgebungen oder eine Kombination aus beidem zu unterstützen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />