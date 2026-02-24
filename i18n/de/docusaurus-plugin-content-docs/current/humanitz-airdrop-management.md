---
id: humanitz-airdrop-management
title: "HumanitZ: Airdrop-Management"
description: "Lerne, wie du Airdrops auf deinem HumanitZ-Server aktivierst, deaktivierst und konfigurierst → Jetzt mehr erfahren"
sidebar_label: "Airdrop-Management"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Airdrops in HumanitZ liefern wertvolle Beute und können das Spielerlebnis stark beeinflussen – von der Bewegung der Spieler über Konfliktzonen bis hin zur gesamten Serverdynamik. Je nach Spielstil deines Servers möchtest du vielleicht häufige Versorgungslieferungen für mehr Action oder sie komplett deaktivieren, um ein härteres, ressourcenärmeres Survival-Erlebnis zu schaffen.

<InlineVoucher />

## Konfiguration

Die Airdrop-Einstellungen steuerst du in der Datei `GameServerSettings.ini`. Du findest diese Datei im Control Panel deines Servers unter **Configs**. Im Config-File suchst du nach folgenden Parametern:

```
; Legt fest, ob Airdrops aktiviert sind oder nicht
AirDrop=true
;Wie viele Spieltage zwischen jedem Airdrop liegen
AirDropInterval=1
```

So funktioniert die Konfiguration:

- `AirDrop=true` – Aktiviert Airdrops  
- `AirDrop=false` – Deaktiviert Airdrops komplett  
- `AirDropInterval` – Definiert, wie viele Ingame-Tage zwischen den Airdrops liegen  

Beispiel: Wenn du möchtest, dass alle drei Ingame-Tage ein Airdrop stattfindet:

```
AirDrop=true
AirDropInterval=3
```

Wenn du Airdrops komplett ausschalten willst:

```
AirDrop=false
```

Speichere nach der Änderung die Datei und starte deinen Server neu, damit die neuen Einstellungen wirksam werden.

## Fazit

Glückwunsch! Mit der Anpassung der Werte `AirDrop` und `AirDropInterval` in der `GameServerSettings.ini` hast du das Airdrop-Verhalten auf deinem HumanitZ-Server erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />