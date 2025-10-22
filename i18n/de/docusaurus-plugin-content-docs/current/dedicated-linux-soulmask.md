---
id: dedicated-linux-soulmask
title: "Dedicated Server: Soulmask Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Soulmask Dedicated Server auf Linux für nahtloses Gameserver-Hosting und Management einrichtest → Jetzt mehr erfahren"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den Soulmask Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? So richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau dir unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung an.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du es erstmal einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam`-User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Soulmask Dedicated Server direkt über SteamCMD als `steam`-User.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Soulmask Servers abgeschlossen. Weitere Einstellungen kannst du über die Konfigurationsdateien im Serververzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der **Engine.ini** Datei anpassen, die du im Saved-Ordner findest.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und führe die ausführbare Datei **StartServer.sh** mit folgendem Befehl aus:
```
/home/steam/Soulmask-Server/StartServer.sh
```

Im Terminal solltest du nun Logs sehen, die bestätigen, dass der Server erfolgreich gestartet ist. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:18888` eingibst.

## Fazit

Glückwunsch, du hast den Soulmask Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt dir viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />