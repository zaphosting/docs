---
id: vserver-linux-rust
title: "VPS: Rust Dedicated Server Linux Setup"
description: "Lerne, wie du einen Rust Dedicated Server auf deinem Linux VPS mit SteamCMD für nahtloses Server mieten einrichtest → Jetzt mehr erfahren"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Linux VPS und möchtest darauf den Rust Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface hier](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit installierst du den Rust Dedicated Server direkt über SteamCMD in das Verzeichnis des `steam` Users.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Rust Servers abgeschlossen. Weitere Einstellungen kannst du über Konfigurationsdateien im Serververzeichnis vornehmen.

Wechsle in dein Root-Verzeichnis und erstelle eine `.sh` Datei. Diese Bash-Datei wird zum Starten des Servers und zum Anpassen verschiedener Parameter genutzt.
```
nano /home/steam/Rust-Server/start_server.sh
```

Füge nun folgenden Inhalt in die Bash-Datei ein. Im Befehl sind einige der wichtigsten und meistgenutzten Parameter enthalten. Wenn du mehr hinzufügen oder dich genauer informieren möchtest, empfehlen wir dir die [offizielle Rust Wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver), die alle verfügbaren Konfigurationsoptionen auflistet.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "dein_servername" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Speichere die Datei mit `CTRL+X`, dann `Y` und `Enter`. Um die Bash-Datei ausführbar zu machen, ohne sudo-Rechte zu benötigen, gib folgenden Befehl ein:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis des Spiels und führe die **start_server.sh** Shell-Datei aus.
```
/home/steam/Rust-Server/start_server.sh
```

Im Terminal solltest du nun Logs sehen, die anzeigen, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Wenn alles wie erwartet läuft, ist dein Server in der Serverliste sichtbar. Alternativ kannst du dich direkt verbinden, indem du nach `[deine_ip_adresse]:28015` suchst.

## Fazit

Glückwunsch, du hast deinen Rust Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir, unsere [Setup Linux Service](vserver-linux-create-gameservice.md) Anleitung anzuschauen. Dort erfährst du, wie du deinen neuen Dedicated Server als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />