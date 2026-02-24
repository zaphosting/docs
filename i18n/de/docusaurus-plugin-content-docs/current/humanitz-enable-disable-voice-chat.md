---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Voice Chat aktivieren oder deaktivieren"
description: "Lerne, wie du den Voice Chat auf deinem HumanitZ Server aktivierst oder deaktivierst → Jetzt mehr erfahren"
sidebar_label: "Voice Chat aktivieren/deaktivieren"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Voice-Kommunikation kann die Atmosphäre auf deinem HumanitZ Gameserver richtig verändern. Wenn du den Voice Chat aktivierst, können Spieler direkt in der Nähe miteinander sprechen, was das Eintauchen ins Spiel und die Zusammenarbeit verbessert. Wenn du ihn deaktivierst, förderst du vielleicht externe Kommunikationsplattformen oder schaffst ein ruhigeres, isolierteres Survival-Erlebnis.

Im HumanitZ wird der Voice Chat direkt in der Server-Konfigurationsdatei eingestellt.

<InlineVoucher />

## Konfiguration

Die Voice Chat Einstellungen findest du in der Datei `GameServerSettings.ini`. Du kannst diese Datei im Control Panel deines Servers unter **Configs** öffnen. In der Konfigurationsdatei suchst du folgenden Parameter:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

Die Einstellung funktioniert so:

- `Voip=true` oder `Voip=1` – Voice Chat aktivieren  
- `Voip=false` oder `Voip=0` – Voice Chat deaktivieren  

Um den Voice Chat zu ändern, passe einfach den Wert nach deinem Wunsch an. Speichere die Datei danach ab und starte deinen Gameserver neu, damit die Änderung wirksam wird.

## Fazit

Glückwunsch! Mit der Änderung des `Voip`-Werts in der `GameServerSettings.ini` hast du den Voice Chat auf deinem HumanitZ Gameserver erfolgreich aktiviert oder deaktiviert. Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />