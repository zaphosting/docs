---
id: vserver-linux-rust
title: "vServer: Rust Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Rust Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root Server und möchtest den Rust Dedicated Server Dienst darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD einrichten](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Beginne damit, dich als Benutzer `Steam` anzumelden und gehe in das Stammverzeichnis `home/steam`, um Ordnung zu schaffen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit dem folgenden Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `Steam` Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei Spielen mit größeren Dateien kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines Rust Servers abgeschlossen. Du kannst weitere Serverkonfigurationen in den Konfigurationsdateien vornehmen, die sich im Verzeichnis deines Servers befinden.

Wechsel in dein Stammverzeichnis und erstelle eine `.sh`-Datei. Dies ist die Bash-Datei, die zum Starten des Servers und zum Anpassen verschiedener Konfigurationsparameter verwendet wird.
```
nano /home/steam/Rust-Server/start_server.sh
```

Füge nun den folgenden Inhalt in die Bash-Datei ein. Im folgenden Befehl wurden einige der grundlegenden und am häufigsten verwendeten Parameter hinzugefügt. Wenn du weitere hinzufügen oder mehr über die einzelnen Parameter erfahren möchtest, empfehlen wir dir, das [offizielle Rust-Wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) zu durchsuchen, das alle verfügbaren Konfigurationsoptionen enthält.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "deine_server_name" +server.port 28015 +server.identity "mein_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Speichere die Datei mit `STRG+X`, gefolgt von `Y` und `Enter`. Damit die Bash-Datei ohne sudo Berechtigungen ausgeführt werden kann, führe abschließend den folgenden Befehl aus, der der Datei die Ausführungsberechtigung hinzufügt.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die Shell-Datei **start_server.sh** aus.
```
/home/steam/Rust-Server/start_server.sh
```

In der Eingabeaufforderung sollten nun Logs erscheinen, die zeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[deine_ip_address]:28015`.

## Abschluss

Herzlichen Glückwunsch, du hast den Rust Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Gameserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!