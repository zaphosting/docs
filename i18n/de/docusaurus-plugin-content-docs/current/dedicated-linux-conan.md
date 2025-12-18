---
id: dedicated-linux-conan
title: "Dedicated Server: Conan Exiles Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Conan Exiles Dedicated Server auf Linux für nahtloses Gameplay-Hosting und Management einrichtest → Jetzt mehr erfahren"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Linux Dedicated Server und möchtest den Conan Exiles Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? So richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung an.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du eine Erstkonfiguration durchführen. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
Conan Exiles bietet aktuell keinen nativen Linux-Server-Build an, deshalb ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](dedicated-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam`-User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server direkt über SteamCMD als `steam`-User. Mit dem Parameter `+@sSteamCmdForcePlatformType windows` stellst du sicher, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Conan Exiles Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Server-Verzeichnis vornehmen.

Alle Konfigurationsparameter findest und änderst du in der Datei **WindowsServerEngine.ini** im folgenden Verzeichnis:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Du kannst Optionen hinzufügen, indem du bestimmte Parameter einfügst. Zum Beispiel, um einen Servernamen, ein Passwort und ein Admin-Passwort zu setzen, fügst du Folgendes ein:
```
[OnlineSubsystem]
ServerName=[dein_servername]
ServerPassword=[dein_passwort]

[ServerSettings]
AdminPassword=[dein_adminpasswort]
```

Wir empfehlen dir, die [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) für eine umfassende Liste aller verfügbaren Optionen zu checken.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptspielverzeichnis und führe die Datei **ConanSandboxServer.exe** mit folgendem Befehl aus. Wichtig: Nutze **xvfb-run** und **wine64**, um den Server über die Wine-Kompatibilitätsschicht zu starten.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Im Terminal solltest du jetzt viele Logs sehen, die anzeigen, dass der Server hochfährt. Verbinde dich direkt, indem du den Server in der Serverliste suchst oder direkt mit `[deine_ip_adresse]:7777` connectest.

## Fazit

Glückwunsch, du hast deinen Conan Exiles Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!