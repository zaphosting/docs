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
Du hast einen Linux Dedicated Server und möchtest darauf den Valheim Dedicated Server Service installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, nutze unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du es erstmal einrichten. Folge dazu unserer [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD komplett eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation starten mit folgendem Befehl, der SteamCMD nutzt, um direkt im `steam` User den Valheim Server zu installieren:
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Games kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Valheim Servers abgeschlossen. Weitere Einstellungen kannst du direkt in der Startdatei vornehmen.

Wechsle in dein Root-Verzeichnis und öffne die `.sh` Datei. Hier kannst du Parameter anpassen.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis des Spiels wechselst und die **start_server.sh** Shell-Datei ausführst.
```
/home/steam/Valheim-Server/start_server.sh
```

Im Terminal solltest du nun Logs sehen, die bestätigen, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:2456` eingibst.

:::info
Falls du dich nicht verbinden kannst und `PlayFab`-Fehler in der Konsole erscheinen, musst du eventuell den Crossplay-Support deaktivieren, da es aktuell ein Problem mit der Linux-Version gibt. Öffne dazu `nano /home/steam/Valheim-Server/start_server.sh` und entferne die `-crossplay` Option.

Wenn du Crossplay brauchst, ist eine Alternative, die Windows-Version zu installieren und **Wine** als Kompatibilitätsschicht zu nutzen. Nutze dafür unsere schnelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) Anleitung. Danach kannst du den Valheim Windows Server via SteamCMD so installieren:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Starte die Windows-Version dann mit diesem Befehl über Wine: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Fazit

Glückwunsch, du hast deinen Valheim Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir, unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung anzuschauen. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Wenn du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />