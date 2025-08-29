---
id: vserver-linux-vrising
title: "vServer: V-Rising Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines V-Rising Dedicated Servers auf einem Linux vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux vServer und möchtest den V-Rising Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mit SteamCMD auf deinem Linux-Server installierst. In den Beispielen verwenden wir Ubuntu, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem vServer oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem vServer oder Root-Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

:::info Wine-Kompatibilitätsschicht
V-Rising bietet derzeit keinen nativen Linux-basierten Server-Build an. Das bedeutet, dass ein zusätzlicher Vorbereitungsschritt notwendig ist, um den Windows-Server-Build unter Linux auszuführen.

Du musst eine einmalige Installation der **Wine**-Kompatibilitätsschicht durchführen, wenn du diese zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere Kurzanleitung [Wine-Kompatibilitätsschicht einrichten](vserver-linux-wine.md), um dies einzurichten, bevor du fortfährst.
:::

## Installation

Beginne damit, dich als Benutzer `steam` anzumelden und gehe in das Root-Verzeichnis `home/steam`, um für Ordnung zu sorgen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit folgendem Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten. Mit dem Parameter `+@sSteamCmdForcePlatformType windows` stellst du zwangsweise sicher, dass die Windows-Binärdateien installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei Spielen mit größerem Umfang kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

In diesem Stadium hast du die Einrichtung deines V-Rising Servers abgeschlossen. Du kannst weitere Serverkonfigurationen vornehmen, indem du die Startdatei direkt bearbeitest.

Du kannst alle Konfigurationsparameter anpassen, indem du die Konfigurationsdateien **ServerGameSettings.json** und **ServerHostSettings.json** im Ordner Settings aufrufst und bearbeitest.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

In unserem [Server-Konfiguration](vrising-configuration.md) findest du alle verfügbaren Serveroptionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und erstelle dort eine Kopie der Beispiel-Batchdatei.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Du kannst die Datei auch bearbeiten. Wenn du fertig bist, führe die neue Datei **start_server.bat** mit dem unten stehenden Befehl aus. Vergewissere dich, dass du die Befehle **xvfb-run** und **wine** hinzufügst, um die Datei über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

In der Eingabeaufforderung sollten nun Protokolle erscheinen, die zeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[deine_ip_address]:8211`.

## Abschluss

Herzlichen Glückwunsch, du hast den V-Rising Server erfolgreich auf deinem vServer installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere [Linux Dienst einrichten](vserver-linux-create-gameservice.md) Anleitung, in der du deinen neuen dedizierten Gameserver als Dienst einrichtest. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!

<InlineVoucher />
