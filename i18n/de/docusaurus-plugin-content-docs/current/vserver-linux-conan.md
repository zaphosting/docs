---
id: vserver-linux-conan
title: "vServer: Conan Exiles Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Conan Exiles Dedicated Server auf deinem Linux VPS mit SteamCMD und Wine zum Laufen bringst → Jetzt mehr erfahren"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Linux VPS und willst darauf den Conan Exiles Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Ablauf ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zum [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung an.

Wenn du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du es einmalig einrichten. Nutze dafür unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD komplett eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
Conan Exiles bietet aktuell keinen nativen Linux-Server, deshalb ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung hilft dir dabei.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Starte dann die Installation mit folgendem Befehl, der SteamCMD nutzt, um die Windows-Version des Servers direkt im Verzeichnis `/home/steam/Conan-Server` zu installieren. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Sei geduldig, der Download kann bei größeren Spielen etwas dauern. Wenn alles erfolgreich war, bekommst du eine Bestätigung angezeigt.

## Konfiguration

Jetzt ist die Grundinstallation deines Conan Exiles Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Server-Verzeichnis vornehmen.

Alle Konfigurationsparameter findest und änderst du in der Datei **WindowsServerEngine.ini** im folgenden Pfad:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Du kannst z.B. Servername, Passwort und Admin-Passwort so hinzufügen:
```
[OnlineSubsystem]
ServerName=[dein_servername]
ServerPassword=[dein_passwort]

[ServerSettings]
AdminPassword=[dein_adminpasswort]
```

Für eine ausführliche Liste aller Optionen empfehlen wir dir die [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration).

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis des Spiels wechselst und die Datei **ConanSandboxServer.exe** mit folgendem Befehl ausführst. Nutze dabei **xvfb-run** und **wine64**, um den Server über die Wine-Kompatibilitätsschicht zu starten.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Im Terminal solltest du viele Logs sehen, die anzeigen, dass der Server hochfährt. Verbinde dich dann direkt, indem du den Server in der Serverliste suchst oder direkt mit `[deine_ip_adresse]:7777` connectest.

## Fazit

Glückwunsch, du hast deinen Conan Exiles Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Damit richtest du deinen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und mehr!

Falls du noch Fragen hast oder Probleme auftreten, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />