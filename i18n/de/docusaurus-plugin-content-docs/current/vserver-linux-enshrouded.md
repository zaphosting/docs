---
id: vserver-linux-enshrouded
title: "vServer: Enshrouded Dedicated Server Linux Setup"
description: "Entdecke, wie du den Enshrouded Dedicated Server auf deinem Linux VPS für nahtloses Gameserver Hosting und Management einrichtest → Jetzt mehr erfahren"
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den Enshrouded Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine Kompatibilitätsschicht
Enshrouded bietet aktuell keinen nativen Linux-Server-Build an, daher ist ein zusätzlicher Vorbereitungsschritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich zuerst als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um die Windows-Binaries direkt im Verzeichnis des `steam` Users zu installieren. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Version erzwungen wird.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Enshrouded Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der Datei **enshrouded_server.json** im Hauptverzeichnis anpassen.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Sieh dir unsere Enshrouded [Server Konfiguration](enshrouded-configuration.md) Anleitung an, um alle verfügbaren Serveroptionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und führe die ausführbare Datei **enshrouded_server.exe** mit folgendem Befehl aus. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine Kompatibilitätsschicht zu starten.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Im Terminal solltest du jetzt viele Logs sehen. Wenn die Meldung `[Session] 'HostOnline' (up)!` erscheint, war der Start erfolgreich. Du kannst dich direkt verbinden, indem du im Tab **Find Games** die Serverdetails eingibst: `[deine_ip_adresse]:15636`.

## Fazit

Glückwunsch, du hast den Enshrouded Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt dir viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />