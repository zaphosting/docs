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
Du hast einen Linux Dedicated Server und möchtest den Myth of Empires Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Schnittstelle** direkt auf deinem Dedicated Server installieren kannst? So richtest du Game Server Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zur [GS/TS3 Schnittstelle hier](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du eine Erstkonfiguration durchführen. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine Kompatibilitätsschicht
Myth of Empires bietet aktuell keinen nativen Linux-Server-Build an, daher ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version auf Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](dedicated-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als erstes als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server bequem über SteamCMD direkt als `steam` User. Mit dem Parameter `+@sSteamCmdForcePlatformType windows` stellst du sicher, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Hab bitte etwas Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Myth of Empires Servers abgeschlossen. Weitere Server-Einstellungen kannst du über verschiedene Konfigurationsdateien im Server-Verzeichnis vornehmen.

Alle Konfigurationsparameter findest du in `.ini` Dateien im Saved-Ordner. Mit dem Befehl `ls` kannst du dir die Dateien anzeigen lassen.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Um eine Datei zu bearbeiten, öffne sie einfach mit `nano ./[dateiname].ini` im Nano-Editor.

Schau dir unsere Myth of Empires [Server Konfiguration](moe-configuration.md) Anleitung an, um alle verfügbaren Serveroptionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptspielverzeichnis und führe die **MOEServer.exe** mit folgendem Befehl aus. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine-Kompatibilitätsschicht zu starten.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Im Terminal solltest du nun Logs sehen, die bestätigen, dass der Server erfolgreich gestartet ist. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Verbinde dich direkt, indem du im **Custom Server** Tab nach deinem Server suchst: `[deine_ip_adresse]:15636`.

## Fazit

Glückwunsch, du hast den Myth of Empires Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du noch Fragen hast oder Probleme auftreten, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />