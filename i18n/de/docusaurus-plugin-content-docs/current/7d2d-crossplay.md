---
id: 7d2d-crossplay
title: "7 Days to Die: Crossplay für Konsolen- und PC-Spieler aktivieren"
description: "Lerne, wie du deinen 7 Days to Die Gameserver so konfigurierst, dass Crossplay zwischen PC- und Konsolenspielern möglich ist → Jetzt mehr erfahren"
sidebar_label: Crossplay aktivieren
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit den neueren Versionen von **7 Days to Die** ermöglicht Crossplay, dass Spieler von **PC und unterstützten Konsolenplattformen** auf demselben Server zusammen spielen können. So können Communities plattformübergreifend gemeinsam zocken.

Damit Crossplay funktioniert, müssen bestimmte Einstellungen auf dem Server vorgenommen werden. Diese sorgen dafür, dass der Server mit Konsolenverbindungen kompatibel ist und korrekt über Epic Online Services registriert wird.

<InlineVoucher />



## Konfiguration

Die Crossplay-Konfiguration findest du in der Datei `serverconfig-zap.xml`. Um diese zu bearbeiten, öffne deine **Gameserver-Verwaltung** und navigiere zu **Configs**. Suche und öffne die Konfigurationsdatei `serverconfig-zap.xml`.

Stelle sicher, dass folgende Werte in der Datei korrekt gesetzt sind:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Diese Parameter sind für die Crossplay-Kompatibilität erforderlich. Die `ServerMaxPlayerCount` darf **8 Spieler** nicht überschreiten, da das Konsolen-Crossplay aktuell maximal acht Teilnehmer unterstützt. Die Option `ServerAllowCrossplay` muss aktiviert sein, damit Konsolenspieler dem Server beitreten dürfen.

Außerdem muss `EACEnabled` aktiviert bleiben, da Crossplay auf **Epic Online Services und Easy Anti-Cheat** für Authentifizierung und Matchmaking angewiesen ist. Der Wert `IgnoreEOSSanctions` muss auf `false` stehen, damit EOS-Beschränkungen für plattformübergreifende Sessions korrekt durchgesetzt werden.

Nach der Anpassung der Werte speichere die Datei und **starte deinen Server neu**, damit die neuen Einstellungen wirksam werden.



## Wichtige Hinweise

Crossplay setzt voraus, dass alle Spieler eine kompatible Spielversion nutzen. Server mit nicht unterstützten Mods oder stark angepassten Konfigurationen können verhindern, dass Konsolenspieler sich verbinden. Falls Konsolenspieler deinen Server nicht finden oder beitreten können, überprüfe die Crossplay-Einstellungen und stelle sicher, dass der Server auf der neuesten unterstützten Version läuft.



## Fazit

Glückwunsch! Du hast deinen **7 Days to Die Gameserver erfolgreich für Crossplay konfiguriert**, sodass PC- und Konsolenspieler gemeinsam in einer Welt zocken können. Mit den richtigen Servereinstellungen kann deine Community plattformübergreifend zusammen spielen.

Bei weiteren Fragen oder Support brauchst du nur unser Team kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />