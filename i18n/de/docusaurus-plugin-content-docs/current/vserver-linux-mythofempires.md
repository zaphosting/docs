---
id: vserver-linux-mythofempires
title: "VPS: Myth of Empires Dedicated Server Linux Setup"
description: "Entdecke, wie du den Myth of Empires Dedicated Server auf deinem Linux VPS installierst und betreibst für nahtloses Server mieten → Jetzt mehr erfahren"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den Myth of Empires Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung an.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dazu unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine Kompatibilitätsschicht
Myth of Empires bietet aktuell keinen nativen Linux-Server an, daher ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server direkt über SteamCMD als `steam` User. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Sei geduldig, der Download kann bei größeren Spielen eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Myth of Empires Servers abgeschlossen. Weitere Einstellungen kannst du über verschiedene Konfigurationsdateien im Server-Verzeichnis vornehmen.

Alle Konfigurationsparameter findest du in `.ini` Dateien im Saved-Ordner. Mit dem Befehl `ls` kannst du dir die Dateien anzeigen lassen.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Um eine Datei zu bearbeiten, nutze einfach `nano ./[Dateiname].ini`, um den Nano-Editor zu öffnen.

Sieh dir unsere Myth of Empires [Server Konfiguration](moe-configuration.md) Anleitung an, um alle verfügbaren Serveroptionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und starte die **MOEServer.exe** mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine-Kompatibilitätsschicht zu starten.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Im Terminal solltest du nun Logs sehen, die den erfolgreichen Start anzeigen. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Verbinde dich dann direkt über den **Custom Server** Tab mit `[deine_ip_adresse]:15636`.

## Fazit

Glückwunsch, du hast den Myth of Empires Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Setup Linux Service](vserver-linux-create-gameservice.md) Anleitung. Damit richtest du deinen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />