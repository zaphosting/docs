---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Voice Chat konfigurieren"
description: "Lerne, wie du den Voice Chat auf deinem Over the Top WWI Server aktivierst und konfigurierst → Jetzt mehr erfahren"
sidebar_label: Voice Chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Voice Chat ermöglicht es Spielern auf deinem **Over the Top WWI** Gameserver, während des Spiels direkt miteinander zu kommunizieren. Das verbessert die Koordination, das Teamplay und die Immersion, besonders in taktischen Situationen.

Durch die Konfiguration der Voice Chat Einstellungen kannst du steuern, ob Kommunikation erlaubt ist, die Qualität anpassen und festlegen, wie sich der Voice Chat während Matches verhält.

<InlineVoucher />

## Konfiguration

Die Voice Chat Einstellungen werden in der Server-Konfigurationsdatei vorgenommen. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` aktiviert oder deaktiviert den Voice Chat auf dem Server
- `VoipQuality` steuert die Sprachqualität
- `VoipDelay` fügt eine Verzögerung in Sekunden hinzu, bevor Spieler nach dem Spawn den Voice Chat nutzen können

Passe diese Werte je nach deinen Server-Vorlieben und Performance-Anforderungen an. Niedrigere Qualitätsstufen können bei vielen Spielern oder begrenzter Bandbreite von Vorteil sein.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Die Voice Chat Einstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast den Voice Chat auf deinem **Over the Top WWI Gameserver** erfolgreich konfiguriert. So können Spieler effektiv kommunizieren und das Teamplay während der Matches wird verbessert.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />