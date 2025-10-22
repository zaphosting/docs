---
id: dedicated-linux-arksurvivalascended
title: "Dedicated Server: ARK Survival Ascended Dedicated Server Linux Setup"
description: "Entdecke, wie du einen ARK: Survival Ascended Dedicated Server auf Linux einrichtest für nahtloses Gameplay und einfache Serververwaltung → Jetzt mehr erfahren"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den ARK: Survival Ascended Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zum [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau dir unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung an.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD komplett eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
ARK: Survival Ascended bietet aktuell keinen nativen Linux-Server-Build an. Deshalb ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version auf Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Unsere schnelle [Wine Kompatibilitätsschicht Setup](dedicated-linux-wine.md) Anleitung hilft dir dabei.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server direkt über SteamCMD als `steam` User.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Sei geduldig, der Download kann bei größeren Spielen etwas dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines ARK: Survival Ascended Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Alle Konfigurationsparameter findest und änderst du in der **GameUserSettings.ini** Datei im Saved-Ordner.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Schau dir unsere [ARK: Survival Ascended Server Konfiguration](ark-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und starte die **ArkAscendedServer.exe** mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Leider kannst du die Anti-Cheat Battleye-Version des Servers nicht auf Linux laufen lassen, da der Anti-Cheat nicht kompatibel ist.
:::

Im Terminal solltest du jetzt Logs sehen, die bestätigen, dass der Server erfolgreich gestartet ist. Der erste Start kann etwas länger dauern, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:7777` eingibst.

## Fazit

Glückwunsch, du hast deinen ARK: Survival Ascended Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und mehr!

Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />