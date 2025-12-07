---
id: minecraft-addop
title: "Minecraft: OP-Rechte auf dem Server vergeben"
description: "Entdecke, wie du Spielern OP-Rechte zuweist und Server-Berechtigungen effektiv verwaltest für mehr Kontrolle im Game → Jetzt mehr erfahren"
sidebar_label: OP-Permissions
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## OP-Rechte vergeben

Um dir selbst oder anderen Spielern OP-Rechte zu vergeben, musst du zuerst die Konsole öffnen, falls noch kein anderer Spieler ausreichende OP-Rechte hat, damit die Vergabe nicht direkt im Spiel möglich ist.

Um die Konsole zu öffnen, musst du zuerst den jeweiligen Server über das **Dashboard** aufrufen. In der Server-Oberfläche findest du links in der Liste unter dem Reiter „INFORMATION“ den Eintrag „Live-Konsole“.

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Jetzt solltest du ein dunkles Fenster sehen, das die Server-Konsole darstellt. Darunter findest du ein Eingabefeld, in das du beliebige Befehle an die Konsole schicken kannst. Um OP-Rechte zu vergeben, gibst du den Befehl `op player` (ohne „/“) in das Eingabefeld ein und klickst dann auf den grünen Button „Befehl senden“, um den Befehl an die Konsole zu schicken.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Nach ein paar Sekunden sollte der gesendete Befehl in der Konsole auftauchen, gefolgt von der Meldung „Made player a server operator“, was bedeutet, dass die Aktion erfolgreich war. Der Spieler hat jetzt alle OP-Rechte und kann z.B. den Spielmodus ändern.

:::info
Die Vergabe von OP-Rechten ist mittlerweile auch direkt im Spiel möglich. Wenn du das machen möchtest, solltest du das Rechte-Level wie im nächsten Schritt erklärt anpassen.
:::

## Rechte-Level

Die OP-Rechte sind in vier Level unterteilt, wobei Level 4 standardmäßig gesetzt ist. Die einzelnen Level enthalten unterschiedliche Rechte, sodass du die Rechte grob nach Spielern aufteilen kannst. Die jeweiligen Rechte der Level sind:

| Level | Beschreibung | Berechtigungen |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Änderungen im geschützten Spawn-Bereich sind erlaubt. |
| 2 | Gamemaster | Setzen und Bearbeiten von Command-Blöcken sowie Ausführen verschiedener Cheat-Befehle (z.B.: /gamemode). |
| 3 | Admin | Spieler kicken und bannen sowie weitere Befehle für die allgemeine Serververwaltung. Außerdem können weitere Operatoren ernannt werden. |
| 4 | Owner | Keine Einschränkungen mehr. |

:::info
Mit einem Permissions-Plugin wie LuckPerms auf deinem Bukkit/Spigot-Server kannst du die Rechte viel spezifischer und detaillierter einstellen. Es ist auch möglich, mehrere Gruppen zu erstellen, was die Rechtevergabe vereinfacht.
:::

## Rechte-Level vergeben

Um das Level eines Spielers anzupassen, muss er zuerst als Operator ernannt werden, wie unter „OP-Rechte vergeben“ erklärt. Um das Level anzupassen, muss die Datei „ops.json“ per FTP-Verbindung bearbeitet werden.

Sobald die FTP-Verbindung zum Server steht, navigierst du zum entsprechenden Server-Verzeichnis. In FileZilla klickst du dann mit der rechten Maustaste auf die Datei und wählst im erscheinenden Menü „Ansehen/Bearbeiten“ aus.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Jetzt musst du den Wert bei „level“ für den gewünschten Spieler auf das gewünschte Level setzen und die Datei mit **STRG+S** speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Damit die Änderungen wirksam werden, muss der Server neu gestartet werden. Das geht, indem du im Server-Interface den roten Stop-Button gedrückt hältst.

<InlineVoucher />