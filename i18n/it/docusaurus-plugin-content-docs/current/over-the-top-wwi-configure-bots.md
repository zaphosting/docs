---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Bot Einstellungen"
description: "Lerne, wie du die Bot-Einstellungen auf deinem Over the Top WWI Server konfigurierst → Jetzt mehr erfahren"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bots können auf einem **Over the Top WWI** Server genutzt werden, um freie Slots zu füllen, groß angelegte Schlachten zu simulieren und auch bei wenigen Spielern für Action zu sorgen. Durch das Anpassen der Bot-Einstellungen kannst du Schwierigkeit, Verhalten und die Intensität der Matches steuern.

So kannst du alles kreieren – von kleinen kontrollierten Gefechten bis hin zu chaotischen Schlachten mit vielen KI-gesteuerten Einheiten.

<InlineVoucher />

## Konfiguration

Die Bot-Einstellungen werden in der Server-Konfigurationsdatei vorgenommen. Du findest und bearbeitest diese Datei in deinem **Gameserver-Management-Panel** unter **Configs**. Öffne die Datei `ServerConfiguration.ini`. Dort findest du folgende Parameter:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` legt die Anzahl der Bots im angreifenden Team fest
- `DefenderBots` legt die Anzahl der Bots im verteidigenden Team fest
- `AutoAssignBots` verteilt Bots automatisch auf die Teams
- `0` → Aus
- `1` → An

- `BotCallinMulti` steuert, wie oft Bots gespawnt oder verstärkt werden
- `SubBotForPlayer` ersetzt Bots durch echte Spieler, wenn diese joinen
- `1` → An
- `0` → Aus

### Erweiterte Bot-Konfiguration

Du kannst das Bot-Verhalten noch feiner anpassen mit diesen Parametern:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Diese Werte bestimmen, wie häufig bestimmte Einheitentypen beim Bot-Spawn ausgewählt werden. Höhere Werte bedeuten mehr Bots dieser Einheit im Match.

### Wellen- und Skalierungs-Einstellungen

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` bestimmt, wie lange eine Bot-Welle dauert
- `WaveBuildUpTime` definiert, wie lange es dauert, bis eine Welle komplett aufgebaut ist
- `AutoAssignBotsScaleMulti` skaliert die Bot-Anzahl abhängig von der Spielerzahl

Nach dem Ändern der `ServerConfiguration.ini` speichere die Datei und starte deinen Server neu. Die neuen Bot-Einstellungen werden dann im Spiel aktiv.

## Fazit

Glückwunsch! Du hast erfolgreich Bots auf deinem **Over the Top WWI Server** konfiguriert. Mit diesen Einstellungen kannst du die Match-Intensität steuern, das Spielerlebnis verbessern und deinen Server immer lebendig halten.

Bei Fragen oder Support brauchst du nur unser Team kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />