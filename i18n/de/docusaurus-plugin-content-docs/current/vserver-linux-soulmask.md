---
id: vserver-linux-soulmask
title: "VPS: Soulmask Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Soulmask Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root Server und möchtest den Soulmask Dedicated Server Dienst darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface hier](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [SSH-Erstzugang](vserver-linux-ssh.md), wenn du dabei Hilfe brauchst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Beginne damit, dich als Benutzer „Steam“ anzumelden und gehe in das Stammverzeichnis „home/steam“, um Ordnung zu schaffen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit dem folgenden Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

An dieser Stelle hast du die Einrichtung deines Soulmask-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen in den Konfigurationsdateien vornehmen, die sich im Verzeichnis deines Servers befinden.

Du kannst alle Konfigurationsparameter anpassen, indem du die Konfiguration **Engine.ini** im Ordner Saved aufrufst und bearbeitest.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die ausführbare Datei **StartServer.sh** mit dem folgenden Befehl aus.
```
/home/steam/Soulmask-Server/StartServer.sh
```

In der Eingabeaufforderung sollten nun Protokolle erscheinen, die zeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[your_ip_address]:18888`.

## Abschluss

Herzlichen Glückwunsch, du hast den Soulmask-Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Setup Linux Service](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Spieleserver als Dienst einrichtest. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!