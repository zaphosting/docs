---
id: dedicated-linux-mythofempires
title: "Dedicated Server: Myth of Empires Dedicated Server Linux Setup"
description: "Entdecke, wie du den Myth of Empires Dedicated Server auf Linux installierst und dein Game Server Hosting optimierst → Jetzt mehr erfahren"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den Myth of Empires Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Game Server Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zur [GS/TS3 Interface findest du hier](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau dir unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung an.

Falls du SteamCMD zum ersten Mal auf deinem Linux Server nutzt, musst du es erstmal einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD komplett eingerichtet ist, bevor du weitermachst.

:::info Wine Kompatibilitätsschicht
Myth of Empires bietet aktuell keinen nativen Linux-Server Build an. Deshalb ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version auf Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](dedicated-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um die Windows-Binaries zu installieren – dank des Parameters `+@sSteamCmdForcePlatformType windows` wird das erzwungen.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Hab Geduld, der Download kann je nach Größe des Spiels etwas dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Myth of Empires Servers abgeschlossen. Weitere Einstellungen kannst du über verschiedene Konfigurationsdateien im Serververzeichnis vornehmen.

Alle Konfigurationsparameter findest du in `.ini` Dateien im Saved-Ordner. Mit dem Befehl `ls` kannst du dir die Dateien anzeigen lassen.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Um eine Datei zu bearbeiten, nutze einfach `nano ./[dateiname].ini`, um den Nano Editor zu öffnen.

Schau dir unsere Myth of Empires [Server Konfiguration](moe-configuration.md) Anleitung an, um alle verfügbaren Serveroptionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptspielverzeichnis und starte die **MOEServer.exe** mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um die Windows-Version über die Wine Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Im Terminal solltest du jetzt Logs sehen, die bestätigen, dass der Server erfolgreich gestartet ist. Beim ersten Start kann es etwas dauern, bis alles eingerichtet ist. Verbinde dich dann direkt über den **Custom Server** Tab mit `[deine_ip_adresse]:15636`.

## Fazit

Glückwunsch, du hast den Myth of Empires Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächstes empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und mehr!

Falls du noch Fragen hast oder Probleme auftreten, steht dir unser Support Team täglich zur Seite!