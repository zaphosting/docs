---
id: minecraft-addop
title: "Minecraft: OP-Rechte auf dem Server vergeben"
description: "Entdecke, wie du Spielern OP-Rechte zuweist und Server-Berechtigungen effektiv verwaltest für mehr Kontrolle im Spiel → Jetzt mehr erfahren"
sidebar_label: OP-Permissions
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## OP-Rechte vergeben

Um dir selbst oder anderen Spielern OP-Rechte zu vergeben, musst du zuerst die Konsole öffnen, falls noch kein anderer Spieler ausreichende OP-Rechte hat, damit die Vergabe nicht direkt im Spiel möglich ist.

Um die Konsole zu öffnen, muss der jeweilige Server zuerst über das **Dashboard** aufgerufen werden. Im Interface des Servers findest du links in der Liste unter dem Reiter „INFORMATION“ den Eintrag „Live-Konsole“.

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Jetzt solltest du ein dunkles Fenster sehen, das die Konsole des Servers darstellt. Darunter findest du ein Eingabefeld, in das beliebige Befehle an die Konsole übergeben werden können. Um die OP-Rechte zu setzen, muss der Befehl „op player“ (ohne „/“) in das Eingabefeld eingegeben werden und anschließend auf den grünen Button „Befehl senden“ geklickt werden, um den Befehl an die Konsole zu schicken.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Nach ein paar Sekunden sollte der gesendete Befehl in der Konsole erscheinen, gefolgt von der Meldung „Made player a server operator“, was die erfolgreiche Aktion bestätigt. Nun hat der jeweilige Spieler alle OP-Rechte und kann zum Beispiel den Spielmodus ändern.

:::info
Die Vergabe von OP-Rechten ist mittlerweile auch direkt im Spiel möglich. Falls du das nutzen möchtest, solltest du das Rechte-Level wie im nächsten Schritt erklärt anpassen.
:::

## Rechte-Level

Die OP-Rechte sind in vier Level unterteilt, wobei Level 4 standardmäßig gesetzt ist. Die einzelnen Level enthalten unterschiedliche Rechte, sodass die Rechte grob nach Spielern aufgeteilt werden können. Die jeweiligen Rechte der Level sind:

| Level | Beschreibung | Berechtigungen |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Änderungen im geschützten Spawn-Bereich sind erlaubt. |
| 2 | Gamemaster | Setzen und Bearbeiten von Command-Blöcken sowie Ausführen verschiedener Cheat-Befehle (z.B.: /gamemode). |
| 3 | Admin | Spieler kicken und bannen sowie weitere Befehle, die zur allgemeinen Serververwaltung gehören. Weitere Operatoren können ernannt werden. |
| 4 | Owner | Keine Einschränkungen mehr. |

:::info
Mit einem Permissions-Plugin wie LuckPerms auf deinem Bukkit/Spigot-Server kannst du die Berechtigungen viel spezifischer und detaillierter einstellen. Es ist auch möglich, mehrere Gruppen zu erstellen, was die Rechtevergabe vereinfacht.
:::

## Rechte-Level vergeben

Um das Level eines Spielers anzupassen, muss er zuerst als Operator ernannt werden, wie unter „OP-Rechte vergeben“ erklärt. Um das Level anzupassen, muss die Datei „ops.json“ per FTP-Verbindung bearbeitet werden.

Sobald die Verbindung zum Server per FTP hergestellt ist, navigierst du in das entsprechende Verzeichnis des Servers. In unserem Fall klickst du bei FileZilla mit der rechten Maustaste auf die Datei und wählst im erscheinenden Menü „Ansehen/Bearbeiten“ aus.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Jetzt muss der Wert von „level“ für den gewünschten Spieler auf das gewünschte Level gesetzt werden, danach speicherst du die Datei mit **STRG+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Damit die Änderungen wirksam werden, muss der Server neu gestartet werden. Das geht, indem du im Server-Interface den roten Stop-Button gedrückt hältst.

<InlineVoucher />