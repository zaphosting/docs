---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Friendly Fire konfigurieren"
description: "Lerne, wie du Friendly Fire auf deinem Over the Top WWI Server aktivierst oder anpasst → Jetzt mehr erfahren"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Friendly Fire bestimmt, ob Spieler ihren eigenen Teammitgliedern während des Spiels Schaden zufügen können. Durch das Anpassen dieser Einstellungen kannst du steuern, wie realistisch oder nachsichtig der Kampf auf deinem **Over the Top WWI** Gameserver sein soll.

Das Aktivieren von Friendly Fire erhöht die Realitätsnähe und das taktische Gameplay, während das Deaktivieren oder Reduzieren eine entspanntere und zugänglichere Spielerfahrung schafft.

<InlineVoucher />

## Konfiguration

Die Friendly Fire Einstellungen werden in der Server-Konfigurationsdatei vorgenommen. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche und öffne die Datei `ServerConfiguration.ini`. In dieser Datei findest du folgende Parameter:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` aktiviert oder deaktiviert Nahkampfschaden an Teammitgliedern.
- `EnableFriendlyRangeFire` aktiviert oder deaktiviert Fernkampfschaden an Teammitgliedern.
- `FriendlyFireAtRoundStart` definiert eine Verzögerung in Sekunden, bevor Friendly Fire aktiv wird.
- `FriendlyFirePercent` steuert, wie viel Nahkampfschaden an Teammitglieder vergeben wird.
- `RangeFriendlyFirePercent` steuert, wie viel Fernkampfschaden an Teammitglieder vergeben wird.
- `ExplosionFf` aktiviert oder deaktiviert Explosionsschaden an Teammitgliedern.
- `FriendlyFireReflectPercent` reflektiert einen Prozentsatz des Schadens zurück auf den Angreifer statt auf das Teammitglied.

Nachdem du die `ServerConfiguration.ini` angepasst hast, speichere die Datei und starte deinen Server neu. Die neuen Friendly Fire Einstellungen werden sofort übernommen.

## Fazit

Glückwunsch! Du hast die Friendly Fire Einstellungen auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. Mit diesen Werten kannst du Realismus und Spielerlebnis für deine Community optimal ausbalancieren.

Bei weiteren Fragen oder Supportbedarf steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />