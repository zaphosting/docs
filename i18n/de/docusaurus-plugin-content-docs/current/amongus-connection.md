---
id: amongus-connection
title: "Among Us: Verbindung mit dem Server herstellen"
description: Informationen, wie du dich mit deinem Impostor - Among Us-Server verbinden kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Verbindung zum Server
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vorbereitung - Der Download

Damit du deinem Server beitreten kannst, benötigen wir eine Datei, welche die Verbindung ermöglicht.
Öffne zuerst [Impostor](https://impostor.github.io/Impostor/) dort müssen wir unsere Informationen eintragen.

Zur Erstellung der Datei werden Informationen, wie die IP, Port und ein Name benötigt.
![image](https://screensaver01.zap-hosting.com/index.php/s/TZ9kGQ5siZFdK7m/preview)

Trage hier die Daten aus deinem ZAP-Hosting Interface ein, diese sehen beispielsweise so aus:

![image](https://screensaver01.zap-hosting.com/index.php/s/bjsQPAAgcxn69i4/preview)

Wobei 31.214.245.215 deine IP ist und 2000 der Port.

Den Servernamen kannst du frei wählen, wenn alle Daten eingetragen wurden, klicke auf "Download Server File"
Es wird nun eine Datei mit dem Namen "regioninfo.json" heruntergeladen.

Drücke als nächstes `Win` + `R` und gib dort 

```
%APPDATA%\..\LocalLow\Innersloth\Among Us
```

ein und bestätige mit Enter, es öffnet sich nun ein Verzeichnis. Schiebe dort die regioninfo.json hinein und überschreibe die bestehende.

![image](https://screensaver01.zap-hosting.com/index.php/s/WNYGtDiTir2BPpp/preview)

## Server im Spiel "erstellen"

Starte nun Among Us auf deinem PC.
Klicke im Hauptmenü auf "online" und klicke dann auf "Create Game".

![image](https://screensaver01.zap-hosting.com/index.php/s/ozYwBXs7ASLnwD4/preview)

Hier kannst du nun die gewünschten Einstellungen für deinen Server vornehmen:

![image](https://screensaver01.zap-hosting.com/index.php/s/xFndGg5wpQMfLTM/preview)

Soweit du fertig bist, mit den Einstellungen, kannst du auf "confirm" klicken.
Du bist jetzt mit deinem Server verbunden!

In der Lobby kannst du nun einstellen, ob es ein öffentlicher oder ein privater Server sein soll. Zum Umstellen kannst du dafür auf das "Private" bzw "Public" Icon klicken:

Steht der Server auf "Public" können andere Spieler auf dieselbe Art und Weise sich mit dem Server verbinden. Diese müssen dann im Hauptmenü im Spiel nicht auf "Create Game", sondern auf "Find Game" klicken.

Hier ist es wichtig, dass der Chat auf "others" steht und dass die Filter genau den Einstellungen vom Server entsprechen. Ansonsten wird der Server nicht angezeigt.

Handelt es sich um einen privaten Server, so muss man im Hauptmenü auf "Enter Code" klicken. Hier gibt man den Code an, welchen der Ersteller vom Server in der Lobby einsehen kann.