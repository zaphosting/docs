---
id: pathoftitans-becomeadmin
title: "Path of Titans: Admin werden"
description: Informationen darüber, wie du ein Admin auf deinem Path of Titans Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Vorbereitung

Die Konfiguration der Admin-Berechtigungen erfolgt über die Konfigurationsdateien deines Servers. Navigiere dafür in deinem Gameserver Dashboard zu **Configs** und öffne die Game.ini Konfigurationsdatei. 



## Konfiguration

Unter dem Abschnitt[/Script/PathOfTitans.IGameSession] muss die Alderon Games ID (AGID) des Admins hinterlegt werden. Der Eintrag dafür lautet `Server-Admins=` gefolgt mit der AGID. Wenn du mehrere Admins hinzufügen möchtest, dann musst du diese jeweils in einer neuen Zeile anlegen. Nehmen wir an, dass du insgesamt drei Spieler Adminberechtigungen zuweisen möchtest, dann würde die Konfiguration dafür wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/BsH3o6tsi2ERsNS/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Admin Eintrag
ServerAdmins=XXX-XXX-XXX # 2. Admin Eintrag
ServerAdmins=XXX-XXX-XXX # 3. Admin Eintrag
```

Klicke auf Speichern und Starte den Server daraufhin neu. Die Adminberechtigungen sind nun erfolgreich gesetzt. Sobald du über Adminrechte verfügst, hast du die Möglichkeit, andere Spieler im Spiel durch Chat-Befehle entweder zu Admins zu ernennen oder deren Adminstatus zu entziehen. Diese Funktionen stehen dir zur Verfügung, solange dein Server aktiv ist. Weitere Informationen zu den Befehlen findest du in der offiziellen [GitHub Wik](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools)i.
