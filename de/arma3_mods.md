---
id: arma3_mods
title: Arma 3: Mods auf dem eigenen Server installieren
description: Informationen, wie du Mods auf deinem Arma 3-Server von ZAP-Hosting installierst - ZAP-Hosting.com Dokumentationen
sidebar_label: Mods Installieren
---

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der **FTP-Zugang** eingerichtet werden: [FTP-Zugang einrichten](gameserver_ftpaccess.md)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/iJFyAmS5BDbEdZ4/preview)


## Vorbereitung

Um Mods auf dem Server zu installieren, müssen wir diese zunächst im Steam-Workshop abonnieren:

![](https://screensaver01.zap-hosting.com/index.php/s/NdRer4RinYDNdn9/preview)

Nun starten wir den ArmA 3 Launcher, damit die Mods im Spielordner angelegt werden, nachdem die Mods im Launcher verarbeitet wurden, können wir den Launcher wieder schließen.

Nun öffnen wir unseren ArmA 3 Ordner, hier ist nun ein "!Workshop" Ordner, diesen öffnen wir, dort sind unsere Mods drin:

![](https://screensaver01.zap-hosting.com/index.php/s/mpS7YNd6iYR7PiE/preview)

## Mods hochladen


Um mit WinSCP Mods zu installieren, können diese über drag&drop in den arma3 Ordner hochgeladen werden

![](https://screensaver01.zap-hosting.com/index.php/s/orW3fdYmkbCBEmE/preview)

Nachdem diese hochgeladen wurde, müssen wir anschließend den Modordner öffnen und alle Daten unter `keys` in den gleichnamigen Ordner auf deinem Server verschieben.
In diesem Beispiel verschieben wir den Inkalt von **/g256019/arma3/CBA_A3/keys** nach **/g256019/arma3/keys**.

## Mods Aktivieren

Nun öffnen wir die Einstellungen unseres Gameservers, unter der "Mods" Einstellung tragen wir unsere Mods wie folgt ein:

```
@mod1;@mod2;@mod3
```

In unserem Fall sieht das Ganze dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/7wB3xEgZSY3qT2F/preview)

Gehe sicher, dass bei mehreren Mods ein ; zwischen den Einträgen gesetzt wird:

![](https://screensaver01.zap-hosting.com/index.php/s/BW93XoBy5KPn2rK/preview)


Fertig! Nach einem Serverneustart sind die Mods nun aktiv.
