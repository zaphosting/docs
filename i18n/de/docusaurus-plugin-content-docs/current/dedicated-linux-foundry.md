---
id: dedicated-linux-foundry
title: "Dedicated Server: Foundry Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Foundry Dedicated Servers auf einem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux Dedicated Server und möchtest den Foundry Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem Dedicated Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe brauchst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

:::info Wine-Kompatibilitätsschicht
Foundry bietet derzeit kein natives Linux-basiertes Server-Build an. Das bedeutet, dass ein zusätzlicher Vorbereitungsschritt erforderlich ist, um das Windows-Server-Build unter Linux auszuführen.

Du musst eine einmalige Installation der **Wine**-Kompatibilitätsschicht durchführen, wenn du diese zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere Kurzanleitung [Wine-Kompatibilitätsschicht einrichten](dedicated-linux-wine.md), um dies einzurichten, bevor du fortfährst.
:::

## Installation

Beginne damit, dich als Benutzer `steam` anzumelden und gehe in das Root-Verzeichnis `home/steam`, um für Ordnung zu sorgen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit folgendem Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten. Mit dem Parameter `+@sSteamCmdForcePlatformType windows` stellst du zwangsweise sicher, dass die Windows-Binärdateien installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Wenn der Download erfolgreich war, wird eine Erfolgsmeldung angezeigt, die dies bestätigt.

## Konfiguration

In diesem Stadium hast du die Einrichtung deines Foundry-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei vornehmen, die sich im Verzeichnis deines Servers befindet.

Du kannst alle Konfigurationsparameter anpassen, indem du die Konfigurationsdatei **app.cfg** im Hauptverzeichnis des Servers aufrufst und bearbeitest.
```
nano /home/steam/Foundry-Server/app.cfg
```

In unserer [Server-Konfiguration](foundry-configuration.md) Anleitung findest du alle verfügbaren Optionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die ausführbare Datei **FoundryDedicatedServerLauncher.exe** mit dem unten stehenden Befehl aus. Vergewissere dich, dass du die Befehle **xvfb-run** und **wine** hinzufügst, um die Datei über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

In der Eingabeaufforderung sollten nun Protokolle erscheinen, die zeigen, dass der Start erfolgreich war. Wenn alles wie erwartet abläuft, wird dein Server in der Serverliste sichtbar sein. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[deine_ip_address]:3724`.

## Abschluss

Herzlichen Glückwunsch, du hast den Foundry-Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](dedicated-linux-create-gameservice.md), in der du deinen neuen dedizierten Gameserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!