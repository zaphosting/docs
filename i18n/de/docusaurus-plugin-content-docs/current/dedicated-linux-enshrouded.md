---
id: dedicated-linux-enshrouded
title: "Dedicated Server: Enshrouded Dedicated Server Linux Setup"
description: "Entdecke, wie du den Enshrouded Dedicated Server auf Linux installierst und betreibst für nahtloses Gameserver-Hosting und Management → Jetzt mehr erfahren"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den Enshrouded Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zum [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau dir unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung an.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du eine Erstkonfiguration durchführen. Nutze dazu unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine Kompatibilitätsschicht
Enshrouded bietet aktuell keinen nativen Linux-Server-Build an, daher ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](dedicated-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um die Windows-Binaries direkt im Verzeichnis `/home/steam/Enshrouded-Server` zu installieren. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Version installiert wird.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Sobald alles erfolgreich ist, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Enshrouded Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der Datei **enshrouded_server.json** im Hauptverzeichnis anpassen.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Schau dir unsere Enshrouded [Server Konfiguration](enshrouded-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und führe die ausführbare Datei **enshrouded_server.exe** mit folgendem Befehl aus. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine-Kompatibilitätsschicht zu starten.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Im Terminal solltest du jetzt viele Logs sehen. Wenn die Meldung `[Session] 'HostOnline' (up)!` erscheint, war der Start erfolgreich. Verbinde dich dann direkt über den Reiter **Find Games** mit den Serverdetails: `[deine_ip_adresse]:15636`.

## Fazit

Glückwunsch, du hast den Enshrouded Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!