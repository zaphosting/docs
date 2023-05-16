---
id: minecraft_addop
title: Minecraft Server OP-Rechte vergeben
description: Informationen, wie du OP-Rechte für deinen Minecraft-Server von ZAP-Hosting.com vergeben und bearbeiten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: OP-Rechte
---

Hier gelangst du zu unseren Minecraft Servern: [Minecraft Server mieten](https://zap-hosting.com/de/minecraft-server-mieten/)

## OP-Rechte vergeben

Damit man sich selbst oder auch anderen Spielern OP-Recht zuteilen kann, muss man zunächst die Konsole aufrufen, insofern bisher kein anderer Spieler ausreichende OP-Rechte hat, damit die Vergabe im Spiel selbst möglich ist.


Um die Konsole zu öffnen, muss zunächst der jeweilige Server über das **Dashboard** aufgerufen werden. Im Interface des Servers angekommen ist links in der Liste unter dem Reiter "INFORMATIONEN" der Eintrag "Live Konsole" zu finden, worüber die Konsole geöffnet werden kann.

![](https://user-images.githubusercontent.com/61839701/170325753-9512317c-616e-4258-b96a-17711b136da7.png)

Nun sollte ein dunkles Fenster zu sehen sein, was die Konsole des Servers darstellt. Darunter ist ein Eingabefeld zu erkennen, wo jegliche Befehle an die Konsole übergeben werden, sodass diese dort ausgeführt werden. Um nun die OP-Rechte zu setzten, muss in das Eingabefeld der Befehl "op [Spieler]" (ohne "/") eingetragen werden und anschließend auf den grünen Button "Befehl senden" geklickt werden, damit der Befehl an die Konsole gesendet wird.

![](https://user-images.githubusercontent.com/61839701/170325860-ea9db416-ea37-4280-b7f7-5013cdbfbb0d.png)

Nach wenigen Sekunden sollte der gesendete Befehl in der Konsole erscheinen, worauf die Meldung "Made [Spieler] a server operator" kommt, welche den Vorgang als erfolgreich markiert. Nun hat der jeweilige Spieler alle OP-Rechte und kann beispielsweise den Spielmodus wechseln.

> Das Verteilen von OP-Rechten ist nun auch im Spiel selbst möglich, so dass du das Rechte-Level wie im nächsten Schritt erklärt ggf. anpassen solltest, insofern dies von dir gewünscht ist.

## Rechte-Level

Die OP-Rechte sind in vier Level unterteilt, wobei standardmäßig immer Level 4 gesetzt wird. Die jeweiligen Level beinhalten verschiedene Rechte, sodass die Rechte je nach Spieler grob eingeteilt werden können. Die jeweiligen Rechte eines Levels sehen wie folgt aus:

| Level | Bezeichnung | Rechte  |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Veränderungen innerhalb des geschützten Spawnbereichs können vorgenommen werden. |
| 2 | Gamemaster | Befehlsblöcke setzen und editieren, sowie das Ausführen diverse Cheat-Befehle (z.B.: /gamemode). |
| 3 | Admin  | Kicken und bannen von Spielern, sowie weitere Befehle, die der allgemeinen Verwaltung des Servers angehören. Zudem können weitere Operatoren ernannt werden. |
| 4 | Owner | Keine Einschränkungen mehr vorhanden. |

> Durch die Installation eines Rechte-Plugins wie LuckPerms auf deinem Bukkit/Spigot Server, können die Rechte viel spezieller und detailreicher festgelegt werden. Zudem können auch mehrere Gruppe erstellt werden, was die Verteilung von Rechten vereinfacht.

### Rechte-Level zuweisen

Um das Level eines Spielers anzupassen, muss dieser zuerst zum Operator ernannt werden, wie unter "OP-Rechte vergeben" erklärt wird. Damit das Level angepasst werden kann, muss die Datei "ops.json" mittels FTP-Verbindung bearbeitet werden.

Sobald die Verbindung zum Server mittels FTP hergestellt worden ist, muss in das jeweilige Verzeichnis des Servers navigiert werden. Nun muss in unserem Fall bei FileZilla ein Rechtsklick auf die Datei gemacht werden und in dem erschienenen Menü auf "Ansehen/Bearbeiten" geklickt werden.

![](https://user-images.githubusercontent.com/61839701/170325921-6de8c47c-1755-48a1-8784-bda4e1d1d685.png)

Nun muss bei dem gewünschten Spieler der Wert von "level" auf das gewünschte Level gesetzt werden, worauf die Datei mit **STRG+S** gespeichert werden muss.

![](https://user-images.githubusercontent.com/61839701/170325982-8b7c784e-07cd-4483-a683-4132e9316b64.png)

Damit die Änderungen übernommen werden, ist ein Neustart des Servers nötig, was mit dem Halten des roten Stop-Buttons im Interface des Servers möglich ist.
