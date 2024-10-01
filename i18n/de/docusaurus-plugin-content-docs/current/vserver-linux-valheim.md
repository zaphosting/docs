---
id: vserver-linux-valheim
title: "VPS: Valheim Dedicated Server Linux Setup"
description: Informationen zum Einrichten eines Valheim Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root Server und möchtest den Valheim Dedicated Server Dienst darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mit SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Beginne damit, dich als Benutzer „Steam“ anzumelden und gehe in das Stammverzeichnis „home/steam“, um Ordnung zu schaffen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit dem folgenden Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei Spielen mit größerem Umfang kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

In diesem Stadium hast du die Einrichtung deines Valheim-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen vornehmen, indem du die Startdatei direkt bearbeitest.

Gehe in dein Stammverzeichnis und öffne die Datei `.sh`. Hier kannst du die Parameter bearbeiten.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Starten und Verbinden mit deinem Server

Nun ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die Shell-Datei **start_server.sh** aus.
```
/home/steam/Valheim-Server/start_server.sh
```

In der Eingabeaufforderung sollten nun Logs erscheinen, die anzeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach suchst: `[deine_ip_address]:2456`.

:::info
Wenn du keine Verbindung herstellen kannst und in der Konsole die Fehlermeldung `PlayFab` angezeigt wird, musst du möglicherweise die Crossplay-Unterstützung deaktivieren, um dieses Problem zu beheben, da es sich um ein aktuelles Problem der Linux-Version handelt. Führe dazu `nano /home/steam/Valheim-Server/start_server.sh` aus und entferne das `-crossplay`-Flag.

Wenn du Crossplay benötigst, kannst du stattdessen auch die Windows-Version installieren und **Wine** als Kompatibilitätsschicht verwenden. Bitte benutze unsere Kurzanleitung [Wine-Kompatibilitätsschicht einrichten](vserver-linux-wine.md), um dies einzurichten. Wenn du fertig bist, kannst du die Valheim-Windows-Serverversion über SteamCMD installieren:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Nach der Installation kannst du die Windows-Version stattdessen mit folgendem Befehl über Wine starten: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Abschluss

Herzlichen Glückwunsch, du hast den Valheim-Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Spieleserver als Dienst einrichtest. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!