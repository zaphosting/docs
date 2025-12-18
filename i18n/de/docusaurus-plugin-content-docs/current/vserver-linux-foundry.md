---
id: vserver-linux-foundry
title: "vServer: Foundry Dedicated Server Linux Setup"
description: "Entdecke, wie du den Foundry Dedicated Server auf deinem Linux VPS installierst für nahtloses Gameserver Hosting und Management → Jetzt mehr erfahren"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den Foundry Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [SSH Ersteinrichtung](vserver-linux-ssh.md) Anleitung an.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine Kompatibilitätsschicht
Foundry bietet aktuell keinen nativen Linux-Server-Build an, deshalb ist ein zusätzlicher Schritt nötig, um die Windows-Version auf Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit installierst du den Server direkt über SteamCMD als `steam` User. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Bitte hab Geduld, der Download kann bei größeren Spielen etwas dauern. Sobald alles fertig ist, erscheint eine Erfolgsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Foundry Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Server-Verzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der **app.cfg** Datei im Hauptverzeichnis anpassen.
```
nano /home/steam/Foundry-Server/app.cfg
```

Sieh dir unsere Foundry [Server Konfiguration](foundry-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Starten deines Servers. Wechsle ins Hauptverzeichnis des Spiels und starte die ausführbare Datei **FoundryDedicatedServerLauncher.exe** mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine Kompatibilitätsschicht laufen zu lassen.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Im Terminal solltest du jetzt Logs sehen, die bestätigen, dass der Server erfolgreich gestartet ist. Wenn alles läuft, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten in der Suchleiste `[deine_ip_adresse]:3724` eingibst.

## Fazit

Glückwunsch, du hast den Foundry Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />