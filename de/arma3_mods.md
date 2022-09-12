---
id: arma3_mods
title: Arma 3: Mods auf dem eigenen Server installieren
description: Informationen, wie du Mods auf deinem Arma 3-Server von ZAP-Hosting installierst - ZAP-Hosting.com Dokumentationen
sidebar_label: Mods Installieren
---

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der **FTP-Zugang** eingerichtet werden: [FTP-Zugang einrichten](gameserver_ftpaccess.md)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/26007280/189707042-3020b6e3-8969-4b62-aede-83f83ed653e8.png)


## Vorbereitung

Um Mods auf dem Server zu installieren, müssen wir diese zunächst im Steam-Workshop abonnieren:

![image](https://user-images.githubusercontent.com/26007280/189707058-a81f753f-c87e-4671-8f7e-ebfa16959313.png)

Nun starten wir den ArmA 3 Launcher, damit die Mods im Spielordner angelegt werden, nachdem die Mods im Launcher verarbeitet wurden, können wir den Launcher wieder schließen.

Nun öffnen wir unseren ArmA 3 Ordner, hier ist nun ein "!Workshop" Ordner, diesen öffnen wir, dort sind unsere Mods drin:

![image](https://user-images.githubusercontent.com/26007280/189707079-91a5b8c4-bb73-4349-802c-1fc1f0d63997.png)

## Mods hochladen


Um mit WinSCP Mods zu installieren, können diese über drag&drop in den arma3 Ordner hochgeladen werden

![image](https://user-images.githubusercontent.com/26007280/189707108-4b5f9e06-d1d4-407c-8043-9d279d6e341b.png)

Nachdem diese hochgeladen wurde, müssen wir anschließend den Modordner öffnen und alle Daten unter `keys` in den gleichnamigen Ordner auf deinem Server verschieben.
In diesem Beispiel verschieben wir den Inkalt von **/g256019/arma3/CBA_A3/keys** nach **/g256019/arma3/keys**.

## Mods Aktivieren

Nun öffnen wir die Einstellungen unseres Gameservers, unter der "Mods" Einstellung tragen wir unsere Mods wie folgt ein:

```
@mod1;@mod2;@mod3
```

In unserem Fall sieht das Ganze dann so aus:

![image](https://user-images.githubusercontent.com/26007280/189707132-39f4defc-79fd-468c-be2c-b05c18acfcf4.png)

Gehe sicher, dass bei mehreren Mods ein ; zwischen den Einträgen gesetzt wird:

![image](https://user-images.githubusercontent.com/26007280/189707159-5288b71f-0dd7-4e84-bbfb-2a385aa128e9.png)


Fertig! Nach einem Serverneustart sind die Mods nun aktiv.
