---
id: dedicated-linux-palworld
title: "Dedicated Server: Palworld Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Palworld Dedicated Servers auf einem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux Dedicated Server und möchtest den Palworld Dedicated Server Dienst darauf installieren? Dann bist du hier genau richtig. In diesem Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem Dedicated Server. Benutze unsere Anleitung [SSH-Erstzugang](vserver-linux-ssh.md), wenn du dabei Hilfe brauchst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Beginne damit, dich als Benutzer „Steam“ anzumelden und gehe in das Stammverzeichnis „home/steam“, um Ordnung zu schaffen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit dem folgenden Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

An dieser Stelle hast du die Einrichtung deines Palworld Servers abgeschlossen. Die weitere Konfiguration des Servers kannst du über eine Konfigurationsdatei im Verzeichnis deines Servers vornehmen.

Du musst eine Kopie der Standardkonfigurationsdatei erstellen und sie dem gespeicherten Ordner hinzufügen, bevor du sie bearbeiten kannst.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Mit der erstellten Kopie kannst du die wichtigsten Konfigurationsparameter bearbeiten, indem du die neue Konfigurationsdatei **PalWorldSettings.ini** öffnest.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

In unserem [Palworld-Server-Konfigurationshandbuch](palworld-configuration.md) findest du alle verfügbaren Optionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die Shell-Datei **PalServer.sh** aus.
```
/home/steam/Palworld-Server/PalServer.sh
```

In der Eingabeaufforderung sollten nun Protokolle erscheinen, darunter auch ein Protokoll der Spielversion, das anzeigt, dass der Startvorgang erfolgreich war. Wenn alles wie erwartet abläuft, wird dein Server in der Serverliste sichtbar sein. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[your_ip_address]:8211`.

## Abschluss

Herzlichen Glückwunsch, du hast den Palworld-Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux-Dienst einrichten](dedicated-linux-create-gameservice.md), in der du deinen neuen dedizierten Spieleserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!