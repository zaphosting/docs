---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Server Performance optimieren"
description: "Lerne, wie du die Performance und das Serververhalten deines Over the Top WWI Servers optimierst → Jetzt mehr erfahren"
sidebar_label: Performance-Einstellungen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Performance-Einstellungen in **Over the Top WWI** beeinflussen, wie flüssig dein Server läuft – besonders bei vielen Spielern oder intensiver KI-Nutzung. Die richtige Konfiguration kann die Stabilität verbessern, Lag reduzieren und für alle Spieler ein besseres Gameplay-Erlebnis garantieren.

Mit den passenden Einstellungen kannst du die Balance zwischen visueller Simulation, KI-Berechnungen und Serverlast optimieren.

<InlineVoucher />

## Konfiguration

Die Performance-Einstellungen werden in der Server-Konfigurationsdatei vorgenommen. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. Dort findest du folgende Parameter:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` definiert das Performance-Profil des Servers

  - `0` → Standard
  - `1` → Optimierung für höhere Spielerzahlen
  - `2` → Optimierung für sehr hohe Spielerzahlen

- `NavCalcsPerFrame` steuert, wie viele Navigationsberechnungen pro Frame durchgeführt werden
- `NavMeshFrames` legt fest, wie oft Navigationsnetze aktualisiert werden
- `NavMeshAutoSeed` beeinflusst, wie KI-Navigationspfade generiert werden
- `ResetIfNoPlayers` setzt den Server automatisch zurück, wenn keine Spieler verbunden sind

  - `0` → Deaktiviert
  - `1` → Aktiviert

Das Anpassen dieser Werte kann die Server-Performance verbessern, vor allem wenn viele Bots laufen oder große Schlachten stattfinden.

Nach der Änderung der `ServerConfiguration.ini` speichere die Datei und starte deinen Server neu. Die neuen Performance-Einstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast die Performance-Einstellungen deines **Over the Top WWI Servers** erfolgreich optimiert. Mit der richtigen Feinabstimmung bleibt dein Server stabil und sorgt für flüssiges Gameplay, selbst bei hoher Belastung.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />