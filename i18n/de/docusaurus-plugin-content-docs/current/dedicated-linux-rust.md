---
id: dedicated-linux-rust
title: "Dedicated Server: Rust Dedicated Server Linux Setup"
description: "Lerne, wie du einen Rust Dedicated Server auf Linux einrichtest, um dein Game effizient zu hosten und die Serverperformance zu optimieren → Jetzt mehr erfahren"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Linux Dedicated Server und möchtest darauf den Rust Dedicated Server Service installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zur [GS/TS3 Interface findest du hier](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung an.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation starten. Nutze dazu folgenden Befehl, der SteamCMD verwendet, um Rust direkt im Verzeichnis des `steam` Users zu installieren.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Sei geduldig, der Download kann je nach Größe des Spiels eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Rust Servers abgeschlossen. Weitere Einstellungen kannst du über Konfigurationsdateien im Serververzeichnis vornehmen.

Wechsle in dein Root-Verzeichnis und erstelle eine `.sh` Datei. Diese Bash-Datei wird zum Starten des Servers genutzt und enthält verschiedene Konfigurationsparameter.
```
nano /home/steam/Rust-Server/start_server.sh
```

Füge nun folgenden Inhalt in die Bash-Datei ein. Im Befehl sind einige der wichtigsten und meistgenutzten Parameter enthalten. Wenn du mehr hinzufügen oder dich genauer informieren möchtest, empfehlen wir dir die [offizielle Rust Wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver), die alle verfügbaren Konfigurationsoptionen auflistet.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "dein_servername" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Speichere die Datei mit `CTRL+X`, dann `Y` und `Enter`. Um die Bash-Datei ausführbar zu machen, führe folgenden Befehl aus, der die Ausführungsrechte setzt.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis des Spiels und führe die **start_server.sh** Shell-Datei aus.
```
/home/steam/Rust-Server/start_server.sh
```

Im Terminal solltest du nun Logs sehen, die anzeigen, dass der Server erfolgreich startet. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Wenn alles glatt läuft, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du nach `[deine_ip_adresse]:28015` suchst.

## Fazit

Glückwunsch, du hast deinen Rust Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!