---
id: vserver-linux-vrising
title: "vServer: V-Rising Dedicated Server Linux Setup"
description: "Entdecke, wie du den V-Rising Dedicated Server effizient auf deinem Linux VPS installierst und betreibst → Jetzt mehr erfahren"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den V-Rising Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du es erstmal einrichten. Folge dazu unserer [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
V-Rising bietet aktuell keinen nativen Linux-Server an, daher ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version unter Linux zum Laufen zu bringen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um die Windows-Version des Servers direkt im Verzeichnis `/home/steam/V-Rising-Server` zu installieren. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Bitte hab Geduld, der Download kann je nach Größe des Spiels etwas dauern. Sobald alles fertig ist, erscheint eine Erfolgsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines V-Rising Servers abgeschlossen. Weitere Einstellungen kannst du vornehmen, indem du die Startdatei direkt bearbeitest.

Alle Konfigurationsparameter findest du in den Dateien **ServerGameSettings.json** und **ServerHostSettings.json** im Settings-Ordner. Diese kannst du mit einem Editor wie nano anpassen:
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Schau dir auch unsere V-Rising [Server Konfiguration](vrising-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und erstelle eine Kopie der Beispiel-Batchdatei.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Du kannst die Datei nach Belieben anpassen. Wenn du bereit bist, starte die neue **start_server.bat** Datei mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um die Windows-Version über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Im Terminal solltest du jetzt Logs sehen, die anzeigen, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:8211` eingibst.

## Fazit

Glückwunsch, du hast den V-Rising Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen hast oder Probleme auftreten, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />