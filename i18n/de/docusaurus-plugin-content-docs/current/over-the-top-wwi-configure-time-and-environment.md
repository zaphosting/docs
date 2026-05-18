---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Zeit und Umgebung konfigurieren"
description: "Lerne, wie du die Tageszeit und Umgebungs-Einstellungen auf deinem Over the Top WWI Gameserver anpasst → Jetzt mehr erfahren"
sidebar_label: Zeit & Umgebung
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Zeit- und Umgebungs-Einstellungen in **Over the Top WWI** beeinflussen Sichtbarkeit, Atmosphäre und die allgemeinen Gameplay-Bedingungen. Durch das Anpassen dieser Werte kannst du helle Tageslicht-Schlachten, düstere Szenarien oder abwechslungsreiche saisonale Umgebungen erschaffen.

Diese Einstellungen ermöglichen es dir, das Aussehen und Feeling deines Servers individuell zu gestalten und die Immersion für deine Spieler zu verbessern.

<InlineVoucher />

## Konfiguration

Zeit- und Umgebungs-Einstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` definiert die Ingame-Stunde
- `Season` steuert die aktuelle Jahreszeit

- `0` → Standard
- `1` → Frühling
- `2` → Sommer
- `3` → Herbst
- `4` → Winter

- `TemperatureinCelcius` passt die Umgebungstemperatur an
- Dies kann Atmosphäre und Umwelteffekte beeinflussen

Mit diesen Einstellungen kannst du verschiedene Szenarien erstellen, wie z.B. Schlachten am frühen Morgen, Kämpfe bei Nacht oder saisonale Umgebungen.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Die neuen Umgebungs-Einstellungen werden automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Zeit- und Umgebungs-Einstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. So kannst du die Atmosphäre anpassen und einzigartige Spielerlebnisse für deine Community schaffen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />