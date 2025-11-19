---
id: dedicated-linux-valheim
title: "Dedicated Server: Valheim Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Valheim Dedicated Server auf Linux einrichtest, um dein Game effizient zu hosten und die Serverperformance zu optimieren → Jetzt mehr erfahren"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den Valheim Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zur [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau in unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD komplett eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Valheim Server direkt über SteamCMD als `steam` User.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Games kann das etwas dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Valheim Servers abgeschlossen. Weitere Einstellungen kannst du direkt in der Startdatei vornehmen.

Wechsle in dein Home-Verzeichnis und öffne die `.sh` Datei zum Bearbeiten der Parameter.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis des Spiels wechselst und die **start_server.sh** ausführst.
```
/home/steam/Valheim-Server/start_server.sh
```

Im Terminal solltest du nun Logs sehen, die den erfolgreichen Start anzeigen. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:2456` eingibst.

:::info
Falls du dich nicht verbinden kannst und `PlayFab`-Fehler in der Konsole erscheinen, musst du eventuell den Crossplay-Support deaktivieren, da es aktuell ein Problem mit der Linux-Version gibt. Öffne dazu `nano /home/steam/Valheim-Server/start_server.sh` und entferne die `-crossplay` Option.

Wenn du Crossplay brauchst, kannst du stattdessen die Windows-Version installieren und **Wine** als Kompatibilitätsschicht nutzen. Unsere schnelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) Anleitung hilft dir dabei. Danach installierst du den Valheim Windows Server via SteamCMD so:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Zum Starten der Windows-Version über Wine nutzt du diesen Befehl: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Fazit

Glückwunsch, du hast deinen Valheim Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Boot, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!