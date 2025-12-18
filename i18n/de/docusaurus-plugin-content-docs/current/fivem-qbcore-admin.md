---
id: fivem-qbcore-admin
title: "FiveM: Admin werden mit QBCore"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und verbessertes Ingame-Management → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Administration mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.

<InlineVoucher />

## Konfiguration

Die Konfiguration der Administratorrechte erfolgt über die ``server.cfg``-Datei. Melde dich dazu im txAdmin-Interface an und öffne den CFG Editor. Navigiere dann ans Ende der Konfigurationsdatei, bis du zum Abschnitt `Permissions` kommst.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore unterstützt verschiedene Spieler-IDs, darunter FiveM IDs (`identifier.fivem:`), Rockstar Lizenzen (`identifier.license:`) und Discord IDs (`identifier.discord:`). Diese IDs kannst du direkt aus deinem txAdmin-Interface auslesen. Dabei kannst du entscheiden, ob du ihnen den GOD-, Admin- oder Mod-Status geben möchtest.

Hast du die IDs und den gewünschten Status ermittelt, kannst du einzelnen Spielern Rechte zuweisen, indem du sie in deiner `server.cfg` einträgst. Füge dazu eine der drei verfügbaren Optionen als neuen Eintrag unter dem Permissions-Abschnitt hinzu:

```
add_principal identifier.license:xxxxxx qbcore.god   # Spielername
add_principal identifier.license:xxxxxx qbcore.admin # Spielername
add_principal identifier.license:xxxxxx qbcore.mod   # Spielername
```

Das Endergebnis könnte zum Beispiel so aussehen:

```
## Permissions ##
add_ace group.admin command allow # erlaube alle Befehle
# Deployer Note: dieser Admin-Master hat keine IDs, um automatisch hinzugefügt zu werden.
# add_principal identifier.discord:111111111111111111 group.admin # Beispiel

add_principal identifier.fivem:16219250 qbcore.admin # Spielername
```

## Fazit

Wenn du alle Schritte erfolgreich befolgt hast, bist du jetzt Admin auf deinem eigenen Server. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />