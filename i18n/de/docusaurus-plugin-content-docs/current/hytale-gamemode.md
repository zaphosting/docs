---
id: hytale-gamemode
title: "Hytale: Spielmodus-Konfiguration"
description: "Entdecke, wie du deinen Hytale-Server absicherst, indem du den Spielerzugang mit Whitelist-Funktionen verwaltest und dein Gameplay schützt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hytale-Server erlauben dir, Gameplay-Einstellungen wie den Spielmodus zu konfigurieren, der das Spielerlebnis definiert. Durch das Ändern des Spielmodus kannst du deinen Server auf einen bestimmten Spielstil oder Community-Vorlieben anpassen.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Spielmodus ändern

### Live-Konsole
Der Spielmodus kann während des laufenden Servers über die Live-Konsole oder Ingame-Befehle geändert werden, sofern die erforderlichen Berechtigungen vorhanden sind. Diese Methode ermöglicht es Admins, den Spielmodus zu wechseln, ohne Konfigurationsdateien bearbeiten zu müssen.

Der Konsolenbefehl aktualisiert den aktiven Spielmodus sofort für die aktuelle Server-Session. Je nach Server-Setup bleibt die Änderung bis zum nächsten Neustart bestehen oder wird auf den Wert aus der Konfigurationsdatei zurückgesetzt.

```
/gamemode <gamemode>
```

Der Wert von `GameMode` bestimmt, welcher Spielmodus beim Serverstart angewendet wird. Je nach gewünschtem Spielerlebnis kann dieser Wert entsprechend angepasst werden.

Gängige Spielmodus-Werte sind:

- `Creative` für uneingeschränktes Bauen und Content-Erstellung
- `Adventure` für strukturiertes Gameplay mit definiertem Fortschritt und Interaktionsregeln

Nach dem Ändern des Spielmodus-Werts muss der Server neu gestartet werden, damit die neue Einstellung wirksam wird.



### Konfigurationsdatei

Der Spielmodus kann direkt in der Server-Konfigurationsdatei festgelegt werden.  
Diese Methode empfiehlt sich, wenn der Server immer mit einem bestimmten Spielmodus starten soll oder bei der Vorbereitung eines frischen Server-Setups.

Die Konfigurationsdatei ist über dein Hosting Control Panel oder den Dateimanager zugänglich. In dieser Datei gibt es eine Einstellung, die den aktiven Spielmodus beim Serverstart steuert. Nach der Änderung dieses Werts muss der Server neu gestartet werden, damit die Änderung wirksam wird.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

Der Wert von `GameMode` bestimmt, welcher Spielmodus beim Serverstart angewendet wird. Je nach gewünschtem Spielerlebnis kann dieser Wert entsprechend angepasst werden.

Gängige Spielmodus-Werte sind:

- `Creative` für uneingeschränktes Bauen und Content-Erstellung
- `Adventure` für strukturiertes Gameplay mit definiertem Fortschritt und Interaktionsregeln

Nach dem Ändern des Spielmodus-Werts muss der Server neu gestartet werden, damit die neue Einstellung wirksam wird.



## Fazit

Indem du den Spielmodus entweder über die Server-Konfigurationsdatei oder die Live-Konsole einstellst, kannst du das Gameplay auf deinem Hytale-Server genau steuern. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂