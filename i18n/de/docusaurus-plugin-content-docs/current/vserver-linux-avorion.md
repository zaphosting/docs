---
id: vserver-linux-avorion
title: "vServer: Avorion Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Avorion Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux Dedicated Server und möchtest den Avorion Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem Dedicated Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Beginne damit, dich als Benutzer `steam` anzumelden und gehe in das Root-Verzeichnis `home/steam`, um für Ordnung zu sorgen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit folgendem Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Wenn der Download erfolgreich war, wird eine Erfolgsmeldung angezeigt, die dies bestätigt.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines Avorion-Servers abgeschlossen. Du kannst deine Servereinstellungen direkt über die **startserver.sh**-Datei konfigurieren, die du zuvor kopiert hast. Öffne die Datei mit `nano /home/steam/Avorion-Server/startserver.sh` und konfiguriere die Parameter für deinen Server.

Du kannst weltenspezifische Parameter und Einstellungen bearbeiten, indem du die **server.ini**-Konfigurationsdatei bearbeitest, die sich in jedem Galaxie-Speicher befindet. Diese wird im Stammordner deines Benutzers (der `steam` lauten sollte) gespeichert und kann mit den folgenden Befehlen verwaltet werden.
```
# Aktuelle Speicherstände anzeigen
ls /home/steam/.avorion/galaxies

# Edit a Save Configuration
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Hauptverzeichnis des Spiels, wo wir empfehlen, eine Kopie der Beispiel-Batch-Datei zu erstellen.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Du kannst die Datei auch bearbeiten. Wenn du fertig bist, führe die neue **startserver.sh**-Batchdatei mit dem folgenden Befehl aus.
```
/home/steam/Avorion-Server/startserver.sh
```

In der Eingabeaufforderung sollten nun Protokolle angezeigt werden, die signalisieren, dass der Startvorgang erfolgreich war. Bitte beachte, dass der erste Startvorgang einige Zeit in Anspruch nehmen kann, da alles eingerichtet wird. Sobald alles fertig ist, sollte in der Konsole `Server startup complete.` angezeigt werden. Du kannst dich nun direkt mit deinem Server verbinden, indem du den Server-Browser im Spiel verwendest und deine Server-IP und deinen Port eingibst (Standard ist 27000).

## Abschluss

Herzlichen Glückwunsch, du hast den Foundry-Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Gameserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!