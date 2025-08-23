---
id: vserver-linux-conan
title: "vServer: Conan Exiles Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Conan Exiles Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS und möchtest den Conan Exiles Dedicated Server Dienst darauf installieren? Dann bist du hier genau richtig. In diesem Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. In den Beispielen verwenden wir Ubuntu, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

:::info Wine-Kompatibilitätsschicht
Conan Exiles bietet derzeit kein natives Linux-basiertes Server-Build an. Das bedeutet, dass ein zusätzlicher Vorbereitungsschritt notwendig ist, um das Windows-Server-Build unter Linux auszuführen.

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
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Sobald der Download erfolgreich war, wird eine Erfolgsmeldung angezeigt, die dies bestätigt.

## Konfiguration

In diesem Stadium hast du die Einrichtung deines Conan Exiles-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei im Verzeichnis deines Servers vornehmen.

Du kannst alle Konfigurationsparameter anpassen, indem Sie auf die Konfigurationsdatei **WindowsServerEngine.ini** zugreifen und diese im folgenden Verzeichnis bearbeiten.
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Du kannst Konfigurationsoptionen hinzufügen, indem du bestimmte Parameter hinzufügen. Um beispielsweise einen Servernamen, ein Passwort und ein Admin-Passwort hinzuzufügen, würdest du Folgendes zur Datei hinzufügen.
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

Wir empfehlen, im [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) nach einer umfassenden Liste der verfügbaren Optionen zu suchen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe  zum Hauptverzeichnis des Spiels und führe die ausführbare Datei **ConanSandboxServer.exe** mit dem folgenden Befehl aus. Achte darauf, die Befehle **xvfb-run** und **wine64** hinzuzufügen, um sie über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

In deiner Eingabeaufforderung sollten nun viele Protokolle angezeigt werden, die darauf hinweisen, dass der Server gestartet wird. Du kannst eine direkte Verbindung herstellen, indem du in der Serverliste nach dem Server suchen oder eine direkte Verbindung über: `[your_ip_address]:7777` herstellen.

## Abschluss

Glückwunsch, du hast den Conan Exiles-Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere [Linux Dienst einrichten](vserver-linux-create-gameservice.md) Anleitung, in der du deinen neuen dedizierten Gameserver als Dienst einrichtest. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!

<InlineVoucher />
