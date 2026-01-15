---
id: hytale-obtain-uuid
title: "Hytale: UUID bekommen"
description: "Finde heraus, wie du die UUID eines Spielers für Server-Configs und Permissions bekommst → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Jeder Spieler auf einem Hytale-Server wird intern durch eine UUID identifiziert, auch bekannt als Universally Unique Identifier. Diese ID ist dauerhaft und ändert sich nicht, selbst wenn der Spieler später seinen Benutzernamen ändert.

UUIDs werden für verschiedene Admin-Aufgaben benötigt, wie z.B. das Verwalten von Permissions, das Zuweisen von Gruppen oder das Referenzieren von Spielern in Serverbefehlen und Konfigurationsdateien.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da das Spiel noch aktiv entwickelt wird, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsprozesse weiterhin ändern.

:::

<InlineVoucher />


## UUID bekommen

Die UUID eines Spielers kannst du direkt im Spiel über den eingebauten Chat-Befehl abfragen. Das ist besonders praktisch, wenn der Spieler gerade online ist und du die UUID sofort brauchst.

Logge dich mit den nötigen Rechten ein, öffne den Ingame-Chat und führe den UUID-Abfragebefehl für den gewünschten Spieler aus:

```
/whoami <playername>
```

Nach Ausführung des Befehls antwortet der Server direkt im Chat mit der UUID des angegebenen Spielers. Die zurückgegebene UUID identifiziert den Spieler eindeutig und kann für Permissions, Gruppen, Whitelist-Einträge oder andere Server-Operationen genutzt werden.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Fazit

Die UUID eines Spielers zu bekommen ist ein wichtiger Schritt für fortgeschrittenes Server-Management auf deinem Hytale-Server. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂


<InlineVoucher />