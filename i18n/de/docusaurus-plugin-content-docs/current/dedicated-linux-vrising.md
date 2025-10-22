---
id: dedicated-linux-vrising
title: "Dedicated Server: V-Rising Dedicated Server Linux Setup"
description: "Entdecke, wie du den V-Rising Dedicated Server auf Linux für nahtloses Server mieten und Management einrichtest → Jetzt mehr erfahren"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den V-Rising Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? So richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, nutze unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux Server nutzt, musst du es erstmal einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
V-Rising bietet aktuell keinen nativen Linux-Server-Build an, daher ist ein zusätzlicher Schritt nötig, um die Windows-Server-Version auf Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du sie noch nicht auf deinem Linux Server hast. Nutze unsere schnelle [Wine Compatibility Layer Setup](dedicated-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich als `steam` Nutzer an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um die Windows-Binaries direkt im Verzeichnis `/home/steam/V-Rising-Server` zu installieren. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Version installiert wird.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines V-Rising Servers abgeschlossen. Weitere Server-Einstellungen kannst du direkt in den Startdateien vornehmen.

Alle Konfigurationsparameter findest du in den Dateien **ServerGameSettings.json** und **ServerHostSettings.json** im Settings-Ordner. Diese kannst du mit einem Editor wie nano bearbeiten:
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Schau dir auch unsere V-Rising [Server Konfiguration](vrising-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptverzeichnis des Spiels und erstelle am besten eine Kopie der Beispiel-Startdatei.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Du kannst die Datei nach Wunsch anpassen. Wenn du bereit bist, starte die neue **start_server.bat** Datei mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um die Windows-Version über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Im Terminal solltest du jetzt Logs sehen, die bestätigen, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten in der Suchleiste `[deine_ip_adresse]:8211` eingibst.

## Fazit

Glückwunsch, du hast den V-Rising Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />