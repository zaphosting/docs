---
id: vserver-linux-satisfactory
title: "vServer: Satisfactory Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Satisfactory Dedicated Servers auf einem Linux vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux vServer und möchtest den Satisfactory Dedicated Server Dienst darauf installieren? Dann bist du hier genau richtig. In diesem Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem vServer installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem vServer. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Beginne damit, dich als Benutzer „Steam“ anzumelden und gehe in das Stammverzeichnis „home/steam“, um Ordnung zu schaffen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit dem folgenden Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei Spielen mit größeren Dateien kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

In diesem Stadium hast du die Einrichtung deines Satisfactory Servers abgeschlossen. Du kannst weitere Serverkonfigurationen in den Konfigurationsdateien vornehmen, die sich im Verzeichnis deines Servers befinden.

Du kannst alle Konfigurationsparameter anpassen, indem du auf die Konfigurationsdateien **Engine.ini** und **GameUserSettings.ini** zugreifst und sie bearbeitest, die du im Ordner Saved findest.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die Shell-Datei **FactoryServer.sh** aus.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

In der Eingabeaufforderung sollten nun Protokolle erscheinen, die zeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[deine_ip_address]:15777`.

## Abschluss

Herzlichen Glückwunsch, du hast den Satisfactory Server erfolgreich auf deinem vServer installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Gameserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!

<InlineVoucher />
