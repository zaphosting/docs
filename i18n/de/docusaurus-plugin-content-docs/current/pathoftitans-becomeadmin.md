---
id: pathoftitans-becomeadmin
title: Admin werden
description: "Entdecke, wie du Administratorrechte zuweist und verwaltest, um volle Kontrolle über deinen Gameserver zu haben → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel direkt bietet, nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Vorbereitung

Die Konfiguration der Admin-Rechte erfolgt über die Konfigurationsdateien deines Servers. Navigiere dazu in deinem Gameserver-Dashboard zu **Configs** und öffne die Game.ini-Konfigurationsdatei.

## Konfiguration

Unter dem Abschnitt [/Script/PathOfTitans.IGameSession] muss die Alderon Games ID (AGID) des Admins eingetragen werden. Der Eintrag dafür lautet `ServerAdmins=` gefolgt von der AGID. Wenn du mehrere Admins hinzufügen möchtest, musst du jeden in einer neuen Zeile eintragen. Angenommen, du möchtest insgesamt drei Spielern Admin-Rechte geben, sieht die Konfiguration so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Admin-Eintrag
ServerAdmins=XXX-XXX-XXX # 2. Admin-Eintrag
ServerAdmins=XXX-XXX-XXX # 3. Admin-Eintrag
```

Klicke auf Speichern und starte dann den Server neu. Die Admin-Rechte sind jetzt erfolgreich gesetzt. Sobald du Admin-Rechte hast, kannst du über Chat-Befehle weitere Spieler zu Admins ernennen oder deren Admin-Status entziehen. Diese Funktionen stehen dir zur Verfügung, solange dein Server aktiv ist. Mehr Infos zu den Befehlen findest du im offiziellen [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).

## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂 

<InlineVoucher />