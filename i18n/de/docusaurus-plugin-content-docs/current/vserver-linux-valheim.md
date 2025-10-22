---
id: vserver-linux-valheim
title: "VPS: Valheim Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Valheim Dedicated Server auf deinem Linux VPS für nahtloses Gameplay und einfache Serververwaltung einrichtest → Jetzt mehr erfahren"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den Valheim Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` Benutzer an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Valheim Server direkt über SteamCMD als `steam` Benutzer.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Sei geduldig, der Download kann bei größeren Spielen etwas dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Valheim Servers abgeschlossen. Weitere Einstellungen kannst du direkt in der Startdatei vornehmen.

Wechsle in dein Root-Verzeichnis und öffne die `.sh` Datei. Hier kannst du Parameter anpassen.
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
Falls du dich nicht verbinden kannst und `PlayFab`-Fehler in der Konsole erscheinen, musst du möglicherweise den Crossplay-Support deaktivieren, da es aktuell ein Problem mit der Linux-Version gibt. Öffne dazu `nano /home/steam/Valheim-Server/start_server.sh` und entferne die `-crossplay` Option.

Wenn du Crossplay brauchst, ist eine Alternative, die Windows-Version zu installieren und **Wine** als Kompatibilitätsschicht zu nutzen. Nutze dafür unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung. Danach kannst du den Valheim Windows Server via SteamCMD so installieren:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Starte die Windows-Version dann mit folgendem Befehl über Wine: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Fazit

Glückwunsch, du hast deinen Valheim Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir, unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung anzuschauen. Damit richtest du deinen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />