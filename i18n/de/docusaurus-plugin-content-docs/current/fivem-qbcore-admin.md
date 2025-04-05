---
id: fivem-qbcore-admin
title: "FiveM: Admin werden mit QBCore"
description: Informationen, wie du auf deinem FiveM QBCore Server admin werden kannst. - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. 
<InlineVoucher />



## Konfiguration

Die Konfiguration der Administratorberechtigungen erfolgt über die Konfigurationsdatei `server.cfg`. Logge dich dazu in das txAdmin Interface ein und öffne den CFG Editor. Navigiere anschließend zum Ende der Konfigurationsdatei, bis du zu `Permissions` gelangst.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore unterstützt verschiedene Spieleridentifikationen, darunter FiveM IDs (`identifier.fivem:`), Rockstar Lizenzen (`identifier.license:`) und Discord IDs (`identifier.discord:`). Diese Identifikatoren können direkt über die txAdmin-Oberfläche abgefragt werden. Dabei kannst du entscheiden, ob du diesen Personen den Status GOD, Admin oder Mod geben möchtest.

Sobald du die Identifikatoren erhalten und dich für einen Status entschieden hast, kannst du den einzelnen Spielern Berechtigungen zuweisen, indem du sie zu deiner `server.cfg` hinzufügst. Füge dazu eine der drei verfügbaren Optionen als neuen Eintrag unter dem Abschnitt Permissions hinzu:

```
add_principal identifier.license:xxxxxx qbcore.god   # Player Name
add_principal identifier.license:xxxxxx qbcore.admin # Player Name
add_principal identifier.license:xxxxxx qbcore.mod   # Player Name

```

Das Endergebnis könnte zum Beispiel wie folgt aussehen:

```
## Permissions ##
add_ace group.admin command allow # allow all commands
# Deployer Note: this admin master has no identifiers to be automatically added.
# add_principal identifier.discord:111111111111111111 group.admin #example

add_principal identifier.fivem:16219250 qbcore.admin # Player Name
```



## Abschluss

Vorausgesetzt, dass du alle Schritte erfolgreich befolgt hast, bist du nun Admin auf deinem eigenen Server. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
