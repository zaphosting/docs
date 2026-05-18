---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Klassenlimits konfigurieren"
description: "Lerne, wie du Klassenlimits auf deinem Over the Top WWI Gameserver einstellst → Jetzt mehr erfahren"
sidebar_label: Klassenlimits
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Klassenlimits in **Over the Top WWI** steuern, wie viele Spieler bestimmte Einheitentypen wie Scharfschützen, Pioniere oder schwere Einheiten nutzen können. Durch das Anpassen dieser Limits sorgst du für ein ausgewogenes Gameplay und verhinderst, dass bestimmte Klassen übermäßig genutzt werden.

Mit der Konfiguration der Klassenlimits kannst du faire Teamzusammenstellungen sicherstellen und ein strukturierteres sowie taktischeres Spielerlebnis schaffen.

<InlineVoucher />

## Konfiguration

Klassenlimits werden in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` aktiviert oder deaktiviert die Klassenbeschränkungen  
- `0` → Deaktiviert  
- `1` → Aktiviert  

- `PercentofCavPerTeam` legt den Prozentsatz der Kavallerie-Einheiten pro Team fest  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` bestimmen, wie viele Spieler jede Klasse wählen können  

- `NumberofInfOfficers` steuert die Anzahl der verfügbaren Offiziersrollen  

- `MinimumNumOfPlayerForClassLimits` definiert, wie viele Spieler mindestens auf dem Server sein müssen, bevor die Klassenlimits greifen  

Passe diese Werte an, um zu steuern, wie viele Spieler jede Klasse auswählen können und um deinen Gameserver nach deinem bevorzugten Spielstil auszubalancieren.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Gameserver neu. Die neuen Klassenlimits werden automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Klassenlimits auf deinem **Over the Top WWI Gameserver** konfiguriert. So kannst du die Teamzusammenstellungen ausbalancieren und das gesamte Spielerlebnis verbessern.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />